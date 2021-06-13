<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\SupportString;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ADMIN_VALIDATE_SAVE_POST;
use App\Libraries\Catalogue;
use Error;
use Exception;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Gate;

class PostController extends Controller
{
    
    /**
     * Show form save data of component ( insert or edit )
     *
     * @return View
     */
    public function index( $id = 0 ){

        $topics  = $this->model->createTopicModel()->getAll();
        $tags    = $this->model->createTagModel()->getAll();
        $rates   = $this->model->createRatingModel()->getAll();

        if( !$id ){
            /// thêm mới
            $post    = $this->model->createPostModel()->getInstanceEmpty();
            $tags_id = 0;
        }else{
            //// edit 
            $post    = $this->model->createPostModel()->find($id);
            $tags_id = $this->model->createPostTagActiveModel()->getByPost($id);
            if( !$post ){
                //// redirect 404
                return abort(404);
            }
        }
        
        return view('admin.post.save', compact([ 'topics', 'tags', 'rates', 'tags_id', 'post' ]));
    }


    public function save(ADMIN_VALIDATE_SAVE_POST $request, $id = 0){

        ///setting data insert table post
        $postInput = $request->only('topic_id', 'rating_id', 'rate_value', 'title', 'slug', 'excerpt', 
        'content', 'background', 'thumbnail', 'public', 'site_name', 
        'image_seo', 'description_seo', 'type', 'stylesheet', 'javascript');


        /// check permission 
        if( !Gate::allows('insert') && !Gate::allows('edit') && !Gate::allows('censor') ){
            
            abort('403', 'Permission denied');
        }
        if( !$id && !Gate::allows('insert') ){

            abort('403', 'Permission denied');
        }
        if( $id && !Gate::allows('edit') ){
            
            abort('403', 'Permission denied');
        }
        if( 
            $postInput['public'] == Config::get('constant.TYPE_SAVE.PUBLIC') && 
            !Gate::allows('censor')
            ){
                abort('403', 'Permission denied');
        }

        /// create catalogue
                   $catalogue   = Catalogue::generate($postInput['content']);
        $postInput['content']   = $catalogue->text;
        $postInput['catalogue'] = $catalogue->catalogue;

        /// create style
        $postInput['stylesheet'] = SupportString::minimizeCSSsimple($postInput['stylesheet']);
        /// create javascript
        $postInput['javascript'] = SupportString::minimizeJavascriptSimple($postInput['javascript']);
        /// set id save post 
        $postInput['id'] = $id;
        
        try{
            if( !$id && $this->checkSlugExist( $postInput['slug'] )){
                
                throw new Exception('thêm mới nhưng slug đã tồn tại');
            }
            /// create instance Post Model 
            $post          = $this->model->createPostModel();
            $postTagActive = $this->model->createPostTagActiveModel();

            $post->save($postInput);

            $postId = $post->getModelInstance()->id;
            /// save tag of post 
            $postTagActive->removeByPostId($postId);

            $tagsInput      = $request->tag_id;
            if( $tagsInput ){
                $tagsDataInsert = array_map( 
                    function( $tag ) use ( $postId ){ 
                        return  ['post_id' => $postId, 'tag_id' => $tag ]; 
                    }, $tagsInput
                );
                $postTagActive->insert($tagsDataInsert);
            }

            $request->session()->flash(Config::get('constant.SAVE_SUCCESS'), true);
            return redirect()->route('ADMIN_STORE_POST',  ['id' => $postId]);

        }catch (\Exception $e){
            return redirect()->back()
            ->with(Config::get('constant.SAVE_ERROR'), 'đã có lỗi: '.$e->getMessage())
            ->withInput($request->all());
        }
    }

    /**
     * Show all row of component
     *
     * @return View
     */
    public function load(Request $request){
        $limit      = 10;
        $postModel  = $this->model->createPostModel();
        $topicModel = $this->model->createTopicModel();
        $topics     = $topicModel->getAll();
        $query      = $request->all('topic', 'post');

        $condition = [
            'orderby' => [ 'field' => 'id', 'type' => 'DESC' ]
        ];

        if($query['topic']){
            
            $condition['topic'] = $query['topic'];
        }

        if($query['post']){

            $condition['post'] = $query['post'];
        }

        $posts = $postModel->getPostByCondition($condition)->paginate( $limit )->appends(request()->query());
        return view('admin.post.load', compact(['posts', 'query', 'topics']));
    }

    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return View
     */
    public function show($id)
    {
        //// detail component
    }
    
    /**
     * Delete 1 post
     *
     * @param  int  $id
     * @return View
     */
    public function delete($id = 0){

        $this->model->createPostModel()->find($id)->delete();

        $status = 200;
        $response = array( 'status' => $status, 'message' => 'success' );
        return response()->json( $response );
    }
    /**
     * Delete 1 post
     *
     * @param  int  $id
     * @return View
     */
    public function update($id = 0, Request $request){

        $status = 200;
        $message = 'success';
        $query = $request->all([ 'sort' ]);
        try {
            $post = $this->model->createPostModel()->find($id);
            $post->sort = (int)$query['sort'];
            $post->save();
        } catch (\Throwable $th) {
            $message = $th->getMessage();
            $status = 500;
        }
        $response = array( 'status' => $status, 'message' => $message );
        return response()->json( $response, $status);
    }
}
