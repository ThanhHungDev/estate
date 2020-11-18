<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PermissionController extends Controller
{
    /**
     * Show all row of component
     *
     * @return View
     */
    public function load(){
        $limit = 10;
        $permissions = $this->model->createPermissionModel()->paginate( $limit );
        return view('admin.permission.load', compact(['permissions']));
    }
}
