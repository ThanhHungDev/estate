<?php

namespace App\Jobs;

use App\Helpers\SupportString;
use App\Models\Picture;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\File;
use PHPHtmlParser\Dom;
use PHPHtmlParser\Dom\Node\HtmlNode;
use stdClass;

class QueueCrawlerProduct implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $category;
    protected $user;
    protected $linkprod;
    protected $title;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($category, $user, $linkprod, $title)
    {
        $this->category = $category;
        $this->user = $user;
        $this->linkprod = $linkprod;
        $this->title = $title;
    }




    private function crawlerImage($imgwrappers): Array{
        $imgSrcs = [];
        foreach($imgwrappers as $wrapper ){
            $img = $wrapper->find('img')[0];
            $src = $img->getAttribute('data-url');
            if(!trim($src)) $src = $img->getAttribute('src');
            $imgStd = new stdClass;
            $imgStd->url = $src;
            $imgStd->alt = $img->getAttribute('alt');
            $imgStd->title = $img->getAttribute('title');
            $imgSrcs[] = $imgStd;
        }
        
        if( count($imgSrcs ) ){
            $publicPath = '/cvt';
            return $this->multipleDownload($imgSrcs, $publicPath);
        }
        // nếu bài đăng không có image thì lấy tạm image mặc định 
        $default = new stdClass;
        $default->url   = '/img/imagenotfound.jpg';
        $default->alt   = 'imagenotfound';
        $default->title = 'imagenotfound';
        $default->link  = '/img/imagenotfound.jpg';
        return [ $default ];
    }
    private function multipleDownload(array $images, $publicPath = '/tmp') {

        
        $savedDir = public_path($publicPath);
        
        if(!File::isDirectory($savedDir)){

            File::makeDirectory($savedDir, 0755, true, true);
        }
        $multi_handle = curl_multi_init();
        $file_pointers = [];
        $curl_handles = [];
        // Add curl multi handles, one per file we don't already have
        foreach ($images as $key => $image) {
            $image->url = preg_replace('/^(http:\/\/|https:\/\/)(.+)(http:\/\/|https:\/\/)(.+)/i', '$1$4', $image->url);
            $image->basename = basename($image->url); /// basename là tên file edit lại để lất extention
            if (preg_match('/^https:\/\/cvt.vn\/(.+).(\d+)\/$/i', strtolower($image->url))){
                /// nếu image của cvt thì có dạng đặc biệt ví dụ: https://cvt.vn/threads/tex-pro-liquid-men-tieu-hoa-dang-nuoc-cho-tom-ca.1037624/
                /// nên sẽ lấy link là alt hoặc title gắn tạm vào
                $image->basename = basename($image->alt);
                
            }
            if (!pathinfo(strtolower($image->basename), PATHINFO_EXTENSION)) $image->basename .= ".jpeg";
            if(strpos($image->basename, "?") !== false) $image->basename = preg_replace('/\?.*/', '', $image->basename);
            $image->link = $publicPath . '/' . $image->basename;
            $file        = $savedDir . '/' . $image->basename;
            /// check file exist
            if(File::isFile($file)){
                // remove file
                File::delete($file);
            }
            echo "Download image root : $image->url parse basename to : $image->basename \n";
            $curl_handles[$key] = curl_init($image->url);
            $file_pointers[$key] = fopen($file, "w");
            curl_setopt($curl_handles[$key], CURLOPT_FILE, $file_pointers[$key]);
            curl_setopt($curl_handles[$key], CURLOPT_HEADER, 0);
            curl_setopt($curl_handles[$key], CURLOPT_CONNECTTIMEOUT, 30);
            curl_multi_add_handle($multi_handle,$curl_handles[$key]);
        }
        // Download the files
        do {
            curl_multi_exec($multi_handle,$running);
        } while ($running > 0);
        // Free up objects
        foreach ($images as $key => $image) {
            curl_multi_remove_handle($multi_handle, $curl_handles[$key]);
            curl_close($curl_handles[$key]);
            fclose ($file_pointers[$key]);
        }
        curl_multi_close($multi_handle);
        return $images;
    }

    public function handle(){
        try {
            $this->handleCrawlerProduct();
        } catch (\Throwable $th) {
            echo "+++++++++++ Có lỗi to đùng nè " . $th->getMessage() . "\n";
            return null;
        }
    }
    /**
     * Execute the job.
     *
     * @return void
     */
    public function handleCrawlerProduct()
    {

        // check product tồn  tại chưa
        $isExisted = Product::where('fetch_link', '=', $this->linkprod )->first();
        if( !!$isExisted ){
            echo "=>>>>>>>>>>>>>>> Cảnh báo không crawler product vì đã trùng \n";
            return null;
        } else if( strpos($this->linkprod, "threads/") === false ){
            echo "=>>>>>>>>>>>>>>> Cảnh báo không crawler product vì đã quét nhầm link $this->linkprod \n";
            return null;
        }

        $domprod = new Dom;
        $domprod->loadFromUrl($this->category['domain'] . $this->linkprod);
        
        echo $this->category['domain'] . $this->linkprod . "\n";


        $imgwrappers = $domprod->find('.bbImageWrapper');
        try {
            $images = $this->crawlerImage($imgwrappers);
        } catch (\Throwable $th) {
            echo "=>>>>>>>>>>>>>>> Cảnh báo không crawler product vì download ảnh lỗi $this->linkprod \n";
            return null;
        }
        // thay thế image div cũ thành image dom mới
        foreach($imgwrappers as $key => $wrapper ){
            $tag = new \PHPHtmlParser\Dom\Tag('img');
            $tag->setAttribute('src', $images[$key]->link);
            /// download img về máy bằng queue
            $tag->setAttribute('alt', $images[$key]->alt);
            $tag->setAttribute('class', "dummy__data--image");
            $tag->setAttribute('title', $images[$key]->title);
            $tag->selfClosing();
            $html = new HtmlNode($tag);
            // $wrapper->getParent()->replaceChild($wrapper->id(), $html);
            $wrapper->replaceChild($wrapper->find('img')->id(), $html);
            $wrapper->setAttribute('class', "dummy__data--wrapper");
            $wrapper->setAttribute('title', "");
            $wrapper->setAttribute('data-src', "");
        }

        /// sau khi thay thế image thì lấy content ra 
        $wrapper = $domprod->find('.bbWrapper');
        if( !count($wrapper) ) return null;
        $content = $wrapper[0]->innerHtml;


        $productInput['user_id']         = $this->user['id'];
        $productInput['category_id']     = $this->category['parent'];
        $productInput['title']           = $this->title;
        $productInput['excerpt']         = $this->title;
        $productInput['slug']            = SupportString::createSlug($this->title);
        $productInput['content']         = SupportString::createEmoji(mb_convert_encoding($content,'UTF-8'));
        $productInput['fetch_link']      = $this->linkprod;
        $productInput['text_content']    = SupportString::cleanText($content);
        $productInput['description_seo'] = SupportString::createDescription($this->title, $content);

        $domtime = $domprod->find(".p-body-header .u-concealed .u-dt");
        if(count($domtime)){
            $time = $domtime[0]->getAttribute('datetime');
            $productInput['created_at'] = Carbon::parse($time);
            $productInput['updated_at'] = Carbon::parse($time);
        }
        
        $productInput['background'] = $images[0]->link;
        $productInput['thumbnail']  = $images[0]->link;
        try {
            // create
            $production = Product::create($productInput);
        } catch (\Throwable $th) {
            echo "========> đã insert product mắc lỗi " . $th->getMessage() . " \n";
            return null;
        }

        $pics = [];
        foreach ($images as $img) {
            $pics[] = [
                'src'     => $img->link,
                'alt'     => SupportString::limitText($img->alt . $productInput['title'], 255, ''),
                'key'     => $production->id,
                'title'   => SupportString::limitText($img->title . $productInput['title'], 255, ''),
                'gallery' => Config::get("constant.GALARIES.PRODUCT")
            ];
        }
        //
        Picture::where('key', $production->id)->where( 'gallery', Config::get("constant.GALARIES.PRODUCT") )->delete();
        Picture::insert($pics);
    }
}
