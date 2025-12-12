/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion', '@radix-ui/*'],
  },
  serverExternalPackages: [],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
    qualities: [65, 75, 85, 95],   // fixes the quality=95 warnings
  },
};
module.exports = nextConfig;