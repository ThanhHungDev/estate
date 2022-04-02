<?php

namespace App\Http\Controllers;

use App\Exceptions\SmsException;
use App\Helpers\SpeedSMSAPI;
use App\Helpers\SupportString;
use App\Http\Requests\LOGIN_REQUEST;
use App\Http\Requests\SEND_SMS_CODE_REQUEST;
use App\Http\Requests\VERIFY_CODE_REQUEST;
use App\Models\User;
use App\Services\CreateUser;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class AccountController extends Controller
{
    private $serviceCreateUser = null;
    public function __construct(CreateUser $_service) {
        $this->serviceCreateUser = $_service;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request){

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



    public function forgot(){

        return view('client.forgot');
    }


    public function postSendSms(SEND_SMS_CODE_REQUEST $request){

        $code            = SupportString::createCodeVerify();
        $currentDatetime = microtime(true) * 1000;
        $phone           = str_replace("+84", "0", $request->input('phone'));
        $email           = "free$currentDatetime@gmail.com";
        $object = [
            'name'         => $phone,
            'email'        => $email,
            'avatar'       => '/images/avatar.jpg',
            'password'     => bcrypt("hero@$phone"),
            'role_id'      => Config::get("constant.ROLE.USER"),
            'commune_id'   => null,
            'street'       => null,
            'home_number'  => null,
            'phone'        => $phone,
            'phone_verify' => $phone,
            'code'         => $code,
            'active'       => Config::get("constant.ACTIVITY.DEACTIVE"),
            'created_at'   => date('Y-m-d H:i:s'),
            'updated_at'   => date('Y-m-d H:i:s'),
        ];
        try {
            $smsAPI = SpeedSMSAPI::getInstance();
            $content = env("SPEEDSMS_TITLE") . $code;
            $phones = [ $request->phone ]; 
            $sender = env('SPEEDSMS_BRANDNAME', 'localhost');
            if(env('APP_ENV' == 'production')){
                $response = $smsAPI::sendSMS($phones, $content, SpeedSMSAPI::SMS_TYPE_BRANDNAME, $sender);
                if ($response['status'] == 'error'){
                    $exception = new SmsException($smsAPI::getMessageError($response), Response::HTTP_BAD_REQUEST );
                    throw $exception;
                }
            }
            $user = User::where('phone', '=', $phone)->first();
            if( !$user ){
                DB::beginTransaction();
                $user = User::create($object);
                /// thêm channel admin mới vì chắc chắn là user này chưa có channel với admin
                $this->serviceCreateUser->queueMailAdmin($user);
                /// thêm channel admin mới vì chắc chắn là user này chưa có channel với admin
                $this->serviceCreateUser->createChannelAdmin($user);
                
                DB::commit();
            }else{
                // update code veryfy
                $user->code = $code;
                $user->save();
            }
            return response()
                    ->success('Your custom login', $user )
                    ->setStatusCode(Response::HTTP_OK);
        } catch (\Throwable $th) {
            DB::rollback();
            return response()
                ->error(
                    $th->getMessage(), 
                    ['error' => 'save__error'],
                    Response::HTTP_INTERNAL_SERVER_ERROR
                )
                ->setStatusCode(Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function postVerifyCode(VERIFY_CODE_REQUEST $request){
        $user = User::where('phone', '=', $request->input('phone'))->first();
        if( !$user ){
            return redirect()->back()->with(Config::get('constant.VERIFY_SMS_ERROR'), 'Không tìm thấy người dùng!!! ');
        }
        if( $user->code != $request->input('code') ){
            return redirect()->back()->with(Config::get('constant.VERIFY_SMS_ERROR'), 'Không đúng code vui lòng kiểm tra lại!!! ');
        }
        $user->active = Config::get("constant.ACTIVITY.ACTIVE");
        $user->save();
        if (Auth::loginUsingId( $user->id )) {
            
            return redirect()->route('USER_DASHBOARD');
        }
        return redirect()->back()->with(Config::get('constant.VERIFY_SMS_ERROR'), 'đăng nhập thất bại!!! ');
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
            
            return redirect()->route('USER_DASHBOARD');
        }
        return redirect()->back()->with(Config::get('constant.LOGIN_ERROR'), 'đăng nhập thất bại!!! ');
    }
}
