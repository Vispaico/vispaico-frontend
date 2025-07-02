'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const HomeFastTrackCTA: React.FC = () => {
  const { setIsHoveringInteractive } = useCursor();

  const handleMouseEnter = () => setIsHoveringInteractive(true);
  const handleMouseLeave = () => setIsHoveringInteractive(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <motion.section
      className="relative bg-gradient-to-br from-purple-900 to-indigo-800 text-white py-20 md:py-32 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {/* Background Grid/Pattern */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(to right, #4a0e7a 1px, transparent 1px), linear-gradient(to bottom, #4a0e7a 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      {/* Central Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight"
          variants={fadeIn}
        >
          Need to Launch, Fast?
        </motion.h2>
        <motion.p
          className="text-xl sm:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto"
          variants={fadeIn}
        >
          Professional Websites and Landing Pages delivered in 3 days.
          No complex process, no tech-talk—we handle it all.
        </motion.p>

        <motion.ul
          className="list-none p-0 mb-10 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-8"
          variants={staggerContainer}
        >
          <motion.li className="flex items-center text-lg font-medium" variants={fadeIn}>
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-400 mr-3 text-xl" /> Custom design
          </motion.li>
          <motion.li className="flex items-center text-lg font-medium" variants={fadeIn}>
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-400 mr-3 text-xl" /> Mobile responsive
          </motion.li>
          <motion.li className="flex items-center text-lg font-medium" variants={fadeIn}>
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-400 mr-3 text-xl" /> SEO optimized
          </motion.li>
        </motion.ul>

        <motion.p
          className="text-3xl sm:text-4xl font-bold mb-10 text-yellow-300"
          variants={fadeIn}
        >
          $899 USD | Delivered in 3 days
        </motion.p>

        <motion.div variants={fadeIn}>
          <Link href="/services/3-day-website" passHref>
            <motion.button
              className="inline-block bg-yellow-400 text-purple-900 font-extrabold py-4 px-12 rounded-full text-xl md:text-2xl uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              whileTap={{ scale: 0.95 }}
            >
              Get Your 3-Day Website
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Abstract Shapes/Particles for visual interest */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-24 h-24 bg-purple-500 rounded-full mix-blend-screen opacity-30 blur-xl"
        animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-indigo-500 rounded-full mix-blend-screen opacity-30 blur-xl"
        animate={{ x: [0, -100, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </motion.section>
  );
};

export default HomeFastTrackCTA;