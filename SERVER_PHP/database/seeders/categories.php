<?php

namespace Database\Seeders;

use App\Helpers\SupportString;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class categories extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('categories')->insert(
            [
                [ 
                    'id' => 1, 
                    'title' => "Căn hộ chung cư", 'slug'  => SupportString::createSlug("Căn hộ chung cư"),
                    'background' => '/images/categories/can-ho-chung-cu.jpeg'
                ],
                [ 
                    'id' => 2, 
                    'title' => "Nhà riêng", 'slug'  => SupportString::createSlug("Nhà riêng"),
                    'background' => '/images/categories/nha-rieng.jpeg'
                ],
                [ 
                    'id' => 3, 
                    'title' => "Nhà biệt thự, liền kề", 'slug'  => SupportString::createSlug("Nhà biệt thự, liền kề"),
                    'background' => '/images/categories/biet-thu.jpeg'
                ],
                [ 
                    'id' => 4, 
                    'title' => "Nhà mặt phố", 'slug'  => SupportString::createSlug("Nhà mặt phố"),
                    'background' => '/images/categories/nha-pho.jpeg'
                ],
                [ 
                    'id' => 5, 
                    'title' => "Đất nền dự án", 'slug'  => SupportString::createSlug("Đất nền dự án"),
                    'background' => '/images/categories/dat-nen-phan-lo.jpeg'
                ],
                [ 
                    'id' => 6, 
                    'title' => "Bán đất", 'slug'  => SupportString::createSlug("Bán đất"),
                    'background' => '/images/categories/ban-dat.jpeg'
                ],
                [ 
                    'id' => 7, 
                    'title' => "Trang trại, khu nghỉ dưỡng", 'slug'  => SupportString::createSlug("Trang trại, khu nghỉ dưỡng"),
                    'background' => '/images/categories/trai.jpeg'
                ],
                [ 
                    'id' => 8, 
                    'title' => "Kho, nhà xưởng", 'slug'  => SupportString::createSlug("Kho, nhà xưởng"),
                    'background' => '/images/categories/kho-xuong.jpeg'
                ],
                [ 
                    'id' => 9, 
                    'title' => "Phòng trọ", 'slug'  => SupportString::createSlug("Phòng trọ"),
                    'background' => '/images/categories/phong-tro.jpeg'
                ],
                [ 
                    'id' => 10, 
                    'title' => "Văn Phòng", 'slug'  => SupportString::createSlug("Văn Phòng"),
                    'background' => '/images/categories/van-phong.jpeg'
                ],
                [ 
                    'id' => 11, 
                    'title' => "Mặt bằng kinh doanh", 'slug'  => SupportString::createSlug("Mặt bằng kinh doanh"),
                    'background' => '/images/categories/mat-bang-kinh-doanh-mat-tien.jpeg'
                ],
                [ 
                    'id' => 12, 
                    'title' => "Bất động sản khác", 'slug'  => SupportString::createSlug("Bất động sản khác"),
                    'background' => '/images/categories/bat-dong-san-khac.jpeg'
                ],
            ]
        );
    }
}
