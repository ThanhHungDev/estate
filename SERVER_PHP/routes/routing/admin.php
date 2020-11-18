<?php 
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin'], function () {

    Route::get('/login','AdminController@login')->name('ADMIN_LOGIN');
    Route::post('/login','AdminController@postLogin')->name('ADMIN_POST_LOGIN');
    Route::get('/logout','AdminController@logout')->name('ADMIN_LOGOUT');

    Route::group(['prefix' => '/', 'middleware' => 'ADMIN_LOGGED'], function () {
        Route::get('/','AdminController@index')->name('ADMIN_DASHBOARD');
        
        Route::get('/option','Admin\OptionController@index')->name('ADMIN_STORE_OPTION');
        Route::post('/option','Admin\OptionController@store')->name('ADMIN_SAVE_OPTION');

        /// component post
        Route::get('/post/{id?}','Admin\PostController@index')->name('ADMIN_STORE_POST')->middleware("PERMISSION_VIEW");
        Route::post('/post/{id?}','Admin\PostController@save')->name('ADMIN_SAVE_POST');
        Route::get('/posts','Admin\PostController@load')->name('ADMIN_LOAD_POST')->middleware("PERMISSION_VIEW");
        Route::put('/post/{id?}','Admin\PostController@update')->name('ADMIN_UPDATE_POST')->middleware("PERMISSION_EDIT");
        Route::delete('/post/{id?}','Admin\PostController@delete')->name('ADMIN_DELETE_POST')->middleware("PERMISSION_DELETE");

        /// component tag
        Route::get('/tag/{id?}','Admin\TagController@index')->name('ADMIN_STORE_TAG')->middleware("PERMISSION_VIEW");
        Route::post('/tag/{id?}','Admin\TagController@save')->name('ADMIN_SAVE_TAG');
        Route::get('/tags','Admin\TagController@load')->name('ADMIN_LOAD_TAG')->middleware("PERMISSION_VIEW");
        Route::delete('/tag/{id?}','Admin\TagController@delete')->name('ADMIN_DELETE_TAG')->middleware("PERMISSION_DELETE");

        /// component tag theme
        Route::get('/tag-theme/{id?}','Admin\TagThemeController@index')->name('ADMIN_STORE_TAG_THEME')->middleware("PERMISSION_VIEW");
        Route::post('/tag-theme/{id?}','Admin\TagThemeController@save')->name('ADMIN_SAVE_TAG_THEME');
        Route::get('/tags-theme','Admin\TagThemeController@load')->name('ADMIN_LOAD_TAG_THEME')->middleware("PERMISSION_VIEW");
        Route::delete('/tag-theme/{id?}','Admin\TagThemeController@delete')->name('ADMIN_DELETE_TAG_THEME')->middleware("PERMISSION_DELETE");

        /// component users
        Route::get('/user/{id?}','Admin\UserController@index')->name('ADMIN_STORE_USER')->middleware("PERMISSION_VIEW");
        Route::post('/user/{id?}','Admin\UserController@save')->name('ADMIN_SAVE_USER');
        Route::get('/users','Admin\UserController@load')->name('ADMIN_LOAD_USER')->middleware("PERMISSION_VIEW");
        Route::delete('/user/{id?}','Admin\UserController@delete')->name('ADMIN_DELETE_USER');
        Route::put('/user-permission/{id?}','Admin\UserController@updatePermission')->name('ADMIN_UPDATE_USER_PERMISSION');
        Route::get('/user-permission/{id?}','Admin\UserController@show')->name('USER_EDIT_PERMISSION')->middleware("PERMISSION_DELETE");
        


        Route::get('/role/{id?}','Admin\RoleController@index')->name('ADMIN_STORE_ROLE')->middleware("PERMISSION_VIEW");
        Route::post('/role/{id?}','Admin\RoleController@save')->name('ADMIN_SAVE_ROLE');
        Route::get('/roles','Admin\RoleController@load')->name('ADMIN_LOAD_ROLE')->middleware("PERMISSION_VIEW");
        Route::delete('/role/{id?}','Admin\RoleController@delete')->name('ADMIN_DELETE_ROLE')->middleware("PERMISSION_DELETE");



        Route::get('/permissions','Admin\PermissionController@load')->name('ADMIN_LOAD_PERMISSION')->middleware("PERMISSION_DELETE");

        Route::get('/slug/{slug?}','AdminController@slug')->name('ADMIN_GET_SLUG');

        ///run sitemap
        Route::get('/sitemap','Api\IndexController@index')->name('ADMIN_GET_SITEMAP');
    });
});






