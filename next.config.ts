/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Or 'http' if your WP site isn't HTTPS
        hostname: 'vispaico.com', // <<< YOUR WORDPRESS DOMAIN HERE
        port: '', // Usually empty unless using a non-standard port
        pathname: '/wp-content/uploads/**', // Allows images from the uploads folder
      },
      // Add other domains if needed (e.g., CDNs)
    ],
  },
  // other configs...
};

export default nextConfig; // Or module.exports = nextConfig; if using .js