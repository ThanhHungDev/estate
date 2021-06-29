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
    Route::get('districts', [ App\Http\Controllers\Api\DistrictController::class, 'districts' ])
    ->name('DISTRICTS');
    // ->middleware([ 'CACHE_LOCATIONS']);

    // Lấy danh sách districts
    Route::get('communes', [ App\Http\Controllers\Api\CommuneController::class, 'communes' ])
    ->name('COMMUNES');
    // ->middleware([ 'CACHE_LOCATIONS']);

    // Lấy danh sách districts
    Route::post('file', [ App\Http\Controllers\Api\FileController::class, 'store' ])
    ->name('API_UPLOAD_FILE');
    // ->middleware([ 'CACHE_LOCATIONS']);
});