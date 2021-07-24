<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Province;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProvinceController extends Controller
{
    
    /**
     * get all provinces
     * php artisan make:resource ProvincesResource
     */
    public function provinces(Request $request){
        
        $provinceModel = new Province();
        $provinces     = $provinceModel ->get(['id', 'name as text'])
                                            ->toArray();
        return response()
                    ->success('Your custom success $provinces', $provinces)
                    ->setStatusCode(Response::HTTP_OK);
    }
}
