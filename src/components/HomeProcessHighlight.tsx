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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};


const HomeProcessHighlight: React.FC = () => {
  // Get cursor handlers
  const { setIsHoveringInteractive } = useCursor();
  const handleMouseEnter = () => setIsHoveringInteractive(true);
  const handleMouseLeave = () => setIsHoveringInteractive(false);

  const processSteps = [
    { icon: faMagnifyingGlassChart, title: "Nail Your Next Move", description: "Your big picture sorted with a game plan that cuts through the noise and wins." },
    { icon: faDraftingCompass, title: "Craft Your Killer App", description: "Your vision gets shaped into a slick, easy-to-use digital world that hooks everyone." },
    { icon: faRocket, title: "Go Live Like a Boss", description: "Your big idea launches clean and stays firing on all cylinders, no stress." }
  ];

  return (
    <motion.section
        className="py-16 md:py-24 bg-white relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Your Dream Project, Sorted and Smashing It
        </h2>
        <p className="text-lg text-slate-600 mb-12 md:mb-20 max-w-2xl mx-auto">
             Say goodbye to headaches—your idea gets built sharp, fast, and with zero bullshit.
        </p>

         <motion.div
            className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
            variants={stepContainerVariants}
        >
            {processSteps.map((step, index) => (
                <motion.div
                    key={index}
                    className="relative z-10 flex flex-col items-center p-6 md:p-8 bg-gray-50/80 rounded-xl shadow-md border border-gray-200/80 overflow-hidden"
                    whileHover="hover"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    variants={stepItemVariants}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <motion.div 
                        className="absolute inset-[-2px] z-0 rounded-[14px] bg-[radial-gradient(circle_at_50%_50%,_rgba(249,115,22,0.3),_transparent_60%)]"
                        variants={{
                            hover: { opacity: 1, scale: 1.2, transition: { duration: 0.4, ease: 'easeOut' } },
                            initial: { opacity: 0, scale: 0.8 }
                        }}
                        initial="initial"
                    />
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="absolute -top-4 -left-4 flex items-center justify-center h-10 w-10 rounded-full bg-indigo-600 text-white font-bold text-lg shadow-md">
                            {index + 1}
                        </div>

                        <div className="mb-5 flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 border-4 border-white mt-4">
                            <FontAwesomeIcon icon={step.icon} className="h-7 w-7" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-slate-900">{step.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                </motion.div>
            ))}
         </motion.div>
      </div>
    </motion.section>
  );
};
export default HomeProcessHighlight;