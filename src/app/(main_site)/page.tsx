// src/app/page.tsx (Updated)

import React from 'react'; // Ensure React is imported if using Fragments <>
import HeroSection from '@/components/HeroSection';
import FastTrackSection from '@/components/FastTrackSection';
import HomeServicesSnapshot from '@/components/HomeServicesSnapshot';
import HomeFeaturedWork from '@/components/HomeFeaturedWork';
import HomeProcessHighlight from '@/components/HomeProcessHighlight';
import HomeContactCTA from '@/components/HomeContactCTA';
import SectionDivider from '@/components/SectionDivider';
import Link from 'next/link';

// --- CHANGE: Import the new TestimonialsSection ---
import TestimonialsSection from '@/components/TestimonialsSection';
// --- NOTE: The old 'HomeTrustBlock' import has been removed ---

export default function Home() {
  const heroTitle = ["Innovate with AI.", "Create with Impact."];
  const heroTagline = "From a banger website in 24 hours to AI that runs the boring stuff for you. No dumb jargon, no buzzwords and no insulting quotes. We build the tech. You build the business.";

  return (
    <> {/* Root Fragment */}

      {/* Hero Section Component */}
      <HeroSection
        titleLines={heroTitle}
        tagline={heroTagline}
                // Defaults for CTA are used
      />

      <SectionDivider />

      {/* Fast-Track Your Online Presence Section */}
      <FastTrackSection />

      {/* --- NEW BUTTON ADDED --- */}
      <div className="text-center mb-16">
        <div className="inline-block p-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg">
          <Link
            href="/services/web-design"
            className="inline-block bg-slate-900 text-white font-bold py-3 px-7 rounded-md text-lg transition-all duration-300 ease-in-out hover:bg-transparent hover:text-gray-300"
          >
            Explore All Web Design Services Here
          </Link>
        </div>
      </div>
      {/* ------------------------ */}

      {/* The order of these sections is logical and effective. */}
      <HomeServicesSnapshot />
      <HomeFeaturedWork />
      <HomeProcessHighlight />

      {/* --- CHANGE: The old HomeTrustBlock is replaced with the new data-driven component --- */}
      <TestimonialsSection />
      {/* ------------------------------------------------------------------------------------ */}
      
      <HomeContactCTA />

    </> // End Root Fragment
  ); // End Component Return
} // End Home Component Function