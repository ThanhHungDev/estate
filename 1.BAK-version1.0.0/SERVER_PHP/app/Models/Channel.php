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
    protected $fillable = [
        'name',
        'user',
        'sort',
        'backup'
    ];
    


    public function countConversationsByUser( ...$ids ){

        $ids = array_map(function($id){ return (int)$id; }, $ids );
        return $this->where('user', 'all', $ids)->count();
    }

    public function getConversationsByUser( $userId = 0, $linit = self::LIMIT ){
        return $this->raw(function ($collection) use ( $userId ) {
            return $collection->aggregate([
                [ 
                    '$match' => [
                        'user' => (int)$userId
                    ]
                ],
                [
                    '$sort' => [
                        'sort' => 1,
                        '_id' => 1,
                    ]
                ],
            ]);
        });
    }
}

