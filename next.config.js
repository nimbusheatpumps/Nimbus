/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion', '@radix-ui/*'],
  },
  serverExternalPackages: [],
  images: {
    domains: ['www.pngkey.com', 'imgbin.com', 'seeklogo.com', 'www.alamy.com', 'macoungroup.wordpress.com', 'via.placeholder.com'],
  },
};
module.exports = nextConfig;