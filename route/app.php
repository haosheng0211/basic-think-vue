<?php

use think\facade\Route;

Route::any('[:path]', function () {
    return view('index');
})->pattern(['path' => '(.)*']);