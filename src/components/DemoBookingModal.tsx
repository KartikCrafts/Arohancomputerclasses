import React, { useState } from 'react';
import { COURSES_DATA } from '../data/courses';
import { X, Sparkles, CheckCircle2, Phone, Calendar, User, Mail, GraduationCap } from 'lucide-react';

interface DemoBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourseId?: string;
  langMode?: 'en' | 'hinglish';
}

export const DemoBookingModal: React.FC<DemoBookingModalProps> = ({
  isOpen,
  onClose,
  preselectedCourseId,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [courseId, setCourseId] = useState(preselectedCourseId || COURSES_DATA[0].id);
  const [preferredBatch, setPreferredBatch] = useState('Morning Batch (8:00 - 10:00 AM)');
  const [qualification, setQualification] = useState('12th / College Student');
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    if (preselectedCourseId) {
      setCourseId(preselectedCourseId);
    }
  }, [preselectedCourseId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-[#E8DFC8] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#4A3B32] text-[#F9F6F0] p-6 text-center relative">
          <button
            onClick={onClose}
            aria-label="Close Modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-black/30 hover:bg-black/50 text-[#EADDCB] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 bg-[#8D6E63] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
            <span>🎉 Free 2-Day Practical Trial Class</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
            Book Your Free Demo Class Seat
          </h3>
          <p className="text-xs text-[#EADDCB]/80 mt-1">
            Experience our AC lab facilities and 1:1 teaching style with zero obligation.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-[#262320] uppercase tracking-wide mb-1 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-[#5D4037]" /> Your Full Name: *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Kartik Pandya"
                  className="w-full p-3 bg-[#F9F6F0] border-2 border-[#DBC9B5] rounded-xl text-sm font-bold text-[#262320] focus:border-[#5D4037] focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#262320] uppercase tracking-wide mb-1 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#5D4037]" /> WhatsApp Phone: *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765..."
                    className="w-full p-3 bg-[#F9F6F0] border-2 border-[#DBC9B5] rounded-xl text-sm font-bold text-[#262320] focus:border-[#5D4037] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#262320] uppercase tracking-wide mb-1 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-[#5D4037]" /> Email Address:
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="student@mail.com"
                    className="w-full p-3 bg-[#F9F6F0] border-2 border-[#DBC9B5] rounded-xl text-sm font-bold text-[#262320] focus:border-[#5D4037] focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#262320] uppercase tracking-wide mb-1 flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-[#5D4037]" /> Select Course Program: *
                </label>
                <select
                  value={courseId}
                  onChange={(e) => setCourseId(e.target.value)}
                  className="w-full p-3 bg-[#F9F6F0] border-2 border-[#DBC9B5] rounded-xl text-sm font-bold text-[#262320] focus:border-[#5D4037] focus:outline-hidden cursor-pointer"
                >
                  {COURSES_DATA.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title} ({c.level})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#262320] uppercase tracking-wide mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#5D4037]" /> Preferred Batch:
                  </label>
                  <select
                    value={preferredBatch}
                    onChange={(e) => setPreferredBatch(e.target.value)}
                    className="w-full p-3 bg-[#F9F6F0] border-2 border-[#DBC9B5] rounded-xl text-xs font-bold text-[#262320] focus:border-[#5D4037] focus:outline-hidden"
                  >
                    <option value="Morning (8:00 - 10:00 AM)">Morning (8:00 - 10:00 AM)</option>
                    <option value="Afternoon (2:00 - 4:00 PM)">Afternoon (2:00 - 4:00 PM)</option>
                    <option value="Evening (6:00 - 8:00 PM)">Evening (6:00 - 8:00 PM)</option>
                    <option value="Weekend Special (Sat-Sun)">Weekend Special (Sat-Sun)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#262320] uppercase tracking-wide mb-1">
                    Qualification:
                  </label>
                  <select
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                    className="w-full p-3 bg-[#F9F6F0] border-2 border-[#DBC9B5] rounded-xl text-xs font-bold text-[#262320] focus:border-[#5D4037] focus:outline-hidden"
                  >
                    <option value="School Student (10th/12th)">School Student (10th/12th)</option>
                    <option value="College Student (UG/PG)">College Student (UG/PG)</option>
                    <option value="Working Professional">Working Professional</option>
                    <option value="Job Seeker / Fresher">Job Seeker / Fresher</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#5D4037] hover:bg-[#4A3B32] text-white font-black py-3.5 px-6 rounded-xl shadow-lg transition-all text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5 text-[#EADDCB]" />
                  <span>Confirm Free Demo Seat</span>
                </button>
                <p className="text-[11px] text-center text-gray-500 mt-2">
                  🔒 We respect your privacy. No spam call policy guaranteed.
                </p>
              </div>
            </form>
          ) : (
            <div className="text-center space-y-4 py-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 mx-auto flex items-center justify-center border-2 border-green-300">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-[#262320]">
                Demo Seat Reserved Successfully!
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-[#5D4037]">{name}</strong>! Our counselor will call you on WhatsApp (<strong className="font-mono">{phone}</strong>) within 15 minutes to confirm your lab PC allotment for <strong className="text-[#5D4037]">{preferredBatch}</strong>.
              </p>

              <div className="bg-[#F9F6F0] p-4 rounded-2xl border border-[#E8DFC8] text-xs text-left space-y-1">
                <div className="font-bold text-[#5D4037]">📍 Campus Location:</div>
                <div>Aarohan IT Academy, 2nd Floor, Aarohan Tower, Near MG Road Metro Station, City Center.</div>
                <div className="text-gray-500 pt-1">📞 Admission Desk: +91 98765 43210</div>
              </div>

              <button
                onClick={handleReset}
                className="w-full bg-[#4A3B32] hover:bg-[#262320] text-white font-bold py-3 rounded-xl text-sm transition-colors"
              >
                Done / Close Window
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
