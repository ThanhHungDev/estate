<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class CustomerController extends Controller
{

    /**
     * Display the profile resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function profile()
    {
        $profile = Auth::user();

        return view('client.customer.profile', compact(['profile']));
    }

}
