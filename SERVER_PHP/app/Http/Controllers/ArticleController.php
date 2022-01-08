<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ArticleController extends Controller
{

    public function push(Request $request){

        $categories = Category::all();
        $profile    = Auth::user();
        return view('client.article', compact(['profile', 'categories']));
    }
    
}


