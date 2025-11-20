// src/components/HeroSection.tsx

"use client";

import React from 'react';
import { Link } from '@/i18n/navigation';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';

const HeroBackground = dynamic(() => import('@/components/HeroBackground'), { ssr: false });
const DomeGallery = dynamic(() => import('@/components/DomeGallery.jsx'), { ssr: false });

interface HeroSectionProps {
  titleLines: string[];
  tagline: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  titleLines,
  tagline,
  ctaText = "Start Your Growth Website",
  ctaLink = "/vispaico-growth-website",
}) => {
  const { setIsHoveringInteractive } = useCursor();

  return (
    <section className="relative flex flex-col justify-center overflow-hidden px-6 py-20 md:py-28 min-h-screen">
      <HeroBackground />

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2, delayChildren: 0.2 } }}
      >
        <motion.div
          className="flex w-full max-w-5xl flex-col items-center text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }}
        >
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

          <motion.p
            className="text-xl md:text-2xl mb-8 text-blue-100 font-light leading-relaxed whitespace-pre-line"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }}
          >
            {tagline}
           
          </motion.p>

          <motion.div
            className="flex mb-8 flex-col sm:flex-row gap-4 items-center"
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

        <motion.div
          className="relative mt-10 flex w-full max-w-6xl justify-center"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }}
        >
          <div className="h-[850px] w-full sm:h-[975px] md:h-[1025px]">
            <div className="mx-auto h-full w-full max-w-5xl origin-center">
              <DomeGallery fit={0.725} fitBasis="width" minRadius={625} maxRadius={1125} padFactor={0.06} grayscale={false} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;