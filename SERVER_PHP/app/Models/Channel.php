<?php

namespace App\Models;

// use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Config;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Channel extends Eloquent {

    const LIMIT = 10;

    protected $collection = 'channels';
    protected $connection = 'mongodb';
    
    public function getConversationsByUser( $userId = 0, $linit = self::LIMIT ){

        $userId .= "";

        return $this->raw(function ($collection) use ( $userId ) {
            return $collection->aggregate([
                // [
                //     '$project' => [
                //         '_id' => 1,
                //         'user' => 1,
                //         'name' => 1,
                //     ]
                // ],
                [ 
                    '$match' => [
                        'user' => $userId
                    ]
                ],
                [
                    '$unwind' => '$user'
                ],
                [ 
                    '$match' => [
                        'user' => [
                            '$nin' => [ $userId ]
                        ]
                    ]
                ]
            ]);
        });
    }
    // public function user(){

    //     return $this->belongsTo( User::class, 'user');
    // }
}

