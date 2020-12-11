<?php

namespace App\Http\Middleware;

use App\Helpers\SupportCache;
use Closure;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;

class CACHE_STATIC_HTML
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


        //If it's cached...
        if (Cache::has($key)){
            
            //... return the value from cache and we're done.
            return response(Cache::get($key));
        }
        //If it wasn't cached, execute the request and grab the response
        $response = $next($request);

        Cache::forever($key, $response->getContent());

        $jsonTag  = Cache::get(self::$STATIC_TAG_KEY, json_encode([]));
        $arrayTag = json_decode($jsonTag);
        array_push($arrayTag, $key);
        /// add cache group tag key static
        Cache::forever(self::$STATIC_TAG_KEY, json_encode($arrayTag));

        return $response;
    }
}
