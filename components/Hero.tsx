'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden px-[40px] pt-0 pb-0 group">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#f97316] bg-opacity-100 transition duration-500 z-0" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center relative z-10 min-h-[400px] pt-[6rem]">
        {/* Left Text Content */}
        <div className="px-6 pt-[4px] pb-[52px] md:pt-16 md:pb-16 space-y-6 z-20 relative">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Your Packaging. <br />Your Story.
          </h1>
          <p className="text-lg sm:text-xl">
            Premium custom boxes designed to elevate your brand. Fully printed. Fast turnaround. Eco-conscious. Made to
            impress inside and out.
          </p>
          <p className="text-lg font-bold">
            Free U.S. Shipping. No Minimums. Delivered Worldwide.
          </p>
          <Link
            href="#type"
            className="mt-4 inline-block px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg shadow-md hover:bg-orange-100 transition"
          >
            Start Your Custom Box
          </Link>
        </div>

        {/* Right Media Block */}
        <div className="relative w-full h-full flex items-center justify-center px-6 py-10 hidden md:flex">
          <video
            src="/videos/1754748684485.mp4"
            poster="/images/packify-customboxes.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="rounded-xl shadow-lg w-full max-w-[450px] h-[360px] object-cover"
          />
        </div>
      </div>
    </section>
  )
}