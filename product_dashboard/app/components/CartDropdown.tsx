'use client'

import { useStore } from '../store/store'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function CartDropdown() {
  const { cart, removeFromCart } = useStore()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative">
          <ShoppingCart className="w-5 h-5" />
          {cart.items.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cart.items.length}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Your Cart</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {cart.items.length === 0 ? (
          <DropdownMenuItem>Your cart is empty</DropdownMenuItem>
        ) : (
          <>
            {cart.items.map((item) => (
              <DropdownMenuItem key={item.id}>
                <span>{item.name} (x{item.quantity})</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Total: ${cart.total.toFixed(2)}
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

