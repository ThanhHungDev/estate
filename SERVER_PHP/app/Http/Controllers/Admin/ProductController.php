<?php

namespace App\Http\Controllers\Admin;


use App\Helpers\SupportJson;
use App\Helpers\SupportString;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ADMIN_VALIDATE_SAVE_PRODUCT;
use App\Libraries\Catalogue;
use App\Models\Category;
use App\Models\Commune;
use App\Models\District;
use App\Models\Picture;
use App\Models\Product;
use App\Models\ProductTagActive;
use App\Models\Ptag;
use App\Models\Rating;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    
    /**
     * Show form save data of component ( insert or edit )
     *
     * @return View
     */
    public function index( $id = 0 ){

        $user_id    = Auth::user()->id;
        $categories = Category::all();
        $districts  = District::where('province_id', 68)->get();
        $ptags      = Ptag::all();
        $rates      = Rating::all();
        $communes   = Commune::all();
        $pictures = [];

        if( !$id ){
            /// thêm mới
            $product  = new Product();
            $ptags_id = 0;
        }else{
            //// edit 
            $product    = (new Product())
            ->getProductById($id, [
                DB::raw("ldjson->>'showto' as showto"),
                DB::raw("ldjson->>'howto' as howto"),
                '*'
            ]);
            $ptags_id = (new ProductTagActive())->where('product_id', $id)->pluck('ptag_id');
            if( !$product ){
                //// redirect 404
                return abort(404);
            }

            /// 
            $pictures = Picture::where('key', $id)->where( 'gallery', Config::get("constant.GALARIES.PRODUCT") )->get()->pluck('src')->toArray();
            ///
        }
        // dd(DB::table('communes')->find($product->commune_id ));
        return view('admin.product.save', compact([ 'categories', 'ptags', 'rates', 'ptags_id', 'product', 'districts', 'communes', 'pictures' ]));
    }


    public function save(ADMIN_VALIDATE_SAVE_PRODUCT $request, $id = 0){

        ///setting data insert table product
        $productInput = $request->only(
            'category_id','commune_id', 'rating_id', 'rate_value', 'rate_review_body', 'title', 'slug', 'excerpt', 
            'content', 'background', 'thumbnail', 'public', 'site_name', 'howto', 'showto',
            'image_seo', 'images', 'description_seo', 'type', 'stylesheet', 'javascript',
            'direction', 'direction_balcony', 'horizontal', 'area', 'price', 'unit_price', 'negotiate', 'extensions'
        );


        $productInput['user_id'] = Auth::user()->id;
        $productInput['content'] = SupportString::createEmoji($productInput['content']);

        /// create catalogue
                   $catalogue        = Catalogue::generate($productInput['content']);
        $productInput['content']        = $catalogue->text;
        $productInput['text_content']   = SupportString::cleanText($productInput['content']);

        $productInput['catalogue']      = $catalogue->catalogue;
        $productInput['text_catalogue'] = $catalogue->text_catalogue;

        $productInput['description_seo'] = SupportString::createDescription($productInput['description_seo'], $catalogue->text_catalogue);

        /// if howto-json null => render new 
        if(!trim($productInput['howto'])){

            $productInput['ldjson'] = [
                'showto' => $productInput['showto'],
                'howto' => SupportJson::createJsonHowTo(
                    Route('PRODUCT_VIEW', ['slug' => $productInput['slug']]),
                    $productInput['title'],
                    $productInput['description_seo'],
                    $productInput['content'],
                    $productInput['image_seo']
                )
            ];
        }else{

            $productInput['ldjson'] = [
                'showto' => $productInput['showto'],
                'howto'  => json_decode($productInput['howto'])
            ];
        }
        if( !$productInput['rate_value'] ){
            unset($productInput['rating_id']);
            unset($productInput['rate_value']);
        }
        unset($productInput['howto']);
        unset($productInput['showto']);

        /// create style
        $productInput['stylesheet'] = SupportString::minimizeCSSsimple($productInput['stylesheet']);
        /// create javascript
        $productInput['javascript'] = SupportString::minimizeJavascriptSimple($productInput['javascript']);
        
        try{
            if( !$id && $this->checkSlugExist( $productInput['slug'] )){
                
                throw new Exception('thêm mới nhưng slug đã tồn tại');
            }
            /// create instance Product Model 
            // $product          = new Product();
            $productTagActive = new ProductTagActive();

            $product = Product::find( $id );
            if( !$product ){
                $product = Product::create( $productInput );
            }else{
                $product->fill($productInput)->save();
            }
            

            $productId = $product->id;
            /// save tag of product 
            $productTagActive->where('product_id', $productId)->delete();

            $ptagsInput      = $request->ptag_id;
            if( $ptagsInput ){
                $ptagsDataInsert = array_map( 
                    function( $ptag ) use ( $productId ){ 
                        return  ['product_id' => $productId, 'ptag_id' => $ptag ]; 
                    }, $ptagsInput
                );
                $productTagActive->insert($ptagsDataInsert);
            }

            if( isset($productInput['images']) ){
                $images = $productInput['images'];
                $pics = [];
                foreach ($images as $key => $img) {
                    $pics[] = [
                        'src' => $img,
                        'alt' => $productInput['title'],
                        'key' => $productId,
                        'title' => $productInput['title'],
                        'gallery' => Config::get("constant.GALARIES.PRODUCT")
                    ];
                }
                /// 
                Picture::where('key', $productId)->where( 'gallery', Config::get("constant.GALARIES.PRODUCT") )->delete();
                Picture::insert($pics);
            }
            

            $request->session()->flash(Config::get('constant.SAVE_SUCCESS'), true);
            return redirect()->route('ADMIN_STORE_PRODUCT',  ['id' => $productId]);

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
    public function load(Request $request){
        $limit         = 10;
        $user_id       = Auth::user()->id;
        $productModel  = new Product();
        $categoryModel = new Category();

        $conditionCategory = array();
        $condition = [
            'orderby' => [ 'field' => 'id', 'type' => 'DESC' ]
        ];

        $categories     = $categoryModel->getCategoryByCondition($conditionCategory)->get();

        $query      = $request->all('category', 'product');

        

        if($query['category']){
            
            $condition['category'] = $query['category'];
        }

        if($query['product']){

            $condition['product'] = $query['product'];
        }

        $products = $productModel->getProductByCondition($condition)->paginate( $limit )->appends(request()->query());
        return view('admin.product.load', compact(['products', 'query', 'categories']));
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
     * Delete 1 product
     *
     * @param  int  $id
     * @return View
     */
    public function delete($id = 0){

        Product::find($id)->delete();

        $status = 200;
        $response = array( 'status' => $status, 'message' => 'success' );
        return response()->json( $response );
    }
    /**
     * Delete 1 product
     *
     * @param  int  $id
     * @return View
     */
    public function update($id = 0, Request $request){

        $status = 200;
        $message = 'success';
        $query = $request->all([ 'sort' ]);
        try {
            $product = (new Product())->find($id);
            $product->sort = (int)$query['sort'];
            $product->save();
        } catch (\Throwable $th) {
            $message = $th->getMessage();
            $status = 500;
        }
        $response = array( 'status' => $status, 'message' => $message );
        return response()->json( $response, $status);
    }
}
