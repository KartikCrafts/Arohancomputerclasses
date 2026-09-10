import React, { useState } from 'react';
import { Course, CourseCategory } from '../types';
import { Sparkles, ArrowRight, CheckCircle2, RotateCcw, GraduationCap, Award, BookOpen } from 'lucide-react';

interface CourseFinderModalProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
  onBookDemo: (courseId: string) => void;
  langMode?: 'en' | 'hinglish';
}

export const CourseFinderModal: React.FC<CourseFinderModalProps> = ({
  courses,
  onSelectCourse,
  onBookDemo,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [qualification, setQualification] = useState('');
  const [goal, setGoal] = useState('');
  const [durationPref, setDurationPref] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      title: "Step 1: What is your current educational background?",
      options: [
        { label: "High School Student (10th / 12th)", val: "school" },
        { label: "Commerce / Accounts Graduate (B.Com / M.Com)", val: "commerce" },
        { label: "College / Engineering / BCA / MCA Student", val: "college" },
        { label: "Job Seeker / Working Professional", val: "professional" }
      ],
      selected: qualification,
      setSelected: setQualification
    },
    {
      title: "Step 2: What is your primary career goal?",
      options: [
        { label: "Get a high-paying software engineering or web development job", val: "coding" },
        { label: "Become a professional corporate accountant with GST expertise", val: "accounting" },
        { label: "Master basic office computers for government exams / admin jobs", val: "office" },
        { label: "Become a graphic designer, UI/UX creator or digital marketer", val: "design" },
        { label: "Learn cutting-edge AI prompt engineering & cybersecurity", val: "ai" }
      ],
      selected: goal,
      setSelected: setGoal
    },
    {
      title: "Step 3: What is your preferred course duration?",
      options: [
        { label: "Fast-track intensive (1.5 to 2 Months)", val: "short" },
        { label: "Standard career diploma (3 to 4 Months)", val: "medium" },
        { label: "Comprehensive professional bootcamp (5 to 6 Months)", val: "long" }
      ],
      selected: durationPref,
      setSelected: setDurationPref
    }
  ];

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setQualification('');
    setGoal('');
    setDurationPref('');
    setIsCompleted(false);
  };

  // Logic to filter top recommended courses
  const getRecommendedCourses = (): Course[] => {
    let targetCategory: CourseCategory = 'all';

    if (goal === 'coding') targetCategory = 'programming';
    else if (goal === 'accounting') targetCategory = 'accounting';
    else if (goal === 'office') targetCategory = 'basic';
    else if (goal === 'design') targetCategory = 'design';
    else if (goal === 'ai') targetCategory = 'advanced';
    else if (qualification === 'commerce') targetCategory = 'accounting';
    else if (qualification === 'college') targetCategory = 'programming';

    let filtered = courses.filter(c => targetCategory === 'all' || c.category === targetCategory);
    if (filtered.length === 0) filtered = courses;

    return filtered.slice(0, 3);
  };

  const recommendedList = getRecommendedCourses();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl shadow-xl border-2 border-[#E8DFC8] overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#4A3B32] text-[#F9F6F0] p-6 sm:p-8 text-center relative">
          <div className="inline-flex items-center gap-1.5 bg-[#8D6E63] text-white text-xs font-extrabold px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Powered Course Advisor</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Find Your Ideal IT & Career Diploma
          </h2>
          <p className="text-xs sm:text-sm text-[#EADDCB]/80 mt-1 max-w-xl mx-auto">
            Answer 3 quick questions about your qualification and goals to receive instant personalized course recommendations.
          </p>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-10">
          {!isCompleted ? (
            <div className="space-y-8 max-w-2xl mx-auto">
              
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs font-bold text-gray-400 border-b border-[#F3EDE2] pb-3">
                <span>Step {currentStep + 1} of 3</span>
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className={`h-2 w-8 rounded-full transition-all ${
                        i <= currentStep ? 'bg-[#5D4037]' : 'bg-[#E8DFC8]'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Current Question */}
              <div className="space-y-4">
                <h3 className="text-lg font-extrabold text-[#262320]">
                  {questions[currentStep].title}
                </h3>

                <div className="grid grid-cols-1 gap-3">
                  {questions[currentStep].options.map((opt, idx) => {
                    const isSel = questions[currentStep].selected === opt.val;
                    return (
                      <button
                        key={idx}
                        onClick={() => questions[currentStep].setSelected(opt.val)}
                        className={`p-4 rounded-2xl text-left text-xs sm:text-sm font-bold transition-all flex items-center justify-between border-2 ${
                          isSel
                            ? 'bg-[#F9F6F0] border-[#5D4037] text-[#5D4037] shadow-sm'
                            : 'bg-white border-[#E8DFC8] text-[#262320] hover:bg-[#F9F6F0]'
                        }`}
                      >
                        <span>{opt.label}</span>
                        {isSel && <CheckCircle2 className="w-5 h-5 text-[#5D4037] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-4">
                {currentStep > 0 ? (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="px-4 py-2.5 rounded-xl border border-[#DBC9B5] text-xs font-bold text-[#262320]"
                  >
                    Back
                  </button>
                ) : <div />}

                <button
                  disabled={!questions[currentStep].selected}
                  onClick={handleNext}
                  className="bg-[#5D4037] hover:bg-[#4A3B32] disabled:opacity-50 text-white font-extrabold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center gap-2"
                >
                  <span>{currentStep === 2 ? 'Get Recommendations' : 'Next Step'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ) : (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-[#F3EDE2] text-[#5D4037] mx-auto flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-[#262320]">
                  Recommended Courses for You
                </h3>
                <p className="text-xs text-gray-600">
                  Based on your preferences, these programs offer the best alignment with your career trajectory.
                </p>
              </div>

              {/* Course Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recommendedList.map((course) => (
                  <div
                    key={course.id}
                    className="bg-[#F9F6F0] p-5 rounded-2xl border-2 border-[#E8DFC8] flex flex-col justify-between space-y-4 shadow-sm"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-white bg-[#5D4037] px-2 py-0.5 rounded-md uppercase">
                        {course.duration}
                      </span>
                      <h4 className="font-extrabold text-sm text-[#262320] mt-2">
                        {course.title}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                        {course.shortDesc}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-[#E8DFC8]">
                      <div className="text-base font-black text-[#262320]">
                        ₹{course.fee.toLocaleString('en-IN')}
                      </div>
                      <button
                        onClick={() => onSelectCourse(course)}
                        className="w-full bg-white hover:bg-[#F3EDE2] text-[#5D4037] font-bold py-2 rounded-xl text-xs border border-[#DBC9B5]"
                      >
                        View Syllabus
                      </button>
                      <button
                        onClick={() => onBookDemo(course.id)}
                        className="w-full bg-[#5D4037] text-white font-bold py-2 rounded-xl text-xs"
                      >
                        Book Trial Class
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center pt-4">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5D4037] hover:underline"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Retake Recommendation Quiz
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
