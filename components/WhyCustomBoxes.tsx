import Image from 'next/image'
import Link from 'next/link'

export default function WhyCustomBoxes() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Image with Hover Transition */}
        <div className="group relative w-full max-w-xl mx-auto lg:mx-0 rounded-tr-[80px] overflow-hidden shadow-lg h-[400px]">
          <Image
            src="/images/WhatsApp Image 2025-08-05 at 11.11.34 PM.webp"
            alt="Custom Box"
            fill
            className="absolute object-cover rounded-tr-[80px] transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0 z-10"
          />
          <Image
            src="/images/WhatsApp Image 2025-08-05 at 11.11.34 PM (1).webp"
            alt="Hovered Custom Box"
            fill
            className="object-cover rounded-tr-[80px] transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100 z-0"
          />
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-500 mb-4">
            <span className="text-black">Why Custom Printed Boxes are</span> Preferable
          </h2>
          <p className="text-gray-600 mb-4">
            Packify Custom Boxes delivers tailor-made packaging that perfectly fits your product, using durable
            corrugated, rigid, or specialty paperboard stocks. Choose vibrant full-color, spot UV, or foil-stamped
            printing on 100% recyclable, eco-friendly materials. Enjoy optimized shipping costs with custom sizes,
            fast digital proofs, and scalable runs—from small batches to bulk orders. Request your free sample or
            quote today!
          </p>
          <Link
            href="/get-quote"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </section>
  )
}