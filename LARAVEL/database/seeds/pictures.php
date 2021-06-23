<?php

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
                    'key'     => SupportString::createSlug("home page mua bán"),
                    'gallery' => Config::get('image.GALARIES.default')
                ],
                [
                    'id'      => 2,
                    'src'     => "/images/home/rent.png",
                    'alt'     => "Thuê, cho thuê nhà đất",
                    'key'     => SupportString::createSlug("home page Thuê cho thuê nhà đất"),
                    'gallery' => Config::get('image.GALARIES.default')
                ],
                [
                    'id'      => 3,
                    'src'     => "/images/home/hand.png",
                    'alt'     => "sang nhượng",
                    'key'     => SupportString::createSlug("home page sang nhượng"),
                    'gallery' => Config::get('image.GALARIES.default')
                ],
            ]
        );
    }
}
