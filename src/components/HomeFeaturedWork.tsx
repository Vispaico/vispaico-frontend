'use client';

import React, { useState, useEffect } from 'react';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolio.json';
import { Project } from '@/types/portfolio';
import FeaturedWorkCard from './FeaturedWorkCard';
import PortfolioCardSkeleton from './PortfolioCardSkeleton';
import { useTranslations } from 'next-intl';

const HomeFeaturedWork: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const featuredProjects = (portfolioData as Project[]).slice(0, 4);
  const t = useTranslations('HomeFeaturedWork');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulate a 1.5-second loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          {t('heading')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <PortfolioCardSkeleton key={index} />
              ))
            : featuredProjects.map((project) => (
                <FeaturedWorkCard key={project.id} project={project} />
              ))}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center mt-16 md:mt-20">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/portfolio" className="text-base md:text-lg text-indigo-200 font-semibold hover:text-orange-400 hover:underline transition-colors">
            {t('cta')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeFeaturedWork;