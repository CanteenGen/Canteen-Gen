import React from 'react'
import { router } from '@inertiajs/react'
import MainLayout from '../Layouts/MainLayout.jsx'
import { Button } from '@/Components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function MenuPage() {
  const melakukanPemesanan = () => {
    router.visit('/keranjang')
  }

  const clickButton = (type) => {
    if (type === 'Masukkan Keranjang') {
      router.post('/cart/add', { item: 'Sample Item' })
    }
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Menu Warung Bu Ridho</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Tahu Telor</h2>
              <p className="text-gray-600 mb-4">Rp13,000</p>
              <Button onClick={() => clickButton('Masukkan Keranjang')}>
                Masukkan Keranjang
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Nasi Goreng</h2>
              <p className="text-gray-600 mb-4">Rp13,000</p>
              <Button onClick={() => clickButton('Masukkan Keranjang')}>
                Masukkan Keranjang
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8">
          <Button onClick={melakukanPemesanan}>Lihat Keranjang</Button>
        </div>
      </div>
    </MainLayout>
  )
}

