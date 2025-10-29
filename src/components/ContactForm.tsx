// src/components/ContactForm.tsx (Updated)
"use client";

import React, { useState, FormEvent } from 'react';
import { useCursor } from '@/context/CursorContext';

const ContactForm: React.FC = () => {
    // ... (your existing state and handlers are perfect)
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
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...data, formType: 'contact' }),
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
            {/* Email Field */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-400 mb-1">Email Address</label>
                <input
                    type="email" name="email" id="email" autoComplete="email" required disabled={submitting}
                    className="block w-full px-4 py-3 border border-white/20 rounded-md shadow-sm placeholder-white/60 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/50 bg-white/10 text-white disabled:opacity-50 backdrop-blur-sm"
                    onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                 />
            </div>
            {/* Message Field */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-400 mb-1">Message</label>
                <textarea
                     name="message" id="message" rows={4} required disabled={submitting}
                     className="block w-full px-4 py-3 border border-white/20 rounded-md shadow-sm placeholder-white/60 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/50 bg-white/10 text-white disabled:opacity-50 backdrop-blur-sm"
                     onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                ></textarea>
            </div>
            {/* HONEYPOT FIELD */}
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input type="text" name="b_name" tabIndex={-1} defaultValue="" autoComplete="off" />
            </div>
            {/* Submit Button */}
            <div>
                <button
                     type="submit" disabled={submitting}
                     className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-lg text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                     onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                 >
                    {submitting ? 'Sending...' : 'Send Message'}
                </button>
            </div>
            {/* Status Message */}
            {status && (
                <p className={`text-sm mt-4 text-center ${status.includes('Oops') ? 'text-red-300' : 'text-green-300'}`}>
                    {status}
                </p>
             )}
        </form>
    );
};

export default ContactForm;