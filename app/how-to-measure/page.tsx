export default function HowToMeasurePage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 pt-[8rem] text-lg leading-relaxed space-y-10 text-gray-600">
      <p>
        Getting accurate box dimensions is essential for a perfect custom fit. At{' '}
        <strong>PackifyCustomBoxes</strong>, we use the standard industry method for measuring boxes:
      </p>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">📏 Standard Box Measurement Order</h2>
        <p>The correct order is always:</p>
        <div className="bg-gray-100 p-4 rounded-md text-center text-xl font-bold text-orange-600">
          Length × Width × Height
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">🧰 Measuring from the Inside</h2>
        <p>
          Always measure the <strong>internal dimensions</strong> of the box. External dimensions may vary
          slightly due to material thickness.
        </p>
        <ul className="list-decimal ml-6 mt-4 space-y-2">
          <li><strong>Length (L):</strong> The longest side of the base.</li>
          <li><strong>Width (W):</strong> The shorter side of the base.</li>
          <li><strong>Height (H):</strong> The vertical dimension.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">💡 Tips for Accurate Measuring</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Use a ruler or tape measure with inches or millimeters.</li>
          <li>Measure to the nearest 1/16" or 1mm.</li>
          <li>Double-check each dimension to avoid fitting issues.</li>
          <li>Consider the product, padding, and insert space.</li>
        </ul>
      </section>
    </main>
  )
}