'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { dur, ease } from '@/lib/motion';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  as?: 'div' | 'span' | 'li' | 'section' | 'p' | 'h1' | 'h2' | 'h3';
};

// Generic in-view reveal. Respects reduced-motion.
export default function Reveal({
  children,
  delay = 0,
  y = 16,
  duration = dur.slow,
  className,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduce) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </MotionTag>
  );
}
