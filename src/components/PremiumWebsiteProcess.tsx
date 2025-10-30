'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenRuler, faLaptopCode, faRocket, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const ProcessStep = ({ icon, title, description, delay }: { icon: IconDefinition; title: string; description: string; delay: number }) => (
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

const PremiumWebsiteProcess = () => {
  const steps = [
    {
      icon: faHandshake,
      title: '1. Strategy Intake',
      description: 'Share your goals, brand materials, and must-haves. A dedicated producer maps everything without endless meetings.',
    },
    {
      icon: faPenRuler,
      title: '2. Premium Blueprint',
      description: 'We design the full experience—architecture, UX, content outline—and send the contract and invoice same day.',
    },
    {
      icon: faLaptopCode,
      title: '3. Build & Integrate',
      description: 'Our senior dev team ships the custom build, integrates tools, and connects analytics while you keep working.',
    },
    {
      icon: faRocket,
      title: '4. Launch in 14 Days',
      description: 'You preview, request refinements, then launch. Training handoff and 30-day priority support included.',
    },
  ];

  return (
    <div className="relative">
      <div className="absolute left-6 top-6 h-full border-l-2 border-dashed border-purple-400 z-0" />
      <div className="space-y-8">
        {steps.map((step, index) => (
          <ProcessStep key={step.title} {...step} delay={index * 0.2} />
        ))}
      </div>
    </div>
  );
};

export default PremiumWebsiteProcess;
