/** @type {import('next').NextConfig} */
const nextConfig = {
  
  // Your existing redirects are preserved.
  async redirects() {
    return [
      {
        source: '/services/web-design/899usd-landingpage',
        destination: '/services/3-day-website',
        permanent: true,
      },
      {
        source: '/services/web-design/899usd-website',
        destination: '/services/3-day-website',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;