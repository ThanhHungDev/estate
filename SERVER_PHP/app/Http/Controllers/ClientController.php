<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;

class ClientController extends Controller
{
    /**
     * CLIENT HOME PAGE
     */
    public function index(){

        return view('client.home');
    }

    public function contact( ){
        
        return view('client.contact');
    }

    
    public function searchPost( Request $request){

        $limit = 10;
        $query = null;
        if($request->has('q')) {
            $query = $request->query('q');
        }
        $search = $this->model->createDBModel()->searchPost($query)->paginate($limit);

        $conditionPost = [
            'ignore' => $search->pluck('id')->toArray(),
            'orderby' => [ 'field' => 'view', 'type' => 'DESC' ],
            'public' => 1
        ];
        $postMaxView = $this->model->createPostModel()
        ->getPostByCondition($conditionPost)->take( 4 )->get(); 
        
        $tags = $this->model->createTagModel()
        ->getTagByPostId($search->pluck('id')->toArray())->take(10)->get();
        return view('client.search', compact('search', 'query', 'tags', 'postMaxView'));
    }


    public function postDetail( Request $request, $slug ){
        
        $postModel = $this->model->createPostModel();
        $post      = $postModel->getPostBySlug($slug);
        if( !$post ){
            return abort(404);
        }
        
        if($post->public == Config::get('constant.TYPE_SAVE.ADMIN_READ')){
            if (!Auth::check()){

                return abort(403);
            }
        }

        $rateAuthor = $post->rateAuthor()->first();
        if( $post->type == Config::get('constant.TYPE-POST.PAGE')){

            return view('client.page-view', compact('post', 'rateAuthor'));
        }
        $post->view += 1;
        $post->save();

        $tags = $post->tags()->take(10)->get();
        $topic       = $post->topic()->first();

        $posts_in_topic = null;
        if($topic){
            $conditionPostInTopic = [
                'ignore'   => [ $post->id ],
                'orderby'  => [ 'field' => 'view', 'type' => 'DESC' ],
                'topic_id' => $topic->id,
                'public' => 1
            ];
            $posts_in_topic = $postModel->getPostByCondition($conditionPostInTopic)->take(10)->get();
        }
        

        $conditionPostMaxView = [
            'ignore' => [ $post->id ],
            'orderby' => [ 'field' => 'view', 'type' => 'DESC' ],
            'public' => 1
        ];
        $postMaxView = $postModel->getPostByCondition($conditionPostMaxView)->take( 3 )->get();
        
        return view('client.post-view', compact('post', 'tags', 'topic', 'rateAuthor', 'postMaxView', 'posts_in_topic'));
    }
}
