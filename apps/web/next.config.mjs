/** @type {import('next').NextConfig} */
const nextConfig = {
  // Just to ensure that React is always on strict mode
  reactStrictMode: true,

  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  // We don't use trailing slashes on URLs from the Node.js Website
  trailingSlash: false,

  // We don't want to redirect with trailing slashes
  skipTrailingSlashRedirect: true,

  typescript: { ignoreBuildErrors: true },

  eslint: { dirs: ["."], ignoreDuringBuilds: true },

  transpilePackages: ["@procuraqui/ui", "@procuraqui/shadcn-ui"],

  images: {
    remotePatterns: [
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "github.com" },
    ],
  },
};

export default nextConfig;
