<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Facades\JWTAuth;

class LoginController extends Controller
{
    /**
     * get all login
     * php artisan make:resource LoginController
     */
    public function login(Request $request){
        
        // lấy thông tin từ các request gửi lên
        $credentials = $request->only('email', 'password');

        try {
            // xác nhận thông tin người dùng gửi lên có hợp lệ hay không
            if (! $token = JWTAuth::attempt($credentials)) {
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

        return response()
                    ->success('Your custom login', $token)
                    ->setStatusCode(Response::HTTP_OK);
    }

    /**
     * get infor user login
     */
    public function info(Request $request){
        
        try {

            if (! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }
    
        } catch (TokenExpiredException $e) {
    
            return response()->json(['token_expired'], 400);
    
        } catch (TokenInvalidException $e) {
    
            return response()->json(['token_invalid'], 400);
    
        } catch (JWTException $e) {
    
            return response()->json(['token_absent'], 400);
    
        }
    
        return response()->json(compact('user'));
    }



    
}
