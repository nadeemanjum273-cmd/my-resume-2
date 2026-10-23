import React, { useState, useEffect } from "react";

interface NavbarProps {
  onTriggerToast?: (msg: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onTriggerToast }) => {
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "hero", name: "about" },
        { id: "interactive-agent", name: "assistant" },
        { id: "deployments", name: "projects" },
        { id: "tech-arsenal", name: "arsenal" },
        { id: "roi-calculator", name: "roi" },
        { id: "experience", name: "resume" },
        { id: "demo-form", name: "contact" },
      ];

      const scrollPos = window.scrollY + 200;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s.name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#hero", id: "about" },
    {
      label: "Portfolio Assistant",
      href: "#interactive-agent",
      id: "assistant",
      isAssistant: true,
    },
    { label: "Projects", href: "#deployments", id: "projects" },
    { label: "Technical Arsenal", href: "#tech-arsenal", id: "arsenal" },
    { label: "ROI Calculator", href: "#roi-calculator", id: "roi" },
    { label: "Portfolio & CV", href: "#experience", id: "resume" },
    { label: "Contact", href: "#demo-form", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#080B11]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Profile: Exact Match to Screenshot 1 */}
        <a href="#hero" className="flex items-center gap-2 sm:gap-3 group shrink min-w-0">
          <div className="relative shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-emerald-400/60 p-0.5 bg-[#0B0F17]">
              <img
                src="/IMG_0048.JPG"
                alt="Nadeem Anjum"
                className="w-full h-full rounded-full object-cover object-top"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/profile.jpg";
                }}
              />
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400 border-2 border-[#080B11]"></span>
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-display font-extrabold text-white text-sm sm:text-base tracking-tight leading-tight truncate">
                Nadeem Anjum
              </span>
              <span className="px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shrink-0">
                AVAILABLE
              </span>
            </div>
            <span className="font-mono text-[9.5px] sm:text-[11px] text-[#22d3ee] font-semibold tracking-wider uppercase truncate">
              AI CHATBOT SPECIALIST
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`relative py-1 transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap font-medium text-xs font-mono ${
                  link.isAssistant
                    ? "text-[#22d3ee] font-bold"
                    : isActive
                    ? "text-white font-bold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.isAssistant && (
                  <span className="w-2 h-2 rounded-full bg-[#22d3ee] animate-pulse"></span>
                )}
                <span>{link.label}</span>
                {isActive && !link.isAssistant && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#a855f7] rounded-full"></span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Toggle: Perfect fit on mobile */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <a
            href="#demo-form"
            className="px-2.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#38bdf8] hover:from-[#38bdf8] hover:to-[#22d3ee] text-[#080B11] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-tight sm:tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:shadow-[0_0_28px_rgba(34,211,238,0.5)] hover:scale-105 active:scale-100 flex items-center gap-1 shrink-0 whitespace-nowrap"
          >
            <span>HIRE SPECIALIST</span>
            <span className="hidden sm:inline">&rarr;</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 sm:p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white shrink-0"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-[18px] sm:text-[20px] block">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B0F17]/95 border-b border-white/10 px-4 py-3 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => {
                setActiveSection(link.id);
                setMobileMenuOpen(false);
              }}
              className={`px-3 py-2 rounded-lg text-xs font-mono transition-colors flex items-center justify-between ${
                activeSection === link.id
                  ? "bg-[#22d3ee]/10 text-[#22d3ee] font-bold"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2">
                {link.isAssistant && (
                  <span className="w-2 h-2 rounded-full bg-[#22d3ee]"></span>
                )}
                <span>{link.label}</span>
              </span>
              <span className="text-slate-500">&rarr;</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
