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
        $categories = [
                [
                    'name' => "Căn hộ chung cư",
                    'background' => '/images/categories/can-ho-chung-cu.jpeg'
                ],
                [
                    'name' => "Nhà riêng",
                    'background' => '/images/categories/nha-rieng.jpeg'
                ],
                [
                    'name' => "Nhà biệt thự, liền kề",
                    'background' => '/images/categories/biet-thu.jpeg'
                ],
                [
                    'name' => "Nhà mặt phố",
                    'background' => '/images/categories/nha-pho.jpeg'
                ],
                [
                    'name' => "Đất nền dự án",
                    'background' => '/images/categories/dat-nen-phan-lo.jpeg'
                ],
                [
                    'name' => "Bán đất",
                    'background' => '/images/categories/ban-dat.jpeg'
                ],
                [
                    'name' => "Trang trại, khu nghỉ dưỡng",
                    'background' => '/images/categories/trai.jpeg'
                ],
                [
                    'name' => "Kho, nhà xưởng",
                    'background' => '/images/categories/kho-xuong.jpeg'
                ],
                [
                    'name' => "Phòng trọ",
                    'background' => '/images/categories/phong-tro.jpeg'
                ],
                [ 
                    'name' => "Văn Phòng",
                    'background' => '/images/categories/van-phong.jpeg'
                ],
                [
                    'name' => "Mặt bằng kinh doanh",
                    'background' => '/images/categories/mat-bang-kinh-doanh-mat-tien.jpeg'
                ],
                [
                    'name' => "Bất động sản khác",
                    'background' => '/images/categories/bat-dong-san-khac.jpeg'
                ],
            ];
        $reversed = array_reverse( $categories );
        $inserts = [];
        foreach( $reversed as $key => $value ){
         
            $value['slug']       = SupportString::createSlug($value['name']);
            $value['thumbnail']  = $value['background'];
            $value['created_at'] = date('Y-m-d H:i:s');
            $value['updated_at'] = date('Y-m-d H:i:s');

            $inserts[] = $value;
        }
        DB::table('categories')->insert($inserts);
    }
}
