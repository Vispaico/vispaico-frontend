// src/components/MultiProductStoreClientPage.tsx

'use client';

import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import MultiProductProcess from '@/components/MultiProductProcess';
import FounderNote from '@/components/FounderNote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faPaintBrush, faMobileAlt, faSearch, faHandshake, faClock, faBrain, faFire } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import FeaturedTestimonialMulti from '@/components/FeaturedTestimonialMulti';
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


const MultiProductStoreClientPage = () => {

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
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2">Full E-commerce Store in 10 Days - Everything Included.</h1>
            <h3 className="text-2xl mt-4 text-gray-800">Perfect for product businesses, retailers, wholesalers moving online. What Shopify + developers cost $8k+, delivered for $1999.</h3>
            <p className="text-2xl mt-4 max-w-5xl mx-auto text-center font-light text-gray-800">While competitors schedule &quot;discovery calls&quot; and send 47-page proposals, your professional website goes live. Fixed price, fixed timeline, zero agency nonsense.</p>
            <p className="mt-4 text-2xl max-w-3xl mx-auto text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2">Domain registration and Hosting for 1 year included.</p>
            <p className="mt-4 max-w-3xl mx-auto text-center text-gray-800">If you&apos;re not 100% satisfied, we&apos;ll revise until you are or refund your money. No questions asked.</p>
          </motion.section>

          <motion.section className="mt-16" variants={itemVariants}>
            <FounderNote>
              <p>
                &ldquo;I built this service because I was tired of watching entrepreneurs sit on great products while agencies &apos;explored e-commerce solutions&apos; for three months. We don&apos;t do that.
              </p>
              <p>
                Here&apos;s why: Your shop doesn&apos;t need to be Amazon on day one. It needs to take payments and ship orders. Start simple, scale smart.&rdquo;
              </p>
            </FounderNote>
          </motion.section>

          <motion.section className="mt-16" variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* WHAT'S POSSIBLE SECTION */}
              <div className="border border-gray-300 rounded-lg p-6">
                <h2 className="text-xl font-bold text-center mb-4"><FontAwesomeIcon icon={faFire} className="text-orange-500" /> Build in under 10 Days.</h2>
                <div className="flex flex-col items-center">
                  <video src="https://res.cloudinary.com/kinhcode01/video/upload/v1760930818/Vispaico/Images/Vispea_mgvptg.mp4" autoPlay muted loop playsInline className="w-full rounded-lg shadow-lg"></video>
                </div>
              </div>
              {/* FEATURED TESTIMONIAL */}
              <div className="w-full">
                <FeaturedTestimonialMulti />
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
            <p className="mt-4 max-w-3xl mx-auto text-center text-gray-700">
              You need to be online, but you don&apos;t have time for jargon, confusing prices, or a complicated process. We get it.
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-center text-gray-700">
              That&apos;s why we offer one straightforward service: we take your basic info and turn it into a professional online shop in just 10 days. And that means all is done, domain, hosting, payment provider integration, Product listing, and and and... <br/>We handle all the tech stuff so you can focus on your business.
            </p>
            <p className="text-2xl text-center font-semibold mt-4 bg-clip-text bg-gradient-to-r text-gray-800">
              We build. You launch. Problem solved.
            </p>
          </motion.section>

          {/* YOUR COMPLETE LAUNCH PACKAGE SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">Your Complete Launch Package.</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8 text-center">
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faDesktop} className="text-4xl text-indigo-700 mb-4" /><h3 className="text-xl font-bold">A fully functional Online Store</h3><p className="text-gray-700">Inventory management, Automatic tax calculation, Shipping zones, Order tracking, Customer accounts, Email notifications, Analytics dashboard. Stripe, PayPal, Apple Pay ready. *No transaction fees beyond standard Stripe/PayPal rates</p></motion.div>
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faPaintBrush} className="text-4xl text-indigo-700 mb-4" /><h3 className="text-xl font-bold">Professional Design</h3><p className="text-gray-700">Clean, modern design that reflects your business (not our design portfolio ego).</p></motion.div>
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faMobileAlt} className="text-4xl text-indigo-700 mb-4" /><h3 className="text-xl font-bold">Works Everywhere</h3><p className="text-gray-700">Perfect on phones, tablets, desktops. Because your customers use all three.</p></motion.div>
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faSearch} className="text-4xl text-indigo-700 mb-4" /><h3 className="text-xl font-bold">Found on Google</h3><p className="text-gray-700">SEO-optimized so customers can actually find you (unlike those pretty agency sites nobody sees).</p></motion.div>
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faHandshake} className="text-4xl text-indigo-700 mb-4" /><h3 className="text-xl font-bold">We Handle Everything</h3><p className="text-gray-700">Complete setup included - domain registration & hosting paid for 1 year, email, SSL security & GDPR compliance. You own everything.</p></motion.div>
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg" variants={itemVariants}><FontAwesomeIcon icon={faClock} className="text-4xl text-indigo-700 mb-4" /><h3 className="text-xl font-bold">Guaranteed 10-Day Delivery</h3><p className="text-gray-700">We mean it. You&apos;ll be ready to launch in 10 days.</p></motion.div>
              <motion.div className="p-6 bg-gray-100 border border-gray-200 rounded-lg md:col-start-2" animate={{ boxShadow: ["0 0 0px rgba(250, 204, 21, 0)", "0 0 20px rgba(250, 204, 21, 0.5)", "0 0 0px rgba(250, 204, 21, 0)"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}><FontAwesomeIcon icon={faBrain} className="text-4xl text-orange-600 mb-4" /><h3 className="text-xl font-bold">Zero Stress</h3><p className="text-gray-700">No project managers, no status calls, no complications. Just results.</p></motion.div>
            </div>
          </motion.section>

          {/* HOW IT WORKS SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">How It Works - No Meetings Required</h2>
            <div className="mt-8 max-w-2xl mx-auto">
              <MultiProductProcess />
            </div>
          </motion.section>

          {/* QUICK QUESTIONS SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">Quick Questions</h2>
            <div className="max-w-3xl mx-auto mt-8 text-gray-700">
              <h3 className="text-xl font-bold text-black">Is this the right website for me?</h3>
              <p className="mt-2">A multi product store is a website that is dedicated to selling multiple products. It&apos;s a great way to focus your marketing efforts and drive sales.</p>
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
                  <h3 className="text-xl font-bold mt-8 text-black">Ready in 10 Days for $1999 - Everything Included</h3>
            </div>
          </motion.section>

          {/* FINAL CTA SECTION */}
          <motion.section className="mt-16 text-center" variants={itemVariants}>
            <KickoffForm service="full-online-store" showServiceInfo={false} />
          </motion.section>

          {/* THE BOTTOM LINE SECTION */}
          <motion.section className="mt-16 text-center" variants={itemVariants}>
            <div className="max-w-3xl mx-auto mt-8">
              <h3 className="text-xl font-bold text-gray-700">The Bottom Line</h3>
              <p className="mt-2 text-gray-700">While agencies schedule meetings to discuss scheduling meetings, your website launches.</p>
              <p className="text-1xl font-light mt-4 bg-clip-text bg-gradient-to-r text-gray-700">$1999. 10 Days. Done.</p>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </>
  );
};

export default MultiProductStoreClientPage;