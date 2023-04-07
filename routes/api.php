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
Route::post('/donations-split', [DonationController::class, 'splitAPI']);
Route::get('/donations-status', [DonationController::class, 'statusAPI']);
Route::put('/donations-status/{status}', [DonationController::class, 'updateStatusVisibilityAPI']);
Route::put('/donations-platform/{platform}', [DonationController::class, 'updatePlatformVisibilityAPI']);
Route::get('/donations-nodate', [DonationController::class, 'scheduleNoDate']);

Route::get('/appointments', [AppointmentsController::class, 'indexAPI']);
Route::get('/appointments/{id}', [AppointmentsController::class, 'showAPI']);
Route::post('/appointments/{id}', [AppointmentsController::class, 'postAPI']);
Route::post('/appointments', [AppointmentsController::class, 'createAPI']);

Route::put('/calendar/details/{date}', [DonationController::class, 'updateGiveawayDetailsAPI']);
