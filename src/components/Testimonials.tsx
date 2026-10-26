import React from 'react';
import { TESTIMONIALS } from '../data/coursesData';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200" aria-label="Student and Alumni Success Stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">
            <Quote className="w-4 h-4 text-teal-700" />
            <span>Alumni Voices & Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Trusted by Students, Valued by Leading Hospitals
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Hear from our graduates who transformed their passion for healthcare into fulfilling, high-impact careers across Odisha and India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:shadow-lg transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-teal-600"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs font-semibold text-teal-700">{t.course} · {t.batch}</p>
                  <p className="text-[11px] text-slate-500">{t.currentRole} at {t.hospital}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
