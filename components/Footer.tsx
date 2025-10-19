'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === '/') {
      e.preventDefault()
      const element = document.querySelector(id)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-orange-500 text-white px-6 md:px-12 py-16 rounded-t-[2.5rem]">
      {/* --- Main Footer --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
        
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl font-bold mb-2 leading-tight">
            Packify <span className="font-light">CUSTOM BOXES</span>
          </h1>
          <p className="text-sm text-white/90 mb-5 max-w-xs">
            Delivering premium packaging solutions worldwide with fast, reliable, and eco-friendly service.
          </p>
          <div className="flex gap-5 text-2xl">
            <a href="" aria-label="Instagram" className="hover:text-gray-200 transition"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-200 transition"><i className="fab fa-facebook-f"></i></a>
            <a href="https://wa.me/+971561062603" aria-label="WhatsApp" className="hover:text-gray-200 transition"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>

        {/* Company */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold mb-4">Company</h2>
          <ul className="space-y-3 text-base">
            <li><Link href={pathname === '/' ? '#type' : '/#type'} onClick={(e) => handleSmoothScroll(e, '#type')} className="hover:underline">Products</Link></li>
            <li><Link href={pathname === '/' ? '#about' : '/#about'} onClick={(e) => handleSmoothScroll(e, '#about')} className="hover:underline">About</Link></li>
            <li><Link href={pathname === '/' ? '#quote' : '/#quote'} onClick={(e) => handleSmoothScroll(e, '#quote')} className="hover:underline">Contact</Link></li>
            <li><Link href="/refund-returns" className="hover:underline">Refund & Returns</Link></li>
            <li><Link href="/shipping-policy" className="hover:underline">Shipping Policy</Link></li>
            <li><Link href="/reviews" className="hover:underline">Reviews</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <ul className="space-y-3 text-base">
            <li><i className="fas fa-phone mr-2"></i> +1 213-245-8222</li>
            <li><i className="fas fa-envelope mr-2"></i><a href="" className="hover:underline">info@packify.com</a></li>
            <li><i className="fas fa-map-marker-alt mr-2"></i>Sheridan, WY 82801 USA</li>
          </ul>
        </div>

        {/* Help */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold mb-4">Help</h2>
          <ul className="space-y-3 text-base">
            <li><Link href="/how-to-order" className="hover:underline">How to Order</Link></li>
            <li><Link href={pathname === '/' ? '#faqs' : '/#faqs'} onClick={(e) => handleSmoothScroll(e, '#faqs')} className="hover:underline">FAQ</Link></li>
            <li><Link href="/artwork-guidelines" className="hover:underline">Artwork Guidelines</Link></li>
            <li><Link href="/how-to-measure" className="hover:underline">How to Measure a Box</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/30 my-8"></div>

      {/* --- Compact Bottom Section (One Line) --- */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 text-sm text-white/90 text-center">
        
        {/* Global Operations */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-medium">Global Operations:</span>
          {['us', 'cn', 'sa', 'gb', 'ae'].map((code) => (
            <Image
              key={code}
              src={`https://flagcdn.com/${code}.svg`}
              alt={code}
              width={24}
              height={24}
              className="rounded-sm border border-white/30"
            />
          ))}
        </div>

        <div className="hidden md:block h-4 w-[1px] bg-white/40"></div>

        {/* Logistics */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-medium">Logistics Partners:</span>
          <Image src="/images/images-removebg-preview.png" alt="USPS" width={50} height={20} />
          <Image src="/images/DHL-Symbol.png" alt="DHL" width={50} height={20} />
          <Image src="https://upload.wikimedia.org/wikipedia/commons/9/9d/FedEx_Express.svg" alt="FedEx" width={50} height={20} />
        </div>

        <div className="hidden md:block h-4 w-[1px] bg-white/40"></div>

        {/* Payments */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-medium">Payments:</span>
          <Image src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" width={26} height={26} />
          <Image src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" width={26} height={26} />
          <Image src="https://img.icons8.com/color/48/000000/paypal.png" alt="Paypal" width={26} height={26} />
        </div>
      </div>

      {/* --- Copyright --- */}
      <div className="border-t border-white/30 mt-8 pt-6 text-center text-sm text-white/80">
        <p>© 2025 PackifyCustomBoxes. All Rights Reserved.</p>
        <div className="flex justify-center gap-6 mt-3">
          <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
