/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  distDir: './out',
  // basePath: '/portfolio',
}

module.exports = nextConfig
