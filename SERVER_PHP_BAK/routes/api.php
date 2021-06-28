<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});





Route::group([ 'prefix'=>'/v1' ], function () {

    // Lấy danh sách districts
    Route::get('districts', 'Api\DistrictController@districts')
    ->name('DISTRICTS');
    // ->middleware([ 'CACHE_LOCATIONS']);

    // Lấy danh sách districts
    Route::get('communes', 'Api\CommuneController@communes')
    ->name('COMMUNES');
    // ->middleware([ 'CACHE_LOCATIONS']);

    // Lấy danh sách districts
    Route::post('file', 'Api\FileController@store')
    ->name('API_UPLOAD_FILE');
    // ->middleware([ 'CACHE_LOCATIONS']);
});