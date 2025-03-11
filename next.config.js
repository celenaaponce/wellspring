/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export
  distDir: 'out',    // Output folder is "out"
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  basePath: '/wellspring', // This should be the name of your repository
  trailingSlash: true,     // Ensures proper routing in static mode
};

module.exports = nextConfig;