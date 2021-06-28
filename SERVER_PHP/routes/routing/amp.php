<?php 
use Illuminate\Support\Facades\Route;


Route::group(['prefix' => '/amp','middleware' => [ 'HTML_MINIFIER']], function () { ///'READ_CACHE',

    Route::get('/','App\Http\Controllers\AmpController@index')->name('AMP_HOME_PAGE');

    
});