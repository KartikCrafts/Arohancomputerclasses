import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, Sparkles, Building2 } from 'lucide-react';

interface ContactViewProps {
  onBookDemo: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onBookDemo }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-[#4A3B32] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl border-2 border-[#8D6E63]">
        <div className="inline-flex items-center gap-1.5 bg-[#8D6E63] text-white text-xs font-extrabold px-3.5 py-1 rounded-full mb-3">
          <Phone className="w-3.5 h-3.5" />
          <span>Admission Desk & Campus Inquiry</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
          Contact Aarohan IT Academy
        </h1>
        <p className="text-xs sm:text-sm text-[#EADDCB] mt-2 max-w-2xl mx-auto leading-relaxed">
          Have questions about course fees, batch timings, or lab facilities? Visit our campus or reach out via phone, email, or WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Contact Details & Campus Hours */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#E8DFC8] shadow-sm space-y-6">
            <h2 className="text-xl font-extrabold text-[#262320]">Campus Helpdesk Info</h2>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F9F6F0] border border-[#E8DFC8]">
                <MapPin className="w-5 h-5 text-[#5D4037] shrink-0 mt-0.5" />
                <div>
                  <div className="font-extrabold text-[#262320]">Campus Address</div>
                  <div className="text-gray-600 mt-0.5">
                    Aarohan IT Academy, 2nd Floor, Aarohan Tower, Near MG Road Metro Station, City Center.
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F9F6F0] border border-[#E8DFC8]">
                <Phone className="w-5 h-5 text-[#5D4037] shrink-0" />
                <div>
                  <div className="font-extrabold text-[#262320]">Phone / WhatsApp Line</div>
                  <div className="font-mono text-gray-600 font-bold mt-0.5">+91 98765 43210 / +91 98765 43211</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F9F6F0] border border-[#E8DFC8]">
                <Mail className="w-5 h-5 text-[#5D4037] shrink-0" />
                <div>
                  <div className="font-extrabold text-[#262320]">Email Address</div>
                  <div className="text-gray-600 mt-0.5">admissions@aarohan-it.edu</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F9F6F0] border border-[#E8DFC8]">
                <Clock className="w-5 h-5 text-[#5D4037] shrink-0 mt-0.5" />
                <div>
                  <div className="font-extrabold text-[#262320]">Visiting & Lab Hours</div>
                  <div className="text-gray-600 mt-0.5">Monday - Saturday: 7:00 AM to 8:30 PM</div>
                  <div className="text-gray-500 text-xs">Sunday: 9:00 AM to 2:00 PM (Special Workshops)</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Inquiry Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border-2 border-[#E8DFC8] shadow-sm">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-xl font-extrabold text-[#262320] mb-2">Send Direct Admission Message</h2>
              <p className="text-xs text-gray-500">
                Fill out this quick form and our counseling team will get back to you within 2 hours.
              </p>

              <div>
                <label className="block text-xs font-bold text-[#262320] uppercase mb-1">Your Full Name: *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ananya Sharma"
                  className="w-full p-3 bg-[#F9F6F0] border-2 border-[#DBC9B5] rounded-xl text-sm font-bold text-[#262320] focus:border-[#5D4037] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#262320] uppercase mb-1">Phone / WhatsApp Number: *</label>
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
                <label className="block text-xs font-bold text-[#262320] uppercase mb-1">Your Query / Message:</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask us about course fees, batch timings, demo classes..."
                  className="w-full p-3 bg-[#F9F6F0] border-2 border-[#DBC9B5] rounded-xl text-sm font-bold text-[#262320] focus:border-[#5D4037] focus:outline-hidden"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#5D4037] hover:bg-[#4A3B32] text-white font-extrabold py-3.5 rounded-xl shadow-md transition-all text-sm flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-[#EADDCB]" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          ) : (
            <div className="text-center space-y-4 py-8 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 mx-auto flex items-center justify-center border-2 border-green-300">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-[#262320]">Inquiry Sent Successfully!</h3>
              <p className="text-xs text-gray-600 max-w-sm mx-auto">
                Thank you, <strong className="text-[#5D4037]">{name}</strong>. Our counselors will call you shortly on <strong className="font-mono">{phone}</strong>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-[#4A3B32] text-white font-bold px-6 py-2.5 rounded-xl text-xs"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
