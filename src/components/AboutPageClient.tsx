"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// --- Team Members and Core Values Data ---
const teamMembers = [
    { name: "Niels Teitge", role: "Founder & AI Strategist", img: "/images/team/Mama-LogoPic.webp", bio: "Stoked to use AI to tackle tough business problems." },
    { name: "Do Thi Huyen", role: "Founder & Strategy Lead", img: "/images/team/mom.webp", bio: "Creating strategies to get the guys running..." },
    { name: "Lukas Kacprzak", role: "Lead Developer & Prompt Engineer", img: "/images/team/luke.webp", bio: "Turning bold ideas into slick, fast code." },
    { name: "Nguyen Thi Anh Ly", role: "Design Lead", img: "/images/team/anhLy.webp", bio: "Building cool, easy-to-use interfaces that pop." },
    { name: "Leroy Anh Minh", role: "Inspiration Engineer", img: "/images/team/leroy.webp", bio: "Inspirations for a better world..." },
];
const coreValues = [
    { title: "Mad Sparks", description: "Your visions spiked with bonkers AI and cheeky tricks, dropping something unreal." },
    { title: "Banter Kings", description: "We chinwag like old drunks, keeping it real to make your project a belter." },
    { title: "Huge Balls", description: "Your dream hits the scene like a wrecking ball, winning big and strutting hard." },
    { title: "Proper Graft", description: "We build your thing so tight it could make a nun blush, ready to slay." },
];

// --- Page Component ---
export default function AboutPageClient() {
    return (
        <div className="bg-white dark:bg-slate-900"> {/* Base background */}
            {/* Section 1: Hero Introduction */}
            <section className="relative bg-gradient-to-b from-slate-800 via-slate-900 to-gray-900 text-white py-20 md:py-32 text-center overflow-hidden">
                {/* Background Gadgets */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-48 h-48 bg-indigo-500 rounded-full mix-blend-lighten filter blur-xl opacity-30 animate-blob"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.3, scale: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                ></motion.div>
                <motion.div
                    className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-500 rounded-full mix-blend-lighten filter blur-xl opacity-30 animate-blob animation-delay-2000"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.3, scale: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                ></motion.div>
                <motion.div
                    className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-pink-500 rounded-full mix-blend-lighten filter blur-xl opacity-30 animate-blob animation-delay-4000"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.3, scale: 1 }}
                    transition={{ duration: 2, delay: 1.5 }}
                ></motion.div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.h1
                        className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        We Are Vispaico
                    </motion.h1><br />
                    <motion.p
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    >
                        We&apos;re some folks vibing to Wu-Tang, Snoop, Dre, Rancid, Sublime, Sparrer and КИНО,<br />
                        tossing together websites, apps, and ads that work smooth.<br /><br />
                        Music&apos;s got us in the zone, building stuff that doesn&apos;t make you sweat.<br /><br />
                        AI&apos;s got our back on the dull bits, like a chill mate passing you a pint,<br />
                        so your project lands easy and looks tight.<br /><br />
                        That “data-driven” or “brand equity” nonsense? Yawn city.<br /><br />
                        We like it simple, turning your idea into something sweet.<br /><br />
                        Got a plan? It&apos;ll come out dope, no hassle. Drop by when you&apos;re ready.
                    </motion.p>
                 </div>
            </section>

            {/* Section 2: Core Values */}
            <section className="py-16 md:py-24 bg-gray-50 dark:bg-slate-800">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                        What Drives Us
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value, index) => {
                            const coreValueEffects = [
                                { // Mad Sparks: Pulsating scale, intense rotation, flickering yellow glow
                                    whileHover: {
                                        scale: [1, 1.08, 1.05],
                                        rotate: [0, 10, -10, 10, -10, 0],
                                        boxShadow: ["0 0 0px rgba(255,255,0,0)", "0 0 40px 15px rgba(255,255,0,0.8)", "0 0 0px rgba(255,255,0,0)"],
                                    },
                                    transition: { duration: 0.8, ease: "easeInOut" },
                                },
                                { // Banter Kings: Chaotic wobble and bounce
                                    whileHover: {
                                        x: [0, -15, 15, -15, 15, 0],
                                        y: [0, 10, -10, 10, -10, 0],
                                        rotate: [0, -8, 8, -8, 8, 0],
                                    },
                                    transition: { duration: 0.6, ease: "easeInOut" },
                                },
                                { // Huge Balls: Squash and stretch with heavy bounce
                                    whileHover: {
                                        scaleY: [1, 0.8, 1.2, 1],
                                        scaleX: [1, 1.2, 0.8, 1],
                                        y: [0, 20, -20, 0],
                                        boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.5)",
                                    },
                                    transition: { duration: 0.7, ease: "easeOut" },
                                },
                                { // Proper Graft: Simple scale, shadow, and subtle rotation
                                    whileHover: {
                                        scale: 1.05,
                                        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                                        rotate: 1, // Subtle rotation
                                    },
                                    transition: { duration: 0.2, ease: "easeInOut" },
                                }
                            ];

                            return (
                                <motion.div
                                    key={value.title}
                                    className="p-6 bg-white dark:bg-slate-700 rounded-lg shadow-md border border-gray-100 dark:border-slate-600 text-center md:text-left"
                                    {...coreValueEffects[index]}
                                >
                                    <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">{value.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">{value.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Section 3: Meet the Team */}
            <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                        Meet the Gang
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {teamMembers.map((member) => (
                             <motion.div 
                                key={member.name} 
                                className="text-center p-4 bg-gray-50 dark:bg-slate-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-slate-700"
                                whileHover={{
                                    scale: 1.03,
                                    y: -5,
                                    boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.2), 0 4px 10px -2px rgba(0, 0, 0, 0.1), 0 0 20px 4px rgba(59, 130, 246, 0.5)",
                                    rotate: [0, -1, 1, -1, 0],
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="w-32 h-32 rounded-full mx-auto mb-4 relative overflow-hidden bg-gray-300 dark:bg-gray-600">
                                    <Image
                                        src={member.img}
                                        alt={`Photo of ${member.name}`}
                                        fill
                                        sizes="(max-width: 768px) 20vw, 128px"
                                        className="object-cover"
                                    />
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{member.name}</h4>
                                <p className="text-indigo-600 dark:text-indigo-400 text-sm mb-2">{member.role}</p>
                                <p className="text-gray-600 dark:text-gray-300 text-xs">{member.bio}</p>
                             </motion.div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Section 4: Join Us / Careers */}
             <section className="py-16 bg-gray-100 dark:bg-slate-800 text-center">
                  <div className="container mx-auto px-6">
                    <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                        Wanna join us?
                    </h3>
                    <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
                    If you&apos;re into AI and creative stuff and easy going,
                    </p>
                                         <div className="mt-8">
                      <Link href="/contact" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg">
                        drop us a line.
                      </Link>
                    </div>
                  </div>
             </section>

        </div>
    );
}