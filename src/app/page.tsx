// src/app/page.tsx (Ensuring all placeholder sections are included)

import React from 'react'; // Ensure React is imported if using Fragments <>
import HeroSection from '@/components/HeroSection';
// --- Imports for ALL placeholder sections ---
import HomeServicesSnapshot from '@/components/HomeServicesSnapshot';
import HomeFeaturedWork from '@/components/HomeFeaturedWork';
import HomeProcessHighlight from '@/components/HomeProcessHighlight';
import HomeTrustBlock from '@/components/HomeTrustBlock';
import HomeContactCTA from '@/components/HomeContactCTA';
// --------------------------------------------

export default function Home() {
  const heroTitle = ["Create with Impact.", "Innovate with AI."];
  const heroTagline = "Your AI Studio, Design, Development and Ad Agency";

  return (
    <> {/* Root Fragment */}

      {/* Hero Section Component */}
      <HeroSection
        titleLines={heroTitle}
        tagline={heroTagline}
        // Defaults for CTA are used
      />

      {/* --- Ensure ALL Section Components Are Listed Here --- */}
      <HomeServicesSnapshot />
      <HomeFeaturedWork />
      <HomeProcessHighlight />
      <HomeTrustBlock />
      <HomeContactCTA />
      {/* ---------------------------------------------------- */}

    </> // End Root Fragment
  ); // End Component Return
} // End Home Component Function