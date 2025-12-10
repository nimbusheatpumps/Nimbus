/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['nimbusheatpumps.co.uk'],
  },
  // Enable partial prerendering for CWV optimization
  experimental: {
    optimizePackageImports: ['@radix-ui/react-slot', 'framer-motion'],
    serverComponentsExternalPackages: [],
  },
}

module.exports = nextConfig