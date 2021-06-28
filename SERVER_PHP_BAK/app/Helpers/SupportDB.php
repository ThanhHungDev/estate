<?php 
namespace App\Helpers;

use App\Factory\BaseModel;
use Illuminate\Support\Facades\Config;

class SupportDB{

    public static $OPTIONS = null;
    public static $PICTURES = null;

    public static function getOption( $key ){

        if( !static::$OPTIONS ){

            $baseModel   = new BaseModel();
            $optionModel = $baseModel->createOptionModel();
            $options     = $optionModel->getAll();

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

            $baseModel    = new BaseModel();
            $pictureModel = $baseModel->createPictureModel();
            $pictures     = $pictureModel->getAll();
            
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

        $baseModel   = new BaseModel();
        $tagModel = $baseModel->createTagModel();

        return $tagModel->getTagByCondition($condition);
    }

    public static function getPostByCondition($condition){

        $baseModel   = new BaseModel();
        $postModel = $baseModel->createPostModel();

        return $postModel->getPostByCondition($condition);
    }
    

}