'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";
import { useCursor } from '@/context/CursorContext';
import { Project } from '@/types/portfolio'; // Import our Project type

export default function FeaturedWorkMarquee({ projects }: { projects: Project[] }) {
  const { setIsHoveringInteractive } = useCursor();

  if (!projects || projects.length === 0) {
    return <p className="text-center text-gray-400 py-10">No featured projects yet.</p>;
  }

  return (
    <Marquee gradient={true} gradientColor="[15, 23, 42]" gradientWidth={100} speed={40} pauseOnHover={true}>
      {projects.map((item) => (
        <div key={item.id} className="mx-4 w-[400px] max-w-[70vw] md:w-[450px] lg:w-[500px] flex-shrink-0">
          <div className="group relative overflow-hidden rounded-lg shadow-xl bg-slate-800 aspect-[16/10]">
            <Link href={`/portfolio/${item.id}`} passHref legacyBehavior>
              <a
                onMouseEnter={() => setIsHoveringInteractive(true)}
                onMouseLeave={() => setIsHoveringInteractive(false)}
                className="block w-full h-full"
              >
                {/* Image Container */}
                <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-105">
                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 70vw, 500px"
                    className="object-cover"
                  />
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/70 to-transparent p-4 md:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-10">
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-white drop-shadow-md">{item.title}</h3>
                    <p className="text-sm text-indigo-300 drop-shadow-sm">{item.summary}</p>
                  </div>
                  <div className="mt-auto pt-2 border-t border-white/20">
                    <span className="text-sm font-medium text-white">View Details</span>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      ))}
    </Marquee>
  );
}