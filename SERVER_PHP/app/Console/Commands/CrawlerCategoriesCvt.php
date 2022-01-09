<?php

namespace App\Console\Commands;

use App\Models\Category;
use App\Models\CrawlerCategory;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Config;
use PHPHtmlParser\Dom;

class CrawlerCategoriesCvt extends Command
{
    private $ROOT      = 'https://cvt.vn/';
    private $MAX_CHILD = 10;
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:crawler-categories';

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
        ///
        $categories = Category::whereNotNull('fetch_link')->where('parent', '!=', Config::get('constant.CATEGORY__PARENT'))->get();
        foreach($categories as $cate){
            
            // $content = file_get_contents($this->ROOT . $cate->fetch_link);
            // $cate->content = $content;
            // $cate->save();
            $dom = new Dom;
            $dom->loadFromUrl($this->ROOT . $cate->fetch_link);
            /// find max url 
            $this->info( $this->signature . "\n get html from url " . $cate->fetch_link);
            $input = $dom->find('.block-outer--after .js-pageJumpPage')[0];
            $min = $input->getAttribute('min');
            $max = $input->getAttribute('max');
            $max = $max > $this->MAX_CHILD ? $this->MAX_CHILD : $max;
            $dơmTypelink = $dom->find('.block-outer--after .menu-row')[0];
            $typelink = $dơmTypelink->getAttribute('data-page-url');
            if (strpos($typelink, '%page%') === false){
                $this->error( $this->signature . "\n tồn tại đường link không đúng định dạng mong muốn ");
                break;
            }
            $typelink = str_replace("%page%", "", $typelink);
            /// tạo mới max dường dẫn vào crawler categories table
            for ( $i = (int)$min; $i <= (int)$max; $i++ ) { 
                CrawlerCategory::create([
                    'fetch_link' => $i == 1 ? $cate->fetch_link : $typelink . $i,
                ]);
            }

            $this->info( $this->signature . "\n get html from url $max $typelink ");
            $cate->content = $dom->outerHtml;
            $cate->fetched = 1;
            $cate->save();
        }
        $this->info( $this->signature . "\n done! end program!!!");
    }
}
