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
              Vispaico Premium Website - $4,000 | 14 Days | Conversion-Ready
            </h1>
            <h3 className="text-2xl mt-4 text-gray-800">
              A bespoke, conversion-engineered flagship site built for founders who&apos;ve outgrown templates and DIY solutions.
            </h3>
            <ul className="mt-12" role="list" aria-label="Key Benefits">
              <li className="mt-4 text-2xl max-w-3xl mx-auto text-gray-600">* Dedicated senior team: strategy, UX, engineering, analytics</li>
              <li className="mt-4 text-2xl max-w-3xl mx-auto text-gray-600">* Everything included: hosting, domain, automations, accessibility compliance</li>
              <li className="mt-4 text-2xl max-w-3xl mx-auto text-gray-600">* Final review, handoff meeting, and 30-day priority support</li>
            </ul>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
              <Link
                href="#final-cta"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Let Us Talk About Your Project
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
              Your team needs clarity, reliability, and performance. We deliver all three, building momentum from day one.
            </h3>
            <div className="mt-8 text-lg max-w-2xl mx-auto space-y-2 text-gray-700">
              <p className="flex items-center"><span className="text-red-500 mr-2">✗</span> No 6-week discovery cycles that stall momentum.</p>
              <p className="flex items-center"><span className="text-red-500 mr-2">✗</span> No &quot;hourly overruns&quot; or unclear scopes.</p>
              <p className="flex items-center"><span className="text-red-500 mr-2">✗</span> No handoffs to junior teams after kickoff.</p>
              <p className="flex items-center mt-6 font-semibold"><span className="text-green-600 mr-2">✓</span> A senior strike team that ships, tests, and launches.</p>
              <p className="flex items-center font-semibold"><span className="text-green-600 mr-2">✓</span> WCAG 2.2 AA & EN 301 549 Compliant | EU Accessibility Act Ready</p>
            </div>
            <p className="mt-6 max-w-3xl mx-auto text-center text-gray-700">
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
                <p className="text-gray-700">Documentation, maintenance playbook, and 30-day priority support.<br/>*Accessibility Compliance - All sites meet WCAG 2.2 AA standards and comply with the EU Accessibility Act (EAA) and BFSG. Built for all users from day one.</p>
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
                Agencies, SaaS companies, and B2B service firms that need a high-performing flagship site for marketing, sales, and lead generation. If you&apos;re scaling past templates, this is for you.
              </p>
              <h3 className="text-xl font-bold mt-8 text-black">What do you need from us?</h3>
              <p className="mt-2">
                Your Brand assets, your goals, timeline, target audience, and any key integrations you need. Everything else—strategy, design, development, hosting—is handled by our team.
              </p>
              <h3 className="text-xl font-bold mt-8 text-black">Can we integrate with existing systems?</h3>
              <p className="mt-2">
                Yes. We integrate with your existing CRM, marketing automation, analytics, scheduling, multi-language systems, and more. Let us know what you use.
              </p>
              <h3 className="text-xl font-bold mt-8 text-black">What happens after launch?</h3>
              <p className="mt-2">
                You get full documentation, a dedicated onboarding session, and 30 days of priority support included. Ongoing support plans available beyond the initial period.
              </p>
              <h3 className="text-xl font-bold mt-8 text-black">What&apos;s the guarantee?</h3>
              <p className="mt-2">
                We deliver exactly what&apos;s agreed in the scope, on time and performing. If something isn&apos;t working, we fix it—no excuses.
              </p>
            </div>
          </motion.section>

          <motion.section id="final-cta" className="mt-16 text-center" variants={itemVariants}>
            <KickoffForm service="vispaico_premium_website" showServiceInfo={false} />
          </motion.section>

          <motion.section className="mt-16 text-center" variants={itemVariants}>
            <div className="max-w-3xl mx-auto mt-8">
              <p className="text-xl font-bold text-gray-700">The Bottom Line</p>
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
