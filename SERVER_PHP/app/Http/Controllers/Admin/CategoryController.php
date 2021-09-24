<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\SupportString;
use App\Http\Controllers\Controller;
use App\Http\Requests\ADMIN_VALIDATE_SAVE_CATEGORY;
use App\Libraries\Catalogue;
use App\Models\Category;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;

class CategoryController extends Controller
{
    /**
     * Show form save data of component ( insert or edit )
     *
     * @return View
     */
    public function index( $id = 0 ){

        if( !$id ){
            /// thêm mới
            $category    = new Category();
        }else{
            //// edit 
            $category    = Category::find($id);
            if( !$category ){
                //// redirect 404
                return abort(404);
            }
        }
        $users = User::all();
        
        return view('admin.category.save', compact([ 'category' , 'users']));
    }


    public function save(ADMIN_VALIDATE_SAVE_CATEGORY $request, $id = 0){

        ///setting data insert table Category

        $categoryInput = $request->only( 'name', 'slug', 'excerpt', 
        'content', 'background', 'thumbnail', 'site_name', 'user_id',
        'image_seo', 'description_seo');

        /// create catalogue
                    $catalogue = Catalogue::generate($categoryInput['content']);
        $categoryInput['content'] = $catalogue->text;

        $categoryInput['catalogue']    = $catalogue->catalogue;
        
        $categoryInput['description_seo'] = SupportString::createDescription($categoryInput['description_seo'], $catalogue->text_catalogue);
        
        try{
            if( !$id && $this->checkSlugExist( $categoryInput['slug'] )){
                
                throw new Exception('thêm mới nhưng slug đã tồn tại');
            }

            $category = Category::find( $id );
            if( !$category ){
                $category = Category::create( $categoryInput );
            }else{
                $category->fill($categoryInput)->save();
            }

            $categoryID = $category->id;

            $request->session()->flash(Config::get('constant.SAVE_SUCCESS'), true);
            return redirect()->route('ADMIN_STORE_CATEGORY',  ['id' => $categoryID ]);

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
        $categories = Category::paginate( $limit );
        return view('admin.category.load', compact(['categories']));
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
     * Delete 1 Category
     *
     * @param  int  $id
     * @return View
     */
    public function delete($id = 0){

        Category::find($id)->delete();

        $status = 200;
        $response = array( 'status' => $status, 'message' => 'success' );
        return response()->json( $response );
    }
}
