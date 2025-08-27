"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconDefinition, findIconDefinition, IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { faBrain, faCode, faPalette, faBullhorn } from '@fortawesome/free-solid-svg-icons';

import { useCursor } from '@/context/CursorContext';

// No changes needed below this line for library, getIcon, or services logic
library.add(faBrain, faCode, faPalette, faBullhorn);

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

// --- Animation Variants (No changes needed here) ---
const textFadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const gridContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        }
    }
};

const cardSlideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};


const servicesData = [
    {
        id: 'web-development',
        slug: 'web-design',
        title: 'Websites & Landing Pages',
        serviceDetails: {
            shortDescription: 'Web & App Development as easy as one-two-three. From $899 delivered in 3 days. Yes, for real.',
            iconClass: 'fa-solid fa-code',
        },
    },
    {
        id: 'ai-solutions',
        slug: 'ai',
        title: 'AI Solutions',
        serviceDetails: {
            shortDescription: 'Leverage cutting-edge AI to automate, optimize, and innovate your business processes.',
            iconClass: 'fa-solid fa-brain',
        },
    },
    
    {
        id: 'digital-advertising',
        slug: 'ads',
        title: 'Digital Advertising',
        serviceDetails: {
            shortDescription: 'Maximize your reach and conversions with targeted digital ad campaigns.',
            iconClass: 'fa-solid fa-bullhorn',
        },
    },
];

const HomeServicesSnapshot: React.FC = () => {
    const { setIsHoveringInteractive } = useCursor();

    const handleMouseEnter = () => setIsHoveringInteractive(true);
    const handleMouseLeave = () => setIsHoveringInteractive(false);

    const services = servicesData.slice(0, 4);

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                 <motion.h2
                     className="text-3xl md:text-4xl font-bold text-white mb-4"
                     variants={textFadeUp}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                 >
                     The Stuff that Make Us Tick
                 </motion.h2>

                 <motion.p
                      className="text-lg text-gray-300 mb-12 md:mb-16 max-w-2xl mx-auto"
                      variants={textFadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{delay: 0.1}}
                 >
                     Blending smarts, slick design, and killer songs.
                 </motion.p>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={gridContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {services.map((service) => {
                        const iconDef = getIcon(service.serviceDetails?.iconClass);
                        return (
                            <Link href={'/services/web-design/899usd-website'} passHref legacyBehavior key={service.id}>
                                <motion.a
                                    id={service.slug}
                                    className="group relative flex flex-col items-center p-8 bg-black/20 rounded-xl shadow-lg border border-white/20 backdrop-blur-lg"
                                    variants={cardSlideUp}
                                >
                                    {/* Mobile default state: visible gradient border */}
                                    <div className="md:hidden absolute top-0 left-0 w-full h-full rounded-xl bg-gradient-to-r from-orange-500 to-red-600 p-0.5">
                                        <div className="bg-slate-800 h-full w-full rounded-lg"></div>
                                    </div>
                                    {/* Desktop hover state: animated gradient border */}
                                    <div className="hidden md:block absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-gradient-to-r from-orange-500 to-red-600 p-0.5">
                                        <div className="bg-slate-800 h-full w-full rounded-lg"></div>
                                    </div>
                                    <div className="relative z-10 flex flex-col items-center text-center grow w-full">
                                        <div className="mb-5 flex items-center justify-center h-16 w-16 rounded-full bg-indigo-900/50 text-indigo-400">
                                            {iconDef ? (<FontAwesomeIcon icon={iconDef} className="h-8 w-8" />)
                                                : (<div className="h-8 w-8"></div>)}
                                        </div>
                                        <h3 className="text-lg font-semibold mb-3 text-white">{service.title}</h3>
                                        {service.serviceDetails?.shortDescription && (<p className="text-gray-300 text-sm leading-relaxed mb-4 grow">{service.serviceDetails.shortDescription}</p>)}
                                        <span
                                            className="text-sm font-medium text-indigo-400 group-hover:text-orange-400 transition-colors mt-auto"
                                            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                                        >
                                            Learn More →
                                        </span>
                                    </div>
                                </motion.a>
                            </Link>
                        );
                    })}
                </motion.div>

                 <motion.div
                     className="mt-12 md:mt-16"
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1}}
                     viewport={{ once: true }}
                     transition={{ delay: 0.8, duration: 0.5}}
                 >
                     <Link href="/services"
                        className="text-indigo-400 font-semibold hover:underline"
                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                    >
                         View All Services
                     </Link>
                 </motion.div>
            </div>
        </section>
    );
};
export default HomeServicesSnapshot;