import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Website Services | Express to E-commerce | $199-$3999 | Choose Your Speed",
  description: "Choose your website service: Express (24h, $199), Business (3 days, $899), Store (10 days, $3999). No meetings, no BS.",
};

export default function WebDesignLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}