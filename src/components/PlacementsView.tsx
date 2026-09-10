import React from 'react';
import { TESTIMONIALS_DATA } from '../data/institute';
import { Briefcase, Building2, TrendingUp, Award, CheckCircle2, Sparkles, Star } from 'lucide-react';

interface PlacementsViewProps {
  onBookDemo: () => void;
}

export const PlacementsView: React.FC<PlacementsViewProps> = ({ onBookDemo }) => {
  const hiringPartners = [
    { name: 'TCS iON Network', type: 'IT & Software', location: 'Pan India' },
    { name: 'Wipro Technologies', type: 'Systems & Cloud', location: 'Pune / Hyd' },
    { name: 'Infosys BPM', type: 'Tech Services', location: 'Bengaluru' },
    { name: 'CA Mehta & Associates', type: 'Taxation & Audit', location: 'Regional CA Hub' },
    { name: 'TechVantage Solutions', type: 'MERN Web Dev', location: 'Indore / Pune' },
    { name: 'Creative Hive Studios', type: 'UI/UX & Design', location: 'Mumbai / Remote' },
    { name: 'Global Financial Accounting', type: 'Tally & GST', location: 'City Financial Hub' },
    { name: 'Infotech Data Analytics', type: 'Python & BI', location: 'Gurugram' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-[#4A3B32] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl border-2 border-[#8D6E63]">
        <div className="inline-flex items-center gap-1.5 bg-[#8D6E63] text-white text-xs font-extrabold px-3.5 py-1 rounded-full mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Dedicated Placement & Career Assistance Cell</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
          Over 12,500+ Careers Launched
        </h1>
        <p className="text-xs sm:text-sm text-[#EADDCB] mt-2 max-w-2xl mx-auto leading-relaxed">
          From non-IT backgrounds to top software developers and senior CA accountants — our dedicated placement team assists you with resume building, LinkedIn optimization, mock interviews, and guaranteed recruitment drives.
        </p>

        {/* Highlight Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-[#8D6E63]/60 text-left">
          <div className="bg-[#5D4037] p-4 rounded-2xl border border-[#8D6E63]">
            <div className="text-2xl font-black text-amber-300">85% - 92%</div>
            <div className="text-xs font-bold text-[#EADDCB]">Batch Placement Rate</div>
          </div>
          <div className="bg-[#5D4037] p-4 rounded-2xl border border-[#8D6E63]">
            <div className="text-2xl font-black text-amber-300">₹4.8 LPA</div>
            <div className="text-xs font-bold text-[#EADDCB]">Average Tech Package</div>
          </div>
          <div className="bg-[#5D4037] p-4 rounded-2xl border border-[#8D6E63]">
            <div className="text-2xl font-black text-amber-300">50+ Companies</div>
            <div className="text-xs font-bold text-[#EADDCB]">Active Hiring Network</div>
          </div>
          <div className="bg-[#5D4037] p-4 rounded-2xl border border-[#8D6E63]">
            <div className="text-2xl font-black text-amber-300">Unlimited</div>
            <div className="text-xs font-bold text-[#EADDCB]">Mock Interview Calls</div>
          </div>
        </div>
      </div>

      {/* Hiring Partners Grid */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold text-[#262320]">
            Our Hiring Partners & Corporate Recruiters
          </h2>
          <p className="text-xs text-gray-600 mt-1">
            Graduates from Aarohan IT Academy work at leading IT ITES firms, CA practices, and creative design agencies.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {hiringPartners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border-2 border-[#E8DFC8] shadow-xs hover:border-[#5D4037] transition-colors text-center space-y-1.5"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F9F6F0] text-[#5D4037] mx-auto flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-sm text-[#262320]">{partner.name}</h3>
              <div className="text-[10px] font-bold text-[#8D6E63] uppercase">{partner.type}</div>
              <div className="text-[10px] text-gray-400">📍 {partner.location}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials / Success Stories */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold text-[#262320]">
            Graduate Success Stories
          </h2>
          <p className="text-xs text-gray-600 mt-1">
            Real feedback from past students who transformed their skills into rewarding careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-3xl border-2 border-[#E8DFC8] shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed">
                  "{item.comment}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#F3EDE2]">
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#5D4037]"
                  />
                  <div>
                    <h4 className="font-extrabold text-sm text-[#262320]">{item.name}</h4>
                    <div className="text-xs font-bold text-[#8D6E63]">{item.role}</div>
                    <div className="text-[10px] text-gray-500">{item.company}</div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-extrabold text-green-700 bg-green-100 px-2.5 py-1 rounded-lg">
                    {item.salaryGrowth}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-[#F9F6F0] p-8 rounded-3xl border-2 border-[#E8DFC8] text-center max-w-2xl mx-auto space-y-4">
        <h3 className="text-xl font-extrabold text-[#262320]">Ready to start your IT career journey?</h3>
        <p className="text-xs text-gray-600">
          Book a free trial class and speak with our senior career counselor today.
        </p>
        <button
          onClick={onBookDemo}
          className="bg-[#5D4037] hover:bg-[#4A3B32] text-white font-extrabold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-[#EADDCB]" />
          <span>Book Free Trial Session</span>
        </button>
      </div>

    </div>
  );
};
