/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ]
  },
  async redirects() {
    return [
      {
        source: '/:locale/work',
        destination: 'https://portfolio.strucureo.com',
        permanent: true,
      },
      {
        source: '/work',
        destination: 'https://portfolio.strucureo.com',
        permanent: true,
      }
    ];
  }
};

module.exports = withNextIntl(nextConfig);
