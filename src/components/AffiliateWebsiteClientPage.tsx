// src/components/AffiliateWebsiteClientPage.tsx

'use client';

import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import TwoDayProcess from '@/components/TwoDayProcess'; // We will create this next
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faMobileAlt, faSearch, faHandshake, faClock, faWebAwesome, faBrain } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
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

const AffiliateWebsiteClientPage = () => {

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
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2">Launch Your Affiliate Site in 2 Days.</h1>
            <h3 className="text-2xl mt-4 text-gray-300">A high-converting affiliate website with up to 6 product pages, ready to earn.</h3>
            <p className="text-4xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">$399 | Delivered in 2 Days</p>
          </motion.section>

          {/* ONE SIMPLE SERVICE SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">One Simple Service for a Fast Launch.</h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-gray-300">
              You want to start earning with affiliate marketing, but don&apos;t want to deal with the technical setup. We build your site, create up to 6 product pages, and hand you the keys—all in two days.
            </p>
          </motion.section>

          {/* YOUR COMPLETE LAUNCH PACKAGE SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">Your Complete Affiliate Launch Package.</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8 text-center">
              <motion.div className="p-6 bg-black/20 backdrop-blur-lg border border-white/20 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faWebAwesome} className="text-4xl text-indigo-400 mb-4" /><h3 className="text-xl font-bold">Up to 6 Product Pages</h3><p className="text-gray-300">We create dedicated pages for up to 6 affiliate products with optimised content.</p></motion.div>
              <motion.div className="p-6 bg-black/20 backdrop-blur-lg border border-white/20 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faMobileAlt} className="text-4xl text-indigo-400 mb-4" /><h3 className="text-xl font-bold">Mobile-First Design</h3><p className="text-gray-300">Looks perfect on all devices without breaking apart on any screen.</p></motion.div>
              <motion.div className="p-6 bg-black/20 backdrop-blur-lg border border-white/20 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faSearch} className="text-4xl text-indigo-400 mb-4" /><h3 className="text-xl font-bold">SEO & AiO Ready</h3><p className="text-gray-300">Built to be found on search engines like Google and  AI-Optimized Content for  AI summary search.</p></motion.div>
              <motion.div className="p-6 bg-black/20 backdrop-blur-lg border border-white/20 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faHandshake} className="text-4xl text-indigo-400 mb-4" /><h3 className="text-xl font-bold">You Provide the Idea</h3><p className="text-gray-300"> and the Links if you have them already. Otherwise we start from your idea and build the whole project to perfection for you.</p></motion.div>
              <motion.div className="p-6 bg-black/20 backdrop-blur-lg border border-white/20 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faClock} className="text-4xl text-indigo-400 mb-4" /><h3 className="text-xl font-bold">Guaranteed 2-Day Delivery</h3><p className="text-gray-300">Your site will be live and ready to earn in 48 hours. And yes, that includes the hosting, the email setup, and the domain registration.</p></motion.div>
              <motion.div className="p-6 bg-black/20 backdrop-blur-lg border border-white/20 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faRocket} className="text-4xl text-indigo-400 mb-4" /><h3 className="text-xl font-bold">Ready to Launch</h3><p className="text-gray-300">And BAANG, just like that, no jargon, no hidden fees. Just a professional website, guaranteed.</p></motion.div>
              <motion.div className="p-6 bg-black/20 backdrop-blur-lg border border-white/20 rounded-lg md:col-start-2" animate={{ boxShadow: ["0 0 0px rgba(250, 204, 21, 0)", "0 0 20px rgba(250, 204, 21, 0.5)", "0 0 0px rgba(250, 204, 21, 0)"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}><FontAwesomeIcon icon={faBrain} className="text-4xl text-yellow-400 mb-4" /><h3 className="text-xl font-bold">Peace of Mind</h3><p className="text-gray-300">No jargon, no hidden fees, no complicated process. Just a professional result, guaranteed.</p></motion.div>
            </div>
          </motion.section>

          {/* HOW IT WORKS SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">How It Works - The 2-Day Process</h2>
            <div className="mt-8 max-w-2xl mx-auto">
              <TwoDayProcess />
            </div>
          </motion.section>

          {/* FINAL CTA SECTION */}
          <motion.section className="mt-16 text-center" variants={itemVariants}>
            <KickoffForm service="affiliate-website" showServiceInfo={false} />
          </motion.section>
        </div>
      </motion.div>
    </>
  );
};

export default AffiliateWebsiteClientPage;
