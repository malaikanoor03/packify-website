'use client'

import Image from 'next/image'
import { Product } from '@/lib/products-data'

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <section className="col-span-1">
      <h1 className="text-4xl font-extrabold mb-6 text-orange-600">
        {product.title}
      </h1>
      
      <div className="relative w-full h-[350px] overflow-hidden rounded-xl mb-6 bg-[#f7f4ef] group">
        <Image
          src={product.mainImage}
          alt={product.title}
          fill
          className="object-contain transition-opacity duration-500 opacity-100 group-hover:opacity-0"
        />
        <Image
          src={product.hoverImage}
          alt={`${product.title} Hover`}
          fill
          className="object-contain absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        />
      </div>
      
      <p className="text-gray-700 text-lg mb-8">
        {product.description}
      </p>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
        {product.features.map((feature, index) => (
          <div key={index}>
            <Image
              src={`/images/${getFeatureIcon(feature)}.webp`}
              alt={feature}
              width={32}
              height={32}
              className="mx-auto"
            />
            <p className="mt-2 text-gray-600">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function getFeatureIcon(feature: string): string {
  const iconMap: Record<string, string> = {
    'Fast Turnaround': 'clock',
    'Full Color Printing': 'paint-swatch',
    'Design Support': 'paint-palette',
    'Free Shipping': 'delivery',
  }
  return iconMap[feature] || 'clock'
}