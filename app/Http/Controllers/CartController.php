<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    public function index()
    {
        return Inertia::render('Cart');
    }

    public function checkout(Request $request)
    {
        $items = $request->items;
        $total = $request->total;

        return Inertia::render('Checkout', [
            'items' => $items,
            'total' => $total
        ]);
    }

    public function createOrder(Request $request)
    {
        // In a real app, you would save the order to the database here
        $orderId = 'ORD-' . time();

        return Inertia::render('QRCode', [
            'orderId' => $orderId
        ]);
    }
}

