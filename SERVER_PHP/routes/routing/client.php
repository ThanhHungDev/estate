<?php 
use Illuminate\Support\Facades\Route;

Route::get('/404', function(){
    echo 'không tìm thấy trang';
})->name('CLIENT_404');

Route::get('/spa/{any}', function () {
    return view('index'); // or wherever your React app is bootstrapped.
})->where('any', '.*');

Route::group(['prefix' => '/','middleware' => [ 'HTML_MINIFIER']], function () { ///'READ_CACHE',

    Route::get('/',[ App\Http\Controllers\ClientController::class, 'index' ])->name('HOME_PAGE');

    Route::get('/favourites', [ App\Http\Controllers\ClientController::class, 'favourites' ])->name('FAVOURITES');


    Route::get('/contact',[ App\Http\Controllers\ClientController::class, 'contact' ])->name('CONTACT_PAGE');
    Route::post('/contact',[ App\Http\Controllers\ClientController::class, 'mailContact' ])->name('MAIL_CONTACT');

    Route::get('/search', [ App\Http\Controllers\ClientController::class, 'search' ])->name('SEARCH');

    Route::get('/login', [ App\Http\Controllers\LoginController::class, 'login' ])->name('LOGIN');
    Route::post('/login', [ App\Http\Controllers\LoginController::class, 'postLogin' ])->name('POST_LOGIN');

    Route::get('/forgot', [ App\Http\Controllers\ClientController::class, 'forgot' ])->name('FORGOT');
    
    Route::get('/policy', [ App\Http\Controllers\ClientController::class, 'policy' ])->name('POLICY');
    Route::get('/term', [ App\Http\Controllers\ClientController::class, 'term' ])->name('TERM');



    //// USER CONTROLLERS
    Route::get('/register', [ App\Http\Controllers\UserController::class, 'create' ])->name('REGISTER');
    Route::post('/register', [ App\Http\Controllers\UserController::class, 'store' ])->name('STORE_REGISTER');

    // include_once("user.php");
    Route::group(['prefix' => '/user','middleware' => [ 'USER_LOGGED' ]], function () {
        
        Route::get('/notifications', [ App\Http\Controllers\UserController::class, 'notifications' ])->name('VIEW_NOTIFICATION');
        Route::get('/messages', [ App\Http\Controllers\UserController::class, 'messages' ])->name('VIEW_CHAT');
        Route::get('/post', [ App\Http\Controllers\UserController::class, 'post' ])->name('USER_POST');

        Route::patch('/verify/phone', [ App\Http\Controllers\UserController::class, 'patchVerifyPhone' ])->name('PATCH_VERIFY_PHONE');
    });
    
    // include_once("saler.php");
    Route::group(['prefix' => '/saler','middleware' => [ 'SALER_LOGGED' ]], function () {
        Route::get('/logout', [ App\Http\Controllers\UserController::class, 'logout' ])->name('LOGOUT');
        Route::get('/', [ App\Http\Controllers\SalerController::class, 'profile' ])->name('SALER_DASHBOARD');
    });
    // include_once("customer.php");
    Route::group(['prefix' => '/customer','middleware' => [ 'CUSTOMER_LOGGED' ]], function () {
        Route::get('/logout', [ App\Http\Controllers\UserController::class, 'logout' ])->name('LOGOUT');
        Route::get('/', [ App\Http\Controllers\CustomerController::class, 'profile' ])->name('CUSTOMER_DASHBOARD');
        Route::get('/thong-tin-co-ban', [ App\Http\Controllers\CustomerController::class, 'about' ])->name('CUSTOMER_ABOUT');

        Route::get('/information', [ App\Http\Controllers\CustomerController::class, 'profile' ])->name('CUSTOMER_INFORMATION');
        Route::get('/ajax-demo', [ App\Http\Controllers\CustomerController::class, 'getUserInfo' ])->name('CUSTOMER_AJAX');
    });

    Route::get('/article/{slug?}',[ App\Http\Controllers\ClientController::class, 'viewPostArticle' ])->name('VIEW_POST_ARTICLE');
    Route::post('/article/{slug}',[ App\Http\Controllers\ClientController::class, 'storePostArticle' ])->name('STORE_POST_ARTICLE');

    Route::get('/news/{slug?}',[ App\Http\Controllers\ClientController::class, 'viewNews' ])->name('VIEW_POST_NEWS');
    Route::get('/news/{slug}',[ App\Http\Controllers\ClientController::class, 'postNews' ])->name('STORE_POST_NEWS');

    Route::get('/{slug}',[ App\Http\Controllers\ClientController::class, 'postDetail' ])->name('POST_VIEW');
});

