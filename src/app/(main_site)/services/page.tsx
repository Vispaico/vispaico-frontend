// src/app/services/page.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import motion
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconDefinition, findIconDefinition, IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { faBrain, faCode, faPalette, faBullhorn } from '@fortawesome/free-solid-svg-icons';

library.add(faBrain, faCode, faPalette, faBullhorn);

// --- getIcon function definition ---
const getIcon = (iconClass: string | null | undefined): IconDefinition | null => {
    if (!iconClass) return null;
    const parts = iconClass.trim().split(' ');
    if (parts.length !== 2) return null;
    const prefix = parts[0] as IconPrefix;
    let namePart = parts[1];
    if (namePart.startsWith('fa-')) { namePart = namePart.substring(3); }
    const iconName = namePart as IconName;
    const iconDefinition = findIconDefinition({ prefix, iconName });
    return iconDefinition;
};

// --- Hardcoded Service Data ---
const servicesData = [
    {
        id: 'web-development',
        slug: '3-day-website',
        title: 'The Vispaico 3-Days Website | $899',
        serviceDetails: {
            shortDescription: 'Web & App Development as easy as one-two-three. For $899 and delivered in 3 days. Yes, for real.',
            iconClass: 'fa-solid fa-code',
        },
    },
    {
        id: 'affiliate-website',
        slug: 'affiliate-website',
        title: 'Affiliate Website | $399',
        serviceDetails: {
            shortDescription: 'A high-converting affiliate website with up to 10 product pages, delivered in 2 days.',
            iconClass: 'fa-solid fa-dollar-sign',
        },
    },
    {
        id: 'web-design',
        slug: 'web-design',
        title: 'Web Design',
        serviceDetails: {
            shortDescription: 'Here you will find all of the Vispaico packages, like the $199 Micro Site or the Landingpages.',
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

export default function ServicesPage() {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white min-h-screen">
            <div className="container mx-auto px-6 py-16 md:py-24">
                <motion.h1 
                    className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Our Services
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {servicesData.map((service) => {
                        const iconDef = getIcon(service.serviceDetails?.iconClass);
                        return (
                            <Link href={`/services/${service.slug}`} passHref legacyBehavior key={service.id}>
                                <motion.a
                                    id={service.slug}
                                    className="group relative bg-black/20 p-8 rounded-xl shadow-lg border border-white/20 backdrop-blur-lg flex flex-col items-center text-center cursor-pointer"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-gradient-to-r from-orange-500 to-red-600 p-0.5">
                                        <div className="bg-slate-800 h-full w-full rounded-lg"></div>
                                    </div>
                                    <div className="relative z-10 flex flex-col items-center text-center grow w-full">
                                        {iconDef ? (
                                            <div className="text-4xl text-indigo-400 mb-4">
                                                <FontAwesomeIcon icon={iconDef} />
                                            </div>
                                        ) : (
                                            <div className="h-[40px] mb-4"></div>
                                        )}
                                        <h2 className="text-xl font-semibold mb-2 text-white">{service.title}</h2>
                                        {service.serviceDetails?.shortDescription && (
                                            <p className="text-gray-300 text-sm grow">{service.serviceDetails.shortDescription}</p>
                                        )}
                                        <span
                                            className="text-sm font-medium text-indigo-400 group-hover:text-orange-400 transition-colors mt-4"
                                        >
                                            Learn More →
                                        </span>
                                    </div>
                                </motion.a>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
