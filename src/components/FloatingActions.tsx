import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageSquare } from 'lucide-react';

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

      {/* Floating WhatsApp Action Button - Compact circle on mobile, expanded pill on tablet/desktop */}
      <a
        href="https://wa.me/917008401839?text=Hello%20Sairudra%20Admissions%20Team,%20I%20would%20like%20information%20regarding%202026-27%20admissions%20and%20fee%20structure."
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center justify-center gap-2 p-3 sm:px-4 sm:py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-xl transition-all transform hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-emerald-400 cursor-pointer"
        aria-label="Chat with Sairudra College on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline font-extrabold tracking-wide">WhatsApp Chat</span>
      </a>
    </div>
  );
};
