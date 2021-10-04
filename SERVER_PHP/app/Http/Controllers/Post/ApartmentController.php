<?php

namespace App\Http\Controllers\Post;

use App\Helpers\SupportString;
use App\Http\Controllers\Controller;
use App\Libraries\Catalogue;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Config;
use Tymon\JWTAuth\Facades\JWTAuth;

class ApartmentController extends Controller
{
    /**
     * post save user arpartment
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request){

        $input = $request->all();
        $token = $request->bearerToken(); 
        JWTAuth::setToken($token); //<-- set token and check
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


        // nếu null thì không lấy để update
        $user->update(collect(request()->only('commune_id', 'home_number', 'street', 'role'))->filter()->all());
  
        $productInput = collect($request->only(
            'content', 
            'category_id',
            'project_id',
            'title',
            'content',
            'direction',
            'direction_balcony',
            'horizontal',
            'vertical',
            'area',
            'price',
            'unit_price',
            'negotiate',
            'type',
            'posttype',
            'public',
            'extensions',
        ))->filter()->all();

        $productInput['user_id']    = $user->id;
        $productInput['commune_id'] = $request->input('product_commune_id', null);
        $productInput['slug']       = SupportString::createSlug($productInput['title']);
        $productInput['content']    = SupportString::createEmoji($productInput['content']);

        /// create catalogue
                   $catalogue           = Catalogue::generate($productInput['content']);
        $productInput['content']        = $catalogue->text;
        $productInput['text_content']   = SupportString::cleanText($productInput['content']);

        $productInput['catalogue']      = $catalogue->catalogue;
        $productInput['text_catalogue'] = $catalogue->text_catalogue;

        $productInput['description_seo'] = SupportString::createDescription($productInput['description_seo'], $catalogue->text_catalogue);

        $images = $request->input('images', [ 'root' => '/img/default.jpg']);
        $firstImages = $images[0];
        $productInput['background'] = $firstImages['root'];
        $productInput['thumbnail']  = $firstImages['root'];


        //// create
        $production = Product::create($productInput);

        $response = array(
            'status'  => Response::HTTP_OK,
            'message' => 'Thành công',
            'data'    => $request->all(),
            'res'     => $production->toArray()
        );

        return response()
                ->success(
                    'create apartment thành công', 
                    $response,
                    Response::HTTP_OK
                )
                ->setStatusCode(Response::HTTP_OK);
    }
}
