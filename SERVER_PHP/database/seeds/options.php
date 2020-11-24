<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class options extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('options')->insert(
            [
                [
                    'key'        => "footer-title",
                    'type'       => 1,
                    'value_text' => 'topbds nguồn tin bất động sản đáng tin cậy',
                    'value_html' => null,
                    'language'   => Config::get('app.locale')
                ],
                [
                    'key'        => "description-footer",
                    'type'       => 1,
                    'value_text' => 'chuyên chia sẽ kinh nghiệm lập trình của developer',
                    'value_html' => null,
                    'language'   => Config::get('app.locale')
                ]
            ]
        );
    }
}
