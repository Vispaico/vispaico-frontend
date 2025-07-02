'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faFileAlt, faShoppingCart, faPenRuler, faRocket } from '@fortawesome/free-solid-svg-icons';

const cardData = [
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
  {
    title: '$899 Landing Page',
    summary: 'A custom-built page designed to make your visitors act—whether that’s signing up, buying, or clicking through. Delivered in two days.',
    link: '/services/web-design/899usd-landingpage',
    icon: faRocket
  },
  {
    title: '$899 Webpage',
    summary: 'Your online handshake, built to impress and deliver in three days. More than a landing page, it tells your story and shows off your stuff.',
    link: '/services/web-design/899usd-website',
    icon: faPenRuler
  },
  
];

export default function WebDesignPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Web Design & Development</h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Whether you need one page or a whole web app, you get a site that&apos;s fast, looks good, and works.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, i) => (
            <Link href={card.link} key={card.title} passHref legacyBehavior>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.05, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 20px 4px rgba(59, 130, 246, 0.5)' }}
                className="bg-gray-800 p-8 rounded-xl flex flex-col cursor-pointer"
              >
                <div className="flex-grow">
                  <FontAwesomeIcon icon={card.icon} className="text-3xl text-indigo-400 mb-4" />
                  <h2 className="text-2xl font-bold mb-3">{card.title}</h2>
                  <p className="text-gray-400 mb-6">{card.summary}</p>
                </div>
                <span className="text-indigo-400 font-semibold hover:underline mt-auto">
                  Learn More
                </span>
              </motion.a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
