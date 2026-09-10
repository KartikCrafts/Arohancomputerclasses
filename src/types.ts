export type CourseCategory = 
  | 'all' 
  | 'basic' 
  | 'programming' 
  | 'accounting' 
  | 'design' 
  | 'advanced';

export interface CourseModule {
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  titleHindi?: string;
  category: CourseCategory;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: string; // e.g., "3 Months (120 Hours)"
  fee: number; // in INR
  originalFee: number;
  description: string;
  shortDesc: string;
  iconName: string; // Lucide icon name
  popular?: boolean;
  jobRoles: string[];
  avgSalary: string;
  modules: CourseModule[];
  softwareCovered: string[];
  batchTimings: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  course: string;
  role: string;
  company: string;
  comment: string;
  rating: number;
  salaryGrowth?: string;
  image: string;
}

export interface Faculty {
  id: string;
  name: string;
  designation: string;
  specialization: string;
  experience: string;
  qualifications: string;
  image: string;
}

export interface CertificateRecord {
  certId: string;
  studentName: string;
  courseName: string;
  grade: 'A+' | 'A' | 'B+' | 'Excellence';
  issueDate: string;
  instructorName: string;
  duration: string;
  status: 'Valid & Verified' | 'Expired';
}

export interface DemoBooking {
  name: string;
  phone: string;
  email: string;
  courseId: string;
  preferredBatch: string;
  qualification: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    value: string;
    recommendedCategories: CourseCategory[];
  }[];
}
