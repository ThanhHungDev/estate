<?php

namespace App\Http\Controllers;

use App\Http\Requests\LOGIN_REQUEST;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\REGISTER_REQUEST;
use App\Models\User;
use Illuminate\Support\Facades\Config;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;

class LoginController extends Controller
{
    
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function login(){

        if (Auth::check()){
            /// check user role 
            $user = Auth::user();
            if( $user->role_id == Config::get('constant.ROLE.USER')){

                return redirect()->route('USER_DASHBOARD');
            }else{

                return redirect()->route('ADMIN_DASHBOARD');                
            }
        }
        return view('client.login');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function postLogin(LOGIN_REQUEST $request)
    {
        $remember = $request->has('remember') ? true : false;

        $dataLogin = array(
            'email'    => strtolower($request->input('email')),
            'password' => $request->input('password'),
            'role_id'  => Config::get('constant.ROLE.USER')
        );

        if (Auth::attempt( $dataLogin, $remember )) {
            
            $request->session()->flash(Config::get('constant.LOGIN_ADMIN_SUCCESS'), true);
            /// check user role 
            $user = Auth::user();
            /// tạo 1 token đưa về client lưu vào localStorage
            $token = JWTAuth::fromUser($user);
            
            if( $user->role_id == Config::get('constant.ROLE.USER')){

                return redirect()->route('USER_DASHBOARD')
                ->withCookie(cookie()->forever(Config::get('constant.TOKEN_COOKIE_NAME'), $token));
            }else{

                return redirect()->route('ADMIN_DASHBOARD')
                ->withCookie(cookie()->forever(Config::get('constant.TOKEN_COOKIE_NAME'), $token));
            }
        }
        return redirect()->back()->with(Config::get('constant.LOGIN_ERROR'), 'đăng nhập thất bại!!! ');
    }

}