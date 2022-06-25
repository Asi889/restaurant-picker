/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    // layoutRaw: true,
    domains: ['https://imageproxy.wolt.com/venue/','https://d25t2285lxl5rf.cloudfront.net'],
    // layoutRaw: true,
  },
  // experimental: { images: { layoutRaw: true } }
}

module.exports = nextConfig
