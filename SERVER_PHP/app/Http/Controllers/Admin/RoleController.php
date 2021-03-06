<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ADMIN_VALIDATE_SAVE_ROLE;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;

class RoleController extends Controller
{
    /**
     * Show form save data of component ( insert or edit )
     *
     * @return View
     */
    public function index( $id = 0 ){

        if( !$id ){
            /// thêm mới
            $role    = $this->model->createRoleModel()->getInstanceEmpty();
        }else{
            //// edit 
            $role    = $this->model->createRoleModel()->find($id);
            if( !$role ){
                //// redirect 404
                return abort(404);
            }
        }
        
        return view('admin.role.save', compact([ 'role' ]));
    }


    public function save(ADMIN_VALIDATE_SAVE_ROLE $request, $id = 0){

        ///setting data insert table topic

        $roleInput = $request->only( 'name', 'type');

        /// set id save role 
        $roleInput['id'] = $id;
        
        try{
            /// create instance role Model 
            $role = $this->model->createRoleModel();

            $role->save($roleInput);
            $roleModel = $role->getModelInstance();
            $roleID = $roleModel->id;

            $request->session()->flash(Config::get('constant.SAVE_SUCCESS'), true);
            return redirect()->route('ADMIN_STORE_ROLE',  ['id' => $roleID ]);

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
        $roles = $this->model->createRoleModel()->paginate( $limit );
        return view('admin.role.load', compact(['roles']));
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

        $this->model->createRoleModel()->find($id)->delete();

        $status = 200;
        $response = array( 'status' => $status, 'message' => 'success' );
        return response()->json( $response );
    }
}
