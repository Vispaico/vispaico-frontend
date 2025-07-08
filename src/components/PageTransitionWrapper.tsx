// src/components/PageTransitionWrapper.tsx
"use client"; // Must be a client component for hooks and motion

import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation'; // Hook to get current path

// Animation variants for page transition (e.g., fade)
const pageVariants = {
  initial: {
    opacity: 0,
    // Optional: Add slight slide effect
    // x: "-100vw", // Slide in from left
    // y: 20, // Slide up
  },
  in: {
    opacity: 1,
    // x: 0, // Slide to center
    // y: 0,
    transition: {
      duration: 0.4, // Adjust duration
      ease: "easeInOut" as const,
    },
  },
  out: {
    opacity: 0,
    // Optional: Add slight slide effect on exit
    // x: "100vw", // Slide out to right
    // y: -20, // Slide down
    transition: {
      duration: 0.3, // Adjust duration
      ease: "easeInOut" as const,
    },
  },
};

export const PageTransitionWrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname(); // Get the current route path

  return (
    <AnimatePresence mode="wait"> {/* 'wait' ensures exit animation completes before enter starts */}
      <motion.div
        key={pathname} // <<< Key change triggers animation
        variants={pageVariants}
        initial="initial"
        animate="in"
        exit="out"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};