/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["utfs.io"],
  },
  experimental: {
    serverComponentsExternalPackages: ["sharp"],
  },
  output: "standalone",
};

export default nextConfig
