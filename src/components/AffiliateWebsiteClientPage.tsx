// src/components/AffiliateWebsiteClientPage.tsx

'use client';

import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import TwoDayProcess from '@/components/TwoDayProcess'; // We will create this next
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faMobileAlt, faSearch, faHandshake, faClock, faWebAwesome, faBrain, faFire } from '@fortawesome/free-solid-svg-icons';
import React, { Suspense } from 'react';
import FeaturedTestimonial24 from '@/components/FeaturedTestimonial24';
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

          <motion.section className="mt-16" variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* WHAT'S POSSIBLE SECTION */}
              <div className="border border-gray-600 rounded-lg p-6">
                <h2 className="text-xl font-bold text-center mb-4">See What&apos;s Possible in 48 Hours. <FontAwesomeIcon icon={faFire} className="text-orange-500" /> For $399.</h2>
                <div className="flex flex-col items-center">
                  <video src="https://res.cloudinary.com/kinhcode01/video/upload/Vispaico/Azure_Web_cuf1ji.mp4" autoPlay muted loop playsInline className="w-full rounded-lg shadow-lg"></video>
                </div>
              </div>
              {/* FEATURED TESTIMONIAL */}
              <div className="w-full">
                <FeaturedTestimonial24 />
              </div>
            </div>
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
              <motion.div className="p-6 bg-black/20 backdrop-blur-lg border border-white/20 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faClock} className="text-4xl text-indigo-400 mb-4" /><h3 className="text-xl font-bold">Guaranteed 2-Day Delivery</h3><p className="text-gray-300">Your site will be live and ready to earn in 48 hours. And yes, that includes the hosting, the email setup, and the domain registration for 3 years if you need it.</p></motion.div>
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

          {/* QUICK QUESTIONS SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">Quick Questions</h2>
            <div className="max-w-3xl mx-auto mt-8 text-gray-300">
              <h3 className="text-xl font-bold text-white">Is this the right website for me?</h3>
              <p className="mt-2">This $399 Affiliate website is best if you want to earn money with affiliate marketing. If you have already affliate links let us know. Otherwise we build the whole system from scratch for you.</p>
              <p className="mt-2"><strong className="text-yellow-400">Don&apos;t worry if you&apos;re not sure!</strong> We can help you figure out what&apos;s best for your goal after you get in touch.</p>
              <h3 className="text-xl font-bold mt-8 text-white">What information do you need from me?</h3>
              <p className="mt-2">All we need to start is your business or website name, what affiliate niche you want to build, and any text or images you want to include. Even if you only have a few sentences, we can build from there.</p>
              <h3 className="text-xl font-bold mt-8 text-white">What about content creation?</h3>
              <p className="mt-2">We do it all if you don&apos;t have anything, copywriting and producing and sourcing images. We also do the sign-up at the suitable affiliate network and choose the best products. If you have custom content, or you have already affiliate product links, just let us know, and we use it too.</p>
              <h3 className="text-xl font-bold mt-8 text-white">What about the Domain, Hosting, and Emails?</h3>
              <p className="mt-2">You&apos;re probably thinking, &apos;Alright, what&apos;s the catch? What about all that techy domain and hosting stuff?&apos;<br/><br/>We got you. - Think of it like this: you&apos;re buying a car, and we&apos;re making sure it comes with the keys, a full tank of gas, and insurance for the first three years.<br/><br/>If you don&apos;t have a domain name (that&apos;s your <code>your-awesome-business.com</code> address), we&apos;ll register one for you, on us, for three years.<br/><br/>The hosting—which is basically the parking spot for your website on the internet—is also completely covered in the price.<br/><br/>And what about emails? Yep, we handle that too. We&apos;ll set you up with three professional email addresses right off the bat (<code>admin@</code>, <code>hello@</code>, and <code>contact@yourdomain.com</code>).<br/><br/>Need a few more for your team? Just give us the names, and we can create up to 10 in total. We&apos;ll give you access to a simple webmail so you can log in from anywhere, and we&apos;ll also send you all the nerdy details you need to plug your new emails right into Outlook, Apple Mail, or whatever you use.</p>
              <h3 className="text-xl font-bold mt-8 text-white">And what about...</h3>
              <p className="mt-2"><strong className="text-yellow-400">Do you have a Technical Support policy?</strong> - YES, a 30-day period for fixing technical bugs is included after project acceptance.</p>
              <p className="mt-2"><strong className="text-yellow-400">Do you have a Revisions & Acceptance policy?</strong> - YES, you are entitled to a 7-day period after delivery of unlimited revisions.</p>
              <p className="mt-2"><strong className="text-yellow-400">Do you have a money back policy?</strong> - YES, of course. A full refund can be claimed for technical failure within 24 hours of delivery. In case of a refund, all rights to the work revert to Vispaico.</p>
            </div>
          </motion.section>

          {/* FINAL CTA SECTION */}
          <motion.section className="mt-16 text-center" variants={itemVariants}>
            <Suspense fallback={<div>Loading...</div>}>
                <KickoffForm service="affiliate-website" showServiceInfo={false} />
            </Suspense>
          </motion.section>
        </div>
      </motion.div>
    </>
  );
};

export default AffiliateWebsiteClientPage;