'use client'

import Image from 'next/image'

const logos = [
  { name: 'Amazon', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Walmart', src: '/images/logo-vector-graphics-brand-walmart-portable-network-graphics-png-favpng-RNmwyt5haE5GzqfvtZfVWaRk3-removebg-preview.webp' },
  { name: 'FedEx', src: '/images/133-1330613_fedex-logo-vector-by-windytheplaneh-on-deviantart-fedex-logo-vector-by-windytheplaneh-removebg-preview.webp' },
  { name: 'Starbucks', src: '/images/Starbucks_Corporation_Logo_2011.svg-100.webp' },
  { name: "Kellogg's", src: '/images/kellogg-s-breakfast-cereal-logo-brand-png-favpng-5ffzujXjcArjYsMPn2P9a2FD1-removebg-preview.webp' },
  { name: 'Target', src: '/images/target-logo-target-icon-transparent-free-png.webp' },
  { name: 'Netflix', src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
]

export default function TrustedBy() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-black mb-10">
          Trusted By <span className="text-orange-500">3,000+</span> Businesses
        </h2>

        <div className="overflow-hidden relative w-full py-6">
          <div className="flex animate-scroll space-x-12">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={120}
                  height={48}
                  className="h-12 w-auto object-contain transition duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}