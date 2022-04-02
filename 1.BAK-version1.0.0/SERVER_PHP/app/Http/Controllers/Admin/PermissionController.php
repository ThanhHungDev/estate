<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Permission;
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
        $permissions = Permission::paginate( $limit );
        return view('admin.permission.load', compact(['permissions']));
    }
}
