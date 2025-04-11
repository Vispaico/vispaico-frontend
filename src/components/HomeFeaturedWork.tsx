// src/components/HomeFeaturedWork.tsx (Removed gradientColor Prop)
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getFeaturedPortfolioItems, PortfolioItem } from '@/lib/portfolio'; // Uses projecturl
// Removed unused FontAwesomeIcon import
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';
import Marquee from "react-fast-marquee";
import { useCursor } from '@/context/CursorContext';

// Removed unused FontAwesome library add
// library.add(faArrowUpRightFromSquare);

// Removed unused variants

const HomeFeaturedWork: React.FC = () => {
    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
    const [loading, setLoading] = useState(true);
    const { setIsHoveringInteractive } = useCursor();
    const handleMouseEnter = () => setIsHoveringInteractive(true);
    const handleMouseLeave = () => setIsHoveringInteractive(false);

    useEffect(() => {
        const loadPortfolio = async () => {
            setLoading(true);
            const items = await getFeaturedPortfolioItems(9);
            setPortfolioItems(items);
            setLoading(false);
        };
        loadPortfolio();
    }, []);

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-gray-900 text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }}
                > Featured Work </motion.h2>
            </div>

            {loading ? ( <div className="text-center text-gray-400 py-10">Loading projects...</div> )
             : portfolioItems.length > 0 ? (
                <Marquee
                    gradient={true}
                    // gradientColor={['15', '23', '42']} // <<< REMOVED THIS PROP
                    gradientWidth={150} // Increased width slightly
                    speed={40}
                    pauseOnHover={true}
                >
                    {portfolioItems.map((item) => (
                        <div key={item.id} className="mx-4 w-[400px] max-w-[70vw] md:w-[450px] lg:w-[500px] flex-shrink-0">
                            <div className="group relative overflow-hidden rounded-lg shadow-xl bg-slate-800 aspect-[16/10]" >
                                 <Link href={`/portfolio/${item.slug}`} passHref legacyBehavior>
                                     <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="block w-full h-full">
                                         {/* Image & Overlay */}
                                         <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-105">
                                            {item.featuredImage?.node?.sourceUrl && ( <Image src={item.featuredImage.node.sourceUrl} alt={item.featuredImage.node.altText || item.title || ''} fill sizes="..." className="object-cover" /> )}
                                            {!item.featuredImage?.node?.sourceUrl && ( <div className="..."><span className="...">No Image</span></div> )}
                                         </div>
                                         <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/10 p-4 md:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10">
                                             <div><h3 className="..."> {item.title ?? '...'} </h3> {/* Categories */} </div>
                                             <div className="..."> <span className="..."> View Details </span> {/* Link Icon Placeholder */} </div>
                                         </div>
                                     </a>
                                 </Link>
                            </div>
                        </div>
                    ))}
                </Marquee>
            ) : ( <p className="...">No featured projects yet.</p> )}

            <div className="container mx-auto px-6">
                 <motion.div className="..." /* Animation */ >
                     <Link href="/portfolio" className="..." onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} > View Full Portfolio </Link>
                 </motion.div>
            </div>
        </section>
    );
};
export default HomeFeaturedWork;