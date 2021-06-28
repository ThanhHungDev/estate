<?php 
use Illuminate\Support\Facades\Route;

Route::get('/404', function(){
    echo 'không tìm thấy trang';
})->name('CLIENT_404');



Route::group(['prefix' => '/','middleware' => [ 'HTML_MINIFIER']], function () { ///'READ_CACHE',

    Route::get('/','App\Http\Controllers\ClientController@index')->name('HOME_PAGE');

    Route::get('/favourites', 'App\Http\Controllers\ClientController@favourites')->name('FAVOURITES');


    Route::get('/contact','App\Http\Controllers\ClientController@contact')->name('CONTACT_PAGE');
    Route::post('/contact','App\Http\Controllers\ClientController@mailContact')->name('MAIL_CONTACT');

    Route::get('/search', 'App\Http\Controllers\ClientController@search')->name('SEARCH');

    Route::get('/login', 'App\Http\Controllers\LoginController@login')->name('LOGIN');
    Route::post('/login', 'App\Http\Controllers\LoginController@postLogin')->name('POST_LOGIN');

    Route::get('/forgot', 'App\Http\Controllers\ClientController@forgot')->name('FORGOT');
    
    Route::get('/policy', 'App\Http\Controllers\ClientController@policy')->name('POLICY');
    Route::get('/term', 'App\Http\Controllers\ClientController@term')->name('TERM');



    //// USER CONTROLLERS
    Route::get('/register', 'App\Http\Controllers\UserController@create')->name('REGISTER');
    Route::post('/register', 'App\Http\Controllers\UserController@store')->name('STORE_REGISTER');

    
    // include_once("saler.php");
    Route::group(['prefix' => '/saler','middleware' => [ 'SALER_LOGGED', 'HTML_MINIFIER' ]], function () {
        Route::get('/logout', 'App\Http\Controllers\UserController@logout')->name('LOGOUT');
        Route::get('/', 'App\Http\Controllers\SalerController@profile')->name('SALER_DASHBOARD');
    });
    // include_once("customer.php");
    Route::group(['prefix' => '/customer','middleware' => [ 'CUSTOMER_LOGGED', 'HTML_MINIFIER' ]], function () {
        Route::get('/logout', 'App\Http\Controllers\UserController@logout')->name('LOGOUT');
        Route::get('/', 'App\Http\Controllers\CustomerController@profile')->name('CUSTOMER_DASHBOARD');

        Route::get('/information', 'App\Http\Controllers\CustomerController@profile')->name('CUSTOMER_INFORMATION');
    });

    Route::get('/article/{slug?}','App\Http\Controllers\ClientController@viewPostArticle')->name('VIEW_POST_ARTICLE');
    Route::post('/article/{slug}','App\Http\Controllers\ClientController@storePostArticle')->name('STORE_POST_ARTICLE');

    Route::get('/news/{slug?}','App\Http\Controllers\ClientController@viewNews')->name('VIEW_POST_NEWS');
    Route::get('/news/{slug}','App\Http\Controllers\ClientController@postNews')->name('STORE_POST_NEWS');

    Route::get('/{slug}','App\Http\Controllers\ClientController@postDetail')->name('POST_VIEW');
});