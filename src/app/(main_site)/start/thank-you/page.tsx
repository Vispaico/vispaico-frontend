
'use client';

import { motion } from 'framer-motion';



const ThankYouPage = () => {
  return (
    <motion.div
      className="bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold">Got it. Thanks!</h1>
        <h3 className="text-2xl mt-4 text-gray-300">We&apos;ve received your project information.</h3>
        <p className="mt-8 max-w-2xl mx-auto text-gray-300">
          You&apos;ve taken the first step, and the hard part is already over. We&apos;re looking over your details right now to make sure we have everything we need.
        </p>
        <h4 className="text-xl font-bold mt-8 text-white">What&apos;s next?</h4>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300">
          Expect a personal email from our team within the next few business hours. That email will include confirmation of your project goal and the next steps, including the payment link to officially kick things off.
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-gray-300">
          No stress, no hurdles. We&apos;ll be in touch shortly!
        </p>
      </div>
    </motion.div>
  );
};

export default ThankYouPage;
