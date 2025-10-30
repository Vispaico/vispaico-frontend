import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Vispaico FAQ | Fast Website Development | No Agency BS",
  description: "Common questions about our fast website service. No jargon answers about pricing, timelines, support, and why we are different from agencies.",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}