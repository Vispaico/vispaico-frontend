// src/app/portfolio/page.tsx (Corrected Syntax + Darker Overlay)
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPortfolioItems, PortfolioItem } from '@/lib/portfolio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useCursor } from '@/context/CursorContext';

library.add(faArrowUpRightFromSquare);

export default function PortfolioPage() {
    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [fetchError, setFetchError] = useState<string | null>(null);
    const { setIsHoveringInteractive } = useCursor();

    const handleMouseEnter = () => setIsHoveringInteractive(true);
    const handleMouseLeave = () => setIsHoveringInteractive(false);

    useEffect(() => {
        let isMounted = true;
        const loadData = async () => {
            if (!isMounted) return; setLoading(true); setFetchError(null);
            console.log("Fetching ALL portfolio items for /portfolio page (client)...");
            try {
                const items = await getAllPortfolioItems();
                if (isMounted) { console.log(`Fetched ${items.length} total items.`); setPortfolioItems(items); }
            } catch (error: unknown) {
                 let errorMessage = "An unknown error occurred."; if (error instanceof Error) { errorMessage = error.message; }
                 console.error("PortfolioPage: Error fetching portfolio items:", errorMessage, error);
                 if (isMounted) { setFetchError(errorMessage); setPortfolioItems([]); }
            } finally { if (isMounted) { console.log("PortfolioPage: Setting loading to false."); setLoading(false); } }
        };
        loadData();
        return () => { isMounted = false; console.log("PortfolioPage: useEffect cleanup."); };
    }, []); // End useEffect

    // --- Ensure clean before return ---

    return ( // <<< Start of return
        <div className="container mx-auto px-6 py-12 md:py-16 min-h-screen text-gray-900 dark:text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Our Work</h1>

            {/* Loading/Error/Empty States */}
            {loading && ( <p className="text-center text-gray-500 dark:text-gray-400">Loading projects...</p> )}
            {!loading && fetchError && ( <p className="text-center text-red-600 dark:text-red-400">Error loading projects: {fetchError}</p> )}
            {!loading && !fetchError && portfolioItems.length === 0 && ( <p className="text-center text-gray-500 dark:text-gray-400">No portfolio items found.</p> )}

            {/* Grid Rendering */}
            {!loading && !fetchError && portfolioItems.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {portfolioItems.map((item) => (
                       <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg bg-white dark:bg-slate-800 aspect-[4/3] border border-gray-200 dark:border-gray-700">
                           <Link href={`/portfolio/${item.slug}`} passHref legacyBehavior>
                                <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="block w-full h-full">

                                   {/* Image Container */}
                                   <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-105">
                                       {item.featuredImage?.node?.sourceUrl ? (
                                           <Image
                                               src={item.featuredImage.node.sourceUrl}
                                               alt={item.featuredImage.node.altText || item.title || 'Portfolio item image'}
                                               fill
                                               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                               className="object-cover"
                                           />
                                       ) : (
                                           <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center"><span className="text-gray-400 text-sm">No Image</span></div>
                                       )}
                                   </div>
                                   {/* End Image Container */}

                                   {/* --- Overlay with Adjusted Gradient --- */}
                                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/80 to-black/70 p-4 md:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10">
                                        {/* Overlay Content */}
                                        <div>
                                           <h3 className="text-lg md:text-xl font-semibold mb-1 text-white drop-shadow-md">{item.title ?? 'Untitled Project'}</h3>
                                        {(item.portfolioCategories?.nodes ?? []).length > 0 && ( <p className="text-xs text-indigo-300 uppercase tracking-wider mb-2 drop-shadow-sm">{(item.portfolioCategories?.nodes ?? []).map(cat => cat?.name ?? '').join(', ')}</p> )}
                                        </div>
                                        {/* Links Area */}
                                        <div className="mt-auto pt-2 flex justify-between items-center border-t border-white/20">
                                            <span className="text-sm font-medium text-white"> View Details </span>
                                            {item.portfolioItemDetails?.projecturl && (
                                                <span className="text-sm text-white" aria-label={`Visit live site for ${item.title}`} >
                                                     <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                                </span>
                                             )}
                                        </div>
                                   </div>
                                   {/* --- End Overlay --- */}

                                </a>
                           </Link>
                       </div> // End Portfolio Card div
                    ))}
                </div> // End Grid div
            )}
            {/* End Conditional Rendering */}
        </div> // End Container div
    ); // End Component Return
} // End PortfolioPage Component