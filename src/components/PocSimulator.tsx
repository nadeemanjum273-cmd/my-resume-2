import React, { useState, useRef, useEffect } from "react";
import { SITE_LINKS } from "../data/portfolioConfig";

interface Message {
  sender: "agent" | "user";
  text: string;
}

interface PocSimulatorProps {
  onTriggerToast?: (msg: string) => void;
}

export const PocSimulator: React.FC<PocSimulatorProps> = ({ onTriggerToast }) => {
  const initialMessages: Message[] = [
    {
      sender: "agent",
      text: "Hello! 👋 Ask about Nadeem Anjum's projects (including Mind_Dreams), Computer Science degree, WhatsApp contact, or pricing packages—or tap a quick prompt below!",
    },
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const chatStreamRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatStreamRef.current) {
      chatStreamRef.current.scrollTop = chatStreamRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const sendQuery = (query: string) => {
    if (!query.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: query }]);
    setInputValue("");
    setIsTyping(true);

    const q = query.toLowerCase();

    setTimeout(() => {
      let responseText =
        "Nadeem specializes in automated chatbots, AI workflows, and n8n webhook integrations tailored for practical business tasks.";

      if (q.includes("mind_dreams") || q.includes("mind")) {
        responseText =
          "Mind_Dreams is a personal project: a 24/7 AI Customer Support chatbot built with Google Gemini, Next.js 14, and 3-way Google Sheets synchronization for orders, refund eligibility, and payout logging.";
      } else if (q.includes("education") || q.includes("degree")) {
        responseText =
          "Nadeem graduated in Computer Science from Multan, Pakistan with foundations in data structures, algorithms, and relational databases, alongside AI & Python ML coursework (Scikit-Learn and LLM applications).";
      } else if (q.includes("whatsapp") || q.includes("contact")) {
        responseText = `You can reach Nadeem directly on WhatsApp at ${SITE_LINKS.whatsappDisplay} or email ${SITE_LINKS.email}. He delivers working 48-hour POCs under a 50% deposit rule with 100% IP transfer.`;
      } else if (q.includes("pack") || q.includes("price") || q.includes("pricing")) {
        responseText =
          "Nadeem offers three transparent packages: Tier 1 ($350 Starter Web AI Chatbot), Tier 2 ($650 Growth: Web + WhatsApp Bot + n8n Alerts), and Tier 3 ($1,200 Enterprise Full n8n Sync Pipeline).";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "agent",
          text: responseText,
        },
      ]);
      setIsTyping(false);

      if (onTriggerToast) {
        onTriggerToast("Answer loaded!");
      }
    }, 600);
  };

  const handleAgentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendQuery(inputValue);
  };

  const resetChat = () => {
    setMessages(initialMessages);
  };

  return (
    <section className="w-full flex flex-col gap-6" id="interactive-agent">
      <div className="w-full shining-card p-5 sm:p-6 flex flex-col justify-between min-h-[420px]">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#22d3ee]/20 text-[#22d3ee] flex items-center justify-center border border-[#22d3ee]/30">
              <span className="material-symbols-outlined text-[20px]">smart_toy</span>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <h2 className="font-display font-bold text-white text-base sm:text-lg">
                Ask About My Work
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-cyan-500/10 text-[#22d3ee] border border-cyan-500/30">
                Guided Q&amp;A
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={resetChat}
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-mono text-xs flex items-center gap-1 transition-colors border border-white/10"
          >
            <span>&#8634;</span>
            <span>Reset</span>
          </button>
        </div>

        {/* Plain Honesty Notice */}
        <p className="pt-3 text-xs font-mono text-slate-400">
          Answers are pre-written from my CV and projects.
        </p>

        {/* Chat Stream Area */}
        <div
          className="flex flex-col gap-4 py-4 overflow-y-auto max-h-[280px] pr-1"
          ref={chatStreamRef}
        >
          {messages.map((m, idx) => (
            <div key={idx} className="flex flex-col gap-1.5">
              {m.sender === "agent" ? (
                <div className="flex flex-col gap-1.5 p-4 rounded-2xl rounded-tl-sm bg-[#080B11]/90 border border-[#22d3ee]/30 shadow-md">
                  <p className="text-slate-200 text-xs sm:text-[13px] leading-relaxed font-sans">
                    {m.text}
                  </p>
                </div>
              ) : (
                <div className="self-end max-w-md p-3 rounded-2xl rounded-tr-sm bg-gradient-to-r from-[#22d3ee] to-[#38bdf8] text-[#080B11] text-xs sm:text-[13px] font-medium shadow-md">
                  {m.text}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="p-3 rounded-xl bg-[#080B11]/80 border border-[#22d3ee]/30 text-xs font-mono text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#22d3ee] animate-ping"></span>
              <span>Preparing answer...</span>
            </div>
          )}
        </div>

        {/* Quick Prompts Chips & Input */}
        <div className="flex flex-col gap-3 pt-2">
          <div className="flex items-center gap-2 overflow-x-auto text-xs font-mono text-slate-400">
            <span className="shrink-0 text-slate-500">Try Prompts:</span>
            <button
              type="button"
              onClick={() => sendQuery("Can you explain your Mind_Dreams support build?")}
              className="px-3 py-1 rounded-full bg-white/5 hover:bg-[#22d3ee]/20 hover:text-[#22d3ee] border border-white/10 text-slate-300 text-[11px] transition-colors whitespace-nowrap"
            >
              Mind_Dreams Support?
            </button>
            <button
              type="button"
              onClick={() => sendQuery("What is your education & degree?")}
              className="px-3 py-1 rounded-full bg-white/5 hover:bg-[#22d3ee]/20 hover:text-[#22d3ee] border border-white/10 text-slate-300 text-[11px] transition-colors whitespace-nowrap"
            >
              Education &amp; Degree?
            </button>
            <button
              type="button"
              onClick={() => sendQuery("How can I contact Nadeem on WhatsApp?")}
              className="px-3 py-1 rounded-full bg-white/5 hover:bg-[#22d3ee]/20 hover:text-[#22d3ee] border border-white/10 text-slate-300 text-[11px] transition-colors whitespace-nowrap"
            >
              WhatsApp &amp; Contact?
            </button>
            <button
              type="button"
              onClick={() => sendQuery("What are your packages & pricing?")}
              className="px-3 py-1 rounded-full bg-white/5 hover:bg-[#22d3ee]/20 hover:text-[#22d3ee] border border-white/10 text-slate-300 text-[11px] transition-colors whitespace-nowrap"
            >
              Packages &amp; Pricing?
            </button>
          </div>

          {/* Input Form */}
          <form onSubmit={handleAgentSubmit} className="flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about Mind_Dreams, education, WhatsApp, pricing..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-[#080B11] border border-white/10 text-slate-200 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#22d3ee] transition-colors placeholder:text-slate-500"
            />
            <button
              type="submit"
              className="w-10 h-10 rounded-xl bg-[#22d3ee] hover:bg-[#38bdf8] text-[#080B11] flex items-center justify-center transition-all shadow-[0_0_16px_rgba(34,211,238,0.35)] shrink-0 font-bold"
              aria-label="Send query"
            >
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
