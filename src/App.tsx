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
    <div className="min-h-screen bg-background font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary relative overflow-x-hidden">
      {/* 1. Dynamic Three.js Cosmic Moving Stars Background Canvas */}
      <JugnuBackground />

      {/* 2. Toast Notification Alert */}
      <Toast message={toastMsg} onClose={() => setToastMsg(null)} />

      {/* 3. 60-Sec Demo Video Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      {/* 4. Fixed Header with Live Status pill & Capsule Nav */}
      <Navbar onTriggerToast={triggerToast} />

      {/* 5. Main Content Wrapper */}
      <main className="w-full pt-20 bg-background/50">
        <div className="flex flex-col w-full relative">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl flex flex-col gap-space-3xl">
            {/* Section 1: Hero & Profile Showcase */}
            <Hero
              onTriggerToast={triggerToast}
              onOpenVideoModal={() => setVideoModalOpen(true)}
            />

            {/* Section 2: Technologies & Systems Mastered (4x4 Bento Grid) */}
            <Skills />

            {/* Section 3: Interactive AI Agent & RAG Demo Console */}
            <PocSimulator onTriggerToast={triggerToast} />

            {/* Section 4: High-Impact Feature Banner (DataCrumb Engineering) */}
            <DataCrumbBanner />

            {/* Section 5: Curated Production Deployments (Case Studies Bento) */}
            <Projects />

            {/* Section 6: Interactive ROI Savings Calculator */}
            <Calculator />

            {/* Section 7: Experience & Qualifications Roadmap */}
            <Resume />

            {/* Section 8: Integrated Base Map */}
            <MapSection />

            {/* Section 9: Request a 60-Sec Demo & Contact Booking Form */}
            <Contact onTriggerToast={triggerToast} />
          </div>
        </div>
      </main>

      {/* 6. Comprehensive 4-Column Enterprise Footer */}
      <footer className="w-full bg-surface-container-lowest mt-space-3xl border-t border-surface-container-highest/40 relative z-20">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl mb-space-2xl">
            {/* Col 1: Bio & Badges */}
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center gap-space-sm">
                <span className="font-headline-md text-headline-md tracking-tight text-on-surface font-bold">
                  Nadeem Anjum
                </span>
                <span className="px-space-sm py-0.5 rounded-full bg-surface-container font-code-terminal text-label-caps uppercase text-primary border border-primary/20">
                  Verified AI
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm leading-relaxed">
                Applied AI, Agentic Workflows &amp; Autonomous LLM Architecture engineered for hyper-scale automation and verified ROI.
              </p>
              <div className="flex flex-wrap gap-space-xs">
                <span className="px-space-sm py-space-xs rounded-full bg-surface-container-low font-code-terminal text-label-caps text-on-surface-variant uppercase border border-outline-variant/30">
                  ISO/IEC 42001 Audited
                </span>
                <a
                  href="https://www.datacrumbs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-space-sm py-space-xs rounded-full bg-surface-container-low font-code-terminal text-label-caps text-primary uppercase border border-primary/30 hover:underline flex items-center gap-1"
                >
                  <span>DataCrumb Certified</span>
                  <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="flex flex-col gap-space-md">
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Quick Links
              </span>
              <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
                <li className="flex items-center">
                  <a className="hover:text-on-surface transition-colors" href="#home">
                    Architecture Matrix
                  </a>
                </li>
                <li className="flex items-center">
                  <a className="hover:text-on-surface transition-colors" href="#interactive-agent">
                    Interactive AI Agent
                  </a>
                </li>
                <li className="flex items-center">
                  <a className="hover:text-on-surface transition-colors" href="#deployments">
                    Production Case Studies
                  </a>
                </li>
                <li className="flex items-center">
                  <a className="hover:text-on-surface transition-colors" href="#roi-calculator">
                    ROI &amp; Efficiency Calculator
                  </a>
                </li>
                <li className="flex items-center">
                  <a className="hover:text-on-surface transition-colors" href="#experience">
                    Career &amp; Engineering Track
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: AI Specializations */}
            <div className="flex flex-col gap-space-md">
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                AI Specializations
              </span>
              <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
                <li className="flex items-center gap-space-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span>Agentic RAG &amp; Vector Embeddings</span>
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  <span>n8n Complex Pipeline Architecture</span>
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                  <span>Multi-Agent Swarm Orchestration</span>
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                  <span>Predictive Deep Science ML Kernels</span>
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
                  <span>LangChain &amp; CrewAI Deployments</span>
                </li>
              </ul>
            </div>

            {/* Col 4: Direct Contact */}
            <div className="flex flex-col gap-space-md">
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Direct Contact
              </span>
              <div className="flex flex-col gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                    location_on
                  </span>
                  <span>66000 Multan, PK / Remote Global Node</span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[18px]">mail</span>
                  <a
                    className="hover:text-on-surface font-code-terminal text-code-terminal transition-colors"
                    href="mailto:nadeemanjum273@gmail.com"
                  >
                    nadeemanjum273@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px]">chat</span>
                  <a
                    className="hover:text-on-surface font-code-terminal text-code-terminal transition-colors"
                    href="https://wa.me/923077970277"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +92 307 7970277
                  </a>
                </div>
                <div className="flex items-center gap-space-xs mt-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                  <span className="font-label-caps text-label-caps uppercase text-primary">
                    Verified Availability: Immediate Contract
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Back to Top */}
          <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md border-t border-surface-container-highest/30">
            <p className="font-code-terminal text-code-terminal text-on-surface-variant">
              &copy; 2025 Nadeem Anjum &bull; Specialization at{" "}
              <a
                href="https://www.datacrumbs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-bold"
              >
                DataCrumb
              </a>
              . Powered by DataCrumbs Autonomous Systems.
            </p>
            <button
              className="flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-code-terminal text-code-terminal transition-all border border-outline-variant/30"
              onClick={scrollToTop}
            >
              <span className="font-label-caps text-label-caps uppercase">Back to Top</span>
              <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
