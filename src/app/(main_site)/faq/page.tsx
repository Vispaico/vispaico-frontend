"use client";

import React from 'react';
import { motion } from 'framer-motion';

const FAQPage: React.FC = () => {
  const faqItems = [
    {
    "question": "What is Vispaico?",
    "answer": "Vispaico is a web development team dedicated to creating standout websites quickly. We blend creativity with AI-driven solutions to deliver sites that look sharp and perform flawlessly. Whether you need a simple landing page or a complex e-commerce platform, then you'll get it."
  },
  {
    "question": "What’s the 3-Day Website service?",
    "answer": "Our 3-Day Website service is perfect for businesses needing a professional site fast. We build a custom, fully functional website in just three days, for $899."
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
    "answer": "It’s simple! Reach out via our <a href=\"/contact\" className=\"text-yellow-400 hover:text-yellow-400 underline\">CONTACT</a> or complete our project kickoff form <a href=\"/services/3-day-website\" className=\"text-yellow-400 hover:text-yellow-400 underline\">HERE</a>. It's as easy as pie to start your project with us."
  },
  ];

  return (
    <div className="min-h-screen relative bg-linear-to-b from-gray-900 to-black text-white pt-20 overflow-hidden">
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
              <p className="text-gray-300 leading-relaxed"
                 dangerouslySetInnerHTML={{ __html: item.answer }}
              ></p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;