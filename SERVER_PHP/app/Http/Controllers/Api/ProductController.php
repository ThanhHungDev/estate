<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
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
        $product = Product::where('user_id', $user->id)->where('id', $id)->firstOrFail();
        return response()
            ->success(
                'thành công',
                $product,
                Response::HTTP_OK
            )
            ->setStatusCode(Response::HTTP_OK);
    }
}
