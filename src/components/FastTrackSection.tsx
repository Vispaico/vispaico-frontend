'use client';

import React, { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from 'next-intl';

const FastTrackSection: React.FC = () => {
  const { setIsHoveringInteractive } = useCursor();
  const t = useTranslations('FastTrack');
  const [activeTab, setActiveTab] = useState<'3-day' | 'web-design' | '24-hour'>('3-day');

  const tabLabels = {
    '3-day': t('tabs.3-day'),
    'web-design': t('tabs.web-design'),
    '24-hour': t('tabs.24-hour')
  } as const;

  const services = {
    '3-day': {
      title: t('services.3-day.title'),
      description: t('services.3-day.description'),
      price: t('services.3-day.price'),
      delivery: t('services.3-day.delivery'),
      ctaText: t('services.3-day.ctaText'),
      ctaLink: '/vispaico-three-day-business-website',
      features: t.raw('services.3-day.features') as string[]
    },
    'web-design': {
      title: t('services.web-design.title'),
      description: t('services.web-design.description'),
      price: t('services.web-design.price'),
      delivery: t('services.web-design.delivery'),
      ctaText: t('services.web-design.ctaText'),
      ctaLink: '/web-design',
      features: t.raw('services.web-design.features') as string[]
    },
    '24-hour': {
      title: t('services.24-hour.title'),
      description: t('services.24-hour.description'),
      price: t('services.24-hour.price'),
      delivery: t('services.24-hour.delivery'),
      ctaText: t('services.24-hour.ctaText'),
      ctaLink: '/vispaico-full-online-store',
      features: t.raw('services.24-hour.features') as string[]
    }
  } as const;

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
            {tabLabels['3-day']}
          </button>
          <button
            onClick={() => setActiveTab('web-design')}
            className={`px-6 py-3 text-lg font-semibold transition-colors duration-300 ${activeTab === 'web-design' ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' : 'bg-black/20 text-gray-300'}`}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
          >
            {tabLabels['web-design']}
          </button>
          <button
            onClick={() => setActiveTab('24-hour')}
            className={`px-6 py-3 text-lg font-semibold rounded-r-full transition-colors duration-300 ${activeTab === '24-hour' ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' : 'bg-black/20 text-gray-300'}`}
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
          >
            {tabLabels['24-hour']}
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
              {services[activeTab].features.map((feature) => (
                <li key={feature} className="flex items-center text-lg font-medium">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-400 mr-3 text-xl" /> {feature}
                </li>
              ))}
            </ul>
            <p className="text-3xl sm:text-4xl font-bold mb-10 text-white/80">
              {services[activeTab].price} | <span className="text-white/80">{services[activeTab].delivery}</span>
            </p>
            <div>
              <p className="text-l text-gray-300 mb-8 max-w-3xl mx-auto">
                {t('guarantee')}
              </p>
              <Link href={services[activeTab].ctaLink}>
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