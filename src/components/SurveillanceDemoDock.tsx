import React from 'react';
import { GraduationCap, ShieldCheck, ArrowUpRight, Radio } from 'lucide-react';

interface SurveillanceDemoDockProps {
  onNavigate: (path: string) => void;
}

/**
 * Dual-launch interactive demo dock for Campus & Exam AI and Chaki, Farm & Home AI.
 */
export default function SurveillanceDemoDock({ onNavigate }: SurveillanceDemoDockProps) {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/60 p-4 backdrop-blur-md">
      {/* Top Status Header */}
      <div className="mb-3 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          <Radio className="h-3.5 w-3.5 animate-pulse text-cyan-400" />
          Interactive Live Demos
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-medium text-slate-300">
          2 Solutions
        </span>
      </div>

      {/* Dual Sleek Launch Buttons */}
      <div className="grid gap-3 sm:grid-cols-2">
        {/* Button 1: Campus & Exam AI */}
        <a
          href="/demo/campus-ai"
          onClick={(e) => handleLinkClick(e, '/demo/campus-ai')}
          className="group relative flex items-center justify-between overflow-hidden rounded-xl border border-cyan-400/25 bg-gradient-to-br from-cyan-500/10 via-slate-900/90 to-indigo-500/10 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/70 hover:shadow-[0_0_28px_-6px_rgba(34,211,238,0.45)]"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-500/15 text-cyan-300 transition-transform duration-300 group-hover:scale-105">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-white">
                Campus &amp; Exam AI
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
              </div>
              <p className="text-[11px] text-slate-400">
                Parking • Whiteboard • Anti-Cheating
              </p>
            </div>
          </div>

          <ArrowUpRight className="h-4 w-4 shrink-0 text-cyan-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        {/* Button 2: Chaki, Farm & Home AI */}
        <a
          href="/demo/farm-security"
          onClick={(e) => handleLinkClick(e, '/demo/farm-security')}
          className="group relative flex items-center justify-between overflow-hidden rounded-xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/10 via-slate-900/90 to-teal-500/10 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/70 hover:shadow-[0_0_28px_-6px_rgba(52,211,153,0.45)]"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-emerald-400/30 bg-emerald-500/15 text-emerald-300 transition-transform duration-300 group-hover:scale-105">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-white">
                Chaki, Farm &amp; Home AI
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
              </div>
              <p className="text-[11px] text-slate-400">
                Zero False Alarms • Excel Logging
              </p>
            </div>
          </div>

          <ArrowUpRight className="h-4 w-4 shrink-0 text-emerald-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
