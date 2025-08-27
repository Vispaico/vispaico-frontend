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
    <div className="relative bg-white rounded-lg p-6 border border-gray-200/80">
      <div className="relative z-10 text-center md:text-left">
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Join Our Newsletter</h3>
        <p className="text-slate-600 text-sm mb-4">Get the latest updates and stories from our team.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            placeholder="Your email"
            className="grow p-2 rounded-md bg-gray-100 border border-gray-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            onMouseEnter={() => setIsHoveringInteractive(true)}
            onMouseLeave={() => setIsHoveringInteractive(false)}
          />
          <button
            type="submit"
            className="bg-slate-900 text-white font-bold py-2 px-4 rounded-md shadow-sm hover:bg-indigo-600 transition-colors duration-300"
            onMouseEnter={() => setIsHoveringInteractive(true)}
            onMouseLeave={() => setIsHoveringInteractive(false)}
          >
            Subscribe
          </button>
        </form>
        {message && <p className="mt-4 text-slate-600 text-sm">{message}</p>}
      </div>
    </div>
  );
};

export default Newsletter;