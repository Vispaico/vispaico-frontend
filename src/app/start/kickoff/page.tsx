// File: app/start/kickoff/page.tsx (Updated)

'use client'; // This directive is essential for components with interactivity

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'; // Use from 'next/navigation' in App Router

export default function KickoffPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project_details: '',
    b_name: '', // Honeypot field added to state
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage('');

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // --- CHANGE: Add formType to the payload ---
        body: JSON.stringify({
          ...formData,
          formType: 'kickoff',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong on the server.');
      }

      // On success, redirect to the thank you page
      router.push('/start/thank-you');

    } catch (error: unknown) {
      let errorMessage = 'An unknown error occurred.';
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'object' && error !== null && 'error' in error && typeof (error as { error: string }).error === 'string') {
        errorMessage = (error as { error: string }).error;
      }
      setFormMessage(`Error: ${errorMessage}`);
      setIsSubmitting(false); // Re-enable the button on error
    }
  };

  return (
    <motion.div
      className="bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-16">
        <motion.section
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold">Great, Let&apos;s Get Started.</h1>
          <p className="text-xl mt-4 text-gray-300">Just fill out the quick form below. This gives us everything we need to kick things off.</p>
        </motion.section>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-12 space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-200 mb-2">Your Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting} // Added disabled attribute
              className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-yellow-400 focus:border-yellow-400 disabled:opacity-50"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-200 mb-2">Your Email Address*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting} // Added disabled attribute
              className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-yellow-400 focus:border-yellow-400 disabled:opacity-50"
            />
          </div>
          
          <div>
            <label htmlFor="project_details" className="block text-lg font-medium text-gray-200 mb-2">Tell us about your project*</label>
            <textarea
              id="project_details"
              name="project_details"
              rows={6}
              value={formData.project_details}
              onChange={handleChange}
              required
              disabled={isSubmitting} // Added disabled attribute
              className="w-full p-3 border border-gray-700 rounded-md bg-gray-800 text-white focus:ring-yellow-400 focus:border-yellow-400 disabled:opacity-50"
            />
          </div>

          {/* --- CHANGE: HONEYPOT SPAM PROTECTION --- */}
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input
              type="text"
              name="b_name"
              tabIndex={-1}
              value={formData.b_name}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          {/* --- END HONEYPOT --- */}

          <button type="submit" disabled={isSubmitting}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full mt-8 inline-block text-lg transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Submit Project Details'}
          </button>
        </form>
        
        {formMessage && <p className="mt-4 text-center text-red-400">{formMessage}</p>}
      </div>
    </motion.div>
  );
}