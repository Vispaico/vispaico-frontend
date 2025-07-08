// src/components/HeroSection.tsx

"use client";

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
// --- FIX: Import the 'Variants' type for robust typing ---
import { motion, Variants } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';

// Dynamically import HeroBackground inside the Client Component
const HeroBackground = dynamic(
  () => import('@/components/HeroBackground'),
  { ssr: false }
);

// Define props for the Hero Section content
interface HeroSectionProps {
  titleLines: string[];
  tagline: string;
  ctaText?: string;
  ctaLink?: string;
}

// --- FIX: Apply the 'Variants' type to the object declaration ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// --- FIX: Apply the 'Variants' type and correct the 'ease' value ---
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut", // "easeOut" is a valid value, the issue was the lack of typing
    },
  },
};

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

      {/* Foreground Content Container - Apply container animation variants */}
      <motion.div
        className="z-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible" // Animate when component mounts
      >
        {/* Main Headline - Apply item animation variants */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white leading-tight tracking-tight"
          variants={itemVariants}
        >
          {titleLines.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < titleLines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </motion.h1>

        {/* Sub-headline/Tagline - Apply item animation variants */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl font-light"
          variants={itemVariants}
        >
          {tagline}
        </motion.p>

        {/* Call to Action Button - Apply item animation variants & CURSOR HANDLERS */}
        <motion.div variants={itemVariants}>
          <Link
            href={ctaLink}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-indigo-500/50"
            onMouseEnter={() => setIsHoveringInteractive(true)}
            onMouseLeave={() => setIsHoveringInteractive(false)}
          >
            {ctaText}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Down Hint - Optional animation */}
      <motion.div
         className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
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