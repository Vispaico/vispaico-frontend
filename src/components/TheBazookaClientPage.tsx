// src/components/TheBazookaClientPage.tsx

'use client';

import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import ThreeDayProcess from '@/components/ThreeDayProcess';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faPaintBrush, faMobileAlt, faSearch, faHandshake, faClock, faBrain, faSitemap, faGlobe, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import FeaturedTestimonial from '@/components/FeaturedTestimonial';
import KickoffForm from './KickoffForm';

function DiscountAppliedBanner() {
  const searchParams = useSearchParams();
  const discountAmount = searchParams.get('discount');

  if (!discountAmount || Number(discountAmount) <= 0) {
    return null;
  }

  return (
    <motion.div
      className="sticky top-0 z-50 bg-green-600 text-white text-center p-3 font-semibold shadow-lg"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      Congratulations! Your ${discountAmount} Quiz Discount is active.
    </motion.div>
  );
}

const TheBazookaClientPage = () => {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } };

  return (
    <>
      <DiscountAppliedBanner />
      <motion.div
        className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 py-16">
          {/* HERO SECTION */}
          <motion.section className="text-center" variants={itemVariants}>
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2">The Vispaico BAZOOKA.</h1>
            <h3 className="text-2xl mt-4 text-gray-300">Dominate your local market with an army of websites.</h3>
            <p className="text-4xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">$999 | Delivered in 3 Days</p>
          </motion.section>

          <motion.section className="mt-16" variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* WHAT'S POSSIBLE SECTION */}
              <div className="border border-gray-600 rounded-lg p-6">
                <h2 className="text-xl font-bold text-center mb-4">See What&apos;s Possible in 3 Days.</h2>
                <div className="flex flex-col items-center">
                  <video src="https://res.cloudinary.com/kinhcode01/video/upload/Vispaico/Maze_Web_innwen.mp4" autoPlay muted loop playsInline className="w-full rounded-lg shadow-lg"></video>
                </div>
              </div>
              {/* FEATURED TESTIMONIAL */}
              <div className="w-full">
                <FeaturedTestimonial />
              </div>
            </div>
          </motion.section>

          {/* ONE SIMPLE SERVICE SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">Tired of Being Invisible? Let&apos;s Fix That.</h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-gray-300">
              You&apos;re running a great local business, but you feel like you&apos;re shouting into the void. You know you need to be online, but one little website feels like bringing a knife to a gunfight.
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-center text-gray-300">
              That&apos;s why we built the BAZOOKA. We don&apos;t just give you a website; we give you six. Each one is a sharp, focused micro-site with its own domain, all working together to make you the obvious choice in your area. It&apos;s time to stop hoping people find you and start making it impossible for them to miss you.
            </p>
          </motion.section>

          {/* YOUR COMPLETE LAUNCH PACKAGE SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">Your Domination Kit.</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8 text-center">
              <motion.div className="p-6 bg-black/20 backdrop-blur-lg border border-white/20 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faSitemap} className="text-4xl text-indigo-400 mb-4" /><h3 className="text-xl font-bold">6 Micro-Websites</h3><p className="text-gray-300">An entire fleet of websites, each targeting a specific part of your business or area.</p></motion.div>
              <motion.div className="p-6 bg-black/20 backdrop-blur-lg border border-white/20 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faGlobe} className="text-4xl text-indigo-400 mb-4" /><h3 className="text-xl font-bold">Individual Domains & Hosting</h3><p className="text-gray-300">We set up everything. Each site gets its own domain and hosting, making them powerful assets.</p></motion.div>
              <motion.div className="p-6 bg-black/20 backdrop-blur-lg border border-white/20 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faMapMarkedAlt} className="text-4xl text-indigo-400 mb-4" /><h3 className="text-xl font-bold">Google Maps Optimization</h3><p className="text-gray-300">We tie it all into your Google Maps profile to create a local search powerhouse.</p></motion.div>
              <motion.div className="p-6 bg-black/20 backdrop-blur-lg border border-white/20 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faSearch} className="text-4xl text-indigo-400 mb-4" /><h3 className="text-xl font-bold">SEO & AiO Ready</h3><p className="text-gray-300">Built from the ground up to be found on search engines like Google and AI-Optimized Content for AI summary search.</p></motion.div>
              <motion.div className="p-6 bg-black/20 backdrop-blur-lg border border-white/20 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faHandshake} className="text-4xl text-indigo-400 mb-4" /><h3 className="text-xl font-bold">We Do the Heavy Lifting</h3><p className="text-gray-300">You give us the basics, we handle the entire setup. No headaches for you. Hosting, Domains registration for 3 years, email system...YES, all included...BOOM!</p></motion.div>
              <motion.div className="p-6 bg-black/20 backdrop-blur-lg border border-white/20 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faClock} className="text-4xl text-indigo-400 mb-4" /><h3 className="text-xl font-bold">Guaranteed 3-Day Delivery</h3><p className="text-gray-300">Your new web presence will be live and working for you in just 72 hours.</p></motion.div>
            </div>
          </motion.section>

          {/* HOW IT WORKS SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">How It Works</h2>
            <div className="mt-8 max-w-2xl mx-auto">
              <ThreeDayProcess />
            </div>
          </motion.section>

          {/* QUICK QUESTIONS SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">Quick Questions</h2>
            <div className="max-w-3xl mx-auto mt-8 text-gray-300">
              <h3 className="text-xl font-bold text-white">Six websites? Isn&apos;t that... a bit much?</h3>
              <p className="mt-2">Not when you want to own your local market. Think of it like fishing. Would you rather have one fishing line or six? Each site is a hook in the water, pulling in customers for different services or from different neighborhoods. It multiplies your chances of getting found a zillion times.</p>
            </div>
          </motion.section>

          {/* FINAL CTA SECTION */}
          <motion.section className="mt-16 text-center" variants={itemVariants}>
            <KickoffForm service="the-vispaico-bazooka" showServiceInfo={false} />
          </motion.section>
        </div>
      </motion.div>
    </>
  );
};

export default TheBazookaClientPage;
