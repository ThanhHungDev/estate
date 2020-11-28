<?php

namespace App\Http\Controllers;

class SalerController extends Controller
{
    /**
     * CLIENT HOME PAGE
     */
    // public function index(){

    //     return view('client.home');
    // }

    /**
     * register saler form
     */
    public function register(){

        return view('client.register-saler');
    }

}
