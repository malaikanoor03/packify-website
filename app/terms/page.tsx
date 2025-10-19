import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms and Conditions | PackifyCustomBoxes',
  description: 'Read the Terms and Conditions of PackifyCustomBoxes. Understand the rules, policies, and guidelines governing the use of our website and custom packaging services.',
  keywords: 'terms and conditions, PackifyCustomBoxes terms, website usage policies, custom packaging rules, legal policies',
}

export default function TermsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 pt-[8rem] space-y-10 text-lg leading-relaxed text-gray-600">
      <p>
        Welcome to PackifyCustomBoxes. These Terms and Conditions govern your use of our website and services. By
        accessing our site or placing an order, you agree to abide by the terms stated below.
      </p>

      {/* Section 1 */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">1. Acceptance of Terms</h2>
        <p>
          By using our services, you acknowledge that you have read, understood, and agreed to these terms. If you
          do not agree with any part, you must not use our website.
        </p>
      </section>

      {/* Section 2 */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">2. Products and Services</h2>
        <p>
          Our products are made to order. All designs, sizes, and materials must be confirmed before production. We
          reserve the right to modify product offerings and prices at any time without prior notice.
        </p>
      </section>

      {/* Section 3 */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">3. Orders and Payments</h2>
        <p>
          Orders are processed after payment confirmation. We accept various payment methods including Visa,
          MasterCard, PayPal, and more. All transactions are secure and encrypted.
        </p>
      </section>

      {/* Section 4 */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">4. Cancellations and Refunds</h2>
        <p>
          Due to the custom nature of our products, cancellations may not be possible after production has started.
          Please refer to our{' '}
          <Link href="/refund-returns" className="text-orange-600 underline">
            Refund and Returns Policy
          </Link>{' '}
          for more details.
        </p>
      </section>

      {/* Section 5 */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">5. Intellectual Property</h2>
        <p>
          All content including designs, logos, and text are the property of PackifyCustomBoxes. Unauthorized use,
          reproduction, or redistribution is strictly prohibited.
        </p>
      </section>

      {/* Section 6 */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">6. User Responsibilities</h2>
        <p>
          Customers are responsible for uploading correct artwork, dielines, and box measurements.
          PackifyCustomBoxes is not liable for errors in user-submitted files or order details.
        </p>
      </section>

      {/* Section 7 */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">7. Limitation of Liability</h2>
        <p>
          We strive for 100% satisfaction, but we are not liable for any indirect, incidental, or consequential
          damages resulting from the use of our products or website.
        </p>
      </section>

      {/* Section 8 */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">8. Privacy Policy</h2>
        <p>
          Your privacy is important to us. Please read our{' '}
          <Link href="/privacy" className="text-orange-600 underline">
            Privacy Policy
          </Link>{' '}
          to understand how your information is collected and used.
        </p>
      </section>

      {/* Section 9 */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">9. Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of Wyoming, USA. Any disputes shall be resolved through
          binding arbitration or in the courts of Wyoming.
        </p>
      </section>

      {/* Section 10 */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">10. Updates to Terms</h2>
        <p>
          We reserve the right to update or change these Terms at any time. Continued use of the website after
          changes implies acceptance of the revised terms.
        </p>
      </section>

      <p className="text-sm text-gray-500">Last updated: July 18, 2025</p>
    </main>
  )
}