/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
};

export default nextConfig;

