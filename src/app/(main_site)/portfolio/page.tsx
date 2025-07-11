// --- FIX: Unused 'Image'and 'Link' import is removed ---
import portfolioData from '@/data/portfolio.json';
import { Project } from '@/types/portfolio';
import PortfolioCard from '@/components/PortfolioCard';

export default function PortfolioPage() {
  const projects: Project[] = portfolioData as Project[];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
    <div className="container mx-auto px-6 py-12 md:py-16 min-h-screen text-gray-900 dark:text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Our Work</h1>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">No portfolio items found.</p>
      )}
    </div>
    </main>
  );
}