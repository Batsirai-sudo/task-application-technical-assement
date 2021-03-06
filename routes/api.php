<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\RegisterController;
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
Route::post('/register',[RegisterController::class,'register']);
Route::post('/login',[LoginController::class,'login']);

Route::middleware('auth:sanctum')->group(function(){
   Route::get('/user', function (Request $request) {
       return $request->user();
   });
   Route::post('/logout',[LoginController::class,'logout']);
   Route::resource('/task',TaskController::class);
});
