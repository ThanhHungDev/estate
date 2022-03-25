<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\SupportString;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ADMIN_VALIDATE_SAVE_TAG;
use App\Libraries\Catalogue;
use App\Models\Tag;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Gate;

class TagController extends Controller
{
    /**
     * Show form save data of component ( insert or edit )
     *
     * @return View
     */
    public function index( $id = 0 ){
        
        if( !$id ){
            /// thêm mới
            $tag    = new Tag();
        }else{
            //// edit 
            $tag    = Tag::find($id);
            if( !$tag ){
                //// redirect 404
                return abort(404);
            }
        }
        $users = User::all();
        
        return view('admin.tag.save', compact([ 'tag', 'users' ]));
    }


    public function save(ADMIN_VALIDATE_SAVE_TAG $request, $id = 0){

        ///setting data insert table tag
        $tagInput = $request->only( 'name', 'slug', 'excerpt', 
        'content', 'background', 'thumbnail', 'site_name', 'user_id',
        'image_seo', 'description_seo');
        
        /// create catalogue
        $catalogue = Catalogue::generate($tagInput['content']);
        
        $tagInput['content']      = $catalogue->text;
        $tagInput['catalogue']    = $catalogue->catalogue;

        $tagInput['description_seo'] = SupportString::createDescription($tagInput['description_seo'], $catalogue->text_catalogue);
        
        try{
            if( !$id && $this->checkSlugExist( $tagInput['slug'] )){
                
                throw new Exception('thêm mới nhưng slug đã tồn tại');
            }

            $tag = Tag::find( $id );
            if( !$tag ){
                $tag = Tag::create( $tagInput );
            }else{
                $tag->fill($tagInput)->save();
            }

            $tagID = $tag->id;

            $request->session()->flash(Config::get('constant.SAVE_SUCCESS'), true);
            return redirect()->route('ADMIN_STORE_TAG',  ['id' => $tagID ]);

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
        $tags = Tag::paginate( $limit );
        return view('admin.tag.load', compact(['tags']));
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
     * Delete 1 tag
     *
     * @param  int  $id
     * @return View
     */
    public function delete($id = 0){

        Tag::find($id)->delete();

        $status = 200;
        $response = array( 'status' => $status, 'message' => 'success' );
        return response()->json( $response );
    }
}
