<?php

use Illuminate\Http\Request;

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



// Sector API Routes
Route::post('/add-department','ApiGeter@add_department');
Route::get('/department-list','ApiGeter@department_list');
Route::post('/delete-department','ApiGeter@delete_department');
Route::post('/add-doctor','ApiGeterDoctor@add_doctor');