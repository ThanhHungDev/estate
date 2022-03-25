<?php

namespace App\Models;

use App\Helpers\SupportString;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $table = 'tags';

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
     * là mối quan hệ dạng nhiều nhiều ví dụ : 
     * product -> activity -> style thì thứ tự sẽ là như dưới
     */
    public function posts(){

        return $this->belongsToMany( Post::class, 'post_tag_actives', 'tag_id', 'post_id');
    }


    public function getTagByPostId( $ids ){

        return $this
        ->join('post_tag_actives', 'tags.id', '=', 'post_tag_actives.tag_id')
        ->whereIn('post_tag_actives.post_id', $ids)
        ->groupBy('tags.id')
        ->orderByRaw('COUNT(post_tag_actives.post_id) DESC')
        ->select("tags.*")
        ;
    }
}
