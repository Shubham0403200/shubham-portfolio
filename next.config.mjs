/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ieltsliz.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'www.pngkey.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          pathname: '/**',
        },
      ],
    },
  
};

export default nextConfig;
