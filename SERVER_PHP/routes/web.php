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
// Route::get('resizes/{size}/{type}/{imagePath}', 'ImageController@resize')
// ->where('imagePath', '(.*)')
// ->name('IMAGE_RESIZE');

Route::group([ 'middleware' => []], function () {

    include_once("routing/admin.php");
    include_once("routing/amp.php");
    include_once("routing/client.php");
});



// $agent = new Agent();
// if($agent->isPhone()){
//     include_once("routing/amp.php");
// }