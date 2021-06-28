<?php
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin'], function () {

    Route::get('/login','App\Http\Controllers\AdminController@login')->name('ADMIN_LOGIN');
    Route::post('/login','App\Http\Controllers\AdminController@postLogin')->name('ADMIN_POST_LOGIN');
    Route::get('/logout','App\Http\Controllers\AdminController@logout')->name('ADMIN_LOGOUT');

    Route::group(['prefix' => '/', 'middleware' => 'ADMIN_LOGGED'], function () {
        Route::get('/','App\Http\Controllers\AdminController@index')->name('ADMIN_DASHBOARD');
        
        Route::get('/option','App\Http\Controllers\Admin\OptionController@index')->name('ADMIN_STORE_OPTION');
        Route::post('/option','App\Http\Controllers\Admin\OptionController@store')->name('ADMIN_SAVE_OPTION');

        /// component post
        Route::get('/post/{id?}','App\Http\Controllers\Admin\PostController@index')->name('ADMIN_STORE_POST')->middleware("PERMISSION_VIEW");
        Route::post('/post/{id?}','App\Http\Controllers\Admin\PostController@save')->name('ADMIN_SAVE_POST');
        Route::get('/posts','App\Http\Controllers\Admin\PostController@load')->name('ADMIN_LOAD_POST')->middleware("PERMISSION_VIEW");
        Route::put('/post/{id?}','App\Http\Controllers\Admin\PostController@update')->name('ADMIN_UPDATE_POST')->middleware("PERMISSION_EDIT");
        Route::delete('/post/{id?}','App\Http\Controllers\Admin\PostController@delete')->name('ADMIN_DELETE_POST')->middleware("PERMISSION_DELETE");

        /// component tag
        Route::get('/tag/{id?}','App\Http\Controllers\Admin\TagController@index')->name('ADMIN_STORE_TAG')->middleware("PERMISSION_VIEW");
        Route::post('/tag/{id?}','App\Http\Controllers\Admin\TagController@save')->name('ADMIN_SAVE_TAG');
        Route::get('/tags','App\Http\Controllers\Admin\TagController@load')->name('ADMIN_LOAD_TAG')->middleware("PERMISSION_VIEW");
        Route::delete('/tag/{id?}','App\Http\Controllers\Admin\TagController@delete')->name('ADMIN_DELETE_TAG')->middleware("PERMISSION_DELETE");

        /// component tag theme
        Route::get('/tag-theme/{id?}','App\Http\Controllers\Admin\TagThemeController@index')->name('ADMIN_STORE_TAG_THEME')->middleware("PERMISSION_VIEW");
        Route::post('/tag-theme/{id?}','App\Http\Controllers\Admin\TagThemeController@save')->name('ADMIN_SAVE_TAG_THEME');
        Route::get('/tags-theme','App\Http\Controllers\Admin\TagThemeController@load')->name('ADMIN_LOAD_TAG_THEME')->middleware("PERMISSION_VIEW");
        Route::delete('/tag-theme/{id?}','App\Http\Controllers\Admin\TagThemeController@delete')->name('ADMIN_DELETE_TAG_THEME')->middleware("PERMISSION_DELETE");

        /// component users
        Route::get('/user/{id?}','App\Http\Controllers\Admin\UserController@index')->name('ADMIN_STORE_USER')->middleware("PERMISSION_VIEW");
        Route::post('/user/{id?}','App\Http\Controllers\Admin\UserController@save')->name('ADMIN_SAVE_USER');
        Route::get('/users','App\Http\Controllers\Admin\UserController@load')->name('ADMIN_LOAD_USER')->middleware("PERMISSION_VIEW");
        Route::delete('/user/{id?}','App\Http\Controllers\Admin\UserController@delete')->name('ADMIN_DELETE_USER');
        Route::put('/user-permission/{id?}','App\Http\Controllers\Admin\UserController@updatePermission')->name('ADMIN_UPDATE_USER_PERMISSION');
        Route::get('/user-permission/{id?}','App\Http\Controllers\Admin\UserController@show')->name('USER_EDIT_PERMISSION')->middleware("PERMISSION_DELETE");
        


        Route::get('/role/{id?}','App\Http\Controllers\Admin\RoleController@index')->name('ADMIN_STORE_ROLE')->middleware("PERMISSION_VIEW");
        Route::post('/role/{id?}','App\Http\Controllers\Admin\RoleController@save')->name('ADMIN_SAVE_ROLE');
        Route::get('/roles','App\Http\Controllers\Admin\RoleController@load')->name('ADMIN_LOAD_ROLE')->middleware("PERMISSION_VIEW");
        Route::delete('/role/{id?}','App\Http\Controllers\Admin\RoleController@delete')->name('ADMIN_DELETE_ROLE')->middleware("PERMISSION_DELETE");



        Route::get('/permissions','App\Http\Controllers\Admin\PermissionController@load')->name('ADMIN_LOAD_PERMISSION')->middleware("PERMISSION_DELETE");

        Route::get('/slug/{slug?}','App\Http\Controllers\AdminController@slug')->name('ADMIN_GET_SLUG');

        ///run sitemap
        Route::get('/sitemap','App\Http\Controllers\Api\IndexController@index')->name('ADMIN_GET_SITEMAP');
        Route::get('/render-sitemap','App\Http\Controllers\Api\IndexController@save')->name('ADMIN_STORE_SITEMAP');
    });
});






