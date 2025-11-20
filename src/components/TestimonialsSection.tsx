// src/components/TestimonialsSection.tsx

"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import testimonialsData from '@/data/testimonials.json'; // Import the local data
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

// --- CHANGE 1: Define a type for a single testimonial object for type safety ---
interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  imageSrc: string;
  badges?: string[];
}

// --- CHANGE 2: Tell TypeScript that our imported data is an array of Testimonial objects ---
const testimonials: Testimonial[] = testimonialsData;

// This is a Server Component by default, which is great for SEO and performance.
export default function TestimonialsSection() {
  const t = useTranslations('Home.testimonialsSection');
  const localizedItems = (t.raw('items') as { quote: string; title: string }[]) ?? [];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Testimonials Grid - Now a scrollable carousel on mobile */}
        <div className="testimonial-carousel-container">
          {testimonials.map((testimonial, index) => {
            const localized = localizedItems[index] ?? { quote: testimonial.quote, title: testimonial.title };
            const badges = testimonial.badges ?? [];

            const schema = {
              "@context": "https://schema.org",
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
              },
              "reviewBody": localized.quote,
              "author": {
                "@type": "Person",
                "name": testimonial.name,
              },
              "itemReviewed": {
                "@type": "Organization",
                "name": "Vispaico",
                "url": "https://www.vispaico.com"
              }
            };

            return (
            <motion.div
              key={testimonial.id}
              className="testimonial-carousel-card bg-black/20 backdrop-blur-lg rounded-lg p-6 flex flex-col border-l-4 border-blue-400 shadow-lg"
              whileHover={{ scale: 1.03, y: -5, boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.4)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
              />
              <div className="grow">
                <p className="text-gray-300 italic">
                  “{localized.quote}”
                </p>
              </div>
              <div className="text-yellow-400 mb-4 mt-6">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              {badges.length > 0 && (
                <div className="mb-5 flex flex-wrap gap-2">
                  {badges.map((badge) => (
                    <span key={badge} className="inline-flex items-center rounded-full bg-orange-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-200">
                      {badge}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex items-center">
                <Image
                  src={testimonial.imageSrc}
                  alt={`Photo of ${testimonial.name}`}
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                />
                <div className="ml-4">
                  <cite className="font-bold text-white not-italic">
                    {testimonial.name}
                  </cite>
                  <p className="text-sm text-gray-400">
                    {localized.title}
                  </p>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]"
          >
            {t('cta')}
            <svg aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}