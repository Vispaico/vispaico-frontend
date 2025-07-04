import Link from 'next/link';
import portfolioData from '@/data/portfolio.json';
import { StorySection, Project } from '@/types/portfolio';

// Import all the scene components from the file you created
import {
  FullBleedImage,
  SplitLayout,
  TextOnly,
  SideBySideImages,
  FullBleedVideo
} from '@/components/portfolio-scenes';

const projects: Project[] = portfolioData as Project[];

// Helper function to find the right project data based on the URL slug
function getProjectData(slug: string) {
  return projects.find((project) => project.id === slug);
}

type PageProps = {
  params: { slug: string };
};

// Generate metadata dynamically for SEO
export async function generateMetadata({ params }: PageProps) {
  const project = getProjectData(params.slug);
  if (!project) {
    return { title: 'Project Not Found' };
  }
  return {
    title: `${project.title} | Vispaico Portfolio`,
    description: project.summary,
  };
}

// This is now a Server Component
export default function PortfolioDetailPage({ params }: PageProps) {
  const project = getProjectData(params.slug);

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-12 md:py-16 min-h-screen text-center">
        <p className='mb-4'>Project not found.</p>
        <Link href="/portfolio" className='underline text-indigo-600 dark:text-indigo-400'>
          Return to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-black text-white">
      {/* Loop through the story array and render the correct component for each scene */}
      {project.story.map((section: StorySection, index: number) => {
        // The `section` is passed as a prop to each scene component
        switch (section.type) {
          case 'fullBleedImage':
            return <FullBleedImage key={index} section={section} />;
          case 'splitLayout':
            return <SplitLayout key={index} section={section} />;
          case 'textOnly':
            return <TextOnly key={index} section={section} />;
          case 'sideBySideImages':
            return <SideBySideImages key={index} section={section} />;
          case 'fullBleedVideo':
            return <FullBleedVideo key={index} section={section} />;
          default:
            return <div key={index} className="h-screen flex items-center justify-center">Unknown section type.</div>;
        }
      })}

      {/* A final section to navigate back or to the next project */}
      <div className="h-screen flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl font-bold mb-4">Project Complete</h2>
          <p className="text-lg text-gray-400 mb-8">{project.title}</p>
          <Link href="/portfolio" className="text-yellow-400 hover:underline text-xl">
            Back to All Projects
          </Link>
      </div>
    </article>
  );
}