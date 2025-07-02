/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Your WP site protocol
        hostname: 'vispaico.com', // Your WP domain
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      // --- ADD rule for the specific image URL hostname ---
      // NOTE: This might be redundant if the above covers it,
      // but explicitly adding it can sometimes help. Check if needed.
      // {
      //   protocol: 'https',
      //   hostname: 'vispaico.com', // Hostname from the image URL
      // },
      // --- End Add ---
    ],
  },
  // other configs...
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