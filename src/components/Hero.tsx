import React from 'react';
import { Search, Sparkles, Award, Laptop, Users, Briefcase, ArrowRight, ShieldCheck, CheckCircle2, PlayCircle } from 'lucide-react';
import { INSTITUTE_STATS } from '../data/institute';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onExploreClick: () => void;
  onOpenDemoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  setSearchQuery,
  onExploreClick,
  onOpenDemoModal,
}) => {
  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-5 h-5 text-[#5D4037]" />;
      case 'Laptop': return <Laptop className="w-5 h-5 text-[#5D4037]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#5D4037]" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#5D4037]" />;
      default: return <Award className="w-5 h-5 text-[#5D4037]" />;
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#F9F6F0] via-[#F3EDE2] to-[#F9F6F0] border-b border-[#E8DFC8]">
      {/* Decorative background grid subtle overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#EADDCB_1px,transparent_1px),linear-gradient(to_bottom,#EADDCB_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 lg:pt-16 lg:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column - Headline & Search */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EADDCB]/80 border border-[#A67B5B]/40 text-[#5D4037] text-xs font-bold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#8D6E63] animate-pulse" />
              <span>ISO 9001:2015 Certified IT & Computer Education Academy</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#262320] tracking-tight leading-[1.15]">
              Master Top <span className="text-[#5D4037]">Computer & IT Skills</span> for High-Paying Careers
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-[#262320]/80 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              From Basic MS Office & Tally Prime GST to Full Stack MERN Web Development, Python Data Analytics, and AI Prompt Engineering. Experience 100% practical learning with 1:1 air-conditioned computer lab allocation and career placement assistance.
            </p>

            {/* Search Box */}
            <div className="pt-1 max-w-xl mx-auto lg:mx-0">
              <div className="relative flex items-center bg-white rounded-2xl shadow-lg border border-[#A67B5B]/30 p-1.5 focus-within:ring-2 focus-within:ring-[#5D4037] transition-all">
                <Search className="w-5 h-5 text-[#5D4037] ml-3 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search courses e.g., Tally GST, Python, Web Dev, Graphic Design..."
                  className="w-full pl-3 pr-4 py-2.5 text-xs sm:text-sm text-[#262320] bg-transparent focus:outline-hidden font-medium placeholder:text-gray-400"
                />
                <button
                  onClick={onExploreClick}
                  className="bg-[#5D4037] hover:bg-[#4A3B32] text-white px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-colors shrink-0 shadow-sm flex items-center gap-1"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 hidden sm:inline" />
                </button>
              </div>

              {/* Quick Tags */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 mt-3 text-xs text-[#5D4037]">
                <span className="font-bold text-[#262320]">🔥 Popular Searches:</span>
                {['Tally Prime', 'Full Stack MERN', 'Python Data', 'Advanced Excel'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSearchQuery(tag);
                      onExploreClick();
                    }}
                    className="bg-[#F3EDE2] hover:bg-[#EADDCB] text-[#262320] px-2.5 py-1 rounded-md text-[11px] font-bold border border-[#DBC9B5] transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button
                onClick={onOpenDemoModal}
                className="bg-[#5D4037] hover:bg-[#4A3B32] text-white font-extrabold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 text-xs sm:text-sm"
              >
                <Sparkles className="w-4 h-4 text-[#EADDCB]" />
                <span>Book Free 2-Day Trial Class</span>
              </button>
              <button
                onClick={onExploreClick}
                className="bg-white hover:bg-[#F3EDE2] text-[#262320] font-bold px-5 py-3 rounded-xl border-2 border-[#DBC9B5] shadow-sm transition-all text-xs sm:text-sm flex items-center gap-2"
              >
                <span>Browse All 12 Courses</span>
                <ArrowRight className="w-4 h-4 text-[#5D4037]" />
              </button>
            </div>

          </div>

          {/* Right Column - Lab Showcase & Key Stats */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-[#5D4037]">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
                  alt="Aarohan IT Academy AC Computer Lab"
                  className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="inline-flex items-center gap-1.5 bg-[#5D4037] text-[#EADDCB] px-3 py-1 rounded-full text-xs font-bold mb-2 self-start border border-[#8D6E63]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>1 Student : 1 PC Guarantee</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white">State-of-the-Art AC Labs</h3>
                  <p className="text-xs text-gray-200 mt-1">
                    Equipped with high-speed fiber Wi-Fi, Core i5/i7 workstations, and dual-monitor setup for seamless coding & accounting.
                  </p>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -top-4 -right-4 bg-white p-3.5 rounded-2xl shadow-xl border-2 border-[#E8DFC8] flex items-center gap-3 animate-bounce hidden sm:flex" style={{ animationDuration: '3s' }}>
                <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center font-bold">
                  92%
                </div>
                <div>
                  <div className="text-xs font-black text-[#262320]">Placement Support</div>
                  <div className="text-[10px] font-bold text-gray-500">50+ Hiring Partners</div>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -bottom-5 -left-4 bg-white p-3.5 rounded-2xl shadow-xl border-2 border-[#E8DFC8] flex items-center gap-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  100%
                </div>
                <div>
                  <div className="text-xs font-black text-[#262320]">Practical Learning</div>
                  <div className="text-[10px] font-bold text-gray-500">Live Project Assignments</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Key Stats Ribbon */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-[#DBC9B5]">
          {INSTITUTE_STATS.map((stat, idx) => (
            <div key={idx} className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-[#E8DFC8] shadow-xs flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#F9F6F0] border border-[#DBC9B5] shrink-0">
                {getStatIcon(stat.icon)}
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#262320]">{stat.value}</div>
                <div className="text-xs font-bold text-[#5D4037]">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
