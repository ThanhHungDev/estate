<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;

class LOGIN_REDIRECT
{
    const ROUTE_SAVE = [ "USER_DASHBOARD", "LOGIN", 'SEND.SMS', 'GET.SEND.CODE', 'POST.VERIFY.CODE', 'AUTHLOCAL', "POST_LOGIN", 'FORGOT', 'SOCIAL_LINK', 'SOCIAL_CALLBACK' ];
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if(!in_array(Route::currentRouteName(), self::ROUTE_SAVE )){
            /// khong trong luồng login nên sẽ xoá session back
            Session::forget(Config::get("constant.SESSION__REDIRECT--URL") );
            Session::forget(Config::get("constant.SESSION__REDIRECT--ROUTE") );
        }
        return $next($request);
    }
}
