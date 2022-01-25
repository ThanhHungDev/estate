<?php 
namespace App\Helpers;

use Jenssegers\Agent\Agent;
use Illuminate\Support\Facades\Config;
class SupportString{

    public static function cleanText(string $text) {

		$removeBreakLine = str_replace(["\n", "\r", "&nbsp;"], "", $text);
		$addSpaceTag     = str_replace('<', ' <', $removeBreakLine );
		$removeHtml      = strip_tags( $addSpaceTag );
		$removeDupSpace  = str_replace('  ', ' ', $removeHtml );

		return trim($removeDupSpace);
	}
    public static function createDescription( ...$params ){
        $description = null;

        if(!empty($params)){
            foreach($params as $param ){

                if(trim($param)){

                    $description = $param; 
                    break;
                }
            }
        }
        if( $description ){

            $description     = mb_substr( self::cleanText($description), 0, 160);
            return html_entity_decode(trim($description));
        }
        
        return null;
    }


    public static function checkUglifyHtml(){
        $agent = new Agent();
        if(!$agent->isRobot()){
            return true;
        }
        /// check ip truy cập nhiều chưa

        return false;
    }

    public static function limitText($content = false, $limit = 10, $ellipsis = '...') {

        if(mb_strlen($content,'UTF-8') > $limit){
            return str_replace('\n', '', mb_substr( self::cleanText($content), 0, $limit,'UTF-8')) . $ellipsis;
        }
        return str_replace('\n', '', self::cleanText($content));
    }

    public static function createEmoji( $content ){

        $emojis = Config::get('emoji');
        
        foreach ($emojis as $key => $icon) {
            # code...
            $content = str_replace(" $key ", " $icon ", $content);
            $content = str_replace(" $key&nbsp;", " $icon&nbsp;", $content);
            $content = str_replace("&nbsp;$key&nbsp;", "&nbsp;$icon&nbsp;", $content);
            $content = str_replace("&nbsp;$key ", "&nbsp;$icon ", $content);
        }
        return $content;
    }

    public static function createSlug( $str, $replace = '-' ){

        $str = static::convertLang($str);
        $str = preg_replace('/[^a-z0-9-\s]/', '', $str);
        $str = preg_replace('/([\s]+)/', $replace, $str);

        return trim($str, $replace );
    }

    public static function createLinkSlug( $str, $replace = '-' ){

        $str = static::convertLang($str);
        $str = preg_replace('/[\s]/', ' ', $str);
        $str = preg_replace('/([\s]+)/', $replace, $str);

        return trim($str, $replace );
    }

    public static function convertLang( $str ){

        //Đổi ký tự có dấu thành không dấu
        $str = trim(mb_strtolower($str));
        $str = preg_replace('/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/', 'a', $str);
        $str = preg_replace('/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/', 'e', $str);
        $str = preg_replace('/(ì|í|ị|ỉ|ĩ)/', 'i', $str);
        $str = preg_replace('/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/', 'o', $str);
        $str = preg_replace('/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/', 'u', $str);
        $str = preg_replace('/(ỳ|ý|ỵ|ỷ|ỹ)/', 'y', $str);
        $str = preg_replace('/(đ)/', 'd', $str);

        return $str;
    }

    public static function minimizeCSSsimple($css){
        
        try {
            $css = preg_replace('/\/\*((?!\*\/).)*\*\//', '', $css); // negative look ahead
            $css = preg_replace('/\s{2,}/', ' ', $css);
            $css = preg_replace('/\s*([:;{}])\s*/', '$1', $css);
            $css = preg_replace('/;}/', '}', $css);
            return $css;
        } catch (\Throwable $th) {
            return $css;
        }
    }

    public static function minimizeJavascriptSimple($javascript){
        try {
            return preg_replace(array("/\s+\n/", "/\n\s+/", "/ +/"), array("\n", "\n ", " "),
            $javascript);
        } catch (\Throwable $th) {
            return $javascript;
        }
        
    }

    public static function getUrlImageResize($imagePath, $size = 'thumbnail', $type = 'fit'){

        return Route('IMAGE_RESIZE', ['size' => $size, 'type' => $type, 'imagePath' => trim($imagePath, '/')])
        . Config::get('app.version');
    }


    public static function convertImageCompress($content = ''){

        $pattern = '/<img([^>]*)src=([\'"])(?<src>.*?)([\'"])([^>]*)>/i';
        $version = Config::get('app.version');

        return preg_replace_callback ($pattern, function($match) use ($version) { 

            $parse_url = parse_url(trim($match[3], '/'));
            
            if( !isset($parse_url['scheme']) || ($parse_url['scheme'] != 'https' && $parse_url['scheme'] != 'http') ){
                $img = '<img ' 
                    . $match[1] 
                    . 'src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" '
                    . 'data-src='
                    . $match[2] 
                    . Route('IMAGE_COMPRESS', [ 'quality' => 70, 'imagePath' => trim($match[3], '/') ]) 
                    . $version
                    . $match[4]
                    . $match[5] 
                    . ' onerror="this.onerror=null;this.src=\'/images/failed.jpg\';" '
                    . ">";
            }else{
                $img = '<img ' 
                . $match[1] 
                . 'src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" '
                . 'data-src='
                . $match[2] 
                . trim($match[3], '/')
                . $version
                . $match[4]
                . $match[5] 
                . ' onerror="this.onerror=null;this.src=\'/images/failed.jpg\';" '
                . ">";
            }
            
            if( strpos($img, "class") !== false){

                $patternClass = '/class=([\'"])(?<class>.*?)([\'"])/i';
                $img = preg_replace($patternClass, ' class = "lazyload $2" ', $img);
            }else{

                $img = str_replace("img ", 'img class="lazyload" ', $img );
            }
            return $img;
        }, $content);
    }

    public static function toJsonString($text){

        return trim(htmlentities(preg_replace('/\s\s+/', ' ', $text)));
    }

    public static function createRateValueByDate($val){

        $month = round(date('m') / 10) * 7;
        $day   = round(date('d') / 10) * 2;
        $year  = date('y');

        return  round( $val + 2 ) * 5 + 6 + $day + $month + $year;
    }

    public static function createTokenSameJs($domain = '', $RANDOMX = 13748600747, $RANDOMY = 40216416130){

        $sum1 = 0;
        $sum2 = 0;

        // this will convert $domain to a UTF-16 string,
        // without specifying the third parameter, PHP will
        // assume the string uses PHP's internal encoding,
        // you might want to explicitly set the `from_encoding`
        $domain = mb_convert_encoding($domain, 'UTF-16');

        $length = mb_strlen($domain, 'UTF-16');
        $i = $length - 1;

        for ( $i; $i >= 0; $i-- ) {
            $char = mb_substr($domain, $i, 1, 'UTF-16');
            $sum1 += hexdec(bin2hex($char)) * $RANDOMX;
            $sum2 += hexdec(bin2hex($char)) * $RANDOMY;
        }
        $newsum = strval($sum1);
        $sum2   = strval($sum2);
        return substr($newsum,0,8) . substr($sum2,0,8);
    }

    public static function getRecordByValueConfig($configs, $val ){
        foreach( $configs as $key => $config ){
            if( isset($config['VALUE']) && $config['VALUE'] == $val ){
                return $config;
            }
        }
        return null;
    }


    public static function createCodeVerify(){
        $CHARACTERS = '0123456789';
        
        return     substr($CHARACTERS, rand(0, strlen($CHARACTERS) - 1), 1)
                    . substr($CHARACTERS, rand(0, strlen($CHARACTERS) - 1), 1)
                    . substr($CHARACTERS, rand(0, strlen($CHARACTERS) - 1), 1)
                    . substr($CHARACTERS, rand(0, strlen($CHARACTERS) - 1), 1)
                    . substr($CHARACTERS, rand(0, strlen($CHARACTERS) - 1), 1)
                    . substr($CHARACTERS, rand(0, strlen($CHARACTERS) - 1), 1)
                ;
    }
}


