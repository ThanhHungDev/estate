<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\District;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class DistrictController extends Controller
{
    
    /**
     * get all district
     * php artisan make:resource DistrictResource
     */
    public function districts(Request $request){
        
        
        $districts     = District::where('province_id', 68)
                                            ->get(['id', 'name as text', 'province_id as province'])
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
