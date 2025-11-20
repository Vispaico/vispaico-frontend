// src/components/WebServiceSlider.tsx
'use client';

import React from 'react';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';

const service = {
  title: 'Vispaico Growth Website',
  description: 'A complete growth-ready website built in 72 hours with copy, design, and launch support.',
  price: '$899 USD',
  delivery: 'Launch in 3 days — guaranteed.',
  ctaLink: '/vispaico-growth-website',
  features: ['Custom strategy & copy', 'Mobile-first experience', 'SEO-ready & analytics connected']
};

const WebServiceSlider: React.FC = () => {
  const { setIsHoveringInteractive } = useCursor();

  const handleMouseEnter = () => setIsHoveringInteractive(true);
  const handleMouseLeave = () => setIsHoveringInteractive(false);

  return (
    <div className="relative bg-black/20 p-8 rounded-2xl border border-white/20 text-center">
      <motion.p
        className="text-sm uppercase tracking-[0.2em] text-orange-300 mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        Join 138+ teams shipping faster with Vispaico
      </motion.p>

      <motion.h4
        className="text-2xl font-bold mb-3 text-white"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
      >
        {service.title}
      </motion.h4>

      <motion.p
        className="text-base text-gray-300 mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
      >
        {service.description}
      </motion.p>

      <motion.ul
        className="flex flex-col gap-3 mb-6 text-gray-200"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.15 }}
      >
        {service.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </motion.ul>

      <motion.p
        className="text-lg font-semibold text-white/90 mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
      >
        {service.price}
        <span className="block text-sm font-normal text-gray-400">{service.delivery}</span>
      </motion.p>

      <Link
        href={service.ctaLink}
        className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 px-8 rounded-lg text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-colors duration-300"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Reserve Your Slot
      </Link>
    </div>
  );
};

export default WebServiceSlider;