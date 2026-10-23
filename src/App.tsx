import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Toast } from "./components/Toast";
import { Hero } from "./components/Hero";
import { PocSimulator } from "./components/PocSimulator";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { DataCrumbBanner } from "./components/DataCrumbBanner";
import { Calculator } from "./components/Calculator";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { MapSection } from "./components/MapSection";
import { VideoModal } from "./components/VideoModal";
import { JugnuBackground } from "./components/JugnuBackground";
import { FloatingContactDock } from "./components/FloatingContactDock";
import { ArrowUp, Sparkles, Award } from "lucide-react";

export default function App() {
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0B0F12] text-slate-100 font-sans selection:bg-emerald-500 selection:text-black relative cyber-grid">
      {/* Dynamic Cosmic Starry Sky with Moving Stars & Bioluminescent Particles */}
      <JugnuBackground />

      {/* Toast Notification Alert */}
      <Toast message={toastMsg} onClose={() => setToastMsg(null)} />

      {/* 60-Sec Demo Video Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      {/* 1. FLOATING ROUNDED PILL NAVIGATION BAR */}
      <Navbar onTriggerToast={triggerToast} />

      {/* MAIN PORTFOLIO SECTIONS (ALTERNATING HIGH-CONTRAST RHYTHM) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-24 sm:space-y-32">
        {/* 2. HERO SECTION: Deep obsidian black with emerald-green accent glows */}
        <Hero
          onTriggerToast={triggerToast}
          onOpenVideoModal={() => setVideoModalOpen(true)}
        />

        {/* 3. TECH STACK STRIP: Crisp pure white / off-white background with elevated minimalist cards */}
        <Skills />

        {/* 4. INTERACTIVE RAG RESUME ASSISTANT: Deep dark theme with glowing glassmorphism cards */}
        <PocSimulator onTriggerToast={triggerToast} />

        {/* 5. HIGH-IMPACT FEATURE BANNER: Vivid emerald/teal container (DataCrumbs Style) */}
        <DataCrumbBanner />

        {/* 6. CURATED PRODUCTION DEPLOYMENTS: Charcoal dark canvas with badge-style pill cards */}
        <Projects />

        {/* 7. INTERACTIVE ROI SAVINGS CALCULATOR: Sleek slider input component */}
        <Calculator />

        {/* 8. CV & CREDENTIALS TIMELINE: Prominently highlights DataCrumb Specialization & Neon Milestones */}
        <Resume />

        {/* 9. CONTACT & LEAD DISCOVERY: Real-time Google Sheets sync + WhatsApp Direct */}
        <Contact onTriggerToast={triggerToast} />

        {/* 10. INTEGRATED LOCATION MAP: 66000 Multan, Punjab, Pakistan */}
        <MapSection />
      </main>

      {/* Fixed Persistent Quick Connect Floating Dock */}
      <FloatingContactDock variant="fixed" onTriggerToast={triggerToast} />

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/90 backdrop-blur-xl py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>&copy; {new Date().getFullYear()} Nadeem Anjum &bull; Senior Frontend Engineer &amp; UI/UX Specialist</span>
            <span>&bull;</span>
            <a 
              href="https://www.datacrumbs.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline flex items-center gap-1 font-bold"
            >
              <Award className="w-3 h-3 text-emerald-400" />
              DataCrumb Alum
            </a>
            <span>&bull;</span>
            <span>66000 Multan, Punjab, Pakistan</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 px-3.5 rounded-full bg-white/5 border border-white/10 hover:border-emerald-400 text-slate-300 hover:text-emerald-300 transition-colors flex items-center gap-1.5 font-bold"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
