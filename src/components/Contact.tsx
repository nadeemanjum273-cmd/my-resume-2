import React, { useState } from "react";
import { ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { GOOGLE_SHEETS_WEBHOOK_URL, SITE_LINKS } from "../data/portfolioConfig";

interface ContactProps {
  onTriggerToast?: (msg: string) => void;
}

interface FormState {
  name: string;
  contact: string;
  bottleneck: string;
  company: string;
  role: string;
  staffCount: string;
  pillar: string;
  website: string;
}

const INITIAL_FORM_STATE: FormState = {
  name: "",
  contact: "",
  bottleneck: "",
  company: "",
  role: "",
  staffCount: "",
  pillar: "",
  website: "",
};

export const Contact: React.FC<ContactProps> = ({ onTriggerToast }) => {
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM_STATE);
  const [showOptionalDetails, setShowOptionalDetails] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submittedSummary, setSubmittedSummary] = useState<FormState | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(SITE_LINKS.email);
    if (onTriggerToast) {
      onTriggerToast(`Email copied to clipboard: ${SITE_LINKS.email}`);
    }
  };

  const buildWhatsAppLink = (summary: FormState | null) => {
    if (!summary) return SITE_LINKS.whatsappUrl;
    const lines = [
      "Hi Nadeem, I just submitted an AI automation inquiry:",
      `Name: ${summary.name}`,
      `Contact: ${summary.contact}`,
      summary.company ? `Company: ${summary.company}` : null,
      summary.role ? `Role: ${summary.role}` : null,
      summary.staffCount ? `Team Size: ${summary.staffCount}` : null,
      summary.pillar ? `Package: ${summary.pillar}` : null,
      `Bottleneck: ${summary.bottleneck}`,
    ].filter(Boolean);
    return `${SITE_LINKS.whatsappUrl}?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const trimmedName = formData.name.trim();
    const trimmedContact = formData.contact.trim();
    const trimmedBottleneck = formData.bottleneck.trim();

    if (!trimmedName || !trimmedContact || !trimmedBottleneck) {
      setErrorMsg("Please fill in your name, Email or WhatsApp, and the bottleneck to automate.");
      return;
    }

    // Silent honeypot drop for bots
    if (formData.website.trim()) {
      setSubmittedSummary({ ...formData });
      setIsSubmitted(true);
      return;
    }

    if (!GOOGLE_SHEETS_WEBHOOK_URL) {
      setErrorMsg("Form endpoint is not configured. Please use WhatsApp or Email on the left.");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: trimmedName,
      company: formData.company.trim(),
      role: formData.role.trim(),
      staffCount: formData.staffCount,
      contact: trimmedContact,
      bottleneck: trimmedBottleneck,
      pillar: formData.pillar,
      website: formData.website,
    };

    try {
      await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(payload),
      });

      setSubmittedSummary({ ...formData, name: trimmedName, contact: trimmedContact, bottleneck: trimmedBottleneck });
      setIsSubmitted(true);
      setFormData(INITIAL_FORM_STATE);
      if (onTriggerToast) {
        onTriggerToast("Request sent to Google Sheets! Video walkthrough queued.");
      }
    } catch {
      setErrorMsg("Network error while sending to Google Sheets. Please try again or use WhatsApp.");
      if (onTriggerToast) {
        onTriggerToast("Submission failed — please retry or message on WhatsApp.");
      }
    } finally {
      setIsSubmitting(false);
    }
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
          <div className="shining-card p-4 flex items-center justify-between">
            <div className="flex items-center gap-3 relative z-10">
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
                  {SITE_LINKS.whatsappDisplay}
                </span>
              </div>
            </div>

            <a
              href={SITE_LINKS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full border border-white/20 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 font-mono text-xs transition-colors flex items-center gap-1 relative z-10"
            >
              <span>Chat Now</span>
              <span>&rarr;</span>
            </a>
          </div>

          {/* Email Card */}
          <div className="shining-card p-4 flex items-center justify-between">
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-[#38bdf8] flex items-center justify-center border border-sky-500/30">
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </div>
              <span className="font-mono text-xs text-slate-300 truncate max-w-[170px]">
                {SITE_LINKS.email}
              </span>
            </div>

            <button
              onClick={copyEmail}
              className="px-3.5 py-1.5 rounded-full border border-white/20 hover:border-[#38bdf8] text-slate-300 hover:text-[#38bdf8] font-mono text-xs transition-colors relative z-10"
            >
              Copy Email
            </button>
          </div>

          {/* Social Links Row */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={SITE_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[#0B0F17]/90 border border-white/10 hover:border-[#22d3ee]/40 text-slate-300 hover:text-white font-mono text-xs flex items-center justify-between transition-colors shadow-sm"
            >
              <span>LinkedIn Profile</span>
              <span className="material-symbols-outlined text-[15px]">open_in_new</span>
            </a>

            <a
              href={SITE_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[#0B0F17]/90 border border-white/10 hover:border-[#22d3ee]/40 text-slate-300 hover:text-white font-mono text-xs flex items-center justify-between transition-colors shadow-sm"
            >
              <span>GitHub Repos</span>
              <span className="material-symbols-outlined text-[15px]">open_in_new</span>
            </a>
          </div>
        </div>

        {/* Right Column: Discovery Form (7 Cols) - Exact Match to Screenshot with Shining Edges */}
        <div className="lg:col-span-7 shining-card p-6 flex flex-col gap-4">
          {/* Top Form Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
            <span className="text-slate-400 font-bold tracking-wider">
              DISCOVERY FORM
            </span>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative">
              {/* Hidden Honeypot Field */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 opacity-0 pointer-events-none"
              />

              {/* Required Row: Name + Email or WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="lead-name" className="font-mono text-xs text-slate-300">
                    Name *
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="px-3.5 py-2.5 rounded-xl bg-[#080B11] border border-white/10 text-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#22d3ee] transition-colors placeholder:text-slate-600"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="lead-contact" className="font-mono text-xs text-slate-300">
                    Email or WhatsApp *
                  </label>
                  <input
                    id="lead-contact"
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="email@company.com or +92 300..."
                    className="px-3.5 py-2.5 rounded-xl bg-[#080B11] border border-white/10 text-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#22d3ee] transition-colors placeholder:text-slate-600"
                  />
                </div>
              </div>

              {/* Required: Bottleneck to Automate */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="lead-bottleneck" className="font-mono text-xs text-slate-300">
                  Bottleneck to Automate *
                </label>
                <textarea
                  id="lead-bottleneck"
                  required
                  rows={3}
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  placeholder="Describe your current manual hurdle (e.g. answering inquiries after hours, manual order tracking, ad lead routing)..."
                  className="px-3.5 py-2.5 rounded-xl bg-[#080B11] border border-white/10 text-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#22d3ee] transition-colors placeholder:text-slate-600 resize-none"
                ></textarea>
              </div>

              {/* Collapsible Optional Details Toggle */}
              <div>
                <button
                  type="button"
                  onClick={() => setShowOptionalDetails((prev) => !prev)}
                  aria-expanded={showOptionalDetails}
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#22d3ee] hover:text-[#38bdf8] transition-colors"
                >
                  {showOptionalDetails ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                  <span>
                    {showOptionalDetails
                      ? "Hide optional details"
                      : "Add more details (Company, Role, Staff Count, AI Pillar)"}
                  </span>
                </button>
              </div>

              {showOptionalDetails && (
                <div className="flex flex-col gap-4 p-4 rounded-2xl bg-[#080B11]/70 border border-white/10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="lead-company" className="font-mono text-xs text-slate-300">
                        Company Name (Optional)
                      </label>
                      <input
                        id="lead-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Realty"
                        className="px-3.5 py-2.5 rounded-xl bg-[#080B11] border border-white/10 text-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#22d3ee] transition-colors placeholder:text-slate-600"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="lead-role" className="font-mono text-xs text-slate-300">
                        Role / Title (Optional)
                      </label>
                      <input
                        id="lead-role"
                        type="text"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="Founder / Operations Lead"
                        className="px-3.5 py-2.5 rounded-xl bg-[#080B11] border border-white/10 text-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#22d3ee] transition-colors placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="lead-staff" className="font-mono text-xs text-slate-300">
                        Staff Count (Optional)
                      </label>
                      <select
                        id="lead-staff"
                        value={formData.staffCount}
                        onChange={(e) => setFormData({ ...formData, staffCount: e.target.value })}
                        className="px-3.5 py-2.5 rounded-xl bg-[#080B11] border border-white/10 text-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#22d3ee] transition-colors"
                      >
                        <option value="">Select team size (optional)</option>
                        <option value="1 - 5 team members">1 - 5 team members</option>
                        <option value="6 - 20 team members">6 - 20 team members</option>
                        <option value="21 - 50 team members">21 - 50 team members</option>
                        <option value="50+ enterprise">50+ enterprise</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="lead-pillar" className="font-mono text-xs text-slate-300">
                        AI Pillar / Package (Optional)
                      </label>
                      <select
                        id="lead-pillar"
                        value={formData.pillar}
                        onChange={(e) => setFormData({ ...formData, pillar: e.target.value })}
                        className="px-3.5 py-2.5 rounded-xl bg-[#080B11] border border-white/10 text-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#22d3ee] transition-colors"
                      >
                        <option value="">Select AI pillar (optional)</option>
                        <option value="TIER 1: STARTER ($350) — Web AI Chatbot">
                          TIER 1: STARTER ($350) — Web AI Chatbot
                        </option>
                        <option value="TIER 2: GROWTH ($650) — Web + WhatsApp AI Bot">
                          TIER 2: GROWTH ($650) — Web + WhatsApp AI Bot
                        </option>
                        <option value="TIER 3: ENTERPRISE ($1,200) — Web + WhatsApp + n8n Sync Pipeline">
                          TIER 3: ENTERPRISE ($1,200) — Web + WhatsApp + n8n Sync Pipeline
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {errorMsg && (
                <div
                  role="alert"
                  className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/40 text-rose-300 text-xs font-mono"
                >
                  {errorMsg}
                </div>
              )}

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#0ea5e9] hover:from-[#38bdf8] hover:to-[#0284c7] disabled:opacity-60 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_24px_rgba(34,211,238,0.45)] hover:shadow-[0_0_32px_rgba(34,211,238,0.65)] hover:scale-[1.01] flex items-center justify-center gap-2 mt-1 text-center leading-tight"
              >
                {isSubmitting ? (
                  <span>Syncing with Google Sheets...</span>
                ) : (
                  <span>SEND REQUEST &amp; GET FREE 60-SEC DEMO WALKTHROUGH</span>
                )}
              </button>
            </form>
          ) : (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-center flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-emerald-400 text-[36px]">
                check_circle
              </span>
              <h3 className="font-display font-bold text-white text-base">
                Request Sent Successfully!
              </h3>
              <p className="text-slate-300 text-xs font-sans max-w-md">
                Your details have been submitted to the Google Sheet and an email alert has been dispatched. You can also send the summary directly on WhatsApp for faster follow-up.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                <a
                  href={buildWhatsAppLink(submittedSummary)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send Details on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setErrorMsg(null);
                  }}
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors"
                >
                  Submit another request
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
