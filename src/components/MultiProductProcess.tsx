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
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-1 text-purple-200">{description}</p>
    </div>
  </motion.div>
);

const ThreeDayProcess = () => {
  const steps = [
    {
      icon: faPaperPlane,
      title: '1. Tell Us Your Goal',
      description: 'Click the "Get Started" button and fill out a quick form with some basic details about your business and your goal.',
    },
    {
      icon: faPenRuler,
      title: '2. We Handle the Details',
      description: 'We review your info, confirm the details with you, and then we will send a clear contract and an invoice to get started.',
    },
    {
      icon: faLaptopCode,
      title: '3. We Build',
      description: 'Our team and our robots gets to work immediately, keeping you updated.',
    },
    {
      icon: faRocket,
      title: '4. Launch!',
      description: 'Within 10 days, your brand new multi product web shop is live and ready for customers.',
    },
    {
      icon: faChampagneGlasses,
      title: '5. Cheers',
      description: 'To the happy days.',
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

export default ThreeDayProcess;
