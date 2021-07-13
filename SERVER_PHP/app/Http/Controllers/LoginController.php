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
            if( $user->role_id == Config::get('constant.ROLE.SALER')){

                return redirect()->route('SALER_DASHBOARD');
            }else if( $user->role_id == Config::get('constant.ROLE.CUSTOMER')){

                return redirect()->route('CUSTOMER_DASHBOARD');
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
            'password' => $request->input('password')
        );



    //     $requiredClaims = [
    //         'iss',
    //     'iat',
    //     'exp',
    //     'nbf',
    //     'sub',
    //     'jti',

    //         new Issuer('faker'),
    //         new IssuedAt(Carbon::now('UTC')) ,
    //         new Expiration(Carbon::now('UTC')->addDays(1)),
    //         new NotBefore(Carbon::now('UTC')),
    //         new JwtId('faker'),
    //         new Subject('faker')
    //    ]; 
   
    //    $claims = new Collection($requiredClaims);
    //    $payload = new Payload($claims, new PayloadValidator());
   
    //    $tokenInstance = JWTAuth::encode($payload);
    //    $token = $tokenInstance->get();
   
    //    $decode = JWTAuth::decode($tokenInstance);


    //     $params = [
    //         'firstName' => 'Test First Name',
    //         'lastName' => 'Test Last Name',
    //         // You can send any data with JWT token
    //     ];
    //     // Random token id
    //     $tokenId = base64_encode(bin2hex(openssl_random_pseudo_bytes(32))); 
    //     $issuedAt = time(); // Current time
    //     /*
    //     If you want the JWT token can not be used before any specific time,you can modify $notBeforeUse time Ex: $notBeforeUse = $issuedAt + 60*60; It means the token can't be used 3600 seconds before the creation that is after one hour the token will be valid
    //     */
    //     $notBeforeUse = $issuedAt;
    //     // This is in second so that means token will be expired after 60 seconds,once the token will be active
    //     $expireTime = $notBeforeUse + 60;
    //     // It can be company name or server url which will help you to identify who is the issuer so you can validate before use
    //     $serverName = '<server url>';
    //     $payLoad = [
    //         'iat'  => $issuedAt,
    //         'jti'  => $tokenId,
    //         'iss'  => $serverName,     // Issuer
    //         'nbf'  => $notBeforeUse,   // Not before
    //         'exp'  => $expireTime,     // Expire
    //         'data' => $params
    //     ];
    //     // base64_encode() of random string
    //     $encodedString = 'D4566FA498443347FF145678DEA74132191FD9RF564HGFCC981256C50605678949C385F7A31ED62B8DE70E63ADEB8724AD0FCE0F751E68F71E==';
    //     /*
    //     In this part you can use your private key or random key by using which you will decode after recieving the JWT token in your application. This key can be a dynamic key also but you need to have all these keys to decode the token once it gets encoded
    //     */
    //     $secretKey = base64_decode($encodedString);
    //     $encodedToken =json_encode( JWT::encode($payLoad, $secretKey, 'HS512'));
    //     print($encodedToken);

        if (Auth::attempt( $dataLogin, $remember )) {
            
            $request->session()->flash(Config::get('constant.LOGIN_ADMIN_SUCCESS'), true);
            /// check user role 
            $user = Auth::user();
            /// tạo 1 token đưa về client lưu vào localStorage
            $token = JWTAuth::fromUser($user);
            echo $token."------------";
            try { 
                JWTAuth::setToken($token); //<-- set token and check
                if (! $claim = JWTAuth::getPayload()) {
                    return response()->json(array('message'=>'user_not_found'), 404);
                }
            } catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
                return response()->json(array('message'=>'token_expired'), 404);
            } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
                return response()->json(array('message'=>'token_invalid'), 404);
            } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {
                return response()->json(array('message'=>'token_absent'), 404);
            } 

            // the token is valid and we have exposed the contents
            
            dd ($claim);
            
            // $customClaims = ['action' => '3432432', 'customer-id' => '12321312'];
            
            // $payload = JWTFactory::customClaims($customClaims)->make();

            // $token = JWTAuth::encode($payload);
            
            // $headers = apache_request_headers(); //get header
            // $request->headers->set('Authorization', 'Bearer ' . JWTAuth::getToken());// set header in request
            // $apy = JWTAuth::getPayload($token)->toArray();
            // dd (  $apy );
            // try {
                
            //     if (! $user = JWTAuth::parseToken()->authenticate()) {
            //         return response()->json(['user_not_found'], 404);
            //     }
        
            // } catch (TokenExpiredException $e) {
        
            //     return response()->json(['token_expired'], 400);
        
            // } catch (TokenInvalidException $e) {
        
            //     return response()->json(['token_invalid'], 400);
        
            // } catch (JWTException $e) {
        
            //     return response()->json(['token_absent'], 400);
        
            // }
        
            // return response()->json(compact('user'));
            
            // $customClaims = JWTFactory::customClaims($user->toArray());
            // $payload = JWTFactory::make($customClaims);
            // $token = JWTAuth::encode($payload);
            // dd($token);
            
            if( $user->role_id == Config::get('constant.ROLE.SALER')){

                return redirect()->route('SALER_DASHBOARD')
                ->withCookie(cookie()->forever(config('constant.TOKEN_COOKIE_NAME'), $token));
            }else if( $user->role_id == Config::get('constant.ROLE.CUSTOMER')){

                return redirect()->route('CUSTOMER_DASHBOARD')
                ->withCookie(cookie()->forever(config('constant.TOKEN_COOKIE_NAME'), $token));
            }else{

                return redirect()->route('ADMIN_DASHBOARD')
                ->withCookie(cookie()->forever(config('constant.TOKEN_COOKIE_NAME'), $token));
            }
        }
        return redirect()->back()->with(Config::get('constant.LOGIN_ERROR'), 'đăng nhập thất bại!!! ');
    }

}
