"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

type FAQItem = {
  question: string;
  answer: string;
};

const FAQPageClient: React.FC = () => {
  const t = useTranslations('FAQ');
  const title = t('title');
  const items = t.raw('items') as FAQItem[];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2">
            {title}
          </h1>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={`${item.question}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-6"
            >
              <h2 className="text-xl font-semibold text-indigo-400 mb-2">{item.question}</h2>
              <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPageClient;
