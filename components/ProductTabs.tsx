'use client'

import { useState } from 'react'
import Image from 'next/image'
import { 
  materialsData, 
  printingData, 
  finishesData, 
  boxStylesData 
} from '@/lib/tabs-data'

type TabType = 'materials' | 'printing' | 'finishes' | 'boxStyles'

type ProductTabsProps = {
  productSlug: string
}

// List of products that should show tabs
const TAB_PRODUCTS = [
  'mailer-boxes',
  'dispenser-boxes',
  'rigid-boxes',
  'tuck-boxes',
  'magnetic-closure'
  // add other box slugs that need tabs
]

export default function ProductTabs({ productSlug }: ProductTabsProps) {
  // Only render tabs if this product slug is allowed
  if (!TAB_PRODUCTS.includes(productSlug)) return null

  const [activeTab, setActiveTab] = useState<TabType>('materials')

  const tabs = [
    { id: 'materials' as TabType, label: 'MATERIALS' },
    { id: 'printing' as TabType, label: 'PRINTING' },
    { id: 'finishes' as TabType, label: 'FINISHES' },
    { id: 'boxStyles' as TabType, label: 'BOX STYLES' },
  ]

  const getTabData = () => {
    switch (activeTab) {
      case 'materials':
        return materialsData[productSlug] || []
      case 'printing':
        return printingData[productSlug] || []
      case 'finishes':
        return finishesData[productSlug] || []
      case 'boxStyles':
        return boxStylesData[productSlug] || []
      default:
        return []
    }
  }

  const data = getTabData()

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-white">
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === tab.id
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <div key={index} className="text-center bg-white rounded-xl shadow-md hover:shadow-lg transition p-6">
           <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden bg-gray-50">
  <Image
    src={item.image}
    alt={item.name}
    fill
    className="object-cover" // changed from object-contain to object-cover
  />
</div>

            <h3 className="font-semibold text-gray-800">{item.name}</h3>
            {item.description && (
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
