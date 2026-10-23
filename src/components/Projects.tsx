import React, { useState } from "react";

interface Project {
  id: string;
  category: string[];
  tag: string;
  type: string;
  title: string;
  description: string;
  roi: string;
  stack: string;
}

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects: Project[] = [
    {
      id: "mind-dreams",
      category: ["agent", "chatbot"],
      tag: "Gemini Powered + RAG Vector Index",
      type: "AGENT",
      title: "Mind_Dreams AI Customer Support & RAG Agent",
      description:
        "Autonomous 24/7 customer support agent indexing company policy with Google Gemini and 3-way real-time Google Sheets sync for orders, refund eligibility, and bank payout logging.",
      roi: "Verified ROI: 100% Policy Compliance & Live Sync",
      stack: "Next.js 14 • Google Gemi...",
    },
    {
      id: "omnilead",
      category: ["chatbot", "automation"],
      tag: "Voiceflow + WhatsApp Cloud API",
      type: "CHATBOT",
      title: "OmniLead 24/7 AI Concierge",
      description:
        "Trained on business FAQs and real-time calendars to qualify incoming leads and schedule consultations after hours.",
      roi: "Verified ROI: +42% After-Hours Conversion",
      stack: "Voiceflow • OpenAI GPT-4...",
    },
    {
      id: "lead-routing",
      category: ["automation"],
      tag: "n8n Webhook Pipeline",
      type: "AUTOMATION",
      title: "Zero-Latency Lead Routing Suite",
      description:
        "Captures ad leads instantly, runs GPT intent scoring, syncs to Google Sheets, and sends instant Slack/WhatsApp alerts.",
      roi: "Verified ROI: 14 hrs/week Saved per Rep",
      stack: "n8n • Webhooks...",
    },
    {
      id: "store-support",
      category: ["agent"],
      tag: "ReAct Multi-Step Loop + LangChain",
      type: "AGENT",
      title: "Autonomous Store Support Agent",
      description:
        "Resolves shipping tracking and return ticket requests autonomously via Shopify API with policy compliance verification.",
      roi: "Verified ROI: 60% First-Touch Resolution",
      stack: "Python • LangChain • Shopify...",
    },
    {
      id: "doc-rag",
      category: ["agent", "ml"],
      tag: "ChromaDB + Ada-002 Embeddings",
      type: "AGENT / RAG",
      title: "Document Intelligence RAG Engine",
      description:
        "Parses dense 300+ page enterprise compliance PDFs into vector embeddings with sub-3 second cited query responses.",
      roi: "Verified ROI: Sub-3s Cited Accuracy",
      stack: "ChromaDB • RecursiveSplitter...",
    },
    {
      id: "churn-scoring",
      category: ["ml"],
      tag: "Decision Trees & KNN Classifier",
      type: "MACHINE LEARNING",
      title: "Customer Churn & Lead Scoring Portal",
      description:
        "Analyzes usage telemetry to predict customer churn risks 30 days ahead using ROC-AUC optimized classification models.",
      roi: "Verified ROI: 89.4% Precision on At-Risk",
      stack: "Python • Scikit-Learn • Streamlit...",
    },
  ];

  const filterTabs = [
    { id: "all", label: "All Projects" },
    { id: "agent", label: "AI Agents" },
    { id: "chatbot", label: "Chatbots" },
    { id: "automation", label: "Automations" },
    { id: "ml", label: "Machine Learning" },
  ];

  const filtered = projects.filter(
    (p) => activeFilter === "all" || p.category.includes(activeFilter)
  );

  return (
    <section className="w-full flex flex-col gap-8" id="deployments">
      {/* Section Header with Title and Filter Tabs: Exact Match to Screenshot 5 */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
          Curated Production Deployments
        </h2>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-[#22d3ee] text-[#080B11] font-bold shadow-[0_0_16px_rgba(34,211,238,0.35)]"
                    : "bg-[#0B0F17] hover:bg-white/10 text-slate-300 border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3-Column Grid of Cards: Exact Match to Screenshot 5 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="rounded-2xl bg-[#0B0F17]/90 backdrop-blur-xl border border-white/10 p-6 flex flex-col justify-between shadow-xl hover:border-[#22d3ee]/40 transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="flex flex-col gap-4">
              {/* Category Pill and Type Tag */}
              <div className="flex items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono text-[#22d3ee] border border-[#22d3ee]/30 bg-[#22d3ee]/5 truncate max-w-[210px]">
                  {p.tag}
                </span>
                <span className="text-[11px] font-mono text-slate-400 shrink-0">
                  {p.type}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-display font-bold text-white group-hover:text-[#22d3ee] transition-colors leading-snug">
                  {p.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed font-sans">
                  {p.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-6">
              {/* Verified ROI Badge */}
              <div className="p-2.5 rounded-xl bg-[#080B11] border border-emerald-500/30 text-emerald-400 font-mono text-xs flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-emerald-400 shrink-0">
                  check_circle
                </span>
                <span className="font-semibold">{p.roi}</span>
              </div>

              {/* Stack & Details Link */}
              <div className="flex items-center justify-between font-mono text-xs text-slate-400 pt-1 border-t border-white/5">
                <span className="truncate max-w-[170px]">{p.stack}</span>
                <a
                  href="#demo-form"
                  className="text-[#22d3ee] hover:underline flex items-center gap-1 font-bold group-hover:translate-x-0.5 transition-transform shrink-0"
                >
                  <span>Details</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
