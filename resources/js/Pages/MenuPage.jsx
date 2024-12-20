import React from 'react'
import { router } from '@inertiajs/react'
import MainLayout from '../Layouts/MainLayout.jsx'
import { Button } from '@/Components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function MenuPage() {

  const clickButton = (type) => {
    if (type === 'Masukkan Keranjang') {
      router.post('/cart/add', { item: 'Sample Item' })
    } else if (type === 'Bayar Sekarang') {
      router.visit('/keranjang')
    }
  }

  return (
    <MainLayout>
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-8 text-2xl font-bold">Menu Warung Bu Ridho</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-4">
              <h2 className="mb-2 text-xl font-semibold">Tahu Telor</h2>
              <p className="mb-4 text-gray-600">Rp13,000</p>
              <Button onClick={() => clickButton('Masukkan Keranjang')}>
                Masukkan Keranjang
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h2 className="mb-2 text-xl font-semibold">Nasi Goreng</h2>
              <p className="mb-4 text-gray-600">Rp13,000</p>
              <Button onClick={() => clickButton('Masukkan Keranjang')}>
                Masukkan Keranjang
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8">
          <Button onClick={() => clickButton('Bayar Sekarang')}>
                Bayar Sekarang
          </Button>
        </div>
      </div>
    </MainLayout>
  )
}

