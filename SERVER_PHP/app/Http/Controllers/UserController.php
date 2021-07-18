<?php

namespace App\Http\Controllers;

use App\Repositories\Province\ProvinceEloquentRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Gate;
use App\Http\Requests\REGISTER_REQUEST;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cookie;
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
        
        return redirect()->route('LOGIN');
    }

    /**
     * Display the profile resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function logout(){

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

        $profile = Auth::user();
        
        if( $profile->role_id == Config::get('constant.ROLE.CUSTOMER') ){
            return view('client.customer.post', compact(['profile']));
        }
        return view('client.saler.post', compact(['profile']));
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

        /// tạo 1 token đưa về client lưu vào localStorage
        $tokenNew = JWTAuth::fromUser($user);

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
        ->json($response, Response::HTTP_OK)   // JsonResponse object
        ->withCookie(cookie()->forever(Config::get('constant.TOKEN_COOKIE_NAME'), $tokenNew));
    }
}
