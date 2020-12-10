<?php 
namespace App\Helpers;

use Illuminate\Support\Facades\Cache;

class SupportCache{

    public static function createCacheKeyByRequest($request) {

        $parameters = $request->route()->parameters();
        $routeName  = $request->route()->getName();

        $slug = $parameters['slug'] ?? null;
        //key for caching/retrieving the response value
        if($routeName != 'POST_VIEW' && $routeName != 'TOPIC_VIEW' && $routeName != 'TAG_VIEW'){
            return null;
        }
        if(!$slug ){
            return null;
        }
        return $routeName . $slug;
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


