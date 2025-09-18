'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenRuler, faRocket, faPaperPlane, faLaptopCode, faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const ProcessStep = ({ icon, title, description, delay }: { icon: IconDefinition, title: string, description: string, delay: number }) => (
  <motion.div
    className="flex items-start space-x-4 relative z-10"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-600 text-white">
        <FontAwesomeIcon icon={icon} className="h-6 w-6" />
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-purple-900">{title}</h3>
      <p className="mt-1 text-purple-900">{description}</p>
    </div>
  </motion.div>
);

const TheBazookaProcess = () => {
  const steps = [
    {
      icon: faPaperPlane,
      title: '1. Fill Out the Form',
      description: 'Tell us about your business, goals, and ideas. Even rough notes work fine. We build from there.',
    },
    {
      icon: faPenRuler,
      title: '2. We Send Contract & Invoice',
      description: 'Clear terms, flat rate. If we need clarification, we will reach out directly (no meetings required).',
    },
    {
      icon: faLaptopCode,
      title: '3. We Build While You Work',
      description: 'Our team gets to work immediately. You get updates, not meetings.',
    },
    {
      icon: faRocket,
      title: '4. You Launch & Win',
      description: 'Within 3 days, your website is live and ready for customers.',
    },
    {
      icon: faChampagneGlasses,
      title: '5. Cheers',
      description: 'Your site launches. Your business grows. Problem solved.',
    },
  ];

  return (
    <div className="relative">
      <div className="absolute left-6 top-6 h-full border-l-2 border-dashed border-purple-400 z-0" />
      <div className="space-y-8">
        {steps.map((step, index) => (
          <ProcessStep key={index} {...step} delay={index * 0.2} />
        ))}
      </div>
    </div>
  );
};

export default TheBazookaProcess;
