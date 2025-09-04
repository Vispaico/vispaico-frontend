'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faMobileAlt, faSitemap, faBullhorn, faPencilRuler } from '@fortawesome/free-solid-svg-icons';
import KickoffForm from '@/components/KickoffForm';

const features = [
  { icon: faTachometerAlt, text: 'Speed That Kills' },
  { icon: faMobileAlt, text: 'Mobile First' },
  { icon: faSitemap, text: 'Navigation That Clicks' },
  { icon: faBullhorn, text: 'SEO Smarts' },
  { icon: faPencilRuler, text: 'Copy That Lands' },
];

export default function WebsiteDesignPage() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2">Does Your Website Get the Job Done?</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
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
            className="relative h-80 flex items-center justify-center overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Base Layer - Abstract Website Shape */}
            <motion.div
              className="absolute w-full h-full bg-linear-to-br from-indigo-700 to-purple-900 rounded-lg shadow-2xl"
              initial={{ rotate: -5, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            {/* Mid Layer - Screen Representation */}
            <motion.div
              className="absolute w-3/4 h-3/4 bg-gray-800 rounded-lg shadow-xl flex items-center justify-center p-4"
              initial={{ rotate: 5, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              <div className="w-full h-full bg-gray-700 rounded-md flex items-center justify-center text-gray-400 text-sm">
                <span className="animate-pulse">Loading Awesome...</span>
              </div>
            </motion.div>

            {/* Top Layer - Interactive Element */}
            {/* Top Layer - Abstract Dynamic Element (Warhol-esque) */}
            <motion.div
              className="absolute w-1/2 h-1/2 rounded-full shadow-lg flex items-center justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              style={{
                background: 'radial-gradient(circle, rgba(255,0,255,0.8) 0%, rgba(0,255,255,0.6) 100%)',
                filter: 'blur(5px)'
              }}
            >
              <motion.div
                className="w-3/4 h-3/4 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.8, 1, 0.8],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background: 'linear-gradient(45deg, rgba(255,255,0,0.8) 0%, rgba(0,255,0,0.6) 100%)',
                }}
              />
            </motion.div>

            {/* Enhanced Neutron Light Effect with multiple particles */}
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-6 h-6 rounded-full bg-blue-400 opacity-70 blur-xs"
                animate={{
                  x: [0, Math.random() * 300 - 150, Math.random() * 300 - 150, Math.random() * 300 - 150, 0],
                  y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
                  scale: [1, 1.2, 1, 0.8, 1],
                  rotate: [0, 180, 360, 540, 720],
                }}
                transition={{
                  duration: 5 + index * 2, // Vary duration for different speeds
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.5, // Stagger start times
                }}
              />
            ))}
            
            {/* Subtle background grid/lines for digital feel */}
            <div className="absolute inset-0 pointer-events-none opacity-10" style={{
              backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }} />
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
                <div className="bg-black/20 backdrop-blur-lg border border-white/20 rounded-full p-5 mb-4">
                  <FontAwesomeIcon icon={feature.icon} className="text-3xl text-indigo-400" />
                </div>
                <p className="font-semibold text-center">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-black/20 backdrop-blur-lg border border-white/20 p-12 rounded-2xl mb-20">
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
          <KickoffForm service="three-day-website" showServiceInfo={false} />
        </div>
      </div>
    </div>
  );
}
