// src/components/Newsletter.tsx (Updated)
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const inputVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.2 } }
};

const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 }
};

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { setIsHoveringInteractive } = useCursor();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
        setMessage('Please enter your email address.');
        return;
    }
    setSubmitting(true);
    setMessage('Subscribing...');
    
    // Get data from the form, including the honeypot
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch("/api/submit-form", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...data,
                formType: 'newsletter',
            }),
        });

        if (response.ok) {
            setMessage('Thanks for subscribing!');
            setEmail(''); // Clear the input on success
        } else {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to subscribe.');
        }
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown network error occurred.';
        setMessage(`Oops! ${errorMessage}`);
        console.error('Newsletter subscription error:', error);
    } finally {
        setSubmitting(false);
    }
  };

  return (
    <motion.section
      className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-indigo-700 text-white overflow-hidden relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      {/* Background elements */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 bg-white bg-opacity-10 rounded-full filter blur-xl"
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-5 right-5 w-32 h-32 bg-white bg-opacity-10 rounded-full filter blur-xl"
        animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Creative Journey!</h2>
        <p className="text-lg text-purple-100 mb-8 max-w-xl mx-auto">
          Get exclusive insights, design tips, and updates directly to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
          <motion.input
            type="email"
            name="email"
            placeholder="Your email address"
            className="flex-grow p-4 rounded-full bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-300 disabled:opacity-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={submitting}
            variants={inputVariants}
            whileHover="hover"
            onMouseEnter={() => setIsHoveringInteractive(true)}
            onMouseLeave={() => setIsHoveringInteractive(false)}
          />

          {/* --- HONEYPOT SPAM PROTECTION --- */}
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input type="text" name="b_name" tabIndex={-1} defaultValue="" />
          </div>
          {/* --- END HONEYPOT --- */}

          <motion.button
            type="submit"
            disabled={submitting}
            className="bg-white text-indigo-700 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onMouseEnter={() => setIsHoveringInteractive(true)}
            onMouseLeave={() => setIsHoveringInteractive(false)}
          >
            {submitting ? 'Subscribing...' : 'Subscribe Now'}
          </motion.button>
        </form>
        {message && <p className={`mt-4 text-white text-sm ${message.includes('Oops') ? 'text-red-300' : ''}`}>{message}</p>}
      </div>
    </motion.section>
  );
};

export default Newsletter;