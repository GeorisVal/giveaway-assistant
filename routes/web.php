<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Dashboard', [
//         'canLogin' => Route::has('login'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// })->name('Dashboard');

Route::get('/home', function () {
    return Inertia::render('Dashboard', [
        'canLogin' => Route::has('login'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/DonorRegistration', function () {
    return Inertia::render('DonorRegistration', [
        'canLogin' => Route::has('login'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/WinnerRegistration', function () {
    return Inertia::render('WinnerRegistration', [
        'canLogin' => Route::has('login'),
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

Route::resource('/donations', \App\Http\Controllers\DonationController::class)->only(['index', 'update'])->middleware(['auth', 'manualverified']);
Route::get('/donations-nodate', [\App\Http\Controllers\DonationController::class, 'indexNoDate'])->name('indexNoDate')->middleware(['auth', 'manualverified']);
Route::put('/donations-nodate', [\App\Http\Controllers\DonationController::class, 'update']);
Route::get('/donations-scheduled', [\App\Http\Controllers\DonationController::class, 'indexScheduled'])->name('scheduled')->middleware(['auth', 'manualverified']);
Route::put('/donations-scheduled', [\App\Http\Controllers\DonationController::class, 'update']);
Route::patch('/donations-status/send', [\App\Http\Controllers\DonationController::class, 'updateStatusVisibility']);

Route::resource('/appointments', \App\Http\Controllers\AppointmentsController::class)->only(['index', 'store'])->middleware(['auth', 'manualverified']);

Route::get('/', [\App\Http\Controllers\AppointmentsController::class, 'calendarPage'])->name('calendar')->middleware('manualverified');

Route::get('/test', [\App\Http\Controllers\AppointmentsController::class, 'calendarPage'])->name('test')->middleware('signed');

Route::get('/generate', [\App\Http\Controllers\TokenController::class, 'generateLink'])->middleware(['auth', 'manualverified']);

Route::get('/thanks', function () {
    return Inertia::render('Thanks');
})->name('thanks');

Route::get('/pending', function () {return Inertia::render('OnHold');})->name('pending');

require __DIR__.'/auth.php';
