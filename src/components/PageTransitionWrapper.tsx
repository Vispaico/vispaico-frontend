// src/components/PageTransitionWrapper.tsx
"use client";

import React, { ReactNode } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';

const pageVariants: Variants = {
  initial: { opacity: 0 },
  in: { opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } },
  out: { opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

export const PageTransitionWrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} variants={pageVariants} initial="initial" animate="in" exit="out">
        {children}
      </motion.div>
    </AnimatePresence>
  );
};