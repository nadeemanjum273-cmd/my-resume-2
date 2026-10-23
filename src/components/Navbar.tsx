import React, { useState, useEffect } from "react";

interface NavbarProps {
  onTriggerToast?: (msg: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onTriggerToast }) => {
  const [activePath, setActivePath] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "home", path: "home" },
        { id: "interactive-agent", path: "interactive-ai-agent" },
        { id: "deployments", path: "case-studies" },
        { id: "tech-arsenal", path: "tech-arsenal" },
        { id: "roi-calculator", path: "roi-calculator" },
        { id: "experience", path: "experience" },
        { id: "demo-form", path: "contact" },
      ];

      const scrollPos = window.scrollY + 200;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActivePath(s.path);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home", path: "home" },
    { label: "Interactive AI Agent", href: "#interactive-agent", path: "interactive-ai-agent" },
    { label: "Case Studies", href: "#deployments", path: "case-studies" },
    { label: "Tech Arsenal", href: "#tech-arsenal", path: "tech-arsenal" },
    { label: "ROI Calculator", href: "#roi-calculator", path: "roi-calculator" },
    { label: "Experience", href: "#experience", path: "experience" },
    { label: "Contact", href: "#demo-form", path: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-space-md">
        {/* Brand / Verified Architect Pill */}
        <div className="flex items-center gap-space-sm">
          <div className="flex items-center gap-space-sm px-space-md py-space-xs rounded-full bg-surface-container-low shadow-[0_0_16px_rgba(16,185,129,0.15)]">
            <div className="relative flex h-2 w-2 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface leading-none">
                Nadeem Anjum
              </span>
              <span className="font-label-caps text-label-caps tracking-wider uppercase text-on-surface-variant">
                AI Solutions &amp; Automation Architect
              </span>
            </div>
          </div>
        </div>

        {/* Center Capsule Nav (Stitch Style) */}
        <nav className="hidden xl:flex items-center gap-space-xs p-space-xs rounded-full bg-surface-container-low">
          {navItems.map((item) => {
            const isActive = activePath === item.path;
            return (
              <a
                key={item.path}
                href={item.href}
                onClick={() => setActivePath(item.path)}
                className={`px-space-md py-space-xs rounded-full font-body-sm text-body-sm transition-all ${
                  isActive
                    ? "bg-primary-container text-on-primary-container font-semibold shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Items */}
        <div className="flex items-center gap-space-sm">
          <a
            className="hidden sm:flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-code-terminal text-code-terminal transition-all"
            href="https://wa.me/923077970277"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-label-caps text-label-caps uppercase text-secondary">WA:</span>
            <span>+92 307 7970277</span>
          </a>

          <a
            className="flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-primary-container text-on-primary-container font-code-terminal text-code-terminal font-semibold shadow-[0_0_24px_-4px_rgba(16,185,129,0.35)] hover:bg-primary hover:text-on-primary transition-all group"
            href="#demo-form"
          >
            <span>Book 60-Sec Demo</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>

          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
            aria-label="Toggle Navigation"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest/95 border-b border-surface-container-highest px-margin py-space-md flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.href}
              onClick={() => {
                setActivePath(item.path);
                setMobileMenuOpen(false);
              }}
              className={`px-4 py-2.5 rounded-lg text-body-sm font-code-terminal transition-colors flex items-center justify-between ${
                activePath === item.path
                  ? "bg-primary-container text-on-primary-container font-bold"
                  : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
              }`}
            >
              <span>{item.label}</span>
              <span className="text-primary text-xs">→</span>
            </a>
          ))}
          <div className="pt-2 border-t border-surface-container-highest flex items-center justify-between">
            <a
              href="https://wa.me/923077970277"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary font-code-terminal text-body-sm flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">chat</span>
              <span>+92 307 7970277</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
