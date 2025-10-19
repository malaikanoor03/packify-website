import Image from 'next/image'
import Link from 'next/link'

export default function BlogPreview() {
  const blogPosts = [
    {
      id: 1,
      title: 'Eco-Friendly Packaging Trends 2025',
      description: 'Explore sustainable packaging innovations for the future.',
      image: '/images/blog-1.webp',
      link: '/blog#modal1',
    },
    {
      id: 2,
      title: 'Why Custom Packaging Matters',
      description: 'Learn how packaging builds your brand value and loyalty.',
      image: '/images/7431d978-5343-43e7-a52c-f9d191f5fa3c.webp',
      link: '/blog#modal2',
    },
    {
      id: 3,
      title: 'Box Style Comparison',
      description: 'Mailer vs. Rigid vs. Folding — what should you choose?',
      image: '/images/55fad4b1-e051-4852-b8d0-eb5b829404f5.webp',
      link: '/blog#modal3',
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 pt-1">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">
          Latest from the <span className="text-[#f97316]">Blog</span>
        </h2>
        <Link href="/blog" className="text-orange-600 hover:underline font-medium text-sm">
          See All →
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="border rounded-lg shadow hover:shadow-md transition">
            <div className="relative h-48 w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="rounded-t-lg object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{post.description}</p>
              <Link href={post.link} className="text-orange-600 hover:underline text-sm font-medium">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}