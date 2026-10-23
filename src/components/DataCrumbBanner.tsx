import React from "react";

export const DataCrumbBanner: React.FC = () => {
  return (
    <section className="relative rounded-3xl overflow-hidden shadow-2xl border border-primary/30">
      {/* High-Impact Emerald / Teal Accent Container */}
      <div className="bg-gradient-to-r from-primary-container via-surface-tint to-secondary-container p-8 sm:p-12 text-on-primary relative z-10">
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.18),_transparent_60%)] pointer-events-none" />

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Text Block */}
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-surface-container-lowest/30 backdrop-blur-md text-on-primary text-xs font-code-terminal font-bold tracking-wider border border-white/20">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>DATACRUMB ENGINEERING STANDARDS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display-hero font-bold tracking-tight leading-tight text-white">
              Accelerate Your Enterprise with Production AI Workflows.
            </h2>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed font-body-md">
              Specialized at{" "}
              <a
                href="https://www.datacrumbs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold text-white hover:text-secondary-fixed transition-colors"
              >
                DataCrumb (datacrumbs.org)
              </a>{" "}
              in building robust autonomous agents, 24/7 lead chatbots, and n8n webhooks. Get your business automated with{" "}
              <strong className="text-white font-bold">100% intellectual property transfer</strong> and rapid 48-hour prototype delivery.
            </p>

            {/* Quick Proof Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs font-code-terminal">
              <span className="flex items-center gap-1.5 bg-black/25 px-3 py-1.5 rounded-full border border-white/20 text-white">
                <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                <span>Zero Vendor Lock-In</span>
              </span>
              <span className="flex items-center gap-1.5 bg-black/25 px-3 py-1.5 rounded-full border border-white/20 text-white">
                <span className="material-symbols-outlined text-[16px] text-primary">verified_user</span>
                <span>14 Days Hypercare</span>
              </span>
              <span className="flex items-center gap-1.5 bg-black/25 px-3 py-1.5 rounded-full border border-white/20 text-white">
                <span className="material-symbols-outlined text-[16px] text-primary">payments</span>
                <span>50% Deposit Safety Rule</span>
              </span>
            </div>
          </div>

          {/* Right Action Block */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full sm:w-auto shrink-0">
            <a
              href="#demo-form"
              className="px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 text-black font-code-terminal font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-105 active:scale-100 flex items-center justify-center gap-2"
            >
              <span>Schedule Walkthrough</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>

            <a
              href="https://wa.me/923077970277"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-black/30 hover:bg-black/50 border border-white/30 text-white font-code-terminal font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px] text-secondary">chat</span>
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
