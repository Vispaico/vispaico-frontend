// src/components/HomeTrustBlock.tsx (Cycling Testimonials)
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import Image from 'next/image';
import { useCursor } from '@/context/CursorContext';
// --- Import updated fetching function ---
import { getTestimonials, Testimonial } from '@/lib/testimonials';

const stripHtmlTags = (htmlString: string) => {
  const div = document.createElement('div');
  div.innerHTML = htmlString;
  return div.textContent || div.innerText || '';
};

// Animation Variants
const sectionVariants = { /* ... */ };
const logoContainerVariants = { /* ... */ };
const logoItemVariants = { /* ... */ };
// New variants for the testimonial fade transition
const testimonialSlideFade = {
  enter: (direction: number) => ({ // Direction indicates slide left/right
    x: direction > 0 ? 50 : -50, // Start slightly off-screen
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 50 : -50, // Exit slightly off-screen
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" }
  })
};

const HomeTrustBlock: React.FC = () => {
    // State for multiple testimonials and current index
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // For animation direction
    const [loadingTestimonial, setLoadingTestimonial] = useState(true);

    const { setIsHoveringInteractive } = useCursor();
    const handleMouseEnter = () => setIsHoveringInteractive(true);
    const handleMouseLeave = () => setIsHoveringInteractive(false);

    // Logos array (keep as is or update)
    const logos = [ { src: "/logos/placeholder-logo-1.svg", alt: "Client Logo Placeholder 1" }, /* ... */ ];

     // Fetch testimonials
     useEffect(() => {
        const loadTestimonials = async () => {
            setLoadingTestimonial(true);
            const fetchedTestimonials = await getTestimonials(); // Use the new function
            setTestimonials(fetchedTestimonials);
            setLoadingTestimonial(false);
        };
        loadTestimonials();
    }, []);

    // Auto-cycle testimonials
    useEffect(() => {
        if (testimonials.length <= 1) return; // Don't cycle if 0 or 1 testimonial

        const interval = setInterval(() => {
            setDirection(1); // Set direction for animation (sliding right to left)
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 7000); // Change testimonial every 7 seconds (adjust timing)

        return () => clearInterval(interval); // Clear interval on unmount
    }, [testimonials]); // Re-run if testimonials array changes


  return (
    <motion.section
        className="py-16 md:py-24 bg-gray-100 dark:bg-slate-800 overflow-hidden" // Added overflow-hidden
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}
    >
      <div className="container mx-auto px-6 text-center">
         <h2 className="text-base font-semibold text-gray-500 dark:text-gray-400 mb-8 uppercase tracking-wider">
            Big Dreamers Love What We Do
         </h2>

         {/* Logos Section */}
         <motion.div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 md:gap-x-14 lg:gap-x-20 mb-16 md:mb-20" variants={logoContainerVariants}>
             {logos.map((logo, index) => ( <motion.div key={index} variants={logoItemVariants} className="..." title={logo.alt} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></motion.div> ))}
         </motion.div>

         {/* --- Cycling Testimonial Section --- */}
         <div className="mt-16 md:mt-20 min-h-[200px] md:min-h-[180px] relative"> {/* Increased min-height slightly */}
            {loadingTestimonial ? ( <p className="text-gray-500 dark:text-gray-400 italic">Loading testimonial...</p> )
             : testimonials.length > 0 ? (
                  // AnimatePresence handles enter/exit animations
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                     <motion.figure
                        className="max-w-3xl mx-auto absolute inset-0" // Position absolute for transitions
                        key={currentIndex} // Key change triggers animation
                        custom={direction} // Pass direction to variants
                        variants={testimonialSlideFade}
                        initial="enter"
                        animate="center"
                        exit="exit"
                     >
                         <blockquote className="relative text-xl md:text-2xl italic text-gray-700 dark:text-gray-200 leading-relaxed border-l-4 border-indigo-500 pl-6 mb-6">
                             {testimonials[currentIndex].content || testimonials[currentIndex].testimonialDetails?.quoteText ? ( <p>“{stripHtmlTags(testimonials[currentIndex].content || testimonials[currentIndex].testimonialDetails.quoteText)}”</p> )
                              : ( <p>“Placeholder testimonial text...”</p> )}
                         </blockquote>
                         <figcaption className="flex items-center justify-end space-x-4 text-right">
                             <div className="flex-grow">
                                  {testimonials[currentIndex].testimonialDetails?.authorName && ( <div className="font-semibold text-gray-900 dark:text-white">{testimonials[currentIndex].testimonialDetails.authorName}</div> )}
                                  {testimonials[currentIndex].testimonialDetails?.authorTitle && ( <div className="text-sm text-gray-500 dark:text-gray-400">{testimonials[currentIndex].testimonialDetails.authorTitle}</div> )}
                                  {!testimonials[currentIndex].testimonialDetails?.authorName && ( <div className="font-semibold text-gray-900 dark:text-white">Valued Client</div> )}
                             </div>
                             {testimonials[currentIndex].featuredImage?.node?.sourceUrl && (
                                <div className="flex-shrink-0">
                                    <Image src={testimonials[currentIndex].featuredImage!.node!.sourceUrl} alt={testimonials[currentIndex].featuredImage!.node!.altText || `Photo of ${testimonials[currentIndex].testimonialDetails?.authorName}`} width={64} height={64} className="rounded-full object-cover"/>
                                </div>
                             )}
                         </figcaption>
                     </motion.figure>
                  </AnimatePresence>
             ) : (
                 <p className="text-gray-500 dark:text-gray-400 italic">No testimonials available.</p>
             )}
         </div>
         {/* --- End Cycling Testimonial Section --- */}

      </div>
    </motion.section>
  );
};
export default HomeTrustBlock;