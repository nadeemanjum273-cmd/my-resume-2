import React, { useState } from "react";
import { Video } from "lucide-react";
import SurveillanceDemoDock from "./SurveillanceDemoDock";

export type ProjectDemoId = "campus-ai" | "farm-security";

interface Project {
  id: string;
  category: string[];
  tag: string;
  type: string;
  title: string;
  description: string;
  roi: string;
  stack: string;
  fullOverview: string;
  deliverables: string[];
  techTags: string[];
  githubUrl?: string;
  demoPath?: string;
}

interface ProjectsProps {
  navigateTo?: (path: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ navigateTo }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleNavigate = (path: string) => {
    if (navigateTo) {
      navigateTo(path);
    } else {
      window.location.href = path;
    }
  };

  const handleDemoNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    handleNavigate(path);
  };

  const projects: Project[] = [
    {
      id: "eduguard-campus-ai",
      category: ["agent", "ml", "automation"],
      tag: "CCTV AI + Excel & Supabase Sync",
      type: "COMPUTER VISION",
      title: "EduGuard AI: Smart Campus & Exam Surveillance",
      description:
        "Transforms campus CCTV cameras into an automated intelligence suite covering Parking Detection, Classroom Whiteboard Tracking, and Exam Hall Anti-Cheating Excel logs.",
      roi: "Verified ROI: 98.4% Detection & Live Excel Sync",
      stack: "Computer Vision • Supabase...",
      fullOverview:
        "Production-ready smart campus and exam surveillance platform built for universities, colleges, and schools. Connects to existing IP/CCTV feeds to automate gate parking logs, student attendance and teacher whiteboard tracking, and real-time exam hall anti-cheating incident logging synced directly to Excel and Supabase.",
      deliverables: [
        "Smart Parking Detection logging vehicle entries, exits, and unauthorized parking at campus gates",
        "Classroom & Whiteboard AI tracking automated student attendance and verifying teacher lecture activity",
        "Exam Hall Anti-Cheating detection flagging suspicious head-turns and paper sharing with instant alerts",
        "Automated CSV/Excel and Supabase live database synchronization with searchable zone log explorer",
      ],
      techTags: ["Computer Vision", "React", "TypeScript", "Supabase", "Excel / CSV Sync", "CCTV IP Feeds"],
      demoPath: "/demo/campus-ai",
    },
    {
      id: "farm-security-ai",
      category: ["agent", "ml", "automation"],
      tag: "Zero False-Alarm + Excel Sync",
      type: "COMPUTER VISION",
      title: "Smart Commercial, Home & Animal Farm AI Security",
      description:
        "Logs Chaki gate unloading (Gattu), animal carts, livestock zones, and home gate entries into Excel while filtering out insects, spiders, leaves, birds, and stray cats.",
      roi: "Verified ROI: 0 False-Alarm Excel Entries",
      stack: "Computer Vision • Excel Sync...",
      fullOverview:
        "Precision computer vision security suite engineered for real-world rural, commercial, and residential sites including flour mills (Chaki), animal farms, and private homes. Eliminates 200+ daily motion-camera false alarms by filtering out locusts, spiders, wind-blown foliage, birds, and stray cats while logging verified gate and livestock events directly to Excel.",
      deliverables: [
        "Commercial Chaki Gate tracking for flour sack unloading (Gattu) and animal cart arrivals",
        "Animal Farm zone monitoring for cattle/livestock movement and caretaker shed entry rules",
        "Noise-rejection filter ignoring insects, spiders on camera lenses, moving leaves, and stray animals",
        "Verified Excel (.CSV) log explorer split across Chaki Gate, Animal Farm, and Home Entrance zones",
      ],
      techTags: ["Computer Vision", "False-Alarm Filtering", "React", "TypeScript", "Excel / CSV Sync", "CCTV IP Feeds"],
      demoPath: "/demo/farm-security",
    },
    {
      id: "mind-dreams",
      category: ["agent", "chatbot"],
      tag: "Gemini Powered + RAG Vector Index",
      type: "AGENT",
      title: "Mind_Dreams AI Customer Support",
      description:
        "Autonomous 24/7 customer support agent indexing company policy with Google Gemini and 3-way real-time Google Sheets sync for orders, refund eligibility, and bank payout logging.",
      roi: "Verified ROI: 100% Policy Compliance & Live Sync",
      stack: "Next.js 14 • Google Gemi...",
      fullOverview:
        "Production-grade 24/7 AI customer support ecosystem built with Google Gemini and Next.js 14. Automatically indexes company policies and runs real-time 3-way Google Sheets synchronization for automated order status lookups, refund policy eligibility calculations, and audit-logged operations.",
      deliverables: [
        "Google Gemini 1.5 API with contextual prompt grounding and strict business policy guardrails",
        "Live 3-way Google Sheets database synchronization eliminating recurring third-party SaaS fees",
        "Semantic RAG policy engine with vector search across shipping terms and return FAQs",
        "Automated human escalation triggers for edge cases requiring staff intervention",
      ],
      techTags: ["Next.js 14", "Google Gemini AI", "LangChain RAG", "Google Sheets API v4", "Tailwind CSS"],
      githubUrl: "https://github.com/nadeemanjum273-cmd/Mind_Dream-Agent",
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
      fullOverview:
        "Omnichannel 24/7 lead qualification chatbot deployed across custom web widgets and the official WhatsApp Cloud API. Engages inbound traffic 24 hours a day, qualifies prospect budgets and project timelines, and synchronizes bookings directly into Google Calendar.",
      deliverables: [
        "Official Meta WhatsApp Business Cloud API webhook integration with real-time response dispatch",
        "Conversational qualification funnel capturing budget, urgency, and bottleneck details",
        "Two-way Google Calendar integration with automatic meeting confirmations and reminder triggers",
        "Real-time instant alert dispatch to sales teams via Telegram and Slack webhooks",
      ],
      techTags: ["Voiceflow", "WhatsApp Cloud API", "OpenAI GPT-4o", "Google Calendar API", "Webhooks"],
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
      fullOverview:
        "High-velocity event-driven n8n automation pipeline capturing inbound ad leads from Meta, Google Ads, and custom webhooks. Executes instant GPT intent scoring, dedupes records, and orchestrates zero-latency lead routing to CRM tables in under 500 milliseconds.",
      deliverables: [
        "Self-hosted n8n instance delivering 99.9% uptime with zero recurring per-execution platform fees",
        "Webhook ingress validation with automatic retry logic and dead-letter queue error handling",
        "GPT-powered intent grading sorting prospects into warm, hot, and nurture sales sequences",
        "Direct bidirectional sync to Google Sheets and CRM databases with instant sales Slack pings",
      ],
      techTags: ["n8n Workflows", "REST Webhooks", "Google Sheets API", "Slack Webhooks", "PostgreSQL"],
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
      fullOverview:
        "Autonomous ecommerce support agent running on a multi-step ReAct (Reasoning + Acting) loop. Directly interfaces with Shopify Admin REST & GraphQL APIs to independently resolve order tracking requests, validate return eligibility windows, and issue return labels.",
      deliverables: [
        "LangChain ReAct autonomous agent capable of multi-step API tool selection and execution",
        "Real-time Shopify fulfillment, inventory, and order status lookups via GraphQL",
        "Automated refund eligibility validation against timestamped purchase records and policy rules",
        "Reduces first-touch ticket load by 60% with full audit trails logged for store admins",
      ],
      techTags: ["Python", "LangChain", "Shopify GraphQL API", "FastAPI", "Docker"],
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
      fullOverview:
        "Enterprise document intelligence engine powered by ChromaDB vector storage and semantic embeddings. Ingests dense compliance manuals, PDF policies, and technical handbooks, returning sub-3-second cited answers with page numbers and exact quotes.",
      deliverables: [
        "Recursive character splitting preserving contextual semantic chunk boundaries",
        "High-performance ChromaDB vector database index for zero-latency semantic retrieval",
        "Strict citation grounding ensuring every sentence links back to an exact source page number",
        "Contextual compression layer eliminating hallucinations on complex technical queries",
      ],
      techTags: ["ChromaDB", "OpenAI text-embedding-3", "Python", "LangChain", "Streamlit"],
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
      fullOverview:
        "A high-precision predictive machine learning pipeline integrated with a responsive Streamlit analytics dashboard. Trained on multi-feature customer telemetric data including login frequency, seat utilization decay, support ticket escalation rates, and billing cycles to accurately forecast client churn up to 30 days before contract cancellation.",
      deliverables: [
        "Trained supervised Decision Tree and KNN Classification algorithms achieving 89.4% precision on at-risk profiles",
        "Engineered automated data preprocessing, outlier clipping, and missing telemetry imputation pipelines",
        "Built interactive feature importance charts identifying the primary leading indicators of account abandonment",
        "Configured automated alert notifications to export daily prioritized accounts directly to customer success sheets",
      ],
      techTags: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Streamlit", "Matplotlib", "ROC-AUC Validation"],
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

      {/* Featured AI Smart Surveillance Showcase Card */}
      <div className="group/showcase relative overflow-hidden rounded-3xl bg-slate-900/60 backdrop-blur-md border border-white/10 p-6 sm:p-8 transition-all duration-500 hover:border-white/20">
        {/* Soft Ambient Gradient Glow on Hover */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-1 opacity-0 group-hover/showcase:opacity-100 transition-opacity duration-500 bg-[radial-gradient(650px_circle_at_25%_0%,rgba(34,211,238,0.14),transparent_55%),radial-gradient(650px_circle_at_85%_100%,rgba(52,211,153,0.14),transparent_55%)]"
        />

        <div className="relative z-10 flex flex-col gap-6">
          {/* Sleek Live Interactive Demos Label Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/35 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-300 shadow-[0_0_16px_rgba(52,211,153,0.2)]">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                LIVE DEMOS
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-300">
                <Video className="h-3.5 w-3.5 text-cyan-400" />
                Live Interactive Demos &bull; Computer Vision Suite
              </span>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
              CCTV AI &bull; Real-Time Excel Sync
            </span>
          </div>

          <div className="flex flex-col gap-2 max-w-3xl">
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight">
              AI Smart Surveillance &amp; Automated Excel Logging
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              Launch our interactive surveillance sandboxes directly from the home screen—inspect live detection logs, zone filters, false-alarm rejection, and one-click CSV/Excel exports.
            </p>
          </div>

          {/* Dual Sleek Interactive Demo Launch Dock */}
          <SurveillanceDemoDock onNavigate={handleNavigate} />
        </div>
      </div>

      {/* 3-Column Grid of Cards: Exact Match to Screenshot with Shining Edges */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <div
            key={p.id}
            onClick={() => setSelectedProject(p)}
            className="shining-card p-6 flex flex-col justify-between group cursor-pointer hover:border-[#22d3ee]/60 transition-all duration-300"
          >
            <div className="flex flex-col gap-4 relative z-10">
              {/* Category Pill and Type Tag */}
              <div className="flex items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono text-[#22d3ee] border border-[#22d3ee]/40 bg-[#22d3ee]/10 shadow-[0_0_12px_rgba(34,211,238,0.2)] truncate max-w-[210px] font-medium">
                  {p.tag}
                </span>
                <span className="text-[11px] font-mono text-slate-400 shrink-0 font-semibold tracking-wider">
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

            <div className="flex flex-col gap-4 pt-6 relative z-10">
              {/* Verified ROI Badge with Glowing Emerald Border */}
              <div className="p-2.5 rounded-xl bg-[#080B11]/90 border border-emerald-400/50 shadow-[0_0_14px_rgba(52,211,153,0.2)] text-emerald-400 font-mono text-xs flex items-center gap-2 group-hover:border-emerald-400 transition-colors">
                <span className="material-symbols-outlined text-[16px] text-emerald-400 shrink-0">
                  check_circle
                </span>
                <span className="font-semibold">{p.roi}</span>
              </div>

              {/* Stack & Details / Live Demo Buttons */}
              <div className="flex items-center justify-between gap-2 font-mono text-xs text-slate-400 pt-1 border-t border-white/10">
                <span className="truncate max-w-[140px]">{p.stack}</span>
                <div className="flex items-center gap-3 shrink-0">
                  {p.demoPath && (
                    <a
                      href={p.demoPath}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDemoNavigation(e, p.demoPath!);
                      }}
                      className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-400 hover:bg-emerald-500/25 font-bold transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(p);
                    }}
                    className="text-[#22d3ee] hover:text-[#38bdf8] hover:underline flex items-center gap-1 font-bold group-hover:translate-x-1 transition-transform shrink-0"
                  >
                    <span>Details</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080B11]/85 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0B0F17] border border-[#22d3ee]/40 shadow-[0_0_50px_rgba(34,211,238,0.25)] p-6 sm:p-8 flex flex-col gap-6 relative text-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono text-[#22d3ee] border border-[#22d3ee]/40 bg-[#22d3ee]/10 font-medium">
                    {selectedProject.tag}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 font-semibold tracking-wider uppercase">
                    {selectedProject.type}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors shrink-0"
                aria-label="Close details"
              >
                <span className="material-symbols-outlined text-[20px] block">close</span>
              </button>
            </div>

            {/* In-depth Overview */}
            <div className="flex flex-col gap-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#22d3ee] font-bold">
                System Architecture &amp; Overview
              </h4>
              <p className="text-slate-200 text-sm leading-relaxed font-sans">
                {selectedProject.fullOverview}
              </p>
            </div>

            {/* Key Deliverables & Technical Highlights */}
            {selectedProject.deliverables && (
              <div className="flex flex-col gap-2.5">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#22d3ee] font-bold">
                  Core Implementation Highlights
                </h4>
                <div className="flex flex-col gap-2">
                  {selectedProject.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="text-emerald-400 text-sm mt-0.5 shrink-0">✦</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Verified ROI Badge */}
            <div className="p-3.5 rounded-2xl bg-[#080B11] border border-emerald-400/50 shadow-[0_0_18px_rgba(52,211,153,0.15)] flex items-center gap-3">
              <span className="material-symbols-outlined text-emerald-400 text-[22px] shrink-0">
                check_circle
              </span>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Performance &amp; ROI Metric
                </span>
                <span className="text-emerald-400 font-mono font-bold text-xs sm:text-sm">
                  {selectedProject.roi}
                </span>
              </div>
            </div>

            {/* Tech Stack Chips */}
            {selectedProject.techTags && (
              <div className="flex flex-col gap-2">
                <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold">
                  Production Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techTags.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-[#080B11] border border-white/10 font-mono text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 border-t border-white/10">
              {selectedProject.demoPath && (
                <a
                  href={selectedProject.demoPath}
                  onClick={(e) => {
                    const demoPath = selectedProject.demoPath!;
                    setSelectedProject(null);
                    handleDemoNavigation(e, demoPath);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-400/50 font-mono text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">play_circle</span>
                  <span>Launch Interactive Demo</span>
                  <span>&rarr;</span>
                </a>
              )}

              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#080B11] hover:bg-white/10 text-[#22d3ee] border border-[#22d3ee]/40 font-mono text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">terminal</span>
                  <span>View GitHub Repository</span>
                  <span>↗</span>
                </a>
              )}

              <a
                href="#demo-form"
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto flex-1 py-2.5 px-5 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#38bdf8] hover:from-[#38bdf8] hover:to-[#22d3ee] text-[#080B11] font-mono text-xs font-bold uppercase tracking-wider text-center transition-all shadow-[0_0_20px_rgba(34,211,238,0.35)] flex items-center justify-center gap-2"
              >
                <span>Request Similar Custom Build</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
