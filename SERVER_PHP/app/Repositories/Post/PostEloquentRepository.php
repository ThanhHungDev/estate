<?php
namespace App\Repositories\Post;

use App\Models\Post;
use App\Repositories\EloquentRepository;

class PostEloquentRepository extends EloquentRepository implements PostRepositoryInterface
{
    /**
     * get model
     * @return string
     */
    public function getModel()
    {
        return Post::class;
    }

    public function getPostBySlug( $slug ){
        
        return $this->_model->where('slug', $slug )->first();
    }

    public function getPostByCondition( $condition ){

        $mainTable = 'posts';
        $filter = $this->_model ->join('topics', 'posts.topic_id', "=", "topics.id")
                                ->select(["$mainTable.*", 'topics.name as topic_name'])
                                ->orderBy("topic_id", "DESC")
                                ->orderBy("sort", "DESC");
        if( isset($condition['ignore']) ){

            $filter = $filter->whereNotIn("$mainTable.id", $condition['ignore'] );
        }
        if( isset($condition['public']) ){

            $filter = $filter->where("$mainTable.public", $condition['public']);
        }
        if( isset($condition['orderby']) ){
            
            $filter = $filter->orderBy($mainTable . "." . $condition['orderby']['field'], $condition['orderby']['type']);
        }
        if( isset($condition['topic_id']) ){

            $filter = $filter->where('topic_id', $condition['topic_id']);
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


    public function getPostRelationPostId( $ids ){

        return $this->_model
        ->join('post_tag_actives as pta1', 'posts.id', '=', 'pta1.post_id')
        ->join('post_tag_actives as pta2', 'pta1.tag_id', '=', 'pta2.tag_id')
        ->whereIn('pta2.post_id', $ids )
        ->whereNotIn('posts.id', $ids )
        ->groupby('posts.id')
        ->orderBy('posts.view', 'DESC')
        ->select("posts.*");
    }
    
}