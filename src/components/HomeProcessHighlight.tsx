// src/components/HomeProcessHighlight.tsx
"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassChart, faDraftingCompass, faRocket } from '@fortawesome/free-solid-svg-icons';
import { useCursor } from '@/context/CursorContext';
const sectionVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5, delay: 0.1 } } };
const stepContainerVariants: Variants = { hidden: { opacity: 1 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } } };
const stepItemVariants: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
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
<motion.section className="py-16 md:py-24 bg-white dark:bg-gray-900/50 relative overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
<div className="container mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Your Dream Project, Sorted and Smashing It</h2>
<p className="text-lg text-gray-600 dark:text-gray-400 mb-12 md:mb-20 max-w-2xl mx-auto">Say goodbye to headaches—your idea gets built sharp, fast, and with zero bullshit.</p>
<motion.div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12" variants={stepContainerVariants}>
{processSteps.map((step, index) => (
<motion.div key={index} className="relative z-10 flex flex-col items-center p-6 md:p-8 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700" whileHover={{ scale: 1.03, y: -5, boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.2), 0 4px 10px -2px rgba(0, 0, 0, 0.1), 0 0 20px 4px rgba(59, 130, 246, 0.5)", rotate: [0, -1, 1, -1, 0] }} transition={{ duration: 0.3, ease: "easeInOut" }} variants={stepItemVariants} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
<div className="absolute -top-4 -left-4 flex items-center justify-center h-10 w-10 rounded-full bg-indigo-600 text-white font-bold text-lg shadow-md">{index + 1}</div>
<div className="mb-5 flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 border-4 border-white dark:border-slate-800 mt-4"><FontAwesomeIcon icon={step.icon} className="h-7 w-7" /></div>
<h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
<p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{step.description}</p>
</motion.div>
))}
</motion.div>
</div>
</motion.section>
);
};
export default HomeProcessHighlight;