<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\AuthController;
use App\Http\Controllers\Api\AccountController;
use App\Http\Controllers\Api\StatusController;
use App\Http\Controllers\Api\RoleController;
use App\Http\Controllers\Api\CommentController;
// Route::get("/user', function (Request $request) {
// return $request->user();
// })->middleware('auth:sanctum');
Route::prefix('v1')->group(function(){
    Route::post('/login', [AuthController::class, 'login']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'v1/auth'
], function ($router) {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::get('me', [AuthController::class, 'me']);
});
Route::prefix('V1')->group(function(){

});
Route::get('accounts', [AccountController::class, 'index']);
Route::post('accounts', [AccountController::class, 'store']);          
Route::get('accounts/{id}', [AccountController::class, 'show']);       
Route::put('accounts/{id}', [AccountController::class, 'update']);     
Route::patch('accounts/{id}', [AccountController::class, 'update']);  
Route::delete('accounts/{id}', [AccountController::class, 'destroy']);


Route::get('statuses', [StatusController::class, 'index']);     
Route::post('statuses', [StatusController::class, 'store']);    
Route::get('statuses/{id}', [StatusController::class, 'show']); 
Route::put('statuses/{id}', [StatusController::class, 'update']); 
Route::delete('statuses/{id}', [StatusController::class, 'destroy']); 


Route::get('Role', [RoleController::class, 'index']);     
Route::post('Role', [RoleController::class, 'store']);    
Route::get('Role/{id}', [RoleController::class, 'show']); 
Route::put('Role/{id}', [RoleController::class, 'update']); 
Route::delete('Role/{id}', [RoleController::class, 'destroy']); 


Route::get('Comments', [CommentController::class, 'index']);     
Route::post('Comments', [CommentController::class, 'store']);    
Route::get('Comments/{id}', [CommentController::class, 'show']); 
Route::put('Comments/{id}', [CommentController::class, 'update']); 
Route::delete('Comments/{id}', [CommentController::class, 'destroy']); 