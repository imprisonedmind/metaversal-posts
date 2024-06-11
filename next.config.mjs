/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      }, {
        protocol: 'https',
        hostname: 'media2.giphy.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
