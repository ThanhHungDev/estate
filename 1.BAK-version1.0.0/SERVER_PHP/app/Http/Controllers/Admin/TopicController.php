<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\SupportString;
use App\Http\Controllers\Controller;
use App\Http\Requests\ADMIN_VALIDATE_SAVE_TOPIC;
use App\Libraries\Catalogue;
use App\Models\Topic;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;

class TopicController extends Controller
{
    /**
     * Show form save data of component ( insert or edit )
     *
     * @return View
     */
    public function index( $id = 0 ){
        
        // if( !$id ){
        //     /// thêm mới
        //     $topic    = $this->model->createTopicModel()->getInstanceEmpty();
        // }else{
        //     //// edit 
        //     $topic    = $this->model->createTopicModel()->find($id);
        //     if( !$topic ){
        //         //// redirect 404
        //         return abort(404);
        //     }
        // }
        if( !$id ){
            /// thêm mới
            $topic    = new Topic();
        }else{
            //// edit 
            $topic    = Topic::find($id);
            if( !$topic ){
                //// redirect 404
                return abort(404);
            }
        }
        $users = User::all();
        
        return view('admin.topic.save', compact([ 'topic' , 'users']));
    }


    public function save(ADMIN_VALIDATE_SAVE_TOPIC $request, $id = 0){

        ///setting data insert table topic

        $topicInput = $request->only( 'name', 'slug', 'excerpt', 
        'content', 'background', 'thumbnail', 'site_name', 'user_id',
        'image_seo', 'description_seo');

        /// create catalogue
                    $catalogue = Catalogue::generate($topicInput['content']);
        $topicInput['content'] = $catalogue->text;

        $topicInput['catalogue']    = $catalogue->catalogue;
        
        $topicInput['description_seo'] = SupportString::createDescription($topicInput['description_seo'], $catalogue->text_catalogue);
        
        try{
            if( !$id && $this->checkSlugExist( $topicInput['slug'] )){
                
                throw new Exception('thêm mới nhưng slug đã tồn tại');
            }

            $topic = Topic::find( $id );
            if( !$topic ){
                $topic = Topic::create( $topicInput );
            }else{
                $topic->fill($topicInput)->save();
            }

            $topicID = $topic->id;

            $request->session()->flash(Config::get('constant.SAVE_SUCCESS'), true);
            return redirect()->route('ADMIN_STORE_TOPIC',  ['id' => $topicID ]);

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
    public function load(){
        $limit = 10;
        $topics = Topic::paginate( $limit );
        return view('admin.topic.load', compact(['topics']));
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
     * Delete 1 topic
     *
     * @param  int  $id
     * @return View
     */
    public function delete($id = 0){

        Topic::find($id)->delete();

        $status = 200;
        $response = array( 'status' => $status, 'message' => 'success' );
        return response()->json( $response );
    }
}
