<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Commune;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class APILoginController extends Controller
{
    /**
     * get all login
     * php artisan make:resource ApiAuthResource
     */
    public function login(Request $request){
        
        // lấy thông tin từ các request gửi lên
        $credentials = $request->only('email', 'password');

        try {
            // xác nhận thông tin người dùng gửi lên có hợp lệ hay không
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // Xử lý ngoại lệ 
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        return response()
                    ->success('Your custom login', $token)
                    ->setStatusCode(Response::HTTP_OK);
    }
}
