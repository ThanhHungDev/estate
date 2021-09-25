<?php
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin'], function () {

    Route::get('/login',[ App\Http\Controllers\AdminController::class, 'login' ])->name('ADMIN_LOGIN')->middleware('throttle:10,3');
    Route::post('/login',[ App\Http\Controllers\AdminController::class, 'postLogin' ])->name('ADMIN_POST_LOGIN')->middleware('throttle:10,3');
    Route::get('/logout',[ App\Http\Controllers\AdminController::class, 'logout' ])->name('ADMIN_LOGOUT');

    Route::group(['prefix' => '/', 'middleware' => 'ADMIN_LOGGED'], function () {

        Route::get('/', [ App\Http\Controllers\AdminController::class, 'index' ])->name('ADMIN_DASHBOARD');
        
        Route::get('/option', [ App\Http\Controllers\Admin\OptionController::class, 'index' ])->name('ADMIN_STORE_OPTION');
        Route::post('/option', [ App\Http\Controllers\Admin\OptionController::class, 'store' ])->name('ADMIN_SAVE_OPTION');

        Route::get('/workprocess', [ App\Http\Controllers\Admin\WorkprocessController::class, 'index' ])->name('ADMIN_STORE_WORKPROCESS');
        Route::post('/workprocess', [ App\Http\Controllers\Admin\WorkprocessController::class, 'store' ])->name('ADMIN_SAVE_WORKPROCESS');


        /// component product
        Route::get('/product/{id?}', [ App\Http\Controllers\Admin\ProductController::class, 'index' ])->name('ADMIN_STORE_PRODUCT');
        Route::post('/product/{id?}', [ App\Http\Controllers\Admin\ProductController::class, 'save' ])->name('ADMIN_SAVE_PRODUCT');
        Route::get('/products', [ App\Http\Controllers\Admin\ProductController::class, 'load' ])->name('ADMIN_LOAD_PRODUCT');
        Route::put('/product/{id?}', [ App\Http\Controllers\Admin\ProductController::class, 'update' ])->name('ADMIN_UPDATE_PRODUCT');
        Route::delete('/product/{id?}', [ App\Http\Controllers\Admin\ProductController::class, 'delete' ])->name('ADMIN_DELETE_PRODUCT');

        /// component topic
        Route::get('/category/{id?}', [ App\Http\Controllers\Admin\CategoryController::class, 'index' ])->name('ADMIN_STORE_CATEGORY');
        Route::post('/category/{id?}', [ App\Http\Controllers\Admin\CategoryController::class, 'save' ])->name('ADMIN_SAVE_CATEGORY');
        Route::get('/categories', [ App\Http\Controllers\Admin\CategoryController::class, 'load' ])->name('ADMIN_LOAD_CATEGORY');
        Route::delete('/category/{id?}', [ App\Http\Controllers\Admin\CategoryController::class, 'delete' ])->name('ADMIN_DELETE_CATEGORY');

        /// component tag
        Route::get('/ptag/{id?}', [ App\Http\Controllers\Admin\PtagController::class, 'index' ])->name('ADMIN_STORE_PTAG');
        Route::post('/ptag/{id?}', [ App\Http\Controllers\Admin\PtagController::class, 'save' ])->name('ADMIN_SAVE_PTAG');
        Route::get('/ptags', [ App\Http\Controllers\Admin\PtagController::class, 'load' ])->name('ADMIN_LOAD_PTAG');
        Route::delete('/ptag/{id?}', [ App\Http\Controllers\Admin\PtagController::class, 'delete' ])->name('ADMIN_DELETE_PTAG');


        /// component post
        Route::get('/post/{id?}', [ App\Http\Controllers\Admin\PostController::class, 'index' ])->name('ADMIN_STORE_POST');
        Route::post('/post/{id?}', [ App\Http\Controllers\Admin\PostController::class, 'save' ])->name('ADMIN_SAVE_POST');
        Route::get('/posts', [ App\Http\Controllers\Admin\PostController::class, 'load' ])->name('ADMIN_LOAD_POST');
        Route::put('/post/{id?}', [ App\Http\Controllers\Admin\PostController::class, 'update' ])->name('ADMIN_UPDATE_POST');
        Route::delete('/post/{id?}', [ App\Http\Controllers\Admin\PostController::class, 'delete' ])->name('ADMIN_DELETE_POST');

        /// component tag
        Route::get('/tag/{id?}', [ App\Http\Controllers\Admin\TagController::class, 'index' ])->name('ADMIN_STORE_TAG');
        Route::post('/tag/{id?}', [ App\Http\Controllers\Admin\TagController::class, 'save' ])->name('ADMIN_SAVE_TAG');
        Route::get('/tags', [ App\Http\Controllers\Admin\TagController::class, 'load' ])->name('ADMIN_LOAD_TAG');
        Route::delete('/tag/{id?}', [ App\Http\Controllers\Admin\TagController::class, 'delete' ])->name('ADMIN_DELETE_TAG');

        /// component slider
        Route::get('/slider/{id?}', [ App\Http\Controllers\Admin\SliderController::class, 'index' ])->name('ADMIN_STORE_SLIDER');
        Route::post('/slider/{id?}', [ App\Http\Controllers\Admin\SliderController::class, 'save' ])->name('ADMIN_SAVE_SLIDER');
        Route::get('/sliders', [ App\Http\Controllers\Admin\SliderController::class, 'load' ])->name('ADMIN_LOAD_SLIDER');
        Route::delete('/slider/{id?}', [ App\Http\Controllers\Admin\SliderController::class, 'delete' ])->name('ADMIN_DELETE_SLIDER');
        
        /// component review
        Route::get('/review/{id?}', [ App\Http\Controllers\Admin\ReviewController::class, 'index' ])->name('ADMIN_STORE_REVIEW');
        Route::post('/review/{id?}', [ App\Http\Controllers\Admin\ReviewController::class, 'save' ])->name('ADMIN_SAVE_REVIEW');
        Route::get('/reviews', [ App\Http\Controllers\Admin\ReviewController::class, 'load' ])->name('ADMIN_LOAD_REVIEW');
        Route::delete('/review/{id?}', [ App\Http\Controllers\Admin\ReviewController::class, 'delete' ])->name('ADMIN_DELETE_REVIEW');

        /// component topic
        Route::get('/topic/{id?}', [ App\Http\Controllers\Admin\TopicController::class, 'index' ])->name('ADMIN_STORE_TOPIC');
        Route::post('/topic/{id?}', [ App\Http\Controllers\Admin\TopicController::class, 'save' ])->name('ADMIN_SAVE_TOPIC');
        Route::get('/topics', [ App\Http\Controllers\Admin\TopicController::class, 'load' ])->name('ADMIN_LOAD_TOPIC');
        Route::delete('/topic/{id?}', [ App\Http\Controllers\Admin\TopicController::class, 'delete' ])->name('ADMIN_DELETE_TOPIC');


        /// component rating
        Route::get('/rating/{id?}', [ App\Http\Controllers\Admin\RatingController::class, 'index' ])->name('ADMIN_STORE_RATING');
        Route::post('/rating/{id?}', [ App\Http\Controllers\Admin\RatingController::class, 'save' ])->name('ADMIN_SAVE_RATING');
        Route::get('/ratings', [ App\Http\Controllers\Admin\RatingController::class, 'load' ])->name('ADMIN_LOAD_RATING');
        Route::delete('/rating/{id?}', [ App\Http\Controllers\Admin\RatingController::class, 'delete' ])->name('ADMIN_DELETE_RATING');

        /// component users
        Route::get('/user/{id?}', [ App\Http\Controllers\Admin\UserController::class, 'index' ])->name('ADMIN_STORE_USER');
        Route::post('/user/{id?}', [ App\Http\Controllers\Admin\UserController::class, 'save' ])->name('ADMIN_SAVE_USER');
        Route::get('/users', [ App\Http\Controllers\Admin\UserController::class, 'load' ])->name('ADMIN_LOAD_USER');
        Route::delete('/user/{id?}', [ App\Http\Controllers\Admin\UserController::class, 'delete' ])->name('ADMIN_DELETE_USER');   

        Route::get('/slug/{slug?}', [ App\Http\Controllers\AdminController::class, 'slug' ])->name('ADMIN_GET_SLUG');

        ///run sitemap
        Route::get('/sitemap', [ App\Http\Controllers\Api\IndexController::class, 'index' ])->name('ADMIN_GET_SITEMAP');
        Route::get('/render-sitemap', [ App\Http\Controllers\Api\IndexController::class, 'save' ])->name('ADMIN_STORE_SITEMAP');

        ///router check request all
        Route::get('/request', [ App\Http\Controllers\Admin\RequestController::class, 'index' ])->name('ADMIN_GET_REQUEST');
        Route::get('/request/{id}', [ App\Http\Controllers\Admin\RequestController::class, 'detail' ])->name('ADMIN_SHOW_REQUEST');
        Route::delete('/request/{id?}', [ App\Http\Controllers\Admin\RequestController::class, 'delete' ])->name('ADMIN_DELETE_REQUEST');

    });
});



