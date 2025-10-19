import Head from 'next/head';
import Link from 'next/link';

export default function HowToOrder() {
  return (
    <>
      <Head>
        <title>How to Order | PackifyCustomBoxes</title>
        <meta name="description" content="Learn how to order custom packaging from PackifyCustomBoxes. Step-by-step guide to select your boxes, submit artwork, request quotes, and get your premium custom boxes delivered worldwide." />
        <meta name="keywords" content="how to order custom boxes, ordering guide, PackifyCustomBoxes order process, custom packaging steps, submit artwork, request quote, purchase custom boxes, packaging order instructions" />
        <meta property="og:title" content="How to Order | PackifyCustomBoxes" />
        <meta property="og:description" content="Step-by-step guide to order custom boxes from PackifyCustomBoxes. Learn how to choose your boxes, submit artwork, request quotes, and receive your premium custom packaging." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.packifycustomboxes.com/how-to-order" />
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-10 pt-[6rem] text-lg leading-relaxed space-y-10 text-gray-600">
        <p>
          Ordering your custom packaging with <strong>PackifyCustomBoxes</strong> is quick, easy, and
          stress-free. Just follow these simple steps to get started:
        </p>

        {/* Step 1 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-gray-700">Step 1: Request a Quote</h2>
          <p>
            Fill out our{' '}
            <Link href="/get-quote" className="text-orange-600 underline">
              Quote Request Form
            </Link>{' '}
            with your box specifications, including size, material, quantity, printing type, and any custom
            features. Our team will get back to you within 24 hours with a detailed quote.
          </p>
        </section>

        {/* Step 2 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-gray-700">Step 2: Approve Pricing & Place Order</h2>
          <p>
            Once you're happy with the pricing, confirm your order and make payment through our secure checkout
            process. We accept major credit cards, PayPal, and more.
          </p>
        </section>

        {/* Step 3 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-gray-700">Step 3: Submit Your Artwork</h2>
          <p>
            Upload your logo, designs, and any artwork files. If needed, our design team can assist you in
            preparing print-ready files that meet packaging guidelines.
          </p>
        </section>

        {/* Step 4 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-gray-700">Step 4: Receive a Digital Proof</h2>
          <p>
            We'll send you a digital 3D mockup or PDF proof to review. You'll have a chance to approve the final
            design or request changes before we proceed with production.
          </p>
        </section>

        {/* Step 5 */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-gray-700">Step 5: Production & Shipping</h2>
          <p>
            Once approved, we start production. Turnaround time depends on the box type and quantity. After
            completion, your boxes are securely packaged and shipped to your location. You'll receive tracking
            info via email.
          </p>
        </section>

        {/* Final Notes */}
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-gray-700">Need Help?</h2>
          <p>
            If you have any questions or need assistance at any step, our customer support team is here to help!
            Reach out via email at{' '}
            <a href="mailto:info@packifycustomboxes.com" className="text-orange-600 underline">
              info@packifycustomboxes.com
            </a>
            .
          </p>
        </section>

        <p className="text-sm text-gray-500">Last updated: July 18, 2025</p>
      </main>
    </>
  );
}