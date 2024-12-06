<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CheckOutControl extends Controller
{
    public function clickKeranjang(Request $request)
    {
        // Logic to add item to cart
        // In a real application, you would typically save this to the session or database
        return response()->json(['success' => true, 'message' => 'Item added to cart']);
    }

    public function displayKeranjang()
    {
        // Fetch cart items here
        // In a real application, you would typically get this from the session or database
        $items = [
            [
                'id' => 1,
                'name' => 'Tahu Telor',
                'price' => 13000,
                'quantity' => 1,
                'spiciness' => 'Tidak Pedas',
                'image' => '/placeholder.svg'
            ],
            [
                'id' => 2,
                'name' => 'Nasi Goreng',
                'price' => 13000,
                'quantity' => 1,
                'spiciness' => 'Tidak Pedas',
                'image' => '/placeholder.svg'
            ]
        ];

        return Inertia::render('KeranjangPage', ['items' => $items]);
    }

    public function pilihPesanan(Request $request)
    {
        // Logic to select order
        return response()->json(['success' => true, 'message' => 'Pesanan selected']);
    }

    public function choosePesanan(Request $request)
    {
        // Logic to choose order details
        return response()->json(['success' => true, 'message' => 'Pesanan details updated']);
    }

    public function checkOut(Request $request)
    {
        $items = $request->items;
        $total = $request->total;

        return Inertia::render('PembayaranPage', [
            'items' => $items,
            'total' => $total
        ]);
    }
}

