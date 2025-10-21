"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// --- Team Members and Core Values Data ---
const teamMembers = [
    { name: "Niels Teitge", role: "Founder & AI Strategist", img: "/images/team/ZeFazer.webp", bio: "25 years building websites. Specializes in AI automation for small businesses." },
{ name: "Do Thi Huyen", role: "Founder & Strategy Lead", img: "/images/team/memom.webp", bio: "Business strategy without the consultant speak. Gets projects moving fast." },
{ name: "Lukas Kacprzak", role: "Lead Developer & Prompt Engineer", img: "/images/team/lukas.webp", bio: "Full-stack developer. Builds sites that load fast and work everywhere." },
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
                    <div className="flex flex-col items-center gap-12 lg:gap-16">
                        <div className="w-full lg:max-w-4xl text-center">
                            <motion.h1
                                className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" as const }}
                            >
                                We Are Vispaico
                            </motion.h1>
                            <motion.div
                                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto space-y-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.3 }}
                            >
                                <p>
                                    Hi, I&apos;m Niels. I built Vispaico because I was tired of the bullshit.
                                </p>

                                <motion.div
                                    className="flex justify-center"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.6 }}
                                >
                                    <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-purple-600 opacity-70 blur-2xl"></div>
                                        <div className="relative inset-0 w-full h-full rounded-full overflow-hidden border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl">
                                            <Image
                                                src="/images/niels.webp"
                                                alt="Portrait of a Vispaico creator"
                                                fill
                                                sizes="(max-width: 1024px) 240px, 288px"
                                                className="object-contain"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                                <p>
                                    I&apos;ve been writing code for 20+ years. Started in East Germany, worked across England,
                                    Belgium, and 15 years in Spain&mdash;mostly in the car industry, bouncing between factories and
                                    client sites.
                                </p>

                                <p>
                                    The problem? I had an authority problem. Always did. Hated being told to wait, to slow down, to
                                    &quot;follow the process&quot; when I knew we could ship faster.
                                </p>

                                <p>
                                    After two decades of global travel (airports, hotels, meetings that could&apos;ve been emails), I
                                    landed in Vietnam. Met my wife, started a family, and realized I was done moving. But I wasn&apos;t
                                    done building.
                                </p>

                                <p>
                                    So I started Vispaico in 2019. The mission was simple: build websites the way they should be
                                    built&mdash;fast, modern, no WordPress sludge, no agency markup, no waiting weeks for something
                                    that takes 24 hours.
                                </p>

                                <p>
                                    Here&apos;s what pisses me off about this industry:
                                    <br />&bull; Overpriced agencies charging $10K for a basic site
                                    <br />&bull; Slow WordPress sites that kill your credibility
                                    <br />&bull; Jargon-heavy devs who hide behind complexity
                                    <br />&bull; Waiting times that make no sense
                                </p>

                                <p>
                                    Here&apos;s what we do differently:
                                    <br />&bull; We ship in 24 hours (12 hours if you&apos;re in a rush, 6 if it&apos;s an emergency)
                                    <br />&bull; We cut everything that can be cut&mdash;AI handles the boring parts, scripts handle the
                                    tedious parts
                                    <br />&bull; We speak human, not dev jargon
                                    <br />&bull; We&apos;re in Vietnam, which means better rates and time zone magic (you brief us, we build
                                    while you sleep)
                                </p>

                                <p>
                                    The best part? I&apos;m building this with my kids. My three kids watch me work, help with small
                                    tasks, and learn that you don&apos;t need permission to build something great. My oldest son from
                                    Spain works with me full-time now.
                                </p>

                                <p>
                                    This isn&apos;t just a business. It&apos;s a lifestyle, a mindset, and a way to stay free.
                                </p>

                                <p>If you&apos;re tired of agencies that move like molasses, let&apos;s talk.</p>

                                <div className="space-y-4">
                                    <p>&mdash; Niels</p>
                                    <div>
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105"
                                        >
                                            Hit me up <span aria-hidden="true">→</span>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
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