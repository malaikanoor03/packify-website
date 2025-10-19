'use client'

import { useState } from 'react'

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await fetch('https://usebasin.com/f/509f24858fc6', {
        method: 'POST',
        body: formData,
      })
      
      if (response.ok) {
        alert('Thank you! We will get back to you with a custom quote soon.')
        e.currentTarget.reset()
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      alert('Something went wrong. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-white" id="quote">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-500 mb-4">
            <span className="text-black">Request a</span> Quote
          </h2>
          <p className="text-gray-600 text-lg">
            Let us know what you need and we'll get back to you with a custom quote tailored for your packaging needs.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-800">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 w-full border border-gray-300 rounded-md text-gray-800 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 w-full border border-gray-300 text-gray-800 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-800">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="mt-1 w-full border border-gray-300 text-gray-800 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-800">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1 w-full border border-gray-300 text-gray-800 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          {/* Project Description */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-800">
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 w-full border border-gray-300 text-gray-800 rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Tell us about the box style, size, quantity, and any other requirements..."
            />
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
              className="mt-1 w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-600 hover:file:bg-orange-100 transition"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Get My Quote'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}