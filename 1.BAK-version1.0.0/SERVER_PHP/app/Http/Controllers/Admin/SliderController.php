<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ADMIN_VALIDATE_SAVE_SLIDER;
use App\Libraries\Catalogue;
use App\Models\Slider;
use Illuminate\Support\Facades\Config;

class SliderController extends Controller
{
    /**
     * Show form save data of component ( insert or edit )
     *
     * @return View
     */
    public function index( $id = 0 ){
        
        if( !$id ){
            /// thêm mới
            $slider    = new Slider();
        }else{
            //// edit 
            $slider    = Slider::find($id);
            if( !$slider ){
                //// redirect 404
                return abort(404);
            }
        }
        
        return view('admin.slider.save', compact([ 'slider' ]));
    }


    public function save(ADMIN_VALIDATE_SAVE_SLIDER $request, $id = 0){

        ///setting data insert table slider
        $sliderInput = $request->only( 'src', 'alt', 'topic', 'excerpt', 'title', 'content' );
        
        try{

            $slider = Slider::find( $id );
            if( !$slider ){
                $slider = Slider::create( $sliderInput );
            }else{
                $slider->fill($sliderInput)->save();
            }

            $request->session()->flash(Config::get('constant.SAVE_SUCCESS'), true);
            return redirect()->route('ADMIN_STORE_SLIDER',  ['id' => $slider->id ]);

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
        $sliders = Slider::paginate( $limit );
        return view('admin.slider.load', compact(['sliders']));
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

        Slider::find($id)->delete();

        $status = 200;
        $response = array( 'status' => $status, 'message' => 'success' );
        return response()->json( $response );
    }
}
