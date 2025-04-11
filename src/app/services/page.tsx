// src/app/services/page.tsx (Removed Unused Vars/Imports)
"use client";

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconDefinition, findIconDefinition, IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { faBrain, faCode, faPalette, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { getServices, Service } from '@/lib/services'; // Uses shared lib function
// --- REMOVED Unused Imports ---
// import { useCursor } from '@/context/CursorContext';
// import Link from 'next/link';
// -----------------------------

library.add(faBrain, faCode, faPalette, faBullhorn);

// --- getIcon function definition ---
// (Make sure this function is complete and correct as per previous steps)
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
// ------------------------------------


export default function ServicesPage() {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    // --- REMOVED Unused Variables ---
    // const { setIsHoveringInteractive } = useCursor();
    // const handleMouseEnter = () => setIsHoveringInteractive(true);
    // const handleMouseLeave = () => setIsHoveringInteractive(false);
    // --------------------------------

    useEffect(() => {
        const loadServices = async () => {
            setLoading(true);
            const fetchedServices = await getServices(); // Uses shared function
            setServices(fetchedServices);
            setLoading(false);
        };
        loadServices();
    }, []); // Empty dependency array

    return (
        <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white min-h-screen">
            <div className="container mx-auto px-6 py-12 md:py-16">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
                    Our Services
                </h1>

                {/* Loading / Empty / Grid States */}
                {loading ? (
                    <p className="text-center text-gray-500 dark:text-gray-400">Loading services...</p>
                 ) : services.length === 0 ? (
                    <p className="text-center text-gray-500 dark:text-gray-400">No services found.</p>
                 ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => {
                            const iconDef = getIcon(service.serviceDetails?.iconClass);
                            return (
                                // Service Card
                                <div key={service.id} id={service.slug} className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-slate-700 flex flex-col items-center text-center scroll-mt-20">
                                     {/* Icon */}
                                     {iconDef ? (
                                         <div className="text-4xl text-indigo-500 dark:text-indigo-400 mb-4">
                                             <FontAwesomeIcon icon={iconDef} />
                                         </div>
                                      ) : (
                                         <div className="h-[40px] mb-4"></div> // Placeholder space
                                     )}
                                     {/* Title */}
                                     <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h2>
                                     {/* Description */}
                                     {service.serviceDetails?.shortDescription && (
                                         <p className="text-gray-600 dark:text-gray-300 text-sm">{service.serviceDetails.shortDescription}</p>
                                     )}
                                     {/* Keep 'Learn More' link commented out / non-interactive */}
                                     {/* <Link href={`/service/${service.slug}`} className="..." onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Learn More →</Link> */}
                                </div> // End Service Card
                            );
                        })}
                    </div> // End Grid
                )}
                {/* End Conditional Rendering */}
            </div> {/* End Container */}
        </div> // End Page Wrapper
    ); // End Component Return
} // End ServicesPage Component