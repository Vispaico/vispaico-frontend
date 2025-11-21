'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// --- THIS IS THE CRITICAL FIX ---
// We are defining the types directly inside this file.
// This makes the component self-contained and bypasses all external
// type definition and caching issues permanently.

interface ContentBlock {
  type: 'heading' | 'paragraph' | 'list';
  text?: string;
  items?: string[];
}

export interface StorySection {
  type: 'fullBleedImage' | 'splitLayout' | 'textOnly' | 'sideBySideImages' | 'fullBleedVideo' | 'smallFullBleedVideo' | 'centeredVideo';
  imageSrc?: string;
  headline?: string;
  text?: string;
  imageLeft?: string;
  textLeft?: string;
  imageRight?: string;
  textRight?: string;
  videoSrc?: string;
  content?: ContentBlock[]; 
}
// --- END OF TYPE DEFINITIONS ---


// A simple helper function to find and render bold text in your lists
function renderWithBold(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

// This component now carries its own type definitions and will work correctly.
export default function StoryBlock({ section }: { section: StorySection }) {
  const renderSection = () => {
    switch (section.type) {
      case 'fullBleedImage':
        return (
          <div className="relative h-[60vh] md:h-[80vh] w-full">
            <Image src={section.imageSrc!} alt={section.headline || 'Portfolio hero image'} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
              <h2 className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg max-w-4xl px-4">{section.headline}</h2>
            </div>
          </div>
        );
      case 'splitLayout':
        return (
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start my-16 md:my-24 max-w-6xl mx-auto px-6">
            
            {/* The corrected, non-cropping image implementation */}
            <div className="w-full">
              <Image
                src={section.imageSrc!}
                alt="Project detail"
                width={1080} // Provides the intrinsic aspect ratio
                height={1920} // Provides the intrinsic aspect ratio
                sizes="(max-width: 768px) 90vw, 45vw"
                className="w-full h-auto rounded-lg shadow-lg" // Width is 100%, height is automatic
              />
            </div>

            {/* The text content, which will now be correctly typed */}
            <div className="flex items-center">
              {section.content ? (
                <div className="prose prose-invert prose-lg text-gray-300">
                  {section.content.map((block, index) => {
                    switch (block.type) {
                      case 'heading':
                        return <h3 key={index} className="text-2xl font-bold text-white mb-3!">{block.text}</h3>;
                      case 'paragraph':
                        return <p key={index}>{block.text}</p>;
                      case 'list':
                        return (
                          <ul key={index} className="list-disc pl-5">
                            {block.items?.map((item, itemIndex) => (
                              <li key={itemIndex} className="my-2!">{renderWithBold(item)}</li>
                            ))}
                          </ul>
                        );
                      default:
                        return null;
                    }
                  })}
                </div>
              ) : (
                <p className="text-lg md:text-xl text-gray-300">{section.text}</p>
              )}
            </div>
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
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
              <h2 className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg max-w-4xl px-4">{section.headline}</h2>
            </div>
          </div>
        );
      case 'smallFullBleedVideo':
        return (
          <div className="relative h-[33vh] w-full">
            <video src={section.videoSrc!} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
              <h2 className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg max-w-4xl px-4">{section.headline}</h2>
            </div>
          </div>
        );
      case 'centeredVideo':
        return (
          <div className="flex justify-center items-center my-16 md:my-24">
            <div className="w-1/2">
              <video src={section.videoSrc!} autoPlay muted loop playsInline className="w-full h-full object-cover rounded-lg shadow-lg" />
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
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {renderSection()}
    </motion.div>
  );
}