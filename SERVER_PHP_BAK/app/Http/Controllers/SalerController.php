<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class SalerController extends Controller
{

    /**
     * Display the profile resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function profile()
    {
        $profile = Auth::user();

        return view('client.saler.profile', compact(['profile']));
    }

    
}


