/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'source.unsplash.com',
      'github.com',
      'i.postimg.cc',
    ],
  },
};

module.exports = nextConfig;
