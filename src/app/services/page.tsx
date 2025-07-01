// src/app/services/page.tsx (Hardcoded Data)
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
        id: 'ai-solutions',
        slug: 'ai',
        title: 'AI Solutions',
        serviceDetails: {
            shortDescription: 'Leverage cutting-edge AI to automate, optimize, and innovate your business processes.',
            iconClass: 'fa-solid fa-brain',
        },
    },
    {
        id: 'web-development',
        slug: 'webdev',
        title: 'Web & App Development',
        serviceDetails: {
            shortDescription: 'Web & App Development as easy as one-two-three. From $699 delivered in 2 days. Yes, for real.',
            iconClass: 'fa-solid fa-code',
        },
    },
    {
        id: 'graphic-design',
        slug: 'graphics',
        title: 'Graphic Design',
        serviceDetails: {
            shortDescription: 'Captivating visuals for your brand, including logos, branding, and marketing materials.',
            iconClass: 'fa-solid fa-palette',
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
        <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white min-h-screen">
            <div className="container mx-auto px-6 py-12 md:py-16">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
                    Our Services
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => {
                        const iconDef = getIcon(service.serviceDetails?.iconClass);
                        return (
                            <motion.div // Use motion.div for animation
                                key={service.id}
                                id={service.slug}
                                className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 flex flex-col items-center text-center scroll-mt-20"
                                whileHover={{
                                    scale: 1.03, // Make it slightly bigger
                                    y: -5, // Lift it up
                                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 20px 4px rgba(59, 130, 246, 0.5)", // Add blue glow
                                    rotate: [0, -1, 1, -1, 0], // Wiggle effect
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                {iconDef ? (
                                    <div className="text-4xl text-indigo-500 dark:text-indigo-400 mb-4">
                                        <FontAwesomeIcon icon={iconDef} />
                                    </div>
                                ) : (
                                    <div className="h-[40px] mb-4"></div>
                                )}
                                <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h2>
                                {service.serviceDetails?.shortDescription && (
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">{service.serviceDetails.shortDescription}</p>
                                )}
                                <Link href={`/services/web-design`}
                                    className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors mt-4"
                                >
                                    Learn More →
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
