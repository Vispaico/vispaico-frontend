// src/components/HomeContactCTA.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import { useTranslations } from 'next-intl';

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const HomeContactCTA: React.FC = () => {
  const t = useTranslations('Home.contactCta');

  return (
    <motion.section
        className="relative py-16 md:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
    >
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto bg-black/20 backdrop-blur-lg p-8 sm:p-12 rounded-2xl shadow-lg border border-white/20">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{t('title')}</h2>
                <p className="text-lg text-blue-100 mb-8">
                    {t('description')}
                </p>
            </div>
            <div className="mt-10">
                <ContactForm />
            </div>
        </div>
      </div>
    </motion.section>
  );
};
export default HomeContactCTA;
