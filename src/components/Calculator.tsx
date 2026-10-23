import React, { useState } from "react";

export const Calculator: React.FC = () => {
  const [hours, setHours] = useState<number>(15);

  const monthlySavings = hours * 30 * 4;
  const annualSavings = monthlySavings * 12;

  // Dynamic package details based on slider
  const getPackageInfo = (h: number) => {
    if (h <= 10) {
      return {
        badge: "STARTER",
        price: "$450",
        name: "Tier 1: Essential Chatbot Suite",
        desc: "24/7 web inquiry capture bot with automatic Google Sheets logging and alert dispatch.",
        features: [
          "24/7 Web FAQ AI Concierge",
          "Google Sheets Real-Time Sync",
          "Instant Email & Telegram Notifications",
        ],
      };
    } else if (h <= 25) {
      return {
        badge: "MOST POPULAR",
        price: "$650",
        name: "Tier 2: Growth Automation Suite",
        desc: "Our high-ROI package: Web + WhatsApp Cloud bot with automatic CRM sync and real-time calendar booking.",
        features: [
          "Web + WhatsApp AI Concierge",
          "n8n Webhook CRM Sync (Sheets/HubSpot)",
          "Real-Time Google Calendar Booking",
        ],
      };
    } else {
      return {
        badge: "ENTERPRISE",
        price: "$1,200",
        name: "Tier 3: Autonomous Operations Agent",
        desc: "End-to-end multi-step autonomous agent with RAG vector search, Shopify/CRM sync, and API webhooks.",
        features: [
          "Multi-Step ReAct LangChain Autonomous Agent",
          "Full Vector Knowledge RAG with PDF Indexing",
          "Two-Way Live CRM & Payment Gateway Sync",
        ],
      };
    }
  };

  const currentPkg = getPackageInfo(hours);

  return (
    <section className="w-full flex flex-col gap-6" id="roi-calculator">
      {/* Header Tag & Title: Exact Match to Screenshot 2 */}
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-[#22d3ee]/10 text-[#22d3ee] border border-[#22d3ee]/30 font-mono text-xs font-bold">
          <span>⚡</span>
          <span>INTERACTIVE ROI SAVINGS CALCULATOR</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
          Estimate Your Monthly Savings
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-sans">
          Move the slider to estimate how many manual hours your staff spends weekly answering repetitive inquiries, routing leads, and copying data between tools.
        </p>
      </div>

      {/* Calculator Body 2-Column Split: Exact Match to Screenshot 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Hours Slider Box (6 Cols) */}
        <div className="lg:col-span-6 rounded-2xl bg-[#0B0F17]/90 backdrop-blur-xl border border-white/10 p-6 flex flex-col justify-between shadow-2xl gap-8">
          <div className="flex items-center justify-between">
            <span className="text-white text-base font-display font-bold">
              Hours Wasted Weekly:
            </span>
            <div className="px-4 py-2 rounded-xl bg-[#080B11] border border-[#22d3ee]/40 text-[#22d3ee] font-mono text-lg font-bold shadow-inner">
              {hours} Hours / week
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <input
              type="range"
              min="5"
              max="40"
              step="1"
              value={hours}
              onChange={(e) => setHours(parseInt(e.target.value, 10))}
              className="w-full h-2.5 bg-[#080B11] rounded-lg appearance-none cursor-pointer accent-[#22d3ee] border border-white/10"
            />
            <div className="flex justify-between text-xs font-mono text-slate-400">
              <span>5 hrs (Small Team)</span>
              <span>20 hrs (Growing Agency)</span>
              <span>40 hrs (High Volume)</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#080B11]/80 border border-white/5 text-xs font-mono text-slate-400 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#22d3ee] text-[18px]">info</span>
            <span>Based on conservative $30/hr blended labor cost + 30% reduction in lead leakage.</span>
          </div>
        </div>

        {/* Right Column: Calculated Savings + Package Card (6 Cols) */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          {/* Top Metrics Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#0B0F17]/90 border border-white/10 flex flex-col shadow-md">
              <span className="text-xs font-mono text-slate-400">
                Monthly Labor Recovered:
              </span>
              <span className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-400 mt-1">
                ${monthlySavings.toLocaleString()}{" "}
                <span className="text-xs font-normal font-mono text-slate-400">
                  USD/mo
                </span>
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0F17]/90 border border-white/10 flex flex-col shadow-md">
              <span className="text-xs font-mono text-slate-400">
                Annualized Lost Value:
              </span>
              <span className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1">
                ${annualSavings.toLocaleString()}{" "}
                <span className="text-xs font-normal font-mono text-slate-400">
                  USD/yr
                </span>
              </span>
            </div>
          </div>

          {/* Package Card: Exact Match to Screenshot 2 */}
          <div className="rounded-2xl bg-[#0B0F17]/90 backdrop-blur-xl border border-[#22d3ee]/40 p-6 flex flex-col gap-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#22d3ee]/10 text-[#22d3ee] font-mono text-xs font-bold border border-[#22d3ee]/30 flex items-center gap-1">
                <span>★</span>
                <span>{currentPkg.badge}</span>
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-[#22d3ee]">
                  {currentPkg.price}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Fixed Price &bull; 50% Deposit
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-base sm:text-lg font-display font-bold text-white">
                {currentPkg.name}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-300 font-sans leading-relaxed">
                {currentPkg.desc}
              </p>
            </div>

            {/* Feature Checklist */}
            <div className="flex flex-col gap-2 pt-1 font-mono text-xs text-slate-200">
              {currentPkg.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">&#10004;</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Lock in CTA */}
            <a
              href="#demo-form"
              className="w-full py-3 rounded-full bg-[#22d3ee] hover:bg-[#38bdf8] text-[#080B11] font-mono text-xs font-bold uppercase tracking-wider text-center transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_28px_rgba(34,211,238,0.5)] flex items-center justify-center gap-2 mt-2"
            >
              <span>LOCK IN THIS PACKAGE ({currentPkg.price})</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
