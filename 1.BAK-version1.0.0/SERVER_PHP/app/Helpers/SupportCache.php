<?php 
namespace App\Helpers;

use Illuminate\Support\Facades\Cache;

class SupportCache{

    public static $ROUTE_NAME = null;
    public static $PARAMETERS = null;

    public static function createCacheKeyByRequest($request) {

        if( !self::$PARAMETERS ){

            self::$PARAMETERS = $request->route()->parameters();
        }
        if( !self::$ROUTE_NAME ){

            self::$ROUTE_NAME = $request->route()->getName();
        }
        
        $slug = self::$PARAMETERS['slug'] ?? null;
        
        
        return self::$ROUTE_NAME . $slug;
    }

    public static function saveCacheByRequest($request, $value) {

        $key = self::createCacheKeyByRequest($request);
        if($key){

            //Let's cache it for 60 minutes * 24 hour * 360 day = 1 year
            $cachingTime = env("CACHE_TIME", 60);
            //Cache response
            Cache::put($key, $value, $cachingTime);
        }
    }
    

    public static function removeCacheKey($prefix, $slug = null ) {

        $key = $prefix . $slug;
        Cache::forget($key);
    }
    
}


