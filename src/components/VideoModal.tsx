import React from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-center p-space-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-surface-container rounded-2xl p-space-lg shadow-2xl flex flex-col gap-space-md border border-outline-variant/40"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
            <span className="font-headline-sm text-headline-sm text-on-surface">
              60-Sec Systems Tour &bull; Nadeem Anjum
            </span>
          </div>
          <button
            className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-error hover:text-on-error transition-colors"
            onClick={onClose}
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="aspect-video w-full rounded-xl overflow-hidden bg-surface-container-lowest relative flex items-center justify-center border border-outline-variant/30 shadow-inner">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGldZAjrPBTBwdqL9TTtUHKZqcbEjUp-zDUAbEtz23BGu4oKisJCl6MhDloQAqc_yzjt1DoSyjZ-K4Co0qBzw7ggio2tSxr0AnyqGoHAFagQ64KS5JYyKJN7vIqGvE0GUh_0cncbPPZudstTfgraKGCoTiJYGPQuMiLKs03ZUnc0WWZnR5GyTuk56GtshI6f-fkuN2HoYAkPpRENmGAs-leuvVhk3qAn8A4VAie94DGO06fOWMLj0"
            alt="Interactive AI & n8n Production Pipeline Demo"
          />
          <div className="absolute inset-0 bg-surface-container-lowest/70 backdrop-blur-[2px] flex flex-col items-center justify-center gap-space-sm p-space-md text-center">
            <a
              href="https://wa.me/923077970277?text=Hi%20Nadeem%2C%20I%20would%20like%20to%20see%20the%20live%20architecture%20walkthrough%20demo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-primary hover:bg-primary-container transition-all flex items-center justify-center text-on-primary shadow-2xl group hover:scale-110"
            >
              <span className="material-symbols-outlined text-[36px] ml-1 group-hover:scale-105 transition-transform">
                play_arrow
              </span>
            </a>
            <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Interactive AI &amp; n8n Production Pipeline Demo
            </span>
            <p className="font-code-terminal text-body-sm text-on-surface-variant max-w-md">
              Streaming live architectural walkthrough of Mind_Dreams support agent with automated Google Sheets sync.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary font-code-terminal text-[11px] border border-primary/30">
                1080p 60fps Walkthrough
              </span>
              <span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant font-code-terminal text-[11px]">
                Direct WhatsApp Stream
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
