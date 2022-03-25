<?php

namespace Database\Seeders;

use App\Helpers\SupportString;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class dummy_product extends Seeder
{

    public function run()
    {
        ini_set('memory_limit', '-1');
        $products = json_decode(Storage::disk('config')->get('/dummyproduct.json'), true);
        $products = array_chunk($products, 100);
        foreach( $products as $prod ){
            DB::table('products')->insert($prod);
        }
    }
}
