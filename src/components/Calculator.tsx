import React, { useState } from "react";

export const Calculator: React.FC = () => {
  const [hours, setHours] = useState<number>(15);

  // Hourly rate: $30/hr, 4 weeks/month
  const monthlySavings = hours * 30 * 4;
  const annualSavings = monthlySavings * 12;

  // Dynamic Tier calculation
  const getTier = (h: number) => {
    if (h <= 10) {
      return {
        cost: "$450 Fixed POC",
        name: "Tier 1: Starter Bot & Webhook",
        desc: "24/7 FAQ Chatbot + Google Sheets live logging.",
      };
    } else if (h <= 25) {
      return {
        cost: "$650 Fixed POC",
        name: "Tier 2: Growth Automation Suite",
        desc: "VoiceFlow WhatsApp Bot + n8n Webhook Sync + Live Spreadsheet Auditing.",
      };
    } else {
      return {
        cost: "$1,200 Full System",
        name: "Tier 3: Enterprise Autonomous Agent",
        desc: "Multi-step ReAct LangChain agent + vector database RAG + CRM 2-way sync.",
      };
    }
  };

  const currentTier = getTier(hours);

  return (
    <section
      className="w-full rounded-3xl bg-surface-container-low/80 backdrop-blur-xl p-space-xl lg:p-space-2xl shadow-2xl relative overflow-hidden flex flex-col gap-space-xl border border-outline-variant/30"
      id="roi-calculator"
    >
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col gap-space-xs max-w-2xl">
        <div className="inline-flex items-center gap-1.5 text-primary font-code-terminal text-label-caps">
          <span className="material-symbols-outlined text-[14px]">calculate</span>
          <span>ENTERPRISE METRIC GENERATOR</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold">
          Estimate Your Monthly Automation Savings
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Move the slider to estimate how many manual hours your staff spends weekly answering repetitive inquiries, routing leads, and copying data between tools.
        </p>
      </div>

      {/* Interactive Calculator Body Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        {/* Slider Input Controls (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-space-lg">
          <div className="flex items-center justify-between">
            <span className="font-body-md text-body-md text-on-surface font-semibold">
              Hours Wasted Weekly on Repetitive Work:
            </span>
            <div className="px-space-md py-1.5 rounded-lg bg-surface-container-highest text-primary font-code-terminal text-headline-sm font-bold shadow-inner border border-outline-variant/30">
              <span>{hours}</span> hrs / week
            </div>
          </div>

          {/* Range Slider */}
          <input
            className="w-full h-2.5 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
            max="60"
            min="5"
            step="1"
            type="range"
            value={hours}
            onChange={(e) => setHours(parseInt(e.target.value, 10))}
          />

          {/* Scale Anchors */}
          <div className="flex justify-between font-code-terminal text-[11px] text-on-surface-variant">
            <span>5 hrs (Small Team)</span>
            <span>20 hrs (Growing Agency)</span>
            <span>40 hrs (Full-Time Equivalent)</span>
            <span>60 hrs (High-Volume Ops)</span>
          </div>

          {/* Formula Context Box */}
          <div className="p-space-md rounded-xl bg-surface-container/40 flex items-center gap-space-sm text-on-surface-variant font-code-terminal text-body-sm border border-outline-variant/20">
            <span className="material-symbols-outlined text-secondary text-[22px]">info</span>
            <span>Based on conservative $30/hr blended labor cost + 30% reduction in lead leakage.</span>
          </div>
        </div>

        {/* Calculated Savings Result Card (5 Cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-surface-container p-space-lg shadow-xl flex flex-col gap-space-md border border-outline-variant/30">
          <div className="flex items-center justify-between pb-space-xs border-b border-surface-container-highest/40">
            <span className="font-code-terminal text-label-caps text-on-surface-variant">
              FINANCIAL IMPACT DELTA
            </span>
            <span className="font-code-terminal text-label-caps text-primary uppercase font-bold">
              Calculated in Real-Time
            </span>
          </div>

          {/* Monthly Recovered */}
          <div className="flex flex-col">
            <span className="font-code-terminal text-body-sm text-on-surface-variant">
              Monthly Labor Recovered:
            </span>
            <span className="font-metric-huge text-metric-huge text-primary leading-tight font-bold">
              ${monthlySavings.toLocaleString()}{" "}
              <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">
                USD / mo
              </span>
            </span>
          </div>

          {/* Annualized Value */}
          <div className="flex flex-col">
            <span className="font-code-terminal text-body-sm text-on-surface-variant">
              Annualized Recovered Value:
            </span>
            <span className="font-headline-md text-headline-md text-secondary font-bold">
              ${annualSavings.toLocaleString()}{" "}
              <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">
                USD / yr
              </span>
            </span>
          </div>

          {/* Recommended System Tier */}
          <div className="p-space-md rounded-xl bg-surface-container-highest/60 flex flex-col gap-1 mt-space-xs border border-outline-variant/30">
            <div className="flex items-center justify-between">
              <span className="font-code-terminal text-label-caps text-tertiary font-bold">
                SUGGESTED DEPLOYMENT
              </span>
              <span className="font-code-terminal text-body-sm font-bold text-on-surface">
                {currentTier.cost}
              </span>
            </div>
            <span className="font-body-sm text-body-sm text-on-surface font-semibold">
              {currentTier.name}
            </span>
            <p className="font-code-terminal text-[11px] text-on-surface-variant">
              {currentTier.desc}
            </p>
          </div>

          {/* Lock in Price CTA */}
          <a
            className="w-full py-3 rounded-xl bg-primary text-on-primary font-code-terminal text-body-sm font-bold text-center hover:bg-primary-container transition-all shadow-lg flex items-center justify-center gap-1"
            href="#demo-form"
          >
            <span>Lock in This ROI Architecture</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};
