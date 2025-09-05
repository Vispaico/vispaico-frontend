"use client";

import React from 'react';
import { motion } from 'framer-motion';

const FAQPage: React.FC = () => {
  const faqItems = [
    {
      "question": "What is Vispaico?",
      "answer": "Vispaico is a web development team dedicated to creating standout websites quickly. We blend creativity with AI-driven solutions to deliver sites that look sharp and perform flawlessly. Whether you need a simple landing page or a complex e-commerce platform, you'll get it."
    },
    {
      "question": "I don't talk Website gibberish, can you help?",
      "answer": "Neither do we! We speak your language. No jargon or buzzwords. You just tell us in your words what you need, and we’ll make it happen. For real!, that's one reason we started it, we hate that jargon and 'clever' sounding word salad."
    },
    {
      "question": "How can AI benefit my business with Vispaico?",
      "answer": "We use AI to boost your business by automating content creation, powering smart chatbots for customer service, analyzing data for better decisions, and crafting personalized user experiences."
    },
    {
      "question": "Do you provide ongoing support and maintenance?",
      "answer": "Yes, we offer tailored support and maintenance plans to keep your website secure, updated, and running smoothly, customized to your needs."
    },
    {
      "question": "Can I see examples of your work?",
      "answer": "Of course! Visit our Portfolio section to explore the diverse projects we’ve completed for our clients."
    },
    {
      "question": "How do I get started with Vispaico?",
      "answer": "It’s simple! Reach out via our <a href=\"/contact\" className=\"text-yellow-400 hover:text-yellow-400 underline\">CONTACT</a> or complete a project kickoff form on the desired <a href=\"/services\" className=\"text-yellow-400 hover:text-yellow-400 underline\">SERVICE</a>. It's as easy as pie to start your project with us."
    },
    {
      "question": "Do you have a Technical Support policy?",
      "answer": "YES, a 30-day period for fixing technical bugs is included after project acceptance."
    },
    {
      "question": "Do you have a Revisions & Acceptance policy?",
      "answer": "YES, you are entitled to a 7-day period after delivery of unlimited revisions."
    },
    {
      "question": "Do you have a money back policy?",
      "answer": "YES, of course. A full refund can be claimed for technical failure within 24 hours of delivery. In case of a refund, all rights to the work revert to Vispaico."
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
