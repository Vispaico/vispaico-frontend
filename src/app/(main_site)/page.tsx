// src/app/(main_site)/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Vispaico | Ship It. - Fast Websites. 24 Hours. No Agency BS",
  description: "Vispaico builds websites from $199 in 24 hours. No meetings, no jargon, no surprise costs. Express websites, business sites, online stores.",
};

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/HeroSection';

const ProfileCardShell = () => (
  <div className="w-full max-w-md">
    <div
      className="aspect-[0.718] w-full max-h-[540px] rounded-[30px] border border-white/10 bg-slate-900/60 animate-pulse"
      aria-hidden="true"
    />
  </div>
);

const ProfileCard = dynamic(() => import('@/components/ProfileCard'), {
  loading: () => <ProfileCardShell />
});

const FastTrackSection = dynamic(() => import('@/components/FastTrackSection'), {
  loading: () => <SectionPlaceholder className="h-[600px]" />
});

const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), {
  loading: () => <SectionPlaceholder className="h-[520px]" />
});

const HomeServicesSnapshot = dynamic(() => import('@/components/HomeServicesSnapshot'), {
  loading: () => <SectionPlaceholder className="h-[560px]" />
});

const HomeFeaturedWork = dynamic(() => import('@/components/HomeFeaturedWork'), {
  loading: () => <SectionPlaceholder className="h-[560px]" />
});

const HomeComparisonSection = dynamic(() => import('@/components/HomeComparisonSection'), {
  loading: () => <SectionPlaceholder className="h-[600px]" />
});

const HomeProcessHighlight = dynamic(() => import('@/components/HomeProcessHighlight'), {
  loading: () => <SectionPlaceholder className="h-[480px]" />
});

const HomeContactCTA = dynamic(() => import('@/components/HomeContactCTA'), {
  loading: () => <SectionPlaceholder className="h-[420px]" />
});

const SectionPlaceholder = ({ className = '' }: { className?: string }) => (
  <div className={`w-full rounded-3xl border border-white/10 bg-slate-900/40 ${className} animate-pulse`} aria-hidden="true" />
);

export default function Home() {
  const heroTitle = ["Vispaico | Ship It", "Your Website in 24 Hours"];
  const heroTagline = "Starting at $199 in 24 hours, no jargon, no buzzwords, no insulting quotes. We build the tech. You build the business.";

  return (
    <> {/* Root Fragment */}

      {/* Hero Section Component */}
      <HeroSection
        titleLines={heroTitle}
        tagline={heroTagline}
                // Defaults for CTA are used
      />
      
      {/* Other Home Page Sections */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/90 to-purple-950" aria-hidden="true"></div>
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
          <div className="relative h-0.5 w-full max-w-5xl overflow-hidden bg-gradient-to-r from-slate-900/0 via-blue-500/60 to-slate-900/0">
            <div className="laser-flash"></div>
          </div>
          <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-start md:text-left">
            <div className="flex w-full max-w-md justify-center md:max-w-none md:basis-1/2">
              <ProfileCard avatarUrl="/images/BoandCon_mc1.webp" miniAvatarUrl="/images/BoandCon_mc.webp" />
            </div>
            <div className="space-y-6 max-w-3xl md:basis-1/2">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
                We Build Websites in 24 Hours (Because Waiting Weeks Is Bullshit)
              </h2>
              <p className="text-lg md:text-xl text-blue-100">
                Hi, I&apos;m Niels. I&apos;ve been coding for 20+ years across 5 countries. Started Vispaico because I was done with slow agencies and WordPress bloat. We ship modern sites faster than anyone—guaranteed.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
            <Link
              href="/services/web-design"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Start Your Project
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Read My Story
            </Link>
          </div>
        </div>
      </section>
      <FastTrackSection />
      <HomeProcessHighlight />
      <TestimonialsSection />
      <HomeServicesSnapshot />
      <HomeFeaturedWork />
      <HomeComparisonSection />
      <HomeContactCTA />

    </> // End Root Fragment
  ); // End Component Return
} // End Home Component Function