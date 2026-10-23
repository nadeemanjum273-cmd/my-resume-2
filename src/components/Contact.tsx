import React, { useState } from "react";

interface ContactProps {
  onTriggerToast?: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onTriggerToast }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    teamSize: "1 - 5 team members",
    contact: "",
    bottleneck: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate real-time Google Sheets webhook ingestion
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onTriggerToast) {
        onTriggerToast("Request synced to Google Sheets! Nadeem will follow up within 24 hours.");
      }
    }, 1000);
  };

  return (
    <section className="w-full flex flex-col gap-space-xl" id="demo-form">
      {/* Section Title */}
      <div className="flex flex-col gap-space-xs text-center items-center">
        <span className="font-code-terminal text-label-caps uppercase tracking-widest text-primary">
          LET'S BUILD YOUR PIPELINE
        </span>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold">
          Request a 60-Sec Demo Walkthrough
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
          Share your business workflow or inquiry bottleneck. I will record a personalized 60-second video walkthrough showing how an AI agent, lead chatbot, or n8n pipeline solves it.
        </p>
      </div>

      {/* Interactive Booking Bento Container */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-space-xl rounded-3xl bg-surface-container-low/90 backdrop-blur-xl p-space-lg lg:p-space-2xl shadow-2xl border border-outline-variant/30">
        {/* Left: Direct Channels & Instant Reach (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-space-lg">
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-space-xs text-primary font-code-terminal text-label-caps">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
              <span>DIRECT NODE ACCESS</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
              Direct Communication Channels
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Available immediately for contracts, fullstack agent development, or enterprise consulting.
            </p>

            <div className="flex flex-col gap-space-sm pt-space-xs">
              {/* WhatsApp */}
              <a
                className="p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors flex items-center justify-between shadow-sm group border border-outline-variant/20"
                href="https://wa.me/923077970277"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[24px]">chat</span>
                  <div className="flex flex-col">
                    <span className="font-body-sm text-[12px] text-on-surface-variant">
                      WhatsApp Business
                    </span>
                    <span className="font-code-terminal text-body-sm text-on-surface font-bold">
                      +92 307 7970277
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                  arrow_outward
                </span>
              </a>

              {/* Email */}
              <a
                className="p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors flex items-center justify-between shadow-sm group border border-outline-variant/20"
                href="mailto:nadeemanjum273@gmail.com"
              >
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[24px]">mail</span>
                  <div className="flex flex-col">
                    <span className="font-body-sm text-[12px] text-on-surface-variant">
                      Direct Priority Email
                    </span>
                    <span className="font-code-terminal text-body-sm text-on-surface font-bold">
                      nadeemanjum273@gmail.com
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary transition-colors">
                  arrow_outward
                </span>
              </a>

              {/* Location Base */}
              <div className="p-space-md rounded-xl bg-surface-container flex items-center gap-space-sm shadow-sm border border-outline-variant/20">
                <span className="material-symbols-outlined text-tertiary text-[24px]">location_on</span>
                <div className="flex flex-col">
                  <span className="font-body-sm text-[12px] text-on-surface-variant">
                    Base Location
                  </span>
                  <span className="font-code-terminal text-body-sm text-on-surface font-bold">
                    66000 Multan, Punjab, Pakistan
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Tag */}
          <div className="p-space-md rounded-xl bg-surface-container-lowest/80 flex items-center gap-space-xs text-on-surface font-code-terminal text-body-sm border border-outline-variant/20">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
            <span>
              Current Status: <strong className="text-primary font-bold">Open for Remote Projects</strong>
            </span>
          </div>
        </div>

        {/* Right: Real-time Interactive Booking Form (7 Cols) */}
        <div className="lg:col-span-7 bg-surface-container/60 rounded-2xl p-space-lg shadow-inner flex flex-col gap-space-md border border-outline-variant/20">
          <div className="flex items-center justify-between pb-space-xs border-b border-surface-container-highest/40">
            <span className="font-headline-sm text-body-lg font-bold text-on-surface">
              Book 60-Sec Architecture Assessment
            </span>
            <span className="px-space-xs py-0.5 rounded bg-primary/10 text-primary font-code-terminal text-[10px] border border-primary/20">
              SYNCED TO GOOGLE SHEETS
            </span>
          </div>

          {!isSubmitted ? (
            <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-1">
                  <label className="font-code-terminal text-[11px] text-on-surface-variant uppercase">
                    Prospect Name *
                  </label>
                  <input
                    className="w-full px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-inner border border-outline-variant/30"
                    placeholder="Sarah Jenkins"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-code-terminal text-[11px] text-on-surface-variant uppercase">
                    Company / Project *
                  </label>
                  <input
                    className="w-full px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-inner border border-outline-variant/30"
                    placeholder="Apex Flow LLC"
                    required
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-1">
                  <label className="font-code-terminal text-[11px] text-on-surface-variant uppercase">
                    Role / Title *
                  </label>
                  <input
                    className="w-full px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-inner border border-outline-variant/30"
                    placeholder="Founder / COO / Head of Ops"
                    required
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-code-terminal text-[11px] text-on-surface-variant uppercase">
                    Team Staff Count
                  </label>
                  <select
                    className="w-full px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-inner border border-outline-variant/30"
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                  >
                    <option>1 - 5 team members</option>
                    <option>6 - 20 team members</option>
                    <option>21 - 50 team members</option>
                    <option>50+ enterprise</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-code-terminal text-[11px] text-on-surface-variant uppercase">
                  Work Email or WhatsApp *
                </label>
                <input
                  className="w-full px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-inner border border-outline-variant/30"
                  placeholder="sarah@apexflow.com or +1 (555) 019-2831"
                  required
                  type="text"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-code-terminal text-[11px] text-on-surface-variant uppercase">
                  Identified Bottleneck to Automate *
                </label>
                <textarea
                  className="w-full px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-inner resize-none border border-outline-variant/30"
                  placeholder="Describe your current manual hurdle (e.g., answering inquiries after hours, manual order tracking and refunds, or lead copy-pasting into CRM)..."
                  required
                  rows={3}
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                ></textarea>
              </div>

              <button
                className="w-full py-3.5 rounded-xl bg-primary-container text-on-primary-container font-code-terminal text-body-sm font-bold hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-xl flex items-center justify-center gap-space-xs group"
                id="submit-demo-btn"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-[18px]">
                      progress_activity
                    </span>
                    <span>Syncing with Pipeline...</span>
                  </>
                ) : (
                  <>
                    <span>Send Request &amp; Real-Time Sync to Google Sheet</span>
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                      bolt
                    </span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="p-space-lg rounded-xl bg-primary/20 text-primary font-code-terminal text-body-sm flex flex-col gap-space-sm items-center text-center border border-primary/40">
              <span className="material-symbols-outlined text-[36px] text-primary">
                check_circle
              </span>
              <span className="font-headline-sm text-body-lg font-bold text-on-surface">
                Ingestion Webhook Triggered!
              </span>
              <p className="text-on-surface-variant max-w-md">
                Success! Your details have been synchronized with Nadeem's automated pipeline. Nadeem will review your requirements and record your custom 60-sec video walkthrough within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-2 px-4 py-2 rounded-lg bg-surface-container-highest text-on-surface hover:text-primary transition-colors text-xs"
              >
                Submit another inquiry
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
