<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Message extends Eloquent {

    protected $collection = 'messages';
    protected $connection = 'mongodb';
    
    public function getMessagesWaitingByUser( $userId = 0 ){

        return $this->where('user', '=' ,$userId )->get();
    }
}

