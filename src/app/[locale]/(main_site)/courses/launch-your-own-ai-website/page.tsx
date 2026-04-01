'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const faqItems = [
  { question: 'Do I need to know code?', answer: 'No. This course is designed to help non-technical learners build and launch with guided support.' },
  { question: 'Will I really end with a live site?', answer: 'Yes. The course is built around shipping a real website.' },
  { question: 'Is this a design course or a technical course?', answer: 'It is a practical launch course that blends basic design, setup, and deployment.' },
];

export default function LaunchYourOwnAIWebsite() {
  return (
    <motion.main className="bg-white text-black min-h-screen px-6 md:px-12 py-16 container mx-auto"
      variants={containerVariants} initial="hidden" animate="visible">

      {/* Hero */}
      <motion.section variants={itemVariants} className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
          Launch your own AI-powered website — even if you&apos;re not technical
        </h1>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Build a real website using AI tools, GitHub, Vercel, and Supabase with a guided, practical process designed for non-technical learners.
        </p>
        <div className="flex justify-center gap-6">
          <button className="relative overflow-hidden rounded-md px-8 py-3 font-semibold text-white bg-gradient-to-r from-orange-500 to-red-600 shadow-lg hover:scale-[1.02] hover:shadow-xl transition-transform">
            Enroll Now
          </button>
          <a href="#curriculum" className="underline self-center text-black">
            View Curriculum
          </a>
        </div>
      </motion.section>

      {/* Problem / Before-After */}
      <motion.section variants={itemVariants} className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">Most non-technical people stay stuck before they ever launch</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Too many tools and too much jargon</li>
          <li>Dependence on developers for every small change</li>
          <li>No clear process for turning an idea into a real website</li>
        </ul>
        <h3 className="text-2xl font-semibold mt-8 mb-4">After this course</h3>
        <ul className="list-disc list-inside space-y-2 text-green-600">
          <li>You have a live site online</li>
          <li>You understand the basic workflow behind your stack</li>
          <li>You can update and improve your site with AI support</li>
        </ul>
      </motion.section>

      {/* What You Get */}
      <motion.section variants={itemVariants} className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">What You Get</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Step-by-step website launch path</li>
          <li>Guided setup for GitHub, Vercel, and Supabase</li>
          <li>AI-assisted content and page planning</li>
          <li>Launch checklist and reusable update workflow</li>
        </ul>
      </motion.section>

      {/* What You Build */}
      <motion.section variants={itemVariants} className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">What You Build</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>A live website</li>
          <li>A connected deployment workflow</li>
          <li>Forms and simple backend functionality</li>
          <li>A site you can maintain without depending on a full dev team</li>
        </ul>
      </motion.section>

      {/* Curriculum Snapshot */}
      <motion.section variants={itemVariants} className="max-w-4xl mx-auto mt-16" id="curriculum">
        <h2 className="text-3xl font-bold mb-6">Curriculum Snapshot</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Module 1: Plan your website with AI</li>
          <li>Module 2: Set up your accounts and tools</li>
          <li>Module 3: Build pages and content</li>
          <li>Module 4: Deploy your site</li>
          <li>Module 5: Connect forms and simple data workflows</li>
        </ul>
      </motion.section>

      {/* Learning Format */}
      <motion.section variants={itemVariants} className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">Learning Format</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Guided implementation</li>
          <li>Practical lessons</li>
          <li>Real project outcome</li>
          <li>Built around launching, not just learning</li>
        </ul>
      </motion.section>

      {/* Who It’s For */}
      <motion.section variants={itemVariants} className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">Who It&apos;s For</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Freelancers</li>
          <li>Coaches</li>
          <li>Consultants</li>
          <li>Operators</li>
          <li>Small business owners</li>
          <li>Professionals with little or no coding background</li>
        </ul>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Not for</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Advanced developers looking for deep engineering workflows</li>
          <li>Teams looking for internal AI rollout strategy</li>
        </ul>
      </motion.section>

      {/* FAQ */}
      <motion.section variants={itemVariants} className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">FAQ</h2>
        <dl className="space-y-6 text-gray-700">
          {faqItems.map(({ question, answer }) => (
            <details key={question} className="group border border-gray-300 rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-black">
                <span>{question}</span>
                <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4">{answer}</p>
            </details>
          ))}
        </dl>
      </motion.section>

      {/* Final CTA */}
      <motion.section variants={itemVariants} className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-orange-500 to-red-600 text-white py-12 px-6 rounded-lg text-center">
        <h2 className="text-4xl font-extrabold">Get your website live with AI</h2>
        <p className="mt-6 mb-8 text-lg font-light">Stop staying in planning mode. Build something real and launch it.</p>
        <button className="inline-block bg-white text-orange-600 font-semibold rounded-full px-10 py-4 shadow-lg hover:scale-105 transition-transform">
          Enroll in Launch Your Own AI Website
        </button>
      </motion.section>

    </motion.main>
  );
}
