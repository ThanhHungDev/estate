<?php

namespace App\Console\Commands;

use App\Helpers\SupportString;
use App\Jobs\QueueCrawlerCategory;
use App\Models\Category;
use App\Models\CrawlerCategory;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Config;
use PHPHtmlParser\Dom;

class CrawlerCategories extends Command
{
    private $MAX_CHILD = 4;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:cvt';

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
        // cập nhật data cho 1 category
        $this->crawlerCalegoryParent();
        // crawler data cho page category child
        $this->crawlerCategoryChild();
    }

    private function crawlerCategoryChild(){

        // mặc định sẽ có nhiều category child của cvt đang chờ đọc dữ liệu mới
        $categories = Category::where('parent', '!=', Config::get('constant.CATEGORY__PARENT'))
                                    ->where('domain', '=', Config::get('crawler.CVT'))
                                    ->get();
        foreach($categories as $cate){
            $this->info( "Get html from child category url " . $cate->domain . $cate->fetch_link);
            $dom = new Dom;
            $dom->loadFromUrl($cate->domain . $cate->fetch_link);

            $prods = $dom->find('.structItemContainer');
            $content = ($prods[0])->innerHtml;
            $cate->content         = $content;
            $cate->description_seo = $cate->name;
            $cate->image_seo       = $cate->background;        // hay thumbnail đều được
            $cate->site_name       = $cate->name;
            $cate->excerpt         = $cate->name;
            $cate->save();
            // save xong thì đẩy vào dispatch
            if( !count($dom->find('.block-outer--after .js-pageJumpPage')) ) continue;
            /// detect min max
            $min = $dom->find('.block-outer--after .js-pageJumpPage')[0]->getAttribute('min');
            $max = $dom->find('.block-outer--after .js-pageJumpPage')[0]->getAttribute('max');
            $max = $max > $this->MAX_CHILD ? $this->MAX_CHILD : $max;
            // end detect min max
            if( !count($dom->find('.block-outer--after .menu-row')) ) continue;
            $link = str_replace("%page%", "", $dom->find('.block-outer--after .menu-row')[0]->getAttribute('data-page-url'));
            /// tạo mới max dường dẫn vào crawler categories table
            for ( $i = (int)$min; $i <= (int)$max; $i++ ) {
                $catetory = new Category();
                $catetory->fetch_link = $link.$i;
                $catetory->domain     = Config::get('crawler.CVT');
                $catetory->parent     = $cate->id;
                $data = $catetory->toArray();
                $job = (new QueueCrawlerCategory($data))
                        ->delay(Carbon::now()->addSeconds(5))
                        ->onQueue('category');
                dispatch($job);
            }
        }
        $this->info( $this->signature . "\n done! end program!!!");
    }

    private function crawlerCalegoryParent(){

        // mặc định sẽ có nhiều category parent của cvt đang chờ đọc dữ liệu mới
        $parents = Category::where('parent', '=', Config::get('constant.CATEGORY__PARENT'))
                                ->where('domain', '=', Config::get('crawler.CVT'))
                                ->get();
        foreach( $parents as $cate ){
            $this->info( "Get html from parent category url " . $cate->domain . $cate->fetch_link);
            $dom = new Dom;
            $dom->loadFromUrl($cate->domain . $cate->fetch_link);
            // find max url
            $description = $dom->find('.p-description');
            $content = $cate->name;
            if(count($description)) $content = $description[0]->innerHtml;
            $cate->description_seo = SupportString::limitText(SupportString::cleanText($content), 255, '');
            $cate->image_seo       = $cate->background;                                                      // hay thumbnail đều được
            $cate->site_name       = $cate->name;
            $cate->content         = $content;
            $cate->excerpt         = $cate->name; // SupportString::limitText(SupportString::cleanText($content), 255, '');
            $cate->save();
        }
        $this->info("đã cập nhật dữ liệu content, image, url cho 1 ctegory parent!!!");
    }
}
