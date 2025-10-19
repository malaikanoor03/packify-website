import { productsData } from '@/lib/products-data'

export async function generateStaticParams() {
  return Object.keys(productsData).map((key) => ({
    slug: productsData[key].slug,
  }))
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}