import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.012 2C6.486 2 2 6.486 2 12.012c0 1.867.514 3.616 1.408 5.114L2 22l5.02-1.318a9.97 9.97 0 0 0 4.992 1.33h.005c5.524 0 10.01-4.486 10.01-10.012 0-2.673-1.041-5.187-2.932-7.078A9.945 9.945 0 0 0 12.012 2Zm0 1.69c2.222 0 4.312.865 5.884 2.436a8.27 8.27 0 0 1 2.434 5.886c0 4.59-3.734 8.322-8.323 8.322a8.28 8.28 0 0 1-4.223-1.151l-.303-.18-3.136.823.837-3.056-.197-.314A8.257 8.257 0 0 1 3.69 12.012c0-4.59 3.733-8.322 8.322-8.322Zm4.819 11.597c-.264-.132-1.562-.77-1.804-.858-.242-.088-.418-.132-.594.132-.176.264-.682.858-.836 1.034-.154.176-.308.198-.572.066-.264-.132-1.115-.411-2.124-1.311-.785-.7-1.315-1.565-1.469-1.83-.154-.264-.016-.407.116-.539.119-.118.264-.308.396-.462.132-.154.176-.264.264-.44.088-.176.044-.33-.022-.462-.066-.132-.594-1.433-.814-1.962-.214-.515-.433-.445-.594-.453-.154-.008-.33-.009-.506-.009-.176 0-.462.066-.704.33-.242.264-.924.903-.924 2.203s.946 2.556 1.078 2.732c.132.176 1.863 2.844 4.513 3.988.63.272 1.122.435 1.506.557.633.201 1.209.173 1.664.105.508-.076 1.562-.639 1.782-1.256.22-.617.22-1.146.154-1.256-.066-.11-.242-.176-.506-.308Z"
    />
  </svg>
);

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-none">
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-slate-900 text-white shadow-lg hover:bg-slate-800 transition-all transform hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
          aria-label="Scroll back to top of page"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href="tel:+917008401839"
        className="pointer-events-auto flex items-center justify-center gap-2 p-2.5 sm:px-3.5 sm:py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-lg transition-all transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-teal-500 cursor-pointer"
        aria-label="Call Admissions Helpline"
      >
        <Phone className="w-4 h-4 text-emerald-400" />
        <span className="hidden sm:inline">Call Helpline</span>
      </a>

      {/* Floating WhatsApp Action Button - with official WhatsApp brand logo */}
      <a
        href="https://wa.me/917008401839?text=Hello%20Sairudra%20Admissions%20Team,%20I%20would%20like%20information%20regarding%202026-27%20admissions%20and%20fee%20structure."
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center justify-center gap-2 p-3 sm:px-4 sm:py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-xl transition-all transform hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-emerald-400 cursor-pointer"
        aria-label="Chat with Sairudra College on WhatsApp"
      >
        <WhatsAppIcon className="w-5 h-5 text-white fill-white shrink-0" />
        <span className="hidden sm:inline font-extrabold tracking-wide">WhatsApp Chat</span>
      </a>
    </div>
  );
};
