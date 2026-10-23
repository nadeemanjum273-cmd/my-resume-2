import React, { useState, useRef, useEffect } from "react";

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
      text: "Hello! 👋 I'm My Portfolio Assistant, an autonomous RAG agent trained on all of Nadeem Anjum's verified projects (including Mind_Dreams), Computer Science degree, AI skills, and delivery guarantees. Ask me anything or tap a prompt below!",
    },
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [queryStream, setQueryStream] = useState([
    {
      query: '"Initial System RAG Index..."',
      match: "99.2% match",
      path: "knowledge/projects/mind_dreams_rag.json",
    },
    {
      query: '"Credentials & Education ..."',
      match: "98.7% match",
      path: "knowledge/credentials/education_rag.json",
    },
  ]);

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

    // Update Live RAG Vector Query Stream
    setQueryStream([
      {
        query: `"${query.slice(0, 26)}..."`,
        match: "99.1% match",
        path: q.includes("mind")
          ? "knowledge/projects/mind_dreams_rag.json"
          : q.includes("price") || q.includes("pack")
          ? "knowledge/pricing/packages_roi.json"
          : "knowledge/credentials/education_rag.json",
      },
      ...queryStream.slice(0, 1),
    ]);

    setTimeout(() => {
      let responseText =
        "Nadeem specializes in autonomous agentic workflows, VoiceFlow bots, and n8n webhook orchestration with verified client ROI.";

      if (q.includes("mind_dreams") || q.includes("mind")) {
        responseText =
          "Mind_Dreams is an autonomous 24/7 AI Customer Support system built with Google Gemini, Next.js 14, and real-time 3-way Google Sheets synchronization for orders, refund eligibility, and automated bank payout logging.";
      } else if (q.includes("education") || q.includes("degree")) {
        responseText =
          "Nadeem graduated in Computer Science from Multan, Pakistan with strong foundations in data structures, algorithms, and relational databases, alongside specialized AI Fellowships in Python ML, Scikit-Learn, and Vector RAG.";
      } else if (q.includes("whatsapp") || q.includes("contact")) {
        responseText =
          "You can reach Nadeem directly on WhatsApp at +92 307 7970277 or email nadeemanjum273@gmail.com. He delivers working 48-hour POCs under a 50% deposit safety rule with 100% IP transfer.";
      } else if (q.includes("pack") || q.includes("price") || q.includes("pricing")) {
        responseText =
          "Nadeem offers high-ROI packages: Tier 1 ($450 Fixed POC for 24/7 FAQ Chatbot), Tier 2 ($650 Most Popular: Web + WhatsApp Cloud Bot + n8n CRM Sync + Calendar Booking), and Full Custom Autonomous Agent Builds.";
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
        onTriggerToast("Vector response retrieved & verified!");
      }
    }, 600);
  };

  const handleAgentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendQuery(inputValue);
  };

  const resetRAGConsole = () => {
    setMessages(initialMessages);
  };

  return (
    <section className="w-full flex flex-col gap-6" id="interactive-agent">
      {/* 2-Column Split Frame: Exact Match to Screenshot 4 */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Card: My Portfolio Assistant (7 Cols) */}
        <div className="lg:col-span-7 shining-card p-5 sm:p-6 flex flex-col justify-between min-h-[460px]">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#22d3ee]/20 text-[#22d3ee] flex items-center justify-center border border-[#22d3ee]/30">
                <span className="material-symbols-outlined text-[20px]">smart_toy</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-white text-base">
                  My Portfolio Assistant
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
            </div>

            <button
              onClick={resetRAGConsole}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-mono text-xs flex items-center gap-1 transition-colors border border-white/10"
            >
              <span>&#8634;</span>
              <span>Reset</span>
            </button>
          </div>

          {/* Chat Stream Area */}
          <div
            className="flex flex-col gap-4 py-4 overflow-y-auto max-h-[260px] pr-1"
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
                <span>Vector search &amp; grounding in progress...</span>
              </div>
            )}
          </div>

          {/* Quick Prompts Chips & Input */}
          <div className="flex flex-col gap-3 pt-2">
            <div className="flex items-center gap-2 overflow-x-auto text-xs font-mono text-slate-400">
              <span className="shrink-0 text-slate-500">Try Prompts:</span>
              <button
                onClick={() => sendQuery("Can you explain your Mind_Dreams support build?")}
                className="px-3 py-1 rounded-full bg-white/5 hover:bg-[#22d3ee]/20 hover:text-[#22d3ee] border border-white/10 text-slate-300 text-[11px] transition-colors whitespace-nowrap"
              >
                Mind_Dreams Support?
              </button>
              <button
                onClick={() => sendQuery("What is your education & degree?")}
                className="px-3 py-1 rounded-full bg-white/5 hover:bg-[#22d3ee]/20 hover:text-[#22d3ee] border border-white/10 text-slate-300 text-[11px] transition-colors whitespace-nowrap"
              >
                Education &amp; Degree?
              </button>
              <button
                onClick={() => sendQuery("How can I contact Nadeem on WhatsApp?")}
                className="px-3 py-1 rounded-full bg-white/5 hover:bg-[#22d3ee]/20 hover:text-[#22d3ee] border border-white/10 text-slate-300 text-[11px] transition-colors whitespace-nowrap"
              >
                WhatsApp &amp; Contact?
              </button>
              <button
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

        {/* Right Card: Live RAG Vector Retrieval Engine (5 Cols) */}
        <div className="lg:col-span-5 shining-card p-5 sm:p-6 flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#22d3ee] text-[20px]">database</span>
              <span className="font-display font-bold text-white text-base">
                Live RAG Vector Retrieval Engine
              </span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              VECTOR STORE READY
            </span>
          </div>

          {/* 3 Status Indicator Rows */}
          <div className="flex flex-col gap-2.5 py-4">
            <div className="p-3 rounded-xl bg-[#080B11]/90 border border-white/5 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#22d3ee]"></span>
                <span>1. Vector Embeddings (Chunks)</span>
              </div>
              <span className="text-[#22d3ee] font-bold">Indexed</span>
            </div>

            <div className="p-3 rounded-xl bg-[#080B11]/90 border border-white/5 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#a855f7]"></span>
                <span>2. Cosine Similarity Matching</span>
              </div>
              <span className="text-[#a855f7] font-bold">Active</span>
            </div>

            <div className="p-3 rounded-xl bg-[#080B11]/90 border border-white/5 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#34d399]"></span>
                <span>3. Grounded LLM Response</span>
              </div>
              <span className="text-[#34d399] font-bold">Zero Hallucination</span>
            </div>
          </div>

          {/* Real-Time RAG Vector Query Stream */}
          <div className="flex flex-col gap-2.5 pt-2 border-t border-white/10">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Real-Time RAG Vector Query Stream:</span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>LIVE</span>
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {queryStream.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#080B11] border border-white/5 flex flex-col gap-1 font-mono text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold truncate max-w-[200px]">
                      {item.query}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-[#22d3ee]/10 text-[#22d3ee] text-[10px] font-bold border border-[#22d3ee]/20">
                      {item.match}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 flex items-center gap-1">
                    <span>↳</span>
                    <span className="truncate">{item.path}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
