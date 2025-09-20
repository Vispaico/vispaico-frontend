// src/app/(main_site)/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Fast Websites | 24 Hours to 10 Days | No Agency BS | Vispaico",
  description: "Professional websites from $199 in 24 hours. No meetings, no jargon, no surprise costs. Express websites, business sites, online stores.",
};

import React from 'react'; // Ensure React is imported if using Fragments <>
import HeroSection from '@/components/HeroSection';
import FeaturedTestimonialHero from '@/components/FeaturedTestimonialHero';
import FastTrackSection from '@/components/FastTrackSection';
import HomeServicesSnapshot from '@/components/HomeServicesSnapshot';
import HomeFeaturedWork from '@/components/HomeFeaturedWork';
import HomeProcessHighlight from '@/components/HomeProcessHighlight';
import HomeContactCTA from '@/components/HomeContactCTA';
import SectionDivider from '@/components/SectionDivider';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  const heroTitle = ["Websites in 24 Hours", "No Meetings. No BS."];
  const heroTagline = "Starting at $199, no jargon, no buzzwords, no insulting quotes. We build the tech. You build the business.";

  return (
    <> {/* Root Fragment */}

      {/* Hero Section Component */}
      <HeroSection
        titleLines={heroTitle}
        tagline={heroTagline}
                // Defaults for CTA are used
      />
      
      {/* Other Home Page Sections */}
      <SectionDivider />
      <FeaturedTestimonialHero />
      <FastTrackSection />
      <TestimonialsSection />
      <HomeServicesSnapshot />
      <HomeFeaturedWork />
      <HomeProcessHighlight />
      <HomeContactCTA />

    </> // End Root Fragment
  ); // End Component Return
} // End Home Component Function