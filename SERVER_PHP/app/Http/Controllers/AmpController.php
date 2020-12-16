<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;

class AmpController extends Controller
{
     /**
     * CLIENT HOME PAGE
     */
    public function index( Request $request){

        $categories = $this->model->createCategoriesModel()->getAll();
        $provinces  = $request->get(Config::get('constant.CACHES.LOCATION.PROVINCE'));

        return view('amp.home', compact('categories', 'provinces'));
    }
}
