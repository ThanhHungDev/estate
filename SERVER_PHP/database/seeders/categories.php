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
                [ 'id' => 1, 'title' => "Căn hộ chung cư", 'slug'  => SupportString::createSlug("Căn hộ chung cư") ],
                [ 'id' => 2, 'title' => "Nhà riêng", 'slug'  => SupportString::createSlug("Nhà riêng") ],
                [ 'id' => 3, 'title' => "Nhà biệt thự, liền kề", 'slug'  => SupportString::createSlug("Nhà biệt thự, liền kề") ],
                [ 'id' => 4, 'title' => "Nhà mặt phố", 'slug'  => SupportString::createSlug("Nhà mặt phố") ],
                [ 'id' => 5, 'title' => "Đất nền dự án", 'slug'  => SupportString::createSlug("Đất nền dự án") ],
                [ 'id' => 6, 'title' => "Bán đất", 'slug'  => SupportString::createSlug("Bán đất") ],
                [ 'id' => 7, 'title' => "Trang trại, khu nghỉ dưỡng", 'slug'  => SupportString::createSlug("Trang trại, khu nghỉ dưỡng") ],
                [ 'id' => 8, 'title' => "Kho, nhà xưởng", 'slug'  => SupportString::createSlug("Kho, nhà xưởng") ],
                [ 'id' => 9, 'title' => "Bất động sản khác", 'slug'  => SupportString::createSlug("Bất động sản khác") ]
            ]
        );
    }
}
