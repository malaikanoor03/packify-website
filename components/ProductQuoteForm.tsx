'use client'

import { useState } from 'react'

interface ProductQuoteFormProps {
  productName: string
}

export default function ProductQuoteForm({ productName }: ProductQuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    formData.append('product', productName)

    try {
      await fetch('https://usebasin.com/f/509f24858fc6', {
        method: 'POST',
        body: formData,
      })
      alert('Thank you! We will contact you soon with a custom quote.')
      e.currentTarget.reset()
    } catch (error) {
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="col-span-1">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Request Custom Quote</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            required
            className="p-3 border rounded-md w-full text-gray-700"
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            className="p-3 border rounded-md w-full text-gray-700"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="p-3 border rounded-md w-full text-gray-700"
          />
          <input
            type="text"
            name="quantity"
            placeholder="Quantity"
            className="p-3 border rounded-md w-full text-gray-700"
          />
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            name="length"
            placeholder="Length (in)"
            className="p-3 border rounded-md w-full text-gray-700"
          />
          <input
            type="text"
            name="width"
            placeholder="Width (in)"
            className="p-3 border rounded-md w-full text-gray-700"
          />
          <input
            type="text"
            name="depth"
            placeholder="Depth (in)"
            className="p-3 border rounded-md w-full text-gray-700"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <select name="material" className="p-3 border rounded-md w-full text-gray-700">
            <option>Material</option>
            <option>Cardboard</option>
            <option>Kraft</option>
            <option>Corrugated</option>
          </select>
          <select name="printed_side" className="p-3 border rounded-md w-full text-gray-700">
            <option>Printed Side</option>
            <option>Outside Only</option>
            <option>Inside & Outside</option>
          </select>
        </div>
        
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Please describe your product and packaging requirements..."
          className="p-3 border rounded-md w-full text-gray-700"
        />
        
        <div>
          <label htmlFor="file" className="block text-sm font-medium text-gray-700">
            Attach Design or Reference File (optional)
          </label>
          <input
            type="file"
            id="file"
            name="file"
            className="mt-1 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-600 hover:file:bg-orange-100 transition"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-500 text-white py-3 rounded hover:bg-orange-600 transition disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Request a Quote'}
        </button>
      </form>
    </section>
  )
}