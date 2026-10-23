import React, { useState } from "react";

interface Project {
  id: string;
  category: string[];
  tag: string;
  tagColor: string;
  type: string;
  title: string;
  description: string;
  roi: string;
  roiIcon: string;
  stack: string;
}

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const projects: Project[] = [
    {
      id: "mind-dreams",
      category: ["agent", "chatbot"],
      tag: "GEMINI + RAG INDEX",
      tagColor: "bg-secondary/10 text-secondary border border-secondary/20",
      type: "AGENT",
      title: "Mind_Dreams Customer Support & RAG Agent",
      description:
        "Autonomous 24/7 customer support agent indexing company policy with Google Gemini and 3-way Google Sheets sync for orders, refunds, and bank payout tracking.",
      roi: "VERIFIED ROI: 100% Policy Compliance & Live Sync",
      roiIcon: "verified",
      stack: "Next.js 14 • Google Gemini",
    },
    {
      id: "omnilead",
      category: ["chatbot", "automation"],
      tag: "VOICEFLOW + WHATSAPP",
      tagColor: "bg-primary/10 text-primary border border-primary/20",
      type: "CHATBOT",
      title: "OmniLead 24/7 AI Sales Concierge",
      description:
        "Trained on business FAQs and real-time calendars to qualify incoming leads on WhatsApp and schedule consultations after hours without human staff.",
      roi: "VERIFIED ROI: +42% After-Hours Conversion Rate",
      roiIcon: "trending_up",
      stack: "VoiceFlow • WhatsApp API",
    },
    {
      id: "lead-routing",
      category: ["automation"],
      tag: "N8N WEBHOOK PIPELINE",
      tagColor: "bg-tertiary/10 text-tertiary border border-tertiary/20",
      type: "AUTOMATION",
      title: "Zero-Latency Lead Routing Suite",
      description:
        "Captures ad leads instantly, runs GPT intent scoring, syncs to Google Sheets and CRM, and sends instant Slack/WhatsApp notifications to designated reps.",
      roi: "VERIFIED ROI: 14 hrs/week Saved Per Sales Rep",
      roiIcon: "schedule",
      stack: "n8n • Webhooks • Slack API",
    },
    {
      id: "store-support",
      category: ["agent"],
      tag: "REACT MULTI-STEP LOOP",
      tagColor: "bg-secondary/10 text-secondary border border-secondary/20",
      type: "AGENT",
      title: "Autonomous Store Support Agent",
      description:
        "Resolves shipping tracking and return ticket requests autonomously via Shopify API with policy compliance verification and automated ticket resolution.",
      roi: "VERIFIED ROI: 60% First-Touch Resolution",
      roiIcon: "task_alt",
      stack: "Python • LangChain • Shopify",
    },
    {
      id: "doc-rag",
      category: ["agent", "ml"],
      tag: "CHROMADB + EMBEDDINGS",
      tagColor: "bg-primary-fixed/20 text-primary-fixed border border-primary-fixed/30",
      type: "AGENT / RAG",
      title: "Document Intelligence RAG Engine",
      description:
        "Parses dense 300+ page enterprise compliance PDFs into vector embeddings with sub-3 second cited query responses and zero hallucination boundaries.",
      roi: "VERIFIED ROI: Sub-3s Cited Accuracy",
      roiIcon: "speed",
      stack: "ChromaDB • RecursiveSplitter",
    },
    {
      id: "churn-scoring",
      category: ["ml"],
      tag: "DECISION TREES & KNN",
      tagColor: "bg-tertiary/10 text-tertiary border border-tertiary/20",
      type: "MACHINE LEARNING",
      title: "Customer Churn & Lead Scoring Portal",
      description:
        "Analyzes usage telemetry to predict customer churn risks 30 days ahead using ROC-AUC optimized classification models deployed on Streamlit.",
      roi: "VERIFIED ROI: 89.4% Precision on At-Risk",
      roiIcon: "query_stats",
      stack: "Python • Scikit-Learn • Streamlit",
    },
  ];

  const filterTabs = [
    { id: "all", label: "All (6)" },
    { id: "agent", label: "AI Agents (3)" },
    { id: "chatbot", label: "Chatbots (2)" },
    { id: "automation", label: "Automations (2)" },
    { id: "ml", label: "ML & Data (2)" },
  ];

  const filteredProjects = projects.filter(
    (p) => selectedCategory === "all" || p.category.includes(selectedCategory)
  );

  return (
    <section className="w-full flex flex-col gap-space-xl" id="deployments">
      {/* Section Title & Dynamic Filter Pills */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
        <div className="flex flex-col gap-space-xs">
          <div className="inline-flex items-center gap-1 text-primary font-code-terminal text-label-caps">
            <span className="material-symbols-outlined text-[14px]">verified</span>
            <span>CURATED CLIENT DELIVERABLES</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold">
            Curated Production Deployments
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            Real enterprise pipelines engineered for measurable ROI, zero downtime, and seamless automated handoffs.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface-container-low overflow-x-auto border border-outline-variant/30">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`filter-btn px-space-md py-1.5 rounded-lg font-code-terminal text-label-caps transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-primary-container text-on-primary-container font-semibold shadow-sm"
                    : "text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2x3 Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            className="project-card flex flex-col justify-between rounded-2xl bg-surface-container/60 hover:bg-surface-container/90 transition-all duration-300 p-space-lg shadow-xl group border border-outline-variant/30 hover:border-primary/40 hover:-translate-y-1"
          >
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className={`px-space-sm py-1 rounded font-code-terminal text-label-caps ${p.tagColor}`}>
                  {p.tag}
                </span>
                <span className="font-code-terminal text-[11px] text-on-surface-variant">
                  {p.type}
                </span>
              </div>
              <div className="flex flex-col gap-space-xs">
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-space-md pt-space-lg">
              <div className="p-space-sm rounded-lg bg-surface-container-lowest flex items-center gap-space-xs border border-outline-variant/20">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  {p.roiIcon}
                </span>
                <span className="font-code-terminal text-label-caps text-primary">
                  {p.roi}
                </span>
              </div>
              <div className="flex items-center justify-between font-code-terminal text-body-sm text-on-surface-variant pt-1 border-t border-surface-container-highest/40">
                <span>{p.stack}</span>
                <a
                  className="text-primary hover:underline flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform"
                  href="#demo-form"
                >
                  <span>Details</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
