// src/app/contact/page.tsx (Imports separate ContactForm component)
import React from 'react';
import { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link'; // Keep Link if needed for other parts
// --- Import the new ContactForm component ---
import ContactForm from '@/components/ContactForm';

library.add(faEnvelope, faPhone, faLocationDot);

export const metadata: Metadata = {
    title: 'Contact Vispaico | Get In Touch',
    description: 'Contact Vispaico to discuss your AI, design, development, or advertising project. Let\'s build the future together.',
};


// --- Main Contact Page Component (Can stay Server Component) ---
export default function ContactPage() {
    const contactEmail = "hola@vispaico.com";
    const contactPhone = "+84 (0) 936 166 892"; // Placeholder
    const contactAddress = "23/32 To 2 Xom Trung, Ngo Quyen, Haiphong, Vietnam"; // Placeholder

    return (
        <div className="container mx-auto px-6 py-16 md:py-24 min-h-screen">
            <div className="text-center mb-12 md:mb-16">
                 <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                    Get In Touch
                 </h1>
                 <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                     Have a project in mind or just want to learn more? We'd love to hear from you.
                 </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                 {/* Column 1: Contact Form */}
                 <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700">
                     <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Send Us a Message</h2>
                     {/* --- Use the imported ContactForm component --- */}
                     <ContactForm />
                 </div>

                 {/* Column 2: Contact Details (No changes needed here) */}
                 <div className="space-y-6 pt-2">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Information</h2>
                    {/* Address */}
                    <div className="flex items-start space-x-4">
                       <FontAwesomeIcon icon={faLocationDot} className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
                       <div>
                           <h3 className="font-medium text-gray-900 dark:text-white">Address</h3>
                           <p className="text-gray-600 dark:text-gray-300">{contactAddress}</p>
                       </div>
                    </div>
                    {/* Email */}
                    <div className="flex items-start space-x-4">
                        <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
                        <div>
                           <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                           <a href={`mailto:${contactEmail}`} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{contactEmail}</a>
                        </div>
                    </div>
                    {/* Phone */}
                    <div className="flex items-start space-x-4">
                        <FontAwesomeIcon icon={faPhone} className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
                        <div>
                           <h3 className="font-medium text-gray-900 dark:text-white">Phone</h3>
                           <a href={`tel:${contactPhone.replace(/\s/g, '')}`} className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{contactPhone}</a>
                        </div>
                    </div>
                 </div>
             </div>
        </div>
    );
}