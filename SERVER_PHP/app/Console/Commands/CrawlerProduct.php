<?php

namespace App\Console\Commands;

use App\Models\Category;
use App\Models\CrawlerCategory;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Config;
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
        $this->info( $this->signature . "\n done! end program!!!");
    }
}
