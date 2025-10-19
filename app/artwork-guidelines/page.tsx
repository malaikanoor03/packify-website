import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Artwork Guidelines for Custom Packaging | PackifyCustomBoxes',
  description:
    "Follow PackifyCustomBoxes' professional artwork guidelines to ensure your custom packaging designs print perfectly. Learn about file formats, resolution, colors, and dielines.",
  keywords:
    'artwork guidelines, custom packaging artwork, custom box printing, print-ready files, dieline templates, packaging design tips',
}

export default function ArtworkGuidelinesPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 pt-[8rem] text-lg leading-relaxed space-y-10 text-gray-500">
      <p>
        To ensure the highest print quality for your custom packaging, please
        follow these artwork preparation guidelines when submitting your files
        to <strong>PackifyCustomBoxes</strong>.
      </p>

      {/* Section 1 */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">1. File Format</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Preferred formats: <strong>AI, EPS, PDF</strong> (vector files).
          </li>
          <li>
            High-resolution PSD, PNG, or JPEG (minimum 300 DPI) are accepted for
            images.
          </li>
          <li>
            Convert all text to outlines or curves to avoid font issues.
          </li>
        </ul>
      </section>

      {/* Section 2 */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">2. Color Mode</h2>
        <p>
          Use <strong>CMYK</strong> color mode for all artwork. RGB files will
          be converted to CMYK, which may cause color shifts.
        </p>
      </section>

      {/* Section 3 */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">3. Bleed & Safe Zone</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Include a bleed of at least <strong>0.125&quot; (3mm)</strong> on
            all sides.
          </li>
          <li>
            Keep important text and logos inside the safe zone (at least
            0.125&quot; from the edge).
          </li>
        </ul>
      </section>

      {/* Section 4 */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">4. Dielines</h2>
        <p>
          If using a custom dieline template, place your artwork within the
          dieline layers. Make sure the dieline file includes:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Cut lines in 100% magenta (no stroke).</li>
          <li>Fold lines in 100% cyan dashed lines.</li>
          <li>Keep dieline on a separate layer named &quot;Dieline&quot;.</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">5. Fonts and Images</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>All fonts must be outlined or embedded.</li>
          <li>Linked images must be embedded or included with your file.</li>
          <li>Image resolution should be at least 300 DPI.</li>
        </ul>
      </section>

      {/* Section 6 */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">6. File Naming</h2>
        <p>
          Name your files clearly with your company name and box type. Example:{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">
            Packify_MailerBox_Design.pdf
          </code>
        </p>
      </section>

      {/* Section 7 */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">7. Need Help with Artwork?</h2>
        <p>
          We offer free file checks and affordable design assistance if needed.
          Just email us your files at{' '}
          <a
            href="mailto:info@packifycustomboxes.com"
            className="text-orange-600 underline"
          >
            info@packifycustomboxes.com
          </a>
          .
        </p>
      </section>

      <p className="text-sm text-gray-500">Last updated: July 18, 2025</p>
    </main>
  )
}
