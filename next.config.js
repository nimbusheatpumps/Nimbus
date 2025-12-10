/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion', '@radix-ui/*'],
  },
  serverExternalPackages: [],
};

export default nextConfig;