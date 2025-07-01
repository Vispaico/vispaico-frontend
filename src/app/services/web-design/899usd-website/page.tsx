'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHammer, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Usd899Webpage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">The $899 Webpage: Your Spot Online, Done Right</h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            You saw the $899 page and want the details. Good move. This is your professional spot online, built to get results, and ready in <strong>three days</strong>.
          </p>
        </motion.div>

        <div className="bg-black p-8 sm:p-12 rounded-2xl shadow-lg mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What You’re Getting</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-indigo-500 pl-6">
              <h3 className="font-bold text-xl mb-2">SEO That Climbs</h3>
              <p className="text-gray-400">Get found on Google. It&apos;s optimized with the keywords people actually use to find you.
</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="font-bold text-xl mb-2">Copy That Talks</h3>
              <p className="text-gray-400">Speak to your customers. The writing is fun, clear, and focuses on what your visitors care about.</p>
            </div>
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="font-bold text-xl mb-2">Design That Sticks</h3>
              <p className="text-gray-400">Clean, modern, and responsive. Looks sharp on every screen, loads quick, and keeps people scrolling.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="font-bold text-xl mb-2">Research That Pays Off</h3>
              <p className="text-gray-400">Stand out from the crowd. The design is based on what your audience wants and what your rivals aren&apos;t doing.</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">How We Nail It in Three Days</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faSearch} className="text-3xl text-indigo-400" />
              <div>
                <h3 className="font-bold text-lg">Day 1: Dig & Design</h3>
                <p className="text-gray-500">Research market, sketch layout, draft copy.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faHammer} className="text-3xl text-purple-400" />
              <div>
                <h3 className="font-bold text-lg">Day 2: Build & Boost</h3>
                <p className="text-gray-500">Flesh out design, start coding, layer in SEO.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faCheckCircle} className="text-3xl text-green-400" />
              <div>
                <h3 className="font-bold text-lg">Day 3: Test & Tweak</h3>
                <p className="text-gray-500">Test on all devices, final polish, and launch.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Roll?</h2>
          <p className="text-lg text-gray-400 mb-8">Ready for a webpage that pulls its weight? Snag the $899 deal, and let&apos;s get it done.</p>
          <Link href="/contact" passHref>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: '0px 8px 25px rgba(79, 70, 229, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white font-bold py-4 px-10 rounded-lg text-xl shadow-md transition-all duration-300"
            >
              Grab Your $899 Webpage Today!
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
