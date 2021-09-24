<?php

namespace Database\Seeders;

use App\Helpers\SupportString;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ptags extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $nameTags = [
            'Mua Nhà',
            'Đất Nền',
            'Đất Vườn',
        ];
        foreach ($nameTags as $ptag) {
            DB::table('ptags')->insert(
                [
                    'name'            => $ptag,
                    'slug'            => SupportString::createSlug($ptag),
                    'excerpt'         => 'excerpt ' . $ptag,
                    'content'         => 'content ' . $ptag,
                    'site_name'       => 'site_name ' . $ptag,
                    'image_seo'       => null,
                    'description_seo' => 'description_seo ' . $ptag,
                    'created_at'      => date('Y-m-d H:i:s'),
                    'updated_at'      => date('Y-m-d H:i:s')
                ],
            );
        }
    }
}
