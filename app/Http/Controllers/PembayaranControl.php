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
        
        if ($request->isMethod('get')) {
            return redirect('/pembayaran');
        }
        
        return Inertia::render('QRPage', [
            'orderId' => $orderId,
            'total' => $request->total
        ]);
    }

    public function pay(Request $request)
    {
        if ($request->ajax()) {
            return response()->noContent();
        }
        return redirect()->back();
    }

    public function showStatus()
    {
        return response()->noContent();
    }
}

