<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/table',function(){
        return Inertia::render('Prueba');
    })->name('tables');

    Route::get('/profile',function(){
        return Inertia::render('Profile/Show');
    })->name('profile');
    
    Route::get('/historia',function(){
        return Inertia::render('Historia');
    })->name('historia');

    Route::get('/normalbuttons',function(){
        return Inertia::render('NormalButtons');
    })->name('normalbuttons');

    Route::get('/glowbuttons',function(){
        return Inertia::render('GlowButtons');
    })->name('glowbuttons');

    Route::get('/buttons',function(){
        return Inertia::render('ButtonsPopup');
    })->name('buttons');
});

