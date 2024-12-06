import React, { useState, useEffect } from 'react'
import { router } from '@inertiajs/react'
import MainLayout from '../Layouts/MainLayout.jsx'
import { Button } from '@/Components/ui/button'
import { Select } from '@/Components/ui/select'
import { Card, CardContent } from '@/Components/ui/card'

export default function KeranjangPage() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Tahu Telor',
      price: 13000,
      quantity: 1,
      spiciness: 'Tidak Pedas',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Nasi Goreng',
      price: 13000,
      quantity: 1,
      spiciness: 'Tidak Pedas',
      image: '/placeholder.svg'
    }
  ])

  const clickKeranjang = (pesanan) => {
    console.log('Clicked keranjang for:', pesanan)
  }

  const displayKeranjang = () => {
    console.log('Displaying keranjang')
  }

  const pilihPesanan = () => {
    console.log('Selecting pesanan')
  }

  const choosePesanan = (id, change) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change)
        return { ...item, quantity: newQuantity }
      }
      return item
    }))
  }

  const updateSpiciness = (id, value) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, spiciness: value } : item
    ))
  }

  const calculateTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const checkOut = (pesanan) => {
    router.post('/checkout', { items, total: calculateTotal() })
  }

  useEffect(() => {
    displayKeranjang()
  }, [])

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 bg-gray-200 rounded-md" />
          <h1 className="text-2xl font-bold">Warung Bu Ridho</h1>
        </div>

        <div className="space-y-6">
          {items.map((item) => (
            <Card key={item.id} className="p-6">
              <CardContent>
                <div className="flex gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 rounded-lg object-cover"
                  />
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Varian:</p>
                      <p className="text-sm text-gray-600">Tingkat Kepedasan</p>
                      <Select
                        value={item.spiciness}
                        onValueChange={(value) => updateSpiciness(item.id, value)}
                      >
                        <option value="Tidak Pedas">Tidak Pedas</option>
                        <option value="Pedas">Pedas</option>
                        <option value="Sangat Pedas">Sangat Pedas</option>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-semibold">Rp{item.price.toLocaleString()}</p>
                      <div className="flex items-center space-x-4">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => choosePesanan(item.id, -1)}
                        >
                          -
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => choosePesanan(item.id, 1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300" />
              <span>Semua</span>
            </div>
            <div className="flex items-center space-x-4">
              <div>
                <p className="text-sm text-gray-600">Total:</p>
                <p className="font-semibold">Rp{calculateTotal().toLocaleString()}</p>
              </div>
              <Button onClick={() => checkOut(items)}>Check Out</Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

