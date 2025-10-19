'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/products-data'

interface ProductOverviewProps {
  product: Product
}

export default function ProductOverview({ product }: ProductOverviewProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {product.overviewTitle}
          </h2>
          <div className="text-gray-700 mb-6 whitespace-pre-line">
            {product.overviewContent}
          </div>
          <Link
            href="/get-quote"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-md transition inline-block"
          >
            Get My Quote
          </Link>
        </div>

        {/* Right Image with Hover */}
        <div className="relative w-full h-80 lg:h-[37rem] rounded-xl overflow-hidden shadow-lg group">
          <Image
            src={product.overviewImage}
            alt={product.title}
            fill
            className="object-cover absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          />
          <Image
            src={product.overviewHoverImage}
            alt={`${product.title} Overview`}
            fill
            className="object-cover absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
        </div>
      </div>
    </section>
  )
}
