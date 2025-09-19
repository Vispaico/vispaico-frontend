"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// --- Team Members and Core Values Data ---
const teamMembers = [
    { name: "Niels Teitge", role: "Founder & AI Strategist", img: "/images/team/Mama-LogoPic.webp", bio: "8 years building websites. Specializes in AI automation for small businesses." },
{ name: "Do Thi Huyen", role: "Founder & Strategy Lead", img: "/images/team/mom.webp", bio: "Business strategy without the consultant speak. Gets projects moving fast." },
{ name: "Lukas Kacprzak", role: "Lead Developer & Prompt Engineer", img: "/images/team/luke.webp", bio: "Full-stack developer. Builds sites that load fast and work everywhere." },
{ name: "Nguyen Thi Anh Ly", role: "Design Lead", img: "/images/team/anhLy.webp", bio: "Creates clean, professional designs that convert visitors to customers." },
{ name: "Leroy Anh Minh", role: "Project Coordinator", img: "/images/team/leroy.webp", bio: "Keeps projects on track and clients updated. No project manager fees." },
];
const coreValues = [
    { title: "Fast Delivery", description: "We build websites while agencies are still scheduling discovery calls. Speed is our advantage." },
    { title: "Straight Talk", description: "No jargon, no buzzwords, no consultant speak. We explain things in plain English." },
    { title: "Fixed Pricing", description: "One price, one timeline, no surprises. What we quote is what you pay." },
    { title: "Real Results", description: "We build websites that work for your business, not our design portfolio." },
];

// --- Page Component ---
export default function AboutPageClient() {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
            {/* Section 1: Hero Introduction */}
            <section className="relative py-20 md:py-32 text-center overflow-hidden">
                {/* Background Blobs */}
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
                        className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" as const }}
                    >
                        We Are Vispaico
                    </motion.h1><br />
                    <motion.p
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.3 }}
                    >
                        We&apos;re the team that got sick of web agencies charging $10k for 6-month projects.<br /><br />

Started Vispaico because we watched too many small businesses get burned by &quot;discovery phases,&quot; endless meetings, and surprise invoices. We figured there had to be a better way.<br /><br />

Turns out there was: build fast, charge fair, skip the BS.<br /><br />

We use AI to handle the boring stuff - content creation, image optimization, code generation - so we can focus on making your business look good online.<br /><br />

No &quot;synergistic omni-channel paradigms&quot; or other agency nonsense. Just websites that work, delivered when promised.<br /><br />

500+ businesses later, we&apos;re still building, still fast, still without the meetings.<br /><br />

Got a business that needs to get online? We&apos;ll sort it.
                    </motion.p>
                 </div>
            </section>

            {/* Section 2: Core Values */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">
                        What Drives Us
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value, index) => {
                            const coreValueEffects = [
                                { whileHover: { scale: [1, 1.08, 1.05], rotate: [0, 10, -10, 10, -10, 0], boxShadow: ["0 0 0px rgba(250, 204, 21, 0)", "0 0 40px 15px rgba(250, 204, 21, 0.7)", "0 0 0px rgba(250, 204, 21, 0)"] }, transition: { duration: 0.8, ease: "easeInOut" as const } },
                                { whileHover: { x: [0, -15, 15, -15, 15, 0], y: [0, 10, -10, 10, -10, 0], rotate: [0, -8, 8, -8, 8, 0] }, transition: { duration: 0.6, ease: "easeInOut" as const } },
                                { whileHover: { scaleY: [1, 0.8, 1.2, 1], scaleX: [1, 1.2, 0.8, 1], y: [0, 20, -20, 0], boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.5)" }, transition: { duration: 0.7, ease: "easeOut" as const } },
                                { whileHover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)", rotate: 1 }, transition: { duration: 0.2, ease: "easeInOut" as const } }
                            ];

                            return (
                                <motion.div
                                    key={value.title}
                                    className="p-6 bg-black/20 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 text-center md:text-left"
                                    {...coreValueEffects[index]}
                                >
                                    <h3 className="text-xl font-semibold mb-3 text-indigo-400">{value.title}</h3>
                                    <p className="text-gray-300 text-sm">{value.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Section 3: Meet the Team */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">
                        Meet the Gang
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {teamMembers.map((member) => (
                             <motion.div 
                                key={member.name} 
                                className="group relative text-center p-4 bg-black/20 rounded-lg shadow-lg border border-white/20 backdrop-blur-lg"
                            >
                                <div className="absolute top-0 left-0 w-full h-full rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-gradient-to-r from-orange-500 to-red-600 p-0.5">
                                    <div className="bg-slate-800 h-full w-full rounded-md"></div>
                                </div>
                                <div className="relative z-10">
                                    <div className="w-32 h-32 rounded-full mx-auto mb-4 relative overflow-hidden bg-gray-600">
                                        <Image
                                            src={member.img}
                                            alt={`Photo of ${member.name}`}
                                            fill
                                            sizes="(max-width: 768px) 20vw, 128px"
                                            className="object-cover"
                                        />
                                    </div>
                                    <h4 className="text-lg font-semibold text-white">{member.name}</h4>
                                    <p className="text-indigo-400 text-sm mb-2">{member.role}</p>
                                    <p className="text-gray-300 text-xs">{member.bio}</p>
                                </div>
                             </motion.div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Section 4: Join Us / Careers */}
             <section className="py-16 text-center">
                  <div className="container mx-auto px-6">
                    <h3 className="text-2xl font-semibold mb-6 text-white">
                        Wanna join us?
                    </h3>
                    <p className="text-center text-gray-300 mb-8 max-w-xl mx-auto">
                    If you&apos;re into AI and creative stuff and easy going,
                    </p>
                    <div className="mt-8">
                      <Link href="/contact" className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                        drop us a line.
                      </Link>
                    </div>
                  </div>
             </section>
        </div>
    );
}