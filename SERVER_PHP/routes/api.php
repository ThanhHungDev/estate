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

    
    Route::group(['prefix' => 'apartment'], function () {

        Route::get('projects', [ App\Http\Controllers\Api\ApartmentController::class, 'projects' ])
        ->name('APARTMENT_PROJECTS');
        Route::get('project/{id?}', [ App\Http\Controllers\Api\ApartmentController::class, 'project' ])
        ->name('APARTMENT_PROJECT_DETAIL');
    });

    // Lấy danh sách provinces
    Route::get('provinces', [ App\Http\Controllers\Api\ProvinceController::class, 'provinces' ])
    ->name('PROVINCES');

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

    Route::post('login', [ App\Http\Controllers\Api\LoginController::class, 'login' ])
    ->name('API_LOGIN');
    // ->middleware([ 'CACHE_LOCATIONS']);

    Route::get('info', [ App\Http\Controllers\Api\LoginController::class, 'info' ]);
    Route::group(['middleware' => 'jwt.auth'], function () {

        Route::get('users', [ App\Http\Controllers\Api\UserController::class, 'index' ]);
        Route::patch('users', [ App\Http\Controllers\Api\UserController::class, 'patchVerifyPhone' ])->name('API.USER.PATCH_VERIFY_PHONE');
    });
});