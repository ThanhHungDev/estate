<?php 
use Illuminate\Support\Facades\Route;

Route::get('/404', function(){
    echo 'không tìm thấy trang';
})->name('CLIENT_404');



Route::group(['prefix' => '/','middleware' => [ 'HTML_MINIFIER']], function () { ///'READ_CACHE',

    Route::get('/','ClientController@index')->name('HOME_PAGE');

    Route::get('/favourites', 'ClientController@favourites')->name('FAVOURITES');

    Route::get('/profile', 'ClientController@profile')->name('PROFILE');

    Route::get('/contact','ClientController@contact')->name('CONTACT_PAGE');
    Route::post('/contact','ClientController@mailContact')->name('MAIL_CONTACT');

    Route::get('/search', 'ClientController@search')->name('SEARCH');

    Route::get('/login', 'LoginController@login')->name('LOGIN');
    Route::post('/login', 'LoginController@postLogin')->name('POST_LOGIN');

    Route::get('/forgot', 'ClientController@forgot')->name('FORGOT');
    
    Route::get('/policy', 'ClientController@policy')->name('POLICY');
    Route::get('/term', 'ClientController@term')->name('TERM');



    //// USER CONTROLLERS
    Route::get('/register', 'UserController@create')->name('REGISTER');
    Route::post('/register', 'UserController@store')->name('STORE_REGISTER');

    
    // include_once("saler.php");
    Route::group(['prefix' => '/saler','middleware' => [ 'SALER_LOGGED', 'HTML_MINIFIER' ]], function () {
        Route::get('/logout', 'UserController@logout')->name('LOGOUT');
        Route::get('/', 'SalerController@profile')->name('SALER_DASHBOARD');
    });
    // include_once("customer.php");
    Route::group(['prefix' => '/customer','middleware' => [ 'CUSTOMER_LOGGED', 'HTML_MINIFIER' ]], function () {
        Route::get('/logout', 'UserController@logout')->name('LOGOUT');
        Route::get('/', 'CustomerController@profile')->name('CUSTOMER_DASHBOARD');
    });

    Route::get('/article/{slug?}','ClientController@viewPostArticle')->name('VIEW_POST_ARTICLE');
    Route::post('/article/{slug}','ClientController@storePostArticle')->name('STORE_POST_ARTICLE');

    Route::get('/news/{slug?}','ClientController@viewNews')->name('VIEW_POST_NEWS');
    Route::get('/news/{slug}','ClientController@postNews')->name('STORE_POST_NEWS');

    Route::get('/{slug}','ClientController@postDetail')->name('POST_VIEW');
});