'use client'

import { notFound } from 'next/navigation'
import { useState } from 'react'
import ProductDetail from '@/components/ProductDetail'
import ProductTabs from '@/components/ProductTabs'
import ProductQuoteForm from '@/components/ProductQuoteForm'
import ProductOverview from '@/components/ProductOverview'
import ProductInserts from '@/components/ProductInserts'
import { productsData } from '@/lib/products-data'

type Props = {
  params: { slug: string }
}

// Remove the generateStaticParams function from here

function ProductModal({
  isOpen,
  onClose,
  title,
  image,
  description,
}: {
  isOpen: boolean
  onClose: () => void
  title?: string
  image?: string
  description?: string
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl p-6 max-w-4xl w-full relative shadow-2xl flex flex-col md:flex-row gap-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg"
        >
          ✕
        </button>

        {/* Image on Left */}
        {image && (
          <div className="w-full md:w-1/2 h-64 md:h-auto rounded-xl overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        )}

        {/* Details on Right */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-600 text-sm mb-6">
            {description
              ? description
              : `Learn more about our ${title?.toLowerCase()} — designed for quality, protection, and premium presentation. Perfect for your custom packaging needs.`}
          </p>

          <a
            href="/get-quote"
            className="inline-block w-[41%] bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-md font-medium"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </div>
  )
}


// ---- Product Page ----
export default function ProductPage({ params }: Props) {
  const product = productsData[params.slug]

  const [modalData, setModalData] = useState<{
    title?: string
    image?: string
    description?: string
  } | null>(null)

  if (!product) {
    notFound()
  }

  // ✅ Opens modal and passes description from product-data.tsx
  const handleOpenModal = (title: string, image: string, description?: string) => {
    setModalData({ title, image, description })
  }

  const handleCloseModal = () => {
    setModalData(null)
  }

  return (
    <div className="bg-gray-50">
      {/* Product Detail Section */}
      <main className="max-w-6xl mx-auto p-6 pt-[6rem] grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 bg-white rounded-lg shadow-lg">
        <ProductDetail product={product} />
        <ProductQuoteForm productName={product.title} />
      </main>

      {/* Product Inserts Section (for mailer boxes) */}
      {params.slug === 'mailer-boxes' && (
        <ProductInserts productType="mailer" />
      )}

      {/* Product Variants Grid */}
      {product.variants && product.variants.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <h2 className="text-3xl md:text-3xl font-extrabold text-center text-gray-800 mb-10">
            {product.title} Products
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {product.variants.map((variant, index) => (
              <div key={index} className="item__wrap">
                <div className="inner__wrap">
                  <button
                    onClick={() =>
                      handleOpenModal(
                        variant.name,
                        variant.image,
                        variant.description || product.description
                      )
                    }
                    className="relative flex flex-wrap items-center sm:block bg-white px-0 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300"
                  >
                    <div className="thumb__wrap w-full bg-[#efefef] rounded-[22px] md:rounded-[32px] overflow-hidden">
                      <img
                        src={variant.image}
                        alt={variant.name}
                        className="w-full h-auto group-hover:scale-110 transition-transform duration-300"
                        width={336}
                        height={336}
                      />
                    </div>
                    <div className="desc__wrap py-3 text-center">
                      <h3 className="font-headings text-[20px] leading-[24px] text-gray-800 font-bold mb-1">
                        {variant.name}
                      </h3>
                      <span className="font-description text-gray-600 text-[13px] lg:text-[15px]">
                        Request a Quote
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            ))}

            {/* Custom Quote CTA */}
            <div className="thumb__wrap w-full bg-[#f6f6f6] rounded-[22px] md:rounded-[32px] overflow-hidden flex flex-col items-center justify-center h-[20rem] px-4 text-center space-y-4">
              <p className="text-gray-700 text-sm md:text-base">
                <span className="font-semibold block mb-1">Didn't find your ideal design?</span>
                We offer fully custom packaging tailored to your exact needs—styles, finishes, and
                dimensions.
              </p>
              <a
                href="/get-quote"
                className="inline-block bg-orange-600 text-white text-sm px-5 py-2 rounded-md font-medium hover:bg-orange-800 transition"
              >
                Get Custom Quote
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Materials, Printing, Finishes Tabs */}
      <ProductTabs productSlug={params.slug} />


      {/* Product Overview Section */}
      <ProductOverview product={product} />

      {/* Popup Modal */}
      <ProductModal
        isOpen={!!modalData}
        onClose={handleCloseModal}
        title={modalData?.title}
        image={modalData?.image}
        description={modalData?.description}
      />
    </div>
  )
}
