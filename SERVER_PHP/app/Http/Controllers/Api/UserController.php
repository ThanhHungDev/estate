<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{
    //
    public function index()
    {
        $users = User::all();

        return response()->json($users, 200);
    }


    /**
     * update user is verify code profile resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function patchVerifyPhone(Request $request){

        if (! $claim = JWTAuth::getPayload()) {
            return  response()
                    ->error(
                        'Token user not found', 
                        ['error' => 'user_not_found'],
                        Response::HTTP_NOT_FOUND
                    )
                    ->setStatusCode(Response::HTTP_NOT_FOUND);
        }
        /// query db find user
        $user = User::findOrFail($claim['id']);
        if( !$user ){
            return  response()
                    ->error(
                        'Token user not found', 
                        ['error' => 'user_not_found'],
                        Response::HTTP_NOT_FOUND
                    )
                    ->setStatusCode(Response::HTTP_NOT_FOUND);
        }
        $user->phone_verify = $request->input('phone_verify');
        $user->save();

        return response()
                    ->success(
                        'thành công',
                        $user->toArray(),
                        Response::HTTP_OK
                    )
                    ->setStatusCode(Response::HTTP_OK);
    }
}
