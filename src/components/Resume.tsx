import React from "react";

export const Resume: React.FC = () => {
  return (
    <section className="w-full flex flex-col gap-space-md" id="experience">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
        <div className="flex flex-col gap-1">
          <span className="font-code-terminal text-label-caps uppercase tracking-widest text-primary">
            CURRICULUM VITAE &amp; CREDENTIALS
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl text-on-surface font-bold">
            Experience &amp; Qualifications
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
            A proven trajectory from rigorous computer science theory to high-velocity autonomous pipeline engineering.
          </p>
        </div>
        <a
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-code-terminal text-xs transition-colors shadow-sm border border-outline-variant/30 shrink-0"
          href="mailto:nadeemanjum273@gmail.com?subject=Requesting%20Full%20Resume%20PDF"
        >
          <span className="material-symbols-outlined text-[16px]">download</span>
          <span>Request CV (PDF)</span>
        </a>
      </div>

      {/* Timeline & Delivery Promises Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        {/* 3-Phase Chronological Timeline (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-space-md relative pl-5 border-l-2 border-surface-container-highest">
          {/* Phase 1: Mind_Dreams AI Support */}
          <div className="relative flex flex-col gap-1">
            <span className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-background"></span>
            <div className="flex items-center gap-2">
              <span className="font-code-terminal text-[10px] text-primary uppercase font-bold">
                Flagship Production Build
              </span>
              <span className="text-on-surface-variant font-code-terminal text-[10px]">&bull; Oct 2024</span>
            </div>
            <h3 className="font-headline-sm text-base text-on-surface font-bold">
              Mind_Dreams — AI Customer Support
            </h3>
            <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
              Engineered end-to-end 24/7 AI customer support chatbot and RAG policy engine with Google Gemini, Next.js 14, and real-time 3-way Google Sheets sync for orders and refund verification.
            </p>
            <div className="flex flex-wrap gap-1 pt-1">
              <span className="px-2 py-0.5 rounded bg-surface-container font-code-terminal text-[10px] text-on-surface-variant border border-outline-variant/20">
                Next.js 14
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container font-code-terminal text-[10px] text-on-surface-variant border border-outline-variant/20">
                Google Gemini
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container font-code-terminal text-[10px] text-on-surface-variant border border-outline-variant/20">
                LangChain RAG
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container font-code-terminal text-[10px] text-on-surface-variant border border-outline-variant/20">
                Google Sheets API
              </span>
            </div>
          </div>

          {/* Phase 2: Independent Consultant */}
          <div className="relative flex flex-col gap-1">
            <span className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-secondary ring-4 ring-background"></span>
            <div className="flex items-center gap-2">
              <span className="font-code-terminal text-[10px] text-secondary uppercase font-bold">
                Contractor &amp; Solutions Architect
              </span>
              <span className="text-on-surface-variant font-code-terminal text-[10px]">&bull; 2024 — Present</span>
            </div>
            <h3 className="font-headline-sm text-base text-on-surface font-bold">
              Independent AI Automation &amp; Systems Consultant
            </h3>
            <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
              Architects and deploys production-ready 24/7 lead qualification chatbots, webhook pipelines, and autonomous ReAct agents. Integrated VoiceFlow with WhatsApp Cloud API to capture after-hours qualified inquiries (+42% conversion).
            </p>
            <div className="flex flex-wrap gap-1 pt-1">
              <span className="px-2 py-0.5 rounded bg-surface-container font-code-terminal text-[10px] text-on-surface-variant border border-outline-variant/20">
                n8n Webhooks
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container font-code-terminal text-[10px] text-on-surface-variant border border-outline-variant/20">
                WhatsApp Cloud API
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container font-code-terminal text-[10px] text-on-surface-variant border border-outline-variant/20">
                CRM Integrations
              </span>
            </div>
          </div>

          {/* Phase 3: BS Computer Science & Fellowship */}
          <div className="relative flex flex-col gap-1">
            <span className="absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full bg-tertiary ring-4 ring-background"></span>
            <div className="flex items-center gap-2">
              <span className="font-code-terminal text-[10px] text-tertiary uppercase font-bold">
                Academic &amp; Fellowship Foundation
              </span>
              <span className="text-on-surface-variant font-code-terminal text-[10px]">&bull; 66000 Multan, Pakistan</span>
            </div>
            <h3 className="font-headline-sm text-base text-on-surface font-bold">
              Graduation in Computer Science &bull; Applied AI Fellow
            </h3>
            <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
              Formal graduation in Computer Science with rigorous foundations in algorithms, data structures, and relational databases. Specialized in machine learning models, statistical analysis, and generative AI agent swarms.
            </p>
            <div className="flex flex-wrap gap-1 pt-1">
              <span className="px-2 py-0.5 rounded bg-surface-container font-code-terminal text-[10px] text-on-surface-variant border border-outline-variant/20">
                Python (Pandas/NumPy)
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container font-code-terminal text-[10px] text-on-surface-variant border border-outline-variant/20">
                Scikit-Learn (Trees &amp; KNN)
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container font-code-terminal text-[10px] text-on-surface-variant border border-outline-variant/20">
                Vector Knowledge RAG
              </span>
            </div>
          </div>
        </div>

        {/* Client Delivery Promises Side-Panel (5 Cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-surface-container-low/90 backdrop-blur-xl p-space-md shadow-2xl flex flex-col gap-space-sm border border-outline-variant/30">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]">verified_user</span>
            <h3 className="font-headline-sm text-base text-on-surface font-bold">
              Client Delivery Promises
            </h3>
          </div>
          <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
            Guaranteed principles baked into every architectural contract to eliminate agency friction.
          </p>
          <div className="flex flex-col gap-2 pt-1">
            {/* Promise 1 */}
            <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-surface-container/60 shadow-sm border border-outline-variant/20">
              <div className="w-7 h-7 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[16px]">payments</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-xs font-bold text-on-surface">50% Deposit Rule</span>
                <span className="font-body-sm text-[11px] text-on-surface-variant">
                  50% upfront to initiate sprint; remaining 50% only upon live staging verification.
                </span>
              </div>
            </div>

            {/* Promise 2 */}
            <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-surface-container/60 shadow-sm border border-outline-variant/20">
              <div className="w-7 h-7 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[16px]">key</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-xs font-bold text-on-surface">100% IP Transfer</span>
                <span className="font-body-sm text-[11px] text-on-surface-variant">
                  You own all workflow code, system prompts, API keys, and documentation with zero vendor lock-in.
                </span>
              </div>
            </div>

            {/* Promise 3 */}
            <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-surface-container/60 shadow-sm border border-outline-variant/20">
              <div className="w-7 h-7 rounded-lg bg-tertiary/20 text-tertiary flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-xs font-bold text-on-surface">4-Day Delivery SLA</span>
                <span className="font-body-sm text-[11px] text-on-surface-variant">
                  Working prototype delivered in 48-96 hours for rapid testing and live validation.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
