<?php

namespace App\Http\Controllers;

use App\Models\Channel;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class CustomerController extends Controller
{

    /**
     * Display the profile resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function profile()
    {
        $profile = Auth::user();

        $userId = $profile->id;

        $conversations = (new Channel())->getConversationsByUser($profile->id);
        /// từ conversations dùng laravel lấy hết user id friend bạn bè
        $idFriends = $conversations->pluck('user')->toArray();
        /// get id friends 
        $friends = User::whereIn('id', $idFriends)->get();

        return view('client.customer.profile', compact(['profile', 'friends']));
    }

}
