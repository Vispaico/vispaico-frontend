import { Metadata } from 'next';
import AiOnboardingPage from '@/components/AiOnboardingPage';

export const metadata: Metadata = {
  title: 'Team AI Onboarding Workshop — Vispaico',
  description: 'A focused 2-day workshop that gets your entire team using AI tools effectively. Tailored to your industry, your tools, your workflows. Practical skills, not theory.',
};

export default function Page() {
  return <AiOnboardingPage />;
}
