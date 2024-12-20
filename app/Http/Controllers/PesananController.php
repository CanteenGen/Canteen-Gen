<?php

namespace App\Http\Controllers;

use App\Models\Transaksi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PesananController extends Controller
{
    //

    public function saveOrder(Request $request)
    {
        // Ambil data dari request
        $saveOption = $request->only(['spiciness', 'serving']);
        $menuDetails = $request->only('id', 'name', 'price', 'quantity',);


        // Simpan logika pemesanan ke database atau session
        // Contoh: Simpan ke database
        // Transaksi::create($order);

        return redirect()->back()->with('success', 'Pesanan berhasil diproses!');
    }


    public function clickKeranjang(Request $request)
    {
     
        $item = $request->only(['id', 'name', 'price', 'quantity', 'spiciness', 'serving']);
        $cart = session()->get('cart', []);

        if (isset($cart[$item['id']])) {
            $cart[$item['id']]['quantity'] += $item['quantity'];
        } else {
            $cart[$item['id']] = $item;
        }

        session()->put('cart', $cart);

        return redirect()->back()->with('success', 'Item berhasil ditambahkan ke keranjang!');
    }

    public function displayKeranjang()
    {
        $cart = session()->get('cart', []);

        // Pastikan $cart dikirim dalam format array
        $cart = array_values($cart);
        
        return Inertia::render('KeranjangPage', ['items' => $cart]);
    }
}
