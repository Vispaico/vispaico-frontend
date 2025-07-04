// src/components/HomeFeaturedWork.tsx (Updated to use local data)
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";
import { useCursor } from '@/context/CursorContext';

// --- CHANGE: Directly import the local portfolio data ---
import portfolioData from '@/data/portfolio.json';

// --- CHANGE: Define a type for a single project to ensure type safety ---
interface Project {
  id: string;
  title: string;
  coverImage: string;
  summary: string;
}

const HomeFeaturedWork: React.FC = () => {
    // The useCursor hook is still needed for the main "View Full Portfolio" link
    const { setIsHoveringInteractive } = useCursor();
    const handleMouseEnter = () => setIsHoveringInteractive(true);
    const handleMouseLeave = () => setIsHoveringInteractive(false);

    // --- CHANGE: Get the first 6 projects for the marquee. No fetching needed. ---
    const featuredProjects: Project[] = portfolioData.slice(0, 6);

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-gray-900 text-white overflow-hidden">
            <div className="container mx-auto px-6">
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

            {/* --- CHANGE: Simplified logic. No loading state needed. --- */}
            {featuredProjects.length > 0 ? (
                <Marquee gradient={true} gradientColor="15,23,42" gradientWidth={100} speed={40} pauseOnHover={true}>
                    {featuredProjects.map((item) => (
                        <div key={item.id} className="mx-4 w-[400px] max-w-[70vw] md:w-[450px] lg:w-[500px] flex-shrink-0">
                            <div className="group relative overflow-hidden rounded-lg shadow-xl bg-slate-800 aspect-[16/10]">
                                {/* --- CHANGE: Link now uses item.id from our local data --- */}
                                <Link href={`/portfolio/${item.id}`} passHref legacyBehavior>
                                    <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="block w-full h-full">
                                        
                                        {/* Image Container */}
                                        <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-105">
                                            {/* --- CHANGE: Use item.coverImage from our local data --- */}
                                            <Image 
                                                src={item.coverImage} 
                                                alt={item.title} 
                                                fill 
                                                sizes="(max-width: 768px) 70vw, 500px" 
                                                className="object-cover" 
                                            />
                                        </div>
                                        
                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/10 p-4 md:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10">
                                            <div>
                                                {/* --- CHANGE: Use item.title and item.summary from local data --- */}
                                                <h3 className="text-xl font-bold text-white drop-shadow-md">{item.title}</h3>
                                                <p className="text-sm text-indigo-300 drop-shadow-sm">{item.summary}</p>
                                            </div>
                                            <div className="mt-auto pt-2 border-t border-white/20">
                                                <span className="text-sm font-medium text-white">View Case Study</span>
                                            </div>
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

            {/* View Full Portfolio Link */}
            <div className="container mx-auto px-6 text-center mt-16 md:mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Link 
                        href="/portfolio" 
                        className="text-base md:text-lg text-indigo-400 font-semibold hover:underline" 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                    >
                        View Full Portfolio
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default HomeFeaturedWork;