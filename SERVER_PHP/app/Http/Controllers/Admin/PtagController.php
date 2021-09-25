<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\SupportString;
use App\Http\Controllers\Controller;
use App\Http\Requests\ADMIN_VALIDATE_SAVE_PTAG;
use Illuminate\Http\Request;
use App\Libraries\Catalogue;
use App\Models\Ptag;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Config;

class PtagController extends Controller
{
    /**
     * Show form save data of component ( insert or edit )
     *
     * @return View
     */
    public function index( $id = 0 ){
        
        if( !$id ){
            /// thêm mới
            $ptag    = new Ptag();
        }else{
            //// edit 
            $ptag    = Ptag::find($id);
            if( !$ptag ){
                //// redirect 404
                return abort(404);
            }
        }
        $users = User::all();
        
        return view('admin.ptag.save', compact([ 'ptag', 'users' ]));
    }


    public function save(ADMIN_VALIDATE_SAVE_PTAG $request, $id = 0){

        ///setting data insert table ptag
        $ptagInput = $request->only( 'name', 'slug', 'excerpt', 
        'content', 'background', 'thumbnail', 'site_name', 'user_id',
        'image_seo', 'description_seo');
        
        /// create catalogue
        $catalogue = Catalogue::generate($ptagInput['content']);
        
        $ptagInput['content']      = $catalogue->text;
        $ptagInput['catalogue']    = $catalogue->catalogue;

        $ptagInput['description_seo'] = SupportString::createDescription($ptagInput['description_seo'], $catalogue->text_catalogue);
        
        try{
            if( !$id && $this->checkSlugExist( $ptagInput['slug'] )){
                
                throw new Exception('thêm mới nhưng slug đã tồn tại');
            }

            $ptag = Ptag::find( $id );
            if( !$ptag ){
                $ptag = Ptag::create( $ptagInput );
            }else{
                $ptag->fill($ptagInput)->save();
            }

            $ptagID = $ptag->id;

            $request->session()->flash(Config::get('constant.SAVE_SUCCESS'), true);
            return redirect()->route('ADMIN_STORE_PTAG',  ['id' => $ptagID ]);

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
        $ptags = Ptag::paginate( $limit );
        return view('admin.ptag.load', compact(['ptags']));
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
     * Delete 1 Ptag
     *
     * @param  int  $id
     * @return View
     */
    public function delete($id = 0){

        Ptag::find($id)->delete();

        $status = 200;
        $response = array( 'status' => $status, 'message' => 'success' );
        return response()->json( $response );
    }
}
