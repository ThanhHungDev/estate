<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\District\DistrictEloquentRepository;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Config;

class DistrictController extends Controller
{
    
    /**
     * get all district
     * php artisan make:resource DistrictResource
     */
    public function districts(Request $request){
        
        $districtModel = new DistrictEloquentRepository();
        $districts     = $districtModel ->get(['id', 'name as text', 'province_id as province'])
                                            ->toArray();
        return response()
                    ->success('Your custom success $districts', $districts)
                    ->setStatusCode(Response::HTTP_OK);
        // if($districts) {
            
        // } else {
        //     return response()
        //             ->error('Your custom error message', 'Validation errors or else', 400)
        //             ->setStatusCode(Response::HTTP_BAD_REQUEST);
        // }
    }
}
