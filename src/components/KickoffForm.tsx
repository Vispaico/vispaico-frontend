// components/KickoffForm.tsx
'use client';

import { useState, FormEvent, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';

function ServiceInfo({ serviceName, discountAmount }: { serviceName: string | null, discountAmount: string | null }) {
    const serviceDisplayNames: { [key: string]: string } = {
        '24-hour-express-website': '24-Hour Express Website',
        'three-day-business-website': '3-Day Business Website',
        'high-converting-sales-page': 'The High-Converting Sales Page',
        'the-vispaico-bazooka': 'The Vispaico BAZOOKA',
        'full-online-store': 'The Full Online Store',
    };

    const displayName = serviceName ? serviceDisplayNames[serviceName] : 'Service';

    return (
        <div className="p-6 bg-black/20 backdrop-blur-lg border border-white/20 rounded-lg text-center mb-6">
            <p className="font-bold">Get started with your: <strong>{displayName}</strong></p>
            {discountAmount && Number(discountAmount) > 0 && (
                <p className="font-bold mt-2">With a <strong>${discountAmount} discount</strong> applied.</p>
            )}
            <input type="hidden" name="service_name" value={serviceName || ''} />
            <input type="hidden" name="discount_applied" value={discountAmount || '0'} />
        </div>
    );
}

export default function KickoffForm({ service, discount, className, showServiceInfo = true }: { service?: string, discount?: string, className?: string, showServiceInfo?: boolean }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState({ name: '', email: '', project_details: '', b_name: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formMessage, setFormMessage] = useState('');

    const serviceName = service || searchParams.get('service');
    const discountAmount = discount || searchParams.get('discount');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormMessage('');

        const serviceInput = (e.currentTarget.elements.namedItem('service_name') as HTMLInputElement);
        const discountInput = (e.currentTarget.elements.namedItem('discount_applied') as HTMLInputElement);
        
        const serviceValue = serviceInput ? serviceInput.value : serviceName || '';
        const discountValue = discountInput ? discountInput.value : discountAmount || '0';
        const formType = serviceValue === 'three-day-business-website' ? 'kickoff' : 'dynamic_kickoff';

        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, formType, service: serviceValue, discount: discountValue }),
            });
            const data = await response.json();
            if (!response.ok) { throw new Error(data.error || 'Something went wrong on the server.'); }
            router.push(`/kickoff/thank-you?service=${serviceValue}`);
        } catch (error: unknown) {
            let errorMessage = 'An unknown error occurred.';
            if (error instanceof Error) { errorMessage = error.message; }
            setFormMessage(`Error: ${errorMessage}`);
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            className={className}
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
                    <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2">Are You Ready? - Let&apos;s Get Started.</h1>
                    <p className="text-xl mt-4 text-gray-800">Fill out this form and you&apos;ll receive the contract and invoice within an minute for you to review it. A Payment link is included - start as soon as you&apos;re ready.</p>
                </motion.section>
                
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-12 space-y-6">
                    
                    {showServiceInfo ? (
                        <Suspense>
                            <ServiceInfo serviceName={serviceName} discountAmount={discountAmount} />
                        </Suspense>
                    ) : (
                        <>
                            <input type="hidden" name="service_name" value={serviceName || ''} />
                            <input type="hidden" name="discount_applied" value={discountAmount || '0'} />
                        </>
                    )}

                    <div>
                        <label htmlFor="name" className="block text-lg font-medium text-gray-600 mb-2">Your Name*</label>
                        <input
                            type="text" id="name" name="name"
                            value={formData.name} onChange={handleChange} required disabled={isSubmitting}
                            autoComplete="name"
                            className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-yellow-400 focus:border-yellow-400 disabled:opacity-50"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-gray-600 mb-2">Your Email Address*</label>
                        <input
                            type="email" id="email" name="email"
                            value={formData.email} onChange={handleChange} required disabled={isSubmitting}
                            autoComplete="email"
                            className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-yellow-400 focus:border-yellow-400 disabled:opacity-50"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="project_details" className="block text-lg font-medium text-gray-600 mb-2">Tell us about your project*</label>
                        <textarea
                            id="project_details" name="project_details"
                            rows={6} value={formData.project_details} onChange={handleChange} required disabled={isSubmitting}
                            className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-yellow-400 focus:border-yellow-400 disabled:opacity-50"
                        />
                    </div>

                    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                        <input type="text" name="b_name" tabIndex={-1} value={formData.b_name} onChange={handleChange} autoComplete="off" />
                    </div>

                    <button type="submit" disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 px-8 rounded-full mt-8 inline-block text-lg transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Sending...' : 'Submit Project Details'}
                    </button>
                </form>
                
                {formMessage && <p className="mt-4 text-center text-red-400">{formMessage}</p>}
            </div>
        </motion.div>
    );
}