<?php

namespace App\Http\Middleware;

use App\Models\Message;
use App\Models\Notification;
use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\View;

class SALER_LOGGED
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(Auth::check()){
            $user = Auth::user();
            if( $user->role_id == Config::get('constant.ROLE.SALER')){

                // share notify đến tất cả các view
                
                $notifications = (new Notification())->getNotificationsWaitingByUser($user->id);
                View::share('NOTIFICATIONS', $notifications);

                $messages = (new Message())->getMessagesWaitingByUser($user->id);
                View::share('MESSAGES', $messages);
                
                return $next($request);
            }else{
                Auth::logout();
            }
        }

        return redirect()->route('LOGIN');
    }
}
