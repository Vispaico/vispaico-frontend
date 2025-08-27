// src/components/HeroSection.tsx

"use client";

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion, useMotionValue, useTransform } from 'framer-motion';
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

  // Mouse tracking for aurora effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const backgroundX = useTransform(mouseX, [-100, 100], ['-25%', '25%']);
  const backgroundY = useTransform(mouseY, [-100, 100], ['-25%', '25%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHoveringInteractive(false);
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">
      <HeroBackground />

      {/* Glassmorphism Panel with Aurora Effect */}
      <motion.div
        className="relative z-10 bg-white/60 backdrop-blur-xl rounded-3xl shadow-lg border border-white/20 overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3, duration: 0.5 } }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Animated Gradient Border */}
        <motion.div className="absolute inset-[-2px] z-0 rounded-[26px] bg-[radial-gradient(circle_at_50%_50%,_rgba(249,115,22,0.4),_rgba(79,70,229,0.4),_transparent_80%)] animate-[spin_5s_linear_infinite]"></motion.div>
        
        {/* Aurora Glow Effect */}
        <motion.div
          className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.8),_transparent_50%)] opacity-50"
          style={{
            translateX: backgroundX,
            translateY: backgroundY,
          }}
        />

        {/* Content Container */}
        <div className="relative z-20 flex flex-col items-center p-8 sm:p-12 md:p-16">
          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-slate-900 leading-tight tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }}
          >
            {titleLines.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < titleLines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </motion.h1>

          {/* Sub-headline/Tagline */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-10 text-slate-600 max-w-3xl font-light"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }}
          >
            {tagline}
          </motion.p>

          {/* Call to Action Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }}
          >
            <Link
              href={ctaLink}
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-indigo-500/50"
              onMouseEnter={() => setIsHoveringInteractive(true)}
              onMouseLeave={() => setIsHoveringInteractive(false)}
            >
              {ctaText}
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Down Hint */}
      <motion.div
         className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
         initial={{ opacity: 0, y: -10 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 1.5, duration: 0.5 }}
      >
         <svg className="animate-bounce w-6 h-6 text-slate-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
           <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
         </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;