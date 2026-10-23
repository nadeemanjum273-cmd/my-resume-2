import React from "react";

export const Skills: React.FC = () => {
  const platforms = [
    { name: "Python", role: "Data & ML Engine", icon: "terminal", iconColor: "text-secondary" },
    { name: "LangChain", role: "Agentic Workflows", icon: "hub", iconColor: "text-primary" },
    { name: "Next.js 14", role: "Fullstack UI & SSR", icon: "layers", iconColor: "text-on-surface" },
    { name: "Gemini Pro", role: "LLM Inference & Context", icon: "auto_awesome", iconColor: "text-secondary-container" },
    { name: "OpenAI GPT-4o", role: "Reasoning & JSON Mode", icon: "neurology", iconColor: "text-primary" },
    { name: "n8n Automation", role: "Webhook & API Pipelines", icon: "alt_route", iconColor: "text-tertiary" },
    { name: "VoiceFlow", role: "Conversational Flow UX", icon: "graphic_eq", iconColor: "text-secondary" },
    { name: "ChromaDB", role: "Vector Knowledge RAG", icon: "database", iconColor: "text-primary" },
    { name: "Scikit-Learn", role: "Supervised / Trees / KNN", icon: "query_stats", iconColor: "text-tertiary" },
    { name: "Streamlit", role: "ML Portals & Demos", icon: "monitoring", iconColor: "text-primary-fixed" },
    { name: "PostgreSQL & pgvector", role: "Hybrid SQL + Vector Store", icon: "storage", iconColor: "text-secondary" },
    { name: "WhatsApp Cloud API", role: "24/7 Lead Capture Engine", icon: "chat", iconColor: "text-primary" },
    { name: "Pandas & NumPy", role: "High-Throughput Pipelines", icon: "data_array", iconColor: "text-secondary" },
    { name: "Google Sheets API", role: "2-Way Live Sync & Auditing", icon: "table_chart", iconColor: "text-primary" },
    { name: "Docker Containers", role: "Isolated Microservices", icon: "deployed_code", iconColor: "text-secondary-container" },
    { name: "GitHub CI/CD", role: "Automated Quality Tests", icon: "sync_alt", iconColor: "text-tertiary" },
  ];

  return (
    <section className="w-full flex flex-col gap-space-xl" id="tech-arsenal">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
        <div className="flex flex-col gap-space-xs">
          <span className="font-code-terminal text-label-caps uppercase tracking-widest text-primary">
            CURRICULUM &amp; STACK
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold">
            Technologies &amp; Systems Mastered
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            Industry-grade frameworks, orchestration runtimes, vector storage, and machine learning libraries powering automated client pipelines.
          </p>
        </div>
        <div className="flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container text-on-surface-variant font-code-terminal text-label-caps border border-outline-variant/30">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          <span>16 PRODUCTION PLATFORMS</span>
        </div>
      </div>

      {/* 4x4 Modern Bento Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-space-md">
        {platforms.map((p, i) => (
          <div
            key={i}
            className="group p-space-md rounded-xl bg-surface-container/50 hover:bg-surface-container-high/80 transition-all duration-300 shadow-md border border-outline-variant/20 flex items-center gap-space-md hover:-translate-y-0.5 hover:border-primary/40"
          >
            <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm">
              <span className={`material-symbols-outlined text-[28px] ${p.iconColor}`}>
                {p.icon}
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-headline-sm text-body-lg font-bold text-on-surface truncate group-hover:text-primary transition-colors">
                {p.name}
              </span>
              <span className="font-code-terminal text-body-sm text-on-surface-variant truncate">
                {p.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
