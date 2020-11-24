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

    Route::get('/tag/{slug}','ClientController@tagDetail')->name('TAG_VIEW');

    Route::get('/topic/{slug}','ClientController@topicDetail')->name('TOPIC_VIEW');

    Route::get('/search', 'ClientController@searchPost')->name('SEARCH_POST');

    Route::get('/login', 'ClientController@login')->name('LOGIN');
    

    Route::get('/article/{slug?}','ClientController@viewPostArticle')->name('VIEW_POST_ARTICLE');
    Route::post('/article/{slug}','ClientController@storePostArticle')->name('STORE_POST_ARTICLE');

    Route::get('/news/{slug?}','ClientController@viewNews')->name('VIEW_POST_NEWS');
    Route::get('/news/{slug}','ClientController@postNews')->name('STORE_POST_NEWS');

    Route::get('/{slug}','ClientController@postDetail')->name('POST_VIEW');
});