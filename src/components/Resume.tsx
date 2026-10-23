import React from "react";

export const Resume: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="w-full flex flex-col gap-8" id="experience">
      {/* Section Header: Matching Screenshot exactly, with contact line removed */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-white/5">
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
          Experience &amp; Qualifications
        </h2>

        {/* Print / Save CV (PDF) Button */}
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B0F17] hover:bg-white/10 text-slate-200 hover:text-white font-mono text-xs font-medium transition-all border border-white/15 hover:border-white/30 shadow-md shrink-0 self-start sm:self-auto"
        >
          <span className="material-symbols-outlined text-[18px] text-[#22d3ee]">print</span>
          <span>Print / Save CV (PDF)</span>
        </button>
      </div>

      {/* Main 2-Column Split: Timeline & Client Delivery Promises */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (7 Cols): Experience Timeline */}
        <div className="lg:col-span-7 flex flex-col gap-10 relative pl-6 border-l-2 border-white/10 ml-2">
          {/* Node 1: Mind_Dreams — AI Customer Support & RAG Agent */}
          <div className="relative flex flex-col gap-3">
            {/* Timeline Cyan Ringed Dot */}
            <span className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-[#080B11] border-2 border-[#22d3ee] shadow-[0_0_12px_rgba(34,211,238,0.6)]"></span>

            {/* Header: Title & Date Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#22d3ee] text-[20px]">
                  auto_awesome
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
                  Mind_Dreams — AI Customer Support &amp; RAG Agent
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#082f49]/70 border border-[#0284c7]/50 text-[#38bdf8] font-mono text-xs font-semibold shrink-0">
                Oct 2026
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm leading-relaxed font-sans">
              Production-grade 24/7 AI customer support chatbot and RAG policy engine built with Google Gemini, Next.js 14, and real-time 3-way Google Sheets synchronization for automated order lookups and refund validation.
            </p>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1 rounded-lg bg-[#080B11] border border-white/10 font-mono text-xs text-slate-300">
                Next.js 14
              </span>
              <span className="px-3 py-1 rounded-lg bg-[#080B11] border border-white/10 font-mono text-xs text-slate-300">
                Google Gemini AI
              </span>
              <span className="px-3 py-1 rounded-lg bg-[#080B11] border border-white/10 font-mono text-xs text-slate-300">
                LangChain RAG
              </span>
              <span className="px-3 py-1 rounded-lg bg-[#080B11] border border-white/10 font-mono text-xs text-slate-300">
                Google Sheets API v4
              </span>
            </div>

            {/* GitHub Repo Link */}
            <a
              href="https://github.com/nadeemanjum273-cmd/Mind_Dream-Agent"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#22d3ee] hover:text-[#38bdf8] font-mono text-xs transition-colors pt-1 group"
            >
              <span className="material-symbols-outlined text-[16px] text-[#22d3ee]">
                terminal
              </span>
              <span className="underline-offset-4 group-hover:underline">
                github.com/nadeemanjum273-cmd/Mind_Dream-Agent
              </span>
              <span className="text-[13px]">&nearr;</span>
            </a>
          </div>

          {/* Node 2: Independent AI Automation Consultant */}
          <div className="relative flex flex-col gap-3">
            {/* Timeline Slate Ringed Dot */}
            <span className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-[#080B11] border-2 border-slate-400"></span>

            {/* Header: Title & Date Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-300 text-[20px]">
                  work
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
                  Independent AI Automation Consultant
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-mono text-xs font-semibold shrink-0">
                2026 — Present
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm leading-relaxed font-sans">
              Architects and deploys production-ready 24/7 lead qualification chatbots, webhook pipelines, and autonomous ReAct agents for small-to-medium enterprises (3–20 staff).
            </p>

            {/* Bullet Points */}
            <ul className="flex flex-col gap-2 pt-1 text-slate-300 text-sm font-sans">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                <span>
                  Integrated Voiceflow with WhatsApp Cloud API to capture after-hours qualified inquiries (+42% conversion).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                <span>
                  Engineered n8n webhook pipelines orchestrating real-time lead routing and CRM synchronization.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                <span>
                  Authored clean, documented deployment handoffs with 100% intellectual property transfer to clients.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column (5 Cols): Client Delivery Promises Card */}
        <div className="lg:col-span-5 rounded-2xl bg-[#0B0F17]/90 backdrop-blur-xl p-6 sm:p-7 shadow-2xl flex flex-col gap-5 border border-white/10">
          {/* Card Header with Green Checkmark Icon */}
          <div className="flex items-center gap-2.5 pb-2 border-b border-white/10">
            <span className="material-symbols-outlined text-emerald-400 text-[22px]">
              check_circle
            </span>
            <h3 className="font-display font-bold text-lg text-white">
              Client Delivery Promises
            </h3>
          </div>

          {/* 3 Promises matching Screenshot */}
          <div className="flex flex-col gap-4">
            {/* Promise 1 */}
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-emerald-400 text-[20px] shrink-0 mt-0.5">
                check_circle
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="font-sans text-sm font-bold text-white">
                  50% Deposit Rule:
                </span>
                <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed font-sans">
                  50% upfront to initiate sprint kickoff; remaining 50% only upon live staging verification.
                </p>
              </div>
            </div>

            {/* Promise 2 */}
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-emerald-400 text-[20px] shrink-0 mt-0.5">
                check_circle
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="font-sans text-sm font-bold text-white">
                  100% IP Transfer:
                </span>
                <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed font-sans">
                  You own all workflow code, system prompts, API keys, and documentation with zero vendor lock-in.
                </p>
              </div>
            </div>

            {/* Promise 3 */}
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-emerald-400 text-[20px] shrink-0 mt-0.5">
                check_circle
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="font-sans text-sm font-bold text-white">
                  4-Day Delivery SLA:
                </span>
                <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed font-sans">
                  Working prototype delivered in 48–96 hours for rapid testing and real-world deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
