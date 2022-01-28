<?php

namespace App\Http\Controllers;

use App\Http\Requests\LOGIN_REQUEST;
use App\Models\User;
use App\Services\CreateUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Tymon\JWTAuth\Facades\JWTAuth;

class LoginController extends Controller
{
    private $serviceCreateUser = null;
    public function __construct(CreateUser $_service) {
        $this->serviceCreateUser = $_service;
    }
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

    


    public function postLoginFast(Request $request)
    {
        $currentDatetime = microtime(true) * 1000;
        $username        = str_replace("+84", "0", $request->input('mobile'));
        $email           = "free$currentDatetime@gmail.com";
        $phone           = '';
        $remember        = $request->has('remember') ? true : false;
        $dataLogin = array(
            'password' => "hero@$username",
            'role_id'  => Config::get('constant.ROLE.USER')
        );
        // Validate email
        if (filter_var($username, FILTER_VALIDATE_EMAIL)) {
            $email = $username;
            $dataLogin['email'] = strtolower($email);
        }else{
            $phone = $username;
            $dataLogin['phone'] = strtolower($phone);
        }
        //// check phone is existed ? 
        $user = User::where('email', '=', $email )->orWhere('phone', '=',$phone)->first();
        /// check chưa có thì cho thêm mới
        if(!$user){
            $object = [
                'name'        => $request->input('name'),
                'email'       => $email,
                'avatar'      => '/images/avatar.jpg',
                'password'    => bcrypt($dataLogin['password']),
                'role_id'     => Config::get("constant.ROLE.USER"),
                'commune_id'  => null,
                'street'      => null,
                'home_number' => null,
                'phone'       => $phone,
                'active'      => Config::get("constant.ACTIVITY.DEACTIVE"),
                'created_at'  => date('Y-m-d H:i:s'),
                'updated_at'  => date('Y-m-d H:i:s'),
            ];
            try {
                DB::beginTransaction();
                $user = User::create($object);
                $this->serviceCreateUser->queueMailAdmin($user);
                /// thêm channel admin mới vì chắc chắn là user này chưa có channel với admin
                $this->serviceCreateUser->createChannelAdmin($user);
                DB::commit();
            } catch (\Throwable $th) {
                DB::rollback();
                return response()
                    ->error(
                        'có lỗi lưu trữ '. $th->getMessage(), 
                        ['error' => 'save__error'],
                        Response::HTTP_INTERNAL_SERVER_ERROR
                    )
                    ->setStatusCode(Response::HTTP_INTERNAL_SERVER_ERROR);
            }
        }else if( $user->active == Config::get("constant.ACTIVITY.ACTIVE") ){
            /// tài khoản đã được active nên bạn cần phải xác minh password để bảo vệ
            return response()
            ->success('Redirect login!', $user, Response::HTTP_FOUND)
            ->setStatusCode(Response::HTTP_FOUND);
        } else {
            /// tài khoản đã được active nên bạn cần phải xác minh password để bảo vệ
            /// bước 1 tạo user token 
            $user->token = JWTAuth::fromUser($user);
            return response()
            ->success('Redirect login account free!', $user, Response::HTTP_SEE_OTHER)
            ->setStatusCode(Response::HTTP_SEE_OTHER);
        }

        if (!Auth::attempt( $dataLogin, $remember )) {
            return response()
                    ->error(
                        'có lỗi validate trong controller', 
                        ['error' => 'invalid_credentials'],
                        Response::HTTP_UNAUTHORIZED
                    )
                    ->setStatusCode(Response::HTTP_UNAUTHORIZED);
        }
        /// check user role 
        $user = Auth::user();
        /// tạo 1 token đưa về client lưu vào localStorage
        $token = JWTAuth::fromUser($user);
        /// set cookie cho trình duyệt 
        return response()
            ->success('Your custom login', $token)
            ->setStatusCode(Response::HTTP_OK);
    }

}
