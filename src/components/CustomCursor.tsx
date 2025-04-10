// src/components/CustomCursor.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '@/context/CursorContext'; // Import the hook

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Start off-screen
  const { isHoveringInteractive, cursorText } = useCursor(); // Get state from context

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Hide cursor when mouse leaves window
    const handleMouseLeave = () => setPosition({ x: -100, y: -100 });
    document.addEventListener('mouseleave', handleMouseLeave);
    // Hide cursor initially until first move
     const handleFirstMove = () => {
        // No need to setPosition here, just remove this specific listener
        window.removeEventListener('mousemove', handleFirstMove);
     };
     window.addEventListener('mousemove', handleFirstMove);


    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleFirstMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const cursorSize = isHoveringInteractive ? 40 : 16; // Size changes on hover
  const cursorBg = isHoveringInteractive ? 'rgba(255, 255, 255, 0.3)' : 'rgba(99, 102, 241, 0.8)'; // Color changes (semi-transparent white vs indigo)

  // Basic check for touch device to hide cursor
  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  if (isTouchDevice) {
      return null; // Don't render custom cursor on touch devices
  }

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none select-none z-[9999]" // Ensure it's above everything else
      style={{
        width: cursorSize,
        height: cursorSize,
        // Center the div on the cursor position
        x: position.x - cursorSize / 2,
        y: position.y - cursorSize / 2,
        backgroundColor: cursorBg,
        // backdropFilter: isHoveringInteractive ? 'blur(2px)' : 'none', // Optional blur effect
        transition: 'width 0.2s ease-out, height 0.2s ease-out, background-color 0.2s ease-out', // Smooth transitions
      }}
      // Animate presence/scale for a nicer feel (optional)
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
       {/* Optional: Display text inside cursor when hovering */}
       {/* <AnimatePresence>
         {isHoveringInteractive && cursorText && (
            <motion.span
              key="cursor-text"
              className="absolute inset-0 flex items-center justify-center text-xs text-white font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {cursorText}
            </motion.span>
         )}
       </AnimatePresence> */}
    </motion.div>
  );
};

export default CustomCursor;