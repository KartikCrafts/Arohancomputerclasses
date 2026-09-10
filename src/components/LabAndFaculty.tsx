import React from 'react';
import { FACULTY_DATA } from '../data/institute';
import { Monitor, Wifi, Cpu, Users, Award, ShieldCheck, CheckCircle2, Sparkles, GraduationCap } from 'lucide-react';

interface LabAndFacultyProps {
  onBookDemo: () => void;
  langMode?: 'en' | 'hinglish';
}

export const LabAndFaculty: React.FC<LabAndFacultyProps> = ({
  onBookDemo,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Section 1: Lab Infrastructure */}
      <div className="bg-white rounded-3xl shadow-lg border-2 border-[#E8DFC8] overflow-hidden">
        <div className="bg-[#4A3B32] text-[#F9F6F0] p-6 sm:p-10 text-center relative">
          <div className="inline-flex items-center gap-1.5 bg-[#8D6E63] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
            <Monitor className="w-3.5 h-3.5" />
            <span>High-Tech Air Conditioned Infrastructure</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            1 Student : 1 PC Guaranteed Air-Conditioned Computer Labs
          </h2>
          <p className="text-xs sm:text-sm text-[#EADDCB]/80 mt-2 max-w-2xl mx-auto">
            Experience comfortable, distraction-free learning with individual high-performance workstations, high-speed fiber internet, and dedicated hardware troubleshooting setups.
          </p>
        </div>

        <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#F9F6F0] p-6 rounded-2xl border border-[#E8DFC8] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#5D4037] text-white flex items-center justify-center font-bold">
              <Cpu className="w-5 h-5 text-[#EADDCB]" />
            </div>
            <h3 className="font-extrabold text-base text-[#262320]">Core i5 / i7 Workstations</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Every PC is equipped with 16GB RAM, fast NVMe SSD storage, dual-monitor setup for coding, and latest licensed software suites.
            </p>
          </div>

          <div className="bg-[#F9F6F0] p-6 rounded-2xl border border-[#E8DFC8] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#5D4037] text-white flex items-center justify-center font-bold">
              <Wifi className="w-5 h-5 text-[#EADDCB]" />
            </div>
            <h3 className="font-extrabold text-base text-[#262320]">1 Gbps Dedicated Fiber Line</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              High-speed internet for seamless cloud deployments, GitHub repository sync, AI model querying, and live GST portal practice.
            </p>
          </div>

          <div className="bg-[#F9F6F0] p-6 rounded-2xl border border-[#E8DFC8] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#5D4037] text-white flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5 text-[#EADDCB]" />
            </div>
            <h3 className="font-extrabold text-base text-[#262320]">Power Backup & Safety</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              100% online UPS power backup ensures zero disruption to your practical coding or accounting sessions during power outages.
            </p>
          </div>

        </div>
      </div>

      {/* Section 2: Faculty Profiles */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-[#EADDCB] text-[#5D4037] text-xs font-extrabold px-3.5 py-1 rounded-full uppercase">
            <Users className="w-3.5 h-3.5" />
            <span>Senior Industry Mentors</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#262320]">
            Learn from Certified Experts & CA Practitioners
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Our faculty members bring decades of industry experience from software MNCs, CA firms, and design studios.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACULTY_DATA.map((fac) => (
            <div
              key={fac.id}
              className="bg-white rounded-3xl border-2 border-[#E8DFC8] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div className="relative">
                <img
                  src={fac.image}
                  alt={fac.name}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute top-3 right-3 bg-[#5D4037] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {fac.experience}
                </div>
              </div>

              <div className="p-5 space-y-3">
                <div>
                  <h3 className="font-extrabold text-base text-[#262320]">{fac.name}</h3>
                  <div className="text-xs font-bold text-[#8D6E63] mt-0.5">{fac.designation}</div>
                </div>

                <div className="text-xs text-gray-600 space-y-1 bg-[#F9F6F0] p-3 rounded-xl border border-[#E8DFC8]">
                  <div><strong className="text-[#262320]">Expertise:</strong> {fac.specialization}</div>
                  <div className="text-[11px] text-gray-500 font-medium">🎓 {fac.qualifications}</div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={onBookDemo}
                  className="w-full bg-[#5D4037] hover:bg-[#4A3B32] text-white font-bold py-2 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#EADDCB]" />
                  <span>Book Demo Session</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
