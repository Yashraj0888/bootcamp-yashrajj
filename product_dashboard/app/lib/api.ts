import { products } from '../data/products'
import { Product } from '../types/product'

export async function fetchProducts(): Promise<Product[]> {
  // Simulating an API call with a delay
  await new Promise(resolve => setTimeout(resolve, 500))
  return products
}

export async function fetchProductById(id: string): Promise<Product | undefined> {
  // Simulating an API call with a delay
  await new Promise(resolve => setTimeout(resolve, 500))
  return products.find(product => product.id === id)
}

