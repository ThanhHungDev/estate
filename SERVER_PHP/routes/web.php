<?php

use App\Models\ApartmentProject;
use Illuminate\Support\Facades\DB;
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

Route::get("cprojects", function(){
    $data = DB::connection('crawler')->table('fake_apartment_projects')->where('parser', "=", 0)->take(100)->get();
    // $projects = ApartmentProject::all();
    // $table->string('name', 500);
    // $table->string('slug', 500)->nullable();
    // $table->integer('public')->default(0); /// duyệt : is_active
    // $table->integer('type_id')->nullable(); /// type ví dụ 1 ... 4 ... 
    // $table->string('type', 255)->nullable();/// type ví dụ Khu phức hợp / Khu căn hộ / 
    // $table->text('introduction')->nullable();/// nội dung
    // $table->double('area_total')->nullable();/// tổng diện tích
    // $table->string('geo', 255)->nullable(); /// vị trí bản đồ map
    // $table->text('short_introduction')->nullable();/// nội dung
    // $table->string('process')->nullable();/// đang thi công / đã hoàn thành / ...
    
    // $table->string('address')->nullable(); /// Đường số 1
    // $table->string('address2')->nullable(); /// Quận Thủ Đức - Thành phố Thủ Đức, Tp Hồ Chí Minh
    // // $table->integer('province_id');
    // $table->integer('district_id')->nullable();

    // $table->integer('region_id')->nullable();
    // $table->integer('area_id')->nullable();
    // $table->integer('ward_id')->nullable();
    // $table->integer('street_id')->nullable();
    // $table->text('images')->nullable();
    // $table->text('bakup')->nullable();/// nội dung json
    // $table->string("project_oid");
    
});
Route::group(['prefix' => 'crawler'], function () {
    /// http://estate.com/crawler/getJsonFromApiChoTot
    Route::get('getJsonFromApiChoTot', [ App\Http\Controllers\CrawlerController::class, 'getJsonFromApiChoTot' ]);
    /// sau đó chạy : projects để chuyển code json tring qua row thực tế
    Route::get('projects', [ App\Http\Controllers\CrawlerController::class, 'projects' ]);
    
});

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