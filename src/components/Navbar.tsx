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
        { id: "interactive-agent", path: "agent" },
        { id: "deployments", path: "projects" },
        { id: "tech-arsenal", path: "stack" },
        { id: "roi-calculator", path: "roi" },
        { id: "experience", path: "about" },
        { id: "demo-form", path: "contact" },
      ];

      const scrollPos = window.scrollY + 220;
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
    { label: "AI Agent", href: "#interactive-agent", path: "agent" },
    { label: "Projects", href: "#deployments", path: "projects" },
    { label: "Stack", href: "#tech-arsenal", path: "stack" },
    { label: "ROI", href: "#roi-calculator", path: "roi" },
    { label: "About", href: "#experience", path: "about" },
    { label: "Contact", href: "#demo-form", path: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-surface-container-lowest/85 backdrop-blur-xl border-b border-surface-container-highest/30">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Brand / Verified Architect Pill */}
        <a href="#home" className="flex items-center gap-2 group shrink-0">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/30 shadow-[0_0_12px_rgba(16,185,129,0.12)]">
            <div className="relative flex h-2 w-2 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-sm sm:text-base tracking-tight text-on-surface leading-none font-bold">
                Nadeem Anjum
              </span>
              <span className="font-label-caps text-[10px] tracking-wider uppercase text-on-surface-variant hidden sm:inline">
                AI Solutions &amp; Automation Architect
              </span>
            </div>
          </div>
        </a>

        {/* Center Capsule Nav (Streamlined, short titles, zero collision) */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-surface-container-low border border-outline-variant/20">
          {navItems.map((item) => {
            const isActive = activePath === item.path;
            return (
              <a
                key={item.path}
                href={item.href}
                onClick={() => setActivePath(item.path)}
                className={`px-3 py-1 rounded-full text-xs font-code-terminal transition-all whitespace-nowrap ${
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
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            className="hidden xl:flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-code-terminal text-xs transition-all border border-outline-variant/30 whitespace-nowrap"
            href="https://wa.me/923077970277"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-label-caps text-[10px] uppercase text-secondary font-bold">WA:</span>
            <span>+92 307 7970277</span>
          </a>

          <a
            className="flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container font-code-terminal text-xs font-bold shadow-[0_0_20px_-4px_rgba(16,185,129,0.35)] hover:bg-primary hover:text-on-primary transition-all group whitespace-nowrap"
            href="#demo-form"
          >
            <span>Book 60-Sec Demo</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>

          {/* Profile Avatar with user's uploaded IMG_0048.JPG */}
          <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/40 shrink-0 bg-surface-container-highest">
            <img
              src="/IMG_0048.JPG"
              alt="Nadeem Anjum"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/profile.jpg";
              }}
            />
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
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
        <div className="lg:hidden bg-surface-container-lowest/95 border-b border-surface-container-highest px-4 py-3 flex flex-col gap-1.5">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.href}
              onClick={() => {
                setActivePath(item.path);
                setMobileMenuOpen(false);
              }}
              className={`px-3 py-2 rounded-lg text-xs font-code-terminal transition-colors flex items-center justify-between ${
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
              className="text-secondary font-code-terminal text-xs flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[15px]">chat</span>
              <span>+92 307 7970277</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
