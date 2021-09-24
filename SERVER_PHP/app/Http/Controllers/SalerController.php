<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SalerController extends Controller
{

    /**
     * Display the profile resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function profile(Request $request)
    {
        $profile = Auth::user();
        $token   = $request->cookie(config('constant.TOKEN_COOKIE_NAME'));
        dd( $token );
        return view('client.saler.profile', compact(['profile']));
    }

    
}


