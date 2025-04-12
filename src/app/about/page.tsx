// src/app/about/page.tsx (Adding Team Image)
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image'; // <<< Re-add Image import

export const metadata: Metadata = { /* ... */ };

// --- Update teamMembers array with CORRECT image path ---
const teamMembers = [
    // Using the external URL requires next.config.js modification
    { name: "Niels V.", role: "Founder & AI Strategist", img: "https://vispaico.com/wp-content/uploads/2025/04/Mama-LogoPic.webp", bio: "Passionate about leveraging AI..." },
    // Keep placeholders for others, or update them too
    { name: "AI Assistant", role: "Lead Developer...", img: "/team/ai-placeholder.jpg", bio: "..." },
    { name: "Creative Mind", role: "Design Lead", img: "/team/creative-placeholder.jpg", bio: "..." },
];
const coreValues = [ /* ... */ ];

export default function AboutPage() {
    return (
        <div className="bg-white dark:bg-slate-900">
            {/* ... Hero, Mission, Values sections ... */}

            {/* Section 4: Meet the Team */}
            <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"> Meet the Innovators </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {teamMembers.map((member) => (
                             <div key={member.name} className="text-center p-4 bg-gray-50 dark:bg-slate-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-slate-700">
                                {/* --- Use Image Component --- */}
                                <div className="w-32 h-32 rounded-full mx-auto mb-4 relative overflow-hidden bg-gray-300 dark:bg-gray-600">
                                    {/* Use next/image - requires config for external URL */}
                                    <Image
                                        src={member.img} // Use path from array
                                        alt={`Photo of ${member.name}`}
                                        fill // Use fill to cover the container
                                        sizes="(max-width: 768px) 10vw, 128px" // Provide sizes hint
                                        className="object-cover" // Ensure image covers the area
                                    />
                                    {/* Remove placeholder IMG text */}
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{member.name}</h4>
                                <p className="text-indigo-600 dark:text-indigo-400 text-sm mb-2">{member.role}</p>
                                <p className="text-gray-600 dark:text-gray-300 text-xs">{member.bio}</p>
                             </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* ... Careers Section ... */}
        </div>
    );
}