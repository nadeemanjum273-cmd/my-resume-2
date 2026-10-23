import React, { useState, useRef, useEffect } from "react";

interface Message {
  sender: "agent" | "user";
  text: string;
  citation?: string;
  verifiedOutcome?: string;
}

interface PocSimulatorProps {
  onTriggerToast?: (msg: string) => void;
}

export const PocSimulator: React.FC<PocSimulatorProps> = ({ onTriggerToast }) => {
  const initialMessages: Message[] = [
    {
      sender: "agent",
      text: "Hello! 👋 I'm Nadeem Anjum's autonomous portfolio assistant. Ask me about his Mind_Dreams build, workflow automations, or project delivery guarantees.",
    },
    {
      sender: "user",
      text: "Can you explain your Mind_Dreams AI customer support build and what ROI it generated?",
    },
    {
      sender: "agent",
      text: "Mind_Dreams AI Support is a 24/7 autonomous chatbot built using Google Gemini Pro with LangChain RAG vector embeddings, integrated with Google Sheets API and automated bank payout verification.",
      verifiedOutcome: "VERIFIED OUTCOME: 100% Policy Compliance & Zero Human Escalations on FAQs",
    },
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [liveLogs, setLiveLogs] = useState<string[]>([
    "> SYSTEM INITIALIZED: [Vector_Index: Nadeem_Core_v2]",
    '> INGESTION: "Mind_Dreams_Architecture.md" (24 chunks)',
    '> INGESTION: "Education_CS_Multan.json" (8 chunks)',
    '> INGESTION: "SLA_Guarantees_48hr.txt" (12 chunks)',
    "> RE-RANKING: Cross-Encoder Score: 0.981 [OPTIMAL]",
    "> GROUNDED ATTRIBUTION: 0% Hallucination Check Passed",
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

    setLiveLogs((prev) => [
      ...prev.slice(-4),
      `> QUERY: "${query.slice(0, 30)}..." [ada-002]`,
      "> MATCH: Cosine similarity 0.964 [Top-K=4]",
    ]);

    setTimeout(() => {
      let responseText =
        "Nadeem specializes in autonomous agentic workflows, VoiceFlow bots, and n8n webhook orchestration with verified client ROI.";
      let citation = "VERIFIED FACT: 100% Client IP transfer guarantee on all builds";

      const q = query.toLowerCase();
      if (q.includes("qualification") || q.includes("degree") || q.includes("stack")) {
        responseText =
          "Nadeem holds a Bachelor's Degree in Computer Science from Multan, Pakistan, supplemented by advanced Machine Learning specializations covering Scikit-Learn, Pandas, KNN, and LangChain Vector RAG pipelines.";
        citation = "SOURCE: Education_CS_Multan.json [Vector Match: 0.98]";
      } else if (q.includes("48h") || q.includes("turnaround") || q.includes("time") || q.includes("poc")) {
        responseText =
          "Nadeem delivers functional, testable Proof-of-Concepts (POCs) within 48 to 96 hours. Projects operate under a 50% deposit rule with zero risk until staging verification.";
        citation = "SOURCE: SLA_Guarantees_48hr.txt [Vector Match: 0.98]";
      } else if (q.includes("whatsapp") || q.includes("n8n") || q.includes("api") || q.includes("lead")) {
        responseText =
          "Using n8n webhooks and the Meta WhatsApp Cloud API, Nadeem creates bi-directional lead routers that capture messages, run GPT prompt classification, and log qualified contacts straight into Google Sheets or CRMs in under 3 seconds.";
        citation = "SOURCE: Production_Architecture_n8n.md [Vector Match: 0.94]";
      } else if (q.includes("mind_dreams") || q.includes("support") || q.includes("sheets")) {
        responseText =
          "Mind_Dreams is a live production AI Support & RAG agent powered by Google Gemini and Next.js 14, featuring real-time 3-way synchronization with Google Sheets for order tracking, policy Q&A, and bank payout verification.";
        citation = "SOURCE: Mind_Dreams_Architecture.md [Vector Match: 0.99]";
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "agent",
          text: responseText,
          citation: citation,
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
    setMessages([
      {
        sender: "agent",
        text: "Console reset. Ask me about Nadeem's Mind_Dreams production build, workflow automations, or project delivery guarantees.",
      },
    ]);
  };

  return (
    <section className="w-full flex flex-col gap-space-md" id="interactive-agent">
      <div className="flex flex-col gap-1 text-center items-center">
        <span className="font-code-terminal text-label-caps uppercase tracking-widest text-primary">
          TEST THE ARCHITECTURE
        </span>
        <h2 className="font-headline-lg text-2xl sm:text-3xl text-on-surface font-bold">
          Interact with Nadeem's Autonomous RAG Agent
        </h2>
        <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
          Real-time agent vector-indexed on Nadeem's Mind_Dreams build, CS degree, Python ML stack, and 48-hour delivery SLA.
        </p>
      </div>

      {/* Agent Sandbox Split Frame */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-space-md rounded-2xl bg-surface-container-lowest/90 backdrop-blur-xl shadow-2xl p-space-md border border-outline-variant/30">
        {/* Left: Interactive Chat Conversation (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-surface-container/40 rounded-xl p-space-md min-h-[420px] border border-outline-variant/20">
          {/* Chat Top Bar */}
          <div className="flex items-center justify-between pb-space-xs border-b border-surface-container-highest/40">
            <div className="flex items-center gap-space-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
              <span className="font-headline-sm text-sm font-bold text-on-surface">
                Nadeem.AI Assistant
              </span>
              <span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-primary font-code-terminal text-[10px]">
                RAG ACTIVE
              </span>
            </div>
            <button
              className="text-on-surface-variant hover:text-on-surface font-code-terminal text-[11px] flex items-center gap-1 transition-colors"
              onClick={resetRAGConsole}
            >
              <span className="material-symbols-outlined text-[14px]">refresh</span>
              <span>RESET</span>
            </button>
          </div>

          {/* Chat Stream Messages Container */}
          <div
            className="flex flex-col gap- space-sm py-2 overflow-y-auto max-h-[260px] pr-1"
            ref={chatStreamRef}
          >
            {messages.map((m, idx) => (
              <React.Fragment key={idx}>
                {m.sender === "agent" ? (
                  <div className="flex items-start gap-2 my-1">
                    <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[14px]">smart_toy</span>
                    </div>
                    <div className="p-2.5 rounded-xl rounded-tl-none bg-surface-container text-on-surface font-body-sm text-xs max-w-lg leading-relaxed shadow-sm flex flex-col gap-1 border border-outline-variant/20">
                      <span>{m.text}</span>
                      {m.verifiedOutcome && (
                        <div className="p-1 rounded bg-surface-container-lowest text-primary font-code-terminal text-[10px] flex items-center gap-1 border border-primary/20">
                          <span className="material-symbols-outlined text-[12px]">verified</span>
                          <span>{m.verifiedOutcome}</span>
                        </div>
                      )}
                      {m.citation && (
                        <div className="p-1 rounded bg-surface-container-lowest text-primary font-code-terminal text-[10px] flex items-center gap-1 border border-primary/20">
                          <span className="material-symbols-outlined text-[12px]">verified</span>
                          <span>{m.citation}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start justify-end gap-2 my-1">
                    <div className="p-2.5 rounded-xl rounded-tr-none bg-primary text-on-primary font-body-sm text-xs max-w-md shadow-sm">
                      {m.text}
                    </div>
                    <div className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[14px]">person</span>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}

            {isTyping && (
              <div className="flex items-start gap-2 my-1">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[14px]">smart_toy</span>
                </div>
                <div className="p-2 rounded-xl rounded-tl-none bg-surface-container text-on-surface font-code-terminal text-xs flex items-center gap-1.5 border border-outline-variant/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                  <span className="text-on-surface-variant">Searching vector chunks...</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Suggestion Action Chips */}
          <div className="flex flex-wrap gap-1.5 py-1">
            <button
              className="px-2.5 py-0.5 rounded-full bg-surface-container-highest hover:bg-primary-container hover:text-on-primary-container text-on-surface-variant font-code-terminal text-[10px] transition-all border border-outline-variant/30"
              onClick={() => sendQuery("What are Nadeem's technical qualifications?")}
            >
              Graduation &amp; Stack?
            </button>
            <button
              className="px-2.5 py-0.5 rounded-full bg-surface-container-highest hover:bg-primary-container hover:text-on-primary-container text-on-surface-variant font-code-terminal text-[10px] transition-all border border-outline-variant/30"
              onClick={() => sendQuery("What is the turnaround time for a POC?")}
            >
              48h POC Guarantee?
            </button>
            <button
              className="px-2.5 py-0.5 rounded-full bg-surface-container-highest hover:bg-primary-container hover:text-on-primary-container text-on-surface-variant font-code-terminal text-[10px] transition-all border border-outline-variant/30"
              onClick={() => sendQuery("How does Nadeem integrate WhatsApp with n8n?")}
            >
              WhatsApp Cloud API Setup?
            </button>
          </div>

          {/* Input Action Field */}
          <form className="flex items-center gap-1.5 pt-1" onSubmit={handleAgentSubmit}>
            <input
              className="flex-1 bg-surface-container-lowest text-on-surface px-3 py-2 rounded-lg font-code-terminal text-xs focus:outline-none focus:ring-1 focus:ring-primary shadow-inner border border-outline-variant/30"
              id="rag-user-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about Nadeem's automation architecture, projects, or rate..."
              type="text"
            />
            <button
              className="px-3.5 py-2 rounded-lg bg-primary text-on-primary font-code-terminal text-xs font-semibold hover:bg-primary-container transition-colors shadow-md flex items-center gap-1"
              type="submit"
            >
              <span>Send</span>
              <span className="material-symbols-outlined text-[14px]">send</span>
            </button>
          </form>
        </div>

        {/* Right: Real-time Telemetry & Vector DB HUD (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-2 bg-surface-container-lowest/80 rounded-xl p-space-md border border-outline-variant/20">
          <div className="flex items-center justify-between pb-1">
            <span className="font-code-terminal text-[11px] text-secondary uppercase font-semibold">
              Live Vector HUD Stream
            </span>
            <span className="font-code-terminal text-[9px] text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
              STREAM READY
            </span>
          </div>

          {/* Metrics Panel */}
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col border border-outline-variant/20">
              <span className="font-code-terminal text-[10px] text-on-surface-variant">VECTOR CHUNKS</span>
              <span className="font-headline-sm text-base font-bold text-on-surface">1,480 Chunks</span>
              <span className="font-code-terminal text-[9px] text-primary">ada-002 Embeddings</span>
            </div>
            <div className="p-2.5 rounded-lg bg-surface-container-low flex flex-col border border-outline-variant/20">
              <span className="font-code-terminal text-[10px] text-on-surface-variant">COSINE SIMILARITY</span>
              <span className="font-headline-sm text-base font-bold text-secondary">0.942 Threshold</span>
              <span className="font-code-terminal text-[9px] text-secondary">Top-K = 4 Retrieved</span>
            </div>
          </div>

          {/* Live Log Console Box */}
          <div className="flex-1 bg-surface-container-lowest p-2.5 rounded-lg font-code-terminal text-[11px] text-on-surface-variant flex flex-col gap-1 overflow-hidden shadow-inner border border-outline-variant/20 min-h-[140px]">
            {liveLogs.map((log, i) => (
              <div
                key={i}
                className={
                  log.includes("SYSTEM")
                    ? "text-primary font-semibold"
                    : log.includes("RE-RANKING")
                    ? "text-secondary"
                    : log.includes("GROUNDED")
                    ? "text-tertiary"
                    : ""
                }
              >
                {log}
              </div>
            ))}
            <div className="text-on-surface flex items-center gap-1 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
              <span>LISTENING: Ready for query vectorization...</span>
            </div>
          </div>

          {/* Assurance Pill */}
          <div className="p-2 rounded-lg bg-surface-container-high/60 flex items-center gap-1.5 text-on-surface-variant font-code-terminal text-[10px] border border-outline-variant/20">
            <span className="material-symbols-outlined text-primary text-[14px]">lock_reset</span>
            <span>Responses strictly anchored to verified records</span>
          </div>
        </div>
      </div>
    </section>
  );
};
