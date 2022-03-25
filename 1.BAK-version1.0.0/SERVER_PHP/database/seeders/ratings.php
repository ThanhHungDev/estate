<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ratings extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ratings')->insert(
            [
                [
                    'username'   => "Trương Thanh Hùng",
                    'avatar'     => '/upload/images/avatar.jpg',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ],
                [
                    'username'   => "Nguyễn thị Hùng Đẹp trai",
                    'avatar'     => '/upload/images/avatar.jpg',
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ],
            ]
        );
    }
}
