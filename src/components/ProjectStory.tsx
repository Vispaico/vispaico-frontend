'use client';

import { Link } from '@/i18n/navigation';
import { Project } from '@/types/portfolio';
import StoryBlock from '@/components/StoryBlock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Sticker from './Sticker';

library.add(faArrowLeft);

// --- THIS IS THE CRITICAL FIX: "export default" is part of the function declaration ---
export default function ProjectStory({ project }: { project: Project }) {
  return (
    <article className="bg-gradient-to-br from-gray-900 via-blue-950 to-slate-900 text-white">
      {/* Page Header Section */}
      <header className="container mx-auto px-6 pt-16 md:pt-24 text-center relative overflow-visible">
        <Link
            href="/case-studies"
            className="inline-flex items-center text-gray-300 hover:text-yellow-400 mb-8 transition-colors group"
        >
             <FontAwesomeIcon icon={faArrowLeft} className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
             Back to Case Studies
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold text-white bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 pb-2">{project.title}</h1>
        <p className="text-xl text-gray-300 mt-2">Client: {project.client}</p>
        <div className="mt-4 flex justify-center">
            {project.sticker && <Sticker line1={project.sticker.line1} line2={project.sticker.line2} />}
        </div>
      </header>
      
      {/* Main Story Content */}
      <main className="mt-12 md:mt-16">
        {project.story.map((section, index) => (
          <StoryBlock key={index} section={section} />
        ))}
      </main>

      {/* Page Footer Section */}
      <footer className="py-16 md:py-24 flex flex-col items-center justify-center text-center">
          <Link
            href="/vispaico-growth-website"
            className="mb-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 text-lg font-semibold text-gray-900 transition hover:from-yellow-300 hover:to-orange-400"
          >
            Get your own Growth Website - $899
          </Link>
          <h2 className="text-3xl font-bold mb-4">Project Complete</h2>
          <p className="text-lg text-gray-300 mb-8">{project.title}</p>
          <Link href="/case-studies" className="text-yellow-400 hover:underline text-xl">
            Back to Case Studies
          </Link>
      </footer>
    </article>
  );
}
