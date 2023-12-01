/** @type {import('next').NextConfig} */

const repo = "ge2340";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  distDir: "docs",

  // assetPrefix: assetPrefix,
  // basePath: basePath,
};

module.exports = nextConfig;
