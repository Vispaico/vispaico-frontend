// src/components/ThreeDayWebsiteClientPage.tsx

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import ThreeDayProcess from '@/components/ThreeDayProcess';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faPaintBrush, faMobileAlt, faSearch, faHandshake, faClock, faBrain } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import FeaturedTestimonial from '@/components/FeaturedTestimonial';


// --- NEW COMPONENT #1: The Discount Banner ---
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


const ThreeDayWebsiteClientPage = () => {
  const searchParams = useSearchParams();
  const discountAmount = searchParams.get('discount') || '0';
  const kickoffUrl = `/start/kickoff?discount=${discountAmount}`;

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
            <h1 className="text-5xl font-bold">Go Live in 3 Days.</h1>
            <h3 className="text-2xl mt-4 text-gray-300">Get a professional Website or Landing Page, built and launched for a simple, flat rate.</h3>
            <p className="text-4xl font-bold mt-4 text-yellow-400">$899 | Delivered in 3 Days</p>
          </motion.section>

          {/* FEATURED TESTIMONIAL */}
          <motion.section className="mt-16" variants={itemVariants}>
            <FeaturedTestimonial />
          </motion.section>

          {/* WHAT'S POSSIBLE SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center mb-8">See What&apos;s Possible in 3 Days.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <video src="https://res.cloudinary.com/kinhcode01/video/upload/Vispaico/Maze_Web_innwen.mp4" autoPlay muted loop playsInline className="w-full rounded-lg shadow-lg"></video>
                <h3 className="text-xl font-bold mt-4">Maze - Trockenbau</h3>
              </div>
              <div className="flex flex-col items-center">
                <video src="https://res.cloudinary.com/kinhcode01/video/upload/Vispaico/RiverCity_Web_vfofed.mp4" autoPlay muted loop playsInline className="w-full rounded-lg shadow-lg"></video>
                <h3 className="text-xl font-bold mt-4">RiverCity Bike Rentals</h3>
              </div>
              <div className="flex flex-col items-center">
                <video src="https://res.cloudinary.com/kinhcode01/video/upload/Vispaico/Azure_Web_cuf1ji.mp4" autoPlay muted loop playsInline className="w-full rounded-lg shadow-lg"></video>
                <h3 className="text-xl font-bold mt-4">AZURE Estate</h3>
              </div>
            </div>
          </motion.section>

          {/* ONE SIMPLE SERVICE SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">One Simple Service for a Fast Launch.</h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-gray-300">
              You need to be online, but you don&apos;t have time for jargon, confusing prices, or a complicated process. We get it.
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-center text-gray-300">
              That&apos;s why we offer one straightforward service: we take your basic info and turn it into a professional online presence in just three days. Whether you need a few pages to showcase your whole business or one powerful page to capture leads, the price and the promise are the same. We handle all the tech stuff so you can focus on your business.
            </p>
          </motion.section>

          {/* YOUR COMPLETE LAUNCH PACKAGE SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">Your Complete Launch Package.</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8 text-center">
              <motion.div className="p-6 bg-gray-800 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faDesktop} className="text-4xl text-yellow-400 mb-4" /><h3 className="text-xl font-bold">Your Choice of Format</h3><p className="text-gray-300">A multi-page website (up to 5 pages) OR a high-impact single landing page.</p></motion.div>
              <motion.div className="p-6 bg-gray-800 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faPaintBrush} className="text-4xl text-yellow-400 mb-4" /><h3 className="text-xl font-bold">Custom Design</h3><p className="text-gray-300">A clean, professional design that reflects your brand.</p></motion.div>
              <motion.div className="p-6 bg-gray-800 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faMobileAlt} className="text-4xl text-yellow-400 mb-4" /><h3 className="text-xl font-bold">Mobile-First</h3><p className="text-gray-300">Looks perfect and is easy to use on phones, tablets, and desktops.</p></motion.div>
              <motion.div className="p-6 bg-gray-800 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faSearch} className="text-4xl text-yellow-400 mb-4" /><h3 className="text-xl font-bold">SEO-Ready</h3><p className="text-gray-300">Built from the ground up to be found on search engines like Google.</p></motion.div>
              <motion.div className="p-6 bg-gray-800 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faHandshake} className="text-4xl text-yellow-400 mb-4" /><h3 className="text-xl font-bold">We Do the Heavy Lifting</h3><p className="text-gray-300">All we need is some basic information to get started.</p></motion.div>
              <motion.div className="p-6 bg-gray-800 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faClock} className="text-4xl text-yellow-400 mb-4" /><h3 className="text-xl font-bold">Guaranteed 3-Day Delivery</h3><p className="text-gray-300">We mean it. You&apos;ll be ready to launch in 72 hours.</p></motion.div>
              <motion.div className="p-6 bg-gray-800 rounded-lg md:col-start-2" animate={{ boxShadow: ["0 0 0px rgba(250, 204, 21, 0)", "0 0 20px rgba(250, 204, 21, 0.5)", "0 0 0px rgba(250, 204, 21, 0)"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}><FontAwesomeIcon icon={faBrain} className="text-4xl text-yellow-400 mb-4" /><h3 className="text-xl font-bold">Peace of Mind</h3><p className="text-gray-300">No jargon, no hidden fees, no complicated process. Just a professional result, guaranteed.</p></motion.div>
            </div>
          </motion.section>

          {/* HOW IT WORKS SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">How It Works - The Go Easy Process</h2>
            <div className="mt-8 max-w-2xl mx-auto">
              <ThreeDayProcess />
            </div>
          </motion.section>

          {/* QUICK QUESTIONS SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">Quick Questions</h2>
            <div className="max-w-3xl mx-auto mt-8 text-gray-300">
              <h3 className="text-xl font-bold text-white">Should I choose a website or a landing page?</h3>
              <p className="mt-2">A website is usually best if you want to showcase multiple services, have an &quot;About Us&quot; section, and a contact page. A landing page is perfect if you have one main goal, like selling a specific product or getting sign-ups for a newsletter.</p>
              <p className="mt-2"><strong className="text-yellow-400">Don&apos;t worry if you&apos;re not sure!</strong> We can help you figure out what&apos;s best for your goal after you get in touch.</p>
              <h3 className="text-xl font-bold mt-8 text-white">What information do you need from me?</h3>
              <p className="mt-2">All we need to start is your business name, what you do, and any text or images you want to include. Even if you just have a few sentences, we can build from there.</p>
            </div>
          </motion.section>

          {/* FINAL CTA SECTION */}
          <motion.section className="mt-16 text-center" variants={itemVariants}>
            <h2 className="text-4xl font-bold">Ready to Launch Your Project?</h2>
            <p className="mt-4 text-gray-300">Let&apos;s get your business online. The first step takes less than a minute.</p>
            <p style={{ fontSize: '0.9rem', color: '#d1d5db' }}>*No commitment yet. This just starts the conversation.*</p>
            <Link href={kickoffUrl} passHref>
              <motion.button
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full mt-8 inline-block text-lg transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(255,255,0)" }}
                whileTap={{ scale: 0.9 }}
              >
                {Number(discountAmount) > 0 ? 'Start My Project & Apply Discount' : 'Start My 3-Day Project'}
              </motion.button>
            </Link>
          </motion.section>
        </div>
      </motion.div>
    </>
  );
};

export default ThreeDayWebsiteClientPage;