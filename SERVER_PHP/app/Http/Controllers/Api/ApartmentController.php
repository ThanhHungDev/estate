<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ApartmentProject;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Config;
use Tymon\JWTAuth\Facades\JWTAuth;

class ApartmentController extends Controller
{
    /**
     * projects Apartment
     */
    public function projects( Request $request){
        $query = $request->input('q', null);
        $limit = $request->input('limit', Config::get('constant.LIMIT'));
        if( $limit > 70 ){
            $limit = 70;
        }
        $page = $request->input('page', 0);

        $data = ApartmentProject::orderBy('id','DESC')
                                    ->limit($limit)
                                    ->offset(($page - 1) * $limit);
        if( $query ){
            $data = $data->where('name','LIKE',"%$query%");
        }
        $data = $data->get([
            'name', 
            'id', 
            'slug', 
            'public', 
            'type_id', 
            'type', 
            'introduction', 
            'short_introduction', 
            'process',
            'area_total',
            'address',
            'address2',
        ])->toArray();

            //                         $table->string('name', 500);
            // $table->string('slug', 500)->nullable();
            // $table->integer('public')->default(0); /// duyệt : is_active
            // $table->integer('type_id')->nullable(); /// type ví dụ 1 ... 4 ... 
            // $table->string('type', 255)->nullable();/// type ví dụ Khu phức hợp / Khu căn hộ / 
            // $table->text('introduction')->nullable();/// nội dung
            // $table->double('area_total')->nullable();/// tổng diện tích
            // $table->string('geo', 255)->nullable(); /// vị trí bản đồ map
            // $table->text('short_introduction')->nullable();/// nội dung
            // $table->string('process')->nullable();/// đang thi công / đã hoàn thành / ...
            
            // $table->string('address')->nullable(); /// Đường số 1
            // $table->string('address2')->nullable(); /// Quận Thủ Đức - Thành phố Thủ Đức, Tp Hồ Chí Minh
            // // $table->integer('province_id');
            // $table->integer('district_id')->nullable();

            // $table->integer('region_id')->nullable();
            // $table->integer('area_id')->nullable();
            // $table->integer('ward_id')->nullable();
            // $table->integer('street_id')->nullable();
            // $table->text('images')->nullable();
            // $table->text('bakup')->nullable();/// nội dung json
            // $table->string("project_oid");

        return response()
                    ->success(
                        'thành công',
                        $data,
                        Response::HTTP_OK
                    )
                    ->setStatusCode(Response::HTTP_OK);
    }


    /**
     * update user is verify code profile resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function patchVerifyPhone(Request $request){

        if (! $claim = JWTAuth::getPayload()) {
            return  response()
                    ->error(
                        'Token user not found', 
                        ['error' => 'user_not_found'],
                        Response::HTTP_NOT_FOUND
                    )
                    ->setStatusCode(Response::HTTP_NOT_FOUND);
        }
        /// query db find user
        $user = User::findOrFail($claim['id']);
        if( !$user ){
            return  response()
                    ->error(
                        'Token user not found', 
                        ['error' => 'user_not_found'],
                        Response::HTTP_NOT_FOUND
                    )
                    ->setStatusCode(Response::HTTP_NOT_FOUND);
        }
        $user->phone_verify = $request->input('phone_verify');
        $user->save();

        return response()
                    ->success(
                        'thành công',
                        $user->toArray(),
                        Response::HTTP_OK
                    )
                    ->setStatusCode(Response::HTTP_OK);
    }
}
