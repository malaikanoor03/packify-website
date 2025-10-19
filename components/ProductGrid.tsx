'use client'

import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Mailer Boxes',
    description: 'Offer secure, stylish packaging for e-commerce and subscription products. Designed for durability and brand impact, they enhance presentation and protect contents during transit.',
    image: '/images/WhatsApp_Image_2025-08-05_at_3.48.16_AM-removebg-preview.webp',
    hoverImage: '/images/WhatsApp_Image_2025-08-05_at_3.48.17_AM-removebg-preview.webp',
    href: '/products/mailer-boxes',
  },
  {
    id: 2,
    name: 'Tuck Boxes',
    description: 'Compact and sturdy, small tuck boxes are ideal for packaging lightweight items like cosmetics, jewelry, or gifts. Their easy-to-close tuck flap ensures secure storage with a neat, professional look.',
    image: '/images/WhatsApp_Image_2025-08-05_at_3.24.40_AM-removebg-preview.webp',
    hoverImage: '/images/WhatsApp_Image_2025-08-05_at_3.24.39_AM-removebg-preview.webp',
    href: '/products/tuck-boxes',
  },
  {
    id: 3,
    name: 'Rigid Boxes',
    description: 'Premium, sturdy packaging solutions ideal for luxury products. With a high-end finish and solid structure, they deliver an exceptional unboxing experience and strong brand presence.',
    image: '/images/WhatsApp_Image_2025-08-05_at_3.57.58_AM-removebg-preview.webp',
    hoverImage: '/images/WhatsApp_Image_2025-08-05_at_3.57.58_AM__1_-removebg-preview.webp',
    href: '/products/rigid-boxes',
  },
  {
    id: 4,
    name: 'Dispenser Boxes',
    description: 'Custom dispenser boxes are specially designed cardboard packages that provide convenient, controlled access to their contents through easy-to-tear perforated openings, often called "flip-out dispenser" openings.',
    image: '/images/Dispenser-1.webp',
    hoverImage: '/images/Dispenser-2.webp',
    href: '/products/dispenser-boxes',
  },
  {
    id: 5,
    name: 'Cigarette Boxes',
    description: 'Stylish and protective, cigarette boxes are designed to preserve freshness and enhance brand appeal with customizable finishes, sizes, and secure closures.',
    image: '/images/Cigarette-1.webp',
    hoverImage: '/images/Cigarette-2.webp',
    href: '/products/cigarette-boxes',
  },
  {
    id: 6,
    name: 'Burger Boxes',
    description: 'Designed to keep your burgers fresh, secure, and visually appealing. Perfect for dine-in, takeout, or delivery, they offer durability, insulation, and custom branding options.',
    image: '/images/WhatsApp_Image_2025-08-05_at_4.12.26_AM-removebg-preview.webp',
    hoverImage: '/images/WhatsApp_Image_2025-08-05_at_4.12.27_AM-removebg-preview.webp',
    href: '/products/burger-boxes',
  },
  {
    id: 7,
    name: 'Magnetic Closure',
    description: 'Premium unboxing experience with their sleek design and secure magnetic flap. Ideal for luxury products and gifts, they combine elegance with functionality.',
    image: '/images/WhatsApp_Image_2025-08-05_at_3.37.56_AM-removebg-preview.webp',
    hoverImage: '/images/WhatsApp_Image_2025-08-05_at_3.37.56_AM__1_-removebg-preview.webp',
    href: '/products/magnetic-closure',
  },
  {
    id: 8,
    name: 'Cosmetic Boxes',
    description: 'Enhance your brand\'s image while securely packaging skincare and beauty products. Sleek, durable, and fully customizable, they\'re perfect for both retail display and gifting.',
    image: '/images/WhatsApp_Image_2025-08-05_at_3.43.00_AM-removebg-preview.webp',
    hoverImage: '/images/WhatsApp_Image_2025-08-05_at_3.43.00_AM__1_-removebg-preview.webp',
    href: '/products/cosmetic-boxes',
  },
]

export default function ProductGrid() {
  return (
    <section className="type py-16 bg-white" id="type">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-orange-500 mb-4">
          <span className="text-black">Custom Printed</span> Boxes
        </h2>
        <p className="text-black text-lg mb-12">
          Explore custom boxes that are stylish and functional, perfectly crafted to showcase, store, and protect your
          products.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 hover:ring-2 hover:ring-orange-300"
            >
              <div className="relative w-full h-48 overflow-hidden group bg-[#f7f4ef]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-contain transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                />
                <Image
                  src={product.hoverImage}
                  alt={`${product.name} Hover`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-contain transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-xl text-black font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}