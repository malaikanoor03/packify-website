/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' to enable server features
  reactStrictMode: true,
  images: {
    unoptimized: true, // Keep this if you had it
  },
}

module.exports = nextConfig