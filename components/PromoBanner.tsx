'use client'

import { useState } from 'react'

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <section className="w-full flex justify-center mt-8 mb-6">
      <div className="bg-[#f97316] text-white rounded-lg shadow-md px-4 sm:px-6 py-2 flex items-center justify-between gap-3 text-sm sm:text-base max-w-md w-full text-center">
        <p className="flex-1">
          🎉 Get <strong>15% OFF</strong> — use code <strong>WELCOME15</strong>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-gray-200 focus:outline-none text-lg leading-none"
          aria-label="Close promo banner"
        >
          ✕
        </button>
      </div>
    </section>
  )
}
