<?php

namespace Database\Seeders;

use App\Helpers\SupportString;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class dummy extends Seeder
{

    public function run()
    {
        $users = Config::get('dummyuser');
        $dusers = [];
        foreach($users as $user ){
            $user['password'] = bcrypt(env('PASSWORD_USER_CRAWLER') . $user['name']);
            $dusers[] = $user;
        }
        DB::table('users')->insert($dusers);
        DB::table('pictures')->insert(Config::get('dummyimage'));
        // $products = Config::get('dummyproduct');
        // $dproducts = [];
        // foreach($products as $product ){
        //     $product['excerpt'] = $product['description_seo'];
        //     $dproducts[] = $product;
        // }
        // DB::table('products')->insert($dproducts);
    }
}
