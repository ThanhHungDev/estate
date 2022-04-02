<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Services\CreateUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Laravel\Socialite\Facades\Socialite;

class SocialController extends Controller
{
    private $serviceCreateUser = null;
    public function __construct(CreateUser $_service) {
        $this->serviceCreateUser = $_service;
    }

    public function redirect($provider) {
        
        return Socialite::driver($provider)->redirect();
    }
    
    public function callback($provider) {

        $getInfo = Socialite::driver($provider)->user();
        $user = User::where('provider_id', $getInfo->id)->first();
        if( !$user ){
            $object = [
                'name'         => $getInfo->name,
                'provider'     => $provider,
                'provider_id'  => $getInfo->id,
                'avatar'       => '/images/avatar.jpg',
                'role_id'      => Config::get("constant.ROLE.USER"),
                'active'       => Config::get("constant.ACTIVITY.ACTIVE"),
                'created_at'   => date('Y-m-d H:i:s'),
                'updated_at'   => date('Y-m-d H:i:s'),
            ];
            if( $getInfo->email ){
                $object['email'] = $getInfo->email;
            }
            DB::beginTransaction();
            $user = User::create($object);
            /// thêm channel admin mới vì chắc chắn là user này chưa có channel với admin
            $this->serviceCreateUser->queueMailAdmin($user);
            /// thêm channel admin mới vì chắc chắn là user này chưa có channel với admin
            $this->serviceCreateUser->createChannelAdmin($user);
            
            DB::commit();
        }
        auth()->login($user);
        return redirect()->route('USER_DASHBOARD');
    }
    
}
