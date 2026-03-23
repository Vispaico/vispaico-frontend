import Footer from '@/components/Footer';
import Header from '@/components/Header';

type AiHubLayoutProps = {
  children: React.ReactNode;
};

export default function AiHubLayout({ children }: AiHubLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
