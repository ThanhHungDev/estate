<?php

namespace Database\Seeders;

use App\Helpers\SupportString;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class dummy_user extends Seeder
{

    public function run()
    {
        ini_set('memory_limit', '-1');
        $members = json_decode(Storage::disk('config')->get('/dummyuser.json'), true);
        $users = [];
        foreach($members as $user ){
            $user['password'] = bcrypt(env('PASSWORD_USER_CRAWLER') . $user['name']);
            $users[] = $user;
        }
        $peoples = array_chunk($users, 100);
        foreach( $peoples as $people ){
            DB::table('users')->insert($people);
        }
    }
}
