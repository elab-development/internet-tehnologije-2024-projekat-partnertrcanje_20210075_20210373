<?php

use Illuminate\Support\Facades\Route;

Route::get('/poz', function () {
    return ['Laravel' => app()->version()];
});
Route::get('/', function () {
    return view('welcome');
});


require __DIR__.'/auth.php';
