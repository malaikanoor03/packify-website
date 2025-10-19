'use client'

import Image from 'next/image'

interface Insert {
    name: string
    image: string
}

const mailerBoxInserts: Insert[] = [
    {
        name: 'Corrugated Box Divider',
        image: '/images/thumbnail-corrugated-box-divider.webp',
    },
    {
        name: 'Ethylene Vinyl Acetate',
        image: '/images/thumbnail-ethylene-vinyl-acetate.webp',
    },
    {
        name: 'Expanded Polyethylene',
        image: '/images/thumbnail-expanded-polyethylene.webp',
    },
    {
        name: 'Natural Kraft Corrugated',
        image: '/images/thumbnail-natural-kraft-corrugated.webp',
    },
    {
        name: 'Natural Kraft Paperboard',
        image: '/images/thumbnail-natural-kraft-paperboard.webp',
    },
    {
        name: 'Rigid Chipboard Divider',
        image: '/images/thumbnail-rigid-chipboard-divider.webp',
    },
    {
        name: 'Standard White Corrugated',
        image: '/images/thumbnail-standard-white-corrugated.webp',
    },
    {
        name: 'Standard White Paperboard',
        image: '/images/thumbnail-standard-white-paperboard.webp',
    },
]

const rigidBoxInserts: Insert[] = [
    {
        name: 'Foam Insert',
        image: '/images/rigid-insert-foam.webp',
    },
    {
        name: 'Velvet Insert',
        image: '/images/rigid-insert-velvet.webp',
    },
    {
        name: 'Satin Insert',
        image: '/images/rigid-insert-satin.webp',
    },
    {
        name: 'Cardboard Divider',
        image: '/images/rigid-insert-cardboard-divider.webp',
    },
    {
        name: 'EVA Foam',
        image: '/images/rigid-insert-eva-foam.webp',
    },
    {
        name: 'Silk Insert',
        image: '/images/rigid-insert-silk.webp',
    },
    {
        name: 'Plastic Tray',
        image: '/images/rigid-insert-plastic-tray.webp',
    },
    {
        name: 'Paper Pulp Insert',
        image: '/images/rigid-insert-paper-pulp.webp',
    },
]

interface ProductInsertsProps {
    productType?: 'mailer' | 'rigid'
}

export default function ProductInserts({ productType = 'mailer' }: ProductInsertsProps) {
    // Select inserts based on product type
    const getInserts = () => {
        switch (productType) {
            case 'mailer':
                return mailerBoxInserts
            case 'rigid':
                return rigidBoxInserts
            default:
                return []
        }
    }

    const inserts = getInserts()

    // Get product type display name
    const getProductTypeName = () => {
        switch (productType) {
            case 'mailer':
                return 'Mailer'
            case 'rigid':
                return 'Rigid'
            default:
                return 'Custom'
        }
    }

    if (inserts.length === 0) return null

    return (
        <section className="max-w-7xl mx-auto mt-16 px-6 py-12 bg-gray-50 rounded-2xl">
            <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800">
                Types of Inserts for {getProductTypeName()} Boxes
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-6 place-items-center">
                {inserts.map((insert, index) => (
                    <div key={index} className="text-center group">
                        <div className="relative w-24 h-24 mx-auto mb-2 rounded-full overflow-hidden bg-white shadow-md group-hover:shadow-lg transition">
                            <Image
                                src={insert.image}
                                alt={insert.name}
                                fill
                                className="object-cover group-hover:scale-110 transition duration-300"
                            />
                        </div>
                        <p className="text-sm font-medium text-gray-700">{insert.name}</p>
                    </div>
                ))}
            </div>

            {/* <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                    Need help choosing the right insert for your product?
                </p>
                <a
                    href="/get-quote"
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-md transition"
                >
                    Talk to Our Experts
                </a>
            </div> */}
        </section>
    )
}

// Export inserts data for use in other components
export { mailerBoxInserts, rigidBoxInserts }