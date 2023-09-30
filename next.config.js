/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "uploads-ssl.webflow.com",
      "picsum.photos",
      "assets.website-files.com",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
