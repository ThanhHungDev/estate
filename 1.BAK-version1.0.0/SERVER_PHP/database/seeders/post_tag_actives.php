<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class post_tag_actives extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i < 4; $i++) { 
            $postId = $i;
            $countTag = rand( 0, 4);
            for( $j = 0; $j < $countTag; $j ++ ){
                DB::table('post_tag_actives')->insert(
                    [
                        'post_id' => $postId,
                        'tag_id'  => rand(1, 4),
                    ],
                );
            }
        }
    }
}
