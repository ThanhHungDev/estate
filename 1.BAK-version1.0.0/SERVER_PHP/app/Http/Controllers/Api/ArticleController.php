<?php

namespace App\Http\Controllers\Api;

use App\Helpers\SupportImage;
use App\Helpers\SupportString;
use App\Http\Controllers\Controller;
use App\Http\Resources\ImageResource;
use App\Http\Resources\PostResource;
use App\Jobs\QueueCensorArticle;
use App\Models\Picture;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use stdClass;
use Tymon\JWTAuth\Facades\JWTAuth;

class ArticleController extends Controller
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
        // create token jwt
        $token = JWTAuth::fromUser($user);
  
        $productInput = collect($request->only(
            'content', 'category_id', 'title', 'posttype',
        ))->filter()->all();
        
        $productInput['user_id']         = $user->id;
        $productInput['title']           = $productInput['title'];
        $productInput['slug']            = SupportString::createSlug($productInput['title']);
        $productInput['content']         = SupportString::createEmoji($productInput['content']);
        $productInput['text_content']    = SupportString::cleanText($productInput['content']);
        $productInput['description_seo'] = SupportString::createDescription($productInput['title'], $productInput['text_content']);
        $productInput['public']          = Config::get('constant.TYPE_SAVE.ADMIN_READ');

        $images = $request->input('images', [[ 'src' => env('IMAGE_NOTFOUND', '/img/imagenotfound.jpg')]]);
        $firstImages = $images[0];
        $picture = $this->handleRemoteImage($firstImages['src']);
        // check nếu image from orther website => download to local
        $productInput['background'] = $picture->link;
        $productInput['thumbnail']  = $picture->link;
        // create
        $production = Product::create($productInput);
        $production->slug = $production->slug . "--" . $production->id;
        $production->save();
        
        $jobmailler = (new QueueCensorArticle($production))->delay(Carbon::now()->addSeconds(5));
        dispatch($jobmailler);

        /// save image
        if( isset($images) ){
            $pics = [];
            foreach ($images as $key => $img) {
                $pics[] = [
                    'src'     => $img['src'],
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
            'create article thành công',
            [
                'input'      => $request->all(),
                'production' => $production->toArray(),
                'token'      => $token
            ],
            Response::HTTP_OK
        )
        ->setStatusCode(Response::HTTP_OK);
    }


    private function handleRemoteImage(String $src = null){

        $imgStd = new stdClass;
        $imgStd->url   = $src;
        $imgStd->alt   = '';
        $imgStd->title = '';
        $imgStd->link  = $src;

        $url = parse_url($imgStd->link);
        $isRemoteUrl = !empty($url['scheme']) && ($url['scheme'] == 'http' || $url['scheme'] == 'https');
        if( !$isRemoteUrl ) return $imgStd;

        $imgSrcs = [ $imgStd ];
        
        if( count($imgSrcs ) ){
            $publicPath = '/download/'. date('y') . '/' . date('m') . '/' . date('d');
            $images = SupportImage::multipleDownload($imgSrcs, $publicPath);
            return $images[0];
        }
        // nếu bài đăng không có image thì lấy tạm image mặc định
        $default = new stdClass;
        $default->url   = env('IMAGE_NOTFOUND', '/img/imagenotfound.jpg');
        $default->alt   = 'imagenotfound';
        $default->title = 'imagenotfound';
        $default->link  = env('IMAGE_NOTFOUND', '/img/imagenotfound.jpg');
        return $default;
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

        $images = $request->input('images', [[ 'src' => env('IMAGE_NOTFOUND', '/img/imagenotfound.jpg')]]);
        $firstImages = $images[0];
        $picture = $this->handleRemoteImage($firstImages['src']);
        // check nếu image from orther website => download to local
        $productInput['background'] = $picture->link;
        $productInput['thumbnail']  = $picture->link;
        //// create
        $production = Product::findOrFail($id);
        $update = $production->update($productInput);
        

        $jobmailler = (new QueueCensorArticle($production))->delay(Carbon::now()->addSeconds(5))->onQueue('category');
        dispatch($jobmailler);

        /// save image
        if( isset($images) ){
            $pics = [];
            foreach ($images as $key => $img) {
                $pics[] = [
                    'src'     => $img['src'],
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
