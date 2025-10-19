import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customer Reviews | PackifyCustomBoxes',
  description: 'Read authentic customer reviews and testimonials for PackifyCustomBoxes. See how businesses and individuals rate our custom packaging boxes, quality, and service.',
  keywords: 'customer reviews, testimonials, PackifyCustomBoxes reviews, custom packaging feedback, client testimonials',
}

const StarIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 7.545l6.564-.955L10 1l2.948 5.59 6.564.955-4.756 4.998 1.122 6.545z" />
  </svg>
)

export default function ReviewsPage() {
  const reviews = [
    {
      name: 'Emily R.',
      rating: 5,
      text: 'PackifyCustomBoxes exceeded my expectations! The boxes were sturdy, beautifully printed, and arrived on time. Highly recommend!',
    },
    {
      name: 'Jason K.',
      rating: 4,
      text: 'Great service and quality packaging. My orders always arrive as promised. Customer support is very helpful.',
    },
    {
      name: 'Sophia L.',
      rating: 5,
      text: 'Excellent quality and quick turnaround. I\'m very happy with the custom boxes and will definitely reorder!',
    },
  ]

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 pt-[8rem] space-y-12">
      {/* Intro */}
      <section className="text-center max-w-3xl mx-auto text-gray-600">
        <p className="text-lg">
          Hear what our happy customers have to say about their experience with{' '}
          <strong>PackifyCustomBoxes</strong>. Quality packaging, reliable service, and excellent support!
        </p>
      </section>

      {/* Reviews Grid */}
      <section className="grid md:grid-cols-2 gap-8">
        {reviews.map((review, index) => (
          <article key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}>
                    <StarIcon />
                  </div>
                ))}
              </div>
              <p className="ml-3 font-semibold text-gray-700">{review.name}</p>
            </div>
            <p className="text-gray-700">{review.text}</p>
          </article>
        ))}
      </section>
    </main>
  )
}