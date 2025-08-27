// src/components/TestimonialsSection.tsx (Corrected)

"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import testimonialsData from '@/data/testimonials.json'; // Import the local data

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
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Don&apos;t Take Our Words for It
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Here is what our Fan Club has to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-100 rounded-lg p-6 flex flex-col border-l-4 border-indigo-500 shadow-sm"
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.07)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="grow">
                <p className="text-slate-700 italic">
                  “{testimonial.quote}”
                </p>
              </div>
              <div className="flex items-center mt-6">
                <Image
                  src={testimonial.imageSrc}
                  alt={`Photo of ${testimonial.name}`}
                  width={56}
                  height={56}
                  className="rounded-full object-cover"
                />
                <div className="ml-4">
                  <cite className="font-bold text-slate-900 not-italic">
                    {testimonial.name}
                  </cite>
                  <p className="text-sm text-slate-500">
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