import { Testimonial, Faculty, CertificateRecord } from '../types';

export const INSTITUTE_STATS = [
  { label: 'Certified Graduates', value: '12,500+', icon: 'Award' },
  { label: 'Hands-on Practical Ratio', value: '100%', icon: 'Laptop' },
  { label: 'Senior Industry Mentors', value: '18+', icon: 'Users' },
  { label: 'Placement Rate', value: '92%', icon: 'Briefcase' },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'Rahul Sharma',
    course: 'Full Stack Web Development (MERN)',
    role: 'Frontend Developer',
    company: 'TechVantage Solutions, Pune',
    comment: 'Aarohan IT Academy completely transformed my career! Coming from a non-CS background, the structured 1:1 lab practice and real project assignments helped me secure a high-paying developer role.',
    rating: 5,
    salaryGrowth: '$6,200 / Year Package',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250'
  },
  {
    id: 't2',
    name: 'Priya Patel',
    course: 'Tally Prime with GST Pro',
    role: 'Senior Accounts Executive',
    company: 'Mehta & Sons CA Firm',
    comment: 'The live GST portal practice here is unbeatable. While other institutes teach only theory, our mentors guided us through real tax filings, balance sheet reconciliations, and e-way billing.',
    rating: 5,
    salaryGrowth: '₹32,000 / Month',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250'
  },
  {
    id: 't3',
    name: 'Ankit Verma',
    course: 'Graphic Design & UI/UX Specialist',
    role: 'Product UI Designer',
    company: 'Creative Hive Studios',
    comment: 'From basic vector art in Illustrator to designing interactive Figma prototypes, the curriculum is completely industry-aligned. My portfolio got me hired within 2 weeks of graduation!',
    rating: 5,
    salaryGrowth: '₹4.8 LPA Package',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250'
  },
  {
    id: 't4',
    name: 'Sneha Mukherjee',
    course: 'Python Programming & Data Analytics',
    role: 'Data Analyst Trainee',
    company: 'Infotech Global',
    comment: 'The faculty explains complex logic and Pandas operations step-by-step. The weekly Saturday doubt-solving sessions and placement mock interviews gave me immense confidence.',
    rating: 5,
    salaryGrowth: '₹5.5 LPA Package',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250'
  }
];

export const FACULTY_DATA: Faculty[] = [
  {
    id: 'f1',
    name: 'Prof. Rajeshwar Awasthi',
    designation: 'Founder & Head of Software Engineering',
    specialization: 'Full Stack MERN, System Architecture, Algorithms & C++',
    experience: '14+ Years Experience',
    qualifications: 'M.Tech (CS), Ex-Senior Software Engineer at Wipro',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'f2',
    name: 'CA Neha Khandelwal',
    designation: 'Head of Financial Accounting & Taxation',
    specialization: 'Tally Prime 4.0, GST Returns, TDS Compliance & Audit',
    experience: '10+ Years Experience',
    qualifications: 'Chartered Accountant (CA), B.Com (Hons)',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'f3',
    name: 'Vikramaditya Singh',
    designation: 'Lead UI/UX & Creative Design Mentor',
    specialization: 'Figma, Adobe Creative Cloud & Modern Web Aesthetics',
    experience: '8+ Years Experience',
    qualifications: 'B.Des (NID Graduate), Adobe Certified Professional',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'f4',
    name: 'Dr. Meenakshi Sundaram',
    designation: 'Data Science & Python Lead',
    specialization: 'Python Data Analysis, Machine Learning Basics & SQL',
    experience: '11+ Years Experience',
    qualifications: 'Ph.D. in Computer Science, Certified CEH & Data Specialist',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=300'
  }
];

export const SAMPLE_CERTIFICATES: CertificateRecord[] = [
  {
    certId: 'TAK-2026-104',
    studentName: 'Kartik Pandya',
    courseName: 'Full Stack Web Development (MERN)',
    grade: 'Excellence',
    issueDate: '15 July 2026',
    instructorName: 'Prof. Rajeshwar Awasthi',
    duration: '6 Months (180 Hours)',
    status: 'Valid & Verified'
  },
  {
    certId: 'TAK-2026-088',
    studentName: 'Aarav Mehta',
    courseName: 'Tally Prime with GST & Accounting Pro',
    grade: 'A+',
    issueDate: '10 June 2026',
    instructorName: 'CA Neha Khandelwal',
    duration: '3 Months (90 Hours)',
    status: 'Valid & Verified'
  },
  {
    certId: 'TAK-2025-912',
    studentName: 'Divya Rathore',
    courseName: 'Python Programming & Data Analytics',
    grade: 'A+',
    issueDate: '20 December 2025',
    instructorName: 'Dr. Meenakshi Sundaram',
    duration: '4 Months (120 Hours)',
    status: 'Valid & Verified'
  },
  {
    certId: 'TAK-2025-774',
    studentName: 'Harshvardhan Joshi',
    courseName: 'Graphic Design & UI/UX Specialist',
    grade: 'A',
    issueDate: '05 November 2025',
    instructorName: 'Vikramaditya Singh',
    duration: '3.5 Months (105 Hours)',
    status: 'Valid & Verified'
  }
];

export const FAQ_LIST = [
  {
    question: 'Are classes suitable for beginners with zero prior computer knowledge?',
    answer: 'Absolutely! All fundamental courses start with step-by-step guidance. Our instructors teach using practical real-life examples so every student can follow comfortably regardless of background.'
  },
  {
    question: 'What payment options and EMI installment plans are available?',
    answer: 'We offer flexible payment schedules allowing you to split course fees into 2 to 4 monthly installments with 0% interest. We accept UPI, Net Banking, Credit/Debit cards, and Cash.'
  },
  {
    question: 'Do students receive an official government-recognized ISO certificate?',
    answer: 'Yes! Upon passing your final practical assessment and project review, you receive an ISO 9001:2015 certified Diploma with an official QR code and roll number verifiable online globally.'
  },
  {
    question: 'How does the Placement Cell assist students in getting a job?',
    answer: 'Our placement team provides resume building, LinkedIn profile optimization, mock technical interviews, and direct referral opportunities with 50+ hiring partner companies.'
  },
  {
    question: 'What happens if I miss a practical lab session due to personal work?',
    answer: 'You will never fall behind! Every student can request extra lab hours on weekdays or attend Saturday backup sessions with dedicated lab assistants.'
  }
];
