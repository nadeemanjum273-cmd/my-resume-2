import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface NavbarProps {
  onTriggerToast?: (msg: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onTriggerToast }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "tech-stack", "demo", "projects", "calculator", "resume", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#hero", id: "hero" },
    { name: "Tech Stack", href: "#tech-stack", id: "tech-stack" },
    { name: "RAG Assistant", href: "#demo", id: "demo", isLive: true },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "ROI Calculator", href: "#calculator", id: "calculator" },
    { name: "Experience & CV", href: "#resume", id: "resume" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[94%] max-w-7xl z-50">
      <nav
        className={`transition-all duration-300 rounded-2xl px-5 sm:px-6 py-2.5 sm:py-3 border backdrop-blur-xl ${
          isScrolled
            ? "bg-black/85 border-white/15 shadow-2xl shadow-black/80"
            : "bg-black/70 border-white/10 shadow-lg shadow-black/40"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo & Glowing Avatar */}
          <a
            href="#hero"
            className="group flex items-center gap-3 transition-transform hover:scale-[1.02]"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-emerald-300 p-[1.5px] shadow-md shadow-emerald-500/20 group-hover:shadow-emerald-400/40 transition-shadow">
                <div className="w-full h-full rounded-[10px] bg-[#0B0F12] flex items-center justify-center overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Nadeem Anjum"
                    className="w-full h-full object-cover object-top opacity-95 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#0B0F12] flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="absolute w-2 h-2 rounded-full bg-emerald-400"></span>
              </span>
            </div>

            <div>
              <div className="font-display font-extrabold text-white text-sm tracking-tight flex items-center gap-2">
                <span>Nadeem Anjum</span>
                <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-mono border border-emerald-500/30">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>DataCrumb Specialist</span>
                </span>
              </div>
              <div className="text-[10px] font-mono tracking-wider text-slate-400 group-hover:text-emerald-400 transition-colors uppercase">
                Senior Frontend &amp; UI/UX Specialist
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-5 text-xs font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative py-1 px-1 transition-all duration-200 flex items-center gap-1.5 ${
                    link.isLive
                      ? "text-emerald-400 font-semibold hover:text-white"
                      : isActive
                      ? "text-white font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.isLive && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                    </span>
                  )}
                  <span>{link.name}</span>

                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 to-teal-300 rounded-full"></span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="group bg-emerald-500 hover:bg-emerald-400 text-black font-display font-bold text-xs uppercase tracking-wider rounded-full px-5 py-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-1.5"
            >
              <span>Hire Specialist</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/10 space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2 rounded-lg text-xs font-mono transition-colors ${
                  activeSection === link.id
                    ? "bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/30"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-2">
                  {link.isLive && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>}
                  {link.name}
                </span>
                <span className="text-[10px] text-slate-500">→</span>
              </a>
            ))}

            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-full bg-emerald-500 text-black font-display font-bold text-xs text-center uppercase tracking-wider block hover:bg-emerald-400 transition-colors"
              >
                Book Walkthrough / Demo
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
