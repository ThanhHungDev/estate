<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class galleries extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('galleries')->insert(
            [
                [
                    'id'   => 1,
                    'name' => "default",
                ],
                [
                    'id'   => 2,
                    'name' => "posts",
                ],
            ]
        );
    }
}
