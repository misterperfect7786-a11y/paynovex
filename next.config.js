/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Skip ESLint during production builds while we stabilize config
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
