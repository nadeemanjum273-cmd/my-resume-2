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
    <div className="min-h-screen bg-[#080B11] text-slate-100 font-sans selection:bg-[#22d3ee] selection:text-black relative overflow-x-hidden cyber-grid">
      {/* 1. Dynamic Three.js Cosmic Moving Stars Background Canvas ("not remove back ground moving effect") */}
      <JugnuBackground />

      {/* 2. Toast Notification Alert */}
      <Toast message={toastMsg} onClose={() => setToastMsg(null)} />

      {/* 3. 60-Sec Demo Video Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      {/* 4. Streamlined Fixed Header matching Screenshot 1 */}
      <Navbar onTriggerToast={triggerToast} />

      {/* 5. Main Content Wrapper */}
      <main className="w-full pt-20 bg-transparent">
        <div className="flex flex-col w-full relative">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-24 sm:gap-28">
            {/* 1. Hero & Profile Showcase (Screenshot 1: 0048jpg profile) */}
            <Hero
              onTriggerToast={triggerToast}
              onOpenVideoModal={() => setVideoModalOpen(true)}
            />

            {/* 2. Interactive AI Agent & RAG Demo Console (Screenshot 4: My Resume Assistant) */}
            <PocSimulator onTriggerToast={triggerToast} />

            {/* 3. Curated Production Deployments (Screenshot 5: 3-column bento) */}
            <Projects />

            {/* 4. Technical Arsenal (16 Bento Cards) */}
            <Skills />

            {/* 5. Interactive ROI Savings Calculator (Screenshot 2: Estimate Your Monthly Savings) */}
            <Calculator />

            {/* 6. Experience & Qualifications Roadmap (Resume & CV) */}
            <Resume />

            {/* 7. Request a 60-Sec Demo Walkthrough (Screenshot 3: Discovery Form) */}
            <Contact onTriggerToast={triggerToast} />
          </div>
        </div>
      </main>

      {/* 6. Clean Minimalist 4-Column Enterprise Footer (Zero DataCrumb mentions) */}
      <footer className="w-full bg-[#05070B] border-t border-white/10 relative z-20 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Col 1: Bio & Badges */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="font-display text-lg tracking-tight text-white font-bold">
                  Nadeem Anjum
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 font-mono text-[10px] uppercase text-emerald-400 border border-emerald-500/30">
                  Verified AI
                </span>
              </div>
              <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-sans">
                Applied AI, Agentic Workflows &amp; Autonomous LLM Architecture engineered for enterprise efficiency and measurable ROI.
              </p>
            </div>

            {/* Col 2: Quick Links */}
            <div className="flex flex-col gap-3">
              <span className="font-display text-sm text-white font-bold">
                Quick Links
              </span>
              <ul className="flex flex-col gap-2 font-mono text-xs text-slate-400">
                <li>
                  <a className="hover:text-white transition-colors" href="#hero">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#interactive-agent">
                    Resume Assistant
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#deployments">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#tech-arsenal">
                    Technical Arsenal
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#roi-calculator">
                    ROI Calculator
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#experience">
                    Resume &amp; CV
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition-colors" href="#demo-form">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: AI Specializations */}
            <div className="flex flex-col gap-3">
              <span className="font-display text-sm text-white font-bold">
                AI Specializations
              </span>
              <ul className="flex flex-col gap-2 font-mono text-xs text-slate-400">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"></span>
                  <span>Agentic RAG &amp; Vector Embeddings</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>n8n Complex Pipeline Architecture</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c084fc]"></span>
                  <span>Multi-Agent Swarm Orchestration</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34d399]"></span>
                  <span>Predictive Deep Science ML Kernels</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]"></span>
                  <span>LangChain &amp; CrewAI Deployments</span>
                </li>
              </ul>
            </div>

            {/* Col 4: Direct Contact */}
            <div className="flex flex-col gap-3">
              <span className="font-display text-sm text-white font-bold">
                Direct Contact
              </span>
              <div className="flex flex-col gap-2 font-mono text-xs text-slate-400">
                <div className="flex items-start gap-1.5">
                  <span className="material-symbols-outlined text-[#22d3ee] text-[16px] mt-0.5">
                    location_on
                  </span>
                  <span>66000 Multan, PK / Remote Global Node</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#38bdf8] text-[16px]">mail</span>
                  <a
                    className="hover:text-white transition-colors"
                    href="mailto:nadeemanjum273@gmail.com"
                  >
                    nadeemanjum273@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-emerald-400 text-[16px]">chat</span>
                  <a
                    className="hover:text-white transition-colors"
                    href="https://wa.me/923077970277"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +92 307 7970277
                  </a>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="material-symbols-outlined text-emerald-400 text-[16px]">verified</span>
                  <span className="text-[10px] uppercase text-emerald-400 font-bold">
                    Immediate Availability
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Back to Top */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
            <p className="font-mono text-xs text-slate-500">
              &copy; {new Date().getFullYear()} Nadeem Anjum &bull; AI Solutions Architect &amp; Automation Specialist. All rights reserved.
            </p>
            <button
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-mono text-xs transition-all border border-white/10"
              onClick={scrollToTop}
            >
              <span className="uppercase text-[10px]">Back to Top</span>
              <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
