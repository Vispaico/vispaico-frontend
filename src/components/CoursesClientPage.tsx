'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faUsers, faChalkboardTeacher, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const hero = {
  title: 'Build Real AI Capability — Whether You’re Starting Solo, Shipping Products, or Training a Team',
  subtitle: 'Choose the course built for your stage: launch your first AI-powered website, build and deploy agents, or roll out structured AI systems inside your company.',
  bullets: [
    'Practical, hands-on learning with real AI projects',
    'Build websites, products, or internal AI platforms',
    'Get expert guidance and reusable workflows'
  ],
  cta: 'Explore Courses',
};

const founderNote = {
  paragraphs: [
    'Our courses are built to guide you step-by-step through real AI capabilities.',
    'Whether you’re just getting started or leading teams, get practical skills you can apply immediately.',
  ],
  emailLabel: 'Questions? Contact us at',
  email: 'courses@vispaico.com',
};

const coursesDetails = [
  {
    key: 'launch-website',
    title: 'Launch Your Own AI Website',
    bestFor: 'Non-technical individuals',
    focus: 'Website creation with AI tools, GitHub, Vercel, and Supabase',
    promise: 'Launch a modern website even if you’ve never coded before',
    studentsBuild: [
      'A live website',
      'AI-assisted content and design workflow',
      'GitHub repo and deployment setup',
      'Contact forms and simple backend workflows'
    ],
    studentsLearn: [
      'How to plan a website using AI',
      'How GitHub, Vercel, and Supabase work together',
      'How to update and manage a real site without constant developer help'
    ],
    href: '/courses/launch-your-own-ai-website',
    icon: 'laptop'
  },
  {
    key: 'founder-course',
    title: 'AI Dev Stack for Indie Founders',
    bestFor: 'Indie founders and technical solopreneurs',
    focus: 'AI-assisted development, product shipping, and in-app agents',
    promise: 'Build and launch products faster with a reusable modern stack',
    studentsBuild: [
      'A deployed app or landing + app combo',
      'GitHub-powered workflow',
      'Vercel deployment pipeline',
      'Supabase backend',
      'At least one functional AI agent inside the product'
    ],
    studentsLearn: [
      'How to code faster with AI tools',
      'How to structure products using a repeatable stack',
      'How to build, test, and ship useful agents'
    ],
    href: '/courses/ai-dev-stack-for-indie-founders',
    icon: 'users'
  },
  {
    key: 'team-course',
    title: 'AI Platforms and Agents for Internal Teams',
    bestFor: 'Small-to-mid company teams',
    focus: 'OpenClawD, Hermes, internal AI infrastructure, and production agents',
    promise: 'Move from random AI pilots to a governed internal system',
    studentsBuild: [
      'A unified internal LLM setup',
      'A first production internal agent',
      'Monitoring and access control patterns',
      'Internal rollout and evaluation framework'
    ],
    studentsLearn: [
      'How to standardize AI usage across teams',
      'How to compare and route between models',
      'How to deploy agents safely in real company workflows'
    ],
    href: '/courses/ai-platforms-and-agents-for-internal-teams',
    icon: 'chalkboard'
  }
];

const quickQuestions = [
  {
    question: 'Who are these courses for?',
    answer: ['They are for freelancers, indie founders, and in-house teams looking to build real AI capabilities.'],
  },
  {
    question: 'Do I need coding experience?',
    answer: ['Not necessarily. We have courses tailored for different levels of technical comfort.'],
  },
  {
    question: 'Are the courses hands-on?',
    answer: ['Yes, each course is designed with practical projects and real deliverables.'],
  },
];

const bottomLine = {
  title: 'Ready to elevate your AI skills?',
  paragraphs: ['Join hundreds of students building usable AI-powered creations.', 'Learn from expert instructors with proven workflows.'],
  highlight: 'Start your journey with Vispaico Courses today!',
};

const iconMap = {
  laptop: faLaptopCode,
  users: faUsers,
  chalkboard: faChalkboardTeacher,
  check: faCheckCircle,
};

const CoursesClientPage = () => {
  return (
    <>
      {/* HERO SECTION */}
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
            <span>Trusted by 100+ learners</span>
            <span className="text-gray-300">|</span>
            <span>Practical AI Skills</span>
            <span className="text-gray-300">|</span>
            <span>100% Satisfaction Guarantee</span>
          </motion.div>

          <motion.section className="text-center" variants={itemVariants}>
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2">
              {hero.title}
            </h1>
            <h3 className="text-3xl mt-4 text-gray-800">{hero.subtitle}</h3>
            <ul className="mt-12" role="list" aria-label="Key Benefits">
              {hero.bullets.map((bullet) => (
                <li key={bullet} className="mt-4 text-2xl max-w-3xl mx-auto text-gray-600">
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
              <a
                href="#choose-your-path"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
              >
                {hero.cta}
              </a>
            </div>
          </motion.section>

          <motion.section className="mt-16" variants={itemVariants}>
            <div className="max-w-3xl mx-auto text-center border-t border-gray-300 pt-12">
              {founderNote.paragraphs.map((p, i) => (
                <p key={i} className="mb-4 text-gray-700">
                  {p}
                </p>
              ))}
              <p>
                {founderNote.emailLabel}{' '}
                <a href={`mailto:${founderNote.email}`} className="text-orange-600 underline">
                  {founderNote.email}
                </a>
              </p>
            </div>
          </motion.section>

          {/* COURSE DETAILS SECTION */}
          <motion.section className="mt-16" variants={itemVariants} id="choose-your-path">
            <h2 className="text-4xl font-bold text-center mb-12">Choose Your Path</h2>
            {coursesDetails.map((course) => (
              <div key={course.key} className="mb-16 max-w-4xl mx-auto">
                <h3 className="text-4xl font-extrabold text-orange-400 mb-4">{course.title}</h3>
                <p className="mb-1 font-semibold">Best For: {course.bestFor}</p>
                <p className="mb-4 font-semibold">Focus: {course.focus}</p>
                <p className="mb-4">Promise: {course.promise}</p>

                <h4 className="font-bold text-2xl mb-3">What Students Build</h4>
                <ul className="list-disc list-inside mb-6 max-w-xl text-gray-700 border border-gray-300 rounded-lg bg-gray-50 p-6">
                  {course.studentsBuild.map((item, i) => (
                    <li key={i} className="mb-2 last:mb-0">{item}</li>
                  ))}
                </ul>

                <h4 className="font-bold text-2xl mb-3">What They Learn</h4>
                <ul className="list-disc list-inside mb-6 max-w-xl text-gray-700 border border-gray-300 rounded-lg bg-gray-50 p-6">
                  {course.studentsLearn.map((item, i) => (
                    <li key={i} className="mb-2 last:mb-0">{item}</li>
                  ))}
                </ul>

                <Link
                  href={course.href}
                  className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-md px-6 py-3 hover:scale-105 transition-transform"
                >
                  Go to Course
                </Link>
              </div>
            ))}
          </motion.section>

          {/* QUICK QUESTIONS FAQ */}
          <motion.section className="mt-16" variants={itemVariants} id="quick-questions">
            <h2 className="text-4xl font-bold text-center mb-12">Quick Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {quickQuestions.map(({ question, answer }) => (
                <details
                  key={question}
                  className="group border border-gray-300 rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-black">
                    <span>{question}</span>
                    <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 space-y-3 text-left text-gray-700">
                    {answer.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </motion.section>

          {/* FINAL CTA SECTION */}
          <motion.section
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16 px-6 text-center mt-20"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-extrabold max-w-3xl mx-auto">
              {bottomLine.title}
            </h2>
            <div className="max-w-3xl mx-auto mt-6 space-y-4 font-light">
              {bottomLine.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <p className="font-semibold text-lg bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                {bottomLine.highlight}
              </p>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </>
  );
};

export default CoursesClientPage;
