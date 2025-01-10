'use client'

import Link from 'next/link'
import { useStore } from '../store/store'
import { ShoppingCart, Heart, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import SettingsMenu from './SettingsMenu'
import CartDropdown from './CartDropdown'

export default function Header() {
  const { favorites, cart } = useStore()
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold ">
          E-Kommerce
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link href="/">
                <Button variant="ghost">Home</Button>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <Button variant="ghost">Products</Button>
              </Link>
            </li>
            <li>
              <Link href="/favorites">
                <Button variant="ghost" className="relative">
                  <Heart className="w-5 h-5" />
                  {favorites.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {favorites.length}
                    </span>
                  )}
                </Button>
              </Link>
            </li>
            <li>
              <CartDropdown />
            </li>
            <li>
              <Button variant="ghost" onClick={() => setIsSettingsOpen(true)}>
                <Settings className="w-5 h-5" />
              </Button>
            </li>
          </ul>
        </nav>
      </div>
      <SettingsMenu isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </header>
  )
}

