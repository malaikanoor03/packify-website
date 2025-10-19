'use client'

import React from 'react'

const GetCustomQuote = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 pt-[6rem]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Get Custom Quote</h1>
        <p className="text-gray-600 text-base">
          Fill out the form below to receive a personalized quote for your packaging needs.
        </p>
      </div>

      {/* Form */}
      <form
        className="bg-white shadow-xl rounded-xl p-8 space-y-6"
        action="https://usebasin.com/f/a24a59909c70"
        method="POST"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-600"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Product Type
            </label>
            <input
              type="text"
              name="product"
              placeholder="e.g., Custom Mailer Box"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-600"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              placeholder="e.g., 1000"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-600"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Message / Additional Requirements
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Describe your design preferences, dimensions, materials, etc."
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-600"
          ></textarea>
        </div>

        {/* File Upload */}
        <div>
          <label
            htmlFor="file"
            className="block text-sm font-medium text-gray-700"
          >
            Attach Design or Reference File (optional)
          </label>
          <input
            type="file"
            id="file"
            name="file"
            className="mt-1 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                     file:rounded-md file:border-0 file:text-sm file:font-semibold
                     file:bg-orange-50 file:text-orange-600
                     hover:file:bg-orange-100 transition"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Submit Quote Request
          </button>
        </div>
      </form>
    </section>
  )
}

export default GetCustomQuote
