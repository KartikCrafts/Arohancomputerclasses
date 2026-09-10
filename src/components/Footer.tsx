import React from 'react';
import { GraduationCap, Award, Phone, Mail, MapPin, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenDemoModal: () => void;
  langMode?: 'en' | 'hinglish';
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenDemoModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#262320] text-[#F9F6F0] border-t-4 border-[#8D6E63] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1 - Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#5D4037] text-white flex items-center justify-center font-bold border border-[#8D6E63]">
                <GraduationCap className="w-5 h-5 text-[#EADDCB]" />
              </div>
              <div>
                <h3 className="text-lg font-black tracking-tight text-white">
                  Aarohan <span className="text-[#EADDCB]">IT Academy</span>
                </h3>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  ISO 9001:2015 Certified Computer Education
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed pr-4">
              Empowering students, freshers, and working professionals with job-ready computer skills, practical AC lab practice, and 100% placement support across Software, Design, and Accounting sectors.
            </p>

            <div className="inline-flex items-center gap-2 bg-[#5D4037]/60 p-2.5 rounded-xl border border-[#8D6E63]/40 text-xs text-[#EADDCB]">
              <ShieldCheck className="w-4 h-4 shrink-0 text-green-400" />
              <span>ISO 9001:2015 Accredited Quality Education Center</span>
            </div>
          </div>

          {/* Col 2 - Quick Links */}
          <div className="space-y-3 text-xs">
            <h4 className="font-extrabold uppercase text-[#EADDCB] tracking-wider text-xs border-b border-[#5D4037] pb-2">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button onClick={() => { setActiveTab('courses'); scrollToTop(); }} className="hover:text-white transition-colors">
                  • Course Catalog (12 Programs)
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('fee-calc'); scrollToTop(); }} className="hover:text-white transition-colors">
                  • Fee & 0% EMI Calculator
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('finder'); scrollToTop(); }} className="hover:text-white transition-colors">
                  • AI Course Recommendation Quiz
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('verify'); scrollToTop(); }} className="hover:text-white transition-colors">
                  • Verify Student Diploma Online
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('placements'); scrollToTop(); }} className="hover:text-white transition-colors">
                  • Placement Cell & Hiring Partners
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 - Popular Programs */}
          <div className="space-y-3 text-xs">
            <h4 className="font-extrabold uppercase text-[#EADDCB] tracking-wider text-xs border-b border-[#5D4037] pb-2">
              Top Diplomas
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>Full Stack Web Development (MERN)</li>
              <li>Tally Prime 4.0 with GST Taxation</li>
              <li>Python Programming & Data Analytics</li>
              <li>Graphic Design & UI/UX Specialist</li>
              <li>Generative AI & Prompt Engineering</li>
            </ul>
          </div>

          {/* Col 4 - Contact & Location */}
          <div className="space-y-3 text-xs">
            <h4 className="font-extrabold uppercase text-[#EADDCB] tracking-wider text-xs border-b border-[#5D4037] pb-2">
              Admission Helpdesk
            </h4>
            <div className="space-y-2.5 text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#EADDCB] shrink-0 mt-0.5" />
                <span>2nd Floor, Aarohan Tower, Near MG Road Metro Station, Main City Center</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#EADDCB] shrink-0" />
                <span className="font-mono">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#EADDCB] shrink-0" />
                <span>admissions@aarohan-it.edu</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#5D4037] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © 2026 Aarohan IT Academy. All Rights Reserved. ISO 9001:2015 Registered.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#5D4037] text-[#EADDCB] hover:bg-[#8D6E63] hover:text-white transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
