"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "What services does Vispaico offer?",
    answer: "Vispaico specializes in AI-driven solutions, web development, graphic design, and digital marketing strategies to help businesses grow.",
  },
  {
    question: "How can AI benefit my business?",
    answer: "AI can automate repetitive tasks, provide data-driven insights, enhance customer service through chatbots, and personalize user experiences, leading to increased efficiency and profitability.",
  },
  {
    question: "What is your approach to web development?",
    answer: "We focus on creating responsive, high-performance, and user-friendly websites tailored to your specific business needs, utilizing modern frameworks and best practices.",
  },
  {
    question: "Do you offer custom graphic design services?",
    answer: "Yes, we provide a full range of graphic design services, including logo design, branding, marketing materials, and UI/UX design for web and mobile applications.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity and scope. We provide a detailed timeline after the initial consultation and project planning phase.",
  },
  {
    question: "What is your pricing model?",
    answer: "Our pricing is project-based, tailored to the specific requirements and deliverables. We provide transparent quotes after understanding your needs.",
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answer: "Absolutely. We offer comprehensive digital marketing services, including SEO, content marketing, social media management, and paid advertising to boost your online presence.",
  },
  {
    question: "What makes Vispaico different from other agencies?",
    answer: "Our unique blend of creative expertise and cutting-edge AI integration allows us to deliver innovative, efficient, and highly effective solutions that stand out.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer various support and maintenance packages to ensure your website and digital assets continue to perform optimally.",
  },
  {
    question: "How do I get started with Vispaico?",
    answer: "Simply contact us through our website or email to schedule an initial consultation. We'll discuss your needs and outline a tailored solution.",
  },
  {
    question: "What industries do you serve?",
    answer: "We work with businesses across a wide range of industries, adapting our strategies to meet the unique challenges and opportunities of each sector.",
  },
  {
    question: "Is my data secure with Vispaico?",
    answer: "We prioritize data security and implement robust measures to protect your information. Please refer to our Privacy Policy for more details.",
  },
  {
    question: "Can you integrate with existing systems?",
    answer: "Yes, our development team is skilled in integrating new solutions with your existing CRM, ERP, e-commerce platforms, and other business systems.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Frequently Asked Questions
        </motion.h1>

        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01, boxShadow: "0 8px 16px rgba(0,0,0,0.1)" }}
            >
              <button
                className="flex justify-between items-center w-full py-4 px-6 text-lg font-semibold text-left bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-6 pb-4 pt-2 bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-300"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}