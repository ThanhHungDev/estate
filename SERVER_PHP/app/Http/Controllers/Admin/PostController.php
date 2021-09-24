<?php

namespace App\Http\Controllers\Admin;


use App\Helpers\SupportJson;
use App\Helpers\SupportString;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ADMIN_VALIDATE_SAVE_POST;
use App\Libraries\Catalogue;
use App\Mail\MailPosting;
use App\Models\Post;
use App\Models\PostTagActive;
use App\Models\Rating;
use App\Models\Tag;
use App\Models\Topic;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class PostController extends Controller
{
    
    /**
     * Show form save data of component ( insert or edit )
     *
     * @return View
     */
    public function index( $id = 0 ){

        $user_id = Auth::user()->id;
        $topics  = (new Topic())->all();
        $tags    = (new Tag())->all();

        $rates   = (new Rating())->all();

        if( !$id ){
            /// thêm mới
            $post    = new Post();
            $tags_id = 0;
        }else{
            //// edit 
            $post    = (new Post())
            ->getPostById($id, [
                DB::raw("ldjson->>'showto' as showto"),
                DB::raw("ldjson->>'howto' as howto"),
                '*'
            ]);
            $tags_id = (new PostTagActive())->where('post_id', $id)->pluck('tag_id');
            if( !$post ){
                //// redirect 404
                return abort(404);
            }
        }
        
        return view('admin.post.save', compact([ 'topics', 'tags', 'rates', 'tags_id', 'post' ]));
    }


    public function save(ADMIN_VALIDATE_SAVE_POST $request, $id = 0){

        ///setting data insert table post
        $postInput = $request->only('topic_id', 'rating_id', 'rate_value', 'rate_review_body', 'title', 'slug', 'excerpt', 
        'content', 'background', 'thumbnail', 'public', 'site_name', 'howto', 'showto',
        'image_seo', 'description_seo', 'type', 'stylesheet', 'javascript');

        $postInput['user_id'] = Auth::user()->id;
        $postInput['content'] = SupportString::createEmoji($postInput['content']);

        /// create catalogue
                   $catalogue        = Catalogue::generate($postInput['content']);
        $postInput['content']        = $catalogue->text;
        $postInput['text_content']   = SupportString::cleanText($postInput['content']);

        $postInput['catalogue']      = $catalogue->catalogue;
        $postInput['text_catalogue'] = $catalogue->text_catalogue;

        $postInput['description_seo'] = SupportString::createDescription($postInput['description_seo'], $catalogue->text_catalogue);

        /// if howto-json null => render new 
        if(!trim($postInput['howto'])){

            $postInput['ldjson'] = [
                'showto' => $postInput['showto'],
                'howto' => SupportJson::createJsonHowTo(
                    Route('POST_VIEW', ['slug' => $postInput['slug']]),
                    $postInput['title'],
                    $postInput['description_seo'],
                    $postInput['content'],
                    $postInput['image_seo']
                )
            ];
        }else{

            $postInput['ldjson'] = [
                'showto' => $postInput['showto'],
                'howto'  => json_decode($postInput['howto'])
            ];
        }
        if( !$postInput['rate_value'] ){
            unset($postInput['rating_id']);
            unset($postInput['rate_value']);
        }
        unset($postInput['howto']);
        unset($postInput['showto']);

        /// create style
        $postInput['stylesheet'] = SupportString::minimizeCSSsimple($postInput['stylesheet']);
        /// create javascript
        $postInput['javascript'] = SupportString::minimizeJavascriptSimple($postInput['javascript']);
        
        try{
            if( !$id && $this->checkSlugExist( $postInput['slug'] )){
                
                throw new Exception('thêm mới nhưng slug đã tồn tại');
            }
            /// create instance Post Model 
            // $post          = new Post();
            $postTagActive = new PostTagActive();

            $post = Post::find( $id );
            if( !$post ){
                $post = Post::create( $postInput );
            }else{
                $post->fill($postInput)->save();
            }
            

            $postId = $post->id;
            /// save tag of post 
            $postTagActive->where('post_id', $postId)->delete();

            $tagsInput      = $request->tag_id;
            if( $tagsInput ){
                $tagsDataInsert = array_map( 
                    function( $tag ) use ( $postId ){ 
                        return  ['post_id' => $postId, 'tag_id' => $tag ]; 
                    }, $tagsInput
                );
                $postTagActive->insert($tagsDataInsert);
            }
            /// đây là user
            // try {
            //     $auth       = Auth::user();
            //     $emailAdmin = env('MAIL_TO_ADMIN', 'thanhhung.code@gmail.com');
            //     $dataMail   = array(
            //         'email'        => $auth->email,
            //         'name'         => $auth->name,
            //         'message'      => "bạn cần duyệt bài để bài viết được công khai",
            //         'title'        => $postInput['title'],
            //         'text_content' => htmlentities(SupportString::limitText($postInput['text_content'], 500))
            //     );
            //     Log::channel('posting')->info("QUYỀN USER VỪA ĐĂNG BÀI" . $auth->email . " - " . $auth->name );
            //     Mail::to(trim($emailAdmin))
            //     ->send(new MailPosting($dataMail));
            //     if (Mail::failures()) {
    
            //         Log::channel('mail')->info("lỗi post bài $emailAdmin, không thể liên lạc với quản trị viên.");
            //     }
            //     $dataMail = array(
            //         'email'        => $auth->email,
            //         'name'         => $auth->name,
            //         'message'      => "Cảm ơn bạn đã đồng hành cùng " . Config::get('app.company_name') . ". Admin sẽ cố gắng duyệt bài sớm nhất có thể",
            //         'title'        => $postInput['title'],
            //         'text_content' => htmlentities(SupportString::limitText($postInput['text_content'], 500))
            //     );
            //     Log::channel('posting')->info("QUYỀN USER VỪA ĐĂNG BÀI" . $auth->email . " - " . $auth->name );
            //     Mail::to(trim($auth->contact))
            //     ->send(new MailPosting($dataMail));
            //     if (Mail::failures()) {
    
            //         Log::channel('mail')->info("lỗi post bài $auth->contact, không thể liên lạc với quản trị viên.");
            //     }
            // } catch (\Throwable $th) {
            //     //throw $th;
            // }

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
        $user_id    = Auth::user()->id;
        $postModel  = new Post();
        $topicModel = new Topic();


        $user_id    = Auth::user()->id;
        $conditionTopic = array();
        $condition = [
            'orderby' => [ 'field' => 'id', 'type' => 'DESC' ]
        ];

        $topics     = $topicModel->getTopicByCondition($conditionTopic)->get();

        $query      = $request->all('topic', 'post');

        

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

        Post::find($id)->delete();

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
            $post = (new Post())->find($id);
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
