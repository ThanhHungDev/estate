<?php

namespace App\Http\Controllers;

use App\Http\Requests\LOGIN_REQUEST;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class LoginController extends Controller
{
    
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request){

        $redirect        = $request->input('redirect', null );
        $routeRedirect   = $request->input('nredirect', null );

        /// nếu redirect lấy referer ra sử dụng thì phải check biến này
        if( !!$request->input('rredirect', null ) ){
            $redirect = $request->headers->get('referer');
        }
        if($redirect){
            Session::put(Config::get("constant.SESSION__REDIRECT--URL"),$redirect);
        }
        if($routeRedirect){
            Session::put(Config::get("constant.SESSION__REDIRECT--ROUTE"),$routeRedirect);
        }
        

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
            
            $url = Session::get(Config::get("constant.SESSION__REDIRECT--URL"), null );
            $routeName = Session::get(Config::get("constant.SESSION__REDIRECT--ROUTE"), null );
            if(!!$url){
                return redirect($url);
            }
            if(!!$routeName){
                return redirect()->route($routeName);
            }

            $request->session()->flash(Config::get('constant.LOGIN_ADMIN_SUCCESS'), true);
            /// check user role 
            $user = Auth::user();
            /// tạo 1 token đưa về client lưu vào localStorage
            if($request->wantsJson()){
                $token = JWTAuth::fromUser($user);
                return response()
                    ->success('Your custom login', $token)
                    ->setStatusCode(Response::HTTP_OK);
            }
            

            if( $user->role_id == Config::get('constant.ROLE.USER')){

                return redirect()->route('USER_DASHBOARD');
            }else{

                return redirect()->route('ADMIN_DASHBOARD');
            }
        }
        return redirect()->back()->with(Config::get('constant.LOGIN_ERROR'), 'đăng nhập thất bại!!! ');
    }


    public function postLoginFast(Request $request)
    {
        $currentDatetime = microtime(true) * 1000;
        DB::table('users')->insert(
                [
                    'name'        => $request->input('password'),
                    'email'       => $request->input('email', "free$currentDatetime@gmail.com"),
                    'avatar'      => '/images/avatar.jpg',
                    'password'    => bcrypt("free$currentDatetime@gmail.com"),
                    'role_id'     => Config::get("constant.ROLE.USER"),
                    'commune_id'  => null,
                    'street'      => null,
                    'home_number' => null,
                    'phone'       => $request->input('phone', null),
                    'created_at'  => date('Y-m-d H:i:s'),
                    'updated_at'  => date('Y-m-d H:i:s')
                ]);
        $remember = $request->has('remember') ? true : false;

        $dataLogin = array(
            'phone'    => strtolower($request->input('phone')),
            'password' => $request->input('password'),
            'role_id'  => Config::get('constant.ROLE.USER')
        );
        //// create user
        

        try {
            // xác nhận thông tin người dùng gửi lên có hợp lệ hay không
            if (! $token = JWTAuth::attempt($dataLogin)) {
                return response()
                    ->error(
                        'có lỗi validate trong controller', 
                        ['error' => 'invalid_credentials'],
                        Response::HTTP_UNAUTHORIZED
                    )
                    ->setStatusCode(Response::HTTP_UNAUTHORIZED);
            }
        } catch (JWTException $e) {
            // Xử lý ngoại lệ 
            return response()
                    ->error(
                        'có lỗi validate trong controller', 
                        ['error' => 'could_not_create_token'],
                        Response::HTTP_INTERNAL_SERVER_ERROR
                    )
                    ->setStatusCode(Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        /// check user role 
        $user = Auth::user();
        /// tạo 1 token đưa về client lưu vào localStorage
        $token = JWTAuth::fromUser($user);
        return response()
            ->success('Your custom login', $token)
            ->setStatusCode(Response::HTTP_OK);
    }

}
