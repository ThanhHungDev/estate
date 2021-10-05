<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class ProductController extends Controller
{
    //
    public function index(){

        $postModel = $this->model->createPostModel();
        $posts = $postModel->getAll();
        return PostResource::collection($posts);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Product|\Illuminate\Database\Eloquent\Model
     */
    public function store(Request $request)
    {
        // $postModel = $this->model->createPostModel();
        // $booking = BookingModel::create($request->all());
        // return new BookingResource($booking);
    }
    

    /**
     * Display the specified resource.
     *
     * @param Product $product
     * @return Product
     */
    public function show($id)
    {
        $user = JWTAuth::parseToken()->authenticate();
        // xác nhận thành công thì trả về 1 token hợp lệ
        return response()->json(compact('user'));
    }
}
