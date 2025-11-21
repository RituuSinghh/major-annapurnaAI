/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://annapurnai-backend.vercel.app/api'
  },
  // Disable static generation for all pages
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb',
    },
  },
  // Force all pages to be client-side rendered
  trailingSlash: false,
}

module.exports = nextConfig
