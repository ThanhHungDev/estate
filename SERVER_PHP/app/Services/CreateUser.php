<?php
namespace App\Services;

use App\Jobs\QueueMailler;
use App\Models\Channel;
use Carbon\Carbon;
use Illuminate\Support\Facades\Config;

class CreateUser
{
    public static function queueMailAdmin($user){
        /// gửi mail cảm ơn
        $email       = $user->email;
        $ip          = request()->ip();
        $messageMail = "Tạo tài khoản thành công! \n Tài khoản đăng ký thành công với email: $email và ip: $ip";
        /// send mail có người đăng nhập admin
        $jobmailler = (new QueueMailler(trim(env('MAIL_TO_ADMIN', 'thanhhung.code@gmail.com')), [ 'message' => $messageMail ] ))
                        ->delay(Carbon::now()->addSeconds(5));
        dispatch($jobmailler);
    }

    public static function createChannelAdmin($user){
        $modelChannel = new Channel();
        $channelAdmin = $modelChannel->countConversationsByUser($user->id, Config::get('constant.ID_ADMIN'));
        if( !$channelAdmin ){
            /// thêm channel admin mới
            $admin = [ Config::get('constant.ID_ADMIN'), $user->id ];
            sort($admin, SORT_NUMERIC);
            $insert = [
                'name'   => implode( "-", $admin),
                'user'   => $admin,
                'sort'   => 0,
                'backup' => false,
            ];
            $admin = Channel::create($insert);
        }
    }
}