<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => '/','middleware' => [ 'LOGIN_REDIRECT', 'HTML_MINIFIER' ]], function () { ///'READ_CACHE',


    Route::get('/404', function(){
        echo 'không tìm thấy trang';
    })->name('CLIENT_404');
    
    
    Route::get("/test", function(){
        $input = collect(request()->merge([ 'sfđsf' => "asads"])->all())->filter()->all();
        dd( $input + 1);
    });




    Route::get('/',[ App\Http\Controllers\ClientController::class, 'index' ])->name('HOME_PAGE');

    Route::get('/favourites', [ App\Http\Controllers\ClientController::class, 'favourites' ])->name('FAVOURITES');
    Route::get('/tin-tuc', [ App\Http\Controllers\ClientController::class, 'news' ])->name('NEWS_PAGE'); 


    Route::get('/contact',[ App\Http\Controllers\ClientController::class, 'contact' ])->name('CONTACT_PAGE');
    Route::post('/contact',[ App\Http\Controllers\ClientController::class, 'mailContact' ])->name('MAIL_CONTACT');
    Route::post('/contact-product',[ App\Http\Controllers\ClientController::class, 'mailContactProduct' ])->name('MAIL_CONTACT_PRODUCT');

    Route::get('/search', [ App\Http\Controllers\ClientController::class, 'search' ])->name('SEARCH');

    // Route::get('/login', [ App\Http\Controllers\LoginController::class, 'login' ])->name('LOGIN');
    // Route::post('/login', [ App\Http\Controllers\LoginController::class, 'postLogin' ])->name('POST_LOGIN');
    Route::post('/login/faster', [ App\Http\Controllers\LoginController::class, 'postLoginFast' ])->name('POST_LOGIN_FAST');

    
    
    Route::get('/policy', [ App\Http\Controllers\ClientController::class, 'policy' ])->name('POLICY');
    Route::get('/policy-fast-login', [ App\Http\Controllers\ClientController::class, 'policy' ])->name('POLICY');
    Route::get('/term', [ App\Http\Controllers\ClientController::class, 'term' ])->name('TERM');


    Route::group(['prefix' => '/nguoi-dung' ], function () {
        
        Route::get('/xac-thuc-dien-thoai', [ App\Http\Controllers\AccountController::class, 'login' ])->name('LOGIN'); /// mặc định bước 1 nhập sdt
        Route::post('/sms/code', [ App\Http\Controllers\AccountController::class, 'postSendSms' ])->name('SEND.SMS'); /// trong bước 1 gọi post data lên send sms => bước 2
        Route::get('/xac-minh-code', [ App\Http\Controllers\AccountController::class, 'login' ])->name('GET.SEND.CODE'); /// bước send sms bước 2 thành công thì gọi bước 3
        Route::post('/verify-code', [ App\Http\Controllers\AccountController::class, 'postVerifyPhone' ])->name('POST.VERIFY.CODE'); /// bước 4


        Route::get('/xac-thuc-tai-khoan', [ App\Http\Controllers\AccountController::class, 'login' ])->name('AUTHLOCAL');
        Route::post('/login', [ App\Http\Controllers\AccountController::class, 'postLogin' ])->name('POST_LOGIN');

        Route::get('/quen-mat-khau', [ App\Http\Controllers\AccountController::class, 'forgot' ])->name('FORGOT');
        

        Route::get('/auth/redirect/{provider}', [ App\Http\Controllers\SocialController::class, 'redirect' ] );
        Route::get('/callback/{provider}', [ App\Http\Controllers\SocialController::class, 'callback' ] );
        
        
    });

    //// USER CONTROLLERS
    Route::get('/register', [ App\Http\Controllers\UserController::class, 'create' ])->name('REGISTER');
    Route::post('/register', [ App\Http\Controllers\UserController::class, 'store' ])->name('STORE_REGISTER');

    Route::get('/dang-tin/{path?}', [ App\Http\Controllers\ArticleController::class, 'push' ])
        ->where('path', '[a-zA-Z0-9-/]+')
        ->name('USER_POST');
    Route::patch('/user/product/likes', [ App\Http\Controllers\ReactController::class, 'updateProductLikes' ])->name('USER_AJAX_LIKE_PRODUCT');

    // include_once("user.php");
    Route::group(['prefix' => '/user', 'middleware' => [ 'USER_LOGGED' ]], function () {
        
        Route::get('/notifications', [ App\Http\Controllers\UserController::class, 'notifications' ])->name('VIEW_NOTIFICATION');
        Route::get('/messages', [ App\Http\Controllers\UserController::class, 'messages' ])->name('VIEW_CHAT');
        // Route::get('/post/{path?}', [ App\Http\Controllers\UserController::class, 'post' ])
        // ->where('path', '[a-zA-Z0-9-/]+')
        // ->name('USER_POST');

        Route::patch('/verify/phone', [ App\Http\Controllers\UserController::class, 'patchVerifyPhone' ])->name('PATCH_VERIFY_PHONE');
        

        Route::get('/logout', [ App\Http\Controllers\UserController::class, 'logout' ])->name('LOGOUT');
        Route::get('/', [ App\Http\Controllers\UserController::class, 'profile' ])->name('USER_DASHBOARD');
        Route::get('/thong-tin-co-ban', [ App\Http\Controllers\UserController::class, 'about' ])->name('USER_ABOUT');

        Route::get('/information', [ App\Http\Controllers\UserController::class, 'profile' ])->name('USER_INFORMATION');
        Route::get('/ajax-demo', [ App\Http\Controllers\UserController::class, 'getUserInfo' ])->name('USER_AJAX');
        Route::resource('product', App\Http\Controllers\Api\ProductController::class, ['only' => ['show', 'store', 'update' ]]);
        
    });
    
    Route::get('/update/{id}',[ App\Http\Controllers\ClientController::class, 'getUpdateUser' ])->name('UPDATE_USER_INFO');
    Route::post('/update/{id}', [ App\Http\Controllers\ClientController::class, 'updateUser' ])->name('STORE_UPDATE');
    
    Route::get('/tin-tuc/{slug}',[ App\Http\Controllers\ClientController::class, 'postDetail' ])->name('POST_VIEW');

    Route::get('/chu-de/{slug}',[ App\Http\Controllers\ClientController::class, 'categoryDetail' ])->name('CATEGORY_VIEW');
    Route::get('/chu-de-bai-viet-nha-dat/{slug}',[ App\Http\Controllers\ClientController::class, 'topicDetail' ])->name('TOPIC_VIEW');
    Route::get('/tim-mua/{slug}',[ App\Http\Controllers\ClientController::class, 'ptagDetail' ])->name('PTAG_VIEW_SEARCH');
    Route::get('/tim-kiem',[ App\Http\Controllers\ClientController::class, 'searchProduct' ])->name('PRODUCT_SEARCH');
    Route::get('/tim-kiem-bai-viet',[ App\Http\Controllers\ClientController::class, 'searchPost' ])->name('POST_SEARCH');
    Route::get('/thanh-vien/{id}',[ App\Http\Controllers\ClientController::class, 'memberDetail' ])->name('MEMBER_VIEW');
    Route::get('/tro-chuyen/{id?}',[ App\Http\Controllers\ClientController::class, 'chat' ])->name('CHAT');
    Route::get('/{slug}',[ App\Http\Controllers\ClientController::class, 'productDetail' ])->name('PRODUCT_VIEW');
});

