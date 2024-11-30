import React, { useEffect, useState } from 'react'
import { router } from '@inertiajs/react'
import MainLayout from '../Layouts/MainLayout.jsx'
import { Button } from '@/Components/ui/button'
import { Card } from '@/Components/ui/card'
import PropTypes from 'prop-types'

export default function QRCode({ orderId }) {
  const [timeLeft, setTimeLeft] = useState(120) // 2 minutes in seconds
  const [paymentStatus, setPaymentStatus] = useState('pending')

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)

      return () => clearInterval(timer)
    } else {
      setPaymentStatus('failed')
    }
  }, [timeLeft])

  useEffect(() => {
    // Simulate checking payment status
    const checkPayment = setInterval(() => {
      // In a real app, you would make an API call here
      if (Math.random() > 0.8) {
        setPaymentStatus('success')
        clearInterval(checkPayment)
      }
    }, 5000)

    return () => clearInterval(checkPayment)
  }, [])

  const handleDone = () => {
    router.visit('/orders')
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto p-6 space-y-8">
          <h1 className="text-2xl font-bold text-center">KODE QR PENJUAL</h1>
          
          <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
            {/* In a real app, you would generate a QR code here */}
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
            <Button onClick={handleDone}>Selesai</Button>
          </div>
        </Card>
      </div>
    </MainLayout>
  )
}

QRCode.propTypes = {
  orderId: PropTypes.string.isRequired,
}

