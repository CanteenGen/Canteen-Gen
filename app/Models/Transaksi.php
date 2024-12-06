<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaksi extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'total',
        'status',
        'payment_time',
    ];

    protected $casts = [
        'payment_time' => 'datetime',
    ];
}

