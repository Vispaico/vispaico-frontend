// src/components/ThreeDayWebsiteClientPage.tsx

'use client';

import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import ThreeDayProcess from '@/components/ThreeDayProcess';
import FounderNote from '@/components/FounderNote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faPaintBrush, faMobileAlt, faSearch, faHandshake, faClock, faBrain, faFire } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import FeaturedTestimonial from '@/components/FeaturedTestimonial';
import KickoffForm from './KickoffForm';


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
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2">Your Website in 3 Days. No Meetings Required.</h1>
            <h3 className="text-3xl mt-4 text-gray-800">What agencies quote at $5k+, delivered in 72 hours for $899.</h3>
            <ul className="mt-12" role="list" aria-label="Key Benefits">
            <li className="mt-4 text-2xl max-w-3xl mx-auto text-gray-600">* Fixed price, fixed timeline, zero agency nonsense</li>
            <li className="mt-4 text-2xl max-w-3xl mx-auto text-gray-600">* Domain + Hosting for 1 year included</li>
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

          {/* FOUNDER NOTE SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <FounderNote>
              <p>
                &ldquo;I built this service because your business website shouldn&apos;t take longer to build than starting the actual business. Most agencies stretch it into weeks of wireframes, mood boards, and revision rounds. We don&apos;t do that.
              </p>
              <p>
                Here&apos;s why: Every day your site isn&apos;t live is a day you&apos;re losing customers. Three days is enough to look professional, get found, and start closing deals.&rdquo;
              </p>
              <p>Questions? Email me: <span className="text-orange-600"> niels@vispaico.com </span></p>
            </FounderNote>
          </motion.section>

          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center py-12">Here&apos;s What You Get:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* WHAT'S POSSIBLE SECTION */}
              <div className="border border-gray-300 rounded-lg p-6">
                <h2 className="text-xl font-bold text-center mb-4"><FontAwesomeIcon icon={faFire} className="text-orange-500" /> Built in under 3 Days.</h2>
                <div className="flex flex-col items-center">
                  <video src="https://res.cloudinary.com/kinhcode01/video/upload/Vispaico/RiverCity_Web_vfofed.mp4" autoPlay muted loop playsInline className="w-full rounded-lg shadow-lg"></video>
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
            <h2 className="text-4xl font-bold text-center">Tired of Web Agency Theater?</h2>
            <h3 className="text-2xl text-center mt-4 text-gray-800">
              You need a website, not a 6-month project management nightmare.
            </h3>
            <div className="mt-8 text-lg max-w-2xl mx-auto space-y-2 text-gray-700">
              <p className="flex items-center"><span className="text-red-500 mr-2">✗</span> No &quot;discovery phases&quot; that discover nothing</p>
              <p className="flex items-center"><span className="text-red-500 mr-2">✗</span> No weekly status meetings about nothing</p>
              <p className="flex items-center"><span className="text-red-500 mr-2">✗</span> No surprise invoices for &quot;scope changes&quot;</p>
              <p className="flex items-center"><span className="text-red-500 mr-2">✗</span> No jargon-filled presentations</p>
              <p className="flex items-center mt-4 font-semibold text-green-600"><span className="mr-2">✓</span> One form. One payment. One website. Done.</p>
            </div>
            <p className="mt-4 max-w-3xl mx-auto text-center text-gray-800">
              That&apos;s why we offer one straightforward service: we take your basic info and turn it into a professional online presence in just three days. Whether you need a few pages to showcase your whole business or one powerful page to capture leads, the price and the promise are the same.
            </p>
            <p className="text-xl text-center font-semibold mt-4 bg-clip-text bg-gradient-to-r text-gray-800">
              Day 1: Design & Planning - Day 2-3: Build & Test - Day 3: Launch & Handover
            </p>
            <p className="text-2xl text-center font-semibold mt-4 bg-clip-text bg-gradient-to-r text-gray-800">
              We build. You launch. Problem solved.
            </p>
          </motion.section>

          {/* YOUR COMPLETE LAUNCH PACKAGE SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">Your Complete Launch Package.</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8 text-center">
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faDesktop} className="text-4xl text-indigo-700 mb-4" /><h3 className="text-xl font-bold">Built Your Way</h3><p className="text-gray-700">Complete business website with multiple pages, contact forms, and professional dashboard. Perfect for service businesses, restaurants, contractors, consultants, small retailers.</p></motion.div>
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faPaintBrush} className="text-4xl text-indigo-700 mb-4" /><h3 className="text-xl font-bold">Professional Design</h3><p className="text-gray-700">Clean, modern design that reflects your business (not our design portfolio ego).</p></motion.div>
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faMobileAlt} className="text-4xl text-indigo-700 mb-4" /><h3 className="text-xl font-bold">Works Everywhere</h3><p className="text-gray-700">Perfect on phones, tablets, desktops. Because your customers use all three.</p></motion.div>
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faSearch} className="text-4xl text-indigo-700 mb-4" /><h3 className="text-xl font-bold">Found on Google</h3><p className="text-gray-700">SEO-optimized so customers can actually find you (unlike those pretty agency sites nobody sees).</p></motion.div>
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faHandshake} className="text-4xl text-indigo-700 mb-4" /><h3 className="text-xl font-bold">We Handle Everything</h3><p className="text-gray-700">Complete setup included - domain registration & hosting paid for 1 year, email, SSL security & GDPR compliance. You own everything.</p></motion.div>
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faClock} className="text-4xl text-indigo-700 mb-4" /><h3 className="text-xl font-bold">72-Hour Delivery</h3><p className="text-gray-700">We mean it. Ready to launch in 3 days, not 3 months.</p></motion.div>
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg md:col-start-2" animate={{ boxShadow: ["0 0 0px rgba(250, 204, 21, 0)", "0 0 20px rgba(250, 204, 21, 0.5)", "0 0 0px rgba(250, 204, 21, 0)"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}><FontAwesomeIcon icon={faBrain} className="text-4xl text-orange-600 mb-4" /><h3 className="text-xl font-bold">Zero Stress</h3><p className="text-gray-700">No project managers, no status calls, no complications. Just results.</p></motion.div>
            </div>
          </motion.section>

          {/* HOW IT WORKS SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">How It Works - No Meetings Required</h2>
            <div className="mt-8 max-w-2xl mx-auto">
              <ThreeDayProcess />
            </div>
          </motion.section>

          {/* QUICK QUESTIONS SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">Quick Questions</h2>
            <div className="max-w-3xl mx-auto mt-8 text-gray-700">
              <h3 className="text-xl font-bold text-black">Is this the right website for me?</h3>
              <p className="mt-2">This $899 service works best if you want multiple pages, an &quot;About Us&quot; section, contact forms, and newsletter signups. Perfect for service businesses, consultants, small retailers, or anyone who needs a complete online presence.</p>
              <p className="mt-2"><strong className="text-orange-600">Don&apos;t worry if you&apos;re not sure!</strong> We&apos;ll help you figure out what&apos;s best after you get in touch.</p>
              <h3 className="text-xl font-bold mt-8 text-black">What information do you need from me?</h3>
              <p className="mt-2">Business name, what you do, your main message, and any text or images you want included. Even a few sentences work - we can build from there.</p>
              <h3 className="text-xl font-bold mt-8 text-black">What about content creation?</h3>
              <p className="mt-2">We handle copywriting and sourcing images if you don&apos;t have content ready. Just let us know what you&apos;ve got, and we&apos;ll fill in the gaps.</p>
              <h3 className="text-xl font-bold mt-8 text-black">What about the Domain, Hosting, and Emails?</h3>
              <p className="mt-2">Yes. Everything&apos;s included:<br/>
                  - Domain registration for 1 year (if you need one)<br/>
                  - Web hosting for 1 year (no monthly fees)<br/>
                  - SSL security & GDPR compliant<br/>
                  - 3 professional email addresses<br/>
                  - Up to 100 email accounts total if needed<br/>
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
                  <h3 className="text-xl font-bold mt-8 text-black">Ready in 3 Days for $899 - Everything Included</h3>
            </div>
          </motion.section>

          {/* FINAL CTA SECTION */}
          <motion.section id="final-cta" className="mt-16 text-center" variants={itemVariants}>
            <KickoffForm service="vispaico-three-day-business-website" showServiceInfo={false} />
          </motion.section>

          {/* THE BOTTOM LINE SECTION */}
          <motion.section className="mt-16 text-center" variants={itemVariants}>
            <div className="max-w-3xl mx-auto mt-8">
              <p className="text-xl font-bold text-gray-700">The Bottom Line</p>
              <p className="mt-2 text-gray-700">While agencies schedule meetings to discuss scheduling meetings, your website launches.</p>
              <p className="text-1xl font-light mt-4 bg-clip-text bg-gradient-to-r text-gray-700">$899. 3 Days. Done.</p>
            </div>
          </motion.section>

        </div>
      </motion.div>
    </>
  );
};

export default ThreeDayWebsiteClientPage;
