import React from "react";
import { 
  Sparkles, 
  Layers, 
  Cpu, 
  Workflow, 
  Code2, 
  Bot, 
  Database, 
  CheckCircle2, 
  ExternalLink,
  Zap,
  Server,
  Terminal
} from "lucide-react";

export const Skills: React.FC = () => {
  const tools = [
    {
      name: "Next.js 14 / React",
      category: "Frontend & UI/UX",
      desc: "App Router, Server Components & High-Speed SSR",
      tag: "Production",
      color: "bg-black text-white",
      badge: "Core",
    },
    {
      name: "Tailwind CSS & Framer",
      category: "Styling & Motion",
      desc: "Pixel-perfect micro-animations & responsive glassmorphism",
      tag: "Design System",
      color: "bg-teal-600 text-white",
      badge: "UI/UX",
    },
    {
      name: "Google Gemini & OpenAI",
      category: "Generative AI",
      desc: "Function Calling, Multi-modal Agents & RAG Vector Pipelines",
      tag: "LLMs",
      color: "bg-emerald-600 text-white",
      badge: "AI Core",
    },
    {
      name: "n8n Workflow Engine",
      category: "Automation",
      desc: "Multi-node webhooks, CRM sync & real-time alerts",
      tag: "Autonomous",
      color: "bg-rose-600 text-white",
      badge: "Zero-Latency",
    },
    {
      name: "Python ML & Scikit-Learn",
      category: "Data Science",
      desc: "Supervised models, Pandas, NumPy & ROC-AUC validation",
      tag: "Data Science",
      color: "bg-blue-600 text-white",
      badge: "Foundations",
    },
    {
      name: "LangChain & ChromaDB",
      category: "Agent Swarms",
      desc: "Hybrid retrieval, chunking policies & sub-3s citations",
      tag: "Embeddings",
      color: "bg-purple-600 text-white",
      badge: "RAG Engine",
    },
    {
      name: "WhatsApp Cloud API",
      category: "Omnichannel",
      desc: "Automated 24/7 lead concierge & webhook verification",
      tag: "Meta API",
      color: "bg-green-600 text-white",
      badge: "+42% Conv",
    },
    {
      name: "Google Sheets & Apps Script",
      category: "Live Sync",
      desc: "Bidirectional CRM sync across orders and lead logs",
      tag: "Automation",
      color: "bg-emerald-700 text-white",
      badge: "Sync API",
    },
    {
      name: "FastAPI & REST Webhooks",
      category: "Backend Services",
      desc: "High-throughput asynchronous endpoints & payload parsing",
      tag: "Backend",
      color: "bg-amber-600 text-white",
      badge: "API",
    },
  ];

  return (
    <section id="tech-stack" className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20 bg-[#F8FAFC] text-slate-900 border-y border-slate-200 shadow-inner">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-mono font-bold tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>PRODUCTION-TESTED ARSENAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0F172A] tracking-tight">
            Industry-Standard Tools &amp; Frameworks{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
              Used Worldwide.
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
            Curated stack refined through advanced training at <strong className="text-emerald-700 font-bold">DataCrumb</strong> and deployed across real-world commercial client solutions.
          </p>
        </div>

        {/* 3x3 Elevated Minimalist White Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-white border border-slate-200/90 p-6 shadow-sm hover:shadow-xl hover:border-emerald-500/40 hover:-translate-y-1.5 transition-all duration-200 relative overflow-hidden"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold ${tool.color}`}>
                  {tool.tag}
                </span>

                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-mono font-semibold border border-slate-200">
                  {tool.badge}
                </span>
              </div>

              <h3 className="text-lg font-display font-extrabold text-[#0F172A] group-hover:text-emerald-700 transition-colors">
                {tool.name}
              </h3>

              <div className="text-xs font-mono text-emerald-600 font-semibold mb-2">
                {tool.category}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                {tool.desc}
              </p>

              {/* Bottom Subtle Indicator */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Enterprise-tested</span>
                </span>
                <span className="text-emerald-600 font-bold group-hover:translate-x-1 transition-transform">
                  Ready →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner within the Light Strip */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-[#0F172A] p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
              ✦ DataCrumb Methodology &amp; Engineering Standards
            </div>
            <h4 className="text-xl sm:text-2xl font-display font-bold">
              Need a Custom Production Architecture?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              From zero to working MVP in under 48 hours, fully containerized and handed over with 100% intellectual property rights.
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-display font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 shrink-0 transition-all hover:scale-105"
          >
            Request Free Blueprint
          </a>
        </div>
      </div>
    </section>
  );
};
