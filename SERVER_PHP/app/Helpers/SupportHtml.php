<?php 
namespace App\Helpers;

use Illuminate\Support\Facades\Config;

class SupportHtml{

    public static function style($path = null) {

        if(!$path){
            return null;
        }

        $filePath = public_path($path);
        $phpOutput = null;
        if (file_exists($filePath)){
            // ob_start();
            // echo('Hello, World!');
            // $php_output = ob_get_contents();
            // ob_end_clean();
            $phpOutput = file_get_contents($filePath);
        }
        return "<style>" .$filePath  . $phpOutput . "</style>";
        
    }


    public static function getEventsRealTime(){
        /// convert array to array key => value
        $events = [];
        foreach (Config::get('realtime') as $item) {
            $events[strtoupper($item)] = strtolower($item);
            $events[strtoupper("response__$item")] = strtolower("response__$item");
        }
        return $events;
    }

    public static function getConfigReact() {

        $assetRealtime = Config::get('app.REALTIME_URL');

        $configApp = Config::get('app');
        $configApp['providers'] = [];
        $configApp['aliases'] = [];
        $configApp['REALTIME'] = [
            'GET_COMMENT' =>  "$assetRealtime/api/comment?inkey=",
            'GET_MESSAGE' =>  "$assetRealtime/api/message?user=",
        ];
        $configApp['LOCALSTORAGE'] = [
            'FREE__USER' => 'FREE__USER'
        ];
        $configApp['API'] = [
            'UPDATE_VERIFY_PHONE'      => Route('API.USER.PATCH_VERIFY_PHONE'),
            'LOGIN'                    => Route('API_LOGIN'),
            'DISTRICTS'                => Route('DISTRICTS'),
            'COMMUNES'                 => Route('COMMUNES'),
            'PROVINCES'                => Route('PROVINCES'),
            'API_UPLOAD_FILE'          => Route('API_UPLOAD_FILE'),
            'APARTMENT_PROJECTS'       => Route('APARTMENT_PROJECTS'),
            'APARTMENT_PROJECT_DETAIL' => Route('APARTMENT_PROJECT_DETAIL', [ 'id' => null ]),
            'PRODUCT_SHOW'             => trim(Route('product.show', [ 'product' => '__________' ]), "__________"),
            'APARTMENT_STORE'          => Route('product.store'),
            'APARTMENT_UPDATE'         => trim(Route('product.update', [ 'product' => '__________' ]), "__________"),
        ];
        $configApp['WEB'] = [
            'PATCH_VERIFY_PHONE' => Route('PATCH_VERIFY_PHONE'),
            'LOGOUT'             => Route('LOGOUT'),
            'LOGIN'              => Route('LOGIN'),
            'POST_LOGIN'         => Route('POST_LOGIN'),
            'POST_LOGIN_FAST'    => Route('POST_LOGIN_FAST'),
            'REGISTER'           => Route('REGISTER'),
            'FORGOT'             => Route('FORGOT'),
            'POLICY'             => Route('POLICY'),
            'USER_POST'          => Route('USER_POST', ['path' => null ], false ),
            'CHAT'               => Route('CHAT', ['id' => null ], false ),
        ];
        $configApp['CONSTANT'] = Config::get('constant');
        $configApp['EVENT']    = self::getEventsRealTime();
        $configApp['CLIENT']   = Config::get('client');
        $configApp['UNIT']     = Config::get('unit');
        $configApp['IMAGE']    = Config::get('image.UPLOAD');
        $configApp['VIDEO']    = Config::get('video.UPLOAD');
        
        return $configApp;
    }
}


