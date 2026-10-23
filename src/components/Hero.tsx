import React from "react";

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
          I build production-grade <strong className="text-white font-bold">24/7 Lead Chatbots</strong>,{" "}
          <strong className="text-white font-bold">Autonomous Agents</strong>, and{" "}
          <strong className="text-white font-bold">n8n Workflow Automations</strong> backed by deep Data Science &amp; Python ML foundations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-1">
          <a
            href="#interactive-agent"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#22d3ee] to-[#a855f7] text-[#080B11] font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_24px_rgba(34,211,238,0.35)] hover:shadow-[0_0_32px_rgba(168,85,247,0.5)] hover:scale-105 active:scale-100"
          >
            Launch Portfolio Assistant
          </a>
          <a
            href="#deployments"
            className="px-6 py-3 rounded-xl bg-[#0B0F17] hover:bg-white/10 text-white font-mono font-medium text-xs tracking-wider transition-all border border-white/20 hover:border-white/40 shadow-sm"
          >
            Explore Projects
          </a>
        </div>

        {/* 4 Metric KPI Cards: Exact Match to Screenshot with Stunning Shining Edges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
          <div className="shining-card p-3.5 flex flex-col gap-1">
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-none relative z-10">
              15+
            </span>
            <span className="text-[11px] font-mono text-slate-400 relative z-10">
              Automations Built
            </span>
          </div>

          <div className="shining-card p-3.5 flex flex-col gap-1">
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#38bdf8] leading-none relative z-10">
              6+
            </span>
            <span className="text-[11px] font-mono text-slate-400 relative z-10">
              Production Builds
            </span>
          </div>

          <div className="shining-card p-3.5 flex flex-col gap-1">
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#34d399] leading-none relative z-10">
              &lt; 48h
            </span>
            <span className="text-[11px] font-mono text-slate-400 relative z-10">
              POC Turnaround
            </span>
          </div>

          <div className="shining-card p-3.5 flex flex-col gap-1">
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#c084fc] leading-none relative z-10">
              100%
            </span>
            <span className="text-[11px] font-mono text-slate-400 relative z-10">
              IP Client Transfer
            </span>
          </div>
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
