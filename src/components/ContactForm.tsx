// src/components/ContactForm.tsx
"use client"; // Mark as Client Component

import React, { useState, FormEvent } from 'react'; // Import React, hooks, types
import { useCursor } from '@/context/CursorContext'; // Import cursor hook

// Renamed component to match filename convention (optional but good practice)
const ContactForm: React.FC = () => {
    const [status, setStatus] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const { setIsHoveringInteractive } = useCursor();

    const handleMouseEnter = () => setIsHoveringInteractive(true);
    const handleMouseLeave = () => setIsHoveringInteractive(false);


    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitting(true);
        setStatus('');

        const form = event.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mwplwnow", { // Your endpoint
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                setStatus('Thanks for your message! We\'ll be in touch soon.');
                form.reset();
            } else {
                const responseData = await response.json();
                if (responseData.errors?.length > 0) {
                    setStatus(`Oops! Error: ${responseData.errors.map((error: any) => error.message).join(', ')}`);
                } else {
                    setStatus('Oops! There was a problem submitting your form.');
                }
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus('Oops! There was a network problem submitting your form.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        // Form JSX remains the same as before
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                <input type="text" name="name" id="name" autoComplete="name" required disabled={submitting}
                       className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:text-white disabled:opacity-50"
                       onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                <input type="email" name="email" id="email" autoComplete="email" required disabled={submitting}
                       className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:text-white disabled:opacity-50"
                       onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
            </div>
             <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company (Optional)</label>
                <input type="text" name="company" id="company" autoComplete="organization" disabled={submitting}
                       className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:text-white disabled:opacity-50"
                       onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea name="message" id="message" rows={4} required disabled={submitting}
                          className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:text-white disabled:opacity-50"
                          onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ></textarea>
            </div>
            <div>
                <button type="submit" disabled={submitting}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed"
                        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
                    {submitting ? 'Sending...' : 'Send Message'}
                </button>
            </div>
            {status && ( <p className={`text-sm mt-4 ${status.includes('Oops') ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>{status}</p> )}
        </form>
    );
};

export default ContactForm; // Export the component