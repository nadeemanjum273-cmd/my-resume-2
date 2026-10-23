import React from "react";

interface HeroProps {
  onTriggerToast?: (msg: string) => void;
  onOpenVideoModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onTriggerToast, onOpenVideoModal }) => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center pt-space-md" id="home">
      {/* Left Column: Copy & KPIs (7 Cols) */}
      <div className="lg:col-span-7 flex flex-col gap-space-lg">
        {/* Over-headline Tag */}
        <div className="inline-flex items-center gap-space-xs self-start px-space-md py-1.5 rounded-full bg-surface-container-high/70 shadow-sm backdrop-blur-md border border-outline-variant/30">
          <span className="text-primary font-code-terminal text-label-caps">✦</span>
          <span className="font-code-terminal text-label-caps tracking-widest text-primary uppercase">
            24/7 Lead Chatbots • Autonomous Agents • n8n Pipelines
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

        {/* Subtitle */}
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          I build production-grade Autonomous Agents, VoiceFlow assistants, and n8n Workflow Automations backed by deep Data Science &amp; Python ML foundations for high-growth enterprises.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
          <a
            className="inline-flex items-center gap-space-xs px-space-xl py-3 rounded-full bg-primary-container text-on-primary-container font-code-terminal text-body-sm font-bold shadow-xl hover:bg-primary hover:text-on-primary transition-all duration-300 group"
            href="#interactive-agent"
          >
            <span>Launch Resume Assistant</span>
            <span className="material-symbols-outlined text-[18px] group-hover:rotate-45 transition-transform">bolt</span>
          </a>
          <a
            className="inline-flex items-center gap-space-xs px-space-xl py-3 rounded-full bg-surface-container-high text-on-surface font-code-terminal text-body-sm hover:bg-surface-bright transition-all shadow-md border border-outline-variant/40"
            href="#deployments"
          >
            <span>Explore Production Deployments</span>
            <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
          </a>
        </div>

        {/* Quick Demo WhatsApp Callout */}
        <div className="flex items-center gap-space-xs pt-space-xs">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </span>
          <span className="font-code-terminal text-body-sm text-on-surface-variant">Need a Rapid Architecture Demo?</span>
          <a
            className="font-code-terminal text-body-sm font-semibold text-primary hover:text-secondary transition-colors underline underline-offset-4 decoration-primary/40"
            href="https://wa.me/923077970277"
            target="_blank"
            rel="noopener noreferrer"
          >
            +92 307 7970277
          </a>
        </div>

        {/* Metric KPI Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-md">
          <div className="p-space-md rounded-xl bg-surface-container/60 backdrop-blur-md shadow-md border border-outline-variant/20 flex flex-col gap-1">
            <span className="font-metric-huge text-metric-huge text-on-surface leading-none">
              15<span className="text-primary">+</span>
            </span>
            <span className="font-label-caps text-label-caps tracking-wider uppercase text-on-surface-variant">
              Automations Built
            </span>
            <span className="font-code-terminal text-[10px] text-primary mt-1">Live in Prod</span>
          </div>

          <div className="p-space-md rounded-xl bg-surface-container/60 backdrop-blur-md shadow-md border border-outline-variant/20 flex flex-col gap-1">
            <span className="font-metric-huge text-metric-huge text-on-surface leading-none">
              6<span className="text-secondary">+</span>
            </span>
            <span className="font-label-caps text-label-caps tracking-wider uppercase text-on-surface-variant">
              Production Builds
            </span>
            <span className="font-code-terminal text-[10px] text-secondary mt-1">End-to-End</span>
          </div>

          <div className="p-space-md rounded-xl bg-surface-container/60 backdrop-blur-md shadow-md border border-outline-variant/20 flex flex-col gap-1">
            <span className="font-metric-huge text-metric-huge text-on-surface leading-none">
              &lt;48<span className="text-primary-fixed">h</span>
            </span>
            <span className="font-label-caps text-label-caps tracking-wider uppercase text-on-surface-variant">
              POC Turnaround
            </span>
            <span className="font-code-terminal text-[10px] text-primary-fixed mt-1">Validated Sandbox</span>
          </div>

          <div className="p-space-md rounded-xl bg-surface-container/60 backdrop-blur-md shadow-md border border-outline-variant/20 flex flex-col gap-1">
            <span className="font-metric-huge text-metric-huge text-on-surface leading-none">
              100<span className="text-tertiary">%</span>
            </span>
            <span className="font-label-caps text-label-caps tracking-wider uppercase text-on-surface-variant">
              IP Client Transfer
            </span>
            <span className="font-code-terminal text-[10px] text-tertiary mt-1">Zero Vendor Lock</span>
          </div>
        </div>
      </div>

      {/* Right Column: Profile Showcase Bento Card (5 Cols) */}
      <div className="lg:col-span-5 flex flex-col">
        <div className="relative rounded-2xl bg-surface-container-low/80 backdrop-blur-xl p-space-lg shadow-2xl overflow-hidden flex flex-col gap-space-md border border-outline-variant/30">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* Profile Header Meta */}
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container-highest text-primary font-code-terminal text-label-caps">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              VERIFIED ARCHITECT
            </div>
            <a
              href="https://www.datacrumbs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-code-terminal text-label-caps text-primary hover:underline flex items-center gap-1"
            >
              <span>DATACRUMBS CERTIFIED</span>
              <span className="material-symbols-outlined text-[13px]">open_in_new</span>
            </a>
          </div>

          {/* Profile Portrait / Visual */}
          <div className="relative w-full aspect-square max-h-80 rounded-xl overflow-hidden bg-surface-container-lowest shadow-inner group border border-outline-variant/20">
            <img
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              alt="Nadeem Anjum - AI Solutions & Automation Architect"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuBBslnumQcN3PelcFLRoVU62p2veWOhKKhTdrSD3qNaD2A4WBADCtwUehd3Zp4jIwJTAwuMhF5JOMO9FS09E671LSL0dH8zhrKX-l9qfvKH6YQlO11BUs8m7tmc0E7KPKrcoP1ilmbjFVWoROvhgCQQkSK2loxuIGbXDuFy2FMO7KzzmPWgU9VLDPVvtvRpsbK8-HvHIdpua5u50DX5XKpwm5dfdcbSRC_JqKps4X0u1bwazwn1A"
              onError={(e) => {
                // Graceful fallback to local profile image if external cdn has issues
                (e.target as HTMLImageElement).src = "/profile.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Nadeem Anjum</span>
                <span className="font-code-terminal text-[12px] text-primary">Senior Frontend &amp; AI Specialist</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[20px]">verified</span>
              </div>
            </div>
          </div>

          {/* Location & Details */}
          <div className="flex flex-col gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-secondary text-[18px]">public</span>
              <span className="text-on-surface">66000 Multan, Punjab, PK • Available for Global Remote</span>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[18px]">psychology</span>
              <span>
                Computer Science Graduate &bull;{" "}
                <a
                  href="https://www.datacrumbs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  DataCrumb AI Fellow
                </a>
              </span>
            </div>
          </div>

          {/* Video Demo Trigger Modal Link */}
          <button
            className="w-full py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors flex items-center justify-center gap-space-xs font-code-terminal text-body-sm text-on-surface font-medium group border border-outline-variant/30 shadow-sm"
            onClick={onOpenVideoModal}
          >
            <span className="material-symbols-outlined text-primary text-[20px] group-hover:scale-110 transition-transform">
              play_circle
            </span>
            <span>Watch 60-Sec Architecture Walkthrough</span>
          </button>
        </div>
      </div>
    </section>
  );
};
