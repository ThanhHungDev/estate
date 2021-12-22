<?php

namespace App\Models;

use Illuminate\Support\Facades\Auth;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Message extends Eloquent {

    const LIMIT = 1;

    protected $collection = 'messages';
    protected $connection = 'mongodb';
    
    public function getMessagesWaitingByUser( $userId = 0 ){

        return $this->where('user', '=' ,$userId )->get();
    }

    // public function getListMessageInChannel($channel = '', $linit = self::LIMIT){
    //     $messages = $this->where('channel', new \MongoDB\BSON\ObjectID($conv->_id))->get(['read', '_id'])->toArray();
    //     foreach( $messages as $mess ){

    //     }
    // }

    public function getMessageByChannelId( $channel = '', $linit = self::LIMIT ){
        return $this->raw(function ($collection) use ( $channel, $linit ) {
            return $collection->aggregate([
                [
                    '$match' => [
                        "channel" => [
                            '$eq' => new \MongoDB\BSON\ObjectID($channel)
                        ]
                    ]
                ],
                [
                    '$project' => [
                        'user' => 1,
                        'body' => 1,
                        'read' => 1,
                        'readAdmin' => 1,
                        'style' => 1,
                        'attachment' => 1,
                        'channel' => 1,
                        'createdAt' => 1,
                        'updatedAt' => 1,
                    ]
                ],
                [
                    '$sort' => [ '_id' => -1 ],
                ],
                [
                    '$limit' => $linit,
                ],
                [
                    '$sort' => [ '_id' => 1 ],
                ],
            ]);

        });
    }
}

