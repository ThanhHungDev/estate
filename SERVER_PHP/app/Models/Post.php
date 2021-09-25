<?php

namespace App\Models;

use App\Helpers\SupportString;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class Post extends Model
{
    protected $table = 'posts';
    protected $primaryKey = "id";
    public $incrementing = true;

    protected $fillable = ['id', 'user_id', 'topic_id', 'rating_id', 'rate_value', 'rate_review_body', 'title', 'slug', 'excerpt', 
    'content', 'background', 'thumbnail', 'public', 'site_name', 'ldjson', 'showto', 'howto',
    'image_seo', 'description_seo', 'type', 'stylesheet', 'javascript'];

    protected $casts = [
        'ldjson' => 'array'
    ];

    public function getType(){

        if( $this->type && $this->type == Config::get('constant.TYPE-POST.POST') ){
            return 'POST';
        }
        return 'PAGE';
    }

    public function getTitle( $limit = 10, $ellipsis = '...' ){

        if( $this->title ){
            return SupportString::limitText( $this->title, $limit, $ellipsis );
        }
        return null;
    }

    public function getDescriptionSeo( $limit = 10, $ellipsis = '...' ){

        if( $this->description_seo ){
            return SupportString::limitText( $this->description_seo, $limit, $ellipsis );
        }
        return null;
    }

    // public static function boot(){
        
    //     parent::boot();

    //     static::updating(function ($instance) {
    //         // update cache content
    //         $keys = [ static::class , $instance->slug ];
    //         Cache::put(implode(".", $keys ),$instance);
    //     });

    //     static::deleting(function ($instance) {
    //         // delete post cache
    //         $keys = [ static::class , $instance->slug ];
    //         Cache::forget(implode(".", $keys ));
    //     });
    // }

    /**
     * là mối quan hệ dạng nhiều nhiều ví dụ : 
     * product -> activity -> style thì thứ tự sẽ là như dưới
     */
    public function tags(){

        return $this->belongsToMany( Tag::class, 'post_tag_actives', 'post_id', 'tag_id');
    }

    public function rateAuthor(){

        return $this->belongsTo( Rating::class, 'rating_id');
    }

    /**
     * là mối quan hệ dạng nhiều tới 1 ví dụ : 
     */
    public function topic(){

        return $this->belongsTo( Topic::class, 'topic_id');
    }


















    public function getPostById( $id, $select = array() ){

        $filter = $this;

        if(!empty($select)){
            $filter = $filter->select($select);
        }
        
        $filter = $filter->where('id', $id )->first();
        return $filter;
    }

    public function getPostBySlug( $slug ){
        
        return $this->where('slug', $slug )->select([
            DB::raw("ldjson->>'showto' as showto"),
            DB::raw("ldjson->>'howto' as howto"),
            '*'
        ])->first();
    }

    public function getPostByCondition( $condition ){

        $mainTable = 'posts';
        $filter = $this ->join('topics', 'posts.topic_id', "=", "topics.id")
                                ->select(["$mainTable.*", 'topics.name as topic_name']);
        if( isset($condition['ignore']) ){

            $filter = $filter->whereNotIn("$mainTable.id", $condition['ignore'] );
        }
        if( isset($condition['public']) ){

            $filter = $filter->where("$mainTable.public", $condition['public']);
        }
        if( isset($condition['user_id']) ){

            $filter = $filter->where("$mainTable.user_id", $condition['user_id']);
        }
        
        if( isset($condition['topic_id']) ){

            $filter = $filter->where('topic_id', $condition['topic_id'])
                                ->orderBy("topic_id", "DESC")
                                ->orderBy("sort", "DESC");
        }
        if( isset($condition['orderby']) ){
            
            $filter = $filter->orderBy($mainTable . "." . $condition['orderby']['field'], $condition['orderby']['type']);
        }
        if( isset($condition['post']) ){

            $filter = $filter->where(function($query) use ($condition){
                $query->where("posts.slug", $condition['post']);
                $query->orWhere("posts.id", intval($condition['post']));
            });
        }
        if( isset($condition['topic']) ){

            $filter = $filter->where('topics.id', intval($condition['topic']));
        }

        return $filter;
    }

    public function getPostActiveByCondition(){

        return $this->where('public', Config::get('constant.TYPE_SAVE.PUBLIC'));
    }


    public function getPostRelationPostId( $ids ){

        return $this
        ->join('post_tag_actives as pta1', 'posts.id', '=', 'pta1.post_id')
        ->join('post_tag_actives as pta2', 'pta1.tag_id', '=', 'pta2.tag_id')
        ->whereIn('pta2.post_id', $ids )
        ->whereNotIn('posts.id', $ids )
        ->groupby('posts.id')
        ->where('posts.public', 1)
        ->orderBy('posts.view', 'DESC')
        ->select("posts.*");
    }


}
