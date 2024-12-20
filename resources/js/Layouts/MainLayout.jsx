import React from 'react'
import { Link } from '@inertiajs/react'
import { ShoppingCart, User } from 'lucide-react'
import PropTypes from 'prop-types'

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="container px-4 py-4 mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="p-2 bg-gray-100 rounded-md">
                  <span className="font-bold">★ LOGO</span>
                </div>
              </Link>
              <nav className="items-center hidden space-x-6 md:flex">
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
                <Link href="/menu-page" className="text-gray-600 hover:text-gray-900">
                  Menu
                </Link>
                <Link href="/riwayat-pesanan" className="text-gray-600 hover:text-gray-900">
                  Riwayat Pesanan
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/keranjang" className="relative">
                <ShoppingCart className="w-6 h-6" />
                
              </Link>
              <Link href="/profile">
                <User className="w-6 h-6" />
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
