<?php

namespace App\Http\Middleware;

use App\Helpers\SupportCache;
use Closure;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;

class CACHE_STATIC_REFRESH
{
    public static $STATIC_TAG_KEY = CACHE_STATIC_HTML::class;
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if( Config::get('app.isproduct') ){

            return $this->handleCache($request, $next);
        }
        return $next($request);
    }

    private function handleCache($request, $next){

        //key for caching/retrieving the response value
        $key  = SupportCache::createCacheKeyByRequest($request);
        
        if(!$key){
            return $next($request);
        }
        /// if method != GET. remove all cache tag 
        if($request->method() != 'GET'){

            $jsonTag = Cache::get(self::$STATIC_TAG_KEY, json_encode([]));
            $arrayTag = json_decode($jsonTag);
            
            foreach($arrayTag as $keyTag){

                Cache::forget($keyTag);
            }
            Cache::forever(self::$STATIC_TAG_KEY, json_encode([]));
        }
        
        return $next($request);
    }
}
