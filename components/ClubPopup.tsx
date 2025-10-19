'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ClubPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    try {
      await fetch('https://usebasin.com/f/509f24858fc6', {
        method: 'POST',
        body: formData,
      })
      alert('Thank you for joining! Check your email for exclusive offers.')
      setIsOpen(false)
    } catch (error) {
      alert('Something went wrong. Please try again.')
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="join-club-heading"
    >
      <div className="bg-white rounded-lg w-full max-w-3xl flex flex-col md:flex-row overflow-hidden shadow-lg animate-fade-in relative">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-gray-400 hover:text-black text-2xl font-bold z-10"
          aria-label="Close popup"
        >
          &times;
        </button>

        {/* Left Side Image with Hover Effect */}
        <div className="hidden md:block w-full md:w-1/2 relative group overflow-hidden">
          <Image
            src="/images/JOIN THE CLUB 1.webp"
            alt="Join The Club"
            fill
            className="object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <Image
            src="/images/join the club 2.webp"
            alt="Join The Club Hover"
            fill
            className="object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
          <h2
            id="join-club-heading"
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
          >
            Join The Club
          </h2>
          <p className="text-sm text-gray-600 mb-4">Get access to exclusive special offers.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="club-name"
                className="text-sm font-medium text-gray-700"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="club-name"
                name="name"
                type="text"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label
                htmlFor="club-email"
                className="text-sm font-medium text-gray-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="club-email"
                name="email"
                type="email"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <button
              type="submit"
              className="bg-[#f97316] hover:bg-[#c75a12] text-white font-semibold py-2 px-6 rounded-md transition w-full"
            >
              Get Access
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
