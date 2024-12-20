import React from 'react';
import { Button } from '@/Components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function WarungMenu({ name, price, image,onViewDetails }) {

 
  return (
    <Card>
      <CardContent className="p-4">
        <div className="mb-4">
          <img
            src={`/${image}`}
            alt={name}
            className="object-cover w-full h-48 rounded-md"
          />
        </div>
        <h2 className="mb-2 text-xl font-semibold">{name}</h2>
        <p className="mb-4 text-gray-600">Rp{price.toLocaleString()}</p>
        
        <Button variant="link" onClick={onViewDetails}>
            Lihat Detail
          </Button>
      </CardContent>
    </Card>
  );
}