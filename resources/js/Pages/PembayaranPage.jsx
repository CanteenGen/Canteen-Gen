import React from 'react'
import { router } from '@inertiajs/react'
import MainLayout from '../Layouts/MainLayout.jsx'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import PropTypes from 'prop-types'

export default function PembayaranPage({ items = [], total = 0 }) {
    const confirm = () => {
        router.post('/create-order', {
            items,
            total,
        })
    }

    return (
        <MainLayout>
            <div className="container mx-auto px-4 py-8 pb-24">
                <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-gray-200 rounded-md" />
                    <h1 className="text-2xl font-bold">Warung Bu Ridho</h1>
                </div>

                <div className="space-y-8">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Pesanan</h2>
                        <div className="space-y-4">
                            {items.map((item) => (
                                <Card key={item.id}>
                                    <CardContent className="p-6">
                                        <div className="flex gap-6">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-32 h-32 rounded-lg object-cover"
                                            />
                                            <div>
                                                <h3 className="font-semibold">{item.name}</h3>
                                                <p className="text-sm text-gray-600">Tingkat Kepedasan: {item.spiciness}</p>
                                                <p className="text-sm text-gray-600">Jumlah: {item.quantity}</p>
                                                <p className="font-semibold">Rp{(item.price * item.quantity).toLocaleString()}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <Card className="mt-8">
                        <CardContent className="p-6">
                            <h2 className="text-xl font-semibold mb-6">Rincian Pembayaran</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span>Subtotal untuk produk</span>
                                    <span>Rp{total.toLocaleString()}</span>
                                </div>
                                <div className="pt-4 border-t flex justify-between font-semibold">
                                    <span>Total Pembayaran</span>
                                    <span>Rp{total.toLocaleString()}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-md">
                    <div className="container mx-auto flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-600">Total:</p>
                            <p className="font-semibold">Rp{total.toLocaleString()}</p>
                        </div>
                        <Button onClick={confirm}>Konfirmasi Pembayaran</Button>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

PembayaranPage.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number
}

