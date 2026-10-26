import React from 'react';
import { Course } from '../types';
import { X, CheckCircle2, Clock, Users, Award, Briefcase, FileCheck, ArrowRight, BookOpen } from 'lucide-react';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onRequestQuote: (courseId: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onRequestQuote,
}) => {
  if (!course) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-modal-title"
    >
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 flex items-start justify-between relative">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-400 uppercase tracking-wider">
              <span>{course.approvedBy}</span>
              <span aria-hidden="true">·</span>
              <span>{course.seats} Sanctioned Seats</span>
            </div>
            <h2 id="course-modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {course.name}
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 pt-1">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                {course.duration}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-teal-400" />
                {course.clinicalHours}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Program Overview
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {course.overview}
            </p>
          </div>

          {/* Eligibility Criteria */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-1 flex items-center gap-1.5">
              <FileCheck className="w-4 h-4 text-teal-700" />
              Eligibility & Minimum Criteria
            </h4>
            <p className="text-sm font-semibold text-slate-900 mt-1">
              {course.eligibility}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Age Limit: Minimum 17 years completed on or before 31st December of the admission year.
            </p>
          </div>

          {/* Highlights & Modules */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Curriculum & Clinical Exposure Highlights
            </h3>
            <ul className="space-y-2.5">
              {course.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Career Opportunities */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-slate-600" />
              Career Outcomes & Employment Scope
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {course.careerRoles.map((role, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1.5 rounded-md border border-slate-200"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Transparent Fee Estimate Breakdown */}
          <div className="p-5 rounded-xl bg-teal-50/60 border border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-teal-800 uppercase tracking-wider">Estimated Annual Tuition</p>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-2xl font-black text-slate-900">
                  ₹{course.baseAnnualTuition.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-slate-600">/ academic year</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-0.5">
                + ₹{course.labClinicalFee.toLocaleString('en-IN')} Clinical & Lab Practical Fee (Scholarship applicable)
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onRequestQuote(course.id);
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer shrink-0"
            >
              <span>Calculate Exact Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <p className="text-xs text-slate-500">
            Helpline: <strong className="text-slate-800">+91 7008401839</strong> · Admissions Desk
          </p>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
