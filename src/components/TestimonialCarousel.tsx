
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { getTestimonials, Testimonial } from '@/lib/testimonials';

const stripHtmlTags = (htmlString: string) => {
  const div = document.createElement('div');
  div.innerHTML = htmlString;
  return div.textContent || div.innerText || '';
};

const testimonialSlideFade = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  }),
};

const TestimonialCarousel = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      setLoading(true);
      const fetched = await getTestimonials();
      setTestimonials(fetched);
      setLoading(false);
    };
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [testimonials]);

  if (loading) {
    return <p className="text-center text-gray-400">Loading testimonials...</p>;
  }

  if (testimonials.length === 0) {
    return <p className="text-center text-gray-400">No testimonials available.</p>;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <motion.section className="mt-16">
      <h2 className="text-4xl font-bold text-center">What Our Clients Say</h2>
      <div className="mt-8 max-w-2xl mx-auto relative min-h-[250px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={testimonialSlideFade}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 text-center py-1 px-4 bg-gray-800 rounded-lg flex flex-col justify-center items-center overflow-hidden"
          >
            {currentTestimonial.featuredImage?.node?.sourceUrl && (
              <Image
                src={currentTestimonial.featuredImage.node.sourceUrl}
                alt={currentTestimonial.featuredImage.node.altText || currentTestimonial.testimonialDetails.authorName || 'Testimonial author'}
                width={60}
                height={60}
                className="rounded-full mx-auto mb-2 object-cover"
              />
            )}
            <p className="text-lg italic text-gray-300 mb-2 overflow-y-auto max-h-[120px]">{stripHtmlTags(currentTestimonial.content || currentTestimonial.testimonialDetails.quoteText || "No review text available.")}</p>
            <p className="font-bold text-yellow-400 text-sm">{currentTestimonial.testimonialDetails.authorName}</p>
            <p className="text-gray-400 text-xs">{currentTestimonial.testimonialDetails.authorTitle}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default TestimonialCarousel;
