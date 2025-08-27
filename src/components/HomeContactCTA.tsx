// src/components/HomeContactCTA.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const HomeContactCTA: React.FC = () => {
  return (
    <motion.section
        className="py-16 md:py-24 bg-gray-50 dark:bg-slate-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-yellow-600">Ready to Start a Project but don&apos;t know how to?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Tell us about your idea, and we&apos;ll get back to you within 6 hours.
            </p>
        </div>
        <div className="max-w-2xl mx-auto mt-10">
            <ContactForm />
        </div>
      </div>
    </motion.section>
  );
};
export default HomeContactCTA;
