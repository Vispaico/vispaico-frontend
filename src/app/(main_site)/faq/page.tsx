"use client";

import React from 'react';
import { motion } from 'framer-motion';

const FAQPage: React.FC = () => {
  const faqItems = [
    {
      "question": "What is Vispaico?",
      "answer": "We're a web development team that builds professional websites fast without the agency nonsense. No discovery calls, no project managers, no 6-month timelines. Just websites that work, delivered when promised."
    },
    {
      "question": "Why should I choose you over a local web agency?",
      "answer": "Agencies charge $5k-15k and take 3-6 months with endless meetings. We deliver the same quality in days, not months, for a fraction of the cost. Plus you own everything - no monthly hosting fees or maintenance contracts."
    },
    {
      "question": "What if I don't like the design?",
      "answer": "You get 7 days of unlimited revisions after delivery. We keep tweaking until you're happy. Most clients love the first version, but we're not done until you are."
    },
    {
      "question": "Do you handle content and copywriting?",
      "answer": "Yes. If you don't have content ready, we'll write it for you. Just tell us about your business in your own words - we'll turn it into professional web copy that converts."
    },
    {
      "question": "What happens after my website is built?",
      "answer": "You own everything. The website, domain, hosting, and all files. You can update it yourself or hire anyone to maintain it. No vendor lock-in, no ongoing fees unless you want our help."
    },
    {
      "question": "Do you provide ongoing support and maintenance?",
      "answer": "We include 30 days of technical support and 7 days of revisions with every project. After that, ongoing maintenance is optional - many clients prefer to handle updates themselves since we build user-friendly sites."
    },
    {
      "question": "Can I see examples of your work?",
      "answer": "Absolutely! Visit our <a href=\"/portfolio\" className=\"text-yellow-400 hover:text-yellow-400 underline\">Portfolio</a> to see real projects we've built for restaurants, contractors, consultants, and online stores."
    },
    {
      "question": "How do I get started?",
      "answer": "Choose your service and fill out the form. You'll get a contract and invoice within an hour. Pay when you're ready to start, and we'll have your site live within the promised timeframe."
    },
    {
      "question": "Do you have a Technical Support policy?",
      "answer": "YES, 30 days of technical bug fixes included after project delivery. If something breaks due to our code, we fix it free."
    },
    {
      "question": "Do you have a Revisions policy?",
      "answer": "YES, 7 days of unlimited revisions after delivery. Change colors, text, layout - whatever you need to make it perfect."
    },
    {
      "question": "Do you have a money back policy?",
      "answer": "YES, full refund if we can't deliver what we promised within 24 hours of supposed completion. We've never had to use it, but it's there for your peace of mind."
    },
    {
      "question": "Do you do SEO?",
      "answer": "Every website we build is SEO-optimized from day one - proper titles, meta descriptions, fast loading, mobile-friendly. We don't do ongoing SEO campaigns, but your site will be found on Google."
    },
    {
      "question": "What about hosting and domains?",
      "answer": "Included for 3 years with most services. We register your domain, set up hosting, security/SSL, and configure everything. After 3 years, you can renew with us or take it anywhere - you own it all."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2">Frequently Asked Questions</h1>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-6"
            >
              <h2 className="text-xl font-semibold text-indigo-400 mb-2">{item.question}</h2>
              <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
