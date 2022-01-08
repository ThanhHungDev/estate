<?php

namespace App\Models;

use App\Helpers\SupportString;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';
    
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

    public function childs(){

        return $this->hasMany( Category::class, 'parent');
    }

    /**
     * là mối quan hệ dạng 1 nhiều ví dụ : 
     * product -> categories thì thứ tự sẽ là như dưới
     */
    public function products(){

        return $this->hasMany( Product::class, 'category_id');
    }




    public function getCategoryByCondition( $condition ){

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
