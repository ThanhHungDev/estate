<?php

namespace App\Models;

use App\Helpers\SupportString;
use Illuminate\Database\Eloquent\Model;

class Ptag extends Model
{
    protected $table = 'ptags';

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
     * là mối quan hệ dạng nhiều nhiều
     */
    public function products(){

        return $this->belongsToMany( Product::class, 'product_tag_actives', 'ptag_id', 'product_id');
    }
}
