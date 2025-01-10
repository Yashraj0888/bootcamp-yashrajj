import { fetchProductById } from '../../lib/api'
import { Product } from '../../types/product'
import AddToCartButton from '../../components/AddToCartButton'
import FavoriteButton from '../../components/FavoriteButton'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@/components/ui/breadcrumb'
import Image from 'next/image'
import Link from 'next/link'

interface ProductDetailsProps {
  params: {
    id: string
  }
}

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const product = await fetchProductById(params.id)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/products">Products</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>{product.name}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={500}
            height={500}
            layout="responsive"
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-4">{product.description}</p>
          <p className="mb-4">Category: {product.category}</p>
          <p className="mb-4">Rating: {product.rating}/5</p>
          <p className="mb-4">Stock: {product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
          <div className="flex space-x-4">
            <AddToCartButton product={product} />
            <FavoriteButton product={product} />
          </div>
        </div>
      </div>
    </div>
  )
}

