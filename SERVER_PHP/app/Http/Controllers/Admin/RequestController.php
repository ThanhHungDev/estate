<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\RequestInformation;
use App\Models\RequestTime;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Request;

class RequestController extends Controller
{
    /**
     * Show all row of reqquest
     *
     * @return View
     */
    public function index(Request $request){
        $limit      = Config::get('constant.LIMIT');
        $requestInformationModel  = new RequestInformation();

        $condition = [
            'orderby' => [ 'field' => 'updated_at', 'type' => 'DESC' ]
        ];

        $requests = $requestInformationModel
                        ->getRequestInformationByCondition($condition)
                        ->paginate( $limit )
                        ->appends(request()->query());
        return view('admin.request.load', compact(['requests']));
    }

    /**
     * Show 1 reqquest
     *
     * @return View
     */
    public function detail(Request $request, $id ){
        $limit      = Config::get('constant.LIMIT');
        $requestInformationModel  = new RequestInformation();

        $condition = [
            'orderby' => [ 'field' => 'id', 'type' => 'DESC' ],
            'where' => [ 'id', $id  ]
        ];
        $requestInfor = $requestInformationModel
                        ->getRequestInformationByCondition($condition)
                        ->first();

        $requestTimes = $requestInfor->requestTimes()
        ->paginate( $limit )
        ->appends(request()->query());
        return view('admin.request.detail', compact(['requestInfor', 'requestTimes']));
    }
    
    /**
     * Delete 1 post
     *
     * @param  int  $id
     * @return View
     */
    public function delete($id = 0){

        RequestInformation::find($id)->delete();

        $requestDetail = RequestTime::where('request_id', $id)->first();
        if( $requestDetail ){
            $requestDetail->delete();
        }

        $status = 200;
        $response = array( 'status' => $status, 'message' => 'success' );
        return response()->json( $response );
    }
}
