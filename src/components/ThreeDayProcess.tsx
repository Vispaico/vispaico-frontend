'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenRuler, faRocket, faPaperPlane, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useTranslations } from 'next-intl';

const ProcessStep = ({ icon, title, description, delay }: { icon: IconDefinition, title: string, description: string, delay: number }) => (
  <motion.div
    className="flex items-start gap-4 relative z-10"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="shrink-0">
      <div className="flex items-center justify-center h-14 w-14 rounded-[16px] border border-[var(--border)] bg-gradient-to-br from-orange-500/20 via-[var(--bg-surface)] to-orange-500/0 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
        <FontAwesomeIcon icon={icon} className="h-6 w-6 text-white" />
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-[var(--text-primary)]">{title}</h3>
      <p className="mt-1 text-[var(--text-secondary)]">{description}</p>
    </div>
  </motion.div>
);

const ThreeDayProcess = () => {
  const t = useTranslations('ThreeDayProcess');
  const stepsContent = t.raw('steps') as { title: string; description: string }[];
  const icons: IconDefinition[] = [faPaperPlane, faPenRuler, faLaptopCode, faRocket];

  return (
    <div className="relative">
      <div className="absolute left-8 top-6 h-full border-l-2 border-dashed border-[var(--border)] opacity-30" />
      <div className="space-y-8 pr-4">
        {stepsContent.map((step, index) => (
          <ProcessStep
            key={`${step.title}-${index}`}
            icon={icons[index] || faPaperPlane}
            title={step.title}
            description={step.description}
            delay={index * 0.2}
          />
        ))}
      </div>
    </div>
  );
};

export default ThreeDayProcess;
