import React, { useState } from 'react';
import { CAMPUS_FACILITIES } from '../data/coursesData';
import { Facility } from '../types';
import { Check, Building2, Sparkles } from 'lucide-react';

export const Facilities: React.FC = () => {
  const [activeFacility, setActiveFacility] = useState<Facility>(CAMPUS_FACILITIES[0]);

  return (
    <section id="facilities" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200" aria-label="Campus Facilities & Clinical Labs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">
            <Building2 className="w-4 h-4 text-teal-700" />
            <span>Infrastructure & Learning Environment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            High-Tech Simulation Labs & Modern Campus Life
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Located at the peaceful KIET Campus in Kendrapara, our world-class laboratories give students realistic hands-on practice before their hospital bedside postings.
          </p>
        </div>

        {/* Interactive Showcase: Featured Spotlight + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left 7 Columns: Active Feature Image with Overlay */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 group aspect-4/3 sm:aspect-16/10">
              <img
                src={activeFacility.imageUrl}
                alt={activeFacility.title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-xs font-bold text-teal-300 uppercase tracking-wider">
                  {activeFacility.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {activeFacility.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 line-clamp-2">
                  {activeFacility.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Specs & Feature Selector */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Facility Breakdown</span>
                <h4 className="text-xl font-bold text-slate-950 mt-1">{activeFacility.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {activeFacility.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">Key Specifications:</p>
                <div className="grid grid-cols-1 gap-2">
                  {activeFacility.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick switcher list */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {CAMPUS_FACILITIES.map((facility) => (
                <button
                  key={facility.id}
                  type="button"
                  onClick={() => setActiveFacility(facility)}
                  className={`p-2.5 rounded-xl border text-center text-xs font-semibold transition-all cursor-pointer truncate flex items-center justify-center ${
                    activeFacility.id === facility.id
                      ? 'bg-red-800 text-white border-red-800 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <span className="truncate">{facility.title.split('&')[0].trim()}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Facility highlights cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
            <h4 className="text-base font-bold text-slate-950 mb-1">Campus Safety & Hostels</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              24/7 security surveillance with dedicated wardens for boys and girls hostels. Hygienic dining hall with fresh, nutritious meals prepared daily.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
            <h4 className="text-base font-bold text-slate-950 mb-1">Fleet College Buses</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Extensive bus routes connecting Kendrapara town, Pattamundai, Indupur, Marshaghai, and Cuttack for hassle-free day scholar commute.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
            <h4 className="text-base font-bold text-slate-950 mb-1">Digital Medical Library</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Access to Delnet digital medical databases, international research journals, e-books, and quiet study workstations with high-speed internet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
