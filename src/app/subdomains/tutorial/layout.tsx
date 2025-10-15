import Footer from '@/components/Footer';
import Header from '@/components/Header';

type TutorialLayoutProps = {
  children: React.ReactNode;
};

export default function TutorialLayout({ children }: TutorialLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-900 flex flex-col">
      <Header />
      <main className="flex-1 bg-slate-100">
        <div className="relative isolate overflow-hidden py-12 sm:py-16">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-slate-950 via-slate-900 to-transparent"
          />
          <div className="relative z-10 container mx-auto px-4 sm:px-6">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
