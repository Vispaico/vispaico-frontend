// src/components/AffiliateWebsiteClientPage.tsx

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import TwoDayProcess from '@/components/TwoDayProcess'; // We will create this next
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faRocket, faMobileAlt, faSearch, faHandshake, faClock } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

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
  const searchParams = useSearchParams();
  const discountAmount = searchParams.get('discount') || '0';
  // The kickoff URL will need to be updated to a generic one that can handle different services
  const kickoffUrl = `/kickoff?service=affiliate-website&discount=${discountAmount}`;

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } };

  return (
    <>
      <DiscountAppliedBanner />

      <motion.div
        className="bg-gray-900 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 py-16">
          {/* HERO SECTION */}
          <motion.section className="text-center" variants={itemVariants}>
            <h1 className="text-5xl font-bold">Launch Your Affiliate Site in 2 Days.</h1>
            <h3 className="text-2xl mt-4 text-gray-300">A high-converting affiliate website with up to 10 product pages, ready to earn.</h3>
            <p className="text-4xl font-bold mt-4 text-yellow-400">$399 | Delivered in 2 Days</p>
          </motion.section>

          {/* ONE SIMPLE SERVICE SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">One Simple Service for a Fast Launch.</h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-gray-300">
              You want to start earning with affiliate marketing, but don't want to deal with the technical setup. We build your site, create up to 10 product pages, and hand you the keys—all in two days.
            </p>
          </motion.section>

          {/* YOUR COMPLETE LAUNCH PACKAGE SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">Your Complete Affiliate Launch Package.</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8 text-center">
              <motion.div className="p-6 bg-gray-800 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faDollarSign} className="text-4xl text-yellow-400 mb-4" /><h3 className="text-xl font-bold">Up to 10 Product Pages</h3><p className="text-gray-300">We create dedicated pages for up to 10 affiliate products.</p></motion.div>
              <motion.div className="p-6 bg-gray-800 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faMobileAlt} className="text-4xl text-yellow-400 mb-4" /><h3 className="text-xl font-bold">Mobile-First Design</h3><p className="text-gray-300">Looks perfect on all devices to maximize conversions.</p></motion.div>
              <motion.div className="p-6 bg-gray-800 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faSearch} className="text-4xl text-yellow-400 mb-4" /><h3 className="text-xl font-bold">SEO-Ready</h3><p className="text-gray-300">Built to be found on search engines like Google.</p></motion.div>
              <motion.div className="p-6 bg-gray-800 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faHandshake} className="text-4xl text-yellow-400 mb-4" /><h3 className="text-xl font-bold">You Provide the Links</h3><p className="text-gray-300">Just give us your affiliate links and basic product info, we do the rest.</p></motion.div>
              <motion.div className="p-6 bg-gray-800 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faClock} className="text-4xl text-yellow-400 mb-4" /><h3 className="text-xl font-bold">Guaranteed 2-Day Delivery</h3><p className="text-gray-300">Your site will be live and ready to earn in 48 hours.</p></motion.div>
              <motion.div className="p-6 bg-gray-800 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faRocket} className="text-4xl text-yellow-400 mb-4" /><h3 className="text-xl font-bold">Ready to Launch</h3><p className="text-gray-300">No jargon, no hidden fees. Just a professional result, guaranteed.</p></motion.div>
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
            <h2 className="text-4xl font-bold">Ready to Start Earning?</h2>
            <p className="mt-4 text-gray-300">Let&apos;s get your affiliate site online. The first step takes less than a minute.</p>
            <Link href={kickoffUrl} passHref>
              <motion.button
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full mt-8 inline-block text-lg transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(255,255,0)" }}
                whileTap={{ scale: 0.9 }}
              >
                {Number(discountAmount) > 0 ? 'Start My Project & Apply Discount' : 'Start My 2-Day Project'}
              </motion.button>
            </Link>
          </motion.section>
        </div>
      </motion.div>
    </>
  );
};

export default AffiliateWebsiteClientPage;
