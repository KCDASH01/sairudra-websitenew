import React from 'react';
import { ArrowRight, CheckCircle2, Phone, FileText, Award, Building2, Stethoscope } from 'lucide-react';
import { ColorPalette } from '../types';

interface HeroProps {
  onRequestQuote: () => void;
  onExplorePrograms: () => void;
  onDownloadBrochure: () => void;
  colorPalette?: ColorPalette;
}

export const Hero: React.FC<HeroProps> = ({
  onRequestQuote,
  onExplorePrograms,
  onDownloadBrochure,
  colorPalette = 'rich-cobalt',
}) => {
  const getPrimaryButtonClass = () => {
    switch (colorPalette) {
      case 'rich-cobalt':
        return 'bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white focus-visible:ring-blue-600 shadow-blue-800/30';
      case 'oxford-navy':
        return 'bg-[#0B192C] hover:bg-[#1E3E62] active:bg-black text-white focus-visible:ring-sky-500 border border-sky-400/40 shadow-xl';
      case 'midnight-indigo':
        return 'bg-indigo-900 hover:bg-indigo-950 active:bg-black text-white focus-visible:ring-indigo-600 shadow-indigo-900/30';
      case 'prussian-marine':
        return 'bg-[#002D62] hover:bg-[#001D40] active:bg-black text-white focus-visible:ring-blue-700 shadow-blue-950/30';
      case 'royal-sapphire':
        return 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white focus-visible:ring-blue-500 shadow-blue-600/30';
      case 'crimson-navy':
        return 'bg-red-800 hover:bg-red-900 active:bg-red-950 text-white focus-visible:ring-red-700 shadow-red-900/30';
      case 'emerald-gold':
        return 'bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white focus-visible:ring-emerald-600 shadow-emerald-900/30';
      case 'clinical-teal':
      default:
        return 'bg-teal-700 hover:bg-teal-800 active:bg-teal-900 text-white focus-visible:ring-teal-600 shadow-teal-900/30';
    }
  };

  const getHeadingHighlightClass = () => {
    switch (colorPalette) {
      case 'rich-cobalt':
        return 'text-blue-700';
      case 'oxford-navy':
        return 'text-[#0B192C]';
      case 'midnight-indigo':
        return 'text-indigo-900';
      case 'prussian-marine':
        return 'text-[#002D62]';
      case 'royal-sapphire':
        return 'text-blue-600';
      case 'crimson-navy':
        return 'text-red-800';
      case 'emerald-gold':
        return 'text-emerald-800';
      case 'clinical-teal':
      default:
        return 'text-teal-700';
    }
  };

  const getAmbientGlowClass = () => {
    switch (colorPalette) {
      case 'rich-cobalt':
      case 'royal-sapphire':
        return 'bg-blue-200/40';
      case 'oxford-navy':
        return 'bg-sky-200/40';
      case 'midnight-indigo':
        return 'bg-indigo-200/40';
      case 'prussian-marine':
        return 'bg-cyan-200/40';
      case 'crimson-navy':
        return 'bg-red-100/30';
      case 'emerald-gold':
        return 'bg-emerald-100/30';
      case 'clinical-teal':
      default:
        return 'bg-teal-100/30';
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100/50 pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Subtle background radial glows for high-contrast visual depth */}
      <div className={`absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 rounded-full blur-3xl pointer-events-none ${getAmbientGlowClass()}`} />
      <div className="absolute bottom-0 left-0 -ml-48 -mb-48 w-96 h-96 rounded-full bg-slate-200/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Value Propositions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean Editorial Kicker - Responsive line wrap */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold tracking-wider uppercase text-slate-700">
              <span className="inline-flex items-center gap-1.5 text-blue-800">
                <span className="w-2 h-2 rounded-full bg-blue-700 animate-pulse shrink-0" />
                <span>Admissions 2026–2027</span>
              </span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-slate-600">OUHS &amp; DMET Approved</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-slate-950 tracking-tight leading-[1.22] sm:leading-[1.14]">
              Shaping Compassionate, <br className="hidden sm:inline" />
              <span className={getHeadingHighlightClass()}>Clinically Adept</span> Healthcare Leaders.
            </h1>

            <p className="text-sm sm:text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
              Sairudra College of Nursing &amp; Group of Institutions delivers gold-standard training in <strong className="font-semibold text-slate-900">B.Sc Nursing, Post Basic B.Sc, GNM, ANM, D.Pharma, and DMLT</strong>. We combine advanced simulation labs with intensive bedside rotations across premier multi-specialty hospitals.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-800 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Practical Rotations at DHH & Hospitals</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>State Scholarships (PRERANA / Post-Matric)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Separate Secure Hostels & Campus Buses</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Placement Support & AIIMS Mentorship</span>
              </div>
            </div>

            {/* High-Impact Interactive CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <button
                type="button"
                onClick={onRequestQuote}
                className={`inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-bold shadow-md hover:shadow-lg transition-all cursor-pointer group ${getPrimaryButtonClass()}`}
              >
                <span>Request Program Fee Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onExplorePrograms}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 text-base font-semibold shadow-xs hover:border-slate-400 transition-colors cursor-pointer"
              >
                <Stethoscope className="w-4 h-4 text-teal-700" />
                <span>Explore 6 Courses</span>
              </button>

              <button
                type="button"
                onClick={onDownloadBrochure}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-slate-700 hover:text-teal-800 hover:bg-teal-50/50 text-sm font-semibold transition-colors cursor-pointer"
                aria-label="Download Institutional Prospectus"
              >
                <FileText className="w-4 h-4 text-amber-600" />
                <span>Prospectus (PDF)</span>
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="text-2xl font-black text-slate-950">1,200+</p>
                <p className="text-xs text-slate-700 font-medium">Alumni in Practice</p>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-950">6</p>
                <p className="text-xs text-slate-700 font-medium">Recognized Courses</p>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-950">1,800+</p>
                <p className="text-xs text-slate-700 font-medium">Clinical Hours</p>
              </div>
              <div>
                <p className="text-2xl font-black text-emerald-700">100%</p>
                <p className="text-xs text-slate-700 font-medium">Placement Guidance</p>
              </div>
            </div>
          </div>

          {/* Right Column: High Visual Appeal Media & Highlight Feature */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Frame with pristine border */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Nursing students and healthcare professionals in clinical training laboratory at Sairudra College"
                  className="w-full h-[460px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  loading="eager"
                  fetchPriority="high"
                />
                
                {/* Visual Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Overlaid Institutional Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-200/80">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-700 flex items-center justify-center text-white shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-slate-900">KIET Campus, Kendrapara</span>
                        <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1 rounded-sm">Verified</span>
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                        Plot No- 111, Ramnagarpatna, Gulnagar (Indupur Road). Modern academic blocks & labs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Top Corner Floating Badge */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>OUHS Affiliation Code: Verified</span>
                </div>
              </div>

              {/* Admission Helpline Callout Card */}
              <div className="mt-4 p-4 rounded-xl bg-teal-900 text-white shadow-md flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-teal-200 font-semibold">Immediate Assistance</p>
                  <p className="text-sm font-bold text-white">Direct Admission Counseling</p>
                </div>
                <a
                  href="tel:+917008401839"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 7008401839</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
