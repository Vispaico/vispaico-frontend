'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faPaintBrush, faChartLine, faRocket } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const features = [
  { icon: faBullhorn, title: 'SEO That Rules', description: 'We optimize every page, product, or post so you’re not just found—you dominate.' },
  { icon: faPaintBrush, title: 'Design That Delivers', description: 'Sleek, user-friendly, and tough enough for traffic spikes. Mobile-ready, always.' },
  { icon: faChartLine, title: 'Research That Wins', description: 'We dissect your market, competitors, and audience to build something they can’t ignore.' },
  { icon: faRocket, title: 'Scalable Bones', description: 'Grows with you—add features, users, or products without breaking a sweat.' },
];

export default function Usd1899WebAppPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4">The $1899 Web App: Your Big Idea, Built Big</h1>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto">
            You’re here because you’re dreaming bigger than a webpage. You want a web app—something beefy like an e-commerce store or booking system—and our $1899 deal caught your eye. Good instincts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-80">
            <video className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-2xl" autoPlay loop muted playsInline>
              <source src="https://videos.pexels.com/video-files/6994619/6994619-uhd_2560_1440_30fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">What You’re Getting</h2>
            <p className="text-gray-300 text-lg">This isn’t a lightweight page; it’s a full-on system. Think multi-page, interactive, and built for action. We handle the tech, you handle the business.</p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Core Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="bg-gray-800 p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10, boxShadow: '0px 20px 30px rgba(0,0,0,0.3)' }}
              >
                <FontAwesomeIcon icon={feature.icon} className="text-4xl mb-4 text-indigo-400" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center bg-black p-12 rounded-lg shadow-inner">
          <h2 className="text-4xl font-bold mb-4">Let’s Do This</h2>
          <p className="text-xl text-gray-400 mb-8">You’re not here to window-shop. Grab the $1899 web app and turn your idea into action.</p>
          <Link href="/contact" passHref>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: '#4338ca' }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-700 text-white font-extrabold py-5 px-12 rounded-lg text-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Build Your $1899 Web App Now!
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
