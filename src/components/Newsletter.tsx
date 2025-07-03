"use client";

import React, { useState } from 'react';
import { useCursor } from '@/context/CursorContext';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { setIsHoveringInteractive } = useCursor();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Subscribing...');
    try {
      // In a real application, you would send this to your backend/newsletter service
      console.log('Subscribing email:', email);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      setMessage('Thanks for subscribing!');
      setEmail('');
    } catch (error) {
      setMessage('Failed to subscribe. Please try again.');
      console.error('Newsletter subscription error:', error);
    }
  };

  return (
    <div className="relative bg-gray-800 rounded-lg p-6 overflow-hidden">
      {/* Subtle Story-themed effect: Glowing Orb */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-24 h-24 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow absolute top-0 left-0"></div>
        <div className="w-24 h-24 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow animation-delay-2000 absolute bottom-0 right-0"></div>
      </div>

      <div className="relative z-10 text-center md:text-left">
        <h3 className="text-lg font-semibold text-white mb-4">Do You Love Good Stories?</h3>
        <p className="text-gray-400 text-sm mb-4">Sometimes we tell some, join our Story Club. </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow p-2 rounded-full bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            onMouseEnter={() => setIsHoveringInteractive(true)}
            onMouseLeave={() => setIsHoveringInteractive(false)}
          />
          <button
            type="submit"
            className="bg-white text-indigo-700 font-bold py-2 px-4 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            onMouseEnter={() => setIsHoveringInteractive(true)}
            onMouseLeave={() => setIsHoveringInteractive(false)}
          >
            Subscribe
          </button>
        </form>
        {message && <p className="mt-4 text-white text-sm">{message}</p>}
      </div>
    </div>
  );
};

export default Newsletter;