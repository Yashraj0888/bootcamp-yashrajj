'use client'

import { useStore } from '../store/store'
import ProductCard from '../components/ProductCard'
import { Button } from '@/components/ui/button'

export default function FavoritesPage() {
  const { favorites, removeFromFavorites } = useStore()

  const handleRemoveAll = () => {
    favorites.forEach((product) => removeFromFavorites(product.id))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Favorites</h1>
      {favorites.length === 0 ? (
        <p>You haven't added any favorites yet.</p>
      ) : (
        <>
          <Button onClick={handleRemoveAll} className="mb-4">Remove All</Button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

