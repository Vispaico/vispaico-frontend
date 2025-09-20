import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AdsPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <h1 className="text-5xl font-bold">Articles</h1>
        <p className="text-xl mt-4 text-gray-300">Coming Soon</p>
      </main>
      <Footer />
    </>
  );
}
