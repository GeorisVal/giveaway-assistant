<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Dashboard', [
        'canLogin' => Route::has('login'),
//
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('Dashboard');

Route::get('/home', function () {
    return Inertia::render('Dashboard', [
        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/calendar', function () {
    return Inertia::render('Example', [
        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('calendar');

Route::get('/DonorRegistration', function () {
    return Inertia::render('DonorRegistration', [
        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/WinnerRegistration', function () {
    return Inertia::render('WinnerRegistration', [
        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('/donations', \App\Http\Controllers\DonationController::class)->only(['index', 'update'])->middleware(['auth', 'verified']);
Route::get('/donations-nodate', [\App\Http\Controllers\DonationController::class, 'indexNoDate'])->name('indexNoDate');
Route::put('/donations-nodate', [\App\Http\Controllers\DonationController::class, 'update']);

Route::resource('/appointments', \App\Http\Controllers\AppointmentsController::class)->only(['index', 'store']);

Route::get('/calendar', [\App\Http\Controllers\AppointmentsController::class, 'calendarPage'])->name('calendar');

Route::get('/thanks', function () {
    return Inertia::render('Thanks');
})->name('thanks');

require __DIR__.'/auth.php';
