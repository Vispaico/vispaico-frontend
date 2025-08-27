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
        className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your Dream Project, Sorted and Smashing It
        </h2>
        <p className="text-lg text-gray-300 mb-12 md:mb-20 max-w-2xl mx-auto">
             Say goodbye to headaches—your idea gets built sharp, fast, and with zero bullshit.
        </p>

         <motion.div
            className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
            variants={stepContainerVariants}
        >
            {processSteps.map((step, index) => (
                <motion.div
                    key={index}
                    className="group relative flex flex-col items-center p-8 bg-black/20 rounded-xl shadow-lg border border-white/20 backdrop-blur-lg"
                    variants={stepItemVariants}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="md:hidden absolute top-0 left-0 w-full h-full rounded-xl bg-gradient-to-r from-orange-500 to-red-600 p-0.5">
                        <div className="bg-slate-800 h-full w-full rounded-lg"></div>
                    </div>
                    <div className="hidden md:block absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-gradient-to-r from-orange-500 to-red-600 p-0.5">
                        <div className="bg-slate-800 h-full w-full rounded-lg"></div>
                    </div>
                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="absolute -top-10 -left-10 flex items-center justify-center h-10 w-10 rounded-full bg-indigo-600 text-white font-bold text-lg shadow-md">
                            {index + 1}
                        </div>
                        <div className="mb-5 flex items-center justify-center h-16 w-16 rounded-full bg-indigo-900/50 text-indigo-400 border-4 border-slate-800 mt-4">
                            <FontAwesomeIcon icon={step.icon} className="h-7 w-7" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                    </div>
                </motion.div>
            ))}
         </motion.div>
      </div>
    </motion.section>
  );
};
export default HomeProcessHighlight;