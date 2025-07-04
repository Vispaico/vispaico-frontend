'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

// --- CHANGE: Import the specific section types from your central definition file ---
import { 
  FullBleedImageSection,
  SplitLayoutSection,
  TextOnlySection,
  SideBySideImagesSection,
  FullBleedVideoSection
} from '@/types/portfolio'; // Assuming this is the correct path

// --- Scene 1: Full-Width Image ---
// --- Note how the prop type is now specific and imported ---
export function FullBleedImage({ section }: { section: FullBleedImageSection }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.45, 0.55, 0.7], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.3, 0.45], ['2rem', '0rem']);

  return (
    <section ref={targetRef} className="h-[150vh] relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale }} className="w-full h-full absolute inset-0">
          <Image src={section.imageSrc} alt={section.headline || 'Portfolio Image'} layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
        {/* We add a check here in case headline is optional, which is good practice */}
        {section.headline && (
          <motion.h2 
            style={{ opacity: textOpacity, y: textY }}
            className="text-white text-4xl md:text-6xl font-bold z-10 text-center drop-shadow-lg max-w-4xl px-4"
          >
            {section.headline}
          </motion.h2>
        )}
      </div>
    </section>
  );
}

// --- Scene 2: Split Layout ---
export function SplitLayout({ section }: { section: SplitLayoutSection }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const imageX = useTransform(scrollYProgress, [0.1, 0.5], ['-100%', '0%']);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  return (
    <section ref={targetRef} className="h-screen w-full flex items-center justify-center p-8 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <motion.div style={{ opacity: textOpacity }}>
          <p className="text-xl md:text-2xl text-gray-300">{section.text}</p>
        </motion.div>
        <motion.div style={{ x: imageX }} className="relative aspect-[4/3] rounded-lg overflow-hidden">
          <Image src={section.imageSrc} alt="Portfolio detail" layout="fill" objectFit="cover" />
        </motion.div>
      </div>
    </section>
  );
}

// --- Scene 3: Text Only ---
export function TextOnly({ section }: { section: TextOnlySection }) {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end center'],
    });
    const opacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
    const y = useTransform(scrollYProgress, [0.2, 0.6], ['2rem', '0rem']);
    return (
        <motion.section ref={targetRef} style={{ opacity, y }} className="h-screen flex items-center justify-center">
            <div className="max-w-3xl mx-auto text-center px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{section.headline}</h2>
                <p className="text-xl text-gray-400">{section.text}</p>
            </div>
        </motion.section>
    );
}

// --- Scene 4: Side-by-Side Images ---
export function SideBySideImages({ section }: { section: SideBySideImagesSection }) {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start'],
    });
    const leftX = useTransform(scrollYProgress, [0.1, 0.5], ['-100%', '0%']);
    const rightX = useTransform(scrollYProgress, [0.1, 0.5], ['100%', '0%']);
    const textOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
    return (
        <section ref={targetRef} className="h-screen w-full flex items-center justify-center p-8 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 items-center max-w-6xl mx-auto">
                <motion.div style={{ x: leftX }} className="flex-1 text-center">
                    <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                        <Image src={section.imageLeft} alt={section.textLeft || 'Left image'} layout="fill" objectFit="cover" />
                    </div>
                    {section.textLeft && <motion.p style={{ opacity: textOpacity }} className="mt-2 text-gray-400">{section.textLeft}</motion.p>}
                </motion.div>
                <motion.div style={{ x: rightX }} className="flex-1 text-center">
                    <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                        <Image src={section.imageRight} alt={section.textRight || 'Right image'} layout="fill" objectFit="cover" />
                    </div>
                    {section.textRight && <motion.p style={{ opacity: textOpacity }} className="mt-2 text-gray-400">{section.textRight}</motion.p>}
                </motion.div>
            </div>
        </section>
    );
}

// --- Scene 5: Full-Bleed Video ---
export function FullBleedVideo({ section }: { section: FullBleedVideoSection }) {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start'],
    });
    const textOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
    return (
        <section ref={targetRef} className="h-[150vh] relative">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <video src={section.videoSrc} autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0" />
                <div className="absolute inset-0 bg-black/40 z-0" />
                {section.headline && (
                    <motion.h2 style={{ opacity: textOpacity }} className="text-white text-4xl md:text-6xl font-bold z-10 text-center drop-shadow-lg px-4">
                        {section.headline}
                    </motion.h2>
                )}
            </div>
        </section>
    );
}