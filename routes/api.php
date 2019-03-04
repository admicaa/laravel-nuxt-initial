<?php

use Illuminate\Http\Request;

Route::post('register', 'Auth\AuthController@register')->name('register');
Route::post('login', 'Auth\AuthController@login')->name('login');
Route::get('/user', 'Auth\AuthController@user');
Route::post('/logout', 'Auth\AuthController@logout');
Route::get('/ahmed', function () {
    return 'ahmed';
});
Route::get('/js/lang-{lang}.js', function ($lang) {
    // return $lang;
    Cache::forget('lang-'.$lang.'.js');
    $strings = Cache::remember('lang-{$lang}.js', 0, function () use ($lang) {
        
        // return $lang;
        $files   = glob(resource_path('lang/' . $lang . '/*.php'));
        
        
        $strings = [];
        
        foreach ($files as $file) {
            $name   = basename($file, '.php');
            $strings[$name] = require $file;
        }
        
        
        return $strings;
    });

    header('Content-Type: text/javascript');
    return response()->json($strings) ->withHeaders([
        'Content-Type' => 'text/javascript',
    ]);
    exit();
})->name('assets.lang');
