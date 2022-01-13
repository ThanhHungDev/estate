<?php

namespace App\Jobs;

use App\Helpers\SupportString;
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
use PHPHtmlParser\Dom;

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

        $job = (new QueueCrawlerProduct($this->category, $user->toArray(), $linkprod, $title))
                        ->delay(Carbon::now()->addSeconds(5))
                        ->onQueue('product');
        dispatch($job);
        echo "Đã dispatch job product vào hệ thống với title là \n ===>>>> $title \n";
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
                echo "đã tạo mới $user->name\n";
                DB::commit();
            } catch (\Throwable $th) {
                echo $th->getMessage() . "\n";
                echo "tọa mới bị lỗi\n" . $object['email'];
                DB::rollback();
            }
        }else{
            echo " không tạo mới user $user->name\n";
        }
        return $user;
    }
}
