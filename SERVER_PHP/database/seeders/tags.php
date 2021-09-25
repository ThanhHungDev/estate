<?php

namespace Database\Seeders;

use App\Helpers\SupportString;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class tags extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $nameTags = [
            'chia sẻ code',
            'dự án',
            'facebook',
        ];
        foreach ($nameTags as $tag) {
            DB::table('tags')->insert(
                [
                    'name'            => $tag,
                    'slug'            => SupportString::createSlug($tag),
                    'excerpt'         => 'excerpt ' . $tag,
                    'content'         => 'content ' . $tag,
                    'site_name'       => 'site_name ' . $tag,
                    'image_seo'       => null,
                    'description_seo' => 'description_seo ' . $tag,
                    'created_at'      => date('Y-m-d H:i:s'),
                    'updated_at'      => date('Y-m-d H:i:s')
                ],
            );
        }
    }
}
