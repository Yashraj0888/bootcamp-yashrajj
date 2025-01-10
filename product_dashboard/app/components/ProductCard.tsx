'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Product } from '../types/product'
import { useStore } from '../store/store'
import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/components/ui/use-toast'
import { convertCurrency } from '../utils/currencyConverter'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToFavorites, removeFromFavorites, favorites, userPreferences, addToCart } = useStore()
  const { toast } = useToast()

  const isFavorite = favorites.some(fav => fav.id === product.id)

  const toggleFavorite = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // Stop propagation to prevent redirect
    event.stopPropagation()
    if (isFavorite) {
      removeFromFavorites(product.id)
      toast({
        title: "Removed from favorites",
        description: `${product.name} has been removed from your favorites.`,
      })
    } else {
      addToFavorites(product)
      toast({
        title: "Added to favorites",
        description: `${product.name} has been added to your favorites.`,
      })
    }
  }

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // Stop propagation to prevent redirect
    event.stopPropagation()
    addToCart(product)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const convertedPrice = convertCurrency(product.price, 'USD', userPreferences.currency)

  return (
    <Card
      className="cursor-pointer"
      onClick={() => (window.location.href = `/products/${product.id}`)}
    >
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          {product.name}
          <Button variant="ghost" onClick={toggleFavorite}>
            <Heart
              className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-500'}`}
            />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-48 mb-4">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
            
          />
        </div>
        <p className="text-lg font-bold">
          {userPreferences.currency} {convertedPrice.toFixed(2)}
        </p>
        <p className="text-sm text-gray-500">Rating: {product.rating}/5</p>
        <p className="text-sm text-gray-500">Category: {product.category}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}