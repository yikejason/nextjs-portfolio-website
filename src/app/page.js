import Image from 'next/image';
import HeadSection from './components/HeadSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeadSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}

