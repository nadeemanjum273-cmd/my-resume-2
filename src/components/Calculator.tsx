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
  const sliderPercentage = ((hours - 5) / (40 - 5)) * 100;

  return (
    <section className="w-full" id="roi-calculator">
      {/* 2-Column Split: Exact Match to Screenshot 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column (5 Cols): Title, Subtitle, and Hours Slider Card */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Header Tag & Headline */}
          <div className="flex flex-col gap-2.5">
            <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-[#22d3ee]/10 text-[#22d3ee] border border-[#22d3ee]/30 font-mono text-xs font-bold shadow-[0_0_12px_rgba(34,211,238,0.2)]">
              <span>⚡</span>
              <span>INTERACTIVE ROI SAVINGS CALCULATOR</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
              Estimate Your Monthly Savings
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-sans leading-relaxed">
              Move the slider to estimate how many manual hours your staff spends weekly answering repetitive inquiries, routing leads, and copying data between tools.
            </p>
          </div>

          {/* Hours Slider Card */}
          <div className="rounded-2xl bg-[#0B0F17]/90 backdrop-blur-xl border border-white/10 p-5 sm:p-6 flex flex-col gap-5 shadow-2xl">
            {/* Top Row: Label & Highlighted Value */}
            <div className="flex items-center justify-between gap-3">
              <span className="text-white text-base sm:text-lg font-display font-bold">
                Hours Wasted Weekly:
              </span>
              <div className="px-4 py-2 rounded-xl bg-[#080B11] border border-[#22d3ee]/50 text-[#22d3ee] font-mono text-base sm:text-lg font-bold shadow-[0_0_18px_rgba(34,211,238,0.25)] shrink-0">
                {hours} Hours / week
              </div>
            </div>

            {/* Slider with Active Glowing Gradient Fill */}
            <div className="flex flex-col gap-2.5 pt-1">
              <input
                type="range"
                min="5"
                max="40"
                step="1"
                value={hours}
                onChange={(e) => setHours(parseInt(e.target.value, 10))}
                style={{
                  background: `linear-gradient(to right, #22d3ee 0%, #22d3ee ${sliderPercentage}%, #1e293b ${sliderPercentage}%, #1e293b 100%)`,
                }}
                className="w-full h-3 rounded-full appearance-none cursor-pointer outline-none transition-all shadow-inner border border-white/10"
                aria-label="Hours Wasted Weekly Slider"
              />

              <div className="flex justify-between text-[11px] sm:text-xs font-mono text-slate-400 pt-0.5">
                <span>5 hrs (Small Team)</span>
                <span>20 hrs (Growing Agency)</span>
                <span>40 hrs (High Volume)</span>
              </div>
            </div>

            {/* Subtle Info Note */}
            <div className="p-3 rounded-xl bg-[#080B11]/70 border border-white/5 text-[11px] font-mono text-slate-400 flex items-start gap-2 leading-relaxed">
              <span className="material-symbols-outlined text-[#22d3ee] text-[16px] shrink-0 mt-0.5">
                info
              </span>
              <span>Based on conservative $30/hr blended labor cost + 30% reduction in lead leakage.</span>
            </div>
          </div>
        </div>

        {/* Right Column (7 Cols): Master Metrics & Active Package Card */}
        <div className="lg:col-span-7 rounded-3xl bg-[#0B0F17]/90 backdrop-blur-xl border border-white/10 p-6 sm:p-8 flex flex-col gap-6 shadow-2xl">
          {/* Top Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-2">
            {/* Metric 1: Monthly Labor Recovered */}
            <div className="flex flex-col gap-1">
              <span className="text-xs sm:text-sm font-mono text-slate-400">
                Monthly Labor Recovered:
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-display font-extrabold text-[#34d399] tracking-tight glow-emerald">
                  ${monthlySavings.toLocaleString()}
                </span>
                <span className="text-xs font-mono text-slate-400 font-medium">
                  USD/mo
                </span>
              </div>
            </div>

            {/* Metric 2: Annualized Lost Value */}
            <div className="flex flex-col gap-1">
              <span className="text-xs sm:text-sm font-mono text-slate-400">
                Annualized Lost Value:
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                  ${annualSavings.toLocaleString()}
                </span>
                <span className="text-xs font-mono text-slate-400 font-medium">
                  USD/yr
                </span>
              </div>
            </div>
          </div>

          {/* Inner Package Card: Exact Match to Screenshot 2 */}
          <div className="rounded-2xl bg-[#080B11]/95 border border-[#22d3ee]/40 p-5 sm:p-6 flex flex-col gap-4 shadow-[0_0_24px_rgba(34,211,238,0.15)] relative overflow-hidden">
            {/* Package Badge & Price Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-1 border-b border-white/5">
              <span className="px-3 py-1 rounded-full bg-[#22d3ee]/10 text-[#22d3ee] font-mono text-xs font-bold border border-[#22d3ee]/30 flex items-center gap-1.5">
                <span>★</span>
                <span>{currentPkg.badge}</span>
              </span>

              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-display font-extrabold text-[#22d3ee]">
                  {currentPkg.price}
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-slate-400">
                  Fixed Price &bull; 50% Deposit
                </span>
              </div>
            </div>

            {/* Title & Description */}
            <div className="flex flex-col gap-1.5">
              <h3 className="text-base sm:text-lg font-display font-bold text-white tracking-tight">
                {currentPkg.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {currentPkg.desc}
              </p>
            </div>

            {/* Feature Checklist with Cyan Checkmark Icons */}
            <div className="flex flex-col gap-2 pt-1 font-mono text-xs sm:text-[13px] text-slate-200">
              {currentPkg.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[#22d3ee] text-[18px] shrink-0">
                    check_circle
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Full-width Glowing Cyan CTA Button */}
            <a
              href="#demo-form"
              className="w-full py-3.5 rounded-full bg-[#22d3ee] hover:bg-[#38bdf8] text-[#080B11] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-center transition-all duration-300 shadow-[0_0_24px_rgba(34,211,238,0.4)] hover:shadow-[0_0_32px_rgba(34,211,238,0.6)] hover:scale-[1.01] active:scale-100 flex items-center justify-center gap-2 mt-2"
            >
              <span>LOCK IN THIS PACKAGE ({currentPkg.price})</span>
              <span className="text-base">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
