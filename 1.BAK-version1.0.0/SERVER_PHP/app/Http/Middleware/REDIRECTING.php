<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Session;

class REDIRECTING
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $url = Session::get(Config::get("constant.SESSION__REDIRECT--URL"), null );
        $routeName = Session::get(Config::get("constant.SESSION__REDIRECT--ROUTE"), null );
        if(!!$url){
            return redirect($url);
        }
        if(!!$routeName){
            return redirect()->route($routeName);
        }
        return $next($request);
    }
}
