// src/components/HomeFeaturedWork.tsx (Removed Unused FontAwesomeIcon Import)
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getFeaturedPortfolioItems, PortfolioItem } from '@/lib/portfolio'; // Uses projecturl
// --- REMOVE unused FontAwesomeIcon import ---
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';
// ----------------------------------------
import Marquee from "react-fast-marquee";
import { useCursor } from '@/context/CursorContext';

// Removed unused FontAwesome library add
// library.add(faArrowUpRightFromSquare);

// Removed unused variants previously

const HomeFeaturedWork: React.FC = () => {
    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
    const [loading, setLoading] = useState(true);
    const { setIsHoveringInteractive } = useCursor();
    const handleMouseEnter = () => setIsHoveringInteractive(true);
    const handleMouseLeave = () => setIsHoveringInteractive(false);

    useEffect(() => {
        const loadPortfolio = async () => {
            setLoading(true);
            const items = await getFeaturedPortfolioItems(9); // Fetch items for marquee
            setPortfolioItems(items);
            setLoading(false);
        };
        loadPortfolio();
    }, []); // Runs once on mount

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-gray-900 text-white overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Title */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                >
                    Featured Work
                </motion.h2>
            </div>

            {/* Marquee Section */}
            {loading ? (
                <div className="text-center text-gray-400 py-10">Loading projects...</div>
            ) : portfolioItems.length > 0 ? (
                <Marquee
                    gradient={true}
                    gradientColor={['15', '23', '42']} // Match dark background RGB
                    gradientWidth={100} // Adjust fade width if needed
                    speed={40}
                    pauseOnHover={true}
                >
                    {portfolioItems.map((item) => (
                        // Marquee Item Wrapper
                        <div key={item.id} className="mx-4 w-[400px] max-w-[70vw] md:w-[450px] lg:w-[500px] flex-shrink-0">
                            {/* Card */}
                            <div className="group relative overflow-hidden rounded-lg shadow-xl bg-slate-800 aspect-[16/10]" >
                                <Link href={`/portfolio/${item.slug}`} passHref legacyBehavior>
                                    <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                        {/* Image */}
                                        <div className="absolute inset-0">
                                            {item.featuredImage?.node?.sourceUrl && (
                                                <Image
                                                    src={item.featuredImage.node.sourceUrl}
                                                    alt={item.featuredImage.node.altText || item.title}
                                                    fill
                                                    sizes="(max-width: 768px) 70vw, 500px"
                                                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                                                />
                                            )}
                                        </div>
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 md:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                                            {/* Overlay Content */}
                                            <div>
                                                <h3 className="text-lg md:text-xl font-semibold mb-1 text-white drop-shadow-md">{item.title}</h3>
                                                {item.portfolioCategories?.nodes?.length > 0 && (
                                                    <p className="text-xs text-indigo-300 uppercase tracking-wider mb-2 drop-shadow-sm">{item.portfolioCategories.nodes.map(cat => cat.name).join(', ')}</p>
                                                )}
                                            </div>
                                            {/* Links Area */}
                                            <div className="mt-auto pt-2 flex justify-between items-center border-t border-white/20">
                                                <span className="text-sm font-medium text-white"> View Details </span>
                                                {/* Display icon only if URL exists - Icon import removed */}
                                                {item.portfolioItemDetails.projecturl && (
                                                    // You could add simple text or SVG here if needed, but icon component removed
                                                    <span className="text-sm text-white" aria-label={`Visit live site for ${item.title}`}>
                                                        {/* External Link Visual (e.g., text or basic SVG) */}
                                                        🔗
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div> // End Marquee Item Wrapper
                    ))}
                </Marquee>
            ) : (
                <p className="text-center text-gray-400 py-10">No featured projects yet.</p>
            )}

            {/* View Full Portfolio Link Section */}
            <div className="container mx-auto px-6">
                 <motion.div
                    className="text-center mt-12 md:mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5}}
                >
                     <Link
                        href="/portfolio"
                        className="text-indigo-400 font-semibold hover:underline"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                     >
                         View Full Portfolio
                     </Link>
                 </motion.div>
            </div>
        </section>
    ); // End Component Return
}; // End HomeFeaturedWork Component

export default HomeFeaturedWork; // Ensure Export is present