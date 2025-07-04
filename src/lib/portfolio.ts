// src/lib/portfolio.ts (Corrected)

// Import the 'Project' type from our single source of truth
import { Project } from '@/types/portfolio';

// This is our raw data.
const portfolioData: Project[] = [
  // (All 13 of your project objects are here)
  {
    "id": "rivercity-bike-rentals",
    "title": "RiverCity Bike Rentals",
    "client": "RiverCity HP",
    "coverImage": "/images/portfolio/rivercity-bike-rentals/cover.jpg",
    "summary": "A fresh, vibrant landing page designed to get customers rolling.",
    "story": [
      { "type": "fullBleedImage", "imageSrc": "/images/portfolio/rivercity-bike-rentals/scene1-full.jpg", "headline": "A Fresh Start for a City Icon" },
      { "type": "splitLayout", "imageSrc": "/images/portfolio/rivercity-bike-rentals/scene2-split.jpg", "text": "The goal was to create a user-friendly experience that reflected the fun of cycling." },
      { "type": "textOnly", "headline": "The Challenge", "text": "The old site was outdated and difficult to use on mobile." },
      { "type": "sideBySideImages", "imageLeft": "/images/portfolio/rivercity-bike-rentals/scene3-left.jpg", "textLeft": "The old, cluttered design.", "imageRight": "/images/portfolio/rivercity-bike-rentals/scene3-right.jpg", "textRight": "The new, streamlined mobile view." },
      { "type": "fullBleedVideo", "videoSrc": "/videos/portfolio/rivercity-final.mp4", "headline": "The Final Product in Action" }
    ]
  },
  {
    "id": "german-social-club",
    "title": "German Language Social Club",
    "client": "GSC Haiphong",
    "coverImage": "/images/portfolio/german-social-club/cover.jpg",
    "summary": "Building a community hub with event calendars and member sign-ups.",
    "story": [
      { "type": "fullBleedImage", "imageSrc": "/images/portfolio/german-social-club/scene1.jpg", "headline": "Connecting a Community" },
      { "type": "textOnly", "headline": "A Digital Stammtisch", "text": "The German Social Club needed a central online hub to post events, manage memberships, and welcome newcomers." },
      { "type": "splitLayout", "imageSrc": "/images/portfolio/german-social-club/scene2.jpg", "text": "An integrated, easy-to-update events calendar was a key feature." }
    ]
  },
  // ... and so on for all 13 projects ...
];

// --- These are our data-access functions ---

// Function to get all portfolio items
export function getAllProjects(): Project[] {
  return portfolioData;
}

// Function to get a single portfolio item by its ID (slug)
export function getProjectById(id: string): Project | undefined {
  // --- THE FIX: Add the '(project: Project)' type annotation here ---
  return portfolioData.find((project: Project) => project.id === id);
}