import React from "react";

export const Skills: React.FC = () => {
  const platforms = [
    { name: "Python", role: "Data & ML Engine", icon: "terminal", color: "text-[#38bdf8]" },
    { name: "LangChain", role: "Agentic Workflows", icon: "hub", color: "text-[#22d3ee]" },
    { name: "Next.js 14", role: "Fullstack UI & SSR", icon: "layers", color: "text-white" },
    { name: "Gemini Pro", role: "LLM Inference & Context", icon: "auto_awesome", color: "text-[#38bdf8]" },
    { name: "OpenAI GPT-4o", role: "Reasoning & JSON Mode", icon: "neurology", color: "text-[#22d3ee]" },
    { name: "n8n Automation", role: "Webhook & API Pipelines", icon: "alt_route", color: "text-[#c084fc]" },
    { name: "Voiceflow", role: "Conversational Flow UX", icon: "graphic_eq", color: "text-[#38bdf8]" },
    { name: "ChromaDB", role: "Vector Knowledge RAG", icon: "database", color: "text-[#22d3ee]" },
    { name: "Scikit-Learn", role: "Supervised / Trees / KNN", icon: "query_stats", color: "text-[#c084fc]" },
    { name: "Streamlit", role: "ML Portals & Demos", icon: "monitoring", color: "text-[#34d399]" },
    { name: "PostgreSQL & pgvector", role: "Hybrid SQL + Vector Store", icon: "storage", color: "text-[#38bdf8]" },
    { name: "WhatsApp Cloud API", role: "24/7 Lead Capture Engine", icon: "chat", color: "text-[#22d3ee]" },
    { name: "Pandas & NumPy", role: "High-Throughput Pipelines", icon: "data_array", color: "text-[#38bdf8]" },
    { name: "Google Sheets API", role: "2-Way Live Sync & Auditing", icon: "table_chart", color: "text-[#22d3ee]" },
    { name: "Docker Containers", role: "Isolated Microservices", icon: "deployed_code", color: "text-[#38bdf8]" },
    { name: "GitHub CI/CD", role: "Automated Quality Tests", icon: "sync_alt", color: "text-[#c084fc]" },
  ];

  return (
    <section className="w-full flex flex-col gap-6" id="tech-arsenal">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
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
          <span className="w-2 h-2 rounded-full bg-[#22d3ee]"></span>
          <span>16 PRODUCTION PLATFORMS</span>
        </div>
      </div>

      {/* 4x4 Modern Bento Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {platforms.map((p, i) => (
          <div
            key={i}
            className="group p-4 rounded-2xl bg-[#0B0F17]/90 hover:bg-white/5 transition-all duration-300 border border-white/10 hover:border-[#22d3ee]/40 flex items-center gap-3.5 shadow-md hover:-translate-y-0.5"
          >
            <div className="w-11 h-11 rounded-xl bg-[#080B11] border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
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
    </section>
  );
};
