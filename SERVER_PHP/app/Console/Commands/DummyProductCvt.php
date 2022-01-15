<?php

namespace App\Console\Commands;

use App\Models\District;
use App\Models\Product;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class DummyProductCvt extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'dummy:product';

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
        $products = Product::select([ 'user_id', 
                                        'category_id', 
                                        'title',
                                        'slug',
                                        'content',
                                        'fetch_link',
                                        'text_content',
                                        'description_seo',
                                        'created_at',
                                        'updated_at',
                                        'background',
                                        'thumbnail',
                                        ])
                                        ->whereNotNull('fetch_link')
                                ->get()->toArray();
        Storage::disk('config')->delete('dummyproduct.php');
        $hugn = var_export($products, true) ;
        Storage::disk('config')->put('dummyproduct.php', "<?php return $hugn;");
        dd( "chạy data product cvt");
    }
}
