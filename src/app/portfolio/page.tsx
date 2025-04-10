// src/app/portfolio/page.tsx (Adding Debug Logs)
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPortfolioItems, PortfolioItem } from '@/lib/portfolio'; // Use projecturl
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useCursor } from '@/context/CursorContext';
// Import fetchGraphQL ONLY if needed for direct query inside component (we use getAllPortfolioItems now)
// import { fetchGraphQL } from '@/lib/graphql';

library.add(faArrowUpRightFromSquare);

// Query is now inside getAllPortfolioItems in lib/portfolio.ts

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
            console.log("PortfolioPage: useEffect triggered."); // Log effect start
            if (!isMounted) return;
            setLoading(true);
            setFetchError(null);
            console.log("PortfolioPage: Fetching ALL portfolio items via getAllPortfolioItems...");
            try {
                const items = await getAllPortfolioItems(); // Call the function from lib
                if (isMounted) {
                    console.log(`PortfolioPage: Fetched ${items.length} total items.`);
                    setPortfolioItems(items);
                    if (items.length === 0) {
                        console.log("PortfolioPage: Fetched data but received 0 items.");
                    }
                }
            } catch (error: any) {
                console.error("PortfolioPage: Error fetching portfolio items:", error);
                 if (isMounted) {
                    setFetchError(error.message || "An unknown error occurred during fetching.");
                    setPortfolioItems([]);
                 }
            } finally {
                 if (isMounted) {
                    console.log("PortfolioPage: Setting loading to false."); // Log before setting loading false
                    setLoading(false);
                 }
            }
        };

        loadData();

        return () => {
             console.log("PortfolioPage: useEffect cleanup."); // Log cleanup
             isMounted = false;
        }
    }, []); // Empty dependency array

    // --- ADD LOG BEFORE RETURN ---
    console.log("PortfolioPage Rendering State:", {
         loading,
         fetchError,
         itemCount: portfolioItems.length
    });
    // -----------------------------

    return (
        <div className="container mx-auto px-6 py-12 md:py-16 min-h-screen">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-900 dark:text-white">Our Work</h1>

            {/* Updated Loading/Error/Empty States */}
            {loading && (
                <p className="text-center text-gray-500 dark:text-gray-400">Loading projects...</p>
            )}
            {!loading && fetchError && (
                <p className="text-center text-red-600 dark:text-red-400">Error loading projects: {fetchError}</p>
            )}
            {!loading && !fetchError && portfolioItems.length === 0 && (
                <p className="text-center text-gray-500 dark:text-gray-400">No portfolio items found.</p>
            )}

            {/* Render Grid only if not loading, no error, and items exist */}
            {!loading && !fetchError && portfolioItems.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {portfolioItems.map((item, index) => {
                         // --- ADD LOG INSIDE MAP ---
                         console.log(`Rendering Card ${index + 1}:`, item.title);
                         // --------------------------
                         return (
                           <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg bg-white dark:bg-slate-800 aspect-[4/3] border border-gray-200 dark:border-gray-700">
                               <Link href={`/portfolio/${item.slug}`} passHref legacyBehavior>
                                    <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                       {/* Image Container */}
                                       <div className="absolute inset-0">
                                            {item.featuredImage?.node?.sourceUrl ? (
                                                 <Image
                                                     src={item.featuredImage.node.sourceUrl}
                                                     alt={item.featuredImage.node.altText || item.title}
                                                     fill
                                                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                     className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                                 />
                                             ) : (
                                                 <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center"><span className="text-gray-400 text-sm">No Image</span></div>
                                             )}
                                       </div>
                                       {/* Overlay */}
                                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 md:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                                            <div>
                                               <h3 className="text-lg md:text-xl font-semibold mb-1 text-white drop-shadow-md">{item.title}</h3>
                                            {item.portfolioCategories?.nodes && item.portfolioCategories.nodes.length > 0 ? (
                                                <p className="text-xs text-indigo-300 uppercase tracking-wider mb-2 drop-shadow-sm">
                                                    {item.portfolioCategories.nodes.map(cat => cat.name).join(', ')}
                                                </p>
                                            ) : null}
                                           </div>
                                           {/* Links Area */}
                                           <div className="mt-auto pt-2 flex justify-between items-center border-t border-white/20">
                                               <span className="text-sm font-medium text-white"> View Details </span>
                                               {item.portfolioItemDetails.projecturl && ( <span className="text-sm text-white" aria-label={`Visit live site for ${item.title}`} > <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </span> )}
                                           </div>
                                       </div>
                                    </a>
                                </Link>
                           </div>
                         );
                    })}
                </div>
            )}
            {/* End Conditional Rendering */}
        </div> // End Container
    ); // End Component Return
} // End PortfolioPage Component