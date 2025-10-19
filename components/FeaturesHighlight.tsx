'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function WhyChoosePackify() {
  const highlights = [
    {
      title: 'Eco-Friendly Materials',
      desc: 'Made from 100% recyclable materials — better for your brand and the planet.',
      icon: '/images/svg-2.webp',
    },
    {
      title: 'No Minimum Orders',
      desc: 'Order as few or as many boxes as you need. Perfect for startups and bulk buyers.',
      icon: '/images/svg.webp',
    },
    {
      title: 'Free Design Support',
      desc: 'Our professional designers help you create stunning packaging — at no cost.',
      icon: '/images/svg-3.webp',
    },
    {
      title: 'Fast 10-Day Delivery',
      desc: 'Lightning-fast production and worldwide shipping you can rely on.',
      icon: '/images/svg-3.webp',
    },
    {
      title: '3,000+ Happy Clients',
      desc: 'Trusted by brands across the globe for quality, reliability, and creativity.',
      icon: '/images/svg-2.webp',
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-orange-50" id="why-packify">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Why Choose <span className="text-[#f97316]">Packify Custom Boxes?</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          At Packify, we help brands grow through beautiful, durable, and eco-conscious packaging.
          From concept to doorstep, every box is designed with care — no minimums, fast turnarounds,
          and full creative freedom.
        </p>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-orange-100 p-4 rounded-full mb-4">
                <Image src={item.icon} alt={item.title} width={50} height={50} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-14">
          <p className="text-gray-700 text-base max-w-2xl mx-auto mb-6">
            Every Packify box is designed to impress — with stunning full-color printing,
            perfect sizing to reduce shipping costs, and a 100% satisfaction guarantee.
          </p>
          <Link
            href="/get-quote"
            className="inline-block bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-lg py-4 px-10 rounded-full shadow-lg transition-all duration-300"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
