/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  transpilePackages: ['lucide-react'],
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig