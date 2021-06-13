<?php

namespace App\Http\Controllers;

class CustommerController extends Controller
{

    /**
     * register Custommer form
     */
    public function register(){

        return view('client.register-custommer');
    }

}
