<?php

namespace Database\Seeders;

use App\Helpers\SupportString;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class topics extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('topics')->insert([
            [
                'name'            => 'Mua Căn hộ chung cư',
                'slug'            => SupportString::createSlug('Mua Căn hộ chung cư'),
                'excerpt'         => 'Mua Căn hộ chung cư',
                'thumbnail'       => null,
                'background'      => null,
                'content'         => 'Mua Căn hộ chung cư',
                'site_name'       => 'Mua Căn hộ chung cư',
                'image_seo'       => null,
                'description_seo' => 'description_seo Mua Căn hộ chung cư',
                'created_at'      => date('Y-m-d H:i:s'),
                'updated_at'      => date('Y-m-d H:i:s')
            ],
            [
                'name'            => 'Mua Nhà riêng',
                'slug'            => SupportString::createSlug('Mua Nhà riêng'),
                'excerpt'         => 'excerpt Mua Nhà riêng',
                'thumbnail'       => null,
                'background'      => null,
                'content'         => 'content Mua Nhà riêng',
                'site_name'       => 'site_name Mua Nhà riêng',
                'image_seo'       => null,
                'description_seo' => 'description_seo Mua Nhà riêng',
                'created_at'      => date('Y-m-d H:i:s'),
                'updated_at'      => date('Y-m-d H:i:s')
            ],
            [
                'name'            => 'Nhà biệt thự, liền kề',
                'slug'            => SupportString::createSlug('Nhà biệt thự, liền kề'),
                'excerpt'         => 'Nhà biệt thự, liền kề',
                'thumbnail'       => null,
                'background'      => null,
                'content'         => 'content Nhà biệt thự, liền kề',
                'site_name'       => 'site_name Nhà biệt thự, liền kề',
                'image_seo'       => null,
                'description_seo' => 'description_seo Nhà biệt thự, liền kề',
                'created_at'      => date('Y-m-d H:i:s'),
                'updated_at'      => date('Y-m-d H:i:s')
            ],
            [
                'name'            => 'Nhà mặt phố',
                'slug'            => SupportString::createSlug('Nhà mặt phố'),
                'excerpt'         => 'excerpt Nhà mặt phố',
                'thumbnail'       => null,
                'background'      => null,
                'content'         => 'content Nhà mặt phố',
                'site_name'       => 'site_name Nhà mặt phố',
                'image_seo'       => null,
                'description_seo' => 'description_seo Nhà mặt phố',
                'created_at'      => date('Y-m-d H:i:s'),
                'updated_at'      => date('Y-m-d H:i:s')
            ],
            [
                'name'            => 'Đất nền dự án',
                'slug'            => SupportString::createSlug('Đất nền dự án'),
                'excerpt'         => 'excerpt Đất nền dự án',
                'thumbnail'       => null,
                'background'      => null,
                'content'         => 'content Đất nền dự án',
                'site_name'       => 'site_name Đất nền dự án',
                'image_seo'       => null,
                'description_seo' => 'description_seo Đất nền dự án',
                'created_at'      => date('Y-m-d H:i:s'),
                'updated_at'      => date('Y-m-d H:i:s')
            ],
        ]);
    }
}
