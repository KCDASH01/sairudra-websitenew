import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AccreditationStrip } from './components/AccreditationStrip';
import { CoursePortfolio } from './components/CoursePortfolio';
import { QuoteCalculator } from './components/QuoteCalculator';
import { Facilities } from './components/Facilities';
import { ClinicalPartners } from './components/ClinicalPartners';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ProspectusModal } from './components/ProspectusModal';
import { ThemeCustomizerModal } from './components/ThemeCustomizerModal';
import { ColorPalette, FontOption } from './types';
import { Palette, Sparkles, Upload } from 'lucide-react';

export default function App() {
  const [selectedCourseForQuote, setSelectedCourseForQuote] = useState<string | undefined>(undefined);
  const [isProspectusModalOpen, setIsProspectusModalOpen] = useState(false);
  
  // Customizer state: default to Rich Cobalt & Imperial Gold and Prestigious Academic typography
  const [colorPalette, setColorPalette] = useState<ColorPalette>('rich-cobalt');
  const [fontOption, setFontOption] = useState<FontOption>('prestigious-serif');
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  // Secret admin/agency mode: only true when URL includes ?customize=true or ?customize=1
  const [isCustomizeAllowed, setIsCustomizeAllowed] = useState(false);

  useEffect(() => {
    // 1. Client-side URL param evaluation (works on any static hosting environment)
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const isCustomizeQuery = urlParams.get('customize') === 'true' || urlParams.get('customize') === '1';
      setIsCustomizeAllowed(isCustomizeQuery);

      // 2. Load persisted design preferences from browser storage
      try {
        const savedPalette = localStorage.getItem('sairudra_color_palette') as ColorPalette | null;
        if (savedPalette) setColorPalette(savedPalette);

        const savedFont = localStorage.getItem('sairudra_font_option') as FontOption | null;
        if (savedFont) setFontOption(savedFont);

        const savedLogo = localStorage.getItem('sairudra_custom_logo');
        if (savedLogo) setCustomLogoUrl(savedLogo);
      } catch (err) {
        console.warn('Storage preference access error:', err);
      }
    }
  }, []);

  const handleColorChange = (newPalette: ColorPalette) => {
    setColorPalette(newPalette);
    try {
      localStorage.setItem('sairudra_color_palette', newPalette);
    } catch (e) {
      // safe fallback
    }
  };

  const handleFontChange = (newFont: FontOption) => {
    setFontOption(newFont);
    try {
      localStorage.setItem('sairudra_font_option', newFont);
    } catch (e) {
      // safe fallback
    }
  };

  const handleLogoUpload = (url: string | null) => {
    setCustomLogoUrl(url);
    try {
      if (url) {
        localStorage.setItem('sairudra_custom_logo', url);
      } else {
        localStorage.removeItem('sairudra_custom_logo');
      }
    } catch (e) {
      // safe fallback for large files
    }
  };

  const handleRequestQuote = (courseId?: string) => {
    if (courseId) {
      setSelectedCourseForQuote(courseId);
    }
    const calculatorSection = document.getElementById('quote-calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplorePrograms = () => {
    const programsSection = document.getElementById('programs');
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getFontClass = () => {
    switch (fontOption) {
      case 'prestigious-serif':
        return 'font-style-serif';
      case 'geometric-poppins':
        return 'font-style-poppins';
      case 'modern-sans':
      default:
        return 'font-style-sans';
    }
  };

  return (
    <div className={`min-h-screen flex flex-col bg-slate-50 text-slate-900 ${getFontClass()} overflow-x-hidden`}>
      {/* Skip to Content for WCAG 2.1 AA Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-blue-800 text-white font-bold rounded-lg shadow-xl"
      >
        Skip to main content
      </a>

      {/* Main Sticky Navigation with Top Marquee */}
      <Header
        onRequestQuote={() => handleRequestQuote()}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        colorPalette={colorPalette}
        customLogoUrl={customLogoUrl}
        showCustomizer={isCustomizeAllowed}
      />

      <main id="main-content" className="flex-1 w-full overflow-hidden">
        {/* Hero Section with Dynamic Palette */}
        <Hero
          onRequestQuote={() => handleRequestQuote()}
          onExplorePrograms={handleExplorePrograms}
          onDownloadBrochure={() => setIsProspectusModalOpen(true)}
          colorPalette={colorPalette}
        />

        {/* Accreditation and Approvals Bar */}
        <AccreditationStrip />

        {/* Interactive Academic Programs & Service Portfolio */}
        <CoursePortfolio onRequestQuote={handleRequestQuote} colorPalette={colorPalette} />

        {/* Interactive Instant Tuition & Admission Quote Calculator */}
        <QuoteCalculator initialCourseId={selectedCourseForQuote} />

        {/* Infrastructure & Clinical Simulation Labs */}
        <Facilities colorPalette={colorPalette} />

        {/* Hospital Rotations & Career Placement Network */}
        <ClinicalPartners colorPalette={colorPalette} />

        {/* Student & Alumni Success Stories */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Interactive Contact & Campus Visit Booking */}
        <ContactSection />
      </main>

      {/* Footer with KanpriTech Attribution (Arrow removed) & Custom Logo */}
      <Footer customLogoUrl={customLogoUrl} colorPalette={colorPalette} />

      {/* Floating Action Controls (WhatsApp, Phone Hotline, Scroll to Top) */}
      <FloatingActions />

      {/* Floating Quick Customizer Button - ONLY visible when ?customize=true */}
      {isCustomizeAllowed && (
        <div className="fixed top-24 right-4 z-40 animate-fadeIn">
          <button
            type="button"
            onClick={() => setIsCustomizerOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-900/95 hover:bg-slate-950 backdrop-blur-md text-white text-xs font-bold shadow-xl border border-amber-400/50 hover:border-amber-400 transition-all cursor-pointer group"
            title="Admin Customizer: Change Color Theme, Font & Upload Logo"
          >
            <Palette className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-45 transition-transform" />
            <span className="hidden sm:inline">Theme &amp; Logo (Admin)</span>
          </button>
        </div>
      )}

      {/* Prospectus Download Dialog */}
      <ProspectusModal
        isOpen={isProspectusModalOpen}
        onClose={() => setIsProspectusModalOpen(false)}
        onRequestQuote={() => handleRequestQuote()}
      />

      {/* Theme & Logo Customizer Modal - ONLY mounted when customize is allowed */}
      {isCustomizeAllowed && (
        <ThemeCustomizerModal
          isOpen={isCustomizerOpen}
          onClose={() => setIsCustomizerOpen(false)}
          activeColor={colorPalette}
          onColorChange={handleColorChange}
          activeFont={fontOption}
          onFontChange={handleFontChange}
          customLogoUrl={customLogoUrl}
          onLogoUpload={handleLogoUpload}
        />
      )}
    </div>
  );
}
