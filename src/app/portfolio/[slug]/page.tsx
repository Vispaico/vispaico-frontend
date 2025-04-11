// src/app/portfolio/[slug]/page.tsx (Minimal Test)
import React from 'react';

// Minimal props type
interface MinimalProps {
    params: { slug: string };
}

export default function MinimalPortfolioPage({ params }: MinimalProps) {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-2xl font-bold">Portfolio Item</h1>
      <p>Slug: {params.slug}</p>
      <p>If you see this, the basic page component built successfully.</p>
      <a href="/portfolio">Back to Portfolio (simple link)</a>
    </div>
  );
}

// Remove generateStaticParams if present
// export async function generateStaticParams() { return []; } // Keep empty if needed for build? Unlikely.