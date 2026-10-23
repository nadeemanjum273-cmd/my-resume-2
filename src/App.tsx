import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Toast } from "./components/Toast";
import { Hero } from "./components/Hero";
import { PocSimulator } from "./components/PocSimulator";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Calculator } from "./components/Calculator";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
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

      {/* 4. Streamlined Fixed Header */}
      <Navbar onTriggerToast={triggerToast} />

      {/* 5. Main Content Wrapper */}
      <main className="w-full pt-20 bg-background/50">
        <div className="flex flex-col w-full relative">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-space-lg flex flex-col gap-space-2xl">
            {/* Section 1: Hero & Profile Showcase (0048jpg profile) */}
            <Hero
              onTriggerToast={triggerToast}
              onOpenVideoModal={() => setVideoModalOpen(true)}
            />

            {/* Section 2: Technologies & Systems Mastered (16 Bento Cards) */}
            <Skills />

            {/* Section 3: Interactive AI Agent & RAG Demo Console */}
            <PocSimulator onTriggerToast={triggerToast} />

            {/* Section 4: Curated Production Deployments (Case Studies Bento) */}
            <Projects />

            {/* Section 5: Interactive ROI Savings Calculator */}
            <Calculator />

            {/* Section 6: Experience & Qualifications Roadmap */}
            <Resume />

            {/* Section 7: Request a 60-Sec Demo & Contact Booking Form (with compact map widget) */}
            <Contact onTriggerToast={triggerToast} />
          </div>
        </div>
      </main>

      {/* 6. Clean Minimalist 4-Column Enterprise Footer (Zero DataCrumb mentions) */}
      <footer className="w-full bg-surface-container-lowest mt-space-2xl border-t border-surface-container-highest/40 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg mb-space-xl">
            {/* Col 1: Bio & Badges */}
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-sm">
                <span className="font-headline-md text-lg tracking-tight text-on-surface font-bold">
                  Nadeem Anjum
                </span>
                <span className="px-2 py-0.5 rounded-full bg-surface-container font-code-terminal text-[10px] uppercase text-primary border border-primary/20">
                  Verified AI
                </span>
              </div>
              <p className="font-body-sm text-xs text-on-surface-variant max-w-sm leading-relaxed">
                Applied AI, Agentic Workflows &amp; Autonomous LLM Architecture engineered for enterprise efficiency and measurable ROI.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low font-code-terminal text-[10px] text-on-surface-variant uppercase border border-outline-variant/30">
                  ISO/IEC 42001 Audited
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low font-code-terminal text-[10px] text-primary uppercase border border-primary/30">
                  Top Rated Architect
                </span>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="flex flex-col gap-space-sm">
              <span className="font-headline-sm text-sm text-on-surface font-bold">
                Quick Links
              </span>
              <ul className="flex flex-col gap-1.5 font-body-sm text-xs text-on-surface-variant">
                <li>
                  <a className="hover:text-on-surface transition-colors" href="#home">
                    Overview
                  </a>
                </li>
                <li>
                  <a className="hover:text-on-surface transition-colors" href="#interactive-agent">
                    Interactive AI Agent
                  </a>
                </li>
                <li>
                  <a className="hover:text-on-surface transition-colors" href="#deployments">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a className="hover:text-on-surface transition-colors" href="#roi-calculator">
                    ROI Calculator
                  </a>
                </li>
                <li>
                  <a className="hover:text-on-surface transition-colors" href="#experience">
                    Experience &amp; Track
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: AI Specializations */}
            <div className="flex flex-col gap-space-sm">
              <span className="font-headline-sm text-sm text-on-surface font-bold">
                AI Specializations
              </span>
              <ul className="flex flex-col gap-1.5 font-body-sm text-xs text-on-surface-variant">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span>Agentic RAG &amp; Vector Embeddings</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  <span>n8n Complex Pipeline Architecture</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                  <span>Multi-Agent Swarm Orchestration</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                  <span>Predictive Deep Science ML Kernels</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
                  <span>LangChain &amp; CrewAI Deployments</span>
                </li>
              </ul>
            </div>

            {/* Col 4: Direct Contact */}
            <div className="flex flex-col gap-space-sm">
              <span className="font-headline-sm text-sm text-on-surface font-bold">
                Direct Contact
              </span>
              <div className="flex flex-col gap-1.5 font-body-sm text-xs text-on-surface-variant">
                <div className="flex items-start gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[16px] mt-0.5">
                    location_on
                  </span>
                  <span>66000 Multan, PK / Remote Global Node</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-secondary text-[16px]">mail</span>
                  <a
                    className="hover:text-on-surface font-code-terminal text-xs transition-colors"
                    href="mailto:nadeemanjum273@gmail.com"
                  >
                    nadeemanjum273@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-[16px]">chat</span>
                  <a
                    className="hover:text-on-surface font-code-terminal text-xs transition-colors"
                    href="https://wa.me/923077970277"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +92 307 7970277
                  </a>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
                  <span className="font-label-caps text-[10px] uppercase text-primary">
                    Immediate Availability
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Back to Top */}
          <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md border-t border-surface-container-highest/30">
            <p className="font-code-terminal text-xs text-on-surface-variant">
              &copy; 2025 Nadeem Anjum &bull; AI Solutions &amp; Automation Architect. All rights reserved.
            </p>
            <button
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-code-terminal text-xs transition-all border border-outline-variant/30"
              onClick={scrollToTop}
            >
              <span className="font-label-caps text-[10px] uppercase">Back to Top</span>
              <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
