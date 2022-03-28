<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Config;
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
        $users = [
            [
                'name'         => 'Quản trị viên',
                'email'        => 'admin@gmail.com',
                'avatar'       => '/images/avatar.jpg',
                'password'     => bcrypt('admin123'),
                'role_id'      => Config::get("constant.ROLE.ADMIN"),
                'commune_id'   => null,
                'street'       => null,
                'home_number'  => null,
                'phone_verify' => null,
                'created_at'   => date('Y-m-d H:i:s'),
                'updated_at'   => date('Y-m-d H:i:s')
            ],
            [
                'name'         => 'Trương Thanh Hùng Test',
                'email'        => 'truong260620@gmail.com',
                'avatar'       => '/images/avatar.jpg',
                'password'     => bcrypt('123456'),
                'role_id'      => Config::get("constant.ROLE.USER"),
                'commune_id'   => null,
                'street'       => 'lộc tineens ',
                'home_number'  => '2342/234234',
                'phone_verify' => '0972567875',
                'created_at'   => date('Y-m-d H:i:s'),
                'updated_at'   => date('Y-m-d H:i:s')
            ],
            [
                'name'         => 'Trương người đăng',
                'email'        => 'userpost@gmail.com',
                'avatar'       => '/images/avatar.jpg',
                'password'     => bcrypt('123456'),
                'role_id'      => Config::get("constant.ROLE.USER"),
                'commune_id'   => null,
                'street'       => null,
                'home_number'  => null,
                'phone_verify' => null,
                'created_at'   => date('Y-m-d H:i:s'),
                'updated_at'   => date('Y-m-d H:i:s')
            ],
            [
                'name'         => 'Phạm người mua',
                'email'        => 'usercustom@gmail.com',
                'avatar'       => '/images/avatar.jpg',
                'password'     => bcrypt('123456'),
                'role_id'      => Config::get("constant.ROLE.USER"),
                'commune_id'   => null,
                'street'       => null,
                'home_number'  => null,
                'phone_verify' => '0972567875',
                'created_at'   => date('Y-m-d H:i:s'),
                'updated_at'   => date('Y-m-d H:i:s')
            ],
            [
                'name'         => 'Phạm người mua',
                'email'        => 'usercustom2@gmail.com',
                'avatar'       => '/images/avatar.jpg',
                'password'     => bcrypt('123456'),
                'role_id'      => Config::get("constant.ROLE.USER"),
                'commune_id'   => null,
                'street'       => 'hàng 5',
                'home_number'  => '0674',
                'phone_verify' => null,
                'created_at'   => date('Y-m-d H:i:s'),
                'updated_at'   => date('Y-m-d H:i:s')
            ],


            [
                'name'         => 'Trương Thanh Hùng 12',
                'email'        => 'admin_fake@gmail.com',
                'avatar'       => '/images/avatar.jpg',
                'password'     => bcrypt('admin123'),
                'role_id'      => Config::get("constant.ROLE.USER"),
                'commune_id'   => null,
                'street'       => null,
                'home_number'  => null,
                'phone_verify' => null,
                'created_at'   => date('Y-m-d H:i:s'),
                'updated_at'   => date('Y-m-d H:i:s')
            ],
            [
                'name'         => 'Trương Thanh Hùng 1231324324',
                'email'        => 'truong260620231@gmail.com',
                'avatar'       => '/images/avatar.jpg',
                'password'     => bcrypt('123456'),
                'role_id'      => Config::get("constant.ROLE.USER"),
                'commune_id'   => null,
                'street'       => 'lộc tineens ',
                'home_number'  => '2342/234234',
                'phone_verify' => '0972567875',
                'created_at'   => date('Y-m-d H:i:s'),
                'updated_at'   => date('Y-m-d H:i:s')
            ],
            [
                'name'         => 'Trương người đăng',
                'email'        => 'userpost34324@gmail.com',
                'avatar'       => '/images/avatar.jpg',
                'password'     => bcrypt('123456'),
                'role_id'      => Config::get("constant.ROLE.USER"),
                'commune_id'   => null,
                'street'       => null,
                'home_number'  => null,
                'phone_verify' => null,
                'created_at'   => date('Y-m-d H:i:s'),
                'updated_at'   => date('Y-m-d H:i:s')
            ],
            [
                'name'         => 'Phạm người mua',
                'email'        => 'usercustom2433423@gmail.com',
                'avatar'       => '/images/avatar.jpg',
                'password'     => bcrypt('123456'),
                'role_id'      => Config::get("constant.ROLE.USER"),
                'commune_id'   => null,
                'street'       => null,
                'home_number'  => null,
                'phone_verify' => '0972567875',
                'created_at'   => date('Y-m-d H:i:s'),
                'updated_at'   => date('Y-m-d H:i:s')
            ],
            [
                'name'         => 'Phạm người mua',
                'email'        => 'usercustom25456rdgfdg@gmail.com',
                'avatar'       => '/images/avatar.jpg',
                'password'     => bcrypt('123456'),
                'role_id'      => Config::get("constant.ROLE.USER"),
                'commune_id'   => null,
                'street'       => 'hàng 5',
                'home_number'  => '0674',
                'phone_verify' => null,
                'created_at'   => date('Y-m-d H:i:s'),
                'updated_at'   => date('Y-m-d H:i:s')
            ],
        ];
        
        for ($i=0; $i < 100; $i++) { 
            $users[] = [
                'name'         => 'Phạm người mua' . $i,
                'email'        => 'user'.$i.'@gmail.com',
                'avatar'       => '/images/avatar.jpg',
                'password'     => bcrypt('123456'),
                'role_id'      => Config::get("constant.ROLE.USER"),
                'commune_id'   => null,
                'street'       => 'hàng 5',
                'home_number'  => '0674',
                'phone_verify' => null,
                'created_at'   => date('Y-m-d H:i:s'),
                'updated_at'   => date('Y-m-d H:i:s')
            ];
        }

        DB::table('users')->insert($users);
    }
}