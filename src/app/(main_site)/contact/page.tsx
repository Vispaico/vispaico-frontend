// src/app/contact/page.tsx (Fix Apostrophe)
import React from 'react';
import { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import ContactForm from '@/components/ContactForm'; // Import the Client Component form

library.add(faEnvelope, faPhone, faLocationDot);

export const metadata: Metadata = {
    title: 'Vispaico | Ship It. - Get In Touch',
    description: 'Contact Vispaico - Get your answers quick.',
};

// --- Main Contact Page Component (Server Component) ---
export default function ContactPage() {
    const contactEmail = "hola@vispaico.com"; // Replace if needed
    const contactPhone = "+84 (0) 936 166 892"; // Replace if needed
    const contactAddress = "Số 7, ngõ 201 đường Lạch Tray, Phường Lạch Tray, Quận Ngô Quyền, Haiphong, 180000, Vietnam"; // Replace if needed

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-6 py-16 md:py-24 min-h-screen"> {/* Base container */}
            {/* Page Header */}
            <div className="text-center mb-12 md:mb-16">
                 <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2">
                    Get In Touch
                 </h1>
                 {/* --- Use ' --- */}
                 <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                     Have a project in mind, want to schedule a intro call, or just want to learn more? We&apos;d love to hear from you.
                 </p>
                 {/* ----------------- */}
             </div>

             {/* Main Content Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

                 {/* Column 1: Contact Form Section */}
                 <div className="bg-black/20 backdrop-blur-lg border border-white/20 p-8 rounded-lg shadow-lg">
                     <h2 className="text-2xl font-semibold mb-6 text-white">Send Us a Message</h2>
                     {/* Render the Client Component Form */}
                     <ContactForm />
                 </div>

                 {/* Column 2: Contact Details Section */}
                 <div className="space-y-6 pt-2">
                    <h2 className="text-2xl font-semibold mb-6 text-white">Vispaico</h2>
                    {/* Address Detail */}
                    <div className="flex items-start space-x-4">
                       <FontAwesomeIcon icon={faLocationDot} className="h-5 w-5 text-indigo-400 mt-1 shrink-0" aria-hidden="true"/>
                       <div>
                           <h3 className="font-medium text-white">Address</h3>
                           <p className="text-gray-300">{contactAddress}</p>
                       </div>
                    </div>
                    {/* Email Detail */}
                    <div className="flex items-start space-x-4">
                        <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 text-indigo-400 mt-1 shrink-0" aria-hidden="true"/>
                        <div>
                           <h3 className="font-medium text-white">Email</h3>
                           <a href={`mailto:${contactEmail}`} className="text-gray-300 hover:text-indigo-400 transition-colors">{contactEmail}</a>
                        </div>
                    </div>
                    {/* Phone Detail */}
                    <div className="flex items-start space-x-4">
                        <FontAwesomeIcon icon={faPhone} className="h-5 w-5 text-indigo-400 mt-1 shrink-0" aria-hidden="true"/>
                        <div>
                           <h3 className="font-medium text-white">Phone</h3>
                           <a href={`tel:${contactPhone.replace(/\s|-|\(|\)/g, '')}`} className="text-gray-300 hover:text-indigo-400 transition-colors">{contactPhone}</a>
                        </div>
                    </div>
                 </div>
                 {/* End Contact Details Section */}

             </div>
             {/* End Main Content Grid */}
        </div> 
        </main> // End Main
    ); // End Component Return
   
} // End ContactPage Component