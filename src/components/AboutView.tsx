import React from 'react';
import { Award, ShieldCheck, CheckCircle2, GraduationCap, Users, History, Target, Sparkles } from 'lucide-react';

interface AboutViewProps {
  onBookDemo: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onBookDemo }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-[#4A3B32] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl border-2 border-[#8D6E63]">
        <div className="inline-flex items-center gap-1.5 bg-[#8D6E63] text-white text-xs font-extrabold px-3.5 py-1 rounded-full mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>Established 2011 • 15+ Years Legacy</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
          About Aarohan IT Academy
        </h1>
        <p className="text-xs sm:text-sm text-[#EADDCB] mt-2 max-w-2xl mx-auto leading-relaxed">
          Pioneering career-focused computer education with ISO 9001:2015 quality assurance, state-of-the-art AC computer labs, and 100% practical curriculum tailored for real-world job readiness.
        </p>
      </div>

      {/* Vision & Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="bg-white p-8 rounded-3xl border-2 border-[#E8DFC8] shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#F3EDE2] text-[#5D4037] flex items-center justify-center font-bold">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-extrabold text-[#262320]">Our Core Mission</h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
            To bridge the gap between academic education and industry requirements by providing top-tier, affordable computer training to students, graduates, and professionals. We ensure every student gains practical hands-on experience on modern hardware with 1:1 mentorship.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border-2 border-[#E8DFC8] shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#F3EDE2] text-[#5D4037] flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-extrabold text-[#262320]">ISO 9001:2015 Accreditation</h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
            Aarohan IT Academy adheres to globally audited quality management standards for curriculum design, practical evaluation, and student credentialing. Our diplomas carry official registration QR codes verifiable globally by employers.
          </p>
        </div>

      </div>

      {/* Why Choose Us Pillars */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-extrabold text-[#262320]">
            The 4 Pillars of Aarohan Excellence
          </h2>
          <p className="text-xs text-gray-600 mt-1">
            Why over 12,500 students chose us for their computer education journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-[#F9F6F0] p-6 rounded-2xl border border-[#E8DFC8] space-y-2">
            <div className="text-2xl font-black text-[#5D4037]">01</div>
            <h3 className="font-extrabold text-sm text-[#262320]">1 Student : 1 PC Guarantee</h3>
            <p className="text-xs text-gray-600">
              No sharing computer screens. Every student gets a dedicated AC lab workstation for the entire class duration.
            </p>
          </div>

          <div className="bg-[#F9F6F0] p-6 rounded-2xl border border-[#E8DFC8] space-y-2">
            <div className="text-2xl font-black text-[#5D4037]">02</div>
            <h3 className="font-extrabold text-sm text-[#262320]">CA & MNC Mentors</h3>
            <p className="text-xs text-gray-600">
              Learn accounting directly from Chartered Accountants and software coding from ex-Wipro senior engineers.
            </p>
          </div>

          <div className="bg-[#F9F6F0] p-6 rounded-2xl border border-[#E8DFC8] space-y-2">
            <div className="text-2xl font-black text-[#5D4037]">03</div>
            <h3 className="font-extrabold text-sm text-[#262320]">0% Interest Monthly EMI</h3>
            <p className="text-xs text-gray-600">
              Pay course fees in 2-4 easy monthly installments with zero interest and full fee transparency.
            </p>
          </div>

          <div className="bg-[#F9F6F0] p-6 rounded-2xl border border-[#E8DFC8] space-y-2">
            <div className="text-2xl font-black text-[#5D4037]">04</div>
            <h3 className="font-extrabold text-sm text-[#262320]">100% Placement Support</h3>
            <p className="text-xs text-gray-600">
              Dedicated career desk assisting with resume formatting, mock technical interviews, and partner firm referrals.
            </p>
          </div>

        </div>
      </div>

      {/* Founder Message */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#E8DFC8] shadow-md grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-4">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500"
            alt="Prof. Rajeshwar Awasthi - Founder"
            className="w-full h-72 object-cover rounded-2xl border-4 border-[#5D4037]"
          />
        </div>
        <div className="md:col-span-8 space-y-4">
          <div className="text-xs font-bold text-[#8D6E63] uppercase tracking-wider">
            Founder & Director's Message
          </div>
          <h3 className="text-2xl font-black text-[#262320]">
            "Quality Education is Not About Rote Learning — It is About Hands-on Mastery."
          </h3>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
            "When we founded Aarohan IT Academy, our goal was simple: to create a warm, welcoming, and high-tech environment where anyone — whether a high school graduate or a commerce student — could step in and gain high-demand practical skills. Today, seeing our alumni working in top software firms and accounting houses is our greatest pride."
          </p>
          <div>
            <div className="font-extrabold text-sm text-[#262320]">Prof. Rajeshwar Awasthi</div>
            <div className="text-xs text-[#8D6E63] font-bold">M.Tech (CS), Founder & Managing Director</div>
          </div>
        </div>
      </div>

    </div>
  );
};
