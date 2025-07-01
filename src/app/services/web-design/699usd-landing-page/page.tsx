'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMagic } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Usd699LandingPage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tighter">So, the $699 landing page. You&apos;re curious, but skeptical. Perfect.</h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Here’s what you get: a landing page that’s built to work. It uses the words your customers search for, so they can find you. The copy is clear and direct—no fluff. The whole thing is designed to grab your visitors&apos; attention and give them exactly what they want.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-center">What You’re Actually Getting</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2 text-indigo-400">SEO That Actually Moves the Needle</h3>
                <p className="text-gray-300">Show up in search. It&apos;s built with the exact keywords your audience is looking for.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2 text-purple-400">Copy That Grabs Attention</h3>
                <p className="text-gray-300">Sound like a person. The copy is direct, punchy, and easy to understand.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2 text-pink-400">Design That Doesn’t Suck</h3>
                <p className="text-gray-300">Think bold headlines, clean layouts, and a look that works on all devices.</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-2 text-green-400">Audience Research</h3>
                <p className="text-gray-300">Get people to act. It’s designed around what your visitors want and how to get them to click.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">How We Pull This Off in Two Days</h2>
          <div className="flex justify-center items-center space-x-4 md:space-x-8">
            <div className="flex flex-col items-center">
              <motion.div whileHover={{ scale: 1.1 }} className="bg-indigo-500 rounded-full w-24 h-24 flex items-center justify-center mb-3">
                <FontAwesomeIcon icon={faSearch} className="text-4xl" />
              </motion.div>
              <h3 className="font-bold text-lg">Day 1: Research & Draft</h3>
            </div>
            <div className="text-2xl font-thin text-gray-500">→</div>
            <div className="flex flex-col items-center">
              <motion.div whileHover={{ scale: 1.1 }} className="bg-purple-500 rounded-full w-24 h-24 flex items-center justify-center mb-3">
                <FontAwesomeIcon icon={faMagic} className="text-4xl" />
              </motion.div>
              <h3 className="font-bold text-lg">Day 2: Polish & Launch</h3>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Stop Scrolling and Start Converting?</h2>
          <p className="text-lg text-gray-400 mb-8">This is your chance to get a high-converting landing page without the high-end price tag.</p>
          <Link href="/contact" passHref>
            <motion.button 
              whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0], transition: { yoyo: Infinity, duration: 0.3 } }}
              whileTap={{ scale: 0.9 }}
              className="bg-green-500 text-white font-extrabold py-4 px-10 rounded-lg text-xl shadow-lg transform hover:shadow-2xl transition-all duration-300"
            >
              Lock in Your $699 Landing Page Now!
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
