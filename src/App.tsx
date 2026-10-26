import React, { useState } from 'react';
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
  
  // Customizer state: default to Crimson & Navy (Sairudra's authentic colors) and Prestigious Academic typography
  const [colorPalette, setColorPalette] = useState<ColorPalette>('crimson-navy');
  const [fontOption, setFontOption] = useState<FontOption>('prestigious-serif');
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

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
    <div className={`min-h-screen flex flex-col bg-slate-50 text-slate-900 ${getFontClass()}`}>
      {/* Skip to Content for WCAG 2.1 AA Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-red-800 text-white font-bold rounded-lg shadow-xl"
      >
        Skip to main content
      </a>

      {/* Main Sticky Navigation with Top Marquee */}
      <Header
        onRequestQuote={() => handleRequestQuote()}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        colorPalette={colorPalette}
        customLogoUrl={customLogoUrl}
      />

      <main id="main-content" className="flex-1">
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
        <CoursePortfolio onRequestQuote={handleRequestQuote} />

        {/* Interactive Instant Tuition & Admission Quote Calculator */}
        <QuoteCalculator initialCourseId={selectedCourseForQuote} />

        {/* Infrastructure & Clinical Simulation Labs */}
        <Facilities />

        {/* Hospital Rotations & Career Placement Network */}
        <ClinicalPartners />

        {/* Student & Alumni Success Stories */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Interactive Contact & Campus Visit Booking */}
        <ContactSection />
      </main>

      {/* Footer with KanpriTech Attribution (Arrow removed) & Custom Logo */}
      <Footer customLogoUrl={customLogoUrl} />

      {/* Floating Action Controls (WhatsApp, Phone Hotline, Scroll to Top) */}
      <FloatingActions />

      {/* Floating Quick Customizer Button */}
      <div className="fixed top-24 right-4 z-40">
        <button
          type="button"
          onClick={() => setIsCustomizerOpen(true)}
          className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-900/90 hover:bg-slate-950 backdrop-blur-md text-white text-xs font-bold shadow-lg border border-slate-700 hover:border-amber-400 transition-all cursor-pointer group"
          title="Change Color Theme, Font & Upload Logo"
        >
          <Palette className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-45 transition-transform" />
          <span className="hidden sm:inline">Theme &amp; Logo</span>
        </button>
      </div>

      {/* Prospectus Download Dialog */}
      <ProspectusModal
        isOpen={isProspectusModalOpen}
        onClose={() => setIsProspectusModalOpen(false)}
        onRequestQuote={() => handleRequestQuote()}
      />

      {/* Theme & Logo Customizer Modal */}
      <ThemeCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        activeColor={colorPalette}
        onColorChange={setColorPalette}
        activeFont={fontOption}
        onFontChange={setFontOption}
        customLogoUrl={customLogoUrl}
        onLogoUpload={setCustomLogoUrl}
      />
    </div>
  );
}
