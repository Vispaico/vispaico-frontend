// /src/app/(main_site)/advertising/page.tsx

'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';


export default function AdvertisingServicePage() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2 animate-slide-up">Vispaico Advertising</h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Become visible
          </p>
          </motion.div>
      </div>
        

        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-delay-1">
            <h2 className="text-3xl font-semibold mb-4">Targeted Advertising for Maximum ROI</h2>
            <p className="text-lg text-gray-300 mb-8">
            <FontAwesomeIcon icon={faTools} className="text-2xl text-orange-500" /> This is a placeholder for the Digital Advertising service page. Here we will outline our expertise in creating and managing paid ad campaigns across various platforms like Google Ads, Facebook, and LinkedIn. We focus on data-driven strategies to maximize your return on investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in-delay-2">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">PPC Campaigns</h3>
              <p className="text-gray-400">Expert management of your pay-per-click campaigns for immediate results.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Social Media Ads</h3>
              <p className="text-gray-400">Engage your target audience on social platforms with compelling ad creatives.</p>
            </div>
          </div>

          <div className="text-center animate-fade-in-delay-3">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Launch Your Campaign
            </Link>
          </div>
        </div>
    {/* Move the style block inside the returned JSX */}
    <style jsx>{`
      @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slide-up {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      .animate-fade-in {
        animation: fade-in 0.5s ease-out forwards;
      }
      .animate-slide-up {
        animation: slide-up 0.5s ease-out 0.2s forwards;
      }
      .animate-fade-in-delay-1 {
        opacity: 0;
        animation: fade-in 0.5s ease-out 0.4s forwards;
      }
      .animate-fade-in-delay-2 {
        opacity: 0;
        animation: fade-in 0.5s ease-out 0.6s forwards;
      }
      .animate-fade-in-delay-3 {
        opacity: 0;
        animation: fade-in 0.5s ease-out 0.8s forwards;
      }
    `}</style>
    </div>
  );
}
