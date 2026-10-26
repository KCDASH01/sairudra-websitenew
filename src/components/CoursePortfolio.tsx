import React, { useState } from 'react';
import { Course, ColorPalette } from '../types';
import { COURSES_DATA } from '../data/coursesData';
import { CourseDetailModal } from './CourseDetailModal';
import { ArrowRight, Clock, Users, BookOpen, Check, Calculator, Sparkles, FileText } from 'lucide-react';

interface CoursePortfolioProps {
  onRequestQuote: (courseId?: string) => void;
  colorPalette?: ColorPalette;
}

export const CoursePortfolio: React.FC<CoursePortfolioProps> = ({
  onRequestQuote,
  colorPalette = 'rich-cobalt',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'degree' | 'diploma' | 'allied'>('all');
  const [activeCourseDetail, setActiveCourseDetail] = useState<Course | null>(null);

  const getButtonClass = () => {
    switch (colorPalette) {
      case 'rich-cobalt':
        return 'bg-blue-700 hover:bg-blue-800 text-white';
      case 'oxford-navy':
        return 'bg-[#0B192C] hover:bg-[#1E3E62] text-white';
      case 'midnight-indigo':
        return 'bg-indigo-900 hover:bg-indigo-950 text-white';
      case 'prussian-marine':
        return 'bg-[#002D62] hover:bg-[#001D40] text-white';
      case 'royal-sapphire':
        return 'bg-blue-600 hover:bg-blue-700 text-white';
      case 'crimson-navy':
        return 'bg-red-800 hover:bg-red-900 text-white';
      case 'emerald-gold':
        return 'bg-emerald-700 hover:bg-emerald-800 text-white';
      case 'clinical-teal':
      default:
        return 'bg-teal-700 hover:bg-teal-800 text-white';
    }
  };

  const filteredCourses = selectedCategory === 'all'
    ? COURSES_DATA
    : COURSES_DATA.filter(course => course.category === selectedCategory);

  return (
    <section id="programs" className="py-20 md:py-28 bg-white border-b border-slate-200" aria-label="Academic Programs & Course Portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-slate-200">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">
              <span className="w-2 h-2 rounded-full bg-teal-600" />
              <span>Academic Programs Portfolio</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500">Government & University Approved</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
              Six Comprehensive Pathways to Medical & Nursing Excellence
            </h2>
            <p className="text-base text-slate-600">
              From full four-year Bachelor degrees to specialized clinical pharmacy and laboratory diplomas, our programs are recognized by DMET Odisha, OUHS, and PCI.
            </p>
          </div>

          {/* Interactive Filter Control - Tabs (Segmented control per guidelines) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto overflow-x-auto max-w-full shrink-0">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Courses ({COURSES_DATA.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('degree')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedCategory === 'degree'
                  ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Nursing Degrees
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('diploma')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedCategory === 'diploma'
                  ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Nursing Diplomas
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('allied')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedCategory === 'allied'
                  ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Pharmacy & Diagnostics
            </button>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group relative flex flex-col justify-between bg-white rounded-2xl border border-slate-200 hover:border-teal-500 shadow-xs hover:shadow-xl transition-all duration-300 p-6 sm:p-7"
            >
              {course.popular && (
                <div className="absolute top-4 right-4 text-[10px] font-black uppercase tracking-wider text-amber-900 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-700" />
                  <span>High Demand</span>
                </div>
              )}

              <div className="space-y-4">
                {/* Clean unboxed metadata header */}
                <div className="text-xs font-bold text-teal-800 flex items-center gap-2">
                  <span>{course.approvedBy}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-950 group-hover:text-teal-800 transition-colors">
                  {course.name}
                </h3>

                {/* Key metadata line */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 pt-1 border-y border-slate-100 py-2.5">
                  <span className="flex items-center gap-1 text-slate-700 font-medium">
                    <Clock className="w-3.5 h-3.5 text-teal-600" />
                    {course.duration}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1 text-slate-700 font-medium">
                    <Users className="w-3.5 h-3.5 text-teal-600" />
                    {course.seats} Seats
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-700 font-medium">{course.clinicalHours}</span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {course.overview}
                </p>

                {/* Eligibility note */}
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-700">
                  <span className="font-semibold text-slate-900">Eligibility: </span>
                  {course.eligibility}
                </div>

                {/* Highlight points */}
                <div className="space-y-1.5 pt-1">
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">Key Highlights:</p>
                  {course.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Estimated Tuition</span>
                    <p className="text-lg font-black text-slate-950">
                      ₹{course.baseAnnualTuition.toLocaleString('en-IN')}{' '}
                      <span className="text-xs font-normal text-slate-500">/ yr</span>
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200">
                    Scholarships Avl.
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setActiveCourseDetail(course)}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Syllabus</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onRequestQuote(course.id)}
                    className={`inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs cursor-pointer ${getButtonClass()}`}
                  >
                    <Calculator className="w-3.5 h-3.5" />
                    <span>Get Quote</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Portfolio Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Unsure which healthcare stream fits your background?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Our academic counselors provide free 1-on-1 counseling, document eligibility evaluation, and scholarship guidance for Odisha state & all-India candidates.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="tel:+917008401839"
              className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-colors text-center"
            >
              Call Counselor: +91 7008401839
            </a>
            <button
              type="button"
              onClick={() => onRequestQuote()}
              className="px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold transition-colors text-center cursor-pointer"
            >
              Request Detailed Estimate
            </button>
          </div>
        </div>
      </div>

      {/* Course Detail Modal */}
      <CourseDetailModal
        course={activeCourseDetail}
        onClose={() => setActiveCourseDetail(null)}
        onRequestQuote={onRequestQuote}
      />
    </section>
  );
};
