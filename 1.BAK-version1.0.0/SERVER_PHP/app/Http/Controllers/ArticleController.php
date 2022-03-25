<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

class ArticleController extends Controller
{

    public function push(Request $request){

        // $categories  = Category::where('parent', Config::get('constant.CATEGORY__PARENT'))->orderBy('id', 'ASC')->get();
        $categories  = Category::all();
        $profile    = Auth::user();
        return view('client.article', compact(['profile', 'categories']));
    }
    
}


