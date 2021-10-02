<?php

namespace App\Http\Controllers;

use App\Http\Requests\CLIENT_VALIDATE_CONTACT;
use App\Http\Requests\CLIENT_VALIDATE_CONTACT_PRODUCT;
use App\Mail\MailContact;
use App\Mail\MailContactProduct;
use App\Models\Category;
use App\Models\Commune;
use App\Models\District;
use App\Models\Post;
use App\Models\Product;
use App\Models\ProductTagActive;
use App\Models\Ptag;
use App\Models\Review;
use App\Models\Slider;
use App\Models\Tag;
use App\Models\Topic;
use App\Models\Workprocess;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class ClientController extends Controller
{
    /**
     * CLIENT HOME PAGE
     */
    public function index( Request $request){

        $limit = Config::get('constant.LIMIT');

        $categories  = Category::orderBy('id', 'DESC')->get();
        $posts       = Post::orderBy('id', 'DESC')->take(6)->get();
        $sliders     = Slider::orderBy('id', 'DESC')->get();
        $reviews     = Review::orderBy('id', 'DESC')->get();
        $workprocess = Workprocess::orderBy('id', 'DESC')->get();
        $products    = Product::orderBy('id', 'DESC')->paginate( 12 )->appends(request()->query());
        return view('client.home', compact(['categories', 'posts', 'sliders', 'reviews', 'workprocess', 'products']));
    }

    public function contact( Request $request){

        return view('client.contact' );
    }


    
    public function mailContactProduct(CLIENT_VALIDATE_CONTACT_PRODUCT $request){

        $input = $request->only('name', 'slug', 'mobile', 'message');

        try{

            Mail::to(trim(env('MAIL_TO_ADMIN', 'thanhhung.code@gmail.com')))->send(new MailContactProduct($input));
            if (Mail::failures()) {
                throw new Exception('không thể liên lạc với quản trị viên. Vui lòng thử lại sau');
            }

            $request->session()->flash(Config::get('constant.SAVE_SUCCESS'), true);
            return redirect()->route('CONTACT_PAGE');

        }catch (\Exception $e){

            return redirect()->back()
            ->with(Config::get('constant.SAVE_ERROR'), 'Đã có lỗi xảy ra: '.$e->getMessage())
            ->withInput($request->all());
        }
    }


    public function mailContact(CLIENT_VALIDATE_CONTACT $request){

        $input = $request->only('name', 'email', 'mobile', 'message');
        $input['email'] = trim($input['email']);

        try{
            
            Mail::to(trim($input['email']))->send(new MailContact($input));
            if (Mail::failures()) {
                throw new Exception('không thể liên lạc với bạn qua email. vui lòng thử lại sau');
            }
            Mail::to(trim(env('MAIL_TO_ADMIN', 'thanhhung.code@gmail.com')))->send(new MailContact($input));
            if (Mail::failures()) {
                throw new Exception('không thể liên lạc với quản trị viên. Vui lòng thử lại sau');
            }
            
            $request->session()->flash(Config::get('constant.SAVE_SUCCESS'), true);
            return redirect()->route('CONTACT_PAGE');

        }catch (\Exception $e){
            return redirect()->back()
            ->with(Config::get('constant.SAVE_ERROR'), 'Đã có lỗi xảy ra: '.$e->getMessage())
            ->withInput($request->all());
        }
    }


    public function news( Request $request){

        $limit = Config::get('constant.LIMIT');
        $posts = Post::orderBy('id', 'DESC')->take(6)->paginate( $limit )->appends(request()->query());

        $topics = Topic::orderBy('id', 'DESC')->get();

        $productsNew = Product::orderBy('id', 'DESC')->take(3)->get();
        $categories = Category::orderBy('id', 'DESC')->get();
        $districts = District::all();
        $communes  = Commune::whereIn('district_id', $districts->pluck('id')->toArray())->get();

        return view('client.news', compact(['posts', 'topics', 'productsNew', 'categories', 'districts', 'communes']) );
    }

    public function postDetail( Request $request, $slug = null ){
        $post = Post::where('slug', $slug)->first();
        if( !$post ){
            abort(404);
        }

        $products = Product::orderBy('id', 'DESC')->take(3)->get();


        $cookieViewPost = $request->cookie($slug);
        if(!$cookieViewPost){
            Cookie::queue($slug, true, 10);
            $post->view += 1;
            $post->save();
        }

        $districts = District::where('province_id', 68)->get();
        $communes  = Commune::whereIn('district_id', $districts->pluck('id')->toArray())->get();

        $categories = Category::orderBy('id', 'DESC')->get();
        $topics = Topic::orderBy('id', 'DESC')->get();

        return view('client.news-detail', compact(['post', 'products', 'categories', 'topics', 'districts', 'communes']));
    }

    public function productDetail( Request $request, $slug = null ){

        $categories = Category::orderBy('id', 'DESC')->get();
        $product = Product::where('slug', $slug)->first();
        if( !$product ){
            abort(404);
        }
        if($product->public == Config::get('constant.TYPE_SAVE.ADMIN_READ')){
            if (!Auth::check()){
                return abort(403);
            }
        }

        // if( $product->type == Config::get('constant.TYPE-POST.PAGE')){

        //     return view('client.page-view', compact('post', 'rateAuthor', 'tags', 'topic'));
        // }
        $cookieViewPost = $request->cookie($slug);
        if(!$cookieViewPost){
            Cookie::queue($slug, true, 10);
            $product->view += 1;
            $product->save();
        }

        $tagsID = $product->ptags->pluck('id')->toArray();
        $productRelateId = ProductTagActive::whereIn('ptag_id', $tagsID)->pluck('product_id')->toArray();
        $relates = Product::orderBy('id', 'DESC')->where(function($query) use ($productRelateId, $product){
            $query->whereIn('id', $productRelateId);
            $query->orWhere("id", $product->category_id );
        })->take(3)->get();

        $districts = District::where('province_id', 68)->get();
        $communes  = Commune::whereIn('district_id', $districts->pluck('id')->toArray())->get();
        
        return view('client.product-detail', compact(['product', 'relates', 'categories', 'districts', 'communes']));
    }

    

    public function ptagDetail( Request $request, $slug = null ){
        $ptag = Ptag::where('slug', $slug)->first();
        if( !$ptag ){
            abort(404);
        }
        $products = $ptag->products;

        $categories = Category::orderBy('id', 'DESC')->get();
        return view('client.ptag-detail', compact(['ptag', 'products', 'categories']));
    }

    public function categoryDetail( Request $request, $slug = null ){
        $category = Category::where('slug', $slug)->first();
        if( !$category ){
            abort(404);
        }
        $products = $category->products;

        $categories = Category::orderBy('id', 'DESC')->get();
        $districts = District::where('province_id', 68)->get();
        $communes  = Commune::whereIn('district_id', $districts->pluck('id')->toArray())->get();
        return view('client.category', compact(['category', 'products', 'categories',  'districts', 'communes']));
    }
    public function topicDetail( Request $request, $slug = null ){
        $topic = Topic::where('slug', $slug)->first();
        if( !$topic ){
            abort(404);
        }
        $topics = Topic::whereNotIn('id', $topic->pluck('id')->toArray())
                            ->orderBy('id', 'DESC')
                            ->get();

        $cookieViewPost = $request->cookie($slug);
        if(!$cookieViewPost){
            Cookie::queue($slug, true, 10);
            $topic->view += 1;
            $topic->save();
        }
        
        $productsNew = Product::orderBy('id', 'DESC')->take(3)->get();
        $categories = Category::orderBy('id', 'DESC')->get();
        $districts = District::where('province_id', 68)->get();
        $communes  = Commune::whereIn('district_id', $districts->pluck('id')->toArray())->get();
        return view('client.topic', compact(['topic', 'topics', 'productsNew', 'categories', 'districts', 'communes']));
    }


    
    /**
     * searchProducts
     *
     * @param  mixed $query
     * @return \Illuminate\Support\Collection \Illuminate\Database\Eloquent\Collection[]
     */
    private function searchProducts( $query ){
        // $query = SupportString::convertLang($query);
        $words = preg_replace('/\s+/', ' ', $query);
        $words = preg_replace('/\s+/', '|', $words);


        return Product::whereRaw("search_tsv @@ plainto_tsquery(vn_unaccent('$query'))")
        ->select('*')
        ->where("products.public", 1)
        ->addSelect(DB::raw("ts_headline(title, to_tsquery('$words')) as title"))
        ->addSelect(DB::raw("ts_headline('simple', search_doc, to_tsquery('simple', '$words')) as search_document"))
        ->orderByRaw("ts_rank(search_tsv, plainto_tsquery(vn_unaccent('$query'))) DESC");
    }

    public function searchProduct( Request $request){

        
        $query = null;
        if($request->has('q')) {
            $query = $request->query('q');
            $query = preg_replace("/[^\p{L}\p{N}_]+/u", " ",  $query);
            $query = trim($query, " ");
        }
        
        $search = $this->searchProducts($query)->paginate(12)->appends(request()->query());

        $conditionPost = [
            'ignore' => $search->pluck('id')->toArray(),
            'orderby' => [ 'field' => 'view', 'type' => 'DESC' ],
            'public' => 1
        ];
        
        $productMaxView = (new Product())->getProductByCondition($conditionPost)->take( 4 )->get(); 
        
        $ptags = []; /// (new Ptag())->getTagByProductId($search->pluck('id')->toArray())->take(10)->get();

        $categories = Category::orderBy('id', 'DESC')->get();
        return view('client.search', compact('search', 'query', 'ptags', 'categories', 'productMaxView'));
    }



    /**
     * searchPosts
     *
     * @param  mixed $query
     * @return \Illuminate\Support\Collection \Illuminate\Database\Eloquent\Collection[]
     */
    private function searchPosts( $query ){
        // $query = SupportString::convertLang($query);
        $words = preg_replace('/\s+/', ' ', $query);
        $words = preg_replace('/\s+/', '|', $words);


        return (new Post())
        ->whereRaw("search_tsv @@ plainto_tsquery(vn_unaccent('$query'))")
        ->select('*')
        ->where("posts.public", 1)
        ->addSelect(DB::raw("ts_headline(title, to_tsquery('$words')) as title"))
        ->addSelect(DB::raw("ts_headline('simple', search_doc, to_tsquery('simple', '$words')) as search_document"))
        ->orderByRaw("ts_rank(search_tsv, plainto_tsquery(vn_unaccent('$query'))) DESC");
    }

    public function searchPost( Request $request){

        
        $query = null;
        if($request->has('q')) {
            $query = $request->query('q');
            $query = preg_replace("/[^\p{L}\p{N}_]+/u", " ",  $query);
            $query = trim($query, " ");
        }
        
        $search = $this->searchPosts($query)->paginate(12)->appends(request()->query());

        $conditionPost = [
            'ignore' => $search->pluck('id')->toArray(),
            'orderby' => [ 'field' => 'view', 'type' => 'DESC' ],
            'public' => 1
        ];
        
        $relates = Post::whereNotIn('id', $search->pluck('id')->toArray())
                        ->orderBy('view', 'DESC')
                        ->orderBy('id', 'DESC')
                        ->where('public', Config::get('constant.TYPE_SAVE.PUBLIC'))
                        ->take( 4 )->get(); 
        
        $tagsRelate = (new Tag())->getTagByPostId($search->pluck('id')->toArray())->take(Config::get('constant.LIMIT'))->get();
        $tags = Tag::orderBy('id', 'DESC')->get();
        $topics = Topic::orderBy('id', 'DESC')->get();

        return view('client.search-post', compact('search', 'query', 'tagsRelate', 'tags', 'topics', 'relates'));
    }

    

    public function forgot(){

        return view('client.forgot');
    }
    
}
