<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PembayaranControl extends Controller
{
    public function display()
    {
        return Inertia::render('PembayaranPage');
    }

    public function confirm(Request $request)
    {
        return Inertia::render('PembayaranPage', [
            'items' => $request->items,
            'total' => $request->total
        ]);
    }

    public function clickBuatPesanan(Request $request)
    {
        $orderId = 'ORD-' . time();
        
        return Inertia::render('QRPage', [
            'orderId' => $orderId,
            'total' => $request->total
        ]);
    }

    public function pay(Request $request)
    {
        // For demo, just return success without database interaction
    }

    public function showStatus()
    {
        return response()->json(['success' => true]);
    }
}

