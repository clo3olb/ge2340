/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  distDir: "docs",
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/ge2340/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
