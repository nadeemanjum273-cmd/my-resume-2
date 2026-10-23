import React from "react";

export const Skills: React.FC = () => {
  const row1 = [
    { name: "Python", role: "Data & ML Engine", icon: "terminal", color: "text-[#38bdf8]", border: "hover:border-[#38bdf8]/50" },
    { name: "LangChain", role: "Agentic Workflows", icon: "hub", color: "text-[#22d3ee]", border: "hover:border-[#22d3ee]/50" },
    { name: "Next.js 14", role: "Fullstack UI & SSR", icon: "layers", color: "text-white", border: "hover:border-white/50" },
    { name: "Gemini Pro", role: "LLM Inference & Context", icon: "auto_awesome", color: "text-[#38bdf8]", border: "hover:border-[#38bdf8]/50" },
    { name: "OpenAI GPT-4o", role: "Reasoning & JSON Mode", icon: "neurology", color: "text-[#22d3ee]", border: "border-[#22d3ee]/60 shadow-[0_0_20px_rgba(34,211,238,0.25)]" },
    { name: "n8n Automation", role: "Webhook & API Pipelines", icon: "alt_route", color: "text-[#c084fc]", border: "hover:border-[#c084fc]/50" },
    { name: "Voiceflow", role: "Conversational Flow UX", icon: "graphic_eq", color: "text-[#38bdf8]", border: "hover:border-[#38bdf8]/50" },
    { name: "ChromaDB", role: "Vector Knowledge RAG", icon: "database", color: "text-[#22d3ee]", border: "hover:border-[#22d3ee]/50" },
  ];

  const row2 = [
    { name: "Scikit-Learn", role: "Supervised / Trees / KNN", icon: "query_stats", color: "text-[#c084fc]", border: "hover:border-[#c084fc]/50" },
    { name: "Streamlit", role: "ML Portals & Demos", icon: "monitoring", color: "text-[#34d399]", border: "hover:border-[#34d399]/50" },
    { name: "PostgreSQL & pgvector", role: "Hybrid SQL + Vector Store", icon: "storage", color: "text-[#38bdf8]", border: "hover:border-[#38bdf8]/50" },
    { name: "WhatsApp Cloud API", role: "24/7 Lead Capture Engine", icon: "chat", color: "text-[#22d3ee]", border: "hover:border-[#22d3ee]/50" },
    { name: "Pandas & NumPy", role: "High-Throughput Pipelines", icon: "data_array", color: "text-[#38bdf8]", border: "hover:border-[#38bdf8]/50" },
    { name: "Google Sheets API", role: "2-Way Live Sync & Auditing", icon: "table_chart", color: "text-[#22d3ee]", border: "hover:border-[#22d3ee]/50" },
    { name: "Docker Containers", role: "Isolated Microservices", icon: "deployed_code", color: "text-[#38bdf8]", border: "hover:border-[#38bdf8]/50" },
    { name: "GitHub CI/CD", role: "Automated Quality Tests", icon: "sync_alt", color: "text-[#c084fc]", border: "hover:border-[#c084fc]/50" },
  ];

  // Seamless duplication for infinite loop
  const row1Doubled = [...row1, ...row1];
  const row2Doubled = [...row2, ...row2];

  return (
    <section className="w-full flex flex-col gap-6 overflow-hidden" id="tech-arsenal">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 px-2">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-xs uppercase tracking-widest text-[#22d3ee] font-bold">
            CURRICULUM &amp; STACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Technical Arsenal
          </h2>
          <p className="text-slate-300 text-sm max-w-xl font-sans">
            Industry-grade frameworks, orchestration runtimes, vector storage, and machine learning libraries powering automated client pipelines.
          </p>
        </div>
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0F17] text-slate-300 font-mono text-xs border border-white/10 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#22d3ee] animate-pulse"></span>
          <span>16 PRODUCTION PLATFORMS &bull; LIVE STREAM</span>
        </div>
      </div>

      {/* 2 Rows Moving Right-to-Left with Edge Fade and Hover Pause */}
      <div className="marquee-pause marquee-mask w-full flex flex-col gap-4 py-2 overflow-hidden select-none">
        {/* Row 1: Right to Left (Average Timer: ~28s) */}
        <div className="animate-marquee-left flex items-center gap-4">
          {row1Doubled.map((p, i) => (
            <div
              key={`row1-${i}`}
              className={`w-[270px] sm:w-[290px] shrink-0 p-3.5 sm:p-4 rounded-2xl bg-[#0B0F17]/90 hover:bg-[#111827] transition-all duration-300 border border-white/10 ${p.border} flex items-center gap-3.5 shadow-md hover:-translate-y-1 hover:shadow-xl group cursor-pointer`}
            >
              <div className="w-11 h-11 rounded-xl bg-[#080B11] border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <span className={`material-symbols-outlined text-[24px] ${p.color}`}>
                  {p.icon}
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-display font-bold text-sm text-white truncate group-hover:text-[#22d3ee] transition-colors">
                  {p.name}
                </span>
                <span className="font-mono text-[11px] text-slate-400 truncate">
                  {p.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Right to Left (Average Timer: ~32s slight organic offset) */}
        <div className="animate-marquee-left-alt flex items-center gap-4">
          {row2Doubled.map((p, i) => (
            <div
              key={`row2-${i}`}
              className={`w-[270px] sm:w-[290px] shrink-0 p-3.5 sm:p-4 rounded-2xl bg-[#0B0F17]/90 hover:bg-[#111827] transition-all duration-300 border border-white/10 ${p.border} flex items-center gap-3.5 shadow-md hover:-translate-y-1 hover:shadow-xl group cursor-pointer`}
            >
              <div className="w-11 h-11 rounded-xl bg-[#080B11] border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <span className={`material-symbols-outlined text-[24px] ${p.color}`}>
                  {p.icon}
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-display font-bold text-sm text-white truncate group-hover:text-[#22d3ee] transition-colors">
                  {p.name}
                </span>
                <span className="font-mono text-[11px] text-slate-400 truncate">
                  {p.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

