/** @type {import('next').NextConfig} */
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
        source: '/en-US/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/en-AE/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/de-DE/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/ru-RU/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/en/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/de/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/ru/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/en-US',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en-AE',
        destination: '/',
        permanent: true,
      },
      {
        source: '/de-DE',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ru-RU',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en',
        destination: '/',
        permanent: true,
      },
      {
        source: '/de',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ru',
        destination: '/',
        permanent: true,
      }
    ];
  }
};

module.exports = nextConfig;
