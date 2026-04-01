'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import FounderNote from '@/components/FounderNoteCourse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDesktop,
  faPaintBrush,
  faMobileAlt,
  faSearch,
  faHandshake,
  faClock,
  faBrain,
  faFire,
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import FeaturedTestimonial from '@/components/FeaturedTestimonial';
import KickoffFormAi from './KickoffFormAi';

const iconMap: Record<string, IconDefinition> = {
  desktop: faDesktop,
  paintBrush: faPaintBrush,
  mobile: faMobileAlt,
  search: faSearch,
  handshake: faHandshake,
  clock: faClock,
  brain: faBrain,
};



const launchPackageCards = [
  {
    icon: 'desktop',
    title: 'AI Website Building',
    description:
      'Build a real website with AI, modern structure, and a stack you can actually understand and maintain.',
  },
  {
    icon: 'brain',
    title: 'Agents and Workflows',
    description:
      'Design and deploy practical AI agents with real use cases, tools, and clear workflow thinking.',
  },
  {
    icon: 'clock',
    title: 'Hosting, GitHub, and Deployment',
    description:
      'Set up GitHub, hosting, deployment, and the shipping workflow so you leave with something live, not just ideas.',
  },
  {
    icon: 'handshake',
    title: 'Live Cohort · $899 · 8 Hours · Certification Included',
    description:
      'Apply now, get full details by email, and only pay after approval. Focused cohort. Limited spots.',
  },
];

const faqItems = [
  {
    question: 'Do I pay on this page?',
    answer: [
      'No. This page is only for applying.',
      'Payment comes later, after approval by email.',
    ],
  },
  {
    question: 'Will I see full course details before paying?',
    answer: [
      'Yes.',
      'You’ll receive detailed information, dates, expectations, and next steps by email before any payment.',
    ],
  },
  {
    question: 'Why approval?',
    answer: ['To keep every cohort focused and aligned.'],
  },
  {
    question: 'What will I actually learn?',
    answer: [
      'You’ll learn how to build with AI, not just consume content.',
      '- AI website building',
      '- Practical AI agents',
      '- GitHub workflows',
      '- Hosting and deployment',
      '- Structured AI tooling and implementation thinking',
    ],
  },
  {
    question: 'Is this for beginners or technical people?',
    answer: [
      'It is designed for builders.',
      'That includes motivated non-technical people, indie founders, and more technical operators who want a practical way to ship with AI.',
    ],
  },
  {
    question: 'Is certification included?',
    answer: ['Yes. Certification is included after completion.'],
  },
  {
    question: 'How much is it?',
    answer: [
      'The course is $899 USD.',
      'That includes 8 live hours split across 2 sessions of 4 hours each, plus certification.',
    ],
  },
];

const AiClientPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Vispaico AI Website & Agents Live Course',
    description:
      'Live AI course covering website building, practical AI agents, GitHub, hosting, and deployment workflows.',
    provider: {
      '@type': 'Organization',
      name: 'Vispaico',
      url: 'https://www.vispaico.com',
    },
    offers: {
      '@type': 'Offer',
      price: '899',
      priceCurrency: 'USD',
      availability: 'https://schema.org/LimitedAvailability',
      url: 'https://www.vispaico.com/ai-course',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      

      <motion.div
        className="bg-white text-black"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 py-16">
          <motion.div
            className="text-sm text-gray-600 flex flex-wrap items-center justify-center gap-3 uppercase tracking-wide mb-8"
            variants={itemVariants}
          >
            <span>Vispaico</span>
            <span className="text-gray-300">|</span>
            <span>Live AI Course</span>
            <span className="text-gray-300">|</span>
            <span>$899 USD</span>
            <span className="text-gray-300">|</span>
            <span>8 Hours Total</span>
            <span className="text-gray-300">|</span>
            <span>Certification Included</span>
          </motion.div>

          {/* HERO SECTION */}
          <motion.section className="text-center" variants={itemVariants}>
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2">
              Real AI Capability. Live. $899.
            </h1>
            <h3 className="text-3xl mt-4 text-gray-800">
              For builders who want to ship with AI.
            </h3>

            <ul className="mt-10" role="list" aria-label="Key Course Benefits">
              <li className="mt-3 text-2xl max-w-3xl mx-auto text-gray-600">
                Build an AI-powered website with modern tools and real deployment workflows.
              </li>
              <li className="mt-3 text-2xl max-w-3xl mx-auto text-gray-600">
                Learn to build and deploy practical AI agents you actually understand and control.
              </li>
              <li className="mt-3 text-2xl max-w-3xl mx-auto text-gray-600">
                Set up GitHub, hosting, deployment, and AI workflows you can reuse after the course.
              </li>
            </ul>

            <p className="mt-6 text-lg text-gray-700">
              Live online · $899 USD · 8 hours total · 2 days × 4 hours · Certification included
            </p>

            <p className="mt-2 text-sm text-gray-500">
              One form. Get the full details by email. You only pay after approval.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
              <Link
                href="#final-cta"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Apply for Early Access
              </Link>
            </div>
          </motion.section>

          {/* FOUNDER NOTE SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <FounderNote>
              <p>
                AI moves fast. Most people respond by consuming more content. This course is built for people who want real, practical capability — not just another pile of notes, prompts, and unfinished ideas.
              </p>
              <p>
                You won’t just watch prompts. You’ll use real tools, build something real, deploy it, and leave with a repeatable system you can use again.
              </p>
              <p>
                If that sounds like the right kind of pressure and the right kind of momentum, apply now and we’ll send you the full details by email.
              </p>
              <p>
                Questions? Email us at <span className="text-orange-600">hello@vispaico.com</span>
              </p>
            </FounderNote>
          </motion.section>

          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center py-12">
              What this course makes possible
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="border border-gray-300 rounded-lg p-6">
                <h2 className="text-xl font-bold text-center mb-4">
                  <FontAwesomeIcon icon={faFire} className="text-orange-500" /> Build and ship with AI
                </h2>
                <div className="flex flex-col items-center">
                  <video
                    src="https://res.cloudinary.com/kinhcode01/video/upload/Vispaico/RiverCity_Web_vfofed.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full rounded-lg shadow-lg"
                  ></video>
                </div>
              </div>
              <div className="w-full">
                <FeaturedTestimonial />
              </div>
            </div>
          </motion.section>

          {/* ONE SIMPLE SERVICE SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">Why this, why now</h2>
            <h3 className="text-2xl text-center mt-4 text-gray-800">
              Most people are still watching. This course is for the people who want to build.
            </h3>
            <div className="mt-8 text-lg max-w-2xl mx-auto space-y-2 text-gray-700">
              <p className="flex items-center">
                <span className="text-red-500 mr-2">✗</span>
                Passive AI content that never turns into anything real
              </p>
              <p className="flex items-center">
                <span className="text-red-500 mr-2">✗</span>
                Random experimentation without a system
              </p>
              <p className="flex items-center">
                <span className="text-red-500 mr-2">✗</span>
                Watching prompts without learning how to ship
              </p>
              <p className="flex items-center font-semibold">
                <span className="text-green-600 mr-2">✓</span>
                Use real tools
              </p>
              <p className="flex items-center font-semibold">
                <span className="text-green-600 mr-2">✓</span>
                Build something real
              </p>
              <p className="flex items-center font-semibold">
                <span className="text-green-600 mr-2">✓</span>
                Deploy it
              </p>
              <p className="flex items-center font-semibold">
                <span className="text-green-600 mr-2">✓</span>
                Leave with a repeatable system you can use again
              </p>
            </div>
            <p className="mt-6 max-w-3xl mx-auto text-center text-gray-700">
              This is a live, focused cohort for builders who want practical capability in AI website creation, agents, GitHub workflows, hosting, and deployment.
            </p>
            <p className="mt-6 max-w-3xl mx-auto text-center text-gray-700">
              It is not a passive webinar, not a vague introduction, and not a hypey promise machine. The goal is simple: help you ship.
            </p>
            <p className="text-2xl text-center font-semibold mt-4 bg-clip-text bg-gradient-to-r text-gray-800">
              One course. Real tools. Real builds. Real deployment.
            </p>
          </motion.section>

          {/* YOUR COMPLETE LAUNCH PACKAGE SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">What you’ll cover</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8 text-center">
              {launchPackageCards.map((card, index) => {
                const isHighlightCard = index === launchPackageCards.length - 1;

                return (
                  <motion.div
                    key={card.title}
                    className={`relative p-6 border border-gray-200 rounded-lg transition-transform duration-300 ${
                      isHighlightCard
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-2xl md:col-span-3 md:max-w-xl md:mx-auto md:px-12'
                        : 'bg-gray-100 hover:-translate-y-1 hover:shadow-lg'
                    }`}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <FontAwesomeIcon
                      icon={iconMap[card.icon] ?? faDesktop}
                      className={`text-4xl mb-4 ${isHighlightCard ? 'text-white' : 'text-indigo-700'}`}
                    />
                    <h3 className="text-xl font-bold">{card.title}</h3>
                    <p className={isHighlightCard ? 'text-white/90' : 'text-gray-700'}>
                      {card.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
            <motion.div className="mt-8" variants={itemVariants}>
              <details className="group border border-gray-200 rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md max-w-xl mx-auto text-center">
                <summary className="flex flex-col items-center gap-3 text-lg font-semibold text-gray-900 cursor-pointer sm:flex-row sm:justify-center">
                  <span>Why this course structure?</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white transition-transform duration-200 group-open:rotate-45 sm:ml-4">
                    +
                  </span>
                </summary>
                <div className="mt-4 space-y-3 text-gray-700">
                  <p>Because you do not need more disconnected AI information. You need a system you can actually use:</p>
                  <ul className="list-disc space-y-2 pl-5 inline-block text-left">
                    <li>Build a website you understand</li>
                    <li>Ship an AI workflow or agent you control</li>
                    <li>Learn GitHub and deployment in practice</li>
                    <li>Leave with a stack you can keep using after the course</li>
                  </ul>
                </div>
              </details>
            </motion.div>
          </motion.section>

         
          <motion.section className="mt-16" variants={itemVariants}>
            <div className="max-w-3xl mx-auto rounded-2xl border border-gray-200 bg-gradient-to-br from-white via-white to-orange-50 shadow-lg px-8 py-10 text-center">
              <h2 className="text-4xl font-bold">Application and approval flow</h2>
              <div className="mt-6 space-y-4 text-gray-700">
                <p><span className="font-semibold text-gray-900">Apply:</span> Fill out a short form and tell us what you want to build.</p>
                <p><span className="font-semibold text-gray-900">Get full details by email:</span> You’ll receive dates, expectations, and the full breakdown.</p>
                <p><span className="font-semibold text-gray-900">Approval and payment link:</span> If you’re a good fit, you’ll get an approval email with a payment link.</p>
                <p><span className="font-semibold text-gray-900">Secure your spot:</span> Complete payment to confirm.</p>
                <p><span className="font-semibold text-gray-900">Join the live sessions:</span> Two focused 4-hour sessions designed around building, not just listening.</p>
              </div>
            </div>
          </motion.section>

          {/* QUICK QUESTIONS SECTION */}
          <motion.section className="mt-16" variants={itemVariants}>
            <h2 className="text-4xl font-bold text-center">FAQ</h2>
            <div className="max-w-3xl mx-auto mt-8 text-gray-700">
              {faqItems.map((item) => {
                const bulletLines = item.answer.filter((line) => line.startsWith('- '));
                const textLines = item.answer.filter((line) => !line.startsWith('- '));
                return (
                  <details
                    key={item.question}
                    className="group border border-gray-200 rounded-lg bg-white/70 px-6 py-5 shadow-sm transition-shadow hover:shadow-md mb-4"
                  >
                    <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-black">
                      <span>{item.question}</span>
                      <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white transition-transform duration-200 group-open:rotate-45">+</span>
                    </summary>
                    <div className="mt-4 space-y-3 text-left">
                      {textLines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                      {bulletLines.length > 0 && (
                        <ul className="space-y-1 list-disc list-outside pl-5">
                          {bulletLines.map((line) => (
                            <li key={line}>{line.replace('- ', '')}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </details>
                );
              })}
              <h3 className="text-xl font-bold mt-8 text-black">
                If this fits where you are right now, apply and get the full details by email.
              </h3>
            </div>
          </motion.section>

          {/* FINAL CTA SECTION */}
          <motion.section id="final-cta" className="mt-16 text-center" variants={itemVariants}>
            <KickoffFormAi />
          </motion.section>

          {/* THE BOTTOM LINE SECTION */}
          <motion.section className="mt-16 text-center" variants={itemVariants}>
            <div className="max-w-3xl mx-auto mt-8">
              <p className="text-xl font-bold text-gray-700">Real AI capability. One focused live course.</p>
              <p className="mt-2 text-gray-700">
                This is for people who want to stop circling AI and start using it to build.
              </p>
              <p className="mt-2 text-gray-700">
                Apply now, get the full details by email, and secure your spot if approved.
              </p>
              <p className="text-1xl font-light mt-4 bg-clip-text bg-gradient-to-r text-gray-700">
                Live online · $899 USD · 8 hours · Certification included
              </p>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </>
  );
};

export default AiClientPage;