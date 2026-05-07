import { Metadata } from 'next';
import SocialMediaAutomationPage from '@/components/SocialMediaAutomationPage';

export const metadata: Metadata = {
  title: 'Social Media Automation & Content — Vispaico',
  description: 'Full content creation, repurposing, and publishing across every platform. We write the articles, make the posts, and run your entire social presence — you just approve.',
};

export default function Page() {
  return <SocialMediaAutomationPage />;
}
