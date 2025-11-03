// src/components/HeroSection.tsx

"use client";

import React from 'react';
import { Link } from '@/i18n/navigation';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';

const HeroBackground = dynamic(() => import('@/components/HeroBackground'), { ssr: false });

interface HeroSectionProps {
  titleLines: string[];
  tagline: string;
  proofText?: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  titleLines,
  tagline,
  proofText,
  ctaText = "Choose Your Speed",
  ctaLink = "/web-design",
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
          {proofText && (
            <>
              <br />
              <span className="text-xl sm:text-2xl text-orange-300 mb-8 max-w-3xl mx-auto">{proofText}</span>
            </>
          )}
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;