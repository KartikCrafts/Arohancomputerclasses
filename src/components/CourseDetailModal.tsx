import React from 'react';
import { Course } from '../types';
import { X, Clock, CheckCircle2, Award, Briefcase, Calendar, Sparkles, BookOpen, Layers } from 'lucide-react';

interface CourseDetailModalProps {
  course: Course;
  onClose: () => void;
  onBookDemo: (courseId: string) => void;
  langMode?: 'en' | 'hinglish';
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onBookDemo,
}) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-[#E8DFC8] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#4A3B32] text-[#F9F6F0] p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-black/30 hover:bg-black/50 text-[#EADDCB] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 bg-[#8D6E63] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>ISO 9001:2015 Certified Diploma Course</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {course.title}
          </h2>

          <div className="flex flex-wrap items-center gap-4 mt-4 text-xs font-semibold text-[#EADDCB]">
            <span className="flex items-center gap-1 bg-[#5D4037] px-3 py-1 rounded-lg border border-[#8D6E63]">
              <Clock className="w-3.5 h-3.5" /> {course.duration}
            </span>
            <span className="flex items-center gap-1 bg-[#5D4037] px-3 py-1 rounded-lg border border-[#8D6E63]">
              <Briefcase className="w-3.5 h-3.5" /> {course.avgSalary}
            </span>
            <span className="flex items-center gap-1 bg-green-800 text-green-100 px-3 py-1 rounded-lg">
              Level: {course.level}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Overview */}
          <div>
            <h3 className="text-sm font-extrabold text-[#5D4037] uppercase tracking-wider mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Course Overview & Career Scope
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed font-normal">
              {course.description}
            </p>
          </div>

          {/* Modules & Syllabus */}
          <div>
            <h3 className="text-sm font-extrabold text-[#5D4037] uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Complete Module-wise Syllabus Breakdown
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {course.modules.map((mod, idx) => (
                <div key={idx} className="bg-[#F9F6F0] p-4 rounded-2xl border border-[#E8DFC8]">
                  <h4 className="font-extrabold text-sm text-[#262320] mb-2">{mod.title}</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
                    {mod.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Software & Tools */}
          <div>
            <h3 className="text-sm font-extrabold text-[#5D4037] uppercase tracking-wider mb-2">
              Software & Tools Mastered
            </h3>
            <div className="flex flex-wrap gap-2">
              {course.softwareCovered.map((s, idx) => (
                <span key={idx} className="bg-[#F3EDE2] text-[#262320] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#DBC9B5]">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Career Job Roles */}
          <div>
            <h3 className="text-sm font-extrabold text-[#5D4037] uppercase tracking-wider mb-2">
              Target Job Roles Upon Graduation
            </h3>
            <div className="flex flex-wrap gap-2">
              {course.jobRoles.map((role, idx) => (
                <span key={idx} className="bg-white text-[#5D4037] border-2 border-[#E8DFC8] text-xs font-bold px-3 py-1.5 rounded-lg">
                  💼 {role}
                </span>
              ))}
            </div>
          </div>

          {/* Batch Timings */}
          <div>
            <h3 className="text-sm font-extrabold text-[#5D4037] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> Available Batch Schedules
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {course.batchTimings.map((time, idx) => (
                <span key={idx} className="bg-[#F9F6F0] text-[#262320] px-3 py-1.5 rounded-lg border border-[#DBC9B5] font-semibold">
                  ⏰ {time}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-[#F9F6F0] border-t border-[#E8DFC8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-gray-500 uppercase">Course Tuition Fee</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-[#262320]">
                ₹{course.fee.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-gray-400 line-through">
                ₹{course.originalFee.toLocaleString('en-IN')}
              </span>
              <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-md">
                Save ₹{(course.originalFee - course.fee).toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-3 rounded-xl border border-[#DBC9B5] text-xs font-bold text-[#262320] hover:bg-white"
            >
              Close
            </button>
            <button
              onClick={() => onBookDemo(course.id)}
              className="w-full sm:w-auto bg-[#5D4037] hover:bg-[#4A3B32] text-white font-extrabold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#EADDCB]" />
              <span>Book Free Trial Seat</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
