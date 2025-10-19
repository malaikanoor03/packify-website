'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Can I get a sample before placing an order?',
    answer: 'Yes, you can get a sample before placing an order, but it is available only on demand, and you will have to pay for it.',
  },
  {
    question: 'Can I provide my own artwork?',
    answer: 'Yes, you can provide your own artwork, but you will need to get in touch with our designers for this. They will guide you regarding the format and resolution requirements.',
  },
  {
    question: 'How do I know if my design is ready to print?',
    answer: 'Our design team will review your design for errors like artwork resolution or blurriness, etc. If they find any issues in your design, they will inform you within the proof and help in resolving them. Please note that our team will not review grammar and spelling mistakes.',
  },
  {
    question: 'Can I print inside the box?',
    answer: 'Yes, you can print your design on the outside, inside, or both sides of your product boxes. Prices change if you want to print on both sides.',
  },
  {
    question: 'Shall I pay for plates or die charges?',
    answer: 'No, you won\'t need to pay any extra amount for plates or dies, even for shipping. There are no hidden charges; the prices you see on the quote are final.',
  },
  {
    question: 'What factors affect the pricing?',
    answer: 'Generally, five things affect the price: box material, dimensions, box style, ink usage on the box, and quantity. If you order in bulk, you will get custom boxes at wholesale prices. If you need further information regarding prices, you can contact us anytime, and we will assist you.',
  },
  {
    question: 'When will I receive my custom product boxes?',
    answer: 'It takes 8 to 10 business days to produce your personalized boxes, and an additional 3 to 4 days for delivery. Rush orders can be completed in 4 to 5 business days.',
  },
  {
    question: 'Can you ship outside the United States?',
    answer: 'Yes, it is possible to deliver boxes to countries other than the USA. First, you will need to make sure that your box meets the size and weight restrictions of the shipping company.',
  },
  {
    question: 'Are there any hidden charges?',
    answer: 'No, there are no hidden charges for custom packaging solutions. The prices you see in the final quotation are the ones you will pay.',
  },
  {
    question: 'How do I choose the right packaging material for my product?',
    answer: 'Our team of experts can assist you in selecting the most suitable packaging material based on your product\'s size, weight, and protection needs.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-white" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-orange-500 mb-4">
          <span className="text-black">FAQs on</span> Custom Boxes
        </h2>
        <p className="text-center text-gray-600 mb-10">
          We've answered all the common questions you may have before ordering a custom box.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border rounded-lg p-4"
              open={openIndex === index}
            >
              <summary
                className="flex justify-between items-center cursor-pointer text-lg font-semibold text-gray-800"
                onClick={(e) => {
                  e.preventDefault()
                  toggleFAQ(index)
                }}
              >
                {faq.question}
                <span className={`ml-2 text-orange-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </summary>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}