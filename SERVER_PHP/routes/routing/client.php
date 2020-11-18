<?php 
use Illuminate\Support\Facades\Route;

Route::get('/404', function(){
    echo 'không tìm thấy trang';
})->name('CLIENT_404');



Route::group(['prefix' => '/','middleware' => [ 'HTML_MINIFIER']], function () { ///'READ_CACHE',
    Route::get('/','ClientController@index')->name('HOME_PAGE');

    Route::get('/contact','ClientController@contact')->name('CONTACT_PAGE');
    Route::post('/contact','ClientController@mailContact')->name('MAIL_CONTACT');

    Route::get('/tag/{slug}','ClientController@tagDetail')->name('TAG_VIEW');
    Route::get('/topic/{slug}','ClientController@topicDetail')->name('TOPIC_VIEW');

    Route::get('/search', 'ClientController@searchPost')->name('SEARCH_POST');

    Route::get('/{slug}','ClientController@postDetail')->name('POST_VIEW');
});