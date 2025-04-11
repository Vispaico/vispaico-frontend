// src/components/HomeFeaturedWork.tsx (Check portfolioItems before length)
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getFeaturedPortfolioItems, PortfolioItem } from '@/lib/portfolio'; // Uses projecturl
import Marquee from "react-fast-marquee";
import { useCursor } from '@/context/CursorContext';
// Removed FontAwesome import as it's not used here anymore
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';
// library.add(faArrowUpRightFromSquare);


const HomeFeaturedWork: React.FC = () => {
    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]); // Initialize as empty array
    const [loading, setLoading] = useState(true);
    const { setIsHoveringInteractive } = useCursor();
    const handleMouseEnter = () => setIsHoveringInteractive(true);
    const handleMouseLeave = () => setIsHoveringInteractive(false);

    useEffect(() => {
        let isMounted = true; // Prevent state update on unmounted component
        const loadPortfolio = async () => {
            if (!isMounted) return; setLoading(true);
            try {
                const items = await getFeaturedPortfolioItems(9);
                if (isMounted) setPortfolioItems(items || []); // Ensure it's always an array
            } catch (error) {
                console.error("Error fetching featured portfolio:", error);
                if (isMounted) setPortfolioItems([]); // Set empty on error
            } finally {
                if (isMounted) setLoading(false);
            }
        };
        loadPortfolio();
        return () => { isMounted = false; } // Cleanup
    }, []);

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-gray-900 text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} >
                    Featured Work
                </motion.h2>
            </div>

            {/* --- Updated Conditional Logic --- */}
            {loading ? (
                <div className="text-center text-gray-400 py-10">Loading projects...</div>
            ) : portfolioItems && portfolioItems.length > 0 ? ( // <<< Check portfolioItems itself first
                <Marquee gradient={true} gradientColor="15,23,42" gradientWidth={100} speed={40} pauseOnHover={true} >
                    {portfolioItems.map((item) => (
                        <div key={item.id} className="mx-4 w-[400px] max-w-[70vw] md:w-[450px] lg:w-[500px] flex-shrink-0">
                            <div className="group relative overflow-hidden rounded-lg shadow-xl bg-slate-800 aspect-[16/10]" >
                                <Link href={`/portfolio/${item.slug}`} passHref legacyBehavior>
                                    <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="block w-full h-full">
                                        {/* Image Container */}
                                        <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-105">
                                            {item.featuredImage?.node?.sourceUrl && ( <Image src={item.featuredImage.node.sourceUrl} alt={item.featuredImage.node.altText || item.title || ''} fill sizes="(max-width: 768px) 70vw, 500px" className="object-cover" /> )}
                                            {!item.featuredImage?.node?.sourceUrl && ( <div className="..."><span className="...">No Image</span></div> )}
                                        </div>
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/10 p-4 md:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10">
                                            <div> <h3 className="..."> {item.title ?? '...'} </h3> {/* Categories */} </div>
                                            <div className="mt-auto pt-2 flex ..."> <span className="..."> View Details </span> {/* Link Icon Placeholder */} </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    ))}
                </Marquee>
            ) : (
                <p className="text-center text-gray-400 py-10">No featured projects yet.</p>
            )}
             {/* --- End Update --- */}

            {/* View Full Portfolio Link */}
            <div className="container mx-auto px-6"> <motion.div className="..." /* ... */ > <Link href="/portfolio" className="..." onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} > View Full Portfolio </Link> </motion.div> </div>
        </section>
    );
};
export default HomeFeaturedWork;