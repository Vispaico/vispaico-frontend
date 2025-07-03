// src/components/ContactForm.tsx (Updated)
"use client";

import React, { useState, FormEvent } from 'react';
import { useCursor } from '@/context/CursorContext';

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
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/submit-form", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...data,
                    formType: 'contact', // Identify the form type for the backend
                }),
            });

            if (response.ok) {
                setStatus("Thanks for your message! We'll be in touch soon.");
                form.reset();
            } else {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Oops! There was a problem submitting your form.');
            }
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'An unknown network error occurred.';
            console.error("Form submission error:", error);
            setStatus(`Oops! ${errorMessage}`);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                <input
                    type="text" name="name" id="name" autoComplete="name" required disabled={submitting}
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:text-white disabled:opacity-50"
                    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                 />
            </div>
            {/* Email Field */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                <input
                    type="email" name="email" id="email" autoComplete="email" required disabled={submitting}
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:text-white disabled:opacity-50"
                    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                 />
            </div>
             {/* Company Field */}
             <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Company (Optional)</label>
                <input
                    type="text" name="company" id="company" autoComplete="organization" disabled={submitting}
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:text-white disabled:opacity-50"
                    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                 />
            </div>
            {/* Message Field */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea
                     name="message" id="message" rows={4} required disabled={submitting}
                     className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-700 dark:text-white disabled:opacity-50"
                     onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                ></textarea>
            </div>

            {/* --- HONEYPOT SPAM PROTECTION --- */}
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input type="text" name="b_name" tabIndex={-1} defaultValue="" />
            </div>
            {/* --- END HONEYPOT --- */}

            {/* Submit Button */}
            <div>
                <button
                     type="submit" disabled={submitting}
                     className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed"
                     onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                 >
                    {submitting ? 'Sending...' : 'Send Message'}
                </button>
            </div>
            {/* Status Message */}
            {status && (
                <p className={`text-sm mt-4 text-center ${status.includes('Oops') ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
                    {status}
                </p>
             )}
        </form>
    );
};

export default ContactForm;