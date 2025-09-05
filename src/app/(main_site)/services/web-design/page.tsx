// /src/app/(main_site)/services/web-design/page.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCartShopping, faDesktop, faDollarSign, faFileAlt, faFire, faHelicopter, faRocket, faStar } from '@fortawesome/free-solid-svg-icons';

const mainCardData = [
  {
    title: 'The Vispaico 3-Days Website - for $899 in 3 Days',
    summary: 'Your online handshake, built to impress and deliver in three days. More than a landing page, it tells your story and shows off your stuff.',
    link: '/services/3-day-website',
    icon: faStar
  },
  {
    title: 'The Vispaico 24-Hour Micro-Website - for $199 in 24 Hours',
    summary: 'A custom-built page designed to make your visitors act—whether that’s signing up, buying, or clicking through. Delivered in two days.',
    link: '/services/24-hour-micro-website',
    icon: faRocket
  },
  {
    title: 'The Vispaico Affiliate Website - for $399 in 2 Days',
    summary: 'A high-converting affiliate website with up to 10 product pages, delivered in 2 days.',
    link: '/services/affiliate-website',
    icon: faDollarSign
  },
  {
    title: 'The Vispaico Premium Landing Page - for $499 in 48 hours',
    summary: 'Your online handshake, built to impress and deliver in three days. More than a landing page, it tells your story and shows off your stuff.',
    link: '/services/premium-landingpage',
    icon: faHelicopter
  },
  {
    title: 'The Vispaico Single-Product Ecommerce Store - for $1999 in 3 Days',
    summary: 'A custom-built page designed to make your visitors act—whether that’s signing up, buying, or clicking through. Delivered in two days.',
    link: '/services/single-product-store',
    icon: faBagShopping
  },
  {
    title: 'The Vispaico Multi-Product Ecommerce Store - for $3999 in 10 Days',
    summary: 'Your online handshake, built to impress and deliver in three days. More than a landing page, it tells your story and shows off your stuff.',
    link: '/services/multi-product-store',
    icon: faCartShopping
  },
  {
    title: 'The Vispaico Full Startup Website - for $6999 in 15 Days',
    summary: 'A custom-built page designed to make your visitors act—whether that’s signing up, buying, or clicking through. Delivered in two days.',
    link: '/services/full-fledged-start-up-page',
    icon: faFire
  },
];

const whatIsWhatData = [
  {
    title: 'Website Design',
    summary: 'Your digital turf—where people find you, learn your deal, and hopefully stick around. Built to look legit, work smooth, and show up when people search.',
    link: '/services/web-design/website-design',
    icon: faDesktop
  },
  {
    title: 'Landing Page Design',
    summary: 'A single page with one job: get people to do something. Sign up, buy, click—it’s your digital bouncer, filtering out the tire-kickers and ushering in the action-takers.',
    link: '/services/web-design/landing-page-design',
    icon: faFileAlt
  },
];

export default function WebDesignPage() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Web Design & Development</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you need one page or a whole web app, you get a site that&apos;s fast, looks good, and works.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {mainCardData.map((card, i) => (
            <Link href={card.link} key={card.title} passHref legacyBehavior>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-black/20 p-8 rounded-xl flex flex-col cursor-pointer border border-white/20 backdrop-blur-lg"
              >
                <div className="absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-gradient-to-r from-orange-500 to-red-600 p-0.5">
                    <div className="bg-slate-800 h-full w-full rounded-lg"></div>
                </div>
                <div className="relative z-10 grow flex flex-col">
                  <FontAwesomeIcon icon={card.icon} className="text-3xl text-indigo-400 mb-4" />
                  <h2 className="text-2xl font-bold mb-3">{card.title}</h2>
                  <p className="text-gray-300 mb-6 grow">{card.summary}</p>
                  <span className="text-indigo-400 font-semibold group-hover:text-orange-400 transition-colors mt-auto">
                    Learn More
                  </span>
                </div>
              </motion.a>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 mt-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">What is What</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {whatIsWhatData.map((card, i) => (
            <Link href={card.link} key={card.title} passHref legacyBehavior>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-black/20 p-8 rounded-xl flex flex-col cursor-pointer border border-white/20 backdrop-blur-lg"
              >
                <div className="absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-gradient-to-r from-orange-500 to-red-600 p-0.5">
                    <div className="bg-slate-800 h-full w-full rounded-lg"></div>
                </div>
                <div className="relative z-10 grow flex flex-col">
                  <FontAwesomeIcon icon={card.icon} className="text-3xl text-indigo-400 mb-4" />
                  <h2 className="text-2xl font-bold mb-3">{card.title}</h2>
                  <p className="text-gray-300 mb-6 grow">{card.summary}</p>
                  <span className="text-indigo-400 font-semibold group-hover:text-orange-400 transition-colors mt-auto">
                    Learn More
                  </span>
                </div>
              </motion.a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
