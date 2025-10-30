'use client';

import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import PremiumWebsiteProcess from '@/components/PremiumWebsiteProcess';
import PremiumWebsiteFounderNote from '@/components/PremiumWebsiteFounderNote';
import FeaturedTestimonialPremium from '@/components/FeaturedTestimonialPremium';
import KickoffForm from '@/components/KickoffForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCrown,
  faUserTie,
  faGaugeHigh,
  faChartLine,
  faShieldHalved,
  faGlobe,
  faBolt,
} from '@fortawesome/free-solid-svg-icons';

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

const PremiumWebsiteClientPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

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
          <motion.section className="text-center" variants={itemVariants}>
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2">
              Vispaico Premium Website
            </h1>
            <h3 className="text-2xl mt-4 text-gray-800">
              $4000. 14 days. A bespoke, conversion-ready flagship site engineered for teams who have outgrown templates and patchwork redesigns.
            </h3>
            <ul className="mt-12" role="list" aria-label="Key Benefits">
              <li className="mt-4 text-2xl max-w-3xl mx-auto text-gray-600">* Dedicated senior squad: strategy, UX, engineering, analytics.</li>
              <li className="mt-4 text-2xl max-w-3xl mx-auto text-gray-600">* Everything included—hosting, domain, automations, compliance.</li>
              <li className="mt-4 text-2xl max-w-3xl mx-auto text-gray-600">* Final review, playbook handoff, and 30-day priority support.</li>
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
            <PremiumWebsiteFounderNote />
          </motion.section>

          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center py-12">Here&apos;s What You Get:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="border border-gray-300 rounded-lg p-6">
                <h2 className="text-xl font-bold text-center mb-4">
                  Launch-ready in 14 Days.
                </h2>
                <div className="flex flex-col items-center">
                  <video
                    src="https://res.cloudinary.com/kinhcode01/video/upload/v1760930818/Vispaico/Images/Vispea_mgvptg.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full rounded-lg shadow-lg"
                  ></video>
                </div>
              </div>
              <div className="w-full">
                <FeaturedTestimonialPremium />
              </div>
            </div>
          </motion.section>

          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">Engineered to Scale Without Drama</h2>
            <h3 className="text-2xl text-center mt-4 text-gray-800">
              Your team needs clarity, reliability, and performance. We ship all three.
            </h3>
            <div className="mt-8 text-lg max-w-2xl mx-auto space-y-2 text-gray-700">
              <p className="flex items-center"><span className="text-red-500 mr-2">✗</span> No 6-week discovery cycles that stall momentum.</p>
              <p className="flex items-center"><span className="text-red-500 mr-2">✗</span> No &quot;hourly overruns&quot; or unclear scopes.</p>
              <p className="flex items-center"><span className="text-red-500 mr-2">✗</span> No handoffs to junior teams after kickoff.</p>
              <p className="flex items-center mt-4 font-semibold text-green-600"><span className="mr-2">✓</span> A senior strike team that ships, tests, and launches.</p>
            </div>
            <p className="mt-4 max-w-3xl mx-auto text-center text-gray-700">
              You stay focused on growth while we engineer the digital HQ your brand deserves. From messaging and UX to integrations and analytics, every detail is handled.
            </p>
            <p className="text-2xl text-center font-semibold mt-4 bg-clip-text bg-gradient-to-r text-gray-800">
              100% ownership. 0% agency theater.
            </p>
          </motion.section>

          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">Your Premium Delivery Stack</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8 text-center">
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg" variants={itemVariants}>
                <FontAwesomeIcon icon={faCrown} className="text-4xl text-indigo-700 mb-4" />
                <h3 className="text-xl font-bold">Custom Design System</h3>
                <p className="text-gray-700">Tailored UI kit, interaction states, and component library ready for future product work.</p>
              </motion.div>
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg" variants={itemVariants}>
                <FontAwesomeIcon icon={faUserTie} className="text-4xl text-indigo-700 mb-4" />
                <h3 className="text-xl font-bold">Dedicated Producer</h3>
                <p className="text-gray-700">Single point of contact with daily async updates and milestone tracking.</p>
              </motion.div>
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg" variants={itemVariants}>
                <FontAwesomeIcon icon={faGaugeHigh} className="text-4xl text-indigo-700 mb-4" />
                <h3 className="text-xl font-bold">Performance Tuned</h3>
                <p className="text-gray-700">Core Web Vitals optimized, CDN-configured, and load-tested before launch.</p>
              </motion.div>
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg" variants={itemVariants}>
                <FontAwesomeIcon icon={faChartLine} className="text-4xl text-indigo-700 mb-4" />
                <h3 className="text-xl font-bold">Revenue Intelligence</h3>
                <p className="text-gray-700">Analytics, dashboards, CRM, and marketing automations wired from day one.</p>
              </motion.div>
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg" variants={itemVariants}>
                <FontAwesomeIcon icon={faShieldHalved} className="text-4xl text-indigo-700 mb-4" />
                <h3 className="text-xl font-bold">Enterprise Hardening</h3>
                <p className="text-gray-700">Security, accessibility, and compliance baked in—SOC2-ready deployment checklist included.</p>
              </motion.div>
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg" variants={itemVariants}>
                <FontAwesomeIcon icon={faGlobe} className="text-4xl text-indigo-700 mb-4" />
                <h3 className="text-xl font-bold">Worldwide Infrastructure</h3>
                <p className="text-gray-700">Managed hosting, CDN, and multi-language readiness. You own everything.</p>
              </motion.div>
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg md:col-start-2" animate={{ boxShadow: [
                '0 0 0px rgba(250, 204, 21, 0)',
                '0 0 20px rgba(250, 204, 21, 0.5)',
                '0 0 0px rgba(250, 204, 21, 0)'
              ] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
                <FontAwesomeIcon icon={faBolt} className="text-4xl text-orange-600 mb-4" />
                <h3 className="text-xl font-bold">White-Glove Handoff</h3>
                <p className="text-gray-700">Training recordings, maintenance playbook, and 30-day priority support.</p>
              </motion.div>
            </div>
          </motion.section>

          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">How It Works</h2>
            <div className="mt-8 max-w-2xl mx-auto">
              <PremiumWebsiteProcess />
            </div>
          </motion.section>

          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">Quick Questions</h2>
            <div className="max-w-3xl mx-auto mt-8 text-gray-700">
              <h3 className="text-xl font-bold text-black">Who is this for?</h3>
              <p className="mt-2">
                Funded startups, agencies, and mid-sized teams that need a flagship site to align marketing, sales, and product. If you&apos;re revamping after a growth spurt or prepping for launch, this is for you.
              </p>
              <h3 className="text-xl font-bold mt-8 text-black">What do you need from us?</h3>
              <p className="mt-2">
                Brand assets, positioning, tech stack details, and access to current tools. If something is missing, we help you build it.
              </p>
              <h3 className="text-xl font-bold mt-8 text-black">Can we integrate with existing systems?</h3>
              <p className="mt-2">
                Yes. We handle CRM, marketing automation, analytics, scheduling, multi-language, and more. Just show us the stack.
              </p>
              <h3 className="text-xl font-bold mt-8 text-black">What happens after launch?</h3>
              <p className="mt-2">
                We train your team, hand over documentation, and stay on call for 30 days of priority support. Need retained work? We&apos;ll map it out.
              </p>
              <h3 className="text-xl font-bold mt-8 text-black">What&apos;s the guarantee?</h3>
              <p className="mt-2">
                We deliver what&apos;s scoped or you don&apos;t pay. Unlimited revisions inside the 14-day window and a full satisfaction guarantee.
              </p>
            </div>
          </motion.section>

          <motion.section id="final-cta" className="mt-16 text-center" variants={itemVariants}>
            <KickoffForm service="vispaico_premium_website" showServiceInfo={false} />
          </motion.section>

          <motion.section className="mt-16 text-center" variants={itemVariants}>
            <div className="max-w-3xl mx-auto mt-8">
              <h3 className="text-xl font-bold text-gray-700">The Bottom Line</h3>
              <p className="mt-2 text-gray-700">A premium web presence without the premium drama.</p>
              <p className="text-1xl font-light mt-4 bg-clip-text bg-gradient-to-r text-gray-700">$4000. 14 Days. Yours.</p>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </>
  );
};

export default PremiumWebsiteClientPage;
