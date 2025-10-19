'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function CustomBoxForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)

    try {
      await fetch('https://usebasin.com/f/509f24858fc6', {
        method: 'POST',
        body: formData,
      })
      alert('Thank you! We will contact you soon.')
      e.currentTarget.reset()
    } catch (error) {
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="max-w-6xl mx-auto my-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      {/* Left Content */}
      <div className="bg-white p-6 sm:p-[3.9rem] rounded-2xl shadow-md relative overflow-hidden md:pt-[1.3rem]">
        <h2 className="text-3xl sm:text-2xl font-bold text-orange-400 mb-4 leading-tight">
          Didn&apos;t find your desired product?
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-6">
          Can&apos;t find exactly what you need? Just fill out the form, and our team will get in touch with a custom packaging
          solution tailored to you.
        </p>

        <div className="hidden md:block relative w-full mt-4 rounded-xl overflow-hidden group h-[400px]">
          <Image
            src="/images/submit-img.webp"
            alt="Custom Packaging"
            fill
            className="object-cover transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0 rounded-xl shadow-sm absolute z-10"
          />
          <Image
            src="/images/WhatsApp Image 2025-08-05 at 11.14.21 PM.webp"
            alt="Hovered Packaging"
            fill
            className="object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 rounded-xl shadow-sm"
          />
        </div>
      </div>

      {/* Right Form Block */}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Box Type */}
          <div>
            <label htmlFor="box_type" className="block text-sm font-medium text-gray-800 mb-1">
              Box Type:
            </label>
            <select id="box_type" name="box_type" required className="w-full border p-2 rounded text-gray-800">
              <option value="">Select a box type</option>
              <option>Mailer Box</option>
              <option>Tuck Boxes</option>
              <option>Rigid Box</option>
              <option>Dispenser Boxes</option>
              <option>Cigarette Boxes</option>
              <option>Burger Boxes</option>
              <option>Magnetic Closure</option>
              <option>Cosmetic Boxes</option>
            </select>
          </div>

          {/* Product Type */}
          <div>
            <label htmlFor="product_type" className="block text-sm font-medium text-gray-800 mb-1">
              Product Type:
            </label>
            <input
              id="product_type"
              type="text"
              name="product_type"
              placeholder="Candle etc"
              className="w-full border p-2 rounded text-gray-800"
            />
          </div>
        </div>

        {/* Interior Dimensions */}
        <label htmlFor="length" className="block text-sm font-medium text-gray-800 mt-2">
          Interior Dimensions:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-gray-800">
          <input id="length" type="text" name="length" placeholder="Length" className="w-full border p-2 rounded" />
          <input id="width" type="text" name="width" placeholder="Width" className="w-full border p-2 rounded" />
          <input id="depth" type="text" name="depth" placeholder="Depth" className="w-full border p-2 rounded" />
          <div>
            <label htmlFor="unit" className="sr-only">
              Unit
            </label>
            <select id="unit" name="unit" className="w-full border p-2 rounded">
              <option>in</option>
              <option>cm</option>
            </select>
          </div>
        </div>

        {/* Material */}
        <div>
          <label htmlFor="material" className="block text-sm font-medium text-gray-800 mb-1">
            Material:
          </label>
          <select id="material" name="material" className="w-full border p-2 rounded text-gray-800">
            <option value="">Select Material</option>
            <option>Cardboard Boxes</option>
            <option>Corrugated Boxes</option>
            <option>Kraft Boxes</option>
            <option>Rigid Boxes</option>
          </select>
        </div>

        {/* Additional Info */}
        <label htmlFor="additional_info" className="block text-sm font-medium text-gray-800">
          Additional Info:
        </label>
        <textarea
          id="additional_info"
          name="additional_info"
          rows={4}
          placeholder="Additional Info"
          className="w-full border p-3 rounded text-gray-800"
        />

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-800">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input id="name" type="text" name="name" placeholder="Name*" required className="w-full border p-2 rounded" />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input id="email" type="email" name="email" placeholder="Email*" required className="w-full border p-2 rounded" />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">Phone</label>
            <input id="phone" type="tel" name="phone" placeholder="Phone" className="w-full border p-2 rounded" />
          </div>
        </div>

        {/* File Upload */}
        <div>
          <label htmlFor="file" className="block text-sm font-medium text-gray-800">
            Attach Design or Reference File (optional)
          </label>
          <input
            type="file"
            id="file"
            name="file"
            className="mt-1 w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-600 hover:file:bg-orange-100 transition"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded transition disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </section>
  )
}
