'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenRuler, faRocket, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const ProcessStep = ({ icon, title, description, delay }: { icon: IconDefinition, title: string, description: string, delay: number }) => (
  <motion.div
    className="flex items-start space-x-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="flex-shrink-0">
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
      title: '1. Tell Us What You Need',
      description: 'Click the "Get Started" button and fill out a quick form with some basic details about your business and your goal.',
    },
    {
      icon: faPenRuler,
      title: '2. We Get to Work',
      description: 'We review your info, confirm the details with you, and then start building your site right away.',
    },
    {
      icon: faRocket,
      title: '3. Launch!',
      description: 'Within 3 days, we\'ll hand over your brand new, ready-to-launch website or landing page.',
    },
  ];

  return (
    <div className="relative">
      <div className="absolute left-6 top-6 h-full border-l-2 border-dashed border-purple-400" />
      <div className="space-y-8">
        {steps.map((step, index) => (
          <ProcessStep key={index} {...step} delay={index * 0.2} />
        ))}
      </div>
    </div>
  );
};

export default ThreeDayProcess;
