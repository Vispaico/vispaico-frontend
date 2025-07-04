"use client";

import React from 'react';
import { motion } from 'framer-motion';

const FAQPage: React.FC = () => {
  const faqItems = [
    {
      question: "What is Vispaico?",
      answer: "Vispaico is a web development agency specializing in rapid website deployment and AI-powered solutions. We focus on delivering high-quality, functional websites quickly and efficiently.",
    },
    {
      question: "What is the 3-Day Website service?",
      answer: "Our 3-Day Website service is designed for businesses that need a professional online presence fast. We deliver a fully functional, custom-designed website within three business days, starting from $899.",
    },
    {
      question: "How can AI enhance my business with Vispaico?",
      answer: "We leverage AI to optimize various aspects of your business, including automating content creation, enhancing customer service with AI chatbots, data analysis for better decision-making, and personalized user experiences.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer: "Yes, we offer various support and maintenance packages to ensure your website remains secure, up-to-date, and performs optimally. These can be tailored to your specific needs.",
    },
    {
      question: "Can I see examples of your work?",
      answer: "Absolutely! Please visit our Portfolio section to see a range of projects we've completed for various clients.",
    },
    {
      question: "How do I get started with Vispaico?",
      answer: "You can get started by contacting us through our website, or by filling out our project kickoff form. We'll schedule a consultation to discuss your needs and how we can help.",
    },
  ];

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-gray-900 to-black text-white pt-20 overflow-hidden">
      {/* Background Gadgets (Northern Lights Effect) */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 bg-indigo-500 rounded-full mix-blend-lighten filter blur-xl opacity-30 animate-blob"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      ></motion.div>
      <motion.div
        className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-500 rounded-full mix-blend-lighten filter blur-xl opacity-30 animate-blob animation-delay-2000"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, delay: 1 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-pink-500 rounded-full mix-blend-lighten filter blur-xl opacity-30 animate-blob animation-delay-4000"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 0.5 }}
        transition={{ duration: 2, delay: 1.5 }}
      ></motion.div>
      <div className="container mx-auto px-6 py-12">
        <motion.h1
          className="text-5xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Frequently Asked Questions
        </motion.h1>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="mb-6 bg-gray-800 rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-indigo-400 mb-3">
                {item.question}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;