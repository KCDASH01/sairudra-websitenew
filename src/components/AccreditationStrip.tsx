import React from 'react';
import { ShieldCheck, Award, GraduationCap, Building2, HeartHandshake } from 'lucide-react';

export const AccreditationStrip: React.FC = () => {
  const credentials = [
    {
      title: 'DMET Odisha Approved',
      subtitle: 'Directorate of Medical Education & Training',
      icon: ShieldCheck,
      color: 'text-teal-700'
    },
    {
      title: 'Affiliated with OUHS',
      subtitle: 'Odisha University of Health Sciences',
      icon: GraduationCap,
      color: 'text-blue-700'
    },
    {
      title: 'PCI New Delhi Recognized',
      subtitle: 'Pharmacy Council of India (D.Pharm)',
      icon: Award,
      color: 'text-amber-700'
    },
    {
      title: 'ONMC Regulated',
      subtitle: 'Odisha Nursing & Midwives Council',
      icon: Building2,
      color: 'text-indigo-700'
    },
    {
      title: 'DHH Clinical Partner',
      subtitle: 'District Headquarters Hospital Rotations',
      icon: HeartHandshake,
      color: 'text-emerald-700'
    }
  ];

  return (
    <section className="bg-white border-y border-slate-200 py-8 relative z-20 shadow-xs" aria-label="Accreditations and Recognitions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Recognized & Affiliated by Apex Healthcare & Educational Authorities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-slate-300 hover:bg-slate-100/70 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-white shadow-xs border border-slate-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className={`w-5 h-5 ${cred.color}`} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 truncate">{cred.title}</h4>
                  <p className="text-[11px] text-slate-700 truncate leading-tight">{cred.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
