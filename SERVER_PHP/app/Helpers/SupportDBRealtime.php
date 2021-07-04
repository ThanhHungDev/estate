<?php 
namespace App\Helpers;

use App\Models\Message;
use App\Models\Notification;
use Illuminate\Support\Facades\Auth;

class SupportDBRealtime{

    public static $NOTIFICATIONS = null;
    public static $MESSAGES = null;

    public static function getNotifications(){

        if( static::$NOTIFICATIONS === null ){

            if(Auth::check()){
                $user = Auth::user();
                static::$NOTIFICATIONS = (new Notification())->getNotificationsWaitingByUser($user->id);
            }else{
                static::$NOTIFICATIONS = [];
            }
        }
        return static::$NOTIFICATIONS;
    }
    public static function getMessages(){


        if( static::$MESSAGES === null ){

            if(Auth::check()){
                $user = Auth::user();
                static::$MESSAGES = (new Message())->getMessagesWaitingByUser($user->id);
            }else{
                static::$MESSAGES = [];
            }
        }

        return static::$MESSAGES;
    }


}