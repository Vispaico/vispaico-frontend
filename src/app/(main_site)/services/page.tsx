// src/app/(main_site)/services/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faCode, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import WebServiceSlider from '@/components/WebServiceSlider'; // Import the new slider

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ServicesPage() {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white min-h-screen">
            <div className="container mx-auto px-6 py-16 md:py-24">
                <motion.h1 
                    className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Our Services
                </motion.h1>

                <motion.div 
                    className="space-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Web Design Card */}
                    <motion.div variants={itemVariants} className="bg-black/20 p-8 rounded-2xl shadow-lg border border-white/20 backdrop-blur-lg">
                        <div className="flex flex-col md:flex-row md:items-center gap-8">
                            <div className="md:w-1/3 text-center md:text-left">
                                <FontAwesomeIcon icon={faCode} className="text-5xl text-indigo-400 mb-4" />
                                <h2 className="text-3xl font-bold mb-2">Web Design</h2>
                                <p className="text-gray-300 mb-6">Fast builds or monster platforms, designed to perform, cutting the crap.</p>
                                <Link href="/services/web-design" className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                                    View All Web Packages
                                </Link>
                            </div>
                            <div className="md:w-2/3">
                                <WebServiceSlider />
                            </div>
                        </div>
                    </motion.div>

                    {/* AI Solutions Card */}
                    <motion.div variants={itemVariants} className="bg-black/20 p-8 rounded-2xl shadow-lg border border-white/20 backdrop-blur-lg">
                         <div className="flex flex-col md:flex-row md:items-center gap-8">
                            <div className="md:w-1/3 text-center md:text-left">
                                <FontAwesomeIcon icon={faBrain} className="text-5xl text-indigo-400 mb-4" />
                                <h2 className="text-3xl font-bold mb-2">AI Solutions</h2>
                                <p className="text-gray-300">Leverage cutting-edge AI to automate, optimize, and innovate your business processes.</p>
                            </div>
                            <div className="md:w-2/3 text-center md:text-right">
                                <Link href="/services/ai" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Digital Advertising Card */}
                    <motion.div variants={itemVariants} className="bg-black/20 p-8 rounded-2xl shadow-lg border border-white/20 backdrop-blur-lg">
                        <div className="flex flex-col md:flex-row md:items-center gap-8">
                            <div className="md:w-1/3 text-center md:text-left">
                                <FontAwesomeIcon icon={faBullhorn} className="text-5xl text-indigo-400 mb-4" />
                                <h2 className="text-3xl font-bold mb-2">Digital Advertising</h2>
                                <p className="text-gray-300">Maximize your reach and conversions with targeted digital ad campaigns.</p>
                            </div>
                             <div className="md:w-2/3 text-center md:text-right">
                                <Link href="/services/ads" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}