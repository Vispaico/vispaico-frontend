// src/components/AboutPageClient.tsx

'use client'; 

import React, { useState, useEffect } from 'react';
// --- FIX: Import the 'Target' and 'Transition' types for robust typing ---
import { motion, AnimatePresence, Transition, Target } from 'framer-motion';
import Image from 'next/image';

// Type definitions remain the same
interface CoreValue { title: string; description: string; icon: string; }
interface AboutPageContent { intro: { title: string; subtitle: string; text: string; imageUrl: string; }; coreValues: { title: string; values: CoreValue[]; }; }

// --- FIX: Define a robust type for our animation objects using official Framer Motion types ---
type CoreValueEffect = {
  whileHover: Target; // Use the 'Target' type for hover animations
  transition: Transition; // Use the 'Transition' type for the transition object
};

// --- FIX: Apply the new type to our array. The values are already correct. ---
const coreValueEffects: CoreValueEffect[] = [
    {
        whileHover: { scale: [1, 1.1, 1.05], rotate: [0, 5, -5, 0], boxShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 8px 20px rgba(0,0,0,0.2)", "0px 2px 10px rgba(0,0,0,0.1)"] },
        transition: { duration: 0.5, ease: "easeInOut" }
    },
    {
        whileHover: { x: [-5, 5, -5, 5, 0] },
        transition: { duration: 0.4, ease: "easeInOut" }
    },
    {
        whileHover: { y: [-5, 5, -3, 3, 0] },
        transition: { duration: 0.4, ease: "easeInOut" }
    },
    {
        whileHover: { scaleY: [1, 0.95, 1.05, 1], scaleX: [1, 1.05, 0.95, 1] },
        transition: { duration: 0.5, ease: "easeInOut" }
    }
];

const AboutPageClient = () => {
    const [content, setContent] = useState<AboutPageContent | null>(null);
    useEffect(() => {
        // Using dummy data to ensure component is self-contained for build
        const dummyData: AboutPageContent = {
            intro: { title: "Our Ethos", subtitle: "Driven by Innovation, Defined by Results", text: "We are a collective of designers, developers, and strategists who believe in the power of technology to solve problems and create opportunities. We thrive on challenges and are dedicated to crafting solutions that are not only aesthetically pleasing but also exceptionally functional.", imageUrl: "/images/about-hero.jpg" },
            coreValues: { title: "Our Core Values", values: [ { title: "Client-Centric", description: "Your success is our primary metric. We align our goals with yours.", icon: "users" }, { title: "Radical Candor", description: "We communicate openly and honestly, even when it's difficult.", icon: "comments" }, { title: "Pragmatic Innovation", description: "We use cutting-edge tech that serves a real purpose, not just for show.", icon: "lightbulb" }, { title: "Elegant Execution", description: "From code to design, we pursue quality and craftsmanship in everything we do.", icon: "gem" } ] }
        };
        setContent(dummyData);
    }, []);

    if (!content) return <div className="min-h-screen flex justify-center items-center">Loading...</div>;
    const { intro, coreValues } = content;

    return (
        <div className="container mx-auto px-6 py-12 md:py-16">
            <section id="intro" className="grid md:grid-cols-2 gap-10 items-center mb-16 md:mb-24">
                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{intro.title}</h1>
                    <h2 className="text-2xl text-indigo-400 dark:text-yellow-400 mb-6">{intro.subtitle}</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300">{intro.text}</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
                    <Image src={intro.imageUrl} alt="Our Team" width={600} height={400} className="rounded-lg shadow-xl" />
                </motion.div>
            </section>
            <section id="core-values">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{coreValues.title}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <AnimatePresence>
                        {coreValues.values.map((value, index) => (
                            <motion.div key={value.title} className="p-6 bg-white dark:bg-slate-700 rounded-lg shadow-md border border-gray-100 dark:border-slate-600 text-center md:text-left" {...coreValueEffects[index % coreValueEffects.length]}>
                                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>
        </div>
    );
};
export default AboutPageClient;