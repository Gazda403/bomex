import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { content } from './data/content';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SynergySection } from './components/SynergySection';
import { StatementAccordion } from './components/StatementAccordion';
import { ServicesGrid } from './components/ServicesGrid';
import { CadViewerSection } from './components/CadViewerSection';
import { MaterialMatrix } from './components/MaterialMatrix';
import { WorkflowTimeline } from './components/WorkflowTimeline';
import { ProjectsPortfolio } from './components/ProjectsPortfolio';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { TenderModal } from './components/TenderModal';
import { Preloader } from './components/Preloader';
import { FileText, Phone } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('sr');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isTenderOpen, setIsTenderOpen] = useState(false);

  const t = content[lang];

  // Initialize Butter-smooth Lenis Momentum Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f7f5] text-[#111416] flex flex-col font-sans selection:bg-[#c5a059] selection:text-black">
      {/* Editorial Tech Preloader */}
      <Preloader />

      {/* Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
        onOpenTender={() => setIsTenderOpen(true)}
      />

      {/* Main Content Sections with alternating reversed rhythm */}
      <main className="flex-1">
        {/* 1. Hero Section (Now LIGHT alabaster / paper-white with dark typography) */}
        <Hero
          t={t}
          onOpenTender={() => setIsTenderOpen(true)}
        />

        {/* 2. Synergy Diagram (Now LIGHT with crisp cards and Venn graphics) */}
        <SynergySection t={t} />

        {/* 3. Interactive Statement Accordion (Now DARK obsidian with glowing text & active imagery) */}
        <StatementAccordion t={t} />

        {/* 4. Four Operations Divisions Grid (Now LIGHT bento cards) */}
        <ServicesGrid
          t={t}
          onOpenTender={() => setIsTenderOpen(true)}
        />

        {/* 5. Interactive CAD Blueprint & Shop Drawing Viewer (Now LIGHT engineering bay) */}
        <CadViewerSection t={t} />

        {/* 6. Comprehensive Materials & Hardware Matrix (Now LIGHT showroom) */}
        <MaterialMatrix
          t={t}
          onOpenTender={() => setIsTenderOpen(true)}
        />

        {/* 7. B2B Work Process & Project Lifecycle (Now DARK industrial roadmap) */}
        <WorkflowTimeline t={t} />

        {/* 8. Editorial Projects Portfolio (Now DARK obsidian showcase with huge white PROJECTS ²⁶) */}
        <ProjectsPortfolio
          t={t}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* 9. Client Reviews Showcase with auto-rotating testimonials & marquee */}
        <ReviewsSection onOpenTender={() => setIsTenderOpen(true)} />
      </main>

      {/* 10. Giant Typography Footer (Now LIGHT with black LET'S TALK & rotating stamp) */}
      <Footer
        t={t}
        onOpenTender={() => setIsTenderOpen(true)}
      />

      {/* Mobile Floating Quick Action Bar */}
      <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden flex items-center gap-2 p-2 rounded-2xl bg-[#14181a]/95 backdrop-blur-lg border border-white/15 shadow-2xl">
        <a
          href="tel:+38121542800"
          className="flex-1 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-semibold flex items-center justify-center gap-2"
        >
          <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
          <span>Poziv</span>
        </a>
        <button
          onClick={() => setIsTenderOpen(true)}
          className="flex-1 py-3 px-4 rounded-xl bg-[#c5a059] text-black font-semibold text-xs flex items-center justify-center gap-2 shadow-lg"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Pošalji Predmer</span>
        </button>
      </div>

      {/* Modals */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenTender={() => setIsTenderOpen(true)}
        />
      )}

      {isTenderOpen && (
        <TenderModal
          isOpen={isTenderOpen}
          onClose={() => setIsTenderOpen(false)}
        />
      )}
    </div>
  );
}
