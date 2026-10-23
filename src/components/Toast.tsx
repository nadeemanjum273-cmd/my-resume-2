import React from "react";

interface ToastProps {
  message: string | null;
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <aside
      aria-label="Notification"
      className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-surface-container-high/95 backdrop-blur-md border border-primary/40 text-primary text-xs font-code-terminal shadow-2xl shadow-black/60 flex items-center gap-2.5 animate-bounce-short"
    >
      <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
      <span className="text-on-surface">{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-2 text-on-surface-variant hover:text-on-surface transition-colors"
          aria-label="Dismiss toast"
        >
          <span className="material-symbols-outlined text-[16px]">close</span>
        </button>
      )}
    </aside>
  );
};
