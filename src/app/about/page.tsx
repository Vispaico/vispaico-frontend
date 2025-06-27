// src/app/about/page.tsx (Final Apostrophe Fix - Complete Code)
import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image'; // Keep Image import
import Link from 'next/link';

// --- Page Metadata ---
export const metadata: Metadata = {
    title: 'About Vispaico | AI, Design & Development Agency',
    description: 'Learn about Vispaico\'s mission, values, and the innovative team blending AI, creativity, and technology to build impactful digital solutions.',
};
// --- Team Members and Core Values Data ---
const teamMembers = [
    { name: "Niels Teitge", role: "Founder & AI Strategist", img: "https://vispaico.com/wp-content/uploads/2025/04/Mama-LogoPic.webp", bio: "Stoked to use AI to tackle tough business problems." },
    { name: "Do Thi Huyen", role: "Founder & Strategy Lead", img: "https://vispaico.com/wp-content/uploads/2025/04/mom.webp", bio: "Creating strategies to get the guys running..." },
    { name: "Lukas Kacprzak", role: "Lead Developer & Prompt Engineer", img: "https://vispaico.com/wp-content/uploads/2025/04/luke.webp", bio: "Turning bold ideas into slick, fast code." },
    { name: "Nguyen Thi Anh Ly", role: "Design Lead", img: "https://vispaico.com/wp-content/uploads/2025/04/anhLy.webp", bio: "Building cool, easy-to-use interfaces that pop." },
    { name: "Leroy Anh Minh", role: "Inspiration Engineer", img: "https://vispaico.com/wp-content/uploads/2025/04/leroy.webp", bio: "Inspirations for a better world..." },
];
const coreValues = [
    { title: "Mad Sparks", description: "Your vision&apos;s spiked with bonkers AI and cheeky tricks, dropping something unreal." },
    { title: "Banter Kings", description: "We chinwag like old drunks, keeping it real to make your project a belter." },
    { title: "Huge Balls", description: "Your dream hits the scene like a wrecking ball, winning big and strutting hard." },
    { title: "Proper Graft", description: "We build your thing so tight it could make a nun blush, ready to slay." },
];


// --- Page Component ---
export default function AboutPage() {
    return (
        <div className="bg-white dark:bg-slate-900"> {/* Base background */}
            {/* Section 1: Hero Introduction */}
            <section className="relative bg-gradient-to-b from-slate-800 via-slate-900 to-gray-900 text-white py-20 md:py-32 text-center overflow-hidden">
                 <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                        We Are Vispaico
                    </h1><br />
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        We&apos;re some folks vibing to Wu-Tang, Snoop, Dre, Rancid, Sublime, Sparrer and КИНО,<br />
                        tossing together websites, apps, and ads that work smooth.<br /><br />
                        Music&apos;s got us in the zone, building stuff that doesn&apos;t make you sweat.<br /><br />
                        AI&apos;s got our back on the dull bits, like a chill mate passing you a pint,<br />
                        so your project lands easy and looks tight.<br /><br />
                        That “data-driven” or “brand equity” nonsense? Yawn city.<br /><br />
                        We like it simple, turning your idea into something sweet.<br /><br />
                        Got a plan? It&apos;ll come out dope, no hassle. Drop by when you&apos;re ready.
                    </p>
                 </div>
            </section>

            {/* Section 2: Core Values */}
            <section className="py-16 md:py-24 bg-gray-50 dark:bg-slate-800">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                        What Drives Us
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value) => (
                            <div key={value.title} className="p-6 bg-white dark:bg-slate-700 rounded-lg shadow-md border border-gray-100 dark:border-slate-600 text-center md:text-left">
                                <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">{value.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">{value.description}</p>
                            </div>
                        ))}
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
                             <div key={member.name} className="text-center p-4 bg-gray-50 dark:bg-slate-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-slate-700">
                                <div className="w-32 h-32 rounded-full mx-auto mb-4 relative overflow-hidden bg-gray-300 dark:bg-gray-600">
                                    {/* Image Component for team member */}
                                    <Image
                                        src={member.img} // Use path from array
                                        alt={`Photo of ${member.name}`}
                                        fill // Use fill to cover the container
                                        sizes="(max-width: 768px) 20vw, 128px" // Adjust sizes hint
                                        className="object-cover" // Ensure image covers the area
                                        // Add 'unoptimized' prop if using external SVGs for placeholders later
                                    />
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{member.name}</h4>
                                <p className="text-indigo-600 dark:text-indigo-400 text-sm mb-2">{member.role}</p>
                                <p className="text-gray-600 dark:text-gray-300 text-xs">{member.bio}</p>
                             </div>
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
                    {/* --- Correct Apostrophe --- */}
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

        </div> // End main wrapper div
    ); // End component return
    
} // End AboutPage component