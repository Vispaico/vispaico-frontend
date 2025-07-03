// src/app/page.tsx (Updated)

import React from 'react'; // Ensure React is imported if using Fragments <>
import HeroSection from '@/components/HeroSection';
import FastTrackSection from '@/components/FastTrackSection';
import HomeServicesSnapshot from '@/components/HomeServicesSnapshot';
import HomeFeaturedWork from '@/components/HomeFeaturedWork';
import HomeProcessHighlight from '@/components/HomeProcessHighlight';
import HomeContactCTA from '@/components/HomeContactCTA';

// --- CHANGE: Import the new TestimonialsSection ---
import TestimonialsSection from '@/components/TestimonialsSection';
// --- NOTE: The old 'HomeTrustBlock' import has been removed ---

export default function Home() {
  const heroTitle = ["Innovate with AI.", "Create with Impact."];
  const heroTagline = "From a professional website in 3 days, to AI that automates your business—we build what works.";

  return (
    <> {/* Root Fragment */}

      {/* Hero Section Component */}
      <HeroSection
        titleLines={heroTitle}
        tagline={heroTagline}
        // Defaults for CTA are used
      />

      {/* Fast-Track Your Online Presence Section */}
      <FastTrackSection />

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