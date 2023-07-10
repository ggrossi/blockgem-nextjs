/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverActions: true
  },
  async rewrites() {
    return [
      {
        source: '/articles',
        destination: 'https://blog-starter-kit-seven-pi.vercel.app/', // or the deployed URL of the blog app
      },
      {
        source: '/articles/:path*',
        destination: 'https://blog-starter-kit-seven-pi.vercel.app/posts/:path*', // or the deployed URL of the blog app
      },
    ];
  },
};

module.exports = nextConfig;
