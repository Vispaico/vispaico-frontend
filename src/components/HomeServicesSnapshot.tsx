// src/components/HomeServicesSnapshot.tsx (Scroll-Driven Card Animations)
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Ensure motion is imported
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconDefinition, findIconDefinition, IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { faBrain, faCode, faPalette, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { getServices, Service } from '@/lib/services';
import { useCursor } from '@/context/CursorContext';

library.add(faBrain, faCode, faPalette, faBullhorn);

// Icon lookup function (keep as is)
const getIcon = (iconClass: string | null | undefined): IconDefinition | null => {
    if (!iconClass) return null;
    const parts = iconClass.trim().split(' ');
    if (parts.length !== 2) return null;
    const prefix = parts[0] as IconPrefix;
    let namePart = parts[1];
    if (namePart.startsWith('fa-')) { namePart = namePart.substring(3); }
    const iconName = namePart as IconName;
    return findIconDefinition({ prefix, iconName });
};

// --- Refined Animation Variants ---

// Variant for the Section Title/Paragraph (Simple fade/slide up)
const textFadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// Container for the grid - just needs to trigger visibility for children
const gridContainerVariants = {
    hidden: { opacity: 1 }, // Keep container visible initially
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Stagger children animation
            delayChildren: 0.1,   // Small delay before children start
        }
    }
};

// Variant for individual service cards (Slide up + Fade in)
const cardSlideUp = {
    hidden: { opacity: 0, y: 50 }, // Start further down
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};


const HomeServicesSnapshot: React.FC = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const { setIsHoveringInteractive } = useCursor();

    const handleMouseEnter = () => setIsHoveringInteractive(true);
    const handleMouseLeave = () => setIsHoveringInteractive(false);

    useEffect(() => {
        const loadServices = async () => {
            setLoading(true);
            const fetchedServices = await getServices();
            setServices(fetchedServices.slice(0, 4));
            setLoading(false);
        };
        loadServices();
    }, []);

    return (
        <motion.section
            className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900 overflow-hidden" // Added overflow-hidden to contain animations
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger section animation when 20% visible
        >
            <div className="container mx-auto px-6 text-center">
                 {/* Animate Title */}
                 <motion.h2
                     className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                     variants={textFadeUp} // Use text variant
                 >
                     Core Capabilities
                 </motion.h2>
                 {/* Animate Subtitle */}
                 <motion.p
                      className="text-lg text-gray-600 dark:text-gray-400 mb-12 md:mb-16 max-w-2xl mx-auto"
                      variants={textFadeUp} // Use text variant
                      transition={{delay: 0.1}} // Add slight delay relative to title
                 >
                     Fusing intelligence, design, and strategy to drive results.
                 </motion.p>

                {/* Services Grid */}
                {loading ? ( <div className="text-gray-500 dark:text-gray-400">Loading services...</div> )
                 : services.length > 0 ? (
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={gridContainerVariants} // Use grid container variant for staggering
                        // Inherit initial/whileInView trigger from parent section
                    >
                        {services.map((service) => {
                            const iconDef = getIcon(service.serviceDetails?.iconClass);
                            return (
                                // --- Service Card - Use cardSlideUp variant ---
                                <motion.div
                                    key={service.id}
                                    className="flex flex-col items-center p-6 md:p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-slate-700"
                                    variants={cardSlideUp} // <<< Use the slide-up variant for each card
                                >
                                    {/* Icon */}
                                    <div className="mb-5 flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                                     {iconDef ? (<FontAwesomeIcon icon={iconDef} className="h-8 w-8" />)
                                        : (<div className="h-8 w-8"></div>) }
                                    </div>
                                    {/* Title */}
                                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                                    {/* Description */}
                                    {service.serviceDetails?.shortDescription && ( <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">{service.serviceDetails.shortDescription}</p> )}
                                     {/* Learn More Link */}
                                     <Link href={`/services#${service.slug}`}
                                        className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors mt-auto"
                                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                                     >
                                         Learn More →
                                     </Link>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                ) : ( <p className="text-gray-500 dark:text-gray-400">No services to display.</p> )}

                 {/* View All Services Link - Simple fade in */}
                 <motion.div
                     className="mt-12 md:mt-16"
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1}}
                     viewport={{ once: true }}
                     transition={{ delay: 0.8, duration: 0.5}} // Delay until cards likely finished
                 >
                     <Link href="/services"
                        className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                    >
                         View All Services
                     </Link>
                 </motion.div>
            </div>
        </motion.section>
    );
};
export default HomeServicesSnapshot;