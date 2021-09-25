<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Commune;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CommuneController extends Controller
{
    /**
     * get all district
     * php artisan make:resource DistrictResource
     */
    public function communes(){
        
        $communeModel = new Commune();
        $communes     = $communeModel ->get(['id', 'name as text', 'district_id as district'])
                                            ->toArray();
        return response()
                    ->success('Your custom success $communes', $communes)
                    ->setStatusCode(Response::HTTP_OK);
        // if($communes) {
            
        // } else {
        //     return response()
        //             ->error('Your custom error message', 'Validation errors or else', 400)
        //             ->setStatusCode(Response::HTTP_BAD_REQUEST);
        // }
    }

    /**
     * get all district
     * php artisan make:resource DistrictResource
     */
    public function commune( Request $request, $district = 0 ){
        
        $communeModel = new Commune();
        $communes     = $communeModel       ->where( 'district_id', '=', $district )
                                            ->get(['id', 'name as text', 'district_id as district'])
                                            ->toArray();
        return response()
                    ->success('Your custom success $communes', $communes)
                    ->setStatusCode(Response::HTTP_OK);
        // if($communes) {
            
        // } else {
        //     return response()
        //             ->error('Your custom error message', 'Validation errors or else', 400)
        //             ->setStatusCode(Response::HTTP_BAD_REQUEST);
        // }
    }
}
