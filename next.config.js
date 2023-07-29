/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "https://images.evga.com",
      "https://www.startech.com.bd",
      "https://m.media-amazon.com",
    ],
  },
};

module.exports = nextConfig;
