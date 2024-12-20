import React from 'react';
import { router, usePage } from '@inertiajs/react';
import MainLayout from '../Layouts/MainLayout.jsx';
import { Button } from '@/Components/ui/button';
import WarungMenu from '@/Components/WarungMenu';

export default function AllMenuPage({ menu }) {
  const { flash } = usePage().props; 
 



  return (
    
    <MainLayout>
      
      
      <div className="container px-4 py-8 mx-auto">
        {/* Tampilkan Pesan Error Jika Ada */}
      {flash?.error && (
        <div className="p-4 mb-4 text-red-700 bg-red-100 rounded">
          {flash.error}
        </div>
      )}
        <h1 className="mb-8 text-2xl font-bold">Menu Warung </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menu.map((menuItem) => (
            <WarungMenu
              key={menuItem.id}
              name={menuItem.nama}
              price={menuItem.harga}
              image={menuItem.gambar}
              onViewDetails={() => router.visit(`/menu/details/${menuItem.id}`)}
            />
          ))}
        </div>
        <div className="mt-8">
          <Button onClick={() => clickButton('Bayar Sekarang')}>
            Bayar Sekarang
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
