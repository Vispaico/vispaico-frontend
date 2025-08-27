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

// NEW: Child component for the card to correctly use hooks
const ServiceCard = ({ service }: { service: (typeof servicesData)[0] }) => {
    const cardRef = React.useRef<HTMLAnchorElement>(null);
    const { setIsHoveringInteractive } = useCursor();

    const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty('--x', `${x}px`);
        cardRef.current.style.setProperty('--y', `${y}px`);
    };

    const iconDef = getIcon(service.serviceDetails?.iconClass);

    return (
        <Link href={'/services/web-design/899usd-website'} passHref legacyBehavior key={service.id}>
            <motion.a
                ref={cardRef}
                id={service.slug}
                className="card-spotlight flex flex-col items-center p-8 bg-gray-50/80 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200/80 cursor-pointer"
                variants={cardSlideUp}
                onMouseMove={onMouseMove}
                onMouseEnter={() => setIsHoveringInteractive(true)}
                onMouseLeave={() => setIsHoveringInteractive(false)}
            >
                <div className="mb-5 flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600">
                    {iconDef ? (<FontAwesomeIcon icon={iconDef} className="h-8 w-8" />) : (<div className="h-8 w-8"></div>)}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-slate-900">{service.title}</h3>
                {service.serviceDetails?.shortDescription && (<p className="text-slate-600 text-sm leading-relaxed mb-4 grow">{service.serviceDetails.shortDescription}</p>)}
                <span className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors mt-auto">
                    Learn More →
                </span>
            </motion.a>
        </Link>
    );
};

const HomeServicesSnapshot: React.FC = () => {
    const { setIsHoveringInteractive } = useCursor();
    const handleMouseEnter = () => setIsHoveringInteractive(true);
    const handleMouseLeave = () => setIsHoveringInteractive(false);

    const services = servicesData.slice(0, 4);

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 text-center">
                 <motion.h2
                     className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
                     variants={textFadeUp}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                 >
                     Our Services
                 </motion.h2>

                 <motion.p
                      className="text-lg text-slate-600 mb-12 md:mb-16 max-w-2xl mx-auto"
                      variants={textFadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{delay: 0.1}}
                 >
                     From rapid website deployment to advanced AI solutions, we build what works.
                 </motion.p>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={gridContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {services.map((service) => (
                        <ServiceCard service={service} key={service.id} />
                    ))}
                </motion.div>

                 <motion.div
                     className="mt-12 md:mt-16"
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1}}
                     viewport={{ once: true }}
                     transition={{ delay: 0.8, duration: 0.5}}
                 >
                     <Link href="/services"
                        className="text-indigo-600 font-semibold hover:underline"
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