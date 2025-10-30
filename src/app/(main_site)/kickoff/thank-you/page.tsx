// app/(main_site)/kickoff/thank-you/page.tsx
'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function ThankYouMessage() {
    const searchParams = useSearchParams();
    const serviceName = searchParams.get('service');

    const serviceDisplayNames: { [key: string]: string } = {
        '24-hour-micro-website': '24-Hour Micro-Website',
        'premium-landingpage': 'Premium Landing Page',
        'vispaico-24-hour-express-website': '24-Hour Express Website',
        'vispaico-premium-landingpage': 'Premium Landing Page',
        'vispaico-three-day-business-website': '3-Day Business Website',
        'vispaico-full-online-store': 'The Full Online Store',
        
        'multi-product-store': 'Multi-Product e-commerce Store',
        'full-fledged-start-up-page': 'Full-Fledged Start-up Website',
        'vispaico_premium_website': 'Vispaico Premium Website',
        'the-vispaico-bazooka': 'The Vispaico BAZOOKA',
    };

    const displayName = serviceName ? serviceDisplayNames[serviceName] : 'your project';

    return (
        <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2">Thank You!</h1>
            <p className="text-xl mt-6 text-gray-200">You&apos;ve taken the first step, and the hard part is already over. We&apos;re looking over your details right now to make sure we have everything we need for the <strong>{displayName}</strong>.</p>
            <p className="text-lg mt-4 text-gray-300">Expect a personal email from our team within the next few minutes. That email will include confirmation of your project goal, the contract and the invoice, which includes the payment link to officially kick things off.</p>
            <p className="mt-8 text-gray-400">If you have any immediate questions, feel free to reach out to us at <a href="mailto:hey@vispa.co" className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 hover:underline">hola@vispaico.com</a>.</p>
            <Link href="/" passHref>
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 px-8 rounded-full mt-10 inline-block text-lg transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(255, 165, 0, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Back to Home
              </motion.button>
            </Link>
        </motion.div>
    );
}

export default function ThankYouPage() {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 py-16">
                <Suspense fallback={<div className="text-center text-lg">Loading...</div>}>
                    <ThankYouMessage />
                </Suspense>
            </div>
        </div>
    );
}
