// src/components/TestimonialsSection.tsx (Corrected)

"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import testimonialsData from '@/data/testimonials.json'; // Import the local data
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// --- CHANGE 1: Define a type for a single testimonial object for type safety ---
interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  imageSrc: string;
}

// --- CHANGE 2: Tell TypeScript that our imported data is an array of Testimonial objects ---
const testimonials: Testimonial[] = testimonialsData;

// This is a Server Component by default, which is great for SEO and performance.
export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Don&apos;t Take Our Words for It
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here is what our Fan Club has to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-black/20 backdrop-blur-lg rounded-lg p-6 flex flex-col border-l-4 border-blue-400 shadow-lg"
              whileHover={{ scale: 1.03, y: -5, boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.4)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="grow">
                <p className="text-gray-300 italic">
                  “{testimonial.quote}”
                </p>
              </div>
              <div className="text-yellow-400 mb-4 mt-6">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
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
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}