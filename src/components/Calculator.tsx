import React, { useState } from "react";
import { Zap, CheckCircle2, ArrowRight, DollarSign, Calendar } from "lucide-react";
import { TiltCard } from "./TiltCard";

export const Calculator: React.FC = () => {
  const [hours, setHours] = useState<number>(15);

  const hourlyRate = 30; // $30/hr industry benchmark for manual data entry & phone support
  const monthlySavings = hours * 4 * hourlyRate;
  const annualSavings = monthlySavings * 12;

  const getPackage = () => {
    if (hours <= 10) {
      return {
        name: "Tier 1: Starter FAQ & Qualification Bot",
        price: "$350",
        badge: "STARTER TIER",
        desc: "Ideal for solo businesses losing leads after-hours. Deploys a smart conversational bot on your website syncing to email/Slack.",
        deliverables: ["24/7 FAQ Lead Ingestion", "Instant Email/Slack Alerts", "4-Day Delivery SLA"],
      };
    } else if (hours <= 25) {
      return {
        name: "Tier 2: Growth Automation Suite",
        price: "$650",
        badge: "★ MOST POPULAR",
        desc: "Our high-ROI package: Web + WhatsApp Cloud bot with automatic CRM sync and real-time calendar booking.",
        deliverables: ["Web + WhatsApp AI Concierge", "n8n Webhook CRM Sync (Sheets/HubSpot)", "Real-Time Google Calendar Booking"],
      };
    } else {
      return {
        name: "Tier 3: Enterprise AI Agent Ecosystem",
        price: "$1,200",
        badge: "ENTERPRISE",
        desc: "Custom multi-agent workflows, internal RAG document engine, and multi-platform automation pipelines.",
        deliverables: ["Autonomous ReAct Agent Loop", "Custom RAG PDF / Docs Engine", "Full n8n Multi-App Orchestration"],
      };
    }
  };

  const currentPkg = getPackage();

  return (
    <section
      id="calculator"
      className="scroll-mt-28 rounded-3xl bg-[#0D1217] border border-white/10 p-6 sm:p-12 space-y-8 shadow-2xl shadow-black/80 relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Interactive Slider */}
        <div className="lg:col-span-6 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>INTERACTIVE ROI SAVINGS CALCULATOR</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Estimate Your Monthly Savings
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
            Adjust the slider to estimate how many manual hours your staff wastes each week on repetitive inquiries, customer lookups, lead routing, and cross-tool data copying.
          </p>

          {/* Range Slider Container */}
          <div className="space-y-4 pt-3 p-5 rounded-2xl bg-[#090D10] border border-white/10">
            <div className="flex justify-between items-center text-sm font-mono">
              <span className="text-slate-400">Hours Wasted Weekly:</span>
              <span className="font-bold text-emerald-400 text-xl px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                {hours} Hours / week
              </span>
            </div>

            <input
              type="range"
              min="5"
              max="40"
              step="1"
              value={hours}
              onChange={(e) => setHours(parseInt(e.target.value))}
              className="w-full h-2 bg-[#1A222B] rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />

            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>5 hrs (Solo / Small)</span>
              <span>20 hrs (Growing Agency)</span>
              <span>40 hrs (High Volume Enterprise)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Financial Returns & Package Recommendation */}
        <div className="lg:col-span-6 rounded-2xl bg-[#090D10] border border-white/10 p-6 sm:p-7 space-y-6">
          {/* Numbers Grid */}
          <div className="grid grid-cols-2 gap-4 pb-5 border-b border-white/10">
            <div>
              <div className="text-xs text-slate-400 font-mono mb-1">Monthly Labor Recovered:</div>
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-400">
                ${monthlySavings.toLocaleString()} <span className="text-xs font-mono text-emerald-500/80">USD/mo</span>
              </div>
            </div>

            <div>
              <div className="text-xs text-slate-400 font-mono mb-1">Annualized Lost Value:</div>
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                ${annualSavings.toLocaleString()} <span className="text-xs font-mono text-slate-400">USD/yr</span>
              </div>
            </div>
          </div>

          {/* Dynamic Package Card with 3D Tilt */}
          <TiltCard
            className="rounded-2xl"
            maxTilt={8}
            scale={1.02}
            glowColor="rgba(16, 185, 129, 0.3)"
          >
            <div className="p-5 sm:p-6 rounded-2xl bg-[#12181F] border border-emerald-500/40 space-y-4 shadow-xl shadow-black/80">
              <div className="flex justify-between items-start">
                <div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    {currentPkg.badge}
                  </span>
                  <h4 className="font-display font-bold text-white text-base mt-1.5">
                    {currentPkg.name}
                  </h4>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-display font-extrabold text-emerald-400">
                    {currentPkg.price}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">Fixed &bull; 50% Deposit</div>
                </div>
              </div>

              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {currentPkg.desc}
              </p>

              <div className="space-y-1.5 pt-1 text-xs font-mono text-slate-300">
                {currentPkg.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-2 w-full py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-display font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/25"
              >
                <span>Lock In This Package ({currentPkg.price})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};
