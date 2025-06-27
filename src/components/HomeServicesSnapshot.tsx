// src/components/HomeServicesSnapshot.tsx (REVISED)
"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconDefinition, findIconDefinition, IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { faBrain, faCode, faPalette, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { getServices, Service } from '@/lib/services';
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};


const HomeServicesSnapshot: React.FC = () => {
    // No changes to state or effects
    const [services, setServices] = React.useState<Service[]>([]);
    const [loading, setLoading] = React.useState(true);
    const { setIsHoveringInteractive } = useCursor();

    const handleMouseEnter = () => setIsHoveringInteractive(true);
    const handleMouseLeave = () => setIsHoveringInteractive(false);

    React.useEffect(() => {
        const loadServices = async () => {
            setLoading(true);
            const fetchedServices = await getServices();
            setServices(fetchedServices.slice(0, 4));
            setLoading(false);
        };
        loadServices();
    }, []);

    return (
        // ▼▼▼ CHANGE #1: Remove animation controls from the parent section. ▼▼▼
        // It's now just a standard section wrapper.
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900 overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                 {/* ▼▼▼ CHANGE #2: Add animation controls directly to the title. ▼▼▼ */}
                 <motion.h2
                     className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                     variants={textFadeUp}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }} // Trigger when 50% is visible
                 >
                     The Stuff that Make Us Tick
                 </motion.h2>

                 {/* ▼▼▼ CHANGE #3: Add animation controls directly to the subtitle. ▼▼▼ */}
                 <motion.p
                      className="text-lg text-gray-600 dark:text-gray-400 mb-12 md:mb-16 max-w-2xl mx-auto"
                      variants={textFadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{delay: 0.1}}
                 >
                     Blending smarts, slick design, and killer songs.
                 </motion.p>

                {loading ? ( <div className="text-gray-500 dark:text-gray-400">Loading services...</div> )
                 : services.length > 0 ? (
                    // ▼▼▼ CHANGE #4: Add animation controls to the grid container. ▼▼▼
                    // This is the most important change. It will now trigger the staggered
                    // animation for the cards when the *grid itself* is in view.
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={gridContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the grid is visible
                    >
                        {services.map((service) => {
                            const iconDef = getIcon(service.serviceDetails?.iconClass);
                            return (
                                // This motion.div correctly inherits the animation from its parent's stagger. NO CHANGE NEEDED HERE.
                                <motion.div
                                    key={service.id}
                                    className="flex flex-col items-center p-6 md:p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-slate-700"
                                    variants={cardSlideUp}
                                >
                                    <div className="mb-5 flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                                     {iconDef ? (<FontAwesomeIcon icon={iconDef} className="h-8 w-8" />)
                                        : (<div className="h-8 w-8"></div>) }
                                    </div>
                                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                                    {service.serviceDetails?.shortDescription && ( <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">{service.serviceDetails.shortDescription}</p> )}
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

                 {/* This "View All" link already had its own trigger, which is great. No changes needed. */}
                 <motion.div
                     className="mt-12 md:mt-16"
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1}}
                     viewport={{ once: true }}
                     transition={{ delay: 0.8, duration: 0.5}}
                 >
                     <Link href="/services"
                        className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
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