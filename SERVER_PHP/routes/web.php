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
// Route::get('projects', function () {

//     ini_set('max_execution_time', 60 * 60 ); //60 minutes

//     $url = "https://gateway.chotot.com/v1/public/xproperty/projects/_search?status=active&limit=5000";
//     $json = file_get_contents($url);
//     $json_data = json_decode($json, true);
//     Storage::disk('public')->put('projects.json', json_encode($json_data));
//     /// 
//     $projects = $json_data['projects'];
//     for ($i=0; $i < count($projects); $i++) { 
//         // sleep(100);
//         $area = $projects[$i]['area_v2'];
//         //// call get 
//         $urlArea = "https://gateway.chotot.com/v2/public/chapy-pro/wards?area=$area";
//         $jsonArea = file_get_contents($urlArea);
//         Storage::disk('public')->put("area$area.json", $jsonArea);
//     }
    
//     return "xong";
// });


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