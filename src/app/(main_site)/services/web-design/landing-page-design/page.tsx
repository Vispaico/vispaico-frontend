'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faBolt, faShieldAlt, faRocket, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import KickoffForm from '@/components/KickoffForm';

const mustHaves = [
  { icon: faBullseye, text: 'Headlines That Slap' },
  { icon: faBolt, text: 'CTAs That Push' },
  { icon: faShieldAlt, text: 'Trust Stuff' },
  { icon: faRocket, text: 'Speed Demon' },
  { icon: faThumbsUp, text: 'Mobile Love' },
];

export default function LandingPageDesignPage() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2">Landing Pages: Why They Matter & How We Nail ‘Em</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            You’re here because you’re curious about landing pages—what they do, why they’re clutch, and how we make ours kick ass. No corporate fluff, no “we’re the greatest” garbage—just the straight-up goods on why these pages are your secret weapon.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-black/20 backdrop-blur-lg border border-white/20 rounded-lg"
          >
            <h2 className="text-3xl font-bold mb-4">What’s a Landing Page?</h2>
            <p className="text-gray-300">It’s a single page with one job: get people to do something. Sign up, buy, click—it’s your digital bouncer, filtering out the tire-kickers and ushering in the action-takers. No menus, no detours—just focus.</p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-500/50 backdrop-blur-lg border border-white/20 p-4 rounded-lg text-center">
              <h3 className="font-bold text-lg">Conversions on Lock</h3>
            </div>
            <div className="bg-purple-500/50 backdrop-blur-lg border border-white/20 p-4 rounded-lg text-center">
              <h3 className="font-bold text-lg">SEO Juice</h3>
            </div>
            <div className="bg-pink-500/50 backdrop-blur-lg border border-white/20 p-4 rounded-lg text-center col-span-2">
              <h3 className="font-bold text-lg">Fast Results</h3>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">The Must-Haves</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {mustHaves.map((item, i) => (
              <motion.div
                key={item.text}
                className="flex flex-col items-center text-center w-32"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <FontAwesomeIcon icon={item.icon} className="text-4xl mb-3 text-indigo-400" />
                <p className="font-semibold">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-black/20 backdrop-blur-lg border border-white/20 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">How We Do It</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-bold mb-2">SEO That Sticks</h3>
              <p className="text-gray-400">We dig up keywords and bake ‘em in so you rank, not vanish.</p>
            </div>
            <div className="p-4 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Copy That Talks</h3>
              <p className="text-gray-400">Punchy, human, and zero BS—words that make people move.</p>
            </div>
            <div className="p-4 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Design That Pops</h3>
              <p className="text-gray-400">Clean, sharp, and responsive. Looks good, works better.</p>
            </div>
            <div className="p-4 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-bold mb-2">UI That Flows</h3>
              <p className="text-gray-400">Easy to scan, easier to act—no friction, just results.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <KickoffForm service="premium-landingpage" showServiceInfo={false} />
        </div>
      </div>
    </div>
  );
}