<?php

namespace App\Models;

use App\Helpers\SupportString;
use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    protected $table = 'topics';

    protected $fillable = ['id', 'name', 'slug', 'excerpt', 
    'content', 'background', 'thumbnail', 'site_name', 'user_id',
    'image_seo', 'description_seo'];

    public function getName( $limit = 10, $ellipsis = '...' ){

        if( $this->name ){
            return SupportString::limitText( $this->name, $limit, $ellipsis );
        }
        return null;
    }

    public function getDescriptionSeo( $limit = 10, $ellipsis = '...' ){

        if( $this->description_seo ){
            return SupportString::limitText( $this->description_seo, $limit, $ellipsis );
        }
        return null;
    }

    /**
     * là mối quan hệ dạng 1 nhiều ví dụ : 
     * product -> activity -> style thì thứ tự sẽ là như dưới
     */
    public function posts(){

        return $this->hasMany( Post::class, 'topic_id');
    }




    public function getTopicByCondition( $condition ){

        $filter = $this;
        if( isset($condition['ignore']) ){
            $filter = $filter->whereNotIn('id', $condition['ignore'] );
        }
        if( isset($condition['orderby']) ){

            $filter = $filter->orderBy($condition['orderby']['field'], $condition['orderby']['type']);
        }
        if(isset($condition['user_id'])){

            $filter = $filter->where('user_id', $condition['user_id']);
        }

        return $filter;
    }  
}
