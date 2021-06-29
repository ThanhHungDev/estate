<?php

use Illuminate\Support\Facades\Route;
use Jenssegers\Agent\Agent;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('resizes/{size}/{type}/{imagePath?}', [ App\Http\Controllers\ImageController::class, 'resize' ])
->where('imagePath', '(.*)')
->name('IMAGE_RESIZE');

Route::get('compress/{quality}/{imagePath}', [ App\Http\Controllers\ImageController::class, 'encode' ])
->where('imagePath', '(.*)')
->name('IMAGE_COMPRESS');

Route::get('resize-compress/{size}/{type}/{quality}/{ext}/{imagePath}', [ App\Http\Controllers\ImageController::class, 'resize_compress' ])
->where('imagePath', '(.*)')
->name('IMAGE_RESIZE_COMPRESS');

Route::group([ 'middleware' => []], function () {

    include_once("routing/admin.php");
    // include_once("routing/amp.php");
    include_once("routing/client.php");
});


// (["']{1})App\\Http\\Controllers\\([A-Za-z \\]+)@([a-zA-Z_-]+)(["']{1})
// [ App\\Http\\Controllers\\$2::class, '$3' ]