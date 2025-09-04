'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';
import { Project } from '@/types/portfolio';
import Sticker from './Sticker';

export default function FeaturedWorkCard({ project }: { project: Project }) {
  const { setIsHoveringInteractive } = useCursor();
  const [isHovering, setIsHovering] = useState(false);

  const hasVideo = project.videoUrl && project.videoUrl.trim() !== '';

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-black/20 shadow-lg border border-white/20 backdrop-blur-lg aspect-4/3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      <Link href={`/portfolio/${project.id}`} passHref legacyBehavior>
        <a
          onMouseEnter={() => setIsHoveringInteractive(true)}
          onMouseLeave={() => setIsHoveringInteractive(false)}
          className="block w-full h-full"
        >
          {/* Video */}
          {hasVideo && (
            <video
              src={project.videoUrl}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
              autoPlay
              loop
              muted
              playsInline
            />
          )}

          {/* Image */}
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-cover transition-all duration-500 ${isHovering && hasVideo ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <div>
              <motion.h3
                className="text-xl font-semibold mb-1 text-white drop-shadow-md"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: isHovering ? 0 : 10, opacity: isHovering ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className="text-sm text-indigo-300 drop-shadow-xs"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: isHovering ? 0 : 10, opacity: isHovering ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {project.summary}
              </motion.p>
            </div>
          </div>
        </a>
      </Link>
      {project.stickerText && <Sticker text={project.stickerText} />}
    </motion.div>
  );
}
