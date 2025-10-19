// lib/products-data.ts
export interface ProductVariant {
  name: string
  image: string
  description?: string
}

export interface Product {
  title: string
  slug: string
  metaDescription: string
  keywords: string[]
  mainImage: string
  hoverImage: string
  description: string
  features: string[]
  overviewTitle: string
  overviewContent: string
  overviewImage: string
  overviewHoverImage: string
  variants?: ProductVariant[]
}

export const productsData: Record<string, Product> = {
  'tuck-boxes': {
    title: 'Tuck Boxes',
    slug: 'tuck-boxes',
    metaDescription: 'Get premium custom tuck boxes from PackifyCustomBoxes. Perfect for retail, product packaging, and gifts. Fully customizable, eco-friendly, and high-quality. Free US shipping and worldwide delivery.',
    keywords: [
      'custom tuck boxes',
      'tuck top boxes',
      'retail packaging',
      'gift boxes',
      'product packaging boxes',
      'printed tuck boxes',
      'eco-friendly packaging',
      'PackifyCustomBoxes',
      'personalized tuck boxes',
      'wholesale tuck boxes'
    ],
    mainImage: '/images/WhatsApp_Image_2025-08-05_at_3.24.40_AM-removebg-preview.webp',
    hoverImage: '/images/WhatsApp_Image_2025-08-05_at_3.24.39_AM-removebg-preview.webp',
    description: 'Compact and sturdy, small tuck boxes are ideal for packaging lightweight items like cosmetics, jewelry, or gifts. Their easy-to-close tuck flap ensures secure storage with a neat, professional look.',
    features: [
      'Fast Turnaround',
      'Full Color Printing',
      'Design Support',
      'Free Shipping'
    ],
    overviewTitle: 'Tuck Box Packaging for Stability, Strength, And Usability',
    overviewContent: `Picture-perfect, insta-savvy tuck boxes are flawless for displaying or shipping cosmetics, small electrical items, medicines, jewelry, and more. They are perfect for any product you want to pack with care, grace, and awesomeness. Apart from attractiveness, they offer many other benefits. Here are some key features of our tuck packaging boxes.

• Durable Cardboard, rigid paperboard, or kraft material ensuring protection and security.
• Highly printable to add your logo and other branding elements easily.
• Style variations such as tuck-end, tuck-top, and auto-lock boxes to fit your needs.
• Custom sizes to offer a perfect fit for your products.
• Sustainable materials and inks for a positive environmental impact.

These boxes are designed to give you a competitive advantage in the market. Plus, they are cost-effective due to our bulk discounts and wholesale prices.`,
    overviewImage: '/images/Tuck-boxes.webp',
    overviewHoverImage: '/images/Tuck-boxes-1.webp',
    variants: [
      {
        name: "Tuck Top Boxes",
        image: "/images/Tuck Top Box.webp",
        description:
          "Tuck top boxes feature a simple folding design with a top flap that tucks securely into the front of the box. They’re easy to assemble and popular for retail packaging, offering a neat, streamlined appearance that’s ideal for a wide variety of products.",
      },
      {
        name: "Auto Lock Boxes",
        image: "/images/Auto Lock Bottom Box.webp",
        description:
          "Auto lock boxes are designed for effortless assembly, with a pre-glued bottom that pops into place automatically. This style offers unbeatable convenience and sturdy support, making them a favorite for products needing quick, secure packaging, especially in fast-paced e-commerce and retail settings.",
      },
      {
        name: "Tuck Mailer Boxes",
        image: "/images/Tuck Mailer Box.webp",
        description:
          "Tuck mailer boxes blend sturdy construction with easy assembly. Their tuck-in flaps lock contents in place, providing reliable protection during shipping. This style is perfect for subscription shipments and promotional kits.",
      },
      {
        name: "Straight Tuck End Boxes",
        image: "/images/Straight end tuck box.webp",
        description:
          "Straight tuck end boxes feature flaps that tuck in from both the top and bottom on the same side, giving them a seamless, professional look. Their versatility suits everything from cosmetics to small electronics and retail products.",
      },
      {
        name: "Kraft Tuck Top Boxes",
        image: "/images/Kraft TUCK BOX.webp",
        description:
          "Kraft tuck top boxes pair the eco-friendly appeal of kraft paper with the practical tuck top closure. Durable, recyclable, and naturally stylish, they appeal to environmentally-conscious brands and customers seeking minimalist, sustainable packaging.",
      },
      {
        name: "Snap Lock Bottom Boxes",
        image: "/images/Snap lock tuck box.webp",
        description:
          "Snap lock bottom boxes have interlocking bottom flaps that snap securely together, providing extra reinforcement for heavier products. They’re ideal for goods that need added support, without sacrificing quick assembly.",
      },
      {
        name: "Double Wall Tuck Top Boxes",
        image: "/images/Double Wall tuck Box.webp",
        description:
          "Double wall tuck top boxes include reinforced sidewalls and a sturdy tuck-in top for maximum protection. Their robust structure is perfect for heavier or fragile products, offering extra durability during handling and transit.",
      },
      {
        name: "CBD Tuck Boxes",
        image: "/images/customized-cbd-tuck-boxes.webp",
        description:
          "CBD tuck boxes are custom-designed for CBD products, balancing secure packaging with space for regulatory labeling and branding. The tuck closure keeps items safe, while versatile sizing suits tinctures, edibles, and topicals.",
      },
      {
        name: "Roll End Tuck Boxes",
        image: "/images/Roll End Tuck box.webp",
        description:
          "Roll end tuck boxes are built for strength, with extended flaps that roll over the edges and tuck into the sides for added stability. This design is ideal for shipping, providing extra cushioning and seamless opening for a smooth unboxing experience.",
      },
      {
        name: "Reverse Tuck End Boxes",
        image: "/images/Reverse Tuck End Box.webp",
        description:
          "Reverse tuck end boxes offer a unique closure, with the top and bottom flaps folding in opposite directions. This design is quick to assemble and easy to open, making it a popular choice for retail packaging, pharmaceuticals, and cosmetics.",
      },
      {
        name: "1-2-3 Bottom Boxes",
        image: "/images/1-2-3 Bottom Box.webp",
        description:
          "1-2-3 bottom boxes are engineered for easy assembly, as the base snaps together in three simple steps. Their secure foundation supports heavier items and ensures the package won’t pop open, making them a dependable choice for substantial or bulky products.",
      },
    ],
  },

  'dispenser-boxes': {
    title: 'Dispenser Boxes',
    slug: 'dispenser-boxes',
    metaDescription: 'Order premium custom dispenser boxes from PackifyCustomBoxes. Perfect for retail products, cosmetics, and small items. Fully customizable, durable, and eco-friendly. Free US shipping and worldwide delivery.',
    keywords: [
      'custom dispenser boxes',
      'product dispenser packaging',
      'retail packaging',
      'cosmetic dispenser boxes',
      'printed dispenser boxes',
      'eco-friendly packaging',
      'PackifyCustomBoxes',
      'personalized dispenser boxes',
      'wholesale dispenser boxes'
    ],
    mainImage: '/images/Dispenser-1.webp',
    hoverImage: '/images/Dispenser-2.webp',
    description: 'Custom dispenser boxes are specially designed cardboard packages that provide convenient, controlled access to their contents through easy-to-tear perforated openings, often called "flip-out dispenser" openings.',
    features: [
      'Fast Turnaround',
      'Full Color Printing',
      'Design Support',
      'Free Shipping'
    ],
    overviewTitle: 'Product Overview',
    overviewContent: `Styles are constantly evolving, and the packaging industry is progressing in this direction. A fresh appearance for display packaging is the custom dispenser boxes. The product is not kept completely open with only a base to support it; instead, it is packaged in a box with an outlet that allows buyers easy access. The packaging in this design, on the whole, makes people pay attention or want to get their hands on it.

Dispenser boxes are used for a wide range of products, including candy, hygiene products, and other small items. Images of the visual look can be found on the Half Price Packaging Website. The professionals of HPP only can we change the colors and sizes of the box, but we can also change the dispensing techniques.

You can design this box in any size, shape, and style at wholesale prices as per your preferences. We provide all of the options that the consumer requests.`,
    overviewImage: '/images/CBD Mailer Box.webp',
    overviewHoverImage: '/images/Pink Mailer Box.webp',
  },

  'mailer-boxes': {
    title: 'Mailer Boxes',
    slug: 'mailer-boxes',
    metaDescription: 'Premium custom mailer boxes for e-commerce and subscription products. Designed for durability and brand impact. Free US shipping and worldwide delivery.',
    keywords: [
      'custom mailer boxes',
      'e-commerce packaging',
      'subscription boxes',
      'shipping boxes',
      'branded mailer boxes'
    ],
    mainImage: '/images/WhatsApp_Image_2025-08-05_at_3.48.16_AM-removebg-preview.webp',
    hoverImage: '/images/WhatsApp_Image_2025-08-05_at_3.48.17_AM-removebg-preview.webp',
    description: 'Offer secure, stylish packaging for e-commerce and subscription products. Designed for durability and brand impact, they enhance presentation and protect contents during transit.',
    features: [
      'Fast Turnaround',
      'Full Color Printing',
      'Design Support',
      'Free Shipping'
    ],
    overviewTitle: 'Meet Your Ideal, Brand-Ready Mailer Box',
    overviewContent: ` Catering to diverse industries, our mailer boxes are built for durability, style, and eco-friendliness. 
      They stand tall on certain properties, best explained as: secure, interactive, and visually appealing packaging. 
      They offer safety from impacts, moisture, and dust as well as complement your branding efforts.

      - Multi-purpose and functional packaging.
      - Premium material choices in a variety of thicknesses.
      - Versatile customization services for perfect sizes, shapes, and styles.
      - May add inner bubble lining for extra cushioning.
      - Get luxurious finishes: soft-touch coatings, foiling, embossing, debossing, and many others.
      - High-quality printing options and advanced color models for precise branding.
      - Sustainable materials and ink varieties available.
      - Pick your add-ons: QR codes, stickers, dividers, labels, perforations, etc.
      - Custom inserts – suitable for close-fit odd-shaped products.
    `,
    overviewImage: '/images/Mailer-1.webp',
    overviewHoverImage: '/images/Mailer-2.webp',
    variants: [
      {
        name: "Custom Bubble Mailers",
        image: "/images/Custom Bubble Mailers.webp",
        description:
          "Protect your shipments with our bubble mailers featuring a padded, bubble-lined interior for cushioning and a sturdy custom-printed exterior that resists punctures and moisture. Perfect for ensuring your products arrive safely and professionally.",
      },
      {
        name: "Vinyl Record Mailers",
        image: "/images/Vinyl Record Mailer Box.webp",
        description:
          "Safeguard valuable records with specialized vinyl record mailers. Engineered with reinforced cardboard and tailored inserts, these mailers prevent scratches and bending during transit—delighting collectors and retailers who demand pristine delivery.",
      },
      {
        name: "Corrugated Mailer Boxes",
        image: "/images/Corrugated Mailer Box.webp",
        description:
          "Trust our robust corrugated mailer boxes to keep your items secure during shipping. Known for their strength and customizability, these boxes are a top choice for brands aiming to protect products while enhancing unboxing experiences.",
      },
      {
        name: "White Mailer Boxes",
        image: "/images/White Mailer Box.webp",
        description:
          "Choose white mailer boxes for a clean, minimalistic look. Versatile and cost-effective, they’re perfect for everyday shipments and give your packaging a fresh, professional appearance.",
      },
      {
        name: "Kraft Mailer Boxes",
        image: "/images/Kraft Mailer Box.webp",
        description:
          "Elevate your brand with kraft mailer boxes. Their earthy, organic look appeals to eco-conscious customers, while options like custom labeling and unique lock designs support creative branding for e-commerce and boutique businesses.",
      },
      {
        name: "Black Mailer Boxes",
        image: "/images/Black Mailer Box.webp",
        description:
          "Black mailer boxes create immediate shelf impact and premium perception. Available with various sizes and finishes, they highlight your product with modern elegance and unmistakable visibility.",
      },
      {
        name: "Colored Mailer Boxes",
        image: "/images/Colored Mailer Box.webp",
        description:
          "Make your deliveries memorable with colored mailer boxes, available in custom shades to match your brand. Add logos or artwork for instant recognition and a polished marketing touch.",
      },
      {
        name: "Tuck Top Mailer Boxes",
        image: "/images/Tuck Top Box.webp",
        description:
          "Tuck top mailer boxes feature a secure closing design for easy assembly. Their streamlined style offers both convenience in packaging and protection for a wide range of goods.",
      },
      {
        name: "Literature Mailers",
        image: "/images/Literature Mailer Box.webp",
        description:
          "Engineered to protect documents, catalogs, and brochures, literature mailers offer a snug fit and prevent creasing, making them ideal for businesses sending printed materials.",
      },
      {
        name: "Pink Mailer Boxes",
        image: "/images/Pink Mailer Box.webp",
        description:
          "Stand out with playful, vibrant pink mailer boxes. Perfect for gift sets, subscription packs, or brands seeking a bold and cheerful unboxing experience.",
      },
      {
        name: "Cardboard Mailers",
        image: "/images/Cardboard Mailer.webp",
        description:
          "Lightweight and sturdy, cardboard mailers provide reliable protection for documents, books, and small merchandise—suiting both business and personal use.",
      },
      {
        name: "Mailer Gift Boxes",
        image: "/images/Gift Mailer Box.webp",
        description:
          "Transform gifting with stylish mailer gift boxes. They combine durability with elegant presentation, ensuring contents are both secure and beautifully displayed upon arrival.",
      },
      {
        name: "Decorative Mailers",
        image: "/images/Decorative Mailer Box.webp",
        description:
          "Decorative mailers feature eye-catching designs and finishes, ideal for special occasions, promotional campaigns, or subscription boxes looking to create a lasting impression.",
      },
      {
        name: "Holiday Mailer Boxes",
        image: "/images/Holiday Mailer Box.webp",
        description:
          "Celebrate the season with custom holiday mailer boxes. Incorporate festive graphics and colors to enhance the excitement and anticipation of your shipments.",
      },
      {
        name: "Book Mailers",
        image: "/images/Book Mailer Box.webp",
        description:
          "Designed specifically for books, these mailers shield contents from bending or corner damage, keeping your reading materials safe from warehouse to doorstep.",
      },
      {
        name: "Ear Lock Mailer Box",
        image: "/images/Ear Lock Mailer Box.webp",
        description:
          "The ear lock design secures the lid in place, providing extra protection against accidental opening and making it ideal for more delicate or valuable contents.",
      },
      {
        name: "CBD Mailer Boxes",
        image: "/images/CBD Mailer Box.webp",
        description:
          "Safely deliver wellness products with custom CBD mailer boxes, manufactured to meet industry regulations and branding requirements for supplements and oils.",
      },
      {
        name: "Ecommerce Mailers",
        image: "/images/Ecomerce Mailer Box.webp",
        description:
          "Streamline online orders with eCommerce mailers that combine secure protection, easy assembly, and efficient branding for direct-to-consumer shipments.",
      },
      {
        name: "Sleeved Mailer Boxes",
        image: "/images/Sleeved Mailer Box.webp",
        description:
          "These boxes feature an additional sleeve exterior, giving an upscale touch and added layer of design and protection, perfect for premium products.",
      },
      {
        name: "Mailer Shipping Boxes",
        image: "/images/Mailer shipping box.webp",
        description:
          "Durable and customizable, mailer shipping boxes are tailored for logistics. They ensure damage-free delivery and can be printed for consistent brand identity.",
      },
      {
        name: "Custom Mailer Boxes With Tear Strip",
        image: "/images/Tear Strip Mailer Box.webp",
        description:
          "Increase customer satisfaction with mailers featuring a tear strip, allowing easy and frustration-free opening while maintaining package security.",
      },
      {
        name: "Candle Shipping Boxes",
        image: "/images/Candle Mailer Boxes.webp",
        description:
          "Protect scented candles with snug-fitting boxes designed to keep fragile glass and wax items safe during transit and storage.",
      },
      {
        name: "Tab Lock Boxes",
        image: "/images/Tab Lock Mailer Box.webp",
        description:
          "Tab lock designs help securely close the box without tape or glue, ensuring tamper resistance and neat presentation—ideal for retail packaging.",
      },
    ],
  },

  'rigid-boxes': {
    title: 'Rigid Boxes',
    slug: 'rigid-boxes',
    metaDescription: 'Premium rigid boxes ideal for luxury products. High-end finish and solid structure for exceptional unboxing experience.',
    keywords: [
      'custom rigid boxes',
      'luxury packaging',
      'premium boxes',
      'gift boxes',
      'high-end packaging'
    ],
    mainImage: '/images/WhatsApp_Image_2025-08-05_at_3.57.58_AM-removebg-preview.webp',
    hoverImage: '/images/WhatsApp_Image_2025-08-05_at_3.57.58_AM__1_-removebg-preview.webp',
    description: 'Premium, sturdy packaging solutions ideal for luxury products. With a high-end finish and solid structure, they deliver an exceptional unboxing experience and strong brand presence.',
    features: [
      'Fast Turnaround',
      'Full Color Printing',
      'Design Support',
      'Free Shipping'
    ],
    overviewTitle: 'Product Overview Of Custom Rigid Boxes',
    overviewContent: 'Custom Rigid Boxes are an exceptional packaging solution for high-end luxury products. These boxes feature a durable, solid structure that maintains its shape even through rough handling conditions. To maintain the aesthetic appeal, these boxes are pasted with printed or textured cardstock materials. The solid structure matched with their luxurious appeal makes rigid setup boxes the go-to choice for many different products and industries. Whether cosmetics, jewelry, electronics, or apparel, these boxes are the perfect packaging solution for your needs. If you are looking for something that can set your product apart from the competition, look no further than rigid boxes.',
    overviewImage: '/images/rigid-end.webp',
    overviewHoverImage: '/images/rigid-end-1.webp',
    variants: [
      {
        name: "Custom Magnetic Closure Boxes",
        image: "/images/magentic rigid box.webp",
        description:
          "Custom magnetic closure boxes combine luxury and functionality with built-in magnets that provide a smooth, secure closing mechanism. Perfect for premium products, these boxes offer an elegant unboxing experience while keeping contents protected and elegantly housed.",
      },
      {
        name: "Die Cut Boxes",
        image: "/images/Die Cut Rigid Box.webp",
        description:
          "Die cut boxes feature custom shapes and windows created through precise cutting techniques. This allows for unique, eye-catching designs that showcase your product directly or add intricate details, making your packaging stand out on shelves and online.",
      },
      {
        name: "Flip Top Boxes",
        image: "/images/Flip Top Rigid Box.webp",
        description:
          "Flip top boxes offer convenient access with a hinged lid that flips open easily. Popular for products needing frequent opening and closing, they’re perfect for cosmetics, electronics, and retail goods requiring sleek presentation and practicality.",
      },
      {
        name: "Rigid Gift Boxes",
        image: "/images/Rigid Gift Box.webp",
        description:
          "Rigid gift boxes are crafted from thick, sturdy material that exudes quality and durability. Often used for luxury gifts and keepsakes, they provide a premium feel that reinforces the brand’s value and offers reliable protection.",
      },
      {
        name: "Kraft Rigid Boxes",
        image: "/images/Rigid Kraft Box.webp",
        description:
          "Kraft rigid boxes combine the robustness of rigid construction with the natural appeal of kraft paper. Eco-friendly and stylish, they deliver both sustainability and high-end packaging, ideal for brands that prioritize green solutions with a luxury touch.",
      },
      {
        name: "Satin Lined Boxes",
        image: "/images/Satin Lined Rigid Box.webp",
        description:
          "Satin lined boxes elevate presentation with a soft, luxurious satin fabric interior that cushions delicate products. Often chosen for jewelry, watches, and premium gifts, these boxes highlight sophistication and care.",
      },
      {
        name: "Custom Two Piece Boxes",
        image: "/images/Two Piece Rigid Box.webp",
        description:
          "Custom two piece boxes consist of a separate lid and base, offering a timeless design favored for premium packaging. Their sturdy structure and elegant look make them suitable for gifts, specialty products, and upscale retail packaging.",
      },
      {
        name: "Slipcase Boxes",
        image: "/images/Slipcase Rigid Box.webp",
        description:
          "Slipcase boxes feature a sleeve that slides over a separate box or booklet, combining style and protection. This packaging style is excellent for books, luxury gift sets, or limited edition products that benefit from an added layer of design.",
      },
      {
        name: "Custom Rigid Drawer Boxes",
        image: "/images/Rigid Drawer Box.webp",
        description:
          "Custom rigid drawer boxes consist of an outer shell with a drawer-style inner compartment that slides open smoothly. This unique packaging adds a tactile, premium experience and is popular for cosmetics, tech accessories, and luxury goods.",
      },
      {
        name: "Sliding Boxes",
        image: "/images/Rigid Sliding Box.webp",
        description:
          "Sliding boxes are designed with two parts — an outer sleeve and an inner tray that slides in and out. They offer strong protection and an impressive unboxing experience, making them a preferred choice for high-end gifts and retail products.",
      },
    ],
  },

  'cigarette-boxes': {
    title: 'Cigarette Boxes',
    slug: 'cigarette-boxes',
    metaDescription: 'Stylish and protective cigarette boxes with customizable finishes and secure closures.',
    keywords: [
      'custom cigarette boxes',
      'tobacco packaging',
      'printed cigarette boxes'
    ],
    mainImage: '/images/Cigarette-1.webp',
    hoverImage: '/images/Cigarette-2.webp',
    description: 'Stylish and protective, cigarette boxes are designed to preserve freshness and enhance brand appeal with customizable finishes, sizes, and secure closures.',
    features: [
      'Fast Turnaround',
      'Full Color Printing',
      'Design Support',
      'Free Shipping'
    ],
    overviewTitle: 'Luxury Rigid Boxes to Portray Your Premium E Cigarette Brand',
    overviewContent: 'Everyone wants to buy attention-grabbing bespoke E-cigarette display boxes to shine out in front of customers and on shelves as well as to keep fragile products safe. We satisfy the brands requirement for high-quality printing on the boxes. Our expert designers develop an attractive display of E-cigarette boxes so your brand gets more well-known and adored. With the use of rigid packaging material, we make custom-printed paper e cigarette boxes that stay intact for a long time.',
    overviewImage: '/images/CBD E cigarette box.webp',
    overviewHoverImage: '/images/e cigarette box.webp',
    variants: [
      {
        name: "CBD E-Cigarette Boxes",
        image: "/images/CBD E cigarette box.webp",
        description:
          "CBD E-Cigarette Boxes are custom-designed to provide secure, stylish, and compliant packaging for vape pens and cartridges. These boxes not only ensure the safety and freshness of your CBD products but also elevate brand appeal with premium printing and design options. Ideal for retail shelves and e-commerce, they offer child-resistant features, labeling space for legal compliance, and a sleek unboxing experience that enhances consumer trust and satisfaction.",
      },
      {
        name: "Custom Vape Boxes",
        image: "/images/custom vape kit box.webp",
        description:
          "Custom Vape Boxes are tailored to protect and promote vape products with a perfect blend of functionality and branding. Designed to fit vape pens, cartridges, and e-liquids, these boxes offer secure housing, tamper-proof options, and customizable finishes such as embossing, foil stamping, and matte or gloss lamination. Ideal for standing out in the competitive vape market, they deliver a professional, compliant, and stylish packaging solution for both retail and online sales.",
      },
      {
        name: "Vape Cartridge Packaging",
        image: "/images/vape cartirdge box.webp",
        description:
          "Vape Cartridge Packaging is crafted to securely hold and showcase vape cartridges while preserving product integrity and ensuring compliance with industry regulations. These boxes are designed with precision to prevent leaks and damage, featuring custom inserts, child-resistant closures, and ample space for branding and labeling. Whether for medical or recreational use, they provide a sleek, professional presentation that enhances product appeal and consumer trust.",
      },
      {
        name: "Vape Pen Packaging",
        image: "/images/vape pen box.webp",
        description:
          "Vape Pen Packaging is designed to combine protection, convenience, and style for vape pens of all sizes. These custom boxes offer secure fit, tamper-evident features, and premium finishes to enhance brand visibility. Ideal for retail display and shipping, they come with options like foam inserts, magnetic closures, and child-resistant designs—ensuring your product arrives safely while delivering a premium unboxing experience that resonates with modern consumers.",
      },
      {
        name: "E-Cigarette Boxes",
        image: "/images/e cigarette box.webp",
        description:
          "E-Cigarette Boxes are custom-designed to provide secure, sleek, and brand-focused packaging for electronic cigarettes. Built for durability and style, these boxes protect devices during transport while offering space for branding, health warnings, and compliance labels. With options like magnetic closures, window cutouts, and premium finishes, they enhance shelf appeal and deliver a refined unboxing experience tailored to both disposable and refillable e-cigarette products.",
      },
      {
        name: "Custom E-Liquid Boxes",
        image: "/images/e liquid box.webp",
        description:
          "Custom E-Liquid Boxes are tailored to safely package and promote vape juice bottles while reinforcing your brand identity. Designed for 10ml, 30ml, and other standard bottle sizes, these boxes offer secure fit, leak prevention, and compliance-ready labeling areas. With options like die-cut windows, UV coating, and foil stamping, they ensure your e-liquid products stand out on retail shelves and provide customers with a premium, trustworthy packaging experience.",
      },
      {
        name: "THC Vape Boxes",
        image: "/images/thc vape box.webp",
        description:
          "THC Vape Boxes are designed to deliver maximum product protection, compliance, and brand impact for cannabis vape cartridges and pens. These boxes feature secure locking mechanisms, child-resistant options, and space for legally required labeling. Customizable in size, shape, and finish, they offer premium features like matte lamination, foil accents, and embossed logos—ensuring your THC products are packaged safely and stylishly for both retail and dispensary environments.",
      },
      {
        name: "Disposable Vape Boxes",
        image: "/images/disposable vape box.webp",
        description:
          "Disposable Vape Boxes are crafted to securely house and promote single-use vape devices with style and protection. Designed for convenience and shelf appeal, these boxes can include tamper-evident seals, window cutouts, and compliance-friendly labeling areas. With options for full-color printing, matte or gloss finishes, and custom inserts, they help brands stand out in a competitive market while ensuring safe, attractive packaging for disposable vape products.",
      },
      {
        name: "THC E-Cigarette Boxes",
        image: "/images/thc e cigareete box.webp",
        description:
          "THC E-Cigarette Boxes are specifically designed to package and protect THC-infused e-cigarettes with style, safety, and regulatory compliance. These boxes feature secure enclosures, child-resistant options, and ample space for legal disclaimers and product details. With premium customization options like embossing, foil stamping, and spot UV, they elevate your brand presence while ensuring your THC e-cigs reach customers in pristine condition and with a premium unboxing experience.",
      },
      {
        name: "Vape Juice Boxes",
        image: "/images/e juice box.webp",
        description:
          "Vape Juice Boxes are designed to securely hold and showcase e-liquid bottles while delivering strong shelf appeal and brand identity. These custom boxes offer precise sizing for various bottle capacities, tamper-evident features, and space for compliance labeling. With premium finishes like gloss, matte, or soft-touch lamination, along with vibrant printing and die-cut windows, they help your vape juice products stand out in both retail and online markets.",
      },
      {
        name: "Juul Pod Packaging",
        image: "/images/jull pods box.webp",
        description:
          "Juul Pod Packaging is custom-built to securely house and protect refillable or disposable Juul pods while enhancing product presentation. Designed for precision fit and retail display, these boxes feature options like foam inserts, tamper-evident seals, and child-resistant closures. With space for compliance labels and brand elements, they offer a sleek, modern look that aligns with the premium feel of Juul products and appeals to both retail and direct-to-consumer markets.",
      },
    ],
  },

  'burger-boxes': {
    title: 'Burger Boxes',
    slug: 'burger-boxes',
    metaDescription: 'Custom burger boxes for dine-in, takeout, or delivery. Durable, insulated, with custom branding options.',
    keywords: [
      'custom burger boxes',
      'food packaging',
      'takeout boxes',
      'restaurant packaging'
    ],
    mainImage: '/images/WhatsApp_Image_2025-08-05_at_4.12.26_AM-removebg-preview.webp',
    hoverImage: '/images/WhatsApp_Image_2025-08-05_at_4.12.27_AM-removebg-preview.webp',
    description: 'Designed to keep your burgers fresh, secure, and visually appealing. Perfect for dine-in, takeout, or delivery, they offer durability, insulation, and custom branding options.',
    features: [
      'Fast Turnaround',
      'Full Color Printing',
      'Design Support',
      'Free Shipping'
    ],
    overviewTitle: 'Product Overview',
    overviewContent: 'Burgers are a global favorite and a staple of fast food found at virtually every street corner. With the rise of online ordering, distinguishing your brand from the competition has never been more crucial. Thats where innovative packaging comes into play. Our unique and eye-catching burger boxes can capture customer attention and encourage repeat business. At Half Price Packaging, we specialize in creating burger packaging that not only showcases your delicious burgers but also ensures safe transit. Our boxes are designed to accommodate burgers along with ketchup sachets, salad, and fries, providing a complete dining experience. The personalized burger boxes we create stand out with their use of sustainable bamboo and food-safe paperboard. This material offers a high-quality appearance while protecting your food from moisture and other contaminants. In addition, we utilize soy-based and water-based inks in our printing processes, increasing your brands visibility in an eco-friendly manner.',
    overviewImage: '/images/Rigid Kraft Box.webp',
    overviewHoverImage: '/images/Die Cut Rigid Box.webp',
  },

  'magnetic-closure': {
    title: 'Magnetic Closure Boxes',
    slug: 'magnetic-closure',
    metaDescription: 'Premium magnetic closure boxes for luxury products and gifts. Elegant design with secure magnetic flap.',
    keywords: [
      'magnetic closure boxes',
      'luxury gift boxes',
      'premium packaging'
    ],
    mainImage: '/images/WhatsApp_Image_2025-08-05_at_3.37.56_AM-removebg-preview.webp',
    hoverImage: '/images/WhatsApp_Image_2025-08-05_at_3.37.56_AM__1_-removebg-preview.webp',
    description: 'Premium unboxing experience with their sleek design and secure magnetic flap. Ideal for luxury products and gifts, they combine elegance with functionality.',
    features: [
      'Fast Turnaround',
      'Full Color Printing',
      'Design Support',
      'Free Shipping'
    ],
    overviewTitle: 'Product Overview',
    overviewContent: 'Burgers are a global favorite and a staple of fast food found at virtually every street corner. With the rise of online ordering, distinguishing your brand from the competition has never been more crucial. Thats where innovative packaging comes into play. Our unique and eye-catching burger boxes can capture customer attention and encourage repeat business. At Half Price Packaging, we specialize in creating burger packaging that not only showcases your delicious burgers but also ensures safe transit. Our boxes are designed to accommodate burgers along with ketchup sachets, salad, and fries, providing a complete dining experience. The personalized burger boxes we create stand out with their use of sustainable bamboo and food-safe paperboard. This material offers a high-quality appearance while protecting your food from moisture and other contaminants. In addition, we utilize soy-based and water-based inks in our printing processes, increasing your brands visibility in an eco-friendly manner.',
    overviewImage: '/images/cosmetic lables.webp',
    overviewHoverImage: '/images/cosmetic display box.webp',
  },

  'cosmetic-boxes': {
    title: 'Cosmetic Boxes',
    slug: 'cosmetic-boxes',
    metaDescription: 'Custom cosmetic boxes for skincare and beauty products. Sleek, durable, and fully customizable.',
    keywords: [
      'custom cosmetic boxes',
      'beauty packaging',
      'skincare boxes',
      'makeup packaging'
    ],
    mainImage: '/images/WhatsApp_Image_2025-08-05_at_3.43.00_AM-removebg-preview.webp',
    hoverImage: '/images/WhatsApp_Image_2025-08-05_at_3.43.00_AM__1_-removebg-preview.webp',
    description: 'Enhance your brand\'s image while securely packaging skincare and beauty products. Sleek, durable, and fully customizable, they\'re perfect for both retail display and gifting.',
    features: [
      'Fast Turnaround',
      'Full Color Printing',
      'Design Support',
      'Free Shipping'
    ],
    overviewTitle: 'Custom Cosmetic Packaging That Highlights Every Product With Style',
    overviewContent: 'In the beauty world, your packaging is your silent salesperson. It’s about captivating your audience the moment they lay eyes on your product. Stunning cosmetic packaging needs to engage and convince consumers to choose your brand over the rest. Half Price Packaging understands the needs of every beauty brand, no matter where you stand in the market. We ensure our clients receive packaging that is bold and unique, combined with brand storytelling, with elegant presentation and reliable protection.',
    overviewImage: '/images/Tuck Mailer Box.webp',
    overviewHoverImage: '/images/Book Mailer Box.webp',
   variants: [
      {
        name: "Makeup Boxes",
        image: "/images/make up box.webp",
        description:
          "Makeup Boxes designed for premium protection and stylish presentation of cosmetic products. These boxes are customizable with vibrant printing options and provide sturdy packaging that enhances your brand’s image.",
      },
      {
        name: "Lip Balm Boxes",
        image: "/images/lip balm bx.webp",
        description:
          "Custom Lip Balm Boxes crafted to securely hold your lip care products. Featuring elegant designs and compact shapes, these boxes offer excellent shelf appeal and durable protection.",
      },
      {
        name: "Custom Printed Cream Boxes",
        image: "/images/cream box make up.webp",
        description:
          "High-quality Cream Boxes tailored with custom printing to provide a luxurious feel. Perfect for skincare creams, they protect product integrity while reinforcing brand identity.",
      },
      {
        name: "Makeup Tool Boxes",
        image: "/images/make up tool box.webp",
        description:
          "Makeup Tool Boxes designed for functional and attractive packaging of brushes, sponges, and other beauty tools. Customizable to fit your brand style and product needs.",
      },
      {
        name: "Custom Serum Boxes",
        image: "/images/custom serum box.webp",
        description:
          "Serum Boxes crafted for premium skincare packaging. These boxes provide protection and sophistication to highlight the quality of your serums.",
      },
      {
        name: "Custom Printed Cosmetic Display Boxes",
        image: "/images/cosmetic display box.webp",
        description:
          "Display Boxes designed to showcase your cosmetic products elegantly. Custom printed with eye-catching graphics, these are perfect for retail environments.",
      },
      {
        name: "Hair Extension Boxes",
        image: "/images/hair extension box.webp",
        description:
          "Sturdy Hair Extension Boxes offering protection and style for your hair products. Customizable with your brand’s colors and logos for a professional look.",
      },
      {
        name: "Cosmetic Labels",
        image: "/images/cosmetic lables.webp",
        description:
          "Custom Cosmetic Labels to enhance product packaging with vibrant colors and lasting adhesive. Perfect for personalizing your cosmetics and maintaining brand consistency.",
      },
      {
        name: "Lipstick Boxes",
        image: "/images/lipstick boxes.webp",
        description:
          "Elegant Lipstick Boxes that protect your products and provide a luxurious unboxing experience. Custom printing available to showcase your brand identity.",
      },
    ],
  },
}