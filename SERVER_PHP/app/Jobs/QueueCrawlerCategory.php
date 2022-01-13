<?php

namespace App\Jobs;

use App\Helpers\SupportString;
use App\Models\Picture;
use App\Models\Product;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use PHPHtmlParser\Dom;
use PHPHtmlParser\Dom\Node\HtmlNode;

class QueueCrawlerCategory implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;


    protected $category;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($category)
    {
        $this->category = $category;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $dom = new Dom;
        $dom->loadFromUrl($this->category['domain'] . $this->category['fetch_link']);
        // có 1 đống chùi nhùi html thì bắt đầu đọc product
        $this->loadmoreProd($dom);
    }

    private function loadmoreProd($dom){
        
        $prods = $dom->find(".js-threadList .structItem");
        foreach( $prods as $prod ){
            $this->crawlerProductItem($prod);
        }
        sleep(2);
    }

    private function crawlerProductItem($domprod){
        
        /// detect user
        $user = $this->crawlerUserProductItem($domprod);
        // get tag link product
        $tagaprod = $domprod->find('.structItem-title a')[0];
        /// get title product and link
        $title    = htmlspecialchars_decode($tagaprod->text). "--" . time();
        $title    = SupportString::limitText(SupportString::cleanText($title), 150, '');
        $linkprod = $tagaprod->getAttribute('href');
        
        // check product tồn  tại chưa
        $isExisted = Product::where('fetch_link', '=', $linkprod )->first();
        if( !!$isExisted ) return null;

        $domprod = new Dom;
        $domprod->loadFromUrl($this->category['domain'] . $linkprod);
        
        $imgSrcs = [ "https://australisvietnam.com/wp-content/uploads/2022/01/son-co-mau-tram-533x400.jpg"];
        $imgwrappers = $domprod->find('.bbImageWrapper');
        foreach($imgwrappers as $wrapper ){
            $img = $wrapper->find('img')[0];
            $src = $img->getAttribute('data-url');
            $imgSrcs[] = $src;
        }
        echo $this->category['domain'] . $linkprod . " ---- count( ) " . count($imgSrcs ) . "\n";
        if( count($imgSrcs ) ){
            $publicPath = '/cvt/';
            $images = $this->multipleDownload($imgSrcs, $publicPath);
            dd($images);
            foreach($imgwrappers as $key => $wrapper ){
                $img = $wrapper->find('img')[0];
                $src = $img->getAttribute('data-url');
                $alt = $img->getAttribute('alt');
                $title = $img->getAttribute('title');
                $tag = new \PHPHtmlParser\Dom\Tag('img');
                $tag->setAttribute('src', $images[$key]);
                /// download img về máy bằng queue
                $tag->setAttribute('alt', $alt);
                $tag->setAttribute('title', $title);
                $tag->selfClosing();
                $html = new HtmlNode($tag);
                $wrapper->getParent()->replaceChild($wrapper->id(), $html);
            }
        }


        $wrapper = $domprod->find('.bbWrapper');
        if( !count($wrapper) ) return null;

        $content = $wrapper[0]->innerHtml;

        $productInput['user_id']         = $user->id;
        $productInput['category_id']     = $this->category['parent'];
        $productInput['title']           = $title;
        $productInput['slug']            = SupportString::createSlug($title);
        $productInput['content']         = SupportString::createEmoji(mb_convert_encoding($content,'UTF-8','Windows-1252'));
        $productInput['fetch_link']      = $linkprod;
        $productInput['text_content']    = SupportString::cleanText($content);
        $productInput['description_seo'] = SupportString::createDescription($title, $content);

        $domtime = $domprod->find(".p-body-header .u-concealed .u-dt");
        if(count($domtime)){
            $time = $domtime[0]->getAttribute('datetime');
            echo $time . "\n";
            $productInput['created_at'] = Carbon::parse($time);
            $productInput['updated_at'] = Carbon::parse($time);
        }
        
        if( !isset($images)){
            $images = [
                [ 'root' => '/img/imagenotfound.jpg']
            ];
        }
        
        $firstImages = $images[0];
        $productInput['background'] = $firstImages['root'];
        $productInput['thumbnail']  = $firstImages['root'];
        //// create
        $production = Product::create($productInput);

        $pics = [];
        foreach ($images as $img) {
            $pics[] = [
                'src'     => $img['root'],
                'alt'     => $productInput['title'],
                'key'     => $production->id,
                'title'   => $productInput['title'],
                'gallery' => Config::get("constant.GALARIES.PRODUCT")
            ];
        }
        /// 
        Picture::where('key', $production->id)->where( 'gallery', Config::get("constant.GALARIES.PRODUCT") )->delete();
        Picture::insert($pics);
    }
    
    private function crawlerUserProductItem($dom){
        $userdom         = $dom->find('.structItem-cell--main .username');
        $id              = $userdom->getAttribute('data-user-id');
        $link            = $userdom->getAttribute('href');
        $username        = trim(SupportString::createLinkSlug($userdom->firstChild()));
        $email           = strtolower($username) . "@cvt.com";
        $phone           = '';
        $object = [
            'name'         => $username,
            'email'        => $email,
            'crawler_id'   => $id,
            'crawler_link' => $link,
            'avatar'       => '/images/avatar.jpg',
            'password'     => bcrypt(env('PASSWORD_USER_CRAWLER') . $username),
            'role_id'      => Config::get("constant.ROLE.USER"),
            'commune_id'   => null,
            'street'       => null,
            'home_number'  => null,
            'phone'        => $phone,
            'active'       => Config::get("constant.ACTIVITY.DEACTIVE"),
            'created_at'   => date('Y-m-d H:i:s'),
            'updated_at'   => date('Y-m-d H:i:s'),
        ];
        /// check xem user tồn tại chưa
        $user = User::where('crawler_id', '=', $id )->first();
        if( !$user ){
            try {
                DB::beginTransaction();
                $user = User::create($object);
                echo "đã tạo mới \n";
                DB::commit();
            } catch (\Throwable $th) {
                echo $th->getMessage() . "\n";
                echo "tọa mới bị lỗi\n" . $object['email'];
                DB::rollback();
            }
        }else{
            echo $user->name . " không tạo mới \n";
        }
        return $user;
    }

    private function multipleDownload(array $images, $publicPath = '/tmp') {

        
        $savedDir = public_path($publicPath);
        
        if(!File::isDirectory($savedDir)){

            File::makeDirectory($savedDir, 0755, true, true);
        }
        /// download image to storage
        $urls = array_map(function( $item ) { return $item->url; }, $images);

        $multi_handle = curl_multi_init();
        $file_pointers = [];
        $curl_handles = [];
        echo "đến đây \n";
        // Add curl multi handles, one per file we don't already have
        foreach ($urls as $key => $url) {
            $file = $savedDir . '/' . basename($url);
            $images[$key]->url = $publicPath . '/' . basename($url);
            $images[$key]->basename = basename($url);

            /// check file exist
            if(File::isFile($file)){
                // remove file
                File::delete($file);
            }
            $curl_handles[$key] = curl_init($url);
            $file_pointers[$key] = fopen($file, "w");
            curl_setopt($curl_handles[$key], CURLOPT_FILE, $file_pointers[$key]);
            curl_setopt($curl_handles[$key], CURLOPT_HEADER, 0);
            curl_setopt($curl_handles[$key], CURLOPT_CONNECTTIMEOUT, 60);
            curl_multi_add_handle($multi_handle,$curl_handles[$key]);
        }
        echo "đến đây 1 \n";
        // Download the files
        do {
            curl_multi_exec($multi_handle,$running);
        } while ($running > 0);
        echo "đến đây2  \n";
        // Free up objects
        foreach ($urls as $key => $url) {
            curl_multi_remove_handle($multi_handle, $curl_handles[$key]);
            curl_close($curl_handles[$key]);
            fclose ($file_pointers[$key]);
        }
        curl_multi_close($multi_handle);
        return $images;
    }
}
