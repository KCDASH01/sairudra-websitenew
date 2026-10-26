import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, GraduationCap } from 'lucide-react';

interface FooterProps {
  customLogoUrl?: string | null;
}

export const Footer: React.FC<FooterProps> = ({ customLogoUrl }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              {customLogoUrl ? (
                <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center overflow-hidden shrink-0 shadow-md">
                  <img src={customLogoUrl} alt="Sairudra Logo" className="max-w-full max-h-full object-contain" />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-xl bg-red-800 flex items-center justify-center text-white font-bold shadow-md">
                  <GraduationCap className="w-5 h-5 text-amber-300" />
                </div>
              )}
              <div>
                <h3 className="text-xl font-black text-white tracking-tight">SAIRUDRA</h3>
                <p className="text-[11px] font-semibold text-slate-400">
                  College of Nursing · Group of Institutions
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We offer a range of professional healthcare programs including B.Sc Nursing, Post Basic B.Sc Nursing, GNM, ANM, DMLT, and D.Pharm. Designed to prepare compassionate, skilled, and dedicated healthcare professionals ready to serve communities at all levels.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-teal-400">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>Statutory Affiliations</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
                Affiliated with Odisha University of Health Sciences (OUHS), DMET Odisha approved, and PCI New Delhi recognized.
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="text-slate-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#programs" className="text-slate-400 hover:text-white transition-colors">Academic Programs</a>
              </li>
              <li>
                <a href="#quote-calculator" className="text-slate-400 hover:text-white transition-colors">Fee Quote Calculator</a>
              </li>
              <li>
                <a href="#facilities" className="text-slate-400 hover:text-white transition-colors">KIET Campus Labs</a>
              </li>
              <li>
                <a href="#clinical" className="text-slate-400 hover:text-white transition-colors">Hospital Rotations</a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-white transition-colors">Admissions FAQ</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Programs (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Healthcare Programs</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#programs" className="text-slate-400 hover:text-teal-400 transition-colors">
                  B.Sc. Nursing (4 Years Degree)
                </a>
              </li>
              <li>
                <a href="#programs" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Post Basic B.Sc. Nursing (PB.B.Sc)
                </a>
              </li>
              <li>
                <a href="#programs" className="text-slate-400 hover:text-teal-400 transition-colors">
                  General Nursing & Midwifery (GNM)
                </a>
              </li>
              <li>
                <a href="#programs" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Auxiliary Nurse Midwife (ANM)
                </a>
              </li>
              <li>
                <a href="#programs" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Diploma in Pharmacy (D.Pharma)
                </a>
              </li>
              <li>
                <a href="#programs" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Diploma in Medical Lab Tech (DMLT)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact Info</h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-relaxed">
                  Ramnagarpatna, Gulnagar, (KIET Campus) Plot No- 111, Kendrapara (Indupur Road), Kendrapara, Odisha 754211.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+917008401839" className="text-slate-300 font-semibold hover:text-white transition-colors">
                  +91 7008401839
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:info@sairudra.org.in" className="text-slate-300 hover:text-white transition-colors">
                  info@sairudra.org.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & KanpriTech Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} <strong className="text-white">SAIRUDRA COLLEGE OF NURSING, KENDRAPARA</strong>. All rights reserved.
          </p>

          {/* Designed & Developed by KanpriTech */}
          <div className="flex items-center gap-1.5 text-center sm:text-right">
            <span>Designed &amp; Developed by</span>
            <a
              href="https://www.kanpritech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-2"
              title="Visit KanpriTech"
            >
              KanpriTech
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
