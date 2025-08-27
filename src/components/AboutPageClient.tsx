"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// --- Data (Keep as is) ---
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

// --- NEW: Child component for Core Value Card ---
const CoreValueCard = ({ value }: { value: (typeof coreValues)[0] }) => {
    const cardRef = React.useRef<HTMLDivElement>(null);
    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty('--x', `${x}px`);
        cardRef.current.style.setProperty('--y', `${y}px`);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={onMouseMove}
            className="card-spotlight p-6 bg-gray-50/80 rounded-lg shadow-sm border border-gray-200/80 text-center md:text-left"
        >
            <h3 className="text-xl font-semibold mb-3 text-indigo-600">{value.title}</h3>
            <p className="text-slate-600 text-sm">{value.description}</p>
        </motion.div>
    );
};

// --- NEW: Child component for Team Member Card ---
const TeamMemberCard = ({ member }: { member: (typeof teamMembers)[0] }) => {
    const cardRef = React.useRef<HTMLDivElement>(null);
    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty('--x', `${x}px`);
        cardRef.current.style.setProperty('--y', `${y}px`);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={onMouseMove}
            className="card-spotlight text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200/80"
        >
            <div className="w-32 h-32 rounded-full mx-auto mb-4 relative overflow-hidden bg-gray-200">
                <Image
                    src={member.img}
                    alt={`Photo of ${member.name}`}
                    fill
                    sizes="(max-width: 768px) 20vw, 128px"
                    className="object-cover"
                />
            </div>
            <h4 className="text-lg font-semibold text-slate-900">{member.name}</h4>
            <p className="text-indigo-600 text-sm mb-2">{member.role}</p>
            <p className="text-slate-600 text-xs">{member.bio}</p>
        </motion.div>
    );
};


// --- Page Component ---
export default function AboutPageClient() {
    return (
        <div className="bg-white"> {/* Base background */}
            {/* Section 1: Hero Introduction */}
            <section className="relative bg-gray-50 text-slate-900 py-20 md:py-32 text-center overflow-hidden border-b border-gray-200">
                {/* Background Blobs - Lighter and more subtle */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-48 h-48 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.5, scale: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                ></motion.div>
                <motion.div
                    className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 0.5, scale: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                ></motion.div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.h1
                        className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-slate-900"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" as const }}
                    >
                        We Are Vispaico
                    </motion.h1><br />
                    <motion.p
                        className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.3 }}
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
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
                        What Drives Us
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value) => (
                            <CoreValueCard key={value.title} value={value} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Meet the Team */}
            <section className="py-16 md:py-24 bg-gray-50 border-t border-b border-gray-200">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
                        Meet the Gang
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {teamMembers.map((member) => (
                            <TeamMemberCard key={member.name} member={member} />
                        ))}
                    </div>
                </div>
            </section>

             {/* Section 4: Join Us / Careers */}
             <section className="py-16 bg-white text-center">
                  <div className="container mx-auto px-6">
                    <h3 className="text-2xl font-semibold mb-6 text-slate-900">
                        Wanna join us?
                    </h3>
                    <p className="text-center text-slate-600 mb-8 max-w-xl mx-auto">
                    If you&apos;re into AI and creative stuff and easy going,
                    </p>
                    <div className="mt-8">
                      <Link href="/contact" className="inline-block bg-slate-900 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg">
                        drop us a line.
                      </Link>
                    </div>
                  </div>
             </section>
        </div>
    );
}