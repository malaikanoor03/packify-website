import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PromoBanner from '@/components/PromoBanner'
import WhatsAppButton from '@/components/WhatsAppButton'
import ClubPopup from '@/components/ClubPopup'
import Script from 'next/script'
import { Suspense } from 'react' // Import Suspense

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Custom Packaging Boxes | Premium & Eco-Friendly | USA',
  description: 'Premium custom packaging boxes including eco-friendly mailers, luxury rigid boxes, and more. Free US shipping, no minimums, and global delivery.',
  keywords: 'custom packaging boxes, custom printed boxes, luxury rigid packaging, eco-friendly packaging, kraft packaging solutions, custom mailer boxes',
  authors: [{ name: 'Custom Box USA' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Custom Packaging Boxes | Premium & Eco-Friendly | USA',
    description: 'Premium custom packaging boxes designed to elevate your brand.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/images/Favicon.webp" />
        <link rel="canonical" href="https://packifycustomboxes.com/" />
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        {/* <ClubPopup /> */}
        
        {/* Tawk.to Chat Widget */}
        <Script id="tawk-to" strategy="lazyOnload">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://tawk.to/68e90642afbbb71951325c9d/1j7740tsd';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>

        {/* GSAP Scripts */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}