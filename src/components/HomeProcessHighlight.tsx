// src/components/HomeProcessHighlight.tsx (Visually Enhanced)
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassChart, faDraftingCompass, faRocket } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useCursor } from '@/context/CursorContext'; // Import useCursor

library.add(faMagnifyingGlassChart, faDraftingCompass, faRocket);

// Animation Variants (Keep existing ones, maybe adjust timing if needed)
const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.1 } }
};

const stepContainerVariants = {
    hidden: { opacity: 1 }, // Keep container visible
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
};

const stepItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};


const HomeProcessHighlight: React.FC = () => {
  // Get cursor handlers
  const { setIsHoveringInteractive } = useCursor();
  const handleMouseEnter = () => setIsHoveringInteractive(true);
  const handleMouseLeave = () => setIsHoveringInteractive(false);

  const processSteps = [
    { icon: faMagnifyingGlassChart, title: "Nail Your Next Move", description: "Your big picture’s sorted with a game plan that cuts through the noise and wins." },
    { icon: faDraftingCompass, title: "Craft Your Killer App", description: "Your vision gets shaped into a slick, easy-to-use digital world that hooks everyone." },
    { icon: faRocket, title: "Go Live Like a Boss", description: "Your big idea launches clean and stays firing on all cylinders, no stress." }
  ];

  return (
    <motion.section
        className="py-16 md:py-24 bg-white dark:bg-gray-900/50 relative overflow-hidden" // Changed BG slightly, ensure relative for pseudo-elements
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger slightly earlier
        variants={sectionVariants}
    >
      {/* Optional: Add subtle background pattern or shapes */}
      {/* <div className="absolute inset-0 z-[-1] opacity-5 dark:opacity-[0.02]"> */}
          {/* Example: SVG pattern or positioned shapes */}
      {/* </div> */}

      <div className="container mx-auto px-6 text-center relative z-10"> {/* Ensure content above background elements */}
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your Dream Project, Sorted and Smashing It
        </h2>
        {/* Section Subheading */}
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 md:mb-20 max-w-2xl mx-auto">
             Say goodbye to headaches—your idea gets built sharp, fast, and with zero bullshit.
        </p>

         {/* Process Steps Grid - Add relative positioning */}
         <motion.div
            className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12" // Make grid relative for pseudo-elements
            variants={stepContainerVariants}
        >
            {/* --- Optional: Connecting Line/Background Element --- */}
            {/* This pseudo-element attempts to draw a line behind the cards */}
            {/* Requires careful styling and might need adjustments based on exact layout/gaps */}
             {/* <div className="absolute hidden md:block top-1/2 left-0 right-0 h-1 bg-indigo-100 dark:bg-slate-700 -translate-y-1/2 z-[-1] w-3/4 mx-auto"></div> */}

            {processSteps.map((step, index) => (
                // Individual Step Card - Make it stand out more
                <motion.div
                    key={index}
                    className="relative z-10 flex flex-col items-center p-6 md:p-8 bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 border border-gray-200 dark:border-slate-700 transform hover:-translate-y-2" // Added hover transform
                    variants={stepItemVariants}
                    onMouseEnter={handleMouseEnter} // Add cursor effect to whole card
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Step Number (Optional visual element) */}
                    <div className="absolute -top-4 -left-4 flex items-center justify-center h-10 w-10 rounded-full bg-indigo-600 text-white font-bold text-lg shadow-md">
                        {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="mb-5 flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 border-4 border-white dark:border-slate-800 mt-4"> {/* Added border, margin-top */}
                        <FontAwesomeIcon icon={step.icon} className="h-7 w-7" /> {/* Slightly smaller icon */}
                    </div>
                    {/* Step Title */}
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
                    {/* Step Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
            ))}
         </motion.div>
      </div>
    </motion.section>
  );
};
export default HomeProcessHighlight;