<?php

namespace App\Console\Commands;

use App\Helpers\SupportString;
use App\Models\Category;
use App\Models\CrawlerCategory;
use App\Models\Picture;
use App\Models\Product;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use PHPHtmlParser\Dom;

class CrawlerProduct extends Command
{
    private $ROOT      = 'https://cvt.vn/';
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:crawler-products';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->info( $this->signature . "detect html!!!");
        $categories = CrawlerCategory::whereNotNull('fetch_link')->where('fetched', '=', 1)->get();
        foreach($categories as $cate){
            $this->info( $cate->fetch_link . " \n");
            $dom = new Dom;
            $dom->loadStr($cate->content);
            // dd($cate->content);
            $lists = $dom->find(".js-threadList .structItem");
            foreach( $lists as $item ){
                $user = $this->crawlerUserProductItem($item);
                $htmlprod = $item->find('.structItem-title a')[0];
                $title = htmlspecialchars_decode($htmlprod->text);
                $linkprod = $htmlprod->getAttribute('href');
                // check link đã được lưu chưa? 
                /// nếu rồi thì thôi không new nữa
                $isExisted = Product::where('fetch_link', '=', $linkprod )->first();
                if( !!$isExisted ){
                    echo "đã tồn tại rồi!!!\n";
                    continue;
                }
                $domprod = new Dom;
                $domprod->loadFromUrl($this->ROOT . $linkprod);
                $wrapper = $domprod->find('.bbWrapper');
                if( !count($wrapper) ){
                    $this->info( "Không đọc được nội dung!!!\n");
                    continue;
                }
                $content = $wrapper->innerHtml;

                // find image
                $imgs = $domprod->find('img');
                foreach($imgs as $img ){
                    
                }
        
                $productInput['user_id']     = $user->id;
                $productInput['category_id'] = $cate->id;
                $productInput['title']       = $title . "--" . time();
                if(strlen($productInput['title']) > 150 ) $productInput['title'] = substr($productInput['title'], 0, 150 );
                $productInput['slug']        = SupportString::createSlug($productInput['title']);
                $productInput['content']     = SupportString::createEmoji(mb_convert_encoding($content,'UTF-8','Windows-1252'));
                $productInput['fetch_link']  = $linkprod;
                ///
                $productInput['text_content']    = SupportString::cleanText($content);
                $productInput['description_seo'] = SupportString::createDescription($title, $content);
                $domtime = $domprod->find(".p-body-header .u-concealed .u-dt");
                
                if(count($domtime)){
                    $time = $domtime[0]->getAttribute('datetime');
                    echo $time . "\n";
                    $productInput['created_at'] = Carbon::parse($time);
                    $productInput['updated_at'] = Carbon::parse($time);
                }
                
        
                $images = [
                    [ 'root' => '/img/imagenotfound.jpg']
                ];
                $firstImages = $images[0];
                $productInput['background'] = $firstImages['root'];
                $productInput['thumbnail']  = $firstImages['root'];
                //// create
                $production = Product::create($productInput);
        
                /// save image
                if( isset($images) ){
                    $pics = [];
                    foreach ($images as $key => $img) {
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
            }
            sleep(2);
        }
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
}
