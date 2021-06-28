<?php

namespace Database\Seeders;

use App\Helpers\SupportString;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class pictures extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        DB::table('pictures')->insert(
            [
                [
                    'id'      => 1,
                    'src'     => "/images/home/byer.png",
                    'alt'     => 'Mua bán nhà đất',
                    'key'     => 1,
                    'gallery' => Config::get('constant.GALARIES.DEFAULT')
                ],
                [
                    'id'      => 2,
                    'src'     => "/images/home/rent.png",
                    'alt'     => "Thuê, cho thuê nhà đất",
                    'key'     => 1,
                    'gallery' => Config::get('constant.GALARIES.DEFAULT')
                ],
                [
                    'id'      => 3,
                    'src'     => "/images/home/hand.png",
                    'alt'     => "sang nhượng",
                    'key'     => 1,
                    'gallery' => Config::get('constant.GALARIES.DEFAULT')
                ],
            ]
        );
    }
}
