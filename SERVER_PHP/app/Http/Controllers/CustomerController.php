<?php

namespace App\Http\Controllers;

use App\Models\Channel;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class CustomerController extends Controller
{

    /**
     * Display the profile resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function profile(Request $request)
    {
        $token   = $request->cookie(config('constant.TOKEN_COOKIE_NAME'));

        $profile = Auth::user();

        $userId = $profile->id;

        $conversations = (new Channel())->getConversationsByUser($profile->id);
        /// từ conversations dùng laravel lấy hết user id friend bạn bè
        $idFriends = $conversations->pluck('user')->toArray();
        /// get id friends 
        $friends = User::whereIn('id', $idFriends)->get();

        return view('client.customer.profile', compact(['profile', 'friends', 'token']));
    }


    /**
     * Display the profile resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function about()
    {
        $profile = Auth::user();

        return view('client.customer.about', compact(['profile']));
    }
    

    public function getUserInfo(Request $request){

        $user = JWTAuth::parseToken()->authenticate();
        return response()
                    ->success(
                        'thành công',
                        $user,
                        Response::HTTP_OK
                    )
                    ->setStatusCode(Response::HTTP_OK);
    }

}
