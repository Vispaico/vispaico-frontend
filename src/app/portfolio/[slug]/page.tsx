import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { getProjectById, getAllProjects } from '@/lib/portfolio'; // Import our new functions

interface PageProps {
  params: { slug: string };
}

// This function tells Next.js which pages to build.
export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.id,
  }));
}

// generateMetadata uses the new library function.
export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectById(params.slug);
  if (!project) {
    return { title: 'Project Not Found' };
  }
  return {
    title: `${project.title} | Vispaico Portfolio`,
    description: project.summary,
  };
}

// The page component is now simple and reliable.
export default function PortfolioDetailPage({ params }: PageProps) {
  const project = getProjectById(params.slug);

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-12 text-center">
        <p className='mb-4'>Project not found.</p>
        <Link href="/portfolio" className='underline'>Return to Portfolio</Link>
      </div>
    );
  }

  // Find the first 'textOnly' section to use as the main description
  const descriptionSection = project.story.find(section => section.type === 'textOnly');

  return (
    <article className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* 1. Hero Section */}
      <div className="relative h-96 md:h-[500px] w-full">
        <Image 
          src={project.coverImage} 
          alt={project.title} 
          layout="fill" 
          objectFit="cover" 
          priority 
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold">{project.title}</h1>
            <p className="text-xl mt-2">{project.client}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-16 max-w-4xl">
        {/* 2. The Story / Description */}
        {descriptionSection && descriptionSection.type === 'textOnly' && (
          <section className="mb-12 border-b pb-8 dark:border-gray-700">
            <h2 className="text-3xl font-bold mb-4">{descriptionSection.headline}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">{descriptionSection.text}</p>
          </section>
        )}

        {/* 3. Image & Video Gallery */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.story.map((item, index) => {
              if (item.type === 'fullBleedImage' || item.type === 'splitLayout') {
                return (
                  <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                    <Image src={item.imageSrc} alt={`Gallery image ${index + 1}`} layout="fill" objectFit="cover" />
                  </div>
                );
              }
              if (item.type === 'fullBleedVideo') {
                return (
                  <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-lg md:col-span-2">
                    <video src={item.videoSrc} controls className="w-full h-full object-cover" />
                  </div>
                );
              }
              return null; // Ignore textOnly and other types for the gallery
            })}
          </div>
        </section>

        {/* 4. Back to Portfolio Link */}
        <div className="text-center mt-16">
          <Link href="/portfolio" className="text-lg text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
            ← Back to All Projects
          </Link>
        </div>
      </div>
    </article>
  );
}