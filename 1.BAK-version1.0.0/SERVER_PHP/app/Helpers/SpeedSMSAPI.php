<?php
namespace App\Helpers;

use Illuminate\Support\Facades\Lang;

class SpeedSMSAPI {

    /**
     * sms_type có các giá trị như sau:
     * 2: tin nhắn gửi bằng đầu số ngẫu nhiên
     * 3: tin nhắn gửi bằng brandname
     * 4: tin nhắn gửi bằng brandname mặc định (Verify hoặc Notify)
     * 5: tin nhắn gửi bằng app android
    */
    const SMS_TYPE_QC        = 1;  // loai tin nhan quang cao
    const SMS_TYPE_CSKH      = 2;  // loai tin nhan cham soc khach hang
    const SMS_TYPE_BRANDNAME = 3;  // loai tin nhan brand name cskh
    const SMS_TYPE_NOTIFY    = 4;  // sms gui bang brandname Notify
    const SMS_TYPE_GATEWAY   = 5;  // sms gui bang so di dong ca nhan tu app android, download app tai day: https://speedsms.vn/sms-gateway-service/

    const ROOT_URL = "https://api.speedsms.vn/index.php";
    private static $accessToken = "";

    // Config::get('app.sms_token')
    public static function getInstance(String $apiKey = null) : SpeedSMSAPI {
        if( !$apiKey ) $apiKey = env('SPEEDSMS_TOKEN', "rzK-ZduEFPBuI5hsuDj7Hd_lb139G6qT");
        self::$accessToken = $apiKey;
        return new self;
    }
	
    public static function getUserInfo() {
        $url = self::ROOT_URL.'/user/info';
        $headers = array('Accept: application/json');

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_VERBOSE, 0);
        curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
        curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_USERPWD, self::$accessToken.':x');

        $results = curl_exec($ch);

        if(curl_errno($ch)) {
            return null;
        }
        else {
            curl_close($ch);
        }
        return json_decode($results, true);
    }

    public static function sendSMS($to, $smsContent, $smsType, $sender) {
        if (!is_array($to) || empty($to) || empty($smsContent))
            return null;

        $type = SpeedSMSAPI::SMS_TYPE_CSKH;
        if (!empty($smsType))
            $type = $smsType;

        if ($type < 1 || $type > 8)
            return null;

        if (($type == 3 || $type == 5 || $type == 7 || $type == 8) && empty($sender))
            return null;
		
        $json = json_encode(array('to' => $to, 'content' => $smsContent, 'sms_type' => $type, 'sender' => $sender));

        $headers = array('Content-type: application/json');

        $url = self::ROOT_URL.'/sms/send';
        $http = curl_init($url);
        curl_setopt($http, CURLOPT_HEADER, false);
        curl_setopt($http, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($http, CURLOPT_POSTFIELDS, $json);
        curl_setopt($http, CURLOPT_SSL_VERIFYHOST, 2);
        curl_setopt($http, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($http, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($http, CURLOPT_VERBOSE, 0);
        curl_setopt($http, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
        curl_setopt($http, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
        curl_setopt($http, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($http, CURLOPT_USERPWD, self::$accessToken.':x');
        $result = curl_exec($http);
        if(curl_errno($http))
        {
            return null;
        }
        else
        {
            curl_close($http);
            return json_decode($result, true);
        }
    }

    public static function sendMMS($to, $smsContent, $link, $sender) {
        if (!is_array($to) || empty($to) || empty($smsContent))
            return null;

        $type = SpeedSMSAPI::SMS_TYPE_CSKH;
        if (!empty($smsType))
            $type = $smsType;

        if ($type < 1 || $type > 8)
            return null;

        if (($type == 3 || $type == 5) && empty($sender))
            return null;

        $json = json_encode(array('to' => $to, 'content' => $smsContent, 'link' => $link, 'sender' => $sender));

        $headers = array('Content-type: application/json');

        $url = self::ROOT_URL.'/mms/send';
        $http = curl_init($url);
        curl_setopt($http, CURLOPT_HEADER, false);
        curl_setopt($http, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($http, CURLOPT_POSTFIELDS, $json);
        curl_setopt($http, CURLOPT_SSL_VERIFYHOST, 2);
        curl_setopt($http, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($http, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($http, CURLOPT_VERBOSE, 0);
        curl_setopt($http, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
        curl_setopt($http, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
        curl_setopt($http, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($http, CURLOPT_USERPWD, self::$accessToken.':x');
        $result = curl_exec($http);
        if(curl_errno($http))
        {
            return null;
        }
        else
        {
            curl_close($http);
            return json_decode($result, true);
        }
    }

    public static function sendVoice($to, $smsContent) {
        if (empty($to) || empty($smsContent))
            return null;

        $json = json_encode(array('to' => $to, 'content' => $smsContent));

        $headers = array('Content-type: application/json');

        $url = self::ROOT_URL.'/voice/otp';
        $http = curl_init($url);
        curl_setopt($http, CURLOPT_HEADER, false);
        curl_setopt($http, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($http, CURLOPT_POSTFIELDS, $json);
        curl_setopt($http, CURLOPT_SSL_VERIFYHOST, 2);
        curl_setopt($http, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($http, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($http, CURLOPT_VERBOSE, 0);
        curl_setopt($http, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
        curl_setopt($http, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
        curl_setopt($http, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($http, CURLOPT_USERPWD, self::$accessToken.':x');
        $result = curl_exec($http);
        if(curl_errno($http))
        {
            return null;
        }
        else
        {
            curl_close($http);
            return json_decode($result, true);
        }
    }
    public static function getMessageError($response) : string {
        $message = '';
        switch ($response['code']) {
            case "007":
                $message = Lang::get('speedsms.error_007');
                break;
            case "008":
                $message = Lang::get('speedsms.error_008');
                break;
            case "009":
                $message = Lang::get('speedsms.error_009');
                break;
            case "101":
                $message = Lang::get('speedsms.error_101');
                break;
            case "105":
                $message = Lang::get('speedsms.error_105');
                break;
            case "110":
                $message = Lang::get('speedsms.error_110');
                break;
            case "113":
                $message = Lang::get('speedsms.error_113');
                break;
            case "300":
                $message = Lang::get('speedsms.error_300');
                break;
            case "500":
                $message = Lang::get('speedsms.error_500');
                break;
            default:
                $message = Lang::get('speedsms.mobile_can_not_receive_sms');
        }
        return $message;
    }
} 