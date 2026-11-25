import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Toast } from "./components/Toast";
import { Hero } from "./components/Hero";
import { PocSimulator } from "./components/PocSimulator";
import { Projects, ProjectDemoId } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Calculator } from "./components/Calculator";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { VideoModal } from "./components/VideoModal";
import { JugnuBackground } from "./components/JugnuBackground";
import { ScrollReveal } from "./components/ScrollReveal";
import CampusAiDemo from "./components/CampusAiDemo";
import FarmSecurityDemo from "./components/FarmSecurityDemo";

const DEMO_ROUTE_ALIASES: Record<string, ProjectDemoId> = {
  "/demo/campus-ai": "campus-ai",
  "/campus-ai": "campus-ai",
  "/demo/farm-security": "farm-security",
  "/farm-security": "farm-security",
};

function getDemoFromPath(pathname: string): ProjectDemoId | null {
  const normalized = pathname.replace(/\/+$/, "").toLowerCase() || "/";
  return DEMO_ROUTE_ALIASES[normalized] ?? null;
}

export default function App() {
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState<ProjectDemoId | null>(() =>
    getDemoFromPath(window.location.pathname)
  );

  useEffect(() => {
    const handlePopState = () => {
      setActiveDemo(getDemoFromPath(window.location.pathname));
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateTo = (path: string) => {
    const cleanPath = path.split("#")[0] || "/";
    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
    }
    setActiveDemo(getDemoFromPath(cleanPath));
    window.scrollTo(0, 0);
  };

  const closeDemoAndScrollTo = (sectionId: string) => {
    window.history.pushState({}, "", `/#${sectionId}`);
    setActiveDemo(null);
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 60);
  };

  if (activeDemo === "campus-ai") {
    return (
      <CampusAiDemo
        onBack={() => closeDemoAndScrollTo("deployments")}
        onBookDemo={() => closeDemoAndScrollTo("demo-form")}
      />
    );
  }

  if (activeDemo === "farm-security") {
    return (
      <FarmSecurityDemo
        onBack={() => closeDemoAndScrollTo("deployments")}
        onBookDemo={() => closeDemoAndScrollTo("demo-form")}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#080B11] text-slate-100 font-sans selection:bg-[#22d3ee] selection:text-black relative overflow-x-hidden">
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
            <ScrollReveal yOffset={30}>
              <Hero
                onTriggerToast={triggerToast}
                onOpenVideoModal={() => setVideoModalOpen(true)}
              />
            </ScrollReveal>

            {/* 2. Interactive AI Agent & RAG Demo Console (Screenshot 4: My Portfolio Assistant) */}
            <ScrollReveal yOffset={45}>
              <PocSimulator onTriggerToast={triggerToast} />
            </ScrollReveal>

            {/* 3. Curated Production Deployments (Screenshot 5: 3-column bento) */}
            <ScrollReveal yOffset={45}>
              <Projects navigateTo={navigateTo} />
            </ScrollReveal>

            {/* 4. Technical Arsenal (2-Row Moving Platforms Marquee) */}
            <ScrollReveal yOffset={45}>
              <Skills />
            </ScrollReveal>

            {/* 5. Interactive ROI Savings Calculator (Screenshot 2: Estimate Your Monthly Savings) */}
            <ScrollReveal yOffset={45}>
              <Calculator />
            </ScrollReveal>

            {/* 6. Experience & Qualifications Roadmap (Portfolio & CV) */}
            <ScrollReveal yOffset={45}>
              <Resume />
            </ScrollReveal>

            {/* 7. Request a 60-Sec Demo Walkthrough (Screenshot 3: Discovery Form) */}
            <ScrollReveal yOffset={45}>
              <Contact onTriggerToast={triggerToast} />
            </ScrollReveal>
          </div>
        </div>
      </main>

      {/* 6. Clean Minimalist Enterprise Footer */}
      <footer className="w-full bg-[#05070B] border-t border-white/10 relative z-20 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
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
