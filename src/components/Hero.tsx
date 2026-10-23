import React from "react";
import { Play, Sparkles, ArrowRight, ShieldCheck, Zap, Award, CheckCircle2 } from "lucide-react";
import { TiltCard } from "./TiltCard";

interface HeroProps {
  onTriggerToast?: (msg: string) => void;
  onOpenVideoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVideoModal }) => {
  return (
    <section id="hero" className="pt-24 sm:pt-28 pb-6 relative">
      {/* Background radial spotlight in deep emerald/cyan */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/15 via-teal-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline, Value Prop & Metrics */}
        <div className="lg:col-span-7 space-y-6">
          {/* Pill Badge */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium shadow-sm shadow-emerald-950">
              <span className="text-emerald-400">✦</span>
              <span>AFFORDABLE ENTERPRISE AI SOLUTIONS</span>
            </div>

            <a
              href="https://www.datacrumbs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 hover:text-white hover:border-teal-400 text-xs font-mono transition-colors"
            >
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>Specialized at DataCrumb ↗</span>
            </a>
          </div>

          {/* Impactful H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.12] tracking-tight">
            Transforming Business Workflows into{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-white bg-clip-text text-transparent">
              Intelligent AI Systems.
            </span>
          </h1>

          {/* Value Prop Subtext */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-sans">
            Senior Frontend Engineer &amp; UI/UX Specialist crafting production-grade{" "}
            <strong className="text-white font-semibold">24/7 Lead Chatbots</strong>,{" "}
            <strong className="text-white font-semibold">Autonomous Agents</strong>, and{" "}
            <strong className="text-white font-semibold">n8n Workflow Automations</strong> — engineered with Next.js, Tailwind CSS, and enterprise RAG architecture.
          </p>

          {/* Dual CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <a
              href="#demo"
              className="px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-display font-bold text-sm tracking-wide transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-400/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <span>Launch RAG Assistant</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#projects"
              className="px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-emerald-500/50 text-white font-medium text-sm transition-all hover:-translate-y-0.5 flex items-center gap-2 backdrop-blur-sm"
            >
              <span>Explore Verified Builds</span>
            </a>
          </div>

          {/* Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-white/10">
            <div className="p-4 rounded-2xl bg-[#0D1217] border border-white/10">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-400 tracking-tight">
                15+
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-mono mt-0.5 font-medium">
                Automations Built
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0D1217] border border-white/10">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-teal-300 tracking-tight">
                &lt; 48h
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-mono mt-0.5 font-medium">
                POC Turnaround
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0D1217] border border-white/10">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                100%
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-mono mt-0.5 font-medium">
                IP Client Transfer
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: High-Converting Profile Spotlight Card */}
        <div className="lg:col-span-5 flex justify-center">
          <TiltCard
            className="w-full max-w-md rounded-3xl"
            maxTilt={6}
            scale={1.02}
            glowColor="rgba(16, 185, 129, 0.28)"
          >
            <div className="w-full rounded-3xl bg-[#0D1217] border border-white/10 p-6 sm:p-7 shadow-2xl shadow-black/80 space-y-6">
              {/* Profile Photo Display with Glowing Ring & Status */}
              <div className="relative rounded-2xl bg-gradient-to-tr from-emerald-950/40 via-[#0B0F12] to-teal-950/40 border border-white/10 p-6 flex flex-col items-center text-center space-y-4 overflow-hidden">
                <div className="relative">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl p-[3px] bg-gradient-to-tr from-emerald-400 via-teal-400 to-emerald-200 shadow-xl shadow-emerald-500/25 overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                    <img
                      src="/profile.jpg"
                      alt="Nadeem Anjum - Senior Frontend Engineer & UI/UX Specialist"
                      className="w-full h-full object-cover object-top rounded-[21px]"
                    />
                  </div>
                  {/* Verified Badge */}
                  <div className="absolute -bottom-2 right-2 px-2.5 py-1 rounded-full bg-emerald-500 text-black text-[10px] font-mono font-bold flex items-center gap-1 shadow-md">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>VERIFIED</span>
                  </div>
                </div>

                {/* Profile Identity Details */}
                <div className="space-y-1 pt-1">
                  <h2 className="font-display font-extrabold text-white text-2xl tracking-tight">
                    Nadeem Anjum
                  </h2>
                  <div className="text-xs text-emerald-400 font-mono font-semibold tracking-wide">
                    Senior Frontend Engineer &amp; UI/UX Specialist
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    Specialized at DataCrumb &bull; Multan, Pakistan
                  </div>
                </div>

                {/* Tech Tags Pills */}
                <div className="flex flex-wrap justify-center gap-1.5 pt-1">
                  {["Next.js", "Tailwind CSS", "Framer Motion", "n8n", "RAG & LLMs"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-slate-300 text-[10px] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Video Demo Button */}
                <button
                  onClick={onOpenVideoModal}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:text-white font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md group"
                >
                  <Play className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>Watch 60-Sec Intro / Walkthrough</span>
                </button>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};
