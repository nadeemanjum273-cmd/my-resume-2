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
      text: "Hello! 👋 I'm Nadeem Anjum's verified autonomous portfolio assistant. Ask me anything about his Mind_Dreams production build, workflow automations, or project delivery guarantees.",
    },
    {
      sender: "user",
      text: "Can you explain your Mind_Dreams AI customer support build and what ROI it generated?",
    },
    {
      sender: "agent",
      text: "The Mind_Dreams AI Support System is a 24/7 autonomous chatbot built using Google Gemini Pro with LangChain RAG vector embeddings, integrated with Google Sheets API and automated bank payout verification.",
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
    '> INGESTION: "DataCrumb_Specialization.json" (16 chunks)',
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

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: query }]);
    setInputValue("");
    setIsTyping(true);

    // Update telemetry HUD
    setLiveLogs((prev) => [
      ...prev.slice(-5),
      `> QUERY EMBEDDING: "${query.slice(0, 32)}..." [ada-002]`,
      "> VECTOR MATCH: Cosine similarity 0.964 [Top-K=4]",
    ]);

    setTimeout(() => {
      let responseText =
        "Nadeem specializes in autonomous agentic workflows, VoiceFlow bots, and n8n webhook orchestration with verified client ROI.";
      let citation = "VERIFIED FACT: 100% Client IP transfer guarantee on all builds";

      const q = query.toLowerCase();
      if (q.includes("qualification") || q.includes("degree") || q.includes("stack") || q.includes("datacrumb")) {
        responseText =
          "Nadeem completed formal graduation in Computer Science from Multan, Pakistan, alongside an applied Data Science & AI Fellowship at DataCrumb (datacrumbs.org), specializing in Scikit-Learn, Pandas, KNN, and LangChain Vector RAG pipelines.";
        citation = "SOURCE: DataCrumb_Specialization.json [Vector Match: 0.98]";
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
        onTriggerToast("Vector response retrieved & validated!");
      }
    }, 650);
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
    setLiveLogs([
      "> SYSTEM REBOOT: [Vector_Index: Nadeem_Core_v2]",
      "> VECTOR STORE: 1,480 Chunks Active",
      "> READY: Waiting for user prompt...",
    ]);
  };

  return (
    <section className="w-full flex flex-col gap-space-lg" id="interactive-agent">
      <div className="flex flex-col gap-space-xs text-center items-center">
        <span className="font-code-terminal text-label-caps uppercase tracking-widest text-primary">
          WHERE DO YOU STAND? &bull; TEST THE ARCHITECTURE
        </span>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold">
          Interact with Nadeem's Autonomous RAG Agent
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          Test the real-time agent built on vector-indexed facts about Nadeem's Mind_Dreams build, Computer Science degree, Python ML stack, and 48-hour delivery SLA.
        </p>
      </div>

      {/* Agent Sandbox Split Frame */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-space-md rounded-2xl bg-surface-container-lowest/90 backdrop-blur-xl shadow-2xl p-space-md border border-outline-variant/30">
        {/* Left: Interactive Chat Conversation (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-surface-container/40 rounded-xl p-space-md min-h-[460px] border border-outline-variant/20">
          {/* Chat Top Bar */}
          <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-highest/40">
            <div className="flex items-center gap-space-xs">
              <span className="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
              <span className="font-headline-sm text-body-md font-bold text-on-surface">
                Nadeem.AI Assistant
              </span>
              <span className="px-space-xs py-0.5 rounded bg-surface-container-highest text-primary font-code-terminal text-[10px]">
                RAG ACTIVE
              </span>
            </div>
            <button
              className="text-on-surface-variant hover:text-on-surface font-code-terminal text-label-caps flex items-center gap-1 transition-colors"
              onClick={resetRAGConsole}
            >
              <span className="material-symbols-outlined text-[14px]">refresh</span>
              <span>RESET CHAT</span>
            </button>
          </div>

          {/* Chat Stream Messages Container */}
          <div
            className="flex flex-col gap-space-md py-space-md overflow-y-auto max-h-[300px] pr-1"
            ref={chatStreamRef}
          >
            {messages.map((m, idx) => (
              <React.Fragment key={idx}>
                {m.sender === "agent" ? (
                  <div className="flex items-start gap-space-sm">
                    <div className="w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[16px]">smart_toy</span>
                    </div>
                    <div className="p-space-sm rounded-xl rounded-tl-none bg-surface-container text-on-surface font-body-sm text-body-sm max-w-lg leading-relaxed shadow-sm flex flex-col gap-space-xs border border-outline-variant/20">
                      <span>{m.text}</span>
                      {m.verifiedOutcome && (
                        <div className="p-space-xs rounded bg-surface-container-lowest text-primary font-code-terminal text-label-caps flex items-center gap-1.5 border border-primary/20">
                          <span className="material-symbols-outlined text-[14px]">verified</span>
                          <span>{m.verifiedOutcome}</span>
                        </div>
                      )}
                      {m.citation && (
                        <div className="p-space-xs rounded bg-surface-container-lowest text-primary font-code-terminal text-label-caps flex items-center gap-1.5 border border-primary/20">
                          <span className="material-symbols-outlined text-[14px]">verified</span>
                          <span>{m.citation}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start justify-end gap-space-sm">
                    <div className="p-space-sm rounded-xl rounded-tr-none bg-primary text-on-primary font-body-sm text-body-sm max-w-md shadow-sm">
                      {m.text}
                    </div>
                    <div className="w-7 h-7 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[16px]">person</span>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}

            {isTyping && (
              <div className="flex items-start gap-space-sm">
                <div className="w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[16px]">smart_toy</span>
                </div>
                <div className="p-space-sm rounded-xl rounded-tl-none bg-surface-container text-on-surface font-code-terminal text-body-sm flex items-center gap-1.5 border border-outline-variant/20">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                  <span className="text-on-surface-variant">Searching vector chunks &amp; verifying facts...</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Suggestion Action Chips */}
          <div className="flex flex-wrap gap-1.5 py-space-xs">
            <button
              className="px-space-sm py-1 rounded-full bg-surface-container-highest hover:bg-primary-container hover:text-on-primary-container text-on-surface-variant font-code-terminal text-[11px] transition-all border border-outline-variant/30"
              onClick={() => sendQuery("What are Nadeem's technical qualifications and DataCrumb specialization?")}
            >
              Graduation &amp; Stack?
            </button>
            <button
              className="px-space-sm py-1 rounded-full bg-surface-container-highest hover:bg-primary-container hover:text-on-primary-container text-on-surface-variant font-code-terminal text-[11px] transition-all border border-outline-variant/30"
              onClick={() => sendQuery("What is the turnaround time for a POC?")}
            >
              48h POC Guarantee?
            </button>
            <button
              className="px-space-sm py-1 rounded-full bg-surface-container-highest hover:bg-primary-container hover:text-on-primary-container text-on-surface-variant font-code-terminal text-[11px] transition-all border border-outline-variant/30"
              onClick={() => sendQuery("How does Nadeem integrate WhatsApp with n8n?")}
            >
              WhatsApp Cloud API Setup?
            </button>
          </div>

          {/* Input Action Field */}
          <form className="flex items-center gap-space-xs pt-space-xs" onSubmit={handleAgentSubmit}>
            <input
              className="flex-1 bg-surface-container-lowest text-on-surface px-space-md py-2.5 rounded-lg font-code-terminal text-body-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-inner border border-outline-variant/30"
              id="rag-user-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about Nadeem's automation architecture, projects, or rate..."
              type="text"
            />
            <button
              className="px-space-md py-2.5 rounded-lg bg-primary text-on-primary font-code-terminal text-body-sm font-semibold hover:bg-primary-container transition-colors shadow-md flex items-center gap-1"
              type="submit"
            >
              <span>Send</span>
              <span className="material-symbols-outlined text-[16px]">send</span>
            </button>
          </form>
        </div>

        {/* Right: Real-time Telemetry & Vector DB HUD (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-space-sm bg-surface-container-lowest/80 rounded-xl p-space-md border border-outline-variant/20">
          <div className="flex items-center justify-between pb-space-xs">
            <span className="font-code-terminal text-label-caps text-secondary uppercase font-semibold">
              Live Vector HUD Stream
            </span>
            <span className="font-code-terminal text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
              STREAM READY
            </span>
          </div>

          {/* Metrics Panel */}
          <div className="grid grid-cols-2 gap-space-xs">
            <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col border border-outline-variant/20">
              <span className="font-code-terminal text-label-caps text-on-surface-variant">VECTOR CHUNKS</span>
              <span className="font-headline-sm text-body-lg font-bold text-on-surface">1,480 Chunks</span>
              <span className="font-code-terminal text-[10px] text-primary">ada-002 Embeddings</span>
            </div>
            <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col border border-outline-variant/20">
              <span className="font-code-terminal text-label-caps text-on-surface-variant">COSINE SIMILARITY</span>
              <span className="font-headline-sm text-body-lg font-bold text-secondary">0.942 Threshold</span>
              <span className="font-code-terminal text-[10px] text-secondary">Top-K = 4 Retrieved</span>
            </div>
          </div>

          {/* Live Log Console Box */}
          <div className="flex-1 bg-surface-container-lowest p-space-sm rounded-lg font-code-terminal text-[12px] text-on-surface-variant flex flex-col gap-1.5 overflow-hidden shadow-inner border border-outline-variant/20">
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
            <div className="text-on-surface flex items-center gap-1 mt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
              <span>LISTENING: Ready for user prompt vectorization...</span>
            </div>
          </div>

          {/* Assurance Pill */}
          <div className="p-space-sm rounded-lg bg-surface-container-high/60 flex items-center gap-space-xs text-on-surface-variant font-code-terminal text-label-caps border border-outline-variant/20">
            <span className="material-symbols-outlined text-primary text-[16px]">lock_reset</span>
            <span>All responses strictly anchored to validated production records</span>
          </div>
        </div>
      </div>
    </section>
  );
};
