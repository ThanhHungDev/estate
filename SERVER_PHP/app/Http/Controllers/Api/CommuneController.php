<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\Commune\CommuneEloquentRepository;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Config;

class CommuneController extends Controller
{
    /**
     * get all district
     * php artisan make:resource DistrictResource
     */
    public function communes(Request $request){
        
        $communeModel = new CommuneEloquentRepository();
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
}
