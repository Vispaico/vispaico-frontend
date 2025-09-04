'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCursor } from '@/context/CursorContext';
import Sticker from './Sticker';

// Define the type for a single project's data
interface Project {
  id: string;
  title: string;
  coverImage: string;
  summary: string;
  stickerText?: string;
}

export default function PortfolioCard({ project }: { project: Project }) {
  const { setIsHoveringInteractive } = useCursor();

  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg bg-black/20 border border-white/20 backdrop-blur-lg aspect-4/3">
      <Link href={`/portfolio/${project.id}`} passHref legacyBehavior>
        <a 
          onMouseEnter={() => setIsHoveringInteractive(true)} 
          onMouseLeave={() => setIsHoveringInteractive(false)} 
          className="block w-full h-full"
        >
          {/* Image Container */}
          <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-105">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          
          {/* Overlay with Adjusted Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10">
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-1 text-white drop-shadow-md">{project.title}</h3>
              <p className="text-sm text-indigo-300 drop-shadow-xs">{project.summary}</p>
            </div>
          </div>
        </a>
      </Link>
      {project.stickerText && <Sticker text={project.stickerText} />}
    </div>
  );
}