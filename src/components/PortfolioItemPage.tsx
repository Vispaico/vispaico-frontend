// src/components/PortfolioItemPage.tsx
import React from 'react';
import portfolioData from '@/data/portfolio.json';
import { Project } from '@/types/portfolio';
import ProjectStory from '@/components/ProjectStory'; // Your existing component for the story
import Link from 'next/link';

// This component takes ONE prop: the unique ID of the project to display.
type Props = {
  projectId: string;
};

const PortfolioItemPage = ({ projectId }: Props) => {
  // Find the correct project from your central JSON file.
  const project = (portfolioData as Project[]).find(p => p.id === projectId);

  // If no project is found for the given ID, show a "Not Found" message.
  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <p className="mt-4">The project you are looking for does not exist.</p>
        <Link href="/portfolio" className="mt-6 text-lg underline text-indigo-400 hover:text-yellow-400">
          ← Return to All Projects
        </Link>
      </div>
    );
  }

  // If the project IS found, we render your existing ProjectStory component.
  // The background and layout are handled here, once.
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <ProjectStory project={project} />
    </main>
  );
};

export default PortfolioItemPage;