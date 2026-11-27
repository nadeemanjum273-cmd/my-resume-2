import React from "react";

interface SkillGroup {
  title: string;
  subtitle: string;
  icon: string;
  accentClass: string;
  badgeClass: string;
  tags: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Generative AI & LLMs",
    subtitle: "RAG pipelines, prompt grounding & conversational agents",
    icon: "auto_awesome",
    accentClass: "text-[#22d3ee]",
    badgeClass: "border-[#22d3ee]/30 bg-[#22d3ee]/10 text-[#22d3ee]",
    tags: ["Google Gemini", "OpenAI GPT-4o", "LangChain", "ChromaDB", "Vector RAG", "Voiceflow"],
  },
  {
    title: "Automation & n8n",
    subtitle: "Webhooks, CRM synchronization & messaging workflows",
    icon: "alt_route",
    accentClass: "text-[#c084fc]",
    badgeClass: "border-[#a855f7]/35 bg-[#a855f7]/10 text-[#c084fc]",
    tags: ["n8n Workflows", "REST Webhooks", "WhatsApp Cloud API", "Google Sheets API", "Google Apps Script"],
  },
  {
    title: "Data Science & ML",
    subtitle: "Supervised classification, vision & model evaluation",
    icon: "query_stats",
    accentClass: "text-[#34d399]",
    badgeClass: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
    tags: ["Python", "Scikit-Learn", "Pandas & NumPy", "Computer Vision", "ROC-AUC Validation", "Streamlit"],
  },
  {
    title: "Full-Stack & Databases",
    subtitle: "Interactive web apps, APIs & containerized deployment",
    icon: "layers",
    accentClass: "text-[#38bdf8]",
    badgeClass: "border-sky-400/30 bg-sky-500/10 text-sky-300",
    tags: ["React & TypeScript", "Next.js 14", "Tailwind CSS", "FastAPI", "PostgreSQL & Supabase", "Docker & Git"],
  },
];

export const Skills: React.FC = () => {
  return (
    <section className="w-full flex flex-col gap-6" id="tech-arsenal">
      {/* Header */}
      <div className="flex flex-col gap-1 px-1">
        <span className="font-mono text-xs uppercase tracking-widest text-[#22d3ee] font-bold">
          CORE STACK &amp; CAPABILITIES
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
          Technical Arsenal
        </h2>
        <p className="text-slate-300 text-sm max-w-2xl font-sans">
          Grouped frameworks, automation tools, vector storage, and machine learning libraries used across client and personal builds.
        </p>
      </div>

      {/* Grouped Skill Tag Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="shining-card p-5 sm:p-6 flex flex-col gap-4">
            <div className="flex items-start gap-3.5 relative z-10">
              <div className="w-11 h-11 rounded-xl bg-[#080B11] border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
                <span className={`material-symbols-outlined text-[24px] ${group.accentClass}`}>
                  {group.icon}
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <h3 className="font-display font-bold text-base sm:text-lg text-white">
                  {group.title}
                </h3>
                <p className="font-mono text-[11px] text-slate-400">{group.subtitle}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 relative z-10">
              {group.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-full border font-mono text-xs font-medium ${group.badgeClass}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
