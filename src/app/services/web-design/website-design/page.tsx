'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faMobileAlt, faSitemap, faBullhorn, faPencilRuler } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const features = [
  { icon: faTachometerAlt, text: 'Speed That Kills' },
  { icon: faMobileAlt, text: 'Mobile First' },
  { icon: faSitemap, text: 'Navigation That Clicks' },
  { icon: faBullhorn, text: 'SEO Smarts' },
  { icon: faPencilRuler, text: 'Copy That Lands' },
];

export default function WebsiteDesignPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Does Your Website Get the Job Done?</h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Your website has a job to do. It should attract the right people and make it easy for them to find what they need. Let&apos;s build a website that gets it right.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Why It’s a Big Deal</h2>
            <ul className="space-y-4 text-gray-300">
              <li><strong className="text-white">Trust Factor:</strong> A solid site says you’re real; a janky one says “run.”</li>
              <li><strong className="text-white">SEO Muscle:</strong> Built right, it climbs Google and drags in free visitors.</li>
              <li><strong className="text-white">Money Maker:</strong> Turns browsers into buyers, not just window-shoppers.</li>
            </ul>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="relative h-64"
          >
            <motion.div className="absolute top-0 left-1/4 w-3/4 h-full bg-gray-800 rounded-lg transform -rotate-6" />
            <motion.div className="absolute top-0 left-1/4 w-3/4 h-full bg-gray-700 rounded-lg transform rotate-6" />
            <div className="absolute top-0 left-1/4 w-3/4 h-full bg-white text-black p-4 rounded-lg flex items-center justify-center">
              <p className="text-center font-bold">Your Awesome Website</p>
            </div>
          </motion.div>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-12">The Key Pieces</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.text}
                className="flex flex-col items-center p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.1 }}
              >
                <div className="bg-gray-800 rounded-full p-5 mb-4">
                  <FontAwesomeIcon icon={feature.icon} className="text-3xl text-indigo-400" />
                </div>
                <p className="font-semibold text-center">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 p-12 rounded-2xl mb-20">
          <h2 className="text-4xl font-bold text-center mb-10">How We Roll</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="border-t-2 border-indigo-500 pt-4">
              <h3 className="text-xl font-bold mb-2">Design That Fits</h3>
              <p className="text-gray-400">Custom, sharp, and ready for any screen.</p>
            </div>
            <div className="border-t-2 border-purple-500 pt-4">
              <h3 className="text-xl font-bold mb-2">SEO from Day One</h3>
              <p className="text-gray-400">Every page, every word—optimized to rise.</p>
            </div>
            <div className="border-t-2 border-pink-500 pt-4">
              <h3 className="text-xl font-bold mb-2">Copy That Connects</h3>
              <p className="text-gray-400">Straight talk that keeps people reading.</p>
            </div>
            <div className="border-t-2 border-green-500 pt-4">
              <h3 className="text-xl font-bold mb-2">UI That Works</h3>
              <p className="text-gray-400">Smooth, intuitive, and fun to use.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Jump In?</h2>
          <p className="text-lg text-gray-400 mb-8">Our $899 webpage or $1899 web app deals bring this to life.</p>
          <Link href="/services/web-design/899usd-website" passHref>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: '#4f46e5' }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg text-xl"
            >
              Kick Off with an $899 Webpage!
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}