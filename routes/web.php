<?php

use App\Http\Controllers\CheckOutControl;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\PembayaranControl;
use App\Http\Controllers\PesananController;
use Inertia\Inertia;

// MenuPage route
Route::get('/', function () {
    return Inertia::render('MenuPage');
});

// CheckOutControl routes
Route::post('/cart/add', [CheckOutControl::class, 'clickKeranjang']);

Route::post('/cart/pilih', [CheckOutControl::class, 'pilihPesanan']);
Route::post('/cart/choose', [CheckOutControl::class, 'choosePesanan']);
Route::match(['get', 'post'], '/checkout', [CheckOutControl::class, 'checkOut']);

// PembayaranControl routes
Route::get('/pembayaran', [PembayaranControl::class, 'display']);
Route::post('/pembayaran/confirm', [PembayaranControl::class, 'confirm']);
Route::match(['get', 'post'], '/create-order', [PembayaranControl::class, 'clickBuatPesanan']);
Route::post('/payment', [PembayaranControl::class, 'pay']);
Route::get('/status', [PembayaranControl::class, 'showStatus']);


// MenuController
Route::get('/menu-page', [MenuController::class, 'menuPage']);
Route::get('/menu/details/{id}', [MenuController::class, 'takeDetails'])->name('menu.details');
Route::post('/keranjang/add', [PesananController::class, 'clickKeranjang'])->name('cart.add');
Route::get('/keranjang', [PesananController::class, 'displayKeranjang']);