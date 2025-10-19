import Image from 'next/image'

export default function WhyChooseUs() {
  const features = [
    {
      title: 'No Minimums',
      description: 'You are free to order any number of boxes.',
      icon: '/images/svg.webp',
    },
    {
      title: 'Free Design Support',
      description: 'Our designers will help you create a design.',
      icon: '/images/svg-2.webp',
    },
    {
      title: 'Fast Turnarounds',
      description: 'We ship your boxes within 7 to 10 business days.',
      icon: '/images/svg-3.webp',
    },
  ]

  return (
    <section className="py-16 bg-white" id="choose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-orange-500 mb-12">
          <span className="text-black">Why Choose us for </span> Custom Boxes?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white shadow-xl rounded-xl p-6 transition transform hover:scale-105 hover:shadow-orange-200"
            >
              <div className="mb-4 bg-orange-100 p-4 rounded-full shadow-inner">
                <Image src={feature.icon} alt={feature.title} width={60} height={60} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}