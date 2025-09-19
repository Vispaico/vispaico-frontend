'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const services = {
  '3-day': {
    title: 'Need a Business Website, Fast?',
    description: 'Your Business website, built to wow and grow your business with flair!',
    price: '$899 USD',
    delivery: 'Delivered in 3 days',
    ctaText: 'Get Your 3-Day Business Website Today',
    ctaLink: '/services/three-day-business-website',
    features: ['Custom design', 'Mobile responsive', 'SEO & AiO optimized']
  },
  'bazooka': {
    title: 'Dominate Your Local Market?',
    description: 'Dominate your local market with a special forces team of six websites.',
    price: '$999 USD',
    delivery: 'Delivered in 3 days',
    ctaText: 'Get Your Bazooka Today',
    ctaLink: '/services/the-vispaico-bazooka',
    features: ['6 Express Websites', 'Individual Domains & Hosting', 'Google Maps Optimization']
  },
  '24-hour': {
    title: 'Need to Go Live, Now?',
    description: 'Your Express website, built to pop and get your biz noticed in a flash!',
    price: '$199 USD',
    delivery: 'Delivered in 24 hours',
    ctaText: 'Get Your Express Website Today',
    ctaLink: '/services/24-hour-express-website',
    features: ['Mobile responsive', 'Contact form', 'SEO & AiO optimized']
  }
};

const FastTrackSection: React.FC = () => {
  const { setIsHoveringInteractive } = useCursor();
  const [activeTab, setActiveTab] = useState<'3-day' | 'bazooka' | '24-hour'>('3-day');

  const handleMouseEnter = () => setIsHoveringInteractive(true);
  const handleMouseLeave = () => setIsHoveringInteractive(false);

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
  };

  return (
    <section className="relative bg-slate-900 text-white py-10 md:py-14 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* Tab Buttons */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setActiveTab('3-day')}
            className={`px-6 py-3 text-lg font-semibold rounded-l-full transition-colors duration-300 ${activeTab === '3-day' ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' : 'bg-black/20 text-gray-300'}`}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
          >
            3-Day Business Website
          </button>
          <button
            onClick={() => setActiveTab('bazooka')}
            className={`px-6 py-3 text-lg font-semibold transition-colors duration-300 ${activeTab === 'bazooka' ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' : 'bg-black/20 text-gray-300'}`}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
          >
            The Bazooka
          </button>
          <button
            onClick={() => setActiveTab('24-hour')}
            className={`px-6 py-3 text-lg font-semibold rounded-r-full transition-colors duration-300 ${activeTab === '24-hour' ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' : 'bg-black/20 text-gray-300'}`}
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
          >
            <p className="text-xl sm:text-2xl text-orange-300 mb-8 max-w-3xl mx-auto">Join 500+ businesses who ditched agencies for results</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              {services[activeTab].title}
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {services[activeTab].description}
            </p>
            <ul className="list-none p-0 mb-10 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-8">
              {services[activeTab].features.map(feature => (
                <li key={feature} className="flex items-center text-lg font-medium">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-400 mr-3 text-xl" /> {feature}
                </li>
              ))}
            </ul>
            <p className="text-3xl sm:text-4xl font-bold mb-10 text-white/80">
              {services[activeTab].price} | <span className="text-white/80">{services[activeTab].delivery}</span>
            </p>
            <div>
              <Link href={services[activeTab].ctaLink} passHref>
                <motion.button
                  className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-4 px-12 rounded-lg text-xl md:text-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  whileTap={{ scale: 0.95 }}
                >
                  {services[activeTab].ctaText}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FastTrackSection;