import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Navigation, MessageSquare, AlertCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('B.Sc Nursing');
  const [visitDate, setVisitDate] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !phone.trim()) {
      setError('Please provide your name and contact phone number.');
      return;
    }

    if (phone.trim().replace(/\D/g, '').length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 500);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setVisitDate('');
    setMessage('');
    setIsSent(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200" aria-label="Campus Location & Contact Information">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">
            <MapPin className="w-4 h-4 text-teal-700" />
            <span>Connect & Visit KIET Campus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Plan Your Campus Visit or Inquiry
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            We welcome students and parents to tour our high-fidelity labs, simulation rooms, smart lecture halls, and secure hostels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 5 Columns: Official Contact Details & Campus Directions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-950">
                Institutional Contact Desk
              </h3>

              <div className="space-y-4 text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0 border border-teal-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Campus Location</h4>
                    <p className="text-slate-700 font-medium mt-0.5 leading-snug">
                      Ramnagarpatna, Gulnagar, (KIET Campus)
                    </p>
                    <p className="text-slate-600 text-xs mt-0.5">
                      Plot No- 111, Kendrapara (Indupur Road), Kendrapara, Odisha 754211.
                    </p>
                    <a
                      href="https://maps.google.com/?q=Ramnagarpatna+Gulnagar+Kendrapara+Odisha+754211"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 hover:text-teal-800 mt-2"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Admission Helplines</h4>
                    <a
                      href="tel:+917008401839"
                      className="block text-slate-900 font-bold hover:text-teal-700 transition-colors mt-0.5"
                    >
                      +91 7008401839
                    </a>
                    <p className="text-slate-500 text-xs">Direct counseling & verification desk</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Official Email</h4>
                    <a
                      href="mailto:info@sairudra.org.in"
                      className="block text-slate-900 font-semibold hover:text-teal-700 transition-colors mt-0.5 text-xs sm:text-sm"
                    >
                      info@sairudra.org.in
                    </a>
                    <p className="text-slate-500 text-xs">For prospectus, transcripts & affiliations</p>
                  </div>
                </div>

                {/* Office Timings */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Visiting Hours</h4>
                    <p className="text-slate-800 font-medium text-xs mt-0.5">
                      Monday to Saturday: 9:00 AM – 5:30 PM
                    </p>
                    <p className="text-slate-500 text-xs">Sundays open during counseling months</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-800 to-teal-900 text-white flex items-center justify-between shadow-sm">
              <div className="space-y-0.5">
                <p className="text-[11px] uppercase tracking-wider text-emerald-200 font-bold">Need Quick Answers?</p>
                <p className="text-sm font-bold text-white">Chat with Admissions on WhatsApp</p>
              </div>
              <a
                href="https://wa.me/917008401839?text=Hello%20Sairudra%20Admissions%20Team,%20I%20would%20like%20information%20regarding%202026-27%20admission."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white text-emerald-900 text-xs font-bold hover:bg-emerald-50 transition-colors shrink-0"
              >
                <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.012 2C6.486 2 2 6.486 2 12.012c0 1.867.514 3.616 1.408 5.114L2 22l5.02-1.318a9.97 9.97 0 0 0 4.992 1.33h.005c5.524 0 10.01-4.486 10.01-10.012 0-2.673-1.041-5.187-2.932-7.078A9.945 9.945 0 0 0 12.012 2Zm0 1.69c2.222 0 4.312.865 5.884 2.436a8.27 8.27 0 0 1 2.434 5.886c0 4.59-3.734 8.322-8.323 8.322a8.28 8.28 0 0 1-4.223-1.151l-.303-.18-3.136.823.837-3.056-.197-.314A8.257 8.257 0 0 1 3.69 12.012c0-4.59 3.733-8.322 8.322-8.322Zm4.819 11.597c-.264-.132-1.562-.77-1.804-.858-.242-.088-.418-.132-.594.132-.176.264-.682.858-.836 1.034-.154.176-.308.198-.572.066-.264-.132-1.115-.411-2.124-1.311-.785-.7-1.315-1.565-1.469-1.83-.154-.264-.016-.407.116-.539.119-.118.264-.308.396-.462.132-.154.176-.264.264-.44.088-.176.044-.33-.022-.462-.066-.132-.594-1.433-.814-1.962-.214-.515-.433-.445-.594-.453-.154-.008-.33-.009-.506-.009-.176 0-.462.066-.704.33-.242.264-.924.903-.924 2.203s.946 2.556 1.078 2.732c.132.176 1.863 2.844 4.513 3.988.63.272 1.122.435 1.506.557.633.201 1.209.173 1.664.105.508-.076 1.562-.639 1.782-1.256.22-.617.22-1.146.154-1.256-.066-.11-.242-.176-.506-.308Z"
                  />
                </svg>
                <span>Message Now</span>
              </a>
            </div>
          </div>

          {/* Right 7 Columns: Interactive Campus Visit & Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            {isSent ? (
              <div className="text-center py-10 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950">Inquiry Received Successfully!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{name}</strong>. Our admissions counseling officer will review your request and connect with you at <strong className="text-slate-900">{phone}</strong> shortly.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-950">Send an Inquiry or Schedule a Campus Visit</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fill out the form below and our counseling office will reserve your visit slot.
                  </p>
                </div>

                {error && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ananya Pattnaik"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Number (WhatsApp Preferred) *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 7008401839"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ananya@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-course" className="block text-xs font-semibold text-slate-700 mb-1">
                      Interested Course *
                    </label>
                    <select
                      id="contact-course"
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm bg-white focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                    >
                      <option>B.Sc Nursing (4 Years)</option>
                      <option>Post Basic B.Sc Nursing (2 Years)</option>
                      <option>General Nursing & Midwifery - GNM (3 Years)</option>
                      <option>Auxiliary Nurse Midwife - ANM (2 Years)</option>
                      <option>Diploma in Pharmacy - D.Pharm (2 Years)</option>
                      <option>Diploma in Medical Lab Technology - DMLT (2 Years)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-date" className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Campus Visit Date (Optional)
                  </label>
                  <input
                    id="contact-date"
                    type="date"
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Question / Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your educational background or ask about hostel accommodations, scholarships, or seat reservations..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-teal-600 focus:ring-2 focus:ring-teal-100 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md transition-all cursor-pointer disabled:opacity-70"
                >
                  {isLoading ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry & Book Visit</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
