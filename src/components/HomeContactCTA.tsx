// src/components/HomeContactCTA.tsx (Added Cursor Handlers)
"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useCursor } from '@/context/CursorContext'; // <<< Import cursor hook

const sectionVariants = { /* ... keep variants ... */ };

const HomeContactCTA: React.FC = () => {
   // <<< Get cursor context function >>>
   const { setIsHoveringInteractive } = useCursor();

   // Helper functions for handlers
   const handleMouseEnter = () => setIsHoveringInteractive(true);
   const handleMouseLeave = () => setIsHoveringInteractive(false);

  return (
    <motion.section
        className="py-16 md:py-24 bg-indigo-700 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
    >
      <div className="container mx-auto px-6 text-center">
         <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build the Future?</h2>
         <p className="text-lg text-indigo-100 mb-8 max-w-xl mx-auto">Let's discuss how Vispaico can amplify your vision.</p>
          {/* --- Add handlers to Link --- */}
         <Link
            href="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-indigo-700 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Get In Touch
         </Link>
      </div>
    </motion.section>
  );
};
export default HomeContactCTA;