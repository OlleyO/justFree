/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const path = require("path");

module.exports = {
  nextConfig,
  sassOptions: {
    includePaths: [path.join(__dirname, "./src/styles")],
  },

  images: {
    domains: ["random.imagecdn.app", "images.unsplash.com"],
  },
};
