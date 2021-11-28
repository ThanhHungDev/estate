<?php

namespace App\Http\Controllers;

use App\Helpers\SupportDB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use App\Http\Requests\REGISTER_REQUEST;
use App\Http\Resources\LikeResource;
use App\Models\Channel;
use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Response;
use Tymon\JWTAuth\Facades\JWTAuth;



class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('client.register');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(REGISTER_REQUEST $request)
    {
        ///setting data insert table post
        // $userInput = $request->only( 'name', 'email', 'password' );
        $userInput = request(['name', 'email', 'password']);
        $userInput['password'] = bcrypt($userInput['password']);

        $user = User::create($userInput);
        
        // auth()->login($user);
        $request->session()->flash(Config::get('constant.REGISTER_SUCCESS'), true);
        return redirect()->route('LOGIN')
        
        
        
        ;
    }

    /**
     * Display the logout resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function logout(){
        SupportDB::resetJwtAuthentication();
        Auth::logout();
        return redirect()->route('LOGIN');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


    /**
     * messages
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function messages()
    {
        return 'messages';
    }



    public function post(){

        $categories = (new Category())->all();
        $profile = Auth::user();
        
        return view('client.user.post', compact(['profile', 'categories']));
    }



    /**
     * update user is verify code profile resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function patchVerifyPhone(Request $request){


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
        if( $user->phone_verify == $request->input('phone_verify') ){
            return  response()
                    ->error(
                        'Đã xác thực trùng phone nên không cần update', 
                        ['error' => 'user_not_found'],
                        Response::HTTP_CONFLICT
                    )
                    ->setStatusCode(Response::HTTP_CONFLICT);
        }

        $user->phone_verify = $request->input('phone_verify');
        $user->save();

        /// reset jwt cũ
        SupportDB::resetJwtAuthentication();
        /// tạo 1 token đưa về client lưu vào localStorage
        $tokenNew = SupportDB::getJwtAuthentication($user);

        $response = array(
            'status' => Response::HTTP_OK,
            'message' => 'update patch thành công',
            'data' => array(
                'user' => $user->toArray(),
                'jwt' => $tokenNew,
                'old_jwt' => $token,
                'phone' => $request->input('phone_verify')
            ),
        );

        return response()
        ->json($response, Response::HTTP_OK);
    }




    /**
     * Display the profile resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function profile(Request $request)
    {
        $profile = Auth::user();

        $userId = $profile->id;

        // $conversations = (new Channel())->getConversationsByUser($profile->id);
        // /// từ conversations dùng laravel lấy hết user id friend bạn bè
        // $idFriends = $conversations->pluck('user')->toArray();
        $idFriends = [
            Config::get('constant.ID_ADMIN')
        ];
        /// get id friends 
        $friends = User::whereIn('id', $idFriends)->get();

        /// get list product of user post
        $products = Product::where('user_id', $userId)->orderBy('created_at', 'DESC')->get();

        return view('client.user.profile', compact(['profile', 'friends', 'products']));
    }


    /**
     * Display the profile resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function about()
    {
        $profile = Auth::user();

        return view('client.user.about', compact(['profile']));
    }
    

    public function getUserInfo(Request $request){

        $user = JWTAuth::parseToken()->authenticate();
        return response()
                    ->success(
                        'thành công',
                        $user,
                        Response::HTTP_OK
                    )
                    ->setStatusCode(Response::HTTP_OK);
    }


    public function firebase(){
        $profile = Auth::user();

        return view('client.user.firebase', compact(['profile']));
    }



    public function updateProductLikes(Request $request){
        $productID = $request->input('product_id', 0);
        $product = Product::find(intval($productID));
        if( !$product ){
            /// nếu không tìm thấy product thì hiện thị lỗi not found
            return  response()
                    ->error(
                        'Không tìm thấy sản phẩm bạn đang thích', 
                        ['error' => 'product_not_found'],
                        Response::HTTP_NOT_FOUND
                    )
                    ->setStatusCode(Response::HTTP_NOT_FOUND);
        }
        $authId = Auth::user()->id;
        /// tăng số lượng trên array product
        $filters = array_filter($product->getLikes(), function( $userId ) use ($authId){
            return $userId != $authId;
        });
        if( !$product->getCounterLikeActive() ){
            /// chưa có user id nào trùng với auth thì add thêm mới (like)
            $filters[] = $authId;
        }
        $product->likes = $filters;
        $product->save();
        
        return response()
                    ->success(
                        'thành công',
                        new LikeResource($product),
                        Response::HTTP_OK
                    )
                    ->setStatusCode(Response::HTTP_OK);
    }
}
