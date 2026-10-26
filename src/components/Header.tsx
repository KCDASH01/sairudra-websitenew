import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, ShieldCheck, Sparkles, GraduationCap, Palette } from 'lucide-react';
import { ColorPalette } from '../types';

interface HeaderProps {
  onRequestQuote: (courseId?: string) => void;
  onOpenCustomizer: () => void;
  colorPalette: ColorPalette;
  customLogoUrl: string | null;
}

export const Header: React.FC<HeaderProps> = ({
  onRequestQuote,
  onOpenCustomizer,
  colorPalette,
  customLogoUrl,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Concise labels to prevent any chance of overlapping on intermediate desktop screens
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Programs', href: '#programs' },
    { label: 'Fee Quote', href: '#quote-calculator' },
    { label: 'Campus Labs', href: '#facilities' },
    { label: 'Hospital Rotations', href: '#clinical' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  // Dynamic button styles based on selected color theme
  const getButtonClass = () => {
    switch (colorPalette) {
      case 'crimson-navy':
        return 'bg-red-800 hover:bg-red-900 active:bg-red-950 text-white focus-visible:ring-red-700';
      case 'royal-sapphire':
        return 'bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white focus-visible:ring-blue-600';
      case 'emerald-gold':
        return 'bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white focus-visible:ring-emerald-600';
      case 'clinical-teal':
      default:
        return 'bg-teal-700 hover:bg-teal-800 active:bg-teal-900 text-white focus-visible:ring-teal-600';
    }
  };

  const getAccentTextClass = () => {
    switch (colorPalette) {
      case 'crimson-navy':
        return 'text-red-700 hover:text-red-800';
      case 'royal-sapphire':
        return 'text-blue-700 hover:text-blue-800';
      case 'emerald-gold':
        return 'text-emerald-700 hover:text-emerald-800';
      case 'clinical-teal':
      default:
        return 'text-teal-700 hover:text-teal-800';
    }
  };

  return (
    <header className="w-full relative z-40">
      {/* Top Notification Announcement Bar */}
      <div className="bg-slate-950 text-slate-200 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            {/* Admission Marquee Alert */}
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="inline-flex items-center gap-1 font-bold text-amber-400 shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                ADMISSIONS 2026-27:
              </span>
              <p className="truncate text-slate-300 font-medium">
                B.Sc Nursing · PB.B.Sc Nursing · GNM · ANM · D.Pharma · DMLT
              </p>
            </div>

            {/* Quick Contact Info & Theme Switcher Button */}
            <div className="flex flex-wrap items-center gap-4 text-slate-400 text-xs shrink-0">
              <a
                href="https://maps.google.com/?q=Sairudra+College+of+Nursing+Kendrapara"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>KIET Campus, Kendrapara, Odisha</span>
              </a>
              <a
                href="tel:+917008401839"
                className="flex items-center gap-1.5 text-white font-medium hover:text-amber-400 transition-colors"
                aria-label="Call Admissions Helpline"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+91 7008401839</span>
              </a>

              {/* Theme & Logo Customizer Shortcut */}
              <button
                type="button"
                onClick={onOpenCustomizer}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-amber-300 text-[11px] font-bold border border-slate-700 transition-colors cursor-pointer"
                title="Change Logo, Colors & Fonts"
              >
                <Palette className="w-3 h-3" />
                <span>Change Colors / Logo</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 sticky top-0 transition-all shadow-xs" aria-label="Main Navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Logo & Emblem */}
            <a href="#home" className="flex items-center gap-3 group rounded-lg p-1 shrink-0">
              {/* Institution Crest or Custom Uploaded Logo */}
              {customLogoUrl ? (
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 p-1 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                  <img src={customLogoUrl} alt="Sairudra Institution Logo" className="max-w-full max-h-full object-contain" />
                </div>
              ) : (
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-red-800 via-slate-900 to-slate-950 flex items-center justify-center text-white shadow-md border border-red-700/40 shrink-0 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-6 h-6 text-amber-300" />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
                    <ShieldCheck className="w-2.5 h-2.5 text-white" />
                  </span>
                </div>
              )}

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className={`text-xl sm:text-2xl font-black tracking-tight text-slate-900 transition-colors ${getAccentTextClass()}`}>
                    SAIRUDRA
                  </span>
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-slate-100 text-slate-800 border border-slate-200 px-1.5 py-0.5 rounded-sm">
                    OUHS Affiliated
                  </span>
                </div>
                <span className="text-xs font-semibold text-slate-600 tracking-tight leading-tight">
                  Group of Institutions · College of Nursing
                </span>
                <span className="text-[11px] text-slate-500 hidden sm:inline">
                  Kendrapara, Odisha (KIET Campus)
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links - Spaced cleanly without any overlap */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center min-w-0 px-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs xl:text-sm font-bold text-slate-700 hover:text-red-700 transition-colors whitespace-nowrap py-1 relative hover:border-b-2 hover:border-red-700"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Header Right Action CTA - Guaranteed no overlap with margin & shrink-0 */}
            <div className="hidden md:flex items-center gap-2.5 shrink-0 ml-auto lg:ml-0">
              <button
                type="button"
                onClick={() => onRequestQuote()}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs xl:text-sm font-bold shadow-sm hover:shadow-md transition-all cursor-pointer whitespace-nowrap ${getButtonClass()}`}
              >
                <span>Request Fee Quote</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>

            {/* Mobile Actions: Quote + Menu Hamburger */}
            <div className="flex lg:hidden items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => onRequestQuote()}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg ${getButtonClass()}`}
              >
                Quote
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold shadow-md transition-colors ${getButtonClass()}`}
              >
                <span>Get Instant Program Fee Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCustomizer();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 text-slate-800 text-xs font-bold hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <Palette className="w-4 h-4 text-amber-600" />
                <span>Customize Logo, Colors &amp; Fonts</span>
              </button>
              
              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <a
                  href="tel:+917008401839"
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg border border-slate-200 font-semibold text-slate-800 hover:bg-slate-50"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Call Desk</span>
                </a>
                <a
                  href="mailto:info@sairudra.org.in"
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-lg border border-slate-200 font-semibold text-slate-800 hover:bg-slate-50"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
