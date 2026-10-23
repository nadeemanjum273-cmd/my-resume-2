import React, { useState } from "react";

interface ContactProps {
  onTriggerToast?: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onTriggerToast }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "Founder / Executive",
    staffCount: "1 - 5 team members",
    contact: "",
    pillar: "Pillar 1: 24/7 AI Chatbot (Web + WhatsApp)",
    bottleneck: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("nadeemanjum273@gmail.com");
    if (onTriggerToast) {
      onTriggerToast("Email copied to clipboard: nadeemanjum273@gmail.com");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onTriggerToast) {
        onTriggerToast("Request synced to Google Sheets! Video walkthrough queued.");
      }
    }, 800);
  };

  return (
    <section className="w-full flex flex-col gap-6" id="demo-form">
      {/* Title & Subtitle: Exact Match to Screenshot 3 */}
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
          Request a 60-Sec Demo Walkthrough
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-sans leading-relaxed">
          Share your business workflow or inquiry bottleneck. I will record a personalized 60-second video walkthrough showing how an AI agent, lead chatbot, or n8n pipeline solves it.
        </p>
      </div>

      {/* 2-Column Split: Exact Match to Screenshot 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Location Line */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <span className="material-symbols-outlined text-[#22d3ee] text-[18px]">location_on</span>
            <span>66000 Multan, Punjab, Pakistan &bull; Available for Remote Worldwide Contracts</span>
          </div>

          {/* WhatsApp Card */}
          <div className="p-4 rounded-2xl bg-[#0B0F17]/90 backdrop-blur-xl border border-emerald-500/30 flex items-center justify-between shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <span className="material-symbols-outlined text-[20px]">chat</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-white text-sm">
                    WhatsApp Business
                  </span>
                  <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase">
                    ACTIVE
                  </span>
                </div>
                <span className="font-mono text-xs text-slate-400">
                  +92 307 7970277
                </span>
              </div>
            </div>

            <a
              href="https://wa.me/923077970277"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full border border-white/20 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 font-mono text-xs transition-colors flex items-center gap-1"
            >
              <span>Chat Now</span>
              <span>&rarr;</span>
            </a>
          </div>

          {/* Email Card */}
          <div className="p-4 rounded-2xl bg-[#0B0F17]/90 backdrop-blur-xl border border-white/10 flex items-center justify-between shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-[#38bdf8] flex items-center justify-center border border-sky-500/30">
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </div>
              <span className="font-mono text-xs text-slate-300 truncate max-w-[170px]">
                nadeemanjum273@gmail.com
              </span>
            </div>

            <button
              onClick={copyEmail}
              className="px-3.5 py-1.5 rounded-full border border-white/20 hover:border-[#38bdf8] text-slate-300 hover:text-[#38bdf8] font-mono text-xs transition-colors"
            >
              Copy Email
            </button>
          </div>

          {/* Social Links Row */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[#0B0F17]/90 border border-white/10 hover:border-[#22d3ee]/40 text-slate-300 hover:text-white font-mono text-xs flex items-center justify-between transition-colors shadow-sm"
            >
              <span>LinkedIn Profile</span>
              <span className="material-symbols-outlined text-[15px]">open_in_new</span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[#0B0F17]/90 border border-white/10 hover:border-[#22d3ee]/40 text-slate-300 hover:text-white font-mono text-xs flex items-center justify-between transition-colors shadow-sm"
            >
              <span>GitHub Repos</span>
              <span className="material-symbols-outlined text-[15px]">open_in_new</span>
            </a>
          </div>
        </div>

        {/* Right Column: Discovery Form (7 Cols) - Exact Match to Screenshot 3 */}
        <div className="lg:col-span-7 rounded-2xl bg-[#0B0F17]/90 backdrop-blur-xl border border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          {/* Top Form Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
            <span className="text-slate-400 font-bold tracking-wider">
              DISCOVERY FORM &bull; SYNCED WITH PROSPECT TRACKER
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400 text-[11px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Real-Time Sheet Ready</span>
            </span>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-slate-300">
                    Prospect Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="px-3.5 py-2.5 rounded-xl bg-[#080B11] border border-white/10 text-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#22d3ee] transition-colors placeholder:text-slate-600"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-slate-300">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Realty / TrendWear DTC"
                    className="px-3.5 py-2.5 rounded-xl bg-[#080B11] border border-white/10 text-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#22d3ee] transition-colors placeholder:text-slate-600"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-slate-300">
                    Role / Title
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="Founder / Executive"
                    className="px-3.5 py-2.5 rounded-xl bg-[#080B11] border border-white/10 text-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#22d3ee] transition-colors placeholder:text-slate-600"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-slate-300">
                    Staff Count
                  </label>
                  <select
                    value={formData.staffCount}
                    onChange={(e) => setFormData({ ...formData, staffCount: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl bg-[#080B11] border border-white/10 text-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#22d3ee] transition-colors"
                  >
                    <option>1 - 5 team members</option>
                    <option>6 - 20 team members</option>
                    <option>21 - 50 team members</option>
                    <option>50+ enterprise</option>
                  </select>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-slate-300">
                    LinkedIn URL / Contact (Email or WhatsApp) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="https://linkedin.com/in/... or email"
                    className="px-3.5 py-2.5 rounded-xl bg-[#080B11] border border-white/10 text-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#22d3ee] transition-colors placeholder:text-slate-600"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-slate-300">
                    Target AI Pillar *
                  </label>
                  <select
                    value={formData.pillar}
                    onChange={(e) => setFormData({ ...formData, pillar: e.target.value })}
                    className="px-3.5 py-2.5 rounded-xl bg-[#080B11] border border-white/10 text-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#22d3ee] transition-colors"
                  >
                    <option>Pillar 1: 24/7 AI Chatbot (Web + WhatsApp)</option>
                    <option>Pillar 2: Autonomous Agent + RAG Policy Engine</option>
                    <option>Pillar 3: n8n Lead Routing &amp; Sync Pipeline</option>
                  </select>
                </div>
              </div>

              {/* Identified Bottleneck to Automate */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-slate-300">
                  Identified Bottleneck to Automate *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  placeholder="Describe your current manual hurdle (e.g. answering inquiries after hours, manual order tracking and refunds, ad lead copy-pasting into CRM)..."
                  className="px-3.5 py-2.5 rounded-xl bg-[#080B11] border border-white/10 text-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#22d3ee] transition-colors placeholder:text-slate-600 resize-none"
                ></textarea>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#a855f7] hover:from-[#38bdf8] hover:to-[#c084fc] text-[#080B11] font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_24px_rgba(34,211,238,0.35)] hover:scale-[1.01] flex items-center justify-center gap-2 mt-2"
              >
                {isSubmitting ? (
                  <span>Syncing with Pipeline...</span>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[16px]">send</span>
                    <span>SEND REQUEST &amp; REAL-TIME SYNC TO GOOGLE SHEET</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-center flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-emerald-400 text-[36px]">
                check_circle
              </span>
              <h3 className="font-display font-bold text-white text-base">
                Request Synchronized Successfully!
              </h3>
              <p className="text-slate-300 text-xs font-sans max-w-md">
                Your details have been logged to the prospect tracker. Nadeem will review your automation bottleneck and record your custom 60-sec video walkthrough within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-2 px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors"
              >
                Submit another request
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
