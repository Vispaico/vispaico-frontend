// src/components/CustomCursor.tsx (Removed Unused Vars/Imports)
"use client";

import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion'; // <<< Remove AnimatePresence
import { motion } from 'framer-motion'; // Keep motion for main div animation
import { useCursor } from '@/context/CursorContext';

const CustomCursor: React.FC = () => {
      const [position, setPosition] = useState({ x: -100, y: -100 });
      // --- Remove cursorText if not used ---
      // const { isHoveringInteractive, cursorText } = useCursor();
      const { isHoveringInteractive } = useCursor(); // <<< Only get needed state
      // -----------------------------------

      useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => { setPosition({ x: event.clientX, y: event.clientY }); };
        window.addEventListener('mousemove', handleMouseMove);
        const handleMouseLeave = () => setPosition({ x: -100, y: -100 });
        document.addEventListener('mouseleave', handleMouseLeave);
        const handleFirstMove = () => { window.removeEventListener('mousemove', handleFirstMove); };
        window.addEventListener('mousemove', handleFirstMove);

        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('mousemove', handleFirstMove);
          document.removeEventListener('mouseleave', handleMouseLeave);
        };
      }, []);

      const cursorSize = isHoveringInteractive ? 40 : 16;
      const cursorBg = isHoveringInteractive ? 'rgba(255, 255, 255, 0.3)' : 'rgba(99, 102, 241, 0.8)';
      const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

      if (isTouchDevice) { return null; }

      return (
        <motion.div
          className="fixed top-0 left-0 rounded-full pointer-events-none select-none z-[9999]"
          style={{
            width: cursorSize,
            height: cursorSize,
            x: position.x - cursorSize / 2,
            y: position.y - cursorSize / 2,
            backgroundColor: cursorBg,
            transition: 'width 0.2s ease-out, height 0.2s ease-out, background-color 0.2s ease-out',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
           {/* Removed conditional text rendering block */}
        </motion.div>
      );
    };

export default CustomCursor;