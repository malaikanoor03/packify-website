'use client'

import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-2">
          <span className="text-black">About</span> <span className="text-orange-500">Us</span>
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">Custom Packaging with Purpose</p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p className="text-gray-700">
              We're more than just a box manufacturer — we're your packaging partner.
              Based in the USA, we specialize in premium custom boxes for e-commerce, retail, gifting, and product
              launches.
            </p>
            <p className="text-gray-700">
              Whether you need sustainable kraft mailers or luxury rigid presentation boxes, our team is here to help you
              craft packaging that reflects your brand identity, builds trust, and leaves a lasting impression.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✓</span>
                High-quality, fully printed custom boxes
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✓</span>
                Eco-conscious & recyclable options
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✓</span>
                No minimums — ideal for startups & scaling brands
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">✓</span>
                Fast U.S. shipping and worldwide delivery
              </li>
            </ul>
            <div className="mt-4 flex flex-nowrap items-center gap-4 overflow-x-auto text-sm text-gray-700"><span className="font-medium">Global Operations:</span>{['us','cn','sa','gb','ae'].map(code=><Image key={code} src={`https://flagcdn.com/${code}.svg`} alt={code} width={24} height={24} className="rounded-sm border border-gray-300"/>) }<span className="font-medium ml-6">Logistics Partners:</span><Image src="/images/images-removebg-preview.png" alt="USPS" width={50} height={20}/><Image src="/images/DHL-Symbol.png" alt="DHL" width={50} height={20}/><Image src="https://upload.wikimedia.org/wikipedia/commons/9/9d/FedEx_Express.svg" alt="FedEx" width={50} height={20}/></div>

          </div>
          

          <div className="relative w-full h-[18rem] md:h-[26rem] group overflow-hidden rounded-[10px] shadow-lg">
            <Image
              src="/images/WhatsApp Image 2025-08-05 at 11.11.00 PM.webp"
              alt="Custom Box"
              fill
              className="hidden md:block object-cover rounded-[10px] transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
            />
            <Image
              src="/images/WhatsApp Image 2025-08-05 at 11.14.19 PM.webp"
              alt="Hovered Custom Box"
              fill
              className="block md:absolute object-cover rounded-[10px] transition-opacity duration-500 ease-in-out opacity-100 md:opacity-0 md:group-hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  )
}