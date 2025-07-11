// app/start/kickoff/page.tsx (Updated with Discount Logic)
'use client'; 

import { useState, FormEvent, Suspense } from 'react'; // --- ADDED 'Suspense' ---
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
// --- ADDED: Import the hook to read URL parameters ---
import { useSearchParams } from 'next/navigation';

// --- NEW COMPONENT: This will handle the logic to avoid Suspense issues ---
function DiscountHandler() {
    const searchParams = useSearchParams();
    const discountAmount = searchParams.get('discount');

    // If a discount exists in the URL and is greater than $0, render the info block
    if (discountAmount && Number(discountAmount) > 0) {
        return (
            <motion.div 
                className="p-4 bg-green-900 border border-green-700 text-green-200 rounded-lg mb-6 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <p className="font-bold">Congratulations! Your <strong>${discountAmount} discount</strong> from the quiz has been automatically applied.</p>
                <p className="text-sm">This will be reflected in your final invoice.</p>
                {/* This hidden field will be sent with your form data */}
                <input type="hidden" name="discount_applied" value={discountAmount} />
            </motion.div>
        );
    }
    // If no discount, render nothing
    return null;
}


export default function KickoffPage() {
    const router = useRouter();
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

        // --- NEW: Manually get the discount value to include in the submission ---
        const discountInput = (e.currentTarget.elements.namedItem('discount_applied') as HTMLInputElement);
        const discountValue = discountInput ? discountInput.value : '0';

        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // Add the discount to the data sent to your API
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
        <motion.div
            className="bg-gray-900 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 py-16">
                <motion.section /* ... */ >
                    <h1 className="text-5xl font-bold">Great, Let&apos;s Get Started.</h1>
                    <p className="text-xl mt-4 text-gray-300">Just fill out the quick form below. This gives us everything we need to kick things off.</p>
                </motion.section>
                
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-12 space-y-6">
                    {/* --- NEW: The Discount Handler is wrapped in Suspense --- */}
                    <Suspense fallback={<div className="h-20"></div>}>
                        <DiscountHandler />
                    </Suspense>

                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-gray-200 mb-2">Your Name*</label>
                        <input /* ... */ />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-200 mb-2">Your Email Address*</label>
                        <input /* ... */ />
                    </div>
                    
                    <div>
                        <label htmlFor="project_details" className="block text-lg font-medium text-gray-200 mb-2">Tell us about your project*</label>
                        <textarea /* ... */ />
                    </div>

                    {/* HONEYPOT FIELD */}
                    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                        <input type="text" name="b_name" tabIndex={-1} value={formData.b_name} onChange={handleChange} autoComplete="off" />
                    </div>

                    <button type="submit" /* ... */ >
                        {isSubmitting ? 'Sending...' : 'Submit Project Details'}
                    </button>
                </form>
                
                {formMessage && <p className="mt-4 text-center text-red-400">{formMessage}</p>}
            </div>
        </motion.div>
    );
}