/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: '.next',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
