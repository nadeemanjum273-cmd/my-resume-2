import React from "react";

export const Resume: React.FC = () => {
  return (
    <section className="w-full flex flex-col gap-space-xl" id="experience">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
        <div className="flex flex-col gap-space-xs">
          <span className="font-code-terminal text-label-caps uppercase tracking-widest text-primary">
            CURRICULUM VITAE &amp; CREDENTIALS
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold">
            Experience &amp; Qualifications
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            A proven trajectory from rigorous computer science theory to high-velocity autonomous pipeline engineering and enterprise frontend architecture.
          </p>
        </div>
        <a
          className="inline-flex items-center gap-space-xs px-space-md py-2 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-code-terminal text-body-sm transition-colors shadow-sm border border-outline-variant/30"
          href="mailto:nadeemanjum273@gmail.com?subject=Requesting%20Full%20Resume%20PDF"
        >
          <span className="material-symbols-outlined text-[18px]">download</span>
          <span>Request Verified CV (PDF)</span>
        </a>
      </div>

      {/* Timeline & Delivery Promises Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
        {/* 4-Phase Chronological Timeline (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-space-lg relative pl-6 border-l-2 border-surface-container-highest">
          {/* Phase 1: Mind_Dreams AI Support */}
          <div className="relative flex flex-col gap-space-xs">
            <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></span>
            <div className="flex items-center gap-space-xs">
              <span className="font-code-terminal text-label-caps text-primary uppercase font-bold">
                Flagship Production Build
              </span>
              <span className="text-on-surface-variant font-code-terminal text-[11px]">&bull; Oct 2024</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Mind_Dreams — AI Customer Support &amp; RAG Agent
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Engineered end-to-end 24/7 AI customer support chatbot and RAG policy engine with Google Gemini, Next.js 14, and real-time 3-way Google Sheets synchronization for automated order lookups and refund validation.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="px-space-xs py-0.5 rounded bg-surface-container font-code-terminal text-[11px] text-on-surface-variant border border-outline-variant/20">
                Next.js 14
              </span>
              <span className="px-space-xs py-0.5 rounded bg-surface-container font-code-terminal text-[11px] text-on-surface-variant border border-outline-variant/20">
                Google Gemini AI
              </span>
              <span className="px-space-xs py-0.5 rounded bg-surface-container font-code-terminal text-[11px] text-on-surface-variant border border-outline-variant/20">
                LangChain RAG
              </span>
              <span className="px-space-xs py-0.5 rounded bg-surface-container font-code-terminal text-[11px] text-on-surface-variant border border-outline-variant/20">
                Google Sheets API v4
              </span>
            </div>
          </div>

          {/* Phase 2: Independent Consultant */}
          <div className="relative flex flex-col gap-space-xs">
            <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-secondary ring-4 ring-background"></span>
            <div className="flex items-center gap-space-xs">
              <span className="font-code-terminal text-label-caps text-secondary uppercase font-bold">
                Contractor &amp; Solutions Architect
              </span>
              <span className="text-on-surface-variant font-code-terminal text-[11px]">&bull; 2024 — Present</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Independent AI Automation &amp; Frontend Consultant
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Architects and deploys production-ready 24/7 lead qualification chatbots, webhook pipelines, and autonomous ReAct agents for small-to-medium enterprises (3-20 staff). Integrated VoiceFlow with WhatsApp Cloud API to capture after-hours qualified inquiries (+42% conversion).
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="px-space-xs py-0.5 rounded bg-surface-container font-code-terminal text-[11px] text-on-surface-variant border border-outline-variant/20">
                n8n Architecture
              </span>
              <span className="px-space-xs py-0.5 rounded bg-surface-container font-code-terminal text-[11px] text-on-surface-variant border border-outline-variant/20">
                WhatsApp Cloud API
              </span>
              <span className="px-space-xs py-0.5 rounded bg-surface-container font-code-terminal text-[11px] text-on-surface-variant border border-outline-variant/20">
                HubSpot / Airtable CRM
              </span>
            </div>
          </div>

          {/* Phase 3: DataCrumb Specialization */}
          <div className="relative flex flex-col gap-space-xs p-space-md rounded-xl bg-surface-container-high/40 border border-primary/30">
            <span className="absolute -left-[31px] top-3 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></span>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="font-code-terminal text-label-caps text-primary uppercase font-bold">
                  Specialization Completed
                </span>
                <span className="text-on-surface-variant font-code-terminal text-[11px]">&bull; DataCrumb Org</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary font-code-terminal text-[10px] font-bold">
                VERIFIED ALUM
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Specialization &bull; Data Science &amp; AI Fellow at DataCrumb
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Completed advanced specialization in Data Science &amp; Generative AI systems at{" "}
              <a
                href="https://www.datacrumbs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-bold inline-flex items-center gap-0.5"
              >
                <span>DataCrumb (datacrumbs.org)</span>
                <span className="material-symbols-outlined text-[13px]">open_in_new</span>
              </a>
              . Specialized in statistical model validation, Scikit-Learn (Trees &amp; KNN), LangChain vector embeddings, and autonomous agent design.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.datacrumbs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-code-terminal text-primary hover:underline"
              >
                <span>Visit DataCrumb</span>
                <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
              </a>
              <span className="text-on-surface-variant">&bull;</span>
              <a
                href="https://www.linkedin.com/company/datacrumbs/home/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-code-terminal text-secondary hover:underline"
              >
                <span>DataCrumb LinkedIn</span>
                <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
              </a>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2">
              <span className="px-space-xs py-0.5 rounded bg-surface-container font-code-terminal text-[11px] text-on-surface-variant border border-outline-variant/20">
                Python (Pandas/NumPy)
              </span>
              <span className="px-space-xs py-0.5 rounded bg-surface-container font-code-terminal text-[11px] text-on-surface-variant border border-outline-variant/20">
                Scikit-Learn (Trees &amp; KNN)
              </span>
              <span className="px-space-xs py-0.5 rounded bg-surface-container font-code-terminal text-[11px] text-on-surface-variant border border-outline-variant/20">
                Vector RAG &amp; Embeddings
              </span>
              <span className="px-space-xs py-0.5 rounded bg-surface-container font-code-terminal text-[11px] text-on-surface-variant border border-outline-variant/20">
                Next.js + Tailwind + Framer Motion
              </span>
            </div>
          </div>

          {/* Phase 4: BS Computer Science */}
          <div className="relative flex flex-col gap-space-xs">
            <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-tertiary ring-4 ring-background"></span>
            <div className="flex items-center gap-space-xs">
              <span className="font-code-terminal text-label-caps text-tertiary uppercase font-bold">
                Academic Foundation
              </span>
              <span className="text-on-surface-variant font-code-terminal text-[11px]">&bull; 66000 Multan, Pakistan</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Graduation in Computer Science
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Completed formal graduation in Computer Science with rigorous focus on software engineering, data structures, algorithms, relational databases, and applied computational systems.
            </p>
          </div>
        </div>

        {/* Client Delivery Promises Side-Panel (5 Cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-surface-container-low/90 backdrop-blur-xl p-space-lg shadow-2xl flex flex-col gap-space-md border border-outline-variant/30">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-[24px]">verified_user</span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Client Delivery Promises
            </h3>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Guaranteed principles baked into every architectural contract to eliminate agency friction and build long-term enterprise trust.
          </p>
          <div className="flex flex-col gap-space-md pt-space-xs">
            {/* Promise 1 */}
            <div className="flex items-start gap-space-sm p-space-sm rounded-xl bg-surface-container/60 shadow-sm border border-outline-variant/20">
              <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[18px]">payments</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-body-md font-bold text-on-surface">50% Deposit Rule</span>
                <span className="font-body-sm text-[12px] text-on-surface-variant">
                  50% upfront to initiate sprint kickoff; remaining 50% only upon live staging verification.
                </span>
              </div>
            </div>

            {/* Promise 2 */}
            <div className="flex items-start gap-space-sm p-space-sm rounded-xl bg-surface-container/60 shadow-sm border border-outline-variant/20">
              <div className="w-8 h-8 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[18px]">key</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-body-md font-bold text-on-surface">100% IP Transfer</span>
                <span className="font-body-sm text-[12px] text-on-surface-variant">
                  You own all workflow code, system prompts, API keys, and documentation with zero vendor lock-in.
                </span>
              </div>
            </div>

            {/* Promise 3 */}
            <div className="flex items-start gap-space-sm p-space-sm rounded-xl bg-surface-container/60 shadow-sm border border-outline-variant/20">
              <div className="w-8 h-8 rounded-lg bg-tertiary/20 text-tertiary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-body-md font-bold text-on-surface">4-Day Delivery SLA</span>
                <span className="font-body-sm text-[12px] text-on-surface-variant">
                  Working prototype delivered in 48-96 hours for rapid testing and real-word deployment.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
