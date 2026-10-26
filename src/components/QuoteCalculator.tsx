import React, { useState, useEffect } from 'react';
import { COURSES_DATA } from '../data/coursesData';
import { Course, QuoteCalculation, QuoteSubmission } from '../types';
import { Calculator, CheckCircle2, FileText, Send, Phone, MessageSquare, Printer, RotateCcw, Sparkles, Shield, ArrowRight } from 'lucide-react';

interface QuoteCalculatorProps {
  initialCourseId?: string;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ initialCourseId }) => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(initialCourseId || COURSES_DATA[0].id);
  const [accommodation, setAccommodation] = useState<'day-scholar' | 'standard-hostel' | 'deluxe-hostel'>('day-scholar');
  const [scholarship, setScholarship] = useState<'none' | 'merit' | 'state-scst' | 'bsky-aid' | 'early-bird'>('none');
  
  // Lead info
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [qualification, setQualification] = useState('10+2 Science (PCB)');
  const [aggregateScore, setAggregateScore] = useState('');
  const [notes, setNotes] = useState('');

  // Submission state
  const [submittedQuote, setSubmittedQuote] = useState<QuoteSubmission | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update selected course if prop changes
  useEffect(() => {
    if (initialCourseId) {
      setSelectedCourseId(initialCourseId);
    }
  }, [initialCourseId]);

  const selectedCourse = COURSES_DATA.find(c => c.id === selectedCourseId) || COURSES_DATA[0];

  // Duration in years
  const durationYears = selectedCourse.id === 'bsc-nursing' ? 4 : selectedCourse.id === 'gnm' ? 3 : 2;

  // Accommodation costs
  const accommodationFee = accommodation === 'standard-hostel' ? 45000 : accommodation === 'deluxe-hostel' ? 65000 : 0;

  // Scholarship discounts
  const scholarshipDiscount = scholarship === 'merit'
    ? 15000
    : scholarship === 'state-scst'
    ? 20000
    : scholarship === 'bsky-aid'
    ? 12000
    : scholarship === 'early-bird'
    ? 10000
    : 0;

  const annualTuition = selectedCourse.baseAnnualTuition;
  const labClinicalFee = selectedCourse.labClinicalFee;
  const grossAnnual = annualTuition + labClinicalFee + accommodationFee;
  const netAnnual = Math.max(0, grossAnnual - scholarshipDiscount);
  const totalProgramEstimated = netAnnual * durationYears;

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim() || !phone.trim()) {
      setErrorMessage('Please enter your full name and valid 10-digit mobile number.');
      return;
    }

    if (phone.trim().replace(/\D/g, '').length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile phone number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate instant secure processing
    setTimeout(() => {
      const generatedId = `SR-2026-${selectedCourse.shortName.toUpperCase().replace(/[^A-Z]/g, '')}-${Math.floor(1000 + Math.random() * 9000)}`;
      const submission: QuoteSubmission = {
        id: generatedId,
        fullName: fullName.trim(),
        phone: phone.trim(),
        email: email.trim(),
        city: city.trim() || 'Odisha',
        lastQualification: qualification,
        aggregateMarks: aggregateScore || 'Awaiting Results',
        courseSelected: selectedCourse.name,
        accommodation: accommodation === 'day-scholar' ? 'Day Scholar' : accommodation === 'standard-hostel' ? 'Standard Hostel' : 'Deluxe Hostel',
        scholarshipApplied: scholarship === 'merit' ? 'Academic Merit Waiver' : scholarship === 'state-scst' ? 'PRERANA / Post-Matric Welfare' : scholarship === 'bsky-aid' ? 'BSKY / EWS Support' : scholarship === 'early-bird' ? 'Early-Bird Concession' : 'General / None',
        estimatedTuition: netAnnual,
        timestamp: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        notes: notes.trim()
      };

      setSubmittedQuote(submission);
      setIsSubmitting(false);
    }, 600);
  };

  const handlePrintQuote = () => {
    window.print();
  };

  const handleReset = () => {
    setSubmittedQuote(null);
    setFullName('');
    setPhone('');
    setEmail('');
    setCity('');
    setNotes('');
  };

  const whatsappMessage = submittedQuote
    ? encodeURIComponent(
        `Hello Sairudra Admissions Team! I have generated an official Admission Quote for ${submittedQuote.courseSelected}. Quote ID: ${submittedQuote.id}. Student: ${submittedQuote.fullName}, Phone: ${submittedQuote.phone}. Please guide me on counseling and seat reservation.`
      )
    : '';

  return (
    <section id="quote-calculator" className="py-20 md:py-28 bg-slate-900 text-slate-100 relative overflow-hidden" aria-label="Program Fee & Admission Quote Calculator">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-400">
            <Calculator className="w-4 h-4 text-teal-400" />
            <span>Instant Program Fee & Admission Quote Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Transparent Pricing with <br className="hidden sm:inline" />
            <span className="text-teal-400">Zero Hidden Surcharges</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Configure your desired healthcare program, boarding requirements, and state scholarship qualifications to generate an immediate, official admission quote for the 2026–2027 academic session.
          </p>
        </div>

        {submittedQuote ? (
          /* Official Generated Quote Confirmation Card */
          <div className="max-w-2xl mx-auto bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-teal-500/30 animate-fadeIn">
            {/* Header of Quote Card */}
            <div className="flex items-start justify-between border-b border-slate-200 pb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-teal-700">Official Admission Estimate</span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 mt-1">
                  Sairudra College of Nursing
                </h3>
                <p className="text-xs text-slate-500">KIET Campus, Kendrapara, Odisha · DMET & OUHS Approved</p>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-mono font-bold text-slate-500">QUOTE REF:</span>
                <p className="text-xs sm:text-sm font-mono font-black text-teal-700 bg-teal-50 px-2 py-1 rounded-md border border-teal-200">
                  {submittedQuote.id}
                </p>
                <p className="text-[11px] text-slate-400 mt-1">{submittedQuote.timestamp}</p>
              </div>
            </div>

            {/* Student & Course Summary Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 text-xs sm:text-sm border-b border-slate-200">
              <div>
                <p className="text-slate-500 font-medium text-xs">Applicant Name</p>
                <p className="font-bold text-slate-900 text-sm">{submittedQuote.fullName}</p>
              </div>
              <div>
                <p className="text-slate-500 font-medium text-xs">Contact Phone</p>
                <p className="font-bold text-slate-900 text-sm">{submittedQuote.phone}</p>
              </div>
              <div>
                <p className="text-slate-500 font-medium text-xs">Selected Healthcare Program</p>
                <p className="font-bold text-teal-800 text-sm">{submittedQuote.courseSelected}</p>
              </div>
              <div>
                <p className="text-slate-500 font-medium text-xs">Boarding Plan</p>
                <p className="font-bold text-slate-900 text-sm">{submittedQuote.accommodation}</p>
              </div>
              <div>
                <p className="text-slate-500 font-medium text-xs">Scholarship / Aid Applied</p>
                <p className="font-bold text-emerald-700 text-sm">{submittedQuote.scholarshipApplied}</p>
              </div>
              <div>
                <p className="text-slate-500 font-medium text-xs">Home Town / State</p>
                <p className="font-bold text-slate-900 text-sm">{submittedQuote.city}</p>
              </div>
            </div>

            {/* Financial Breakdown Table */}
            <div className="py-6 space-y-2.5">
              <div className="flex justify-between text-xs text-slate-600">
                <span>Annual Base Tuition Fee</span>
                <span className="font-semibold text-slate-900">₹{annualTuition.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-600">
                <span>Clinical & Simulation Lab Training Fee</span>
                <span className="font-semibold text-slate-900">₹{labClinicalFee.toLocaleString('en-IN')}</span>
              </div>
              {accommodationFee > 0 && (
                <div className="flex justify-between text-xs text-slate-600">
                  <span>Hostel & Mess Boarding Fee</span>
                  <span className="font-semibold text-slate-900">₹{accommodationFee.toLocaleString('en-IN')}</span>
                </div>
              )}
              {scholarshipDiscount > 0 && (
                <div className="flex justify-between text-xs text-emerald-700 font-medium">
                  <span>Estimated Scholarship / Concession Deduction</span>
                  <span>- ₹{scholarshipDiscount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div className="pt-3 border-t-2 border-slate-900 flex justify-between items-baseline">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-600">Net Estimated Annual Fee</p>
                  <p className="text-xs text-slate-400">Payable in convenient semester installments</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl sm:text-3xl font-black text-teal-800">
                    ₹{netAnnual.toLocaleString('en-IN')}
                    <span className="text-xs font-normal text-slate-600"> / yr</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Next steps notice */}
            <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-900 space-y-1 mb-6">
              <p className="font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-700" />
                Quote Request Registered with Admissions Office
              </p>
              <p className="text-teal-800">
                Our senior counselor will contact you within 4 business hours to verify document eligibility and reserve your counseling slot.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/917008401839?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handlePrintQuote}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-semibold transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save PDF</span>
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-3.5 rounded-xl text-slate-500 hover:text-slate-800 text-xs font-semibold transition-colors cursor-pointer"
                title="Calculate Another Quote"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>New Quote</span>
              </button>
            </div>
          </div>
        ) : (
          /* Calculator & Submission Form Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Columns: Step-by-Step Customizer */}
            <div className="lg:col-span-7 bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-8">
              {/* Step 1: Select Program */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-teal-400 mb-3">
                  Step 1 · Select Desired Healthcare Program
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {COURSES_DATA.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedCourseId(c.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        selectedCourseId === c.id
                          ? 'bg-teal-900/60 border-teal-400 text-white ring-2 ring-teal-500/50'
                          : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-500'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-white">{c.shortName}</span>
                        <span className="text-[10px] text-teal-300 font-semibold">{c.duration}</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 truncate">{c.approvedBy}</p>
                      <div className="mt-2 text-xs font-black text-amber-300">
                        ₹{c.baseAnnualTuition.toLocaleString('en-IN')}{' '}
                        <span className="text-[10px] font-normal text-slate-400">/ yr</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Accommodation & Boarding */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-teal-400 mb-3">
                  Step 2 · Accommodation & Campus Living
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setAccommodation('day-scholar')}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      accommodation === 'day-scholar'
                        ? 'bg-teal-900/60 border-teal-400 text-white ring-1 ring-teal-400'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <p className="font-bold text-xs">Day Scholar</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Self-transport / College Bus</p>
                    <p className="text-xs font-extrabold text-white mt-1">₹0</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAccommodation('standard-hostel')}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      accommodation === 'standard-hostel'
                        ? 'bg-teal-900/60 border-teal-400 text-white ring-1 ring-teal-400'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <p className="font-bold text-xs">KIET Standard Hostel</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">3-Sharing + Mess + Wi-Fi</p>
                    <p className="text-xs font-extrabold text-amber-300 mt-1">₹45,000 / yr</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAccommodation('deluxe-hostel')}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      accommodation === 'deluxe-hostel'
                        ? 'bg-teal-900/60 border-teal-400 text-white ring-1 ring-teal-400'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <p className="font-bold text-xs">Semi-Deluxe Room</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">2-Sharing + Attached Bath</p>
                    <p className="text-xs font-extrabold text-amber-300 mt-1">₹65,000 / yr</p>
                  </button>
                </div>
              </div>

              {/* Step 3: Scholarships & Concessions */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-teal-400 mb-3">
                  Step 3 · Applicable Scholarships & Fee Waivers
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setScholarship('none')}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      scholarship === 'none'
                        ? 'bg-teal-900/60 border-teal-400 text-white ring-1 ring-teal-400'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <p className="font-bold text-xs">General / Standard Fee</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Standard fee without institutional waiver</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setScholarship('merit')}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      scholarship === 'merit'
                        ? 'bg-teal-900/60 border-teal-400 text-white ring-1 ring-teal-400'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs">Academic Merit Waiver</span>
                      <span className="text-[10px] text-emerald-400 font-bold">-₹15,000</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">Candidates with ≥ 80% aggregate in 10+2</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setScholarship('state-scst')}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      scholarship === 'state-scst'
                        ? 'bg-teal-900/60 border-teal-400 text-white ring-1 ring-teal-400'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs">PRERANA / Post-Matric Aid</span>
                      <span className="text-[10px] text-emerald-400 font-bold">-₹20,000</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">SC/ST/OBC state welfare portal support</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setScholarship('early-bird')}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      scholarship === 'early-bird'
                        ? 'bg-teal-900/60 border-teal-400 text-white ring-1 ring-teal-400'
                        : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-500'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs">Early-Bird Admission Offer</span>
                      <span className="text-[10px] text-emerald-400 font-bold">-₹10,000</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">Advance registration before seat cutoff</p>
                  </button>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Dynamic Summary & Lead Capture Form */}
            <div className="lg:col-span-5 bg-white text-slate-900 rounded-2xl p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-6">
              {/* Dynamic Calculation Summary */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Selected Program:</span>
                  <span className="font-bold text-slate-900">{selectedCourse.shortName}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Annual Tuition:</span>
                  <span className="font-semibold text-slate-800">₹{annualTuition.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Clinical & Lab Fee:</span>
                  <span className="font-semibold text-slate-800">₹{labClinicalFee.toLocaleString('en-IN')}</span>
                </div>
                {accommodationFee > 0 && (
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Hostel / Accommodation:</span>
                    <span className="font-semibold text-slate-800">₹{accommodationFee.toLocaleString('en-IN')}</span>
                  </div>
                )}
                {scholarshipDiscount > 0 && (
                  <div className="flex items-center justify-between text-xs text-emerald-700 font-semibold">
                    <span>Scholarship Deduction:</span>
                    <span>-₹{scholarshipDiscount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="pt-2 border-t border-slate-200 flex items-baseline justify-between">
                  <span className="text-xs font-bold text-slate-700">Estimated Net / Year:</span>
                  <span className="text-xl font-black text-teal-800">
                    ₹{netAnnual.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Lead Request Form */}
              <form onSubmit={handleSubmitQuote} className="space-y-4">
                <div className="border-b border-slate-200 pb-2">
                  <h3 className="text-sm font-bold text-slate-900">
                    Request Official Quote & Prospectus
                  </h3>
                  <p className="text-xs text-slate-500">
                    Receive your verified quote breakdown and scholarship authorization instantly.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-2.5 rounded-lg bg-red-50 text-red-700 text-xs font-medium border border-red-200">
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label htmlFor="quote-name" className="block text-xs font-semibold text-slate-700 mb-1">
                    Student / Parent Full Name *
                  </label>
                  <input
                    id="quote-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Ramesh Chandra Das"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="quote-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile / WhatsApp *
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 7008401839"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-email" className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="student@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="quote-city" className="block text-xs font-semibold text-slate-700 mb-1">
                      City / District
                    </label>
                    <input
                      id="quote-city"
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Kendrapara, Cuttack"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-qual" className="block text-xs font-semibold text-slate-700 mb-1">
                      Current Qualification
                    </label>
                    <select
                      id="quote-qual"
                      value={qualification}
                      onChange={(e) => setQualification(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                    >
                      <option>10+2 Science (PCB)</option>
                      <option>10+2 Arts / Commerce</option>
                      <option>GNM Diploma Passed</option>
                      <option>10th Standard Appearing</option>
                      <option>Other / Graduate</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 active:bg-teal-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Calculating & Registering...</span>
                  ) : (
                    <>
                      <span>Generate Official Quote & Submit</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-700">
                  🔒 Data secured under Privacy Guidelines · No spam guarantee
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
