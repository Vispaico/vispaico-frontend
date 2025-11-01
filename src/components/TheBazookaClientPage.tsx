// src/components/TheBazookaClientPage.tsx

'use client';

import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import TheBazookaProcess from '@/components/TheBazookaProcess';
import FounderNote from '@/components/FounderNote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faSearch, faHandshake, faClock, faSitemap, faGlobe, faMapMarkedAlt, faBomb } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import FeaturedTestimonialBazooka from '@/components/FeaturedTestimonialBazooka';
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
        className="bg-white text-black"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 py-16">
          {/* HERO SECTION */}
          <motion.section className="text-center" variants={itemVariants}>
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2">The Vispaico BAZOOKA</h1>
            <h3 className="text-2xl mt-4 text-gray-800">Six targeted websites that dominate local search results. Your competition won&apos;t know what hit them - 3 Days | $999</h3>
            <ul className="mt-12" role="list" aria-label="Key Benefits">
            <li className="mt-4 text-2xl max-w-3xl mx-auto text-gray-600">* Fixed price, fixed timeline, zero agency nonsense</li>
            <li className="mt-4 text-2xl max-w-3xl mx-auto text-gray-600">* 6 Domains + 6 x Hosting for 1 year included</li>
            <li className="mt-4 text-2xl max-w-3xl mx-auto text-gray-600">* 100% satisfaction guarantee or full refund</li>
            </ul>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
            <Link
              href="#final-cta"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Start Your Project
            </Link>
          </div>
          </motion.section>

          <motion.section className="mt-16" variants={itemVariants}>
            <FounderNote>
              <p>
                &ldquo;I built the Bazooka because websites that support your local Google listing shouldn&apos;t take two weeks and a small fortune. Most agencies treat every page like it&apos;s the Sistine Chapel&mdash;endless revisions, stakeholder meetings, launch delays. We don&apos;t do that.
              </p>
              <p>
                Here&apos;s why: A website is a weapon, not a monument. Load it, aim it, fire it. If it takes longer to build than to run your campaign, you&apos;ve already lost.&rdquo;
              </p>
              <p>Questions? Email me: <span className="text-orange-600"> niels@vispaico.com </span></p>
            </FounderNote>
          </motion.section>

          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center py-12">Here&apos;s What You Get:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* WHAT'S POSSIBLE SECTION */}
              <div className="border border-gray-300 rounded-lg p-6">
                <h2 className="text-xl font-bold text-center mb-4">Build in under 3 Days. <FontAwesomeIcon icon={faBomb} className="text-orange-500" /> BAZOOKAAAA</h2>
                <div className="flex flex-col items-center">
                  <video src="https://res.cloudinary.com/kinhcode01/video/upload/Vispaico/Maze_Web_innwen.mp4" autoPlay muted loop playsInline className="w-full rounded-lg shadow-lg"></video>
                </div>
              </div>
              {/* FEATURED TESTIMONIAL */}
              <div className="w-full">
                <FeaturedTestimonialBazooka />
              </div>
            </div>
          </motion.section>

          {/* ONE SIMPLE SERVICE SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">Tired of Web Agency Theater?</h2>
            <h3 className="text-2xl text-center mt-4 text-gray-800">
              You need a website, not a 6-month project management nightmare.
            </h3>
            <div className="mt-8 text-lg max-w-2xl mx-auto space-y-2 text-gray-700">
              <p className="flex items-center"><span className="text-red-500 mr-2">✗</span> No &quot;discovery phases&quot; that discover nothing</p>
              <p className="flex items-center"><span className="text-red-500 mr-2">✗</span> No weekly status meetings about nothing</p>
              <p className="flex items-center"><span className="text-red-500 mr-2">✗</span> No surprise invoices for &quot;scope changes&quot;</p>
              <p className="flex items-center"><span className="text-red-500 mr-2">✗</span> No jargon-filled presentations</p>
              <p className="flex items-center mt-6 font-semibold"><span className="text-green-600 mr-2">✓</span> One form. One payment. One website. Done.</p>
              <p className="flex items-center font-semibold"><span className="text-green-600 mr-2">✓</span> WCAG 2.2 AA & EN 301 549 Compliant | EU Accessibility Act Ready</p>
            </div>
            <p className="mt-6 max-w-3xl mx-auto text-center text-gray-700">
              You&apos;re running a great local business, but you feel like you&apos;re shouting into the void. You know you need to be online, but one little website feels like bringing a knife to a gunfight.
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-center text-gray-700">
              That&apos;s why we built the BAZOOKA. We don&apos;t just give you a website; we give you six. Each one is a sharp, focused micro-site with its own domain, all working together to make you the obvious choice in your area. It&apos;s time to stop hoping people find you and start making it impossible for them to miss you.
            </p>
            <p className="text-2xl text-center font-semibold mt-4 bg-clip-text bg-gradient-to-r text-gray-800">
              We build. You launch. Problem solved.
            </p>
          </motion.section>

          {/* YOUR COMPLETE LAUNCH PACKAGE SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">Your Domination Kit.</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8 text-center">
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faSitemap} className="text-4xl text-indigo-700 mb-4" /><h3 className="text-xl font-bold">6 Micro-Websites</h3><p className="text-gray-700">An entire special forces team of websites, each targeting a specific part of your business or area.</p></motion.div>
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faGlobe} className="text-4xl text-indigo-700 mb-4" /><h3 className="text-xl font-bold">Individual Domains & Hosting</h3><p className="text-gray-700">We set up everything. Each site gets its own domain and hosting, making them powerful assets.</p></motion.div>
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faMapMarkedAlt} className="text-4xl text-indigo-700 mb-4" /><h3 className="text-xl font-bold">Google Maps Optimization</h3><p className="text-gray-700">We tie it all into your Google Maps profile to create a local search powerhouse.</p></motion.div>
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faSearch} className="text-4xl text-indigo-700 mb-4" /><h3 className="text-xl font-bold">Found on Google</h3><p className="text-gray-700">SEO-optimized so customers can actually find you (unlike those pretty agency sites nobody sees).</p></motion.div>
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faHandshake} className="text-4xl text-indigo-700 mb-4" /><h3 className="text-xl font-bold">We Do the Heavy Lifting</h3><p className="text-gray-700">Complete setup included - domain registration & hosting paid for 1 year, email, SSL security & GDPR compliance. YES, for all 6 websites...BOOM!</p></motion.div>
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faClock} className="text-4xl text-indigo-700 mb-4" /><h3 className="text-xl font-bold">Guaranteed 3-Day Delivery</h3><p className="text-gray-700">Your new web presence will be live and working for you in just 72 hours.</p></motion.div>
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg md:col-start-2" animate={{ boxShadow: ["0 0 0px rgba(250, 204, 21, 0)", "0 0 20px rgba(250, 204, 21, 0.5)", "0 0 0px rgba(250, 204, 21, 0)"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}><FontAwesomeIcon icon={faBrain} className="text-4xl text-orange-600 mb-4" /><h3 className="text-xl font-bold">Zero Stress</h3><p className="text-gray-700">No project managers, no status calls, no complications. Just results.<br/>*Accessibility Compliance - All sites meet WCAG 2.2 AA standards and comply with the EU Accessibility Act (EAA) and BFSG. Built for all users from day one.</p></motion.div>
            </div>
          </motion.section>

          {/* HOW IT WORKS SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">How It Works - No Meetings Required</h2>
            <div className="mt-8 max-w-2xl mx-auto">
              <TheBazookaProcess />
            </div>
          </motion.section>

          {/* QUICK QUESTIONS SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">Quick Questions</h2>
            <div className="max-w-3xl mx-auto mt-8 text-gray-700">
              <h3 className="text-xl font-bold text-black">Six websites? Isn&apos;t that... a bit much?</h3>
              <p className="mt-2">Not if it works... Six websites target different aspects of your business - one for your main service, one for your location, one for reviews, one for specific services, etc. Each ranks separately on Google, multiplying your visibility. Perfect for restaurants, contractors, dentists, gyms, local service businesses.</p>
              <h3 className="text-xl font-bold mt-8 text-black">What information do you need from me?</h3>
              <p className="mt-2">Business name, what you do, your main message, and any text or images you want included. Even a few sentences work - we can build from there.</p>
              <h3 className="text-xl font-bold mt-8 text-black">What about content creation?</h3>
              <p className="mt-2">We handle copywriting and sourcing images if you don&apos;t have content ready. Just let us know what you&apos;ve got, and we&apos;ll fill in the gaps.</p>
              <h3 className="text-xl font-bold mt-8 text-black">What about the Domain, Hosting, and Emails?</h3>
              <p className="mt-2">Yes. Everything&apos;s included, <strong>for each of the 6 websites:</strong><br/>
                  - 6 Domain registrations for 1 year (if you need one)<br/>
                  - 6 Web hosting packs for 1 year (no monthly fees)<br/>
                  - SSL security & GDPR compliant<br/>
                  - 3 professional email addresses per website<br/>
                  - Up to 100 email accounts per website total if needed<br/>
                  - Instructions to connect to Outlook, Apple Mail, etc.</p>
              <h3 className="text-xl font-bold mt-8 text-black">What about support and changes?</h3>
                  <p className="mt-2">- <strong>7-day unlimited revisions</strong> after delivery<br/>
                  - <strong>30-day technical support</strong> for any bugs<br/>
                  - <strong>Full refund guarantee</strong> 100% satisfaction guarantee - if we don&apos;t deliver what we promised, you don&apos;t pay</p>
              <h3 className="text-xl font-bold mt-8 text-black">How is this different from other agencies?</h3>
                  <p className="mt-2"><strong>We build, they talk.</strong><br/>
                  - No discovery calls or strategy sessions<br/>
                  - No project managers or account executives<br/>
                  - No weekly meetings about progress<br/>
                  - No surprise costs or scope creep<br/>
                  - No 3-month timelines for simple websites<br/>
                  <strong>One payment. One timeline. One result.</strong></p>
                  <h3 className="text-xl font-bold mt-8 text-black">Ready in 3 Days for $999 - Everything Included</h3>
            </div>
          </motion.section>

          {/* FINAL CTA SECTION */}
          <motion.section id="final-cta" className="mt-16 text-center" variants={itemVariants}>
            <KickoffForm service="the-vispaico-bazooka" showServiceInfo={false} />
          </motion.section>

          {/* THE BOTTOM LINE SECTION */}
          <motion.section className="mt-16 text-center" variants={itemVariants}>
            <div className="max-w-3xl mx-auto mt-8">
              <p className="text-xl font-bold text-gray-700">The Bottom Line</p>
              <p className="mt-2 text-gray-700">While agencies schedule meetings to discuss scheduling meetings, your website launches.</p>
              <p className="text-1xl font-light mt-4 bg-clip-text bg-gradient-to-r text-gray-700">$999. 3 Days. Done.</p>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </>
  );
};

export default TheBazookaClientPage;
