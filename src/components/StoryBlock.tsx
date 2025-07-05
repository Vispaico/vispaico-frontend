'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { StorySection } from '@/types/portfolio';

// This component uses Framer Motion hooks, so it MUST be a Client Component.
export default function StoryBlock({ section }: { section: StorySection }) {
  const renderSection = () => {
    switch (section.type) {
      case 'fullBleedImage':
        return (
          <div className="relative h-[60vh] md:h-[80vh] w-full">
            <Image src={section.imageSrc!} alt={section.headline || 'Portfolio hero image'} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg max-w-4xl px-4">{section.headline}</h2>
            </div>
          </div>
        );
      case 'splitLayout':
        return (
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center my-16 md:my-24 max-w-6xl mx-auto px-6">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image src={section.imageSrc!} alt="Project detail" fill className="object-cover" />
            </div>
            <p className="text-lg md:text-xl text-gray-300">{section.text}</p>
          </div>
        );
      case 'textOnly':
        return (
          <div className="my-16 md:my-24 max-w-3xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{section.headline}</h2>
            <p className="text-lg text-gray-400">{section.text}</p>
          </div>
        );
      case 'sideBySideImages':
        return (
          <div className="grid md:grid-cols-2 gap-8 my-16 md:my-24 max-w-6xl mx-auto px-6">
            <div className="text-center">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image src={section.imageLeft!} alt={section.textLeft || 'Left image'} fill className="object-cover" />
              </div>
              <p className="mt-2 text-sm text-gray-400">{section.textLeft}</p>
            </div>
            <div className="text-center">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image src={section.imageRight!} alt={section.textRight || 'Right image'} fill className="object-cover" />
              </div>
              <p className="mt-2 text-sm text-gray-400">{section.textRight}</p>
            </div>
          </div>
        );
      case 'fullBleedVideo':
        return (
          <div className="relative h-[60vh] md:h-[80vh] w-full">
            <video src={section.videoSrc!} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h2 className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg max-w-4xl px-4">{section.headline}</h2>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {renderSection()}
    </motion.div>
  );
}