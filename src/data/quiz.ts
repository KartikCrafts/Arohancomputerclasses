import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'What is your current educational or career background? (आपकी वर्तमान शैक्षिक पृष्ठभूमि क्या है?)',
    options: [
      {
        label: 'School / 10th-12th Student / College Fresher',
        value: 'student',
        recommendedCategories: ['basic', 'programming', 'design']
      },
      {
        label: 'Commerce Graduate / B.Com / M.Com / Accounting interest',
        value: 'commerce',
        recommendedCategories: ['accounting', 'basic']
      },
      {
        label: 'BCA / B.Tech / Engineering Student / Tech enthusiast',
        value: 'tech',
        recommendedCategories: ['programming', 'advanced']
      },
      {
        label: 'Working Professional / Business Owner looking to upgrade',
        value: 'professional',
        recommendedCategories: ['advanced', 'accounting', 'design']
      }
    ]
  },
  {
    id: 2,
    question: 'What type of daily work excites you the most? (आपको किस तरह का काम करना सबसे ज्यादा पसंद है?)',
    options: [
      {
        label: 'Solving logic puzzles, coding apps & building websites',
        value: 'coding',
        recommendedCategories: ['programming']
      },
      {
        label: 'Managing finance, accounts, GST calculations & Excel sheets',
        value: 'finance',
        recommendedCategories: ['accounting', 'basic']
      },
      {
        label: 'Creative graphics, logos, video editing & social media ads',
        value: 'creative',
        recommendedCategories: ['design']
      },
      {
        label: 'Using AI tools, automation, cyber hacking & futuristic tech',
        value: 'future',
        recommendedCategories: ['advanced', 'programming']
      }
    ]
  },
  {
    id: 3,
    question: 'How much time can you commit daily for learning and practice? (आप रोजाना कितना समय दे सकते हैं?)',
    options: [
      {
        label: '1 - 2 Hours Daily (Part-time / Moderate speed)',
        value: 'part-time',
        recommendedCategories: ['basic', 'accounting', 'design']
      },
      {
        label: '3 - 5 Hours Daily (Intensive Career Bootcamp)',
        value: 'full-time',
        recommendedCategories: ['programming', 'advanced']
      },
      {
        label: 'Only Weekends (Saturday & Sunday special batches)',
        value: 'weekend',
        recommendedCategories: ['accounting', 'advanced', 'design']
      }
    ]
  }
];
