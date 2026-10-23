import React from "react";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Award, CheckCircle2, MessageSquare } from "lucide-react";

export const DataCrumbBanner: React.FC = () => {
  return (
    <section className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-950/40">
      {/* High-Impact Mint / Emerald Accent Container */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 p-8 sm:p-12 text-white relative z-10">
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.18),_transparent_60%)] pointer-events-none" />
        
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Text Block */}
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-mono font-bold tracking-wider border border-white/30">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>DATACRUMB ENGINEERING STANDARDS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-tight text-white">
              Accelerate Your Enterprise with Production AI Workflows.
            </h2>

            <p className="text-emerald-50 text-sm sm:text-base leading-relaxed font-sans opacity-95">
              Specialized at DataCrumb in building robust autonomous agents, 24/7 lead chatbots, and n8n webhooks. 
              Get your business automated with <strong className="text-white font-bold">100% intellectual property transfer</strong> and rapid 48-hour prototype delivery.
            </p>

            {/* Quick Proof Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs font-mono">
              <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-full border border-white/20">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-200" />
                <span>Zero Vendor Lock-In</span>
              </span>
              <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-full border border-white/20">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-200" />
                <span>14 Days Free Hypercare</span>
              </span>
              <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-full border border-white/20">
                <Zap className="w-3.5 h-3.5 text-emerald-200" />
                <span>50% Deposit Safety Rule</span>
              </span>
            </div>
          </div>

          {/* Right Action Block */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full sm:w-auto shrink-0">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-white hover:bg-emerald-50 text-emerald-950 font-display font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-100 flex items-center justify-center gap-2"
            >
              <span>Schedule Walkthrough</span>
              <ArrowRight className="w-4 h-4 text-emerald-700" />
            </a>

            <a
              href="https://wa.me/923077978277?text=Hello%20Nadeem!%20I%20would%20like%20to%20discuss%20a%20commercial%20AI%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-black/30 hover:bg-black/45 border border-white/30 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-300" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
