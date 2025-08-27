'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolio.json';
import { Project } from '@/types/portfolio';
import FeaturedWorkCard from './FeaturedWorkCard'; // Will be the new name for the card component

const HomeFeaturedWork: React.FC = () => {
  // We'll take the first 4 projects for a more focused homepage preview
  const featuredProjects = (portfolioData as Project[]).slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-gray-50 text-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Featured Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {featuredProjects.map((project) => (
            <FeaturedWorkCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* View Full Portfolio Link */}
      <div className="container mx-auto px-6 text-center mt-16 md:mt-20">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/portfolio" className="text-base md:text-lg text-indigo-600 font-semibold hover:underline transition-colors">
            View Full Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeFeaturedWork;