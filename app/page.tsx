import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import TrustedBy from '@/components/TrustedBy'
import ProductGrid from '@/components/ProductGrid'
import FeaturesHighlight from '@/components/FeaturesHighlight'
import CustomBoxForm from '@/components/CustomBoxForm'
import WhyChooseUs from '@/components/WhyChooseUs'
import HowItWorks from '@/components/HowItWorks'
import WhyCustomBoxes from '@/components/WhyCustomBoxes'
import FAQSection from '@/components/FAQSection'
import BlogPreview from '@/components/BlogPreview'
import QuoteForm from '@/components/QuoteForm'
import Testimonials from '@/components/Testimonials'
import PromoBanner from '@/components/PromoBanner'

export default function Home() {
  return (
    <>
      <Hero />      
      <TrustedBy />
      <ProductGrid />
      <AboutSection />
      <FeaturesHighlight />
      <CustomBoxForm />
      {/* <WhyChooseUs /> */}
      <HowItWorks />
      {/* <WhyCustomBoxes /> */}
      <FAQSection />
      <QuoteForm />
      {/* <Testimonials /> */}
      <BlogPreview />
      <PromoBanner/>      
    </>
  )
}