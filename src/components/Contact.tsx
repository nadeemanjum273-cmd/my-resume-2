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

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onTriggerToast) {
        onTriggerToast("Request received! Nadeem will send your 60-sec video within 24 hours.");
      }
    }, 900);
  };

  return (
    <section className="w-full flex flex-col gap-space-md" id="demo-form">
      {/* Section Title */}
      <div className="flex flex-col gap-1 text-center items-center">
        <span className="font-code-terminal text-label-caps uppercase tracking-widest text-primary">
          LET'S BUILD YOUR PIPELINE
        </span>
        <h2 className="font-headline-lg text-2xl sm:text-3xl text-on-surface font-bold">
          Request a 60-Sec Demo Walkthrough
        </h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
          Share your business hurdle. I will record a personalized 60-second video walkthrough showing how an AI agent or n8n pipeline solves it.
        </p>
      </div>

      {/* Interactive Booking Bento Container */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-space-lg rounded-3xl bg-surface-container-low/90 backdrop-blur-xl p-space-md lg:p-space-xl shadow-2xl border border-outline-variant/30">
        {/* Left: Direct Channels + Small Area Map (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-space-md">
          <div className="flex flex-col gap-space-sm">
            <div className="flex items-center gap-1.5 text-primary font-code-terminal text-[11px]">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              <span>DIRECT NODE ACCESS</span>
            </div>
            <h3 className="font-headline-md text-xl text-on-surface font-bold">
              Direct Communication Channels
            </h3>
            <p className="font-body-sm text-xs text-on-surface-variant">
              Available immediately for contracts, autonomous agent builds, or consulting.
            </p>

            <div className="flex flex-col gap-2 pt-1">
              {/* WhatsApp */}
              <a
                className="p-3 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors flex items-center justify-between shadow-sm group border border-outline-variant/20"
                href="https://wa.me/923077970277"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-primary text-[20px]">chat</span>
                  <div className="flex flex-col">
                    <span className="font-body-sm text-[11px] text-on-surface-variant">
                      WhatsApp Business
                    </span>
                    <span className="font-code-terminal text-xs text-on-surface font-bold">
                      +92 307 7970277
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-[18px]">
                  arrow_outward
                </span>
              </a>

              {/* Email */}
              <a
                className="p-3 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors flex items-center justify-between shadow-sm group border border-outline-variant/20"
                href="mailto:nadeemanjum273@gmail.com"
              >
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-secondary text-[20px]">mail</span>
                  <div className="flex flex-col">
                    <span className="font-body-sm text-[11px] text-on-surface-variant">
                      Direct Priority Email
                    </span>
                    <span className="font-code-terminal text-xs text-on-surface font-bold">
                      nadeemanjum273@gmail.com
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-secondary transition-colors text-[18px]">
                  arrow_outward
                </span>
              </a>

              {/* Base Location with Small Embedded Area Map */}
              <div className="p-3 rounded-xl bg-surface-container flex flex-col gap-2 shadow-sm border border-outline-variant/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[20px]">location_on</span>
                    <div className="flex flex-col">
                      <span className="font-body-sm text-[11px] text-on-surface-variant">
                        Base Node
                      </span>
                      <span className="font-code-terminal text-xs text-on-surface font-bold">
                        66000 Multan, Punjab, Pakistan
                      </span>
                    </div>
                  </div>
                  <a
                    href="https://maps.google.com/?q=66000+Multan,+Punjab,+Pakistan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-[11px] font-code-terminal flex items-center gap-0.5"
                  >
                    <span>Maps</span>
                    <span className="material-symbols-outlined text-[13px]">open_in_new</span>
                  </a>
                </div>

                {/* Small Area Map Widget */}
                <div className="w-full h-28 rounded-lg overflow-hidden border border-outline-variant/30 bg-surface-container-lowest relative">
                  <iframe
                    title="Nadeem Anjum Base Location"
                    src="https://maps.google.com/maps?q=Multan%2066000%20Punjab%20Pakistan&t=&z=11&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-[105%] opacity-90"
                    loading="lazy"
                  ></iframe>
                  <div className="absolute bottom-1.5 left-2 px-2 py-0.5 rounded bg-surface-container-lowest/80 text-[10px] font-code-terminal text-primary border border-primary/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                    <span>PKT (UTC +5)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Tag */}
          <div className="p-2.5 rounded-xl bg-surface-container-lowest/80 flex items-center gap-2 text-on-surface font-code-terminal text-xs border border-outline-variant/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span>
              Current Status: <strong className="text-primary font-bold">Open for Remote Projects</strong>
            </span>
          </div>
        </div>

        {/* Right: Real-time Interactive Booking Form (7 Cols) */}
        <div className="lg:col-span-7 bg-surface-container/60 rounded-2xl p-space-md shadow-inner flex flex-col gap-space-sm border border-outline-variant/20">
          <div className="flex items-center justify-between pb-1 border-b border-surface-container-highest/40">
            <span className="font-headline-sm text-base font-bold text-on-surface">
              Book 60-Sec Architecture Assessment
            </span>
            <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-code-terminal text-[10px] border border-primary/20">
              FAST PIPELINE
            </span>
          </div>

          {!isSubmitted ? (
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-0.5">
                  <label className="font-code-terminal text-[10px] text-on-surface-variant uppercase">
                    Prospect Name *
                  </label>
                  <input
                    className="w-full px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-xs focus:outline-none focus:ring-1 focus:ring-primary shadow-inner border border-outline-variant/30"
                    placeholder="Sarah Jenkins"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <label className="font-code-terminal text-[10px] text-on-surface-variant uppercase">
                    Company / Project *
                  </label>
                  <input
                    className="w-full px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-xs focus:outline-none focus:ring-1 focus:ring-primary shadow-inner border border-outline-variant/30"
                    placeholder="Apex Flow LLC"
                    required
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-0.5">
                  <label className="font-code-terminal text-[10px] text-on-surface-variant uppercase">
                    Role / Title *
                  </label>
                  <input
                    className="w-full px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-xs focus:outline-none focus:ring-1 focus:ring-primary shadow-inner border border-outline-variant/30"
                    placeholder="Founder / COO / Head of Ops"
                    required
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <label className="font-code-terminal text-[10px] text-on-surface-variant uppercase">
                    Team Staff Count
                  </label>
                  <select
                    className="w-full px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-xs focus:outline-none focus:ring-1 focus:ring-primary shadow-inner border border-outline-variant/30"
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

              <div className="flex flex-col gap-0.5">
                <label className="font-code-terminal text-[10px] text-on-surface-variant uppercase">
                  Work Email or WhatsApp *
                </label>
                <input
                  className="w-full px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-xs focus:outline-none focus:ring-1 focus:ring-primary shadow-inner border border-outline-variant/30"
                  placeholder="sarah@apexflow.com or +1 (555) 019-2831"
                  required
                  type="text"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-0.5">
                <label className="font-code-terminal text-[10px] text-on-surface-variant uppercase">
                  Identified Bottleneck to Automate *
                </label>
                <textarea
                  className="w-full px-3 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-xs focus:outline-none focus:ring-1 focus:ring-primary shadow-inner resize-none border border-outline-variant/30"
                  placeholder="Describe your current manual bottleneck (e.g. after-hours inquiries, order tracking, lead copy-pasting)..."
                  required
                  rows={2}
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                ></textarea>
              </div>

              <button
                className="w-full py-3 rounded-xl bg-primary-container text-on-primary-container font-code-terminal text-xs font-bold hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-xl flex items-center justify-center gap-1.5 group mt-1"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined animate-spin text-[16px]">
                      progress_activity
                    </span>
                    <span>Syncing with Pipeline...</span>
                  </>
                ) : (
                  <>
                    <span>Request 60-Sec Custom Video</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                      bolt
                    </span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="p-4 rounded-xl bg-primary/20 text-primary font-code-terminal text-xs flex flex-col gap-2 items-center text-center border border-primary/40">
              <span className="material-symbols-outlined text-[32px] text-primary">
                check_circle
              </span>
              <span className="font-headline-sm text-sm font-bold text-on-surface">
                Request Received!
              </span>
              <p className="text-on-surface-variant max-w-sm text-[11px]">
                Nadeem has received your requirements and will record a personalized 60-sec video walkthrough within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-1 px-3 py-1 rounded bg-surface-container-highest text-on-surface hover:text-primary transition-colors text-[10px]"
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
