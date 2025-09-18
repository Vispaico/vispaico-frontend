// src/components/WebServiceSlider.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';

const services = {
  '3-day': {
    title: '3-Day Business Website',
    description: 'Your Business Website, built to wow and grow your business with flair!',
    price: '$899 USD',
    delivery: 'Delivered in 3 days',
    ctaLink: '/services/3-day-website',
    features: ['Custom design', 'Mobile responsive', 'SEO optimized']
  },
  'bazooka': {
    title: 'The Vispaico BAZOOKA',
    description: 'Dominate your local market with an special forces team of six websites.',
    price: '$999 USD',
    delivery: 'Delivered in 3 days',
    ctaLink: '/services/the-vispaico-bazooka',
    features: ['6 Express Websites', 'Individual Domains & Hosting', 'Google Maps Optimization']
  },
  '24-hour': {
    title: '24h Express Website',
    description: 'Your Express Website, built to pop and get your biz noticed in a flash!',
    price: '$199 USD',
    delivery: 'Delivered in 24 hours',
    ctaLink: '/services/24-hour-micro-website',
    features: ['Single page site', 'Contact form', 'Mobile responsive']
  }
};

const WebServiceSlider: React.FC = () => {
  const { setIsHoveringInteractive } = useCursor();
  const [activeTab, setActiveTab] = useState<'3-day' | 'bazooka' | '24-hour'>('3-day');

  const handleMouseEnter = () => setIsHoveringInteractive(true);
  const handleMouseLeave = () => setIsHoveringInteractive(false);

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } }
  };

  return (
    <div className="relative bg-black/20 p-6 rounded-lg border border-white/20">
        {/* Tab Buttons */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setActiveTab('3-day')}
            className={`px-4 py-2 text-sm font-semibold rounded-l-full transition-colors duration-300 ${activeTab === '3-day' ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' : 'bg-slate-700 text-gray-300'}`}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
          >
            3-Day Business Website
          </button>
          <button
            onClick={() => setActiveTab('bazooka')}
            className={`px-4 py-2 text-sm font-semibold transition-colors duration-300 ${activeTab === 'bazooka' ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' : 'bg-slate-700 text-gray-300'}`}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
          >
            The Bazooka
          </button>
          <button
            onClick={() => setActiveTab('24-hour')}
            className={`px-4 py-2 text-sm font-semibold rounded-r-full transition-colors duration-300 ${activeTab === '24-hour' ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' : 'bg-slate-700 text-gray-300'}`}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
          >
            24h Express Website
          </button>
        </div>

        {/* Dynamic Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-center"
          >
            <h4 className="text-xl font-bold mb-2 text-white">{services[activeTab].title}</h4>
            <p className="text-sm text-gray-300 mb-4 h-10">{services[activeTab].description}</p>
            <p className="text-lg font-bold mb-4 text-yellow-400">
              {services[activeTab].price}
            </p>
            <Link href={services[activeTab].ctaLink}
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg text-sm transition-colors duration-300"
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                Learn More
            </Link>
          </motion.div>
        </AnimatePresence>
    </div>
  );
};

export default WebServiceSlider;