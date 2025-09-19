import React from 'react';
import { Metadata } from 'next';
import AboutPageClient from '@/components/AboutPageClient';

export const metadata: Metadata = {
    title: 'About Vispaico | Anti-Agency Web Development Team | Fast Results, No BS',
    description: 'Meet the team building websites without the agency nonsense. Fast delivery, straight talk, real results for 500+ businesses.',
};

export default function AboutPage() {
    return <AboutPageClient />;
}
