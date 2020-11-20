<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class users extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ///user supper admin
        DB::table('users')->insert(
            [
                [
                    'name'       => 'Trương Thanh Hùng',
                    'email'      => 'thanhhung.code@gmail.com',
                    'avatar'     => 'images/avatar.jpg',
                    'password'   => bcrypt('123456'),
                    'role_id'    => 1,
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ],
                [
                    'name'       => 'Trương Phạm',
                    'email'      => 'truongpham260620@gmail.com',
                    'avatar'     => 'images/avatar.jpg',
                    'password'   => bcrypt('123456'),
                    'role_id'    => 2,
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ],
                [
                    'name'       => 'Trương người đăng',
                    'email'      => 'userpost@gmail.com',
                    'avatar'     => 'images/avatar.jpg',
                    'password'   => bcrypt('123456'),
                    'role_id'    => 3,
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ],
                [
                    'name'       => 'Phạm người mua',
                    'email'      => 'usercustom@gmail.com',
                    'avatar'     => 'images/avatar.jpg',
                    'password'   => bcrypt('123456'),
                    'role_id'    => 4,
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s')
                ]
            ]
        );
    }
}
