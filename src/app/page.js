import Image from 'next/image';
import HeadSection from './components/HeadSection';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto px-12 py-4">
        <HeadSection />
      </div>
    </main>
  );
}

