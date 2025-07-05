import portfolioData from '@/data/portfolio.json';
import { Project } from '@/types/portfolio';
import ProjectStory from '@/components/ProjectStory';
import Link from 'next/link'; // Keep Link for the "Not Found" case

// --- NO MORE getProjectData HELPER FUNCTION ---

// Generate static pages at build time (this is correct)
export function generateStaticParams() {
  const projects: Project[] = portfolioData as Project[];
  return projects.map((project) => ({
    slug: project.id,
  }));
}

// Generate metadata dynamically for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  // --- THE CRITICAL FIX: Perform the lookup directly inside the function ---
  const projects: Project[] = portfolioData as Project[];
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }
  return {
    title: `${project.title} | Vispaico Portfolio`,
    description: project.summary,
  };
}

// This is the main page component.
export default async function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  // --- THE CRITICAL FIX: Perform the lookup directly inside the function ---
  const projects: Project[] = portfolioData as Project[];
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-12 md:py-16 min-h-screen text-center flex flex-col items-center justify-center">
        <p className='text-xl mb-4'>Project not found.</p>
        <Link href="/portfolio" className='text-lg underline text-indigo-400 hover:text-yellow-400'>
          Return to All Projects
        </Link>
      </div>
    );
  }

  // We pass the clean `project` data to our presentation component.
  return <ProjectStory project={project} />;
}