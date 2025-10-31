// /src/app/(main_site)/services/web-design/page.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faRocket, faMoneyBill1Wave, faStar, faGun, faCrown } from '@fortawesome/free-solid-svg-icons';

const mainCardData = [
  {
    title: 'Complete Business Website - 3 Days | $899',
    summary: 'Full business website with multiple pages, contact forms, and content management. Perfect for established businesses needing a complete online presence. What agencies charge $5k+ for, delivered in 72 hours.',
    link: '/services/vispaico-three-day-business-website',
    icon: faStar
  },
  {
    title: 'Express Website - 24 Hours | $199',
    summary: 'Professional website for solo entrepreneurs, freelancers, and consultants who need to get online fast. Up to 5 pages showcasing your services and expertise. Perfect for building credibility quickly.',
    link: '/services/vispaico-24-hour-express-website',
    icon: faRocket
  },
  {
    title: 'High-Converting Sales Page - 2 Days | $499',
    summary: 'Single page designed to sell your product, service, or event. Optimized for mobile conversions with clear calls-to-action. Perfect for launches, courses, and campaign-specific sales.',
    link: '/services/vispaico-premium-landingpage',
    icon: faMoneyBill1Wave
  },
  {
    title: 'The Vispaico BAZOOKA - 3 Days | $999',
    summary: 'Six targeted websites that dominate your local search results. Perfect for restaurants, contractors, dentists, and local service businesses. Includes Google Maps optimization and local SEO.',
    link: '/services/the-vispaico-bazooka',
    icon: faGun
  },
  {
    title: 'Full Online Store - 10 Days | $1999',
    summary: 'Complete e-commerce store with Stripe/PayPal/Apple Pay, inventory tracking, order management, and customer accounts. Everything you need to sell products online, ready in 10 days.',
    link: '/services/vispaico-full-online-store',
    icon: faCartShopping
  },
  {
    title: 'Vispaico Premium Website - 14 Days | $4000',
    summary: 'Bespoke flagship build with senior strategy, UX, engineering, analytics, and integrations. White-glove launch with 30-day priority support and full ownership.',
    link: '/services/vispaico_premium_website',
    icon: faCrown
  },
];

const decisionHelper = {
  title: "Not Sure Which Service You Need?",
  subtitle: "Answer these quick questions:",
  questions: [
    {
      question: "Do you need to get online today?",
      answer: "Express Website - $199, 24 hours"
    },
    {
      question: "Do you need a complete business presence?", 
      answer: "Business Website - $899, 3 days"
    },
    {
      question: "Are you launching a specific product or event?",
      answer: "Sales Page - $499, 2 days"
    },
    {
      question: "Do you sell physical or digital products?",
      answer: "Online Store - $3999, 10 days"
    },
    {
      question: "Do you want to dominate your local market?",
      answer: "The Bazooka - $999, 3 days"
    },
    {
      question: "Do you need a custom flagship site with senior specialists?",
      answer: "Premium Website - $4000, 14 days"
    }
  ]
}

const serviceComparison = {
  title: "Service Comparison",
  services: [
    {
      name: "Express Website",
      price: "$199",
      time: "24 hours", 
      pages: "Up to 5",
      bestFor: "Solo professionals",
      includes: ["Domain & hosting", "Mobile responsive", "Contact forms", "SEO ready"]
    },
    {
      name: "Business Website", 
      price: "$899",
      time: "3 days",
      pages: "Multiple + dashboard",
      bestFor: "Established businesses",
      includes: ["Everything in Express", "Content management", "Blog capability", "User accounts"]
    },
    {
      name: "Sales Page",
      price: "$499", 
      time: "2 days",
      pages: "1 optimized page",
      bestFor: "Product launches",
      includes: ["Conversion optimized", "A/B test ready", "Analytics setup", "Mobile checkout"]
    },
    {
      name: "Online Store",
      price: "$3999",
      time: "10 days", 
      pages: "Full e-commerce",
      bestFor: "Product businesses",
      includes: ["Payment processing", "Inventory management", "Order tracking", "Customer accounts"]
    },
    {
      name: "The Bazooka",
      price: "$999",
      time: "3 days",
      pages: "6 websites",
      bestFor: "Local businesses", 
      includes: ["6 domains included", "Google Maps optimization", "Local SEO", "Multiple targeting"]
    },
    {
      name: "Premium Website",
      price: "$4000",
      time: "14 days",
      pages: "Custom multi-page",
      bestFor: "Scaling teams & agencies",
      includes: ["Dedicated senior squad", "Custom design system", "Integrations & automations", "30-day priority support"]
    }
  ]
}



export default function WebDesignPage() {
  const serviceLinkMap: { [key: string]: string } = {
    "Express Website - $199, 24 hours": "/services/vispaico-24-hour-express-website",
    "Business Website - $899, 3 days": "/services/vispaico-three-day-business-website",
    "Sales Page - $499, 2 days": "/services/vispaico-premium-landingpage",
    "Online Store - $3999, 10 days": "/services/vispaico-full-online-store",
    "The Bazooka - $999, 3 days": "/services/the-vispaico-bazooka",
    "Premium Website - $4000, 14 days": "/services/vispaico_premium_website",
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2">Web Design & Development</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you need an Express Website or a whole Online Shop, you get a site that&apos;s fast, looks awesome, and works.
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
                  <FontAwesomeIcon icon={card.icon} className="text-3xl text-orange-400 mb-4" />
                  <h2 className="text-2xl font-bold mb-3">{card.title}</h2>
                  <p className="text-gray-200 mb-6 grow">{card.summary}</p>
                  <span className="text-indigo-200 font-semibold group-hover:text-orange-400 transition-colors mt-auto">
                    Learn More →
                  </span>
                </div>
              </motion.a>
            </Link>
          ))}
        </div>

        {/* Decision Helper Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 mt-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">{decisionHelper.title}</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">{decisionHelper.subtitle}</p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          {decisionHelper.questions.map((item, index) => (
            <Link href={serviceLinkMap[item.answer] || '#'} key={index} passHref legacyBehavior>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-black/20 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between cursor-pointer border border-white/20 backdrop-blur-lg mb-6"
              >
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold text-indigo-400 mb-2">{item.question}</h3>
                  <p className="text-gray-300 text-base sm:text-lg">{item.answer}</p>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 flex-shrink-0">
                  <span className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-2 px-4 rounded-md text-sm sm:text-base transition-transform duration-300 ease-in-out group-hover:scale-105">
                    View Service
                  </span>
                </div>
              </motion.a>
            </Link>
          ))}
        </div>

        {/* Service Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 mt-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">{serviceComparison.title}</h2>
        </motion.div>
        <div className="relative bg-black/20 p-8 rounded-xl border border-white/20 backdrop-blur-lg">
          <div className="absolute top-0 left-0 w-full h-full rounded-xl opacity-100 transition-opacity duration-300 ease-in-out bg-gradient-to-r from-orange-500 to-red-600 p-0.5">
              <div className="bg-slate-800 h-full w-full rounded-lg"></div>
          </div>
          <div
            className="relative z-10 overflow-x-auto"
            tabIndex={0}
            aria-label="Service comparison table scroll area"
          >
            <table className="min-w-full text-left text text-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-400">Service</th>
                  <th className="py-2 px-4 border-b border-gray-400">Price</th>
                  <th className="py-2 px-4 border-b border-gray-400">Time</th>
                  <th className="py-2 px-4 border-b border-gray-400">Pages</th>
                  <th className="py-2 px-4 border-b border-gray-400">Best For</th>
                  <th className="py-2 px-4 border-b border-gray-400">Includes</th>
                </tr>
              </thead>
              <tbody>
                {serviceComparison.services.map((service, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-b border-gray-600">{service.name}</td>
                    <td className="py-2 px-4 border-b border-gray-600">{service.price}</td>
                    <td className="py-2 px-4 border-b border-gray-600">{service.time}</td>
                    <td className="py-2 px-4 border-b border-gray-600">{service.pages}</td>
                    <td className="py-2 px-4 border-b border-gray-600">{service.bestFor}</td>
                    <td className="py-2 px-4 border-b border-gray-600">
                      <ul className="list-disc list-inside">
                        {service.includes.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
