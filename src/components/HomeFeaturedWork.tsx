// src/components/HomeFeaturedWork.tsx (Using getFeaturedPortfolioItems)
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
// --- Import CORRECT functions/types ---
import { getFeaturedPortfolioItems, PortfolioItem } from '@/lib/portfolio';
// ------------------------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Marquee from "react-fast-marquee";
import { useCursor } from '@/context/CursorContext';

library.add(faArrowUpRightFromSquare);

const titleVariants = { /* ... */ };

const HomeFeaturedWork: React.FC = () => {
    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
    const [loading, setLoading] = useState(true);
    const { setIsHoveringInteractive } = useCursor();
    const handleMouseEnter = () => setIsHoveringInteractive(true);
    const handleMouseLeave = () => setIsHoveringInteractive(false);

    useEffect(() => {
        const loadPortfolio = async () => {
            setLoading(true);
            // --- Call the CORRECT function ---
            const items = await getFeaturedPortfolioItems(9);
            // -------------------------------
            setPortfolioItems(items);
            setLoading(false);
        };
        loadPortfolio();
    }, []); // Empty dependency array so it runs once on mount

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-gray-900 text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.h2 /* ... title ... */> Featured Work </motion.h2>
            </div>

            {loading ? ( <div className="text-center text-gray-400 py-10">Loading projects...</div> )
             : portfolioItems.length > 0 ? (
                <Marquee gradient={true} gradientColor="15,23,42" gradientWidth={100} speed={40} pauseOnHover={true} >
                    {portfolioItems.map((item) => (
                        // --- Marquee Item Wrapper ---
                        <div key={item.id} className="mx-4 w-[400px] max-w-[70vw] md:w-[450px] lg:w-[500px] flex-shrink-0">
                            <div className="group relative overflow-hidden rounded-lg shadow-xl bg-slate-800 aspect-[16/10]" >
                                 <Link href={`/portfolio/${item.slug}`} passHref legacyBehavior>
                                     <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                         {/* Image Container */}
                                         <div className="absolute inset-0">
                                            {item.featuredImage?.node?.sourceUrl && ( <Image src={item.featuredImage.node.sourceUrl} alt={item.featuredImage.node.altText || item.title} fill sizes="(max-width: 768px) 70vw, 500px" className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" /> )}
                                         </div>
                                         {/* Overlay */}
                                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 md:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                                             <div>
                                                <h3 className="text-lg md:text-xl font-semibold mb-1 text-white drop-shadow-md">{item.title}</h3>
                                                {(item.portfolioCategories?.nodes?.length ?? 0) > 0 && ( <p className="text-xs text-indigo-300 uppercase tracking-wider mb-2 drop-shadow-sm">{(item.portfolioCategories?.nodes ?? []).map(cat => cat.name).join(', ')}</p> )}
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
                        </div> // --- End Marquee Item Wrapper ---
                    ))}
                </Marquee>
            ) : ( <p className="text-center text-gray-400 py-10">No featured projects yet.</p> )}

            <div className="container mx-auto px-6">
                 {/* View Full Portfolio Link */}
                 <motion.div className="text-center mt-12 md:mt-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1}} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.5}}>
                     <Link href="/portfolio" className="text-indigo-400 font-semibold hover:underline" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                         View Full Portfolio
                     </Link>
                 </motion.div>
            </div>
        </section>
    );
};
export default HomeFeaturedWork;