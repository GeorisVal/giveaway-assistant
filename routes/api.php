<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\AppointmentsController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/donations', [DonationController::class, 'indexAPI']);
Route::get('/donations/{id}', [DonationController::class, 'showAPI']);
Route::put('/donations/{id}', [DonationController::class, 'updateAPI']);

Route::get('/appointments', [AppointmentsController::class, 'indexAPI']);
Route::get('/appointments/{id}', [AppointmentsController::class, 'showAPI']);
Route::post('/appointments/{id}', [AppointmentsController::class, 'postAPI']);
Route::post('/appointments', [AppointmentsController::class, 'createAPI']);