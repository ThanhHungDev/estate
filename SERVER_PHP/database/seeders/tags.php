<?php

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
        DB::table('tags')->insert(
            [
                [ 'title' => "Mặt tiền", 'slug' => SupportString::createSlug("Mặt tiền") ],
                [ 'title' => "Gần chợ", 'slug' => SupportString::createSlug("Gần chợ") ],
                [ 'title' => "Gần trường học", 'slug' => SupportString::createSlug("Gần trường học") ],
                [ 'title' => "Nở hậu", 'slug' => SupportString::createSlug("Nở hậu") ],
                [ 'title' => "Hẻm xe hơi", 'slug' => SupportString::createSlug("Hẻm xe hơi") ]
            ]
        );
    }
}
