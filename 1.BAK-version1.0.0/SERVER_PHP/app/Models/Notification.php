<?php

namespace App\Models;

// use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Config;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Notification extends Eloquent {

    protected $collection = 'notifies';
    protected $connection = 'mongodb';
    
    public function getNotificationsWaitingByUser( $userId = 0 ){

        return $this->where('user', '=' ,$userId )->get();
    }
}

