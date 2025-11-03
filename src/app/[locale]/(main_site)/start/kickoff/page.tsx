// app/(main_site)/start/kickoff/page.tsx (Final Corrected Version)
'use client'; 

import { useState, FormEvent, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useLocale } from 'next-intl';

// --- NEW HELPER COMPONENT ---
// This safely reads the URL and renders the discount info.
function DiscountDisplay() {
    const searchParams = useSearchParams();
    const discountAmount = searchParams.get('discount');

    if (discountAmount && Number(discountAmount) > 0) {
        return (
            <div className="p-4 bg-green-900 border border-green-700 text-green-200 rounded-lg text-center">
                <p className="font-bold">Congratulations! Your <strong>${discountAmount} discount</strong> from the quiz has been applied.</p>
                {/* This hidden field is crucial for sending the data */}
                <input type="hidden" name="discount_applied" value={discountAmount} />
            </div>
        );
    }
    return null;
}

export default function KickoffPage() {
    const router = useRouter();
    const locale = useLocale();
    const [formData, setFormData] = useState({ name: '', email: '', project_details: '', b_name: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formMessage, setFormMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormMessage('');

        // Correctly read the discount value from the hidden input field
        const discountInput = (e.currentTarget.elements.namedItem('discount_applied') as HTMLInputElement);
        const discountValue = discountInput ? discountInput.value : '0';

        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-next-intl-locale': locale
                },
                body: JSON.stringify({ ...formData, formType: 'kickoff', discount: discountValue }),
            });
            const data = await response.json();
            if (!response.ok) { throw new Error(data.error || 'Something went wrong on the server.'); }
            router.push('/start/thank-you');
        } catch (error: unknown) {
            let errorMessage = 'An unknown error occurred.';
            if (error instanceof Error) { errorMessage = error.message; }
            setFormMessage(`Error: ${errorMessage}`);
            setIsSubmitting(false);
        }
    };

    return (
        // Your original parent div is preserved to maintain the layout
        <motion.div
            className="bg-gray-900 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 py-16">
                <motion.section
                    className="text-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-5xl font-bold">Great, Let&apos;s Get Started.</h1>
                    <p className="text-xl mt-4 text-gray-300">Just fill out the quick form below. This gives us everything we need to kick things off.</p>
                </motion.section>
                
                {/* Your original form with correct styling */}
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-12 space-y-6">
                    
                    {/* --- THE FIX: Place the discount display inside the form --- */}
                    <Suspense>
                        <DiscountDisplay />
                    </Suspense>

                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-gray-200 mb-2">Your Name*</label>
                        <input
                            type="text" id="name" name="name"
                            value={formData.name} onChange={handleChange} required disabled={isSubmitting}
                            autoComplete="name"
                            className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-yellow-400 focus:border-yellow-400 disabled:opacity-50"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-200 mb-2">Your Email Address*</label>
                        <input
                            type="email" id="email" name="email"
                            value={formData.email} onChange={handleChange} required disabled={isSubmitting}
                            autoComplete="email"
                            className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-yellow-400 focus:border-yellow-400 disabled:opacity-50"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="project_details" className="block text-lg font-medium text-gray-200 mb-2">Tell us about your project*</label>
                        <textarea
                            id="project_details" name="project_details"
                            rows={6} value={formData.project_details} onChange={handleChange} required disabled={isSubmitting}
                            className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-yellow-400 focus:border-yellow-400 disabled:opacity-50"
                        />
                    </div>

                    {/* HONEYPOT FIELD */}
                    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                        <input type="text" name="b_name" tabIndex={-1} value={formData.b_name} onChange={handleChange} autoComplete="off" />
                    </div>

                    {/* --- THE FIX: Your original button is preserved --- */}
                    <button type="submit" disabled={isSubmitting}
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full mt-8 inline-block text-lg transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Sending...' : 'Submit Project Details'}
                    </button>
                </form>
                
                {formMessage && <p className="mt-4 text-center text-red-400">{formMessage}</p>}
            </div>
        </motion.div>
    );
}