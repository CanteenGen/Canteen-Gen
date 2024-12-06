import React, { useState, useEffect } from 'react'
import { router } from '@inertiajs/react'
import MainLayout from '../Layouts/MainLayout.jsx'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import PropTypes from 'prop-types'

export default function QRPage({ orderId, total }) {
    const [timeLeft, setTimeLeft] = useState(120) // 2 minutes
    const [paymentStatus, setPaymentStatus] = useState('pending')

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer)
                    setPaymentStatus('failed')
                    return 0
                }
                return prevTime - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const handlePayment = () => {
        router.post('/payment', {
            orderId,
            total
        })
        setPaymentStatus('success')
    }

    const handleDone = () => {
        router.get('/')
    }

    return (
        <MainLayout>
            <div className="container mx-auto px-4 py-8">
                <Card className="max-w-2xl mx-auto">
                    <CardContent className="p-6 space-y-8">
                        <h1 className="text-2xl font-bold text-center">KODE QR PENJUAL</h1>
                        
                        <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                                <p className="text-lg font-semibold mb-2">Scan QR Code to Pay</p>
                                <p className="text-gray-600">Time remaining: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold">Tata Cara Pembayaran</h2>
                            <ol className="space-y-2 list-decimal list-inside">
                                <li>Buka aplikasi e-wallet Anda</li>
                                <li>Pilih menu scan QR code</li>
                                <li>Arahkan kamera ke QR code di atas</li>
                                <li>Konfirmasi jumlah pembayaran pada aplikasi</li>
                                <li>Masukkan PIN atau verifikasi pembayaran</li>
                            </ol>
                        </div>

                        {paymentStatus === 'success' && (
                            <div className="bg-green-50 text-green-700 p-4 rounded-lg">
                                Pembayaran berhasil! Pesanan Anda sedang diproses.
                            </div>
                        )}

                        {paymentStatus === 'failed' && (
                            <div className="bg-red-50 text-red-700 p-4 rounded-lg">
                                Waktu pembayaran habis. Silakan coba lagi.
                            </div>
                        )}

                        <div className="flex justify-center">
                            {paymentStatus === 'pending' && (
                                <Button onClick={handlePayment}>Bayar</Button>
                            )}
                            {(paymentStatus === 'success' || paymentStatus === 'failed') && (
                                <Button onClick={handleDone}>Selesai</Button>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </MainLayout>
    )
}

QRPage.propTypes = {
    orderId: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired
}

