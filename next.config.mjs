/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/servo-portfolio-live',
  assetPrefix: '/servo-portfolio-live',
}

export default nextConfig