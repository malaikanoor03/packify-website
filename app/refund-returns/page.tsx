import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund & Returns | PackifyCustomBoxes',
  description: 'Learn about PackifyCustomBoxes\' refund and return policies. Understand how to request returns, refunds, and replacements for your custom packaging orders.',
  keywords: 'refund policy, return policy, PackifyCustomBoxes returns, custom packaging returns, order refund, product replacement',
}

export default function RefundReturnsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 pt-[8rem] space-y-6 text-gray-600">
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Our Commitment</h2>
        <p>
          At <strong>PackifyCustomBoxes</strong>, customer satisfaction is our top priority. Due to the custom
          nature of our packaging products, returns and refunds are handled on a case-by-case basis.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Refund Policy</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            If your order arrives damaged, incorrect, or defective, please contact us within{' '}
            <strong>7 days</strong> of delivery.
          </li>
          <li>Refunds are only issued if the product is clearly defective or a production error has occurred.</li>
          <li>We may request photos of the product and packaging to process your refund or reprint request.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Non-Refundable Items</h2>
        <p>Since all products are made-to-order and customized, we do not accept returns for:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Change of mind or ordering errors after proof approval.</li>
          <li>Design issues that were approved by the customer during the proofing stage.</li>
          <li>Minor color variations due to digital vs. physical output differences.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Reprint Policy</h2>
        <p>
          If a printing or manufacturing error is confirmed, we will gladly offer a free reprint of your order.
          Shipping times for reprints are the same as standard orders.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2 text-gray-700">How to Request a Refund or Reprint</h2>
        <p>
          Please email us at{' '}
          <a href="mailto:info@packifycustomboxes.com" className="text-orange-600 underline">
            info@packifycustomboxes.com
          </a>{' '}
          with the following:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>Order number</li>
          <li>Photos of the issue</li>
          <li>A brief explanation of the problem</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Contact Us</h2>
        <p>
          For any concerns regarding your order, feel free to reach out to our customer support team. We&apos;re
          here to help!
        </p>
      </section>
    </main>
  )
}