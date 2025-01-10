import { fetchProducts } from '../lib/api'
import ProductGrid from '../components/ProductGrid'

export default async function ProductsPage() {
  const products = await fetchProducts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <ProductGrid products={products} />
    </div>
  )
}

