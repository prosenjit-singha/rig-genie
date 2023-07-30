/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.evga.com",
      "www.startech.com.bd",
      "m.media-amazon.com",
      "images-na.ssl-images-amazon.com",
    ],
  },
};

module.exports = nextConfig;
