import React from 'react';
import { Course, CourseCategory } from '../types';
import { 
  BookOpen, Clock, IndianRupee, Briefcase, Award, CheckCircle, 
  Sparkles, ChevronRight, FileSpreadsheet, Calculator, Code2, 
  Terminal, Palette, TrendingUp, BarChart3, Cpu, ShieldAlert, 
  Smartphone, Compass, Filter
} from 'lucide-react';

interface CourseCatalogProps {
  courses: Course[];
  selectedCategory: CourseCategory;
  onSelectCategory: (cat: CourseCategory) => void;
  searchQuery: string;
  onSelectCourse: (course: Course) => void;
  onBookDemo: (courseId: string) => void;
  langMode?: 'en' | 'hinglish';
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({
  courses,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSelectCourse,
  onBookDemo,
}) => {
  const categories: { id: CourseCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All 12 Programs', count: courses.length },
    { id: 'basic', label: 'Office & Basic', count: courses.filter(c => c.category === 'basic').length },
    { id: 'programming', label: 'Coding & Web', count: courses.filter(c => c.category === 'programming').length },
    { id: 'accounting', label: 'Tally & Accounting', count: courses.filter(c => c.category === 'accounting').length },
    { id: 'design', label: 'Design & Marketing', count: courses.filter(c => c.category === 'design').length },
    { id: 'advanced', label: 'AI & Cyber Tech', count: courses.filter(c => c.category === 'advanced').length },
  ];

  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5 text-[#5D4037]" />;
      case 'Calculator': return <Calculator className="w-5 h-5 text-[#5D4037]" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-[#5D4037]" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-[#5D4037]" />;
      case 'Palette': return <Palette className="w-5 h-5 text-[#5D4037]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#5D4037]" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-[#5D4037]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#5D4037]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-[#5D4037]" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-[#5D4037]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#5D4037]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#5D4037]" />;
      default: return <BookOpen className="w-5 h-5 text-[#5D4037]" />;
    }
  };

  // Filter by category and search
  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      course.title.toLowerCase().includes(q) ||
      course.description.toLowerCase().includes(q) ||
      course.shortDesc.toLowerCase().includes(q) ||
      course.softwareCovered.some(s => s.toLowerCase().includes(q)) ||
      course.jobRoles.some(r => r.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="courses" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Category Tabs */}
      <div className="flex items-center justify-between gap-4 mb-8 overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-[#5D4037] text-white shadow-md'
                  : 'bg-white text-[#262320] border border-[#E8DFC8] hover:bg-[#F3EDE2]'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                selectedCategory === cat.id ? 'bg-[#8D6E63] text-white' : 'bg-[#F3EDE2] text-[#5D4037]'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      {searchQuery && (
        <div className="mb-6 p-4 rounded-xl bg-white border border-[#E8DFC8] flex items-center justify-between text-xs sm:text-sm font-semibold text-[#262320]">
          <span>Search results for: <strong className="text-[#5D4037]">"{searchQuery}"</strong> ({filteredCourses.length} found)</span>
        </div>
      )}

      {/* Grid of Course Cards */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl border-2 border-[#E8DFC8] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div>
                {/* Header Badge & Level */}
                <div className="p-6 pb-4 border-b border-[#F3EDE2] bg-gradient-to-r from-white to-[#F9F6F0]">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2.5 rounded-xl bg-[#F3EDE2] border border-[#DBC9B5] group-hover:bg-[#EADDCB] transition-colors">
                        {getCourseIcon(course.iconName)}
                      </div>
                      <span className="text-[11px] font-bold text-[#8D6E63] uppercase tracking-wider bg-[#F9F6F0] px-2.5 py-1 rounded-md border border-[#E8DFC8]">
                        {course.level}
                      </span>
                    </div>
                    {course.popular && (
                      <span className="inline-flex items-center gap-1 bg-[#5D4037] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        <Sparkles className="w-3 h-3 text-amber-300" /> Top Rated
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-extrabold text-[#262320] group-hover:text-[#5D4037] transition-colors line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-xs text-gray-600 mt-2 line-clamp-2 font-normal leading-relaxed">
                    {course.shortDesc}
                  </p>
                </div>

                {/* Key Course Specs */}
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-[#F9F6F0] p-2.5 rounded-xl border border-[#E8DFC8]">
                      <div className="text-[10px] font-bold text-gray-400 uppercase">Duration</div>
                      <div className="font-extrabold text-[#262320] flex items-center gap-1 mt-0.5">
                        <Clock className="w-3.5 h-3.5 text-[#5D4037]" /> {course.duration}
                      </div>
                    </div>
                    <div className="bg-[#F9F6F0] p-2.5 rounded-xl border border-[#E8DFC8]">
                      <div className="text-[10px] font-bold text-gray-400 uppercase">Avg Package</div>
                      <div className="font-extrabold text-[#262320] flex items-center gap-1 mt-0.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#5D4037]" /> {course.avgSalary}
                      </div>
                    </div>
                  </div>

                  {/* Software Covered Tags */}
                  <div>
                    <div className="text-[11px] font-bold text-[#5D4037] uppercase tracking-wider mb-2">
                      Tools & Software Taught:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {course.softwareCovered.slice(0, 4).map((tool, idx) => (
                        <span
                          key={idx}
                          className="bg-[#F3EDE2] text-[#262320] text-[11px] font-semibold px-2.5 py-1 rounded-md border border-[#DBC9B5]"
                        >
                          {tool}
                        </span>
                      ))}
                      {course.softwareCovered.length > 4 && (
                        <span className="text-[10px] font-bold text-gray-500 self-center">
                          +{course.softwareCovered.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Price & Actions */}
              <div className="p-6 pt-0 border-t border-[#F3EDE2] mt-2">
                <div className="flex items-baseline justify-between mb-4 pt-4">
                  <div>
                    <span className="text-2xl font-black text-[#262320]">
                      ₹{course.fee.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-gray-400 line-through ml-2">
                      ₹{course.originalFee.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
                    0% EMI Available
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectCourse(course)}
                    className="w-full bg-[#F3EDE2] hover:bg-[#EADDCB] text-[#5D4037] font-bold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Syllabus</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onBookDemo(course.id)}
                    className="w-full bg-[#5D4037] hover:bg-[#4A3B32] text-white font-bold py-2.5 rounded-xl text-xs transition-colors shadow-sm flex items-center justify-center gap-1"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#EADDCB]" />
                    <span>Book Trial</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center max-w-md mx-auto border-2 border-dashed border-[#E8DFC8]">
          <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <h3 className="text-lg font-extrabold text-[#262320]">No courses found</h3>
          <p className="text-xs text-gray-500 mt-1">
            Try adjusting your category filter or search keywords.
          </p>
          <button
            onClick={() => onSelectCategory('all')}
            className="mt-4 px-4 py-2 bg-[#5D4037] text-white rounded-xl text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
};
