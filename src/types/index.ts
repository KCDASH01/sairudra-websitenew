export interface Course {
  id: string;
  name: string;
  shortName: string;
  category: 'degree' | 'diploma' | 'allied';
  duration: string;
  eligibility: string;
  seats: number;
  overview: string;
  highlights: string[];
  clinicalHours: string;
  careerRoles: string[];
  baseAnnualTuition: number;
  labClinicalFee: number;
  approvedBy: string;
  popular?: boolean;
}

export interface QuoteCalculation {
  courseId: string;
  courseName: string;
  durationYears: number;
  annualTuition: number;
  annualLabClinicalFee: number;
  accommodationType: 'day-scholar' | 'standard-hostel' | 'deluxe-hostel';
  accommodationFee: number;
  scholarshipType: 'none' | 'merit' | 'state-scst' | 'bsky-aid' | 'early-bird';
  discountAmount: number;
  netAnnualEstimatedFee: number;
  totalProgramEstimatedFee: number;
}

export interface QuoteSubmission {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  city: string;
  lastQualification: string;
  aggregateMarks: string;
  courseSelected: string;
  accommodation: string;
  scholarshipApplied: string;
  estimatedTuition: number;
  timestamp: string;
  notes?: string;
}

export interface Facility {
  id: string;
  title: string;
  category: string;
  description: string;
  specs: string[];
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  batch: string;
  currentRole: string;
  hospital: string;
  quote: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export type ColorPalette = 'crimson-navy' | 'royal-sapphire' | 'clinical-teal' | 'emerald-gold';
export type FontOption = 'prestigious-serif' | 'modern-sans' | 'geometric-poppins';

export interface ThemeSettings {
  colorPalette: ColorPalette;
  fontOption: FontOption;
  customLogoUrl: string | null;
  institutionName: string;
}
