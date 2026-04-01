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
  { question: 'Is this training or consulting?', answer: 'It is structured education with practical implementation logic, designed to help teams build internal capability.' },
  { question: 'Do we need a mature AI team already?', answer: 'No. The course is meant to help teams establish structure and move beyond ad hoc experiments.' },
  { question: 'Can this support internal rollout after the course?', answer: 'Yes. The course is designed around reusable internal patterns, not one-off demos.' },
];

export default function AIPlatformsAndAgentsForInternalTeams() {
  return (
    <motion.main className="bg-white text-black min-h-screen px-6 md:px-12 py-16 container mx-auto"
      variants={containerVariants} initial="hidden" animate="visible">

      {/* Hero */}
      <motion.section variants={itemVariants} className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
          Build structured AI capability inside your company
        </h1>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Help your team move from scattered AI experiments to a secure, governed, practical internal system using modern models and production agents.
        </p>
        <div className="flex justify-center gap-6">
          <button className="relative overflow-hidden rounded-md px-8 py-3 font-semibold text-white bg-gradient-to-r from-orange-500 to-red-600 shadow-lg hover:scale-[1.02] hover:shadow-xl transition-transform">
            Schedule Team Call
          </button>
          <a href="#outline" className="underline self-center text-black">
            Download Outline
          </a>
        </div>
      </motion.section>

      {/* Problem / Before-After */}
      <motion.section variants={itemVariants} className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">Most companies are experimenting with AI without building real internal capability</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Different teams using different tools with no standard</li>
          <li>No shared model strategy</li>
          <li>Security, compliance, and governance concerns slowing progress</li>
          <li>No repeatable path from pilot to production</li>
        </ul>
        <h3 className="text-2xl font-semibold mt-8 mb-4">After this course</h3>
        <ul className="list-disc list-inside space-y-2 text-green-600">
          <li>Your team has a clearer internal architecture</li>
          <li>You deploy at least one useful internal agent</li>
          <li>You create standards for usage, evaluation, and rollout</li>
        </ul>
      </motion.section>

      {/* What You Get */}
      <motion.section variants={itemVariants} className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">What You Get</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Internal AI capability framework</li>
          <li>Model comparison and routing logic</li>
          <li>Internal agent templates</li>
          <li>Deployment and monitoring patterns</li>
          <li>Governance and rollout structure</li>
        </ul>
      </motion.section>

      {/* What You Build */}
      <motion.section variants={itemVariants} className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">What You Build</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>A shared internal AI setup</li>
          <li>At least one production-ready internal agent</li>
          <li>Access and monitoring workflows</li>
          <li>A repeatable internal rollout model</li>
        </ul>
      </motion.section>

      {/* Curriculum Snapshot */}
      <motion.section variants={itemVariants} className="max-w-4xl mx-auto mt-16" id="outline">
        <h2 className="text-3xl font-bold mb-6">Curriculum Snapshot</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Module 1: AI architecture foundations</li>
          <li>Module 2: Unified model access layer</li>
          <li>Module 3: OpenClawD and Hermes best practices</li>
          <li>Module 4: Internal agent design</li>
          <li>Module 5: Deployment and governance</li>
          <li>Module 6: Evaluation and rollout planning</li>
        </ul>
      </motion.section>

      {/* Learning Format */}
      <motion.section variants={itemVariants} className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">Learning Format</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Team-oriented implementation</li>
          <li>Practical architecture work</li>
          <li>Internal use-case driven learning</li>
          <li>Designed for real company workflows</li>
        </ul>
      </motion.section>

      {/* Who It’s For */}
      <motion.section variants={itemVariants} className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">Who It&apos;s For</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Product teams</li>
          <li>Platform teams</li>
          <li>Operations teams</li>
          <li>Innovation leads</li>
          <li>Technical internal AI champions</li>
        </ul>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Not for</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Solo beginners looking for their first website</li>
          <li>Founders who mainly want a fast product stack for themselves</li>
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
        <h2 className="text-4xl font-extrabold">Give your team a real internal AI system</h2>
        <p className="mt-6 mb-8 text-lg font-light">Build capability your company can actually use and grow.</p>
        <button className="inline-block bg-white text-orange-600 font-semibold rounded-full px-10 py-4 shadow-lg hover:scale-105 transition-transform">
          Book the Team Strategy Call
        </button>
      </motion.section>

    </motion.main>
  );
}
