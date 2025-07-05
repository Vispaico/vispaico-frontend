'use client'; // --- ADD THIS DIRECTIVE ---

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import portfolioData from '@/data/portfolio.json'; // Import local data directly
import { Project } from '@/types/portfolio'; // Import our type
import FeaturedWorkMarquee from './FeaturedWorkMarquee'; // Import our Client Component

// This is now a Client Component, which allows it to use Framer Motion for its own animations.
const HomeFeaturedWork: React.FC = () => {
  // We'll take the first 8 projects for the homepage preview
  const featuredProjects = (portfolioData as Project[]).slice(0, 8);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-gray-900 text-white overflow-hidden">
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
      </div>

      {/* Render the interactive marquee component, passing the data as a prop */}
      <FeaturedWorkMarquee projects={featuredProjects} />

      {/* View Full Portfolio Link */}
      <div className="container mx-auto px-6 text-center mt-16 md:mt-20">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/portfolio" className="text-base md:text-lg text-indigo-400 font-semibold hover:text-yellow-400 hover:underline transition-colors">
            View Full Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeFeaturedWork;