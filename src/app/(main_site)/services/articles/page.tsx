'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function ArticlesServicePage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <div className="relative h-96 rounded-lg overflow-hidden mb-12 animate-fade-in">
          <Image
            src="/images/portfolio/serenity-flow/cover.jpg"
            alt="Articles Service Placeholder"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-center animate-slide-up">Content & Articles</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-delay-1">
            <h2 className="text-3xl font-semibold mb-4">Engaging Content that Converts</h2>
            <p className="text-lg text-gray-300 mb-8">
              This is a placeholder for the Articles and Content service page. We&apos;ll describe our content strategy, creation, and distribution services. From blog posts to whitepapers, we create content that resonates with your audience and drives results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in-delay-2">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">SEO-Optimized Articles</h3>
              <p className="text-gray-400">Drive organic traffic with high-quality, keyword-rich content.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Content Strategy</h3>
              <p className="text-gray-400">A roadmap for content that aligns with your business goals.</p>
            </div>
          </div>

          <div className="text-center animate-fade-in-delay-3">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
              Start Your Content Journey
            </Link>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out 0.2s forwards;
        }
        .animate-fade-in-delay-1 {
          opacity: 0;
          animation: fade-in 0.5s ease-out 0.4s forwards;
        }
        .animate-fade-in-delay-2 {
          opacity: 0;
          animation: fade-in 0.5s ease-out 0.6s forwards;
        }
        .animate-fade-in-delay-3 {
          opacity: 0;
          animation: fade-in 0.5s ease-out 0.8s forwards;
        }
      `}</style>
    </div>
  );
}
