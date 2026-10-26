import { Course, Facility, Testimonial, FAQItem } from '../types';

export const COURSES_DATA: Course[] = [
  {
    id: 'bsc-nursing',
    name: 'Bachelor of Science in Nursing (B.Sc Nursing)',
    shortName: 'B.Sc Nursing',
    category: 'degree',
    duration: '4 Years (Full-Time)',
    eligibility: '10+2 with Physics, Chemistry, Biology & English (Min. 45% aggregate; 40% for SC/ST)',
    seats: 60,
    overview: 'A premier 4-year undergraduate degree program recognized by DMET Odisha and affiliated with Odisha University of Health Sciences (OUHS). Designed to develop high-caliber professional nurses equipped for critical care, surgical units, pediatrics, and community healthcare.',
    highlights: [
      'Comprehensive clinical rotations at District Headquarters Hospital & tertiary multi-specialty centers',
      'Advanced anatomy, simulation labs & patient-side practical bedside training',
      'Curriculum aligned with Indian Nursing Council (INC) & OUHS guidelines',
      'Intensive training for NORCET, AIIMS, and international RN licensing (NCLEX/OET/IELTS)'
    ],
    clinicalHours: '1,800+ Clinical & Hospital Hours',
    careerRoles: ['Critical Care Nurse', 'Staff Nurse in AIIMS/DHH', 'Nursing Officer', 'Clinical Instructor', 'Pediatric Nurse Specialist'],
    baseAnnualTuition: 85000,
    labClinicalFee: 25000,
    approvedBy: 'Affiliated with OUHS & DMET Odisha Approved',
    popular: true
  },
  {
    id: 'pbbsc-nursing',
    name: 'Post Basic B.Sc Nursing (P.B.B.Sc Nursing)',
    shortName: 'PB.B.Sc Nursing',
    category: 'degree',
    duration: '2 Years (Degree Pathway)',
    eligibility: '10+2 + GNM Diploma with valid State Nursing Council (ONMRC) Registration as RN/RM',
    seats: 40,
    overview: 'Designed specifically for practicing GNM nurses looking to elevate their professional standing, earn a full Bachelor’s degree, and transition into senior ward in-charge, administrative, and clinical teaching roles.',
    highlights: [
      'Flexible clinical shift scheduling suited for experienced healthcare professionals',
      'Deep dive into Nursing Administration, Research Methodology & Advanced Maternal Health',
      'Direct pathway to M.Sc Nursing, Government Nursing Tutor, and Assistant Professor careers',
      'Accredited degree valid for central and state government nursing officer recruitment'
    ],
    clinicalHours: '900+ Advanced Clinical Hours',
    careerRoles: ['Ward In-Charge', 'Nursing Supervisor', 'Clinical Research Associate', 'Nursing Tutor / Faculty', 'Hospital Quality Officer'],
    baseAnnualTuition: 75000,
    labClinicalFee: 20000,
    approvedBy: 'Recognized by Govt. of Odisha & OUHS',
    popular: false
  },
  {
    id: 'gnm',
    name: 'General Nursing and Midwifery (GNM)',
    shortName: 'GNM',
    category: 'diploma',
    duration: '3 Years (Including Internship)',
    eligibility: '10+2 in any stream (Science/Arts/Commerce) with English, min 40% aggregate',
    seats: 60,
    overview: 'A globally recognized 3-year diploma course that trains skilled bedside nurses and midwives. Emphasizes general patient care, obstetrics, psychiatric nursing, community health nursing, and intensive medical emergency handling.',
    highlights: [
      'Extensive hands-on training in labor rooms, operation theaters, and casualty wards',
      'Compulsory 6-month rotatory clinical internship in multi-specialty partner hospitals',
      'High demand across state hospitals, private health institutions, and offshore wellness centers',
      'Eligible for direct admission into PB.B.Sc Nursing upon course completion'
    ],
    clinicalHours: '1,400+ Hospital Training Hours',
    careerRoles: ['Registered Staff Nurse (RN)', 'Midwife / Labor Room Nurse', 'Emergency & Trauma Care Nurse', 'Home Healthcare Specialist'],
    baseAnnualTuition: 65000,
    labClinicalFee: 18000,
    approvedBy: 'Odisha Nursing and Midwives Council (ONMC)',
    popular: true
  },
  {
    id: 'anm',
    name: 'Auxiliary Nurse Midwife (ANM)',
    shortName: 'ANM',
    category: 'diploma',
    duration: '2 Years',
    eligibility: '10+2 passed from recognized board with English; age minimum 17 years',
    seats: 40,
    overview: 'A foundational 2-year diploma focused on maternal and child healthcare, community health, immunization drives, and primary healthcare delivery in both rural and semi-urban health centers.',
    highlights: [
      'Practical training at Primary Health Centers (PHCs) and Community Health Centers (CHCs)',
      'Specialized modules on newborn care, maternal nutrition, and epidemic control',
      'High recruitment rate in National Health Mission (NHM) Odisha and Sub-Centers',
      'Affordable fee structure with state scholarship eligibility (Post-Matric / PRERANA)'
    ],
    clinicalHours: '800+ Field & Clinical Hours',
    careerRoles: ['Community Health Worker', 'Sub-Center Health Worker (Female)', 'Primary Care Midwife', 'NGO Health Field Officer'],
    baseAnnualTuition: 45000,
    labClinicalFee: 12000,
    approvedBy: 'Odisha Nursing and Midwives Council (ONMC)',
    popular: false
  },
  {
    id: 'd-pharma',
    name: 'Diploma in Pharmacy (D.Pharm)',
    shortName: 'D.Pharma',
    category: 'allied',
    duration: '2 Years',
    eligibility: '10+2 with Physics, Chemistry, and Biology (or Mathematics) with min 45% marks',
    seats: 60,
    overview: 'Pharmacy Council of India (PCI) approved course preparing qualified pharmacists for retail pharmacy, hospital drug dispensing, pharmaceutical quality control, and healthcare inventory management.',
    highlights: [
      'Modern pharmaceutics, pharmacognosy, and pharmaceutical chemistry wet laboratories',
      'Hands-on drug formulation, dosage calculation, and clinical prescription analysis',
      'Qualifies graduates to obtain a Registered Pharmacist License and open retail/wholesale pharmacy',
      'Direct second-year lateral entry eligibility into Bachelor of Pharmacy (B.Pharm)'
    ],
    clinicalHours: '500+ Hours Hospital Dispensary Internship',
    careerRoles: ['Registered Pharmacist', 'Hospital Dispensary In-Charge', 'Medical Representative', 'Pharmaceutical QC Analyst', 'Retail Pharmacy Owner'],
    baseAnnualTuition: 70000,
    labClinicalFee: 22000,
    approvedBy: 'Pharmacy Council of India (PCI) & Govt. of Odisha',
    popular: true
  },
  {
    id: 'dmlt',
    name: 'Diploma in Medical Laboratory Technology (DMLT)',
    shortName: 'DMLT',
    category: 'allied',
    duration: '2 Years',
    eligibility: '10+2 with Science stream (Physics, Chemistry, Biology) with min 40% aggregate',
    seats: 40,
    overview: 'Comprehensive laboratory diagnostic sciences program training technicians in hematology, clinical pathology, biochemistry, medical microbiology, histopathology, and automated diagnostics analyzers.',
    highlights: [
      'Training on automated biochemistry analyzers, microtomes, and blood bank testing protocols',
      'Clinical diagnostic pathology training at District Hospital and NABL-accredited diagnostic networks',
      'Vital role in modern evidence-based healthcare and disease surveillance',
      'Immediate career readiness in diagnostic chains, trauma centers, and blood transfusion banks'
    ],
    clinicalHours: '700+ Hours Diagnostic Lab Practice',
    careerRoles: ['Medical Laboratory Technician', 'Blood Bank Officer', 'Pathology Lab Assistant', 'Clinical Research Lab Technician'],
    baseAnnualTuition: 55000,
    labClinicalFee: 18000,
    approvedBy: 'Directorate of Medical Education & Training (DMET), Odisha',
    popular: false
  }
];

export const CAMPUS_FACILITIES: Facility[] = [
  {
    id: 'simulation-lab',
    title: 'Advanced Clinical Simulation & Nursing Foundation Lab',
    category: 'Clinical Infrastructure',
    description: 'Equipped with high-fidelity adult, pediatric, and birthing manikins for practicing cardiopulmonary resuscitation (CPR), intravenous catheterization, catheterization, and sterile surgical dressing before clinical rotations.',
    specs: ['Full-body simulation manikins', 'Realistic patient care beds & IV monitors', 'Emergency crash cart & oxygen setup', 'Infection-control sterile bays'],
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mch-lab',
    title: 'Maternal & Child Health (MCH) & Nutrition Lab',
    category: 'Maternity & Pediatrics',
    description: 'Specialized lab designed for obstetrics and gynecological nursing training, featuring neonatal incubators, phototherapy units, labor delivery simulators, and a dedicated dietary therapy kitchen.',
    specs: ['Obstetric & delivery simulators', 'Infant radiant warmers & phototherapy', 'Nutritional caloric calculation workstations', 'Growth monitoring equipment'],
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pharmacy-lab',
    title: 'Pharmaceutical Chemistry & Dispensing Labs',
    category: 'Pharmacy (D.Pharm)',
    description: 'PCI-compliant facilities equipped with analytical balances, spectrophotometers, dissolution apparatus, and formulation workstations for hands-on pharmaceutical compounding.',
    specs: ['Precision digital analytical balances', 'Tablet disintegrators & dissolution baths', 'Aseptic compounding station', 'Herbarium & pharmacognosy specimens'],
    imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pathology-lab',
    title: 'Diagnostic Pathology & Microbiology Lab',
    category: 'Allied Sciences (DMLT)',
    description: 'Advanced clinical diagnostic suite featuring binocular compound microscopes, automated biochemistry analyzers, centrifuges, and culture incubators for blood, urine, and tissue evaluation.',
    specs: ['Binocular oil-immersion microscopes', 'Automated hematology cell counters', 'Autoclaves & laminar airflow hoods', 'Histopathology staining stations'],
    imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'digital-library',
    title: 'Knowledge Resource Center & Digital Library',
    category: 'Academic Learning',
    description: 'Extensive repository of over 6,500 healthcare textbooks, international nursing journals, Delnet digital subscriptions, and high-speed computer terminals for medical research.',
    specs: ['6,500+ Medical & nursing volumes', 'National & international journal subscriptions', 'High-speed internet workstations', 'Quiet study cubicles & reading halls'],
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hostel-campus',
    title: 'KIET Campus Hostels & Student Amenities',
    category: 'Student Life & Safety',
    description: 'Secure, modern residential campus with separate boarding for male and female students, RO purified drinking water, balanced multi-cuisine mess, 24/7 CCTV surveillance, and dedicated transport buses.',
    specs: ['Separate secured hostels (Boys & Girls)', '24/7 Power backup & CCTV surveillance', 'Hygienic dining & balanced diet plan', 'College bus fleet connecting major routes'],
    imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Priyanka Mohanty',
    course: 'B.Sc Nursing',
    batch: 'Batch 2021-2025',
    currentRole: 'Staff Nurse (ICU Division)',
    hospital: 'SUM Ultimate Medicare, Bhubaneswar',
    quote: 'The rigorous clinical exposure at Sairudra College of Nursing gave me immediate confidence when handling critical emergency cases. The simulation labs and supportive faculty made all the difference in my placement.',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: '2',
    name: 'Soumya Ranjan Nayak',
    course: 'Diploma in Pharmacy (D.Pharm)',
    batch: 'Batch 2022-2024',
    currentRole: 'Registered Pharmacist & Proprietor',
    hospital: 'Arogya Medicals, Kendrapara',
    quote: 'The practical formulation labs and experienced professors guided us through every aspect of pharmacology and drug dispensing. Within two months of graduating, I secured my license and established my pharmacy store.',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: '3',
    name: 'Subhashree Behera',
    course: 'General Nursing & Midwifery (GNM)',
    batch: 'Batch 2021-2024',
    currentRole: 'Pediatric Ward Nurse',
    hospital: 'District Headquarters Hospital (DHH), Kendrapara',
    quote: 'The hands-on hospital rotations during our 3 years gave us unmatched bedside patient management skills. Sairudra’s focus on ethical care, discipline, and patient empathy is exemplary.',
    avatar: 'https://images.unsplash.com/photo-1594824813511-1a3b5a7702f3?auto=format&fit=crop&w=300&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Admissions',
    question: 'What is the admission procedure for B.Sc Nursing and GNM courses?',
    answer: 'Admissions are conducted through state counseling (DMET Odisha) as well as direct institutional merit quota seats. Candidates must submit their 10+2 marksheet with required science subjects, transfer certificate, and identification. You can submit an online Quote Request on this website to secure priority counseling and document verification assistance.'
  },
  {
    id: 'faq-2',
    category: 'Accreditation',
    question: 'Is Sairudra College of Nursing recognized by Government bodies and Universities?',
    answer: 'Yes, Sairudra College of Nursing is fully recognized by the Directorate of Medical Education and Training (DMET), Government of Odisha, and affiliated with the Odisha University of Health Sciences (OUHS). Our D.Pharma program is approved by the Pharmacy Council of India (PCI), and our nursing programs adhere strictly to Indian Nursing Council (INC) syllabus standards.'
  },
  {
    id: 'faq-3',
    category: 'Fees & Scholarships',
    question: 'Are government scholarships available for eligible students?',
    answer: 'Yes! Eligible students can avail various State and Central Government scholarships including the PRERANA Scholarship (for SC/ST/OBC students), Post-Matric Minority Scholarships, and State Merit Scholarships. Our dedicated scholarship desk assists eligible candidates through the entire portal application process.'
  },
  {
    id: 'faq-4',
    category: 'Campus & Hostels',
    question: 'Are hostel and transportation facilities provided for outstation students?',
    answer: 'Yes, our KIET Campus provides separate well-equipped hostels for boys and girls with 24/7 security, warden supervision, clean drinking water, and hygienic dining. Additionally, the college operates a dedicated fleet of buses connecting Kendrapara town, Indupur, Cuttack, and surrounding regions for day scholars.'
  },
  {
    id: 'faq-5',
    category: 'Training & Placements',
    question: 'What clinical training and hospital rotations do students receive?',
    answer: 'Students undergo structured clinical rotations at District Headquarters Hospital (DHH) Kendrapara as well as affiliated super-specialty partner hospitals across Odisha. Rotations cover Medicine, Surgery, Pediatrics, Obstetrics & Gynecology, ICU, Emergency, and Community Health postings.'
  }
];
