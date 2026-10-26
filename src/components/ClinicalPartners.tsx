import React from 'react';
import { HeartPulse, Stethoscope, Building, Users, Award, CheckCircle } from 'lucide-react';
import { ColorPalette } from '../types';

interface ClinicalPartnersProps {
  colorPalette?: ColorPalette;
}

export const ClinicalPartners: React.FC<ClinicalPartnersProps> = ({ colorPalette = 'rich-cobalt' }) => {
  const getBadgeClass = () => {
    switch (colorPalette) {
      case 'rich-cobalt':
      case 'royal-sapphire':
        return 'bg-blue-700 text-white';
      case 'oxford-navy':
        return 'bg-[#0B192C] text-white';
      case 'midnight-indigo':
        return 'bg-indigo-900 text-white';
      case 'prussian-marine':
        return 'bg-[#002D62] text-white';
      case 'crimson-navy':
        return 'bg-red-800 text-white';
      case 'emerald-gold':
        return 'bg-emerald-700 text-white';
      case 'clinical-teal':
      default:
        return 'bg-teal-700 text-white';
    }
  };
  const rotationStats = [
    { title: 'District Headquarters Hospital', role: 'Primary Bedside Clinical Training', desc: 'Active rotations across General Medicine, Surgery, ICU, CCU, Pediatrics, and Labor Rooms at DHH Kendrapara.' },
    { title: 'Tertiary Care Partner Hospitals', role: 'Advanced Super-Specialty Training', desc: 'Hands-on clinical exposure in oncology, cardiac care, neuro-surgery, and organ transplant units in Bhubaneswar & Cuttack.' },
    { title: 'Community Health Centers (CHCs)', role: 'Rural & Preventive Public Health', desc: 'Direct engagement in national health immunization programs, maternal tracking, and primary care field clinics.' },
    { title: 'Diagnostic & Blood Bank Postings', role: 'Practical Pathology (DMLT & D.Pharm)', desc: 'Automated clinical biochemistry, blood grouping, cross-matching, histology, and dispensary management.' }
  ];

  const placementHospitals = [
    'District Headquarters Hospital (DHH)',
    'SUM Ultimate Medicare',
    'Kalinga Institute of Medical Sciences (KIMS)',
    'AMRI Hospitals',
    'Apollo Hospitals Network',
    'Utkal Hospital Bhubaneswar',
    'State Govt. Health Centers (NHM)',
    'Care Hospitals'
  ];

  return (
    <section id="clinical" className="py-20 md:py-28 bg-white border-b border-slate-200" aria-label="Clinical Rotations & Hospital Partnerships">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left 6 Columns: Clinical Rotation Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">
              <Stethoscope className="w-4 h-4 text-teal-700" />
              <span>Hospital Clinical Rotations</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500">Real Bedside Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              From Campus Simulation to Real Emergency & Bedside Patient Care
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              At Sairudra College of Nursing, theory is immediately integrated into clinical practice. Our students log over 1,800 supervised clinical hours under expert medical superintendents, senior nursing officers, and clinical tutors.
            </p>

            <div className="space-y-4 pt-2">
              {rotationStats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-teal-500/50 transition-colors">
                  <h4 className="text-sm font-bold text-slate-900">{stat.title}</h4>
                  <p className="text-xs font-semibold text-teal-700 mt-0.5">{stat.role}</p>
                  <p className="text-xs text-slate-600 mt-1">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right 6 Columns: Placement Network & Career Cell */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 text-white shadow-xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">100% Placement & Career Support</span>
                <h3 className="text-2xl font-bold text-white">Where Our Graduates Excel</h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Our dedicated Training and Placement Cell coordinates on-campus recruitment, mock interviews, and coaching for government examinations like NORCET, AIIMS, and State Staff Nurse recruitment.
                </p>
              </div>

              {/* Hospital network pills (interactive / visually distinct list) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {placementHospitals.map((hospital, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-200">
                    <CheckCircle className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    <span className="truncate">{hospital}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-300">
                <span>International Exam Guidance: <strong>NCLEX-RN, IELTS, OET</strong></span>
                <a
                  href="#quote-calculator"
                  className="font-bold text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1"
                >
                  Join 2026 Batch →
                </a>
              </div>
            </div>

            {/* Testimonial highlight snippet */}
            <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200 flex items-center gap-4">
              <div className={`w-11 h-11 rounded-full ${getBadgeClass()} flex items-center justify-center font-bold text-xs tracking-tight shrink-0 shadow-xs`}>
                100%
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900">Career Placement Track Record</p>
                <p className="text-slate-600 mt-0.5">
                  Over 95% of our nursing and pharmacy graduates receive hospital appointment letters or pass competitive state exams within 6 months of course completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
