// import { Metadata } from 'next'
// import { notFound } from 'next/navigation'
// import ProductDetail from '@/components/ProductDetail'
// import ProductTabs from '@/components/ProductTabs'
// import ProductQuoteForm from '@/components/ProductQuoteForm'
// import ProductOverview from '@/components/ProductOverview'
// import { productsData } from '@/lib/products-data'

// type Props = {
//   params: { slug: string }
// }

// // Generate metadata for SEO
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const product = productsData[params.slug]
  
//   if (!product) {
//     return {
//       title: 'Product Not Found',
//     }
//   }

//   return {
//     title: `${product.title} | PackifyCustomBoxes`,
//     description: product.metaDescription,
//     keywords: product.keywords,
//     openGraph: {
//       title: `${product.title} | PackifyCustomBoxes`,
//       description: product.metaDescription,
//       type: 'website',
//       url: `https://www.packifycustomboxes.com/products/${params.slug}`,
//     },
//     robots: 'index, follow',
//   }
// }

// // Generate static paths for all products
// export async function generateStaticParams() {
//   return Object.keys(productsData).map((slug) => ({
//     slug,
//   }))
// }

// export default function ProductPage({ params }: Props) {
//   const product = productsData[params.slug]

//   if (!product) {
//     notFound()
//   }

//   return (
//     <div className="bg-gray-50">
//       {/* Product Detail Section */}
//       <main className="max-w-6xl mx-auto p-6 pt-[6rem] grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 bg-white rounded-lg shadow-lg">
//         <ProductDetail product={product} />
//         <ProductQuoteForm productName={product.title} />
//       </main>

//       {/* Product Variants Grid (if available) */}
//       {product.variants && product.variants.length > 0 && (
//         <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
//           <h2 className="text-3xl md:text-3xl font-extrabold text-center text-gray-800 mb-10">
//             {product.title} Products
//           </h2>

//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
//             {product.variants.map((variant, index) => (
//               <div key={index} className="item__wrap">
//                 <div className="inner__wrap">
//                   <div
//                     className="relative flex flex-wrap items-center sm:block bg-white px-0 sm:p-2 cursor-pointer font-mori group tracking-mori rounded-[20px] sm:rounded-b-[12px] sm:rounded-t-[36px] sm:hover:shadow-xl sm:border-[2px] sm:border-white sm:hover:border-[#fbfbfb] transition-all duration-300"
//                   >
//                     <div className="thumb__wrap w-full bg-[#efefef] rounded-[22px] md:rounded-[32px] overflow-hidden">
//                       <img
//                         src={variant.image}
//                         alt={variant.name}
//                         className="w-full h-auto"
//                         width={336}
//                         height={336}
//                       />
//                     </div>
//                     <div className="desc__wrap py-3 text-center">
//                       <h3 className="font-headings text-[20px] leading-[24px] text-acai font-bold mb-1">
//                         {variant.name}
//                       </h3>
//                       <span className="font-description text-acai text-[13px] lg:text-[15px]">
//                         Request a Quote
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             {/* Custom Quote CTA */}
//             <div className="thumb__wrap w-full bg-[#f6f6f6] rounded-[22px] md:rounded-[32px] overflow-hidden flex flex-col items-center justify-center h-[20rem] px-4 text-center space-y-4">
//               <p className="text-gray-700 text-sm md:text-base">
//                 <span className="font-semibold block mb-1">Didn't find your ideal design?</span>
//                 We offer fully custom packaging tailored to your exact needs—styles, finishes, and dimensions.
//               </p>
//               <a
//                 href="/get-quote"
//                 className="inline-block bg-orange-600 text-white text-sm px-5 py-2 rounded-md font-medium hover:bg-orange-800 transition"
//               >
//                 Get Custom Quote
//               </a>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Materials, Printing, Finishes Tabs */}
//       <ProductTabs />

//       {/* Product Overview Section */}
//       <ProductOverview product={product} />
//     </div>
//   )
// }