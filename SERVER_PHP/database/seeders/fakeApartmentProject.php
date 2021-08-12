<?php

namespace Database\Seeders;

use App\Helpers\SupportString;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class fakeApartmentProject extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $characters = [
            "a", "ă", "â", "b", "c", "d", "đ", "e", "ê", "g", "h", "i", "k", "l", "m", "n", "o", "ô", "ơ", "p", "q", "r", "s", "t", "u", "ư", "v", "x", "y"
        ];

        $FAKES = [];
        //// for kết hợp 1 chữ
        foreach( $characters as $ch ){
            $FAKES[] = [
                'string' => $ch,
                'request' => 0,
            ];
        }
        //// for kết hợp 2 chữ
        foreach( $characters as $ch ){
            foreach( $characters as $ch2 ){
                $FAKES[] = [
                    'string' => $ch.$ch2,
                    'request' => 0,
                ];
            }
        }
        //// for kết hợp 3 chữ
        foreach( $characters as $ch ){
            foreach( $characters as $ch2 ){
                foreach( $characters as $ch3 ){
                    $FAKES[] = [
                        'string' => $ch.$ch2.$ch3,
                        'request' => 0,
                    ];
                }
            }
        }
        //// for kết hợp 4 chữ
        // foreach( $characters as $ch ){
        //     foreach( $characters as $ch2 ){
        //         foreach( $characters as $ch3 ){
        //             foreach( $characters as $ch4 ){
        //                 $FAKES[] = [
        //                     'string' => $ch.$ch2.$ch3.$ch4,
        //                     'request' => 0,
        //                 ];
        //             }
        //         }
        //     }
        // }
        
        DB::connection('crawler')->table('fake_apartment_projects')->insert( $FAKES );
    }
}
