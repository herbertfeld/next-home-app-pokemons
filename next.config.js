/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinifyMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
}

module.exports = { nextConfig }
