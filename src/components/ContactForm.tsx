// src/components/ContactForm.tsx (Full JSX + Backslash Escape + Linter Fixes)
"use client";

import React, { useState, FormEvent } from 'react';
import { useCursor } from '@/context/CursorContext';

// Type Guard/Interface for Formspree Errors
interface FormspreeError { field?: string; message: string; code?: string; }
interface FormspreeResponse { errors?: FormspreeError[]; }
function isFormspreeError(obj: unknown): obj is FormspreeResponse { return typeof obj === 'object' && obj !== null && Array.isArray((obj as FormspreeResponse).errors); }

const ContactForm: React.FC = () => {
    const [status, setStatus] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const { setIsHoveringInteractive } = useCursor();
    const handleMouseEnter = () => setIsHoveringInteractive(true);
    const handleMouseLeave = () => setIsHoveringInteractive(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); setSubmitting(true); setStatus('');
        const form = event.currentTarget; const data = new FormData(form);
        try {
            const response = await fetch("https://formspree.io/f/mwplwnow", { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
            if (response.ok) {
                // --- Use Backslash Escape ---
                setStatus('Thanks for your message! We\'ll be in touch soon.');
                // --------------------------
                form.reset();
            } else {
                const responseData = await response.json();
                if (isFormspreeError(responseData) && responseData.errors) { setStatus(`Oops! Error: ${responseData.errors.map((error: FormspreeError) => error.message).join(', ')}`); }
                else { setStatus('Oops! There was a problem submitting your form.'); }
            }
        } catch (error: unknown) { // Use unknown type
             let errorMessage = 'Oops! There was a network problem submitting your form.'; if (error instanceof Error) { errorMessage = error.message; } console.error("Form submission error:", errorMessage, error); setStatus(errorMessage);
        } finally { setSubmitting(false); }
    }; // End handleSubmit

    // --- Restore Full Form JSX ---
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
                <p className={`text-sm mt-4 ${status.includes('Oops') ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
                    {status}
                </p>
             )}
        </form>
    );
    // --- End Full Form JSX ---
};

export default ContactForm;