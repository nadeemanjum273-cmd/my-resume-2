import React from "react";
import { ArrowRight, Download, Github, MessageSquareText, FolderKanban } from "lucide-react";
import { HERO_STATS, SITE_LINKS } from "../data/portfolioConfig";

interface HeroProps {
  onTriggerToast?: (msg: string) => void;
  onOpenVideoModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onTriggerToast, onOpenVideoModal }) => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4" id="hero">
      {/* Left Column (7 Cols): Exact wording and layout from Screenshot 1 */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        {/* Main Display Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-display font-extrabold text-white tracking-tight leading-[1.12]">
          Transforming Business <br />
          Workflows into <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] via-[#38bdf8] to-[#a855f7]">
            Intelligent AI Systems.
          </span>
        </h1>

        {/* Subtitle with exact bold highlights */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-sans">
          I build custom <strong className="text-white font-bold">24/7 Lead Chatbots</strong>,{" "}
          <strong className="text-white font-bold">Autonomous Agents</strong>, and{" "}
          <strong className="text-white font-bold">n8n Workflow Automations</strong> backed by deep Data Science &amp; Python ML foundations.
        </p>

        {/* Primary & Secondary CTA Buttons */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 pt-1">
          <a
            href="#demo-form"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-[#22d3ee] to-[#a855f7] text-[#080B11] font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_24px_rgba(34,211,238,0.35)] hover:shadow-[0_0_32px_rgba(168,85,247,0.5)] hover:scale-[1.02] active:scale-100"
          >
            <span>Start an AI Automation Project</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>

          {SITE_LINKS.hasCvPdf ? (
            <a
              href={SITE_LINKS.cvPdfPath}
              download={SITE_LINKS.cvDownloadFilename}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-[#0B0F17] hover:bg-white/10 text-white font-mono font-medium text-xs uppercase tracking-wider transition-all border border-white/20 hover:border-[#22d3ee]/50 shadow-sm"
            >
              <Download className="w-4 h-4 text-[#22d3ee] shrink-0" />
              <span>Download CV</span>
            </a>
          ) : (
            <button
              type="button"
              onClick={() => {
                if (onTriggerToast) {
                  onTriggerToast("Opening printable CV view (Save as PDF).");
                }
                window.print();
              }}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-[#0B0F17] hover:bg-white/10 text-white font-mono font-medium text-xs uppercase tracking-wider transition-all border border-white/20 hover:border-[#22d3ee]/50 shadow-sm"
            >
              <Download className="w-4 h-4 text-[#22d3ee] shrink-0" />
              <span>Print / Save CV</span>
            </button>
          )}

          <a
            href={SITE_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0B0F17] hover:bg-white/10 text-slate-200 hover:text-white font-mono font-medium text-xs uppercase tracking-wider transition-all border border-white/15 hover:border-white/35 shadow-sm"
          >
            <Github className="w-4 h-4 text-slate-300 shrink-0" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Demoted Tertiary Navigation Links */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-slate-400">
          <a
            href="#interactive-agent"
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#22d3ee] transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-[#22d3ee]"
          >
            <MessageSquareText className="w-3.5 h-3.5 text-[#22d3ee]" />
            <span>Launch Portfolio Chatbot</span>
          </a>
          <span className="text-slate-600" aria-hidden="true">
            &bull;
          </span>
          <a
            href="#deployments"
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#22d3ee] transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-[#22d3ee]"
          >
            <FolderKanban className="w-3.5 h-3.5 text-[#a855f7]" />
            <span>Explore Projects</span>
          </a>
        </div>

        {/* 3 Confirmed Metric KPI Cards from portfolioConfig */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="shining-card p-3.5 flex flex-col gap-1">
              <span className={`text-2xl sm:text-3xl font-display font-extrabold leading-none relative z-10 ${stat.accentClass}`}>
                {stat.value}
              </span>
              <span className="text-[11px] font-mono text-slate-400 relative z-10">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column (5 Cols) Profile Bento Card: Exact Match to Screenshot with Shining Edges */}
      <div className="lg:col-span-5 flex flex-col">
        <div className="shining-card p-6 flex flex-col items-center gap-4 text-center">
          {/* Portrait Photo Container with Vibrant Blue Border Frame */}
          <div className="w-full max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#38bdf8] shadow-[0_0_35px_rgba(56,189,248,0.35)] bg-gradient-to-b from-[#38bdf8] to-[#0284c7] relative group">
            <img
              src="/IMG_0048.JPG"
              alt="Nadeem Anjum"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/profile.jpg";
              }}
            />
          </div>

          {/* Identity Titles */}
          <div className="flex flex-col gap-1 pt-1">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
              Nadeem Anjum
            </h2>
            <p className="font-mono text-xs sm:text-[13px] text-[#22d3ee] font-semibold tracking-wide uppercase">
              AI Solutions Architect &amp; Automation Specialist
            </p>
          </div>

          {/* Watch 60-Sec Intro / Video Demo Button */}
          <button
            onClick={onOpenVideoModal}
            className="w-full max-w-[320px] py-2.5 rounded-xl bg-[#080B11] hover:bg-[#22d3ee]/10 text-[#22d3ee] border border-[#22d3ee]/40 font-mono text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
          >
            <span>▶</span>
            <span>Watch 60-Sec Intro / Video Demo</span>
          </button>
        </div>
      </div>
    </section>
  );
};
