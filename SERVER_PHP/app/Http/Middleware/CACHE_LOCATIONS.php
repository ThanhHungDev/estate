<?php

namespace App\Http\Middleware;

use App\Repositories\Commune\CommuneEloquentRepository;
use App\Repositories\District\DistrictEloquentRepository;
use App\Repositories\Province\ProvinceEloquentRepository;
use Closure;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;

class CACHE_LOCATIONS
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
        $this->createCacheProvince($request);
        $this->createCacheDistrict($request);
        $this->createCacheCommune($request);

        return $next($request);
    }

    private function createCacheProvince($request){

        $provinceKey = Config::get('constant.CACHES.LOCATION.PROVINCE');

        if(!$provinceKey){

            $provinces  = json_encode([]);
        }else 
        //If it's cached...
        if (!Cache::has($provinceKey)){

            /// get model province
            $provinceModel = new ProvinceEloquentRepository();
            $provinces     = $provinceModel->get(['id', 'name as text'])->toJson();
            Cache::forever($provinceKey, $provinces);
        }else{

            $provinces = Cache::get($provinceKey, json_encode([]));
        }


        $request->attributes->add([$provinceKey => $provinces]);
    }
    private function createCacheDistrict($request){

        $districtKey = Config::get('constant.CACHES.LOCATION.DISTRICT');

        if(!$districtKey){

            $districts  = json_encode([]);
        }else 
        //If it's cached...
        if (!Cache::has($districtKey)){

            /// get model distinct
            $districtModel = new DistrictEloquentRepository();
            $districts  = $districtModel->get(['id', 'name as text', 'province_id as province'])->toJson();
            Cache::forever($districtKey, $districts);
        }else{

            $districts = Cache::get($districtKey, json_encode([]));
        }


        $request->attributes->add([$districtKey => $districts]);
    }
    private function createCacheCommune($request){

        $communeKey = Config::get('constant.CACHES.LOCATION.COMMUNE');

        if(!$communeKey){

            $communes  = json_encode([]);
        }else 
        //If it's cached...
        if (!Cache::has($communeKey)){

            /// get model commune
            $communeModel = new CommuneEloquentRepository();
            $communes  = $communeModel->get(['id', 'name as text', 'district_id as district'])->toJson();
            Cache::forever($communeKey, $communes);
            $request->attributes->add(['cache_commune' => 'no']);
        }else{

            $communes = Cache::get($communeKey, json_encode([]));
            $request->attributes->add(['cache_commune' => 'yes']);
        }


        $request->attributes->add([$communeKey => $communes]);
    }
}
