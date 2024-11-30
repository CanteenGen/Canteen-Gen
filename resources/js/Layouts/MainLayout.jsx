import React from 'react'
import { Link } from '@inertiajs/react'
import { ShoppingCart, User } from 'lucide-react'
import PropTypes from 'prop-types'

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="bg-gray-100 p-2 rounded-md">
                  <span className="font-bold">★ LOGO</span>
                </div>
              </Link>
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
                <Link href="/menu" className="text-gray-600 hover:text-gray-900">
                  Menu
                </Link>
                <Link href="/riwayat-pesanan" className="text-gray-600 hover:text-gray-900">
                  Riwayat Pesanan
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/cart" className="relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>
              <Link href="/profile">
                <User className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
