/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_BACKEND: process.env.API_BACKEND,
  },
  images: {
    domains: ["localhost"],
  },
}

module.exports = nextConfig;
