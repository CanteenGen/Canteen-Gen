import React, { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout.jsx';

export default function MenuDetailsPage({ menu }) {
  const [quantity, setQuantity] = useState(1);
  const [spiciness, setSpiciness] = useState('Tidak Pedas');
  const [serving, setServing] = useState('Dibungkus');
  const { flash } = usePage().props;

  // Fungsi Tambah Keranjang
  const addToCart = () => {
    router.post('/keranjang/add', {
      id: menu.id,
      name: menu.nama,
      price: menu.harga,
      quantity: quantity,
      spiciness: spiciness,
      serving: serving,
    });
  };

  // Fungsi Pesan Sekarang

  // Penyesuaian Jumlah
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <MainLayout>
      <div className="container px-4 py-8 mx-auto">
        {/* Flash Message */}
        {flash?.success && (
          <div className="p-4 mb-4 text-green-700 bg-green-100 rounded">
            {flash.success}
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Gambar Menu */}
          <div>
            <img
              src={`/${menu.gambar}`}
              alt={menu.nama}
              className="object-cover w-full h-64 rounded-md"
            />
          </div>

          {/* Detail Menu */}
          <div>
            <h1 className="mb-2 text-2xl font-bold">{menu.nama}</h1>
            <h2 className="mb-4 text-xl font-semibold text-gray-700">
              Rp{menu.harga.toLocaleString()}
            </h2>

            {/* Pilihan Varian */}
            <div className="mb-4">
              <p className="font-semibold">Varian:</p>
              <div className="flex gap-4 mt-2">
                <select
                  className="p-2 border rounded"
                  value={spiciness}
                  onChange={(e) => setSpiciness(e.target.value)}
                >
                  <option>Tidak Pedas</option>
                  <option>Pedas</option>
                </select>
                <select
                  className="p-2 border rounded"
                  value={serving}
                  onChange={(e) => setServing(e.target.value)}
                >
                  <option>Dibungkus</option>
                  <option>Makan di Tempat</option>
                </select>
              </div>
            </div>

            {/* Jumlah Pesanan */}
            <div className="flex items-center gap-4 mb-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={handleDecrease}
              >
                -
              </button>
              <span className="text-lg font-bold">{quantity}</span>
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>

            {/* Tombol Aksi */}
            <div className="flex gap-4">
              <button
                onClick={() => router.visit('/keranjang')} // Bungkus dengan arrow function
                className="px-6 py-2 text-white bg-black rounded"
              >
                Pesan Sekarang
              </button>

              <button
                onClick={addToCart}
                className="px-6 py-2 border border-gray-500 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Deskripsi Menu */}
        <div className="mt-8">
          <h3 className="mb-2 text-lg font-bold">Description</h3>
          <p className="text-gray-600">
            {menu.description ||
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim dapibus quis id convallis vitae auctor feugiat massa.'}
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
