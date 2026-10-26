import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, Phone, Mail, Award, ArrowRight } from 'lucide-react';

interface ProspectusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const ProspectusModal: React.FC<ProspectusModalProps> = ({
  isOpen,
  onClose,
  onRequestQuote,
}) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [courseInterest, setCourseInterest] = useState('B.Sc Nursing');
  const [downloadReady, setDownloadReady] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim()) return;

    setDownloadReady(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="prospectus-modal-title"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        <div className="bg-slate-900 text-white p-6 flex items-start justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400">
              Session 2026–2027 Information Bulletin
            </span>
            <h2 id="prospectus-modal-title" className="text-xl font-bold text-white">
              Official Institutional Prospectus
            </h2>
            <p className="text-xs text-slate-300">
              Sairudra College of Nursing · Kendrapara, Odisha
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {downloadReady ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Prospectus Ready for Download</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Thank you, <strong className="text-slate-800">{name}</strong>. The comprehensive 2026-27 admission brochure, seat matrix, syllabus, and hostel guidelines have been prepared.
              </p>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    // Trigger simulated download or printable prospectus
                    window.print();
                  }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download / Print Full Brochure (PDF)</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onRequestQuote();
                  }}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>Proceed to Fee Quote Calculator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleDownload} className="space-y-4">
              <p className="text-xs text-slate-600">
                Please provide your contact details to access the official Sairudra College of Nursing 2026-27 Admission Prospectus & Curriculum Guide.
              </p>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Candidate / Parent Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Srikant Behera"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mobile Number (WhatsApp Preferred) *
                </label>
                <input
                  type="tel"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="e.g. 7008401839"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Course of Interest
                </label>
                <select
                  value={courseInterest}
                  onChange={(e) => setCourseInterest(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none"
                >
                  <option>B.Sc Nursing (4 Years)</option>
                  <option>Post Basic B.Sc Nursing (2 Years)</option>
                  <option>General Nursing & Midwifery (GNM)</option>
                  <option>Auxiliary Nurse Midwife (ANM)</option>
                  <option>Diploma in Pharmacy (D.Pharm)</option>
                  <option>Diploma in Medical Lab Tech (DMLT)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Instant Access to Prospectus</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
