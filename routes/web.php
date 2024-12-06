<?php

use App\Http\Controllers\CheckOutControl;
use App\Http\Controllers\PembayaranControl;
use Inertia\Inertia;

// MenuPage route
Route::get('/', function () {
    return Inertia::render('MenuPage');
});

// CheckOutControl routes
Route::post('/cart/add', [CheckOutControl::class, 'clickKeranjang']);
Route::get('/keranjang', [CheckOutControl::class, 'displayKeranjang']);
Route::post('/cart/pilih', [CheckOutControl::class, 'pilihPesanan']);
Route::post('/cart/choose', [CheckOutControl::class, 'choosePesanan']);
Route::match(['get', 'post'], '/checkout', [CheckOutControl::class, 'checkOut']);

// PembayaranControl routes
Route::get('/pembayaran', [PembayaranControl::class, 'display']);
Route::post('/pembayaran/confirm', [PembayaranControl::class, 'confirm']);
Route::post('/create-order', [PembayaranControl::class, 'clickBuatPesanan']);
Route::post('/payment', [PembayaranControl::class, 'pay']);
Route::get('/status', [PembayaranControl::class, 'showStatus']);

