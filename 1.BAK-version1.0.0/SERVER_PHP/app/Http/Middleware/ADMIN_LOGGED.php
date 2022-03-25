<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

class ADMIN_LOGGED
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
            if( $user->role_id == Config::get('constant.ROLE.ADMIN')){

                if (session_id() == '') {
                    @session_start();
                }
                if(Auth::check()){
                    $objectUser = Auth::user();
                    $user = array(
                        "id" => $objectUser->id,
                        "name" => $objectUser->name,
                        "email" => $objectUser->email,
                        "role_id" => $objectUser->role_id
                    );
                    $_SESSION['admin_ckfinder'] = $user;
                }
    
                return $next($request);
            }else{
                Auth::logout();
            }
        }

        return redirect()->route('ADMIN_LOGIN');
    }
}
