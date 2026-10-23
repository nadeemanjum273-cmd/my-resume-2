import React from "react";

interface HeroProps {
  onTriggerToast?: (msg: string) => void;
  onOpenVideoModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onTriggerToast, onOpenVideoModal }) => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center pt-space-sm" id="home">
      {/* Left Column: Copy & KPIs (7 Cols) */}
      <div className="lg:col-span-7 flex flex-col gap-space-md">
        {/* Over-headline Tag */}
        <div className="inline-flex items-center gap-space-xs self-start px-3 py-1 rounded-full bg-surface-container-high/70 shadow-sm backdrop-blur-md border border-outline-variant/30">
          <span className="text-primary font-code-terminal text-label-caps">✦</span>
          <span className="font-code-terminal text-[11px] tracking-wider text-primary uppercase font-semibold">
            Autonomous Agents &bull; VoiceFlow &bull; n8n Pipelines
          </span>
          <span className="text-primary font-code-terminal text-label-caps">✦</span>
        </div>

        {/* Main Display Headline */}
        <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero tracking-tight text-on-surface">
          Transforming Business Workflows into{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-surface-tint to-secondary">
            Intelligent AI Systems.
          </span>
        </h1>

        {/* Subtitle - Short, clean, minimalist */}
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
          Production-grade Autonomous Agents, VoiceFlow Assistants, and n8n Workflow Automations backed by deep Data Science &amp; Python ML foundations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary-container text-on-primary-container font-code-terminal text-xs font-bold shadow-xl hover:bg-primary hover:text-on-primary transition-all duration-300 group"
            href="#interactive-agent"
          >
            <span>Launch Resume Assistant</span>
            <span className="material-symbols-outlined text-[16px] group-hover:rotate-45 transition-transform">bolt</span>
          </a>
          <a
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-surface-container-high text-on-surface font-code-terminal text-xs hover:bg-surface-bright transition-all shadow-md border border-outline-variant/40"
            href="#deployments"
          >
            <span>Explore Deployments</span>
            <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
          </a>
        </div>

        {/* Quick Demo WhatsApp Callout */}
        <div className="flex items-center gap-2 pt-1 text-xs font-code-terminal text-on-surface-variant">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span>Rapid Architecture Demo?</span>
          <a
            className="font-semibold text-primary hover:text-secondary transition-colors underline underline-offset-4 decoration-primary/40"
            href="https://wa.me/923077970277"
            target="_blank"
            rel="noopener noreferrer"
          >
            +92 307 7970277
          </a>
        </div>

        {/* Metric KPI Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3">
          <div className="p-3 rounded-xl bg-surface-container/60 backdrop-blur-md shadow-md border border-outline-variant/20 flex flex-col gap-0.5">
            <span className="font-metric-huge text-2xl sm:text-3xl text-on-surface font-bold">
              15<span className="text-primary">+</span>
            </span>
            <span className="font-label-caps text-[10px] tracking-wider uppercase text-on-surface-variant">
              Automations Built
            </span>
            <span className="font-code-terminal text-[10px] text-primary">Live in Prod</span>
          </div>

          <div className="p-3 rounded-xl bg-surface-container/60 backdrop-blur-md shadow-md border border-outline-variant/20 flex flex-col gap-0.5">
            <span className="font-metric-huge text-2xl sm:text-3xl text-on-surface font-bold">
              6<span className="text-secondary">+</span>
            </span>
            <span className="font-label-caps text-[10px] tracking-wider uppercase text-on-surface-variant">
              Production Builds
            </span>
            <span className="font-code-terminal text-[10px] text-secondary">End-to-End</span>
          </div>

          <div className="p-3 rounded-xl bg-surface-container/60 backdrop-blur-md shadow-md border border-outline-variant/20 flex flex-col gap-0.5">
            <span className="font-metric-huge text-2xl sm:text-3xl text-on-surface font-bold">
              &lt;48<span className="text-primary-fixed">h</span>
            </span>
            <span className="font-label-caps text-[10px] tracking-wider uppercase text-on-surface-variant">
              POC Turnaround
            </span>
            <span className="font-code-terminal text-[10px] text-primary-fixed">Validated</span>
          </div>

          <div className="p-3 rounded-xl bg-surface-container/60 backdrop-blur-md shadow-md border border-outline-variant/20 flex flex-col gap-0.5">
            <span className="font-metric-huge text-2xl sm:text-3xl text-on-surface font-bold">
              100<span className="text-tertiary">%</span>
            </span>
            <span className="font-label-caps text-[10px] tracking-wider uppercase text-on-surface-variant">
              IP Transfer
            </span>
            <span className="font-code-terminal text-[10px] text-tertiary">Zero Lock-In</span>
          </div>
        </div>
      </div>

      {/* Right Column: Profile Showcase Bento Card (5 Cols) with user's real IMG_0048.JPG */}
      <div className="lg:col-span-5 flex flex-col">
        <div className="relative rounded-2xl bg-surface-container-low/80 backdrop-blur-xl p-space-md shadow-2xl overflow-hidden flex flex-col gap-space-sm border border-outline-variant/30">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* Profile Header Meta (Removed DataCrumb mentions) */}
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-highest text-primary font-code-terminal text-label-caps">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              VERIFIED ARCHITECT
            </div>
            <span className="font-code-terminal text-[11px] text-secondary flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              AVAILABLE WORLDWIDE
            </span>
          </div>

          {/* Profile Portrait / Visual - Setting user's real 0048jpg picture */}
          <div className="relative w-full aspect-square max-h-80 rounded-xl overflow-hidden bg-surface-container-lowest shadow-inner group border border-outline-variant/20">
            <img
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              alt="Nadeem Anjum"
              src="/IMG_0048.JPG"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/profile.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-headline-sm text-base text-on-surface font-bold">Nadeem Anjum</span>
                <span className="font-code-terminal text-[11px] text-primary">AI Solutions &amp; Automation Architect</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[18px]">verified</span>
              </div>
            </div>
          </div>

          {/* Location & Details (Clean minimalist, no datacrumb text) */}
          <div className="flex flex-col gap-1 text-on-surface-variant font-code-terminal text-xs pt-1">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-secondary text-[16px]">public</span>
              <span className="text-on-surface">66000 Multan, Punjab, PK &bull; Available for Global Remote</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-[16px]">school</span>
              <span>Computer Science Graduate &bull; AI Systems Architect</span>
            </div>
          </div>

          {/* Video Demo Trigger Modal Link */}
          <button
            className="w-full py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2 font-code-terminal text-xs text-on-surface font-medium group border border-outline-variant/30 shadow-sm mt-1"
            onClick={onOpenVideoModal}
          >
            <span className="material-symbols-outlined text-primary text-[18px] group-hover:scale-110 transition-transform">
              play_circle
            </span>
            <span>Watch 60-Sec Architecture Walkthrough</span>
          </button>
        </div>
      </div>
    </section>
  );
};
