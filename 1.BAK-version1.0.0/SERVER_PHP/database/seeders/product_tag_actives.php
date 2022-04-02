<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class product_tag_actives extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i < 4; $i++) { 
            $productId = $i;
            $countTag = rand( 0, 4);
            for( $j = 0; $j < $countTag; $j ++ ){
                DB::table('product_tag_actives')->insert(
                    [
                        'product_id' => $productId,
                        'ptag_id'  => rand(1, 4),
                    ],
                );
            }
        }
    }
}
