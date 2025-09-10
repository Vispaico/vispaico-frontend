// src/components/TheBazookaClientPage.tsx

'use client';

import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import TheBazookaProcess from '@/components/TheBazookaProcess';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faSearch, faHandshake, faClock, faSitemap, faGlobe, faMapMarkedAlt, faBomb } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import FeaturedTestimonialBazooka from '@/components/FeaturedTestimonialBazooka';
import KickoffForm from './KickoffForm';
import Sticker from './Sticker';


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
            <p className="text-4xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">Delivered in 3 Days.</p>
          </motion.section>

          <motion.section className="mt-16" variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* WHAT'S POSSIBLE SECTION */}
              <div className="border border-gray-600 rounded-lg p-6">
                <h2 className="text-xl font-bold text-center mb-4">See What&apos;s Possible in 3 Days. <FontAwesomeIcon icon={faBomb} className="text-orange-500" /> BAZOOKAAAA</h2>
                <div className="flex flex-col items-center">
                  <video src="https://res.cloudinary.com/kinhcode01/video/upload/Vispaico/Maze_Web_innwen.mp4" autoPlay muted loop playsInline className="w-full rounded-lg shadow-lg"></video>
                </div>
              </div>
              {/* FEATURED TESTIMONIAL */}
              <div className="w-full">
                <div className="flex justify-center mb-8">
                  <Sticker text='$999' className="relative bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold shadow-lg w-36 h-10 flex items-center justify-center text-sm" />
                </div>
                <FeaturedTestimonialBazooka />
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
              <motion.div className="p-6 bg-black/20 backdrop-blur-lg border border-white/20 rounded-lg md:col-start-2" animate={{ boxShadow: ["0 0 0px rgba(250, 204, 21, 0)", "0 0 20px rgba(250, 204, 21, 0.5)", "0 0 0px rgba(250, 204, 21, 0)"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}><FontAwesomeIcon icon={faBrain} className="text-4xl text-yellow-400 mb-4" /><h3 className="text-xl font-bold">Peace of Mind</h3><p className="text-gray-300">No jargon, no hidden fees, no complicated process. Just a professional result, guaranteed.</p></motion.div>
            </div>
          </motion.section>

          {/* HOW IT WORKS SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">How It Works</h2>
            <div className="mt-8 max-w-2xl mx-auto">
              <TheBazookaProcess />
            </div>
          </motion.section>

          {/* QUICK QUESTIONS SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">Quick Questions</h2>
            <div className="max-w-3xl mx-auto mt-8 text-gray-300">
              <h3 className="text-xl font-bold text-white">Six websites? Isn&apos;t that... a bit much?</h3>
              <p className="mt-2">Not when you want to own your local market. Think of it like fishing. Would you rather have one fishing line or six? Each site is a hook in the water, pulling in customers for different services or from different neighborhoods. It multiplies your chances of getting found a zillion times.</p>
              <h3 className="text-xl font-bold mt-8 text-white">What information do you need from me?</h3>
              <p className="mt-2">All we need to start is your business name, what you do, your idea for the app, and any text or images you want to include. Even if you only have a few sentences, we can build from there.</p>
              <h3 className="text-xl font-bold mt-8 text-white">What about content creation?</h3>
              <p className="mt-2">We do it all if you don&apos;t have anything, copywriting and producing and sourcing images. If you have custom content, just let us know, and we use it too.</p>
              <h3 className="text-xl font-bold mt-8 text-white">What about the Domain, Hosting, and Emails?</h3>
              <p className="mt-2">You&apos;re probably thinking, &apos;Alright, what&apos;s the catch? What about all that techy domain and hosting stuff?&apos;<br/><br/>We got you. - Think of it like this: you&apos;re buying a car, and we&apos;re making sure it comes with the keys, a full tank of gas, and insurance for the first three years.<br/><br/>If you don&apos;t have domain names (that&apos;s your <code>your-awesome-business.com</code> addresses), we&apos;ll register all 6 for you, on us, for three years, and yes, for all 6 websites.<br/><br/>The hosting—which is basically the parking spot for your websites on the internet—is also completely covered in the price.<br/><br/>And what about emails? Yep, we handle that too. We&apos;ll set you up with three professional email addresses right off the bat for each of the 6 domain (<code>admin@</code>, <code>hello@</code>, and <code>contact@yourdomains.com</code>).<br/><br/>Need a few more for your team? Just give us the names, and we can create up to 10 in total. We&apos;ll give you access to a simple webmail so you can log in from anywhere, and we&apos;ll also send you all the nerdy details you need to plug your new emails right into Outlook, Apple Mail, or whatever you use.</p>
              <h3 className="text-xl font-bold mt-8 text-white">And what about...</h3>
              <p className="mt-2"><strong className="text-yellow-400">Do you have a Technical Support policy?</strong> - YES, a 30-day period for fixing technical bugs is included after project acceptance.</p>
              <p className="mt-2"><strong className="text-yellow-400">Do you have a Revisions & Acceptance policy?</strong> - YES, you are entitled to a 7-day period after delivery of unlimited revisions.</p>
              <p className="mt-2"><strong className="text-yellow-400">Do you have a money back policy?</strong> - YES, of course. A full refund can be claimed for technical failure within 24 hours of delivery. In case of a refund, all rights to the work revert to Vispaico.</p>
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
