// src/components/HeroSection.tsx

"use client";

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';

const HeroBackground = dynamic(() => import('@/components/HeroBackground'), { ssr: false });

interface HeroSectionProps {
  titleLines: string[];
  tagline: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  titleLines,
  tagline,
  ctaText = "Start Your Project",
  ctaLink = "/services",
}) => {
  const { setIsHoveringInteractive } = useCursor();

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">
      <HeroBackground />

      {/* Foreground Content Container */}
      <motion.div
        className="z-10 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }}
      >
        {/* Main Headline */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-white leading-tight tracking-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
            {titleLines[0]}
          </span>
          <br />
          {titleLines[1]}
        </motion.h1>

        {/* Sub-headline/Tagline */}
        <motion.p
          className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl font-light leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }}
        >
          {tagline}
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }}
        >
          <Link
            href={ctaLink}
            className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-2xl hover:from-orange-600 hover:to-red-700"
            onMouseEnter={() => setIsHoveringInteractive(true)}
            onMouseLeave={() => setIsHoveringInteractive(false)}
          >
            {ctaText}
          </Link>
          <Link
            href="/portfolio"
            className="inline-block border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-600"
            onMouseEnter={() => setIsHoveringInteractive(true)}
            onMouseLeave={() => setIsHoveringInteractive(false)}
          >
            View Our Work
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Down Hint */}
      <motion.div
         className="absolute bottom-30 left-1/2 transform -translate-x-1/2 z-10"
         initial={{ opacity: 0, y: -10 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 1.5, duration: 0.5 }}
      >
         <svg className="animate-bounce w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
           <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
         </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;