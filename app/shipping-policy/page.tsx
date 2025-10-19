import Head from 'next/head';

export default function ShippingPolicy() {
  return (
    <>
      <Head>
        <title>Shipping Policy | PackifyCustomBoxes</title>
        <meta name="description" content="Learn about PackifyCustomBoxes' shipping policy. Find details on delivery times, shipping options, international shipping, and tracking for your custom packaging orders." />
        <meta name="keywords" content="shipping policy, delivery policy, PackifyCustomBoxes shipping, international shipping, shipping options, delivery times, order tracking, custom box shipping" />
        <meta property="og:title" content="Shipping Policy | PackifyCustomBoxes" />
        <meta property="og:description" content="Read PackifyCustomBoxes' shipping policy. Learn about delivery times, shipping options, international shipping, and tracking for your custom packaging orders." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.packifycustomboxes.com/shipping-policy" />
      </Head>

      <main className="max-w-4xl mx-auto px-4 py-10 pt-[6rem] space-y-6 text-gray-600">
        <section>
          <h2 className="text-2xl font-semibold mb-2 text-gray-700">Overview</h2>
          <p>
            At <strong>PackifyCustomBoxes</strong>, we're committed to getting your custom packaging delivered
            securely and on time. Below are our current shipping policies and guidelines.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Production Time</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Standard production time: <strong>7–12 business days</strong> after final artwork approval.
            </li>
            <li>
              Rush production options may be available for an additional fee. Please contact us to confirm
              availability.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Shipping Time</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Standard shipping within the U.S.: <strong>3–6 business days</strong>.
            </li>
            <li>
              International shipping: <strong>7–15 business days</strong> depending on destination and customs
              clearance.
            </li>
            <li>Expedited shipping options are available at checkout.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Shipping Partners</h2>
          <p>
            We partner with major carriers such as FedEx, UPS, and DHL to ensure reliable and trackable delivery.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Shipping Charges</h2>
          <p>
            Shipping costs are calculated based on order weight, quantity, destination, and selected shipping
            method.
          </p>
          <p className="mt-2">
            We offer <strong>free standard shipping</strong> within the U.S. on all orders.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Order Tracking</h2>
          <p>
            Once your order is shipped, you'll receive an email with tracking information to monitor delivery
            progress.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Shipping Delays</h2>
          <p>
            While we strive to meet all delivery estimates, occasional delays may occur due to customs, weather,
            or courier issues. We'll notify you promptly if delays affect your order.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Lost or Damaged Packages</h2>
          <p>
            If your package is lost or arrives damaged, please contact us within <strong>5 business days</strong>{' '}
            of delivery. We will work with the carrier to resolve the issue or arrange a replacement.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Contact Us</h2>
          <p>
            For shipping inquiries, email us at{' '}
            <a href="mailto:info@packifycustomboxes.com" className="text-orange-600 underline">
              info@packifycustomboxes.com
            </a>
            . Our team is here to help!
          </p>
        </section>
      </main>
    </>
  );
}