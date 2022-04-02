<?php

namespace App\Http\Controllers\Api;

use App\Helpers\SupportString;
use App\Http\Controllers\Controller;
use App\Http\Resources\ImageResource;
use App\Http\Resources\PostResource;
use App\Models\Picture;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
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
        $user = JWTAuth::parseToken()->authenticate();
        // nếu null thì không lấy để update
        $userInputUpdate = collect(request()->only('commune_id', 'home_number', 'street', 'role'))->filter()->all();
        $user->fill($userInputUpdate);
        $user->save();
        /// create token jwt
        $token = JWTAuth::fromUser($user);
  
        $productInput = collect($request->only(
            'content', 'category_id', 'project_id', 'title', 'content',
            'direction', 'direction_balcony', 'horizontal', 'vertical',
            'area',  'price', 'unit_price', 'negotiate', 'type',
            'posttype', 'public', 'extensions', 'description_seo',
        ))->filter()->all();

        $productInput['user_id']    = $user->id;
        $productInput['commune_id'] = $request->input('product_commune_id', null);
        $productInput['title']      = $productInput['title'] . "--" . time();
        $productInput['slug']       = SupportString::createSlug($productInput['title']);
        $productInput['content']    = SupportString::createEmoji($productInput['content']);
        ///
        $productInput['text_content']    = SupportString::cleanText($productInput['content']);
        $productInput['description_seo'] = SupportString::createDescription($productInput['title'], $productInput['text_content']);

        $images = $request->input('images', [[ 'root' => env('IMAGE_NOTFOUND', '/img/imagenotfound.jpg')]]);
        $firstImages = $images[0];
        $productInput['background'] = $firstImages['root'];
        $productInput['thumbnail']  = $firstImages['root'];
        //// create
        $production = Product::create($productInput);

        /// save image
        if( isset($images) ){
            $pics = [];
            foreach ($images as $key => $img) {
                $pics[] = [
                    'src'     => $img['root'],
                    'alt'     => $productInput['title'],
                    'key'     => $production->id,
                    'title'   => $productInput['title'],
                    'gallery' => Config::get("constant.GALARIES.PRODUCT")
                ];
            }
            /// 
            Picture::where('key', $production->id)->where( 'gallery', Config::get("constant.GALARIES.PRODUCT") )->delete();
            Picture::insert($pics);
        }

        return response()
                ->success(
                    'create apartment thành công', 
                    [
                        'input'      => $request->all(),
                        'production' => $production->toArray(),
                        'token'      => $token
                    ],
                    Response::HTTP_OK
                )
                ->setStatusCode(Response::HTTP_OK);
    }
    

    /**
     * Display the specified resource.
     *
     * @param Product $product
     * @return Product
     */
    public function show($id)
    {
        $user    = JWTAuth::parseToken()->authenticate();
        $product = Product::where('user_id', $user->id)->where('id', $id)->firstOrFail();
        $images  = Picture::where('key', $product->id)
                            ->where( 'gallery', Config::get("constant.GALARIES.PRODUCT") )
                            ->get();
        $images = ImageResource::collection($images); 

        return response()
            ->success(
                'thành công',
                compact([ 'product', 'user', 'images' ]),
                Response::HTTP_OK
            )
            ->setStatusCode(Response::HTTP_OK);
    }




    /**
     * update a resource in db.
     *
     * @param Request $request
     * @return Product|\Illuminate\Database\Eloquent\Model
     */
    public function update(Request $request, $id )
    {
        $user = JWTAuth::parseToken()->authenticate();
        // nếu null thì không lấy để update
        $userInputUpdate = collect(request()->only('commune_id', 'home_number', 'street', 'role'))->filter()->all();
        $user->fill($userInputUpdate);
        $user->save();
        /// create token jwt
        $token = JWTAuth::fromUser($user);
  
        $productInput = collect($request->only(
            'content', 'category_id', 'project_id', 'title', 'content',
            'direction', 'direction_balcony', 'horizontal', 'vertical',
            'area',  'price', 'unit_price', 'negotiate', 'type',
            'posttype', 'public', 'extensions', 'description_seo',
        ))->filter()->all();

        $productInput['user_id']    = $user->id;
        $productInput['commune_id'] = $request->input('product_commune_id', null);
        $productInput['title']      = $productInput['title'];
        $productInput['slug']       = SupportString::createSlug($productInput['title']);
        $productInput['content']    = SupportString::createEmoji($productInput['content']);
        ///
        $productInput['text_content']    = SupportString::cleanText($productInput['content']);
        $productInput['description_seo'] = SupportString::createDescription($productInput['title'], $productInput['text_content']);

        $images = $request->input('images', [[ 'root' => env('IMAGE_NOTFOUND', '/img/imagenotfound.jpg')]]);
        $firstImages = $images[0];
        $productInput['background'] = $firstImages['root'];
        $productInput['thumbnail']  = $firstImages['root'];
        //// create
        $production = Product::findOrFail($id);
        $production->update($productInput);

        /// save image
        if( isset($images) ){
            $pics = [];
            foreach ($images as $key => $img) {
                $pics[] = [
                    'src'     => $img['root'],
                    'alt'     => $productInput['title'],
                    'key'     => $production->id,
                    'title'   => $productInput['title'],
                    'gallery' => Config::get("constant.GALARIES.PRODUCT")
                ];
            }
            /// 
            Picture::where('key', $production->id)->where( 'gallery', Config::get("constant.GALARIES.PRODUCT") )->delete();
            Picture::insert($pics);
        }

        return response()
                ->success(
                    'update apartment thành công', 
                    [
                        'input'      => $request->all(),
                        'production' => $production->toArray(),
                        'token'      => $token
                    ],
                    Response::HTTP_OK
                )
                ->setStatusCode(Response::HTTP_OK);
    }
}
