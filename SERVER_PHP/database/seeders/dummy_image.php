<?php

namespace Database\Seeders;

use App\Helpers\SupportString;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class dummy_image extends Seeder
{

    public function run()
    {
        ini_set('memory_limit', '-1');
        $imgs = json_decode(Storage::disk('config')->get('/dummyimage.json'), true);
        $images = array_chunk($imgs, 100);
        foreach( $images as $img ){
            DB::table('pictures')->insert($img);
        }
    }
}
