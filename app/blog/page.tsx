'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function BlogPageClient() {
  const [openModal, setOpenModal] = useState<string | null>(null)

  const blogPosts = [
    {
      id: 'modal1',
      image: '/images/blog-1.webp',
      title: 'Top Eco-Friendly Packaging Trends in 2025',
      excerpt:
        'Explore the latest innovations in sustainable packaging and how your business can benefit from eco-conscious design.',
      fullContent:
        "In 2025, sustainability is not just a trend — it's a necessity. Packaging solutions are evolving rapidly with compostable materials, reusable structures, and innovations in zero-waste design.",
    },
    {
    id: 'modal2',
    image: '/images/7431d978-5343-43e7-a52c-f9d191f5fa3c.webp',
    title: 'Why Custom Packaging Boosts Brand Value',
    excerpt:
      'Understand how investing in custom packaging can elevate customer experience and increase brand loyalty.',
    fullContent:
      "Custom packaging is more than appearance — it’s an experience. From the unboxing moment to long-term brand recall, tailored packaging helps establish a strong identity. With thoughtful design, you can convey your values and create a lasting impression that drives loyalty and repeat purchases.",
  },
  {
    id: 'modal3',
    image: '/images/55fad4b1-e051-4852-b8d0-eb5b829404f5.webp',
    title: 'Comparing Box Styles: Mailer vs. Rigid vs. Folding',
    excerpt:
      'A quick guide to choosing the right box style based on your product, budget, and delivery method.',
    fullContent:
      "Choosing the right box is crucial. Mailer boxes are great for e-commerce shipping and branding, rigid boxes offer premium unboxing for luxury items, while folding cartons are cost-effective and flexible. Let us help you match your packaging to your goals.",
  },
  {
    id: 'modal4',
    image: '/images/blog-4.webp',
    title: 'The Future of Packaging Manufacturing',
    excerpt:
      'Discover how automation, robotics, and AI are transforming packaging production lines for speed, quality, and customization.',
    fullContent:
      "From precision robotics to AI-driven quality control, the manufacturing side of packaging is undergoing a revolution. These advances allow brands to scale production while maintaining customization, sustainability, and speed-to-market. Learn how these technologies will affect your packaging choices in the coming years.",
  },
  {
    id: 'modal5',
    image: '/images/b3335717-f960-441e-be31-095cc9a6ece1.webp',
    title: 'Design Tips for Eye-Catching Packaging',
    excerpt:
      'Use color psychology, minimalism, and brand identity to create packaging that stands out on the shelf and online.',
    fullContent:
      "Great design drives attention and trust. Focus on bold but brand-true visuals, tactile materials, and clear messaging. Keep user experience in mind — from shelf to unboxing. These elements together create packaging that tells your story effectively.",
  },
  {
    id: 'modal6',
    image: '/images/7bba248f-53b0-4323-90eb-06dcc94c0f05.webp',
    title: 'Why Custom Packaging Boosts Brand Value',
    excerpt:
      'How Packaging Affects Shipping Costs',
    fullContent:
      "Dimensional weight pricing, excess void fill, and oversized boxes can eat up profit margins. Smart packaging uses right-sized designs, lightweight materials, and protective inserts to balance cost with safety. Learn how to optimize your packaging logistics for e-commerce success.",
  },
  ]

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 pt-[8rem] space-y-10">
      <section className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="border rounded-lg shadow hover:shadow-md transition">
            <div className="relative w-full h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-700">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
              <button
                onClick={() => setOpenModal(post.id)}
                className="text-orange-600 hover:underline text-sm font-medium"
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Modals */}
      {blogPosts.map((post) => (
        <div
          key={`modal-${post.id}`}
          className={`fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4 ${
            openModal === post.id ? '' : 'hidden'
          }`}
          onClick={() => setOpenModal(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full relative text-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-2 right-4 text-gray-600 hover:text-red-600 text-2xl z-10"
            >
              &times;
            </button>
            <div className="relative w-full h-56">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                {post.fullContent}
              </p>
            </div>
          </div>
        </div>
      ))}
    </main>
  )
}
