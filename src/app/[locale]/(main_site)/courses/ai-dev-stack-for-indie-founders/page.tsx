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
  { question: 'Do I need to be a strong developer?', answer: 'You should be comfortable with basic development concepts, but the course is designed to accelerate execution rather than test advanced theory.' },
  { question: 'Is this about prompts or product shipping?', answer: 'Product shipping. AI is part of the workflow, not the entire subject.' },
  { question: 'Will I build a real agent?', answer: 'Yes. The goal is to ship at least one practical agent inside your product.' },
];

export default function AIDevStackForIndieFounders() {
  return (
    <motion.main className="bg-white text-black min-h-screen px-6 md:px-12 py-16 container mx-auto"
      variants={containerVariants} initial="hidden" animate="visible">

      {/* Hero */}
      <motion.section variants={itemVariants} className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
          Build and ship faster with an AI-first dev stack
        </h1>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Turn scattered product building into a repeatable system using GitHub, Vercel, Supabase, and embedded AI agents.
        </p>
        <div className="flex justify-center gap-6">
          <button className="relative overflow-hidden rounded-md px-8 py-3 font-semibold text-white bg-gradient-to-r from-orange-500 to-red-600 shadow-lg hover:scale-[1.02] hover:shadow-xl transition-transform">
            Apply for the Cohort
          </button>
          <a href="#curriculum" className="underline self-center text-black">
            View Curriculum
          </a>
        </div>
      </motion.section>

      {/* Problem / Before-After */}
      <motion.section variants={itemVariants} className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">Most indie founders do not have a shipping problem — they have a systems problem</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Too many half-finished builds</li>
          <li>Repeated setup work on every new idea</li>
          <li>No reusable workflow for moving from concept to launch</li>
          <li>AI used occasionally, but not as a structured development layer</li>
        </ul>
        <h3 className="text-2xl font-semibold mt-8 mb-4">After this course</h3>
        <ul className="list-disc list-inside space-y-2 text-green-600">
          <li>You have a reusable modern product stack</li>
          <li>You can ship faster with AI in your workflow</li>
          <li>You have at least one embedded AI agent in a deployed product</li>
        </ul>
      </motion.section>

      {/* What You Get */}
      <motion.section variants={itemVariants} className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">What You Get</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Reusable stack blueprint</li>
          <li>Practical product setup workflow</li>
          <li>Agent implementation framework</li>
          <li>Launch and iteration system</li>
          <li>Templates and decision patterns for future products</li>
        </ul>
      </motion.section>

      {/* What You Build */}
      <motion.section variants={itemVariants} className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">What You Build</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>A deployed app or landing + app setup</li>
          <li>GitHub-based shipping workflow</li>
          <li>Vercel deployment path</li>
          <li>Supabase backend</li>
          <li>At least one useful AI agent inside your product</li>
        </ul>
      </motion.section>

      {/* Curriculum Snapshot */}
      <motion.section variants={itemVariants} className="max-w-4xl mx-auto mt-16" id="curriculum">
        <h2 className="text-3xl font-bold mb-6">Curriculum Snapshot</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Module 1: AI-first dev workflow</li>
          <li>Module 2: Product setup and auth</li>
          <li>Module 3: Data, APIs, and backend logic</li>
          <li>Module 4: Build your first agent</li>
          <li>Module 5: Embed and ship the agent</li>
          <li>Module 6: Launch and iterate</li>
        </ul>
      </motion.section>

      {/* Learning Format */}
      <motion.section variants={itemVariants} className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">Learning Format</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Hands-on implementation</li>
          <li>Product-focused architecture decisions</li>
          <li>Real shipping workflow</li>
          <li>Capstone tied to an actual founder use case</li>
        </ul>
      </motion.section>

      {/* Who It’s For */}
      <motion.section variants={itemVariants} className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">Who It&apos;s For</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Indie founders</li>
          <li>SaaS builders</li>
          <li>Technical solopreneurs</li>
          <li>Developers building their own products</li>
        </ul>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Not for</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Fully non-technical beginners</li>
          <li>Companies looking for team-wide governance and rollout</li>
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
        <h2 className="text-4xl font-extrabold">Build a shipping system, not just another prototype</h2>
        <p className="mt-6 mb-8 text-lg font-light">Create a repeatable stack you can use across products.</p>
        <button className="inline-block bg-white text-orange-600 font-semibold rounded-full px-10 py-4 shadow-lg hover:scale-105 transition-transform">
          Join the Founder Course
        </button>
      </motion.section>

    </motion.main>
  );
}
