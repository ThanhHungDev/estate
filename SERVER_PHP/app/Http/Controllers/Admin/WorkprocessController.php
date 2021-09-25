<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Option;
use App\Models\Workprocess;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class WorkprocessController extends Controller
{
    /**
     * Show form save data of component ( insert or edit )
     *
     * @return View
     */
    public function index(){

        $workprocess  = Workprocess::all();
        return view('admin.workprocess.save', compact([ 'workprocess' ]));
    }


    public function store(Request $request){

        ///setting data insert table post
        $workprocessInput = $request->only('title', 'type', 'excerpt_text', 'excerpt_html');
        
        // Start transaction!
        DB::beginTransaction();
        try{
            /// create instance Post Model 
            $workprocess = new Workprocess();
            $workprocess->truncate();

            $workprocessInputs = [];
            
            for ($i=0; $i < count($workprocessInput['title']); $i++) { 
                
                $workprocessInputs[] = [
                    'title'        => trim($workprocessInput['title'][$i]),
                    'type'       => $workprocessInput['type'][$i],
                    'excerpt_text' => $workprocessInput['excerpt_text'][$i],
                    'excerpt_html' => $workprocessInput['excerpt_html'][$i]
                ];
            }
            $workprocess->insert($workprocessInputs);
            

            DB::commit();
            $request->session()->flash(Config::get('constant.SAVE_SUCCESS'), true);
            return redirect()->route('ADMIN_STORE_WORKPROCESS');

        }catch (\Exception $e){
            // Rollback db
            DB::rollback();
            
            return redirect()->back()
            ->with(Config::get('constant.SAVE_ERROR'), 'đã có lỗi: '.$e->getMessage())
            ->withInput($request->all());
        }
    }
}
