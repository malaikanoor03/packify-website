'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Swiper from 'swiper'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Amazon Seller',
    image: '/images/photo-1595514191830-3e96a518989b.avif',
    quote: 'Absolutely love our new custom boxes! The quality is top-notch and delivery was super fast.',
  },
  {
    name: 'Omar Khalid',
    role: 'Small Business Owner',
    image: '/images/mark-farias-dt60oksDTx8-unsplash.webp',
    quote: 'We switched to PackifyCustomBoxes and saw an instant boost in customer satisfaction.',
  },
  {
    name: 'Emily Carter',
    role: 'E-commerce Manager',
    image: '/images/marie-michele-bouchard-3U9BCWHMhUw-unsplash.webp',
    quote: 'High quality, eco-friendly packaging that truly represents our brand. Highly recommended!',
  },
  {
    name: 'Liam Patel',
    role: 'Retailer',
    image: '/images/jonas-kakaroto-KIPqvvTOC1s-unsplash.webp',
    quote: 'The packaging quality exceeded our expectations. Customers keep complimenting it!',
  },
]

export default function Testimonials() {
  const swiperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        modules: [Pagination, Autoplay],
        loop: true,
        grabCursor: true,
        spaceBetween: 30,
        slidesPerView: 1,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
      })
    }
  }, [])

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
  Loved by <span className="text-orange-500">Businesses Worldwide</span>
</h2>

        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Our customers trust PackifyCustomBoxes to deliver premium, eco-friendly packaging solutions that elevate their brands.
        </p>

        {/* Swiper Container */}
        <div ref={swiperRef} className="swiper mySwiper pb-12">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="swiper-slide">
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                  <div className="relative w-20 h-20 rounded-full mb-4 border-4 border-[#f97316] shadow-lg mx-auto overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <span className="text-sm text-gray-500">{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="swiper-pagination mt-6"></div>
        </div>
      </div>
    </section>
  )
}