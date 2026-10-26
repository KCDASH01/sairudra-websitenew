import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, ShieldCheck, Sparkles, GraduationCap, Palette } from 'lucide-react';
import { ColorPalette } from '../types';

interface HeaderProps {
  onRequestQuote: (courseId?: string) => void;
  onOpenCustomizer: () => void;
  colorPalette: ColorPalette;
  customLogoUrl: string | null;
  showCustomizer?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onRequestQuote,
  onOpenCustomizer,
  colorPalette,
  customLogoUrl,
  showCustomizer = false,
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
      case 'rich-cobalt':
        return 'bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white focus-visible:ring-blue-600 shadow-blue-900/20';
      case 'oxford-navy':
        return 'bg-[#0B192C] hover:bg-[#1E3E62] active:bg-black text-white focus-visible:ring-sky-500 border border-sky-400/30';
      case 'midnight-indigo':
        return 'bg-indigo-900 hover:bg-indigo-950 active:bg-black text-white focus-visible:ring-indigo-600';
      case 'prussian-marine':
        return 'bg-[#002D62] hover:bg-[#001D40] active:bg-black text-white focus-visible:ring-blue-700';
      case 'royal-sapphire':
        return 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white focus-visible:ring-blue-500';
      case 'crimson-navy':
        return 'bg-red-800 hover:bg-red-900 active:bg-red-950 text-white focus-visible:ring-red-700';
      case 'emerald-gold':
        return 'bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white focus-visible:ring-emerald-600';
      case 'clinical-teal':
      default:
        return 'bg-teal-700 hover:bg-teal-800 active:bg-teal-900 text-white focus-visible:ring-teal-600';
    }
  };

  const getAccentTextClass = () => {
    switch (colorPalette) {
      case 'rich-cobalt':
        return 'text-blue-800 hover:text-blue-900';
      case 'oxford-navy':
        return 'text-[#0B192C] hover:text-[#1E3E62]';
      case 'midnight-indigo':
        return 'text-indigo-900 hover:text-indigo-950';
      case 'prussian-marine':
        return 'text-[#002D62] hover:text-[#001D40]';
      case 'royal-sapphire':
        return 'text-blue-700 hover:text-blue-800';
      case 'crimson-navy':
        return 'text-red-700 hover:text-red-800';
      case 'emerald-gold':
        return 'text-emerald-700 hover:text-emerald-800';
      case 'clinical-teal':
      default:
        return 'text-teal-700 hover:text-teal-800';
    }
  };

  const getCrestGradient = () => {
    switch (colorPalette) {
      case 'rich-cobalt':
      case 'royal-sapphire':
        return 'from-blue-700 via-blue-900 to-slate-950 border-blue-600/40';
      case 'oxford-navy':
        return 'from-[#0B192C] via-[#1E3E62] to-slate-950 border-sky-600/40';
      case 'midnight-indigo':
        return 'from-indigo-800 via-indigo-950 to-slate-950 border-indigo-600/40';
      case 'prussian-marine':
        return 'from-[#002D62] via-[#001D40] to-slate-950 border-blue-400/40';
      case 'crimson-navy':
        return 'from-red-800 via-slate-900 to-slate-950 border-red-700/40';
      case 'emerald-gold':
        return 'from-emerald-800 via-emerald-950 to-slate-950 border-emerald-600/40';
      case 'clinical-teal':
      default:
        return 'from-teal-700 via-teal-900 to-slate-950 border-teal-600/40';
    }
  };

  return (
    <header className="w-full relative z-40">
      {/* Top Notification Announcement Bar - High Contrast & High Visibility */}
      <div className="bg-[#0B192C] text-white text-xs border-b border-slate-700/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
            {/* Admission Alert - 100% visible, no truncating, high-contrast crisp text */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span className="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-500/20 border border-amber-400/40 px-2 py-0.5 rounded text-[11px] sm:text-xs shrink-0 tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                ADMISSIONS 2026-27:
              </span>
              <p className="text-white font-semibold text-xs sm:text-sm tracking-wide leading-tight">
                B.Sc Nursing · PB.B.Sc Nursing · GNM · ANM · D.Pharma · DMLT
              </p>
            </div>

            {/* Quick Contact Info & Theme Switcher Button */}
            <div className="flex flex-wrap items-center justify-between md:justify-end gap-2.5 sm:gap-4 text-xs shrink-0">
              {/* Location Badge */}
              <a
                href="https://maps.google.com/?q=Sairudra+College+of+Nursing+Kendrapara"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors text-xs font-medium"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>KIET Campus, Kendrapara, Odisha</span>
              </a>

              {/* Official Email */}
              <a
                href="mailto:info@sairudra.org.in"
                className="hidden sm:inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors text-xs font-medium"
                aria-label="Send email to info@sairudra.org.in"
              >
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>info@sairudra.org.in</span>
              </a>

              {/* Helpline Phone Number */}
              <a
                href="tel:+917008401839"
                className="inline-flex items-center gap-1.5 text-white font-bold hover:text-amber-300 transition-colors bg-white/10 hover:bg-white/15 px-2.5 py-1 rounded-md border border-white/20 text-xs sm:text-sm"
                aria-label="Call Admissions Helpline: +91 7008401839"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>+91 7008401839</span>
              </a>

              {/* Theme & Logo Customizer Shortcut - Only visible in ?customize=true admin mode */}
              {showCustomizer && (
                <button
                  type="button"
                  onClick={onOpenCustomizer}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-colors cursor-pointer shadow-sm"
                  title="Change Logo, Colors & Fonts (Admin Mode)"
                >
                  <Palette className="w-3.5 h-3.5" />
                  <span>Customize</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 sticky top-0 transition-all shadow-xs" aria-label="Main Navigation">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
            {/* Logo & Emblem - Responsive sizing */}
            <a href="#home" className="flex items-center gap-2 sm:gap-3 group rounded-lg p-0.5 min-w-0 max-w-[70%] sm:max-w-none">
              {/* Institution Crest or Custom Uploaded Logo */}
              {customLogoUrl ? (
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white border border-slate-200 p-0.5 sm:p-1 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
                  <img src={customLogoUrl} alt="Sairudra Institution Logo" className="max-w-full max-h-full object-contain" />
                </div>
              ) : (
                <div className={`relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${getCrestGradient()} flex items-center justify-center text-white shadow-md border shrink-0 group-hover:scale-105 transition-transform`}>
                  <GraduationCap className="w-4 h-4 sm:w-6 sm:h-6 text-amber-300" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-emerald-500 border border-white flex items-center justify-center">
                    <ShieldCheck className="w-2 h-2 text-white" />
                  </span>
                </div>
              )}

              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className={`text-base sm:text-2xl font-black tracking-tight text-slate-900 truncate transition-colors ${getAccentTextClass()}`}>
                    SAIRUDRA
                  </span>
                  <span className="hidden sm:inline-block text-[9px] sm:text-[10px] font-bold tracking-wider uppercase bg-slate-100 text-slate-800 border border-slate-200 px-1 sm:px-1.5 py-0.5 rounded-sm shrink-0">
                    OUHS Affiliated
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-slate-700 tracking-tight leading-tight truncate">
                  College of Nursing, Kendrapara
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links - Spaced cleanly without any overlap */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center min-w-0 px-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs xl:text-sm font-bold text-slate-800 hover:text-blue-800 transition-colors whitespace-nowrap py-1 relative hover:border-b-2 hover:border-blue-700"
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

            {/* Mobile Actions: Quote + Menu Hamburger - Guaranteed to fit on mobile */}
            <div className="flex lg:hidden items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => onRequestQuote()}
                className={`px-2.5 py-1.5 text-xs font-bold rounded-lg shadow-xs cursor-pointer ${getButtonClass()}`}
              >
                Quote
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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

              {showCustomizer && (
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
              )}
              
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
