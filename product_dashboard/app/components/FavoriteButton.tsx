'use client'

import { useStore } from '../store/store'
import { Product } from '../types/product'
import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

interface FavoriteButtonProps {
  product: Product
}

export default function FavoriteButton({ product }: FavoriteButtonProps) {
  const { addToFavorites, removeFromFavorites, favorites } = useStore()
  const { toast } = useToast()

  const isFavorite = favorites.some(fav => fav.id === product.id)

  const toggleFavorite = () => {
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

  return (
    <Button variant="outline" onClick={toggleFavorite}>
      <Heart className={`w-5 h-5 mr-2 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-500'}`} />
      {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </Button>
  )
}

