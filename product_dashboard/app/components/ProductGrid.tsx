'use client'

import { useState } from 'react'
import { Product } from '../types/product'
import ProductCard from './ProductCard'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [pageInput, setPageInput] = useState('') // For entering a specific page number
  const productsPerPage = 12

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  const pageCount = Math.ceil(filteredProducts.length / productsPerPage)

  const handlePageInput = () => {
    const pageNumber = parseInt(pageInput, 10)
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= pageCount) {
      setCurrentPage(pageNumber)
    }
    setPageInput('')
  }

  const renderPageNumbers = () => {
    const pagesToShow = 5 // Number of pages to show before and after the current page
    const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2))
    const endPage = Math.min(pageCount, startPage + pagesToShow - 1)

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
  }

  return (
    <div>
      {/* Search Input */}
      <Input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-8 flex flex-col items-center space-y-4 ">
        <div className="flex items-center space-x-2">
          {/* Previous Arrow */}
          <Button
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </Button>

          {/* Page Numbers */}
          {renderPageNumbers().map(page => (
            <Button
              key={page}
              onClick={() => setCurrentPage(page)}
              variant={currentPage === page ? 'default' : 'outline'}
              className={currentPage === page ? 'font-bold' : ''}
            >
              {page}
            </Button>
          ))}

          {/* Next Arrow */}
          <Button
            onClick={() => currentPage < pageCount && setCurrentPage(currentPage + 1)}
            disabled={currentPage === pageCount}
          >
            &gt;
          </Button>
        </div>

        {/* Page Jump Input */}
        <div className="flex items-center space-x-2">
          <Input
            type="number"
            placeholder="Enter page no"
            value={pageInput}
            onChange={(e) => setPageInput(e.target.value)}
            className="w-30"
          />
          <Button onClick={handlePageInput}>Go</Button>
        </div>
      </div>
    </div>
  )
}
