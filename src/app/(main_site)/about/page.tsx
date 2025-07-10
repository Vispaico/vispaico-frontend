import React from 'react';
import { Metadata } from 'next';
import AboutPageClient from '@/components/AboutPageClient';

export const metadata: Metadata = {
    title: 'About Vispaico | AI, Design & Development Agency',
    description: 'Learn about Vispaico\'s mission, values, and the innovative team blending AI, creativity, and technology to build impactful digital solutions.',
};

export default function AboutPage() {
    return <AboutPageClient />;
}
