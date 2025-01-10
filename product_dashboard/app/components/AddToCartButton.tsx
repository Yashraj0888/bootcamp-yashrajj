'use client'

import { useStore } from '../store/store'
import { Product } from '../types/product'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

interface AddToCartButtonProps {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useStore()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addToCart(product)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <Button onClick={handleAddToCart}>
      Add to Cart
    </Button>
  )
}

