'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const FastTrackSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-700 to-purple-800 text-white py-20 md:py-28 overflow-hidden">
      {/* Background elements for visual interest */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="gradient1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
            <radialGradient id="gradient2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>
          <circle cx="20" cy="20" r="30" fill="url(#gradient1)" />
          <circle cx="80" cy="80" r="40" fill="url(#gradient2)" />
          <circle cx="50" cy="10" r="25" fill="url(#gradient1)" />
          <circle cx="10" cy="90" r="35" fill="url(#gradient2)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Need a Website Fast?
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Professional websites delivered in 72 hours
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <motion.div
            className="flex items-center text-lg md:text-xl text-indigo-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-300 mr-2" /> Custom design
          </motion.div>
          <motion.div
            className="flex items-center text-lg md:text-xl text-indigo-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-300 mr-2" /> Mobile responsive
          </motion.div>
          <motion.div
            className="flex items-center text-lg md:text-xl text-indigo-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-300 mr-2" /> SEO optimized
          </motion.div>
        </div>

        <motion.p
          className="text-3xl md:text-4xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
        >
          Starting at $899
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "backOut" }}
        >
          <Link href="/services/web-design/899usd-website" passHref legacyBehavior>
            <a className="inline-block bg-white text-indigo-700 hover:bg-indigo-100 px-10 py-4 rounded-full text-lg md:text-xl font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
              Get Started Now
            </a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FastTrackSection;
