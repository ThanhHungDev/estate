<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ADMIN_VALIDATE_SAVE_REVIEW;
use App\Models\Review;
use Illuminate\Support\Facades\Config;

class ReviewController extends Controller
{
    /**
     * Show form save data of component ( insert or edit )
     *
     * @return View
     */
    public function index( $id = 0 ){
        
        if( !$id ){
            /// thêm mới
            $review    = new Review();
        }else{
            //// edit 
            $review    = Review::find($id);
            if( !$review ){
                //// redirect 404
                return abort(404);
            }
        }
        
        return view('admin.review.save', compact([ 'review' ]));
    }


    public function save(ADMIN_VALIDATE_SAVE_REVIEW $request, $id = 0){

        ///setting data insert table review
        $reviewInput = $request->only( 'avatar', 'topic', 'excerpt', 'author' );
        
        try{

            $review = Review::find( $id );
            if( !$review ){
                $review = Review::create( $reviewInput );
            }else{
                $review->fill($reviewInput)->save();
            }

            $request->session()->flash(Config::get('constant.SAVE_SUCCESS'), true);
            return redirect()->route('ADMIN_STORE_REVIEW',  ['id' => $review->id ]);

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
        $reviews = Review::paginate( $limit );
        return view('admin.review.load', compact(['reviews']));
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
     * Delete 1 reviews
     *
     * @param  int  $id
     * @return View
     */
    public function delete($id = 0){

        Review::find($id)->delete();

        $status = 200;
        $response = array( 'status' => $status, 'message' => 'success' );
        return response()->json( $response );
    }
}
