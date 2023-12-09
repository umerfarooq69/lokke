/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // eslint-disable-next-line require-await, get-off-my-lawn/prefer-arrow-functions
  async redirects() {
    return [
      {
        destination: '/property',
        permanent: true,
        source: '/',
      },
    ];
  },
};

module.exports = nextConfig;
