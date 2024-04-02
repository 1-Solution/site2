/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
  },
  reactStrictMode: true,
  eslint:{
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;
