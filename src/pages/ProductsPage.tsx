import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

interface Product {
  id: number
  name: string
  description: string
  image: string
}

const ProductsPage: React.FC = () => {
  const { translations } = useLanguage()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const products: Product[] = [
    {
      id: 1,
      name: 'Modern Minimalist Kitchen',
      description: 'Clean lines and sleek finishes define this contemporary kitchen design.',
      image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      name: 'Rustic Farmhouse Kitchen',
      description: 'Warm wood tones and vintage accents create a cozy, inviting atmosphere.',
      image: 'https://images.unsplash.com/photo-1556185781-a47769abb7ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    // Add more products as needed
  ]

  const openProductDetails = (product: Product) => {
    setSelectedProduct(product)
  }

  const closeProductDetails = () => {
    setSelectedProduct(null)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Kitchen Collections</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button
                onClick={() => openProductDetails(product)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-2xl w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-64 object-cover mb-4 rounded" />
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <div className="flex justify-between items-center">
              <button
                onClick={closeProductDetails}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Close
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductsPage