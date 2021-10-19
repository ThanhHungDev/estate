<?php 
namespace App\Helpers;

use App\Factory\BaseModel;
use App\Models\Option;
use App\Models\Picture;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Session;
use Tymon\JWTAuth\Facades\JWTAuth;

class SupportDB{

    public static $OPTIONS = null;
    public static $PICTURES = null;

    public static function getOption( $key ){

        if( !static::$OPTIONS ){

            $optionModel = new Option();
            $options     = $optionModel->all();

            $DF_OP = [];
            foreach( $options as $option ){

                $DF_OP[] = [ 
                    'key'        => SupportString::createSlug($option->key),
                    'type'       => $option->type,
                    'value_text' => $option->value_text,
                    'value_html' => $option->value_html,
                ];
            }
            static::$OPTIONS = $DF_OP;
        }

        
        if( static::$OPTIONS ){
            for ($index=0; $index < count(static::$OPTIONS); $index++) { 

                $DF_OPTION_ROW = static::$OPTIONS[$index];
                if( 
                    isset($DF_OPTION_ROW['key']) && 
                    $DF_OPTION_ROW['key'] == SupportString::createSlug($key) 
                    ){

                    if( $DF_OPTION_ROW['type'] == Config::get('constant.TYPE_OPTION.SINGLE')){
                        return $DF_OPTION_ROW['value_text'];
                    }
                    return $DF_OPTION_ROW['value_html'];
                }
            } 
        }
        
        return $key;
    }

    public static function getPicture( $key ){

        if( !static::$PICTURES ){

            $pictureModel = new Picture();
            $pictures     = $pictureModel->all();
            
            static::$PICTURES = $pictures;
        }

        if( static::$PICTURES ){

            $lengthPics = count(static::$PICTURES);

            for ($index=0; $index < $lengthPics; $index++) { 

                $DF_PICTURE_ROW = static::$PICTURES[$index];
                if( 
                    isset($DF_PICTURE_ROW['key']) && 
                    $DF_PICTURE_ROW['key'] == SupportString::createSlug($key) 
                    ){
                        
                    return $DF_PICTURE_ROW;
                }
            } 
        }
        
        return null;
    }

    
    public static function getTagByCondition($condition){

        $tagModel = new Tag();

        return $tagModel->getTagByCondition($condition);
    }

    public static function getPostByCondition($condition){

        $postModel = new Post();

        return $postModel->getPostByCondition($condition);
    }
    

    public static function getJwtAuthentication(){
        $token = Session::get(Config::get("constant.TOKEN_COOKIE_NAME"), null );
        if( !!$token ){
            return $token;
        }
        /// check user logged 
        $user = Auth::user();
        if( !$user ){
            /// user not loged => return null
            return null;
        }
        /// tạo 1 token đưa về client lưu vào localStorage
        $token = JWTAuth::fromUser($user);
        Session::put(Config::get("constant.TOKEN_COOKIE_NAME"),$token);
        return $token;
    }

    public static function resetJwtAuthentication(){
        Session::forget(Config::get("constant.TOKEN_COOKIE_NAME") );
    }
}