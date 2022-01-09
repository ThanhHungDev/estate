<?php

namespace App\Console\Commands;

use App\Models\Category;
use App\Models\CrawlerCategory;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Config;
use PHPHtmlParser\Dom;

class CrawlerCategoriesCvtChild extends Command
{
    private $ROOT = 'https://cvt.vn/';
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:crawler-categories-child';

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
        $categories = CrawlerCategory::whereNotNull('fetch_link')->where('fetched', '=', 0)->get();
        foreach($categories as $cate){
            $dom = new Dom;
            $dom->loadFromUrl($this->ROOT . $cate->fetch_link);
            /// find max url 
            $this->info( $this->signature . "\n get html from url " . $cate->fetch_link);
            $cate->content = $dom->outerHtml;
            $cate->fetched = 1;
            $cate->save();
        }
        $this->info( $this->signature . "\n done! end program!!!");
    }
}
