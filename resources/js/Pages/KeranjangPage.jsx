import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout.jsx';
import { Button } from '@/Components/ui/button';
import { Select } from '@/Components/ui/select';
import { Card, CardContent } from '@/Components/ui/card';

export default function KeranjangPage({ items: initialItems }) {
  // Pastikan items adalah array
  const [items, setItems] = useState(Array.isArray(initialItems) ? initialItems : []);

  // Fungsi untuk menghitung total
  const calculateTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Fungsi lainnya tetap sama...
  const choosePesanan = (id, change) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const updateSpiciness = (id, value) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, spiciness: value } : item
      )
    );
  };

  const checkOut = () => {
    router.post('/checkout', {
      items: items,
      total: calculateTotal(),
    });
  };

  return (
    <MainLayout>
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-8 text-2xl font-bold">Keranjang Belanja</h1>

        {/* List Keranjang */}
        <div className="space-y-6">
          {items.length > 0 ? (
            items.map((item) => (
              <Card key={item.id} className="p-6">
                <CardContent>
                  <div className="flex gap-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover w-32 h-32 rounded-lg"
                    />
                    <div className="flex-1 space-y-4">
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <div>
                        <p className="mb-1 text-sm text-gray-600">Tingkat Kepedasan</p>
                        <Select
                          value={item.spiciness || 'Tidak Pedas'}
                          onChange={(e) => updateSpiciness(item.id, e.target.value)}
                          className="p-2 border rounded"
                        >
                          <option value="Tidak Pedas">Tidak Pedas</option>
                          <option value="Pedas">Pedas</option>
                          <option value="Sangat Pedas">Sangat Pedas</option>
                        </Select>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">
                          Rp{item.price.toLocaleString()}
                        </p>
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
            ))
          ) : (
            <p className="text-gray-600">Keranjang belanja kosong.</p>
          )}
        </div>

        {/* Footer Total */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
          <div className="container flex items-center justify-between mx-auto">
            <p className="font-semibold">
              Total: Rp{calculateTotal().toLocaleString()}
            </p>
            <Button onClick={checkOut} className="bg-blue-500 hover:bg-blue-600">
              Check Out
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
