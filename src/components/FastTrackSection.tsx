'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const services = {
  '3-day': {
    title: 'Need a Website, Fast?',
    description: 'A professional, multi-page website or a high-impact landing page. No complex process, no tech-talk—we handle it all.',
    price: '$899 USD',
    delivery: 'Delivered in 3 days',
    ctaText: 'Get Your 3-Day Website',
    ctaLink: '/services/3-day-website',
    features: ['Custom design', 'Mobile responsive', 'SEO optimized']
  },
  '2-day': {
    title: 'Launch an Affiliate Site, Faster?',
    description: 'A high-converting affiliate website with up to 10 product pages, ready to start earning. We build, you earn.',
    price: '$399 USD',
    delivery: 'Delivered in 2 days',
    ctaText: 'Get Your 2-Day Affiliate Site',
    ctaLink: '/services/affiliate-website',
    features: ['Up to 10 product pages', 'Mobile responsive', 'SEO optimized']
  }
};

const FastTrackSection: React.FC = () => {
  const { setIsHoveringInteractive } = useCursor();
  const [activeTab, setActiveTab] = useState<'3-day' | '2-day'>('3-day');

  const handleMouseEnter = () => setIsHoveringInteractive(true);
  const handleMouseLeave = () => setIsHoveringInteractive(false);

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } }
  };

  return (
    <section className="relative bg-slate-900 text-white py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* Tab Buttons */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setActiveTab('3-day')}
            className={`px-6 py-3 text-lg font-semibold rounded-l-full transition-colors duration-300 ${activeTab === '3-day' ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' : 'bg-black/20 text-gray-300'}`}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
          >
            3-Day Website
          </button>
          <button
            onClick={() => setActiveTab('2-day')}
            className={`px-6 py-3 text-lg font-semibold rounded-r-full transition-colors duration-300 ${activeTab === '2-day' ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' : 'bg-black/20 text-gray-300'}`}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
          >
            2-Day Affiliate Site
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
            <p className="text-3xl sm:text-4xl font-bold mb-10 text-yellow-400">
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
