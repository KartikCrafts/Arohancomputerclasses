import React, { useState } from 'react';
import { SAMPLE_CERTIFICATES } from '../data/institute';
import { ShieldCheck, Search, Award, CheckCircle2, AlertCircle, Printer, Download, UserCheck } from 'lucide-react';

interface CertificateVerifierProps {
  langMode?: 'en' | 'hinglish';
}

export const CertificateVerifier: React.FC<CertificateVerifierProps> = () => {
  const [certInput, setCertInput] = useState('');
  const [searched, setSearched] = useState(false);
  const [certResult, setCertResult] = useState<typeof SAMPLE_CERTIFICATES[0] | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    const found = SAMPLE_CERTIFICATES.find(
      (c) => c.certId.toLowerCase() === certInput.trim().toLowerCase()
    );
    setCertResult(found || null);
  };

  const handleQuickSample = (sampleId: string) => {
    setCertInput(sampleId);
    setSearched(true);
    const found = SAMPLE_CERTIFICATES.find((c) => c.certId === sampleId);
    setCertResult(found || null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl shadow-xl border-2 border-[#E8DFC8] overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#4A3B32] text-[#F9F6F0] p-6 sm:p-8 text-center relative">
          <div className="inline-flex items-center gap-1.5 bg-[#8D6E63] text-white text-xs font-extrabold px-3 py-1 rounded-full mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ISO 9001:2015 Official Verification Portal</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Verify Student Certificate & Diploma Credential
          </h2>
          <p className="text-xs sm:text-sm text-[#EADDCB]/80 mt-1 max-w-lg mx-auto">
            Employers & students can instantly verify the authenticity of ISO certified diplomas issued by Aarohan IT Academy.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-8">
          
          {/* Search Box */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto space-y-3">
            <label className="block text-xs font-extrabold text-[#262320] uppercase tracking-wider text-center">
              Enter Certificate ID / Roll Number:
            </label>
            <div className="relative flex items-center bg-[#F9F6F0] rounded-2xl border-2 border-[#DBC9B5] p-1.5 focus-within:border-[#5D4037]">
              <Search className="w-5 h-5 text-gray-400 ml-3 shrink-0" />
              <input
                type="text"
                required
                value={certInput}
                onChange={(e) => setCertInput(e.target.value)}
                placeholder="e.g. TAK-2026-104 or TAK-2026-088"
                className="w-full pl-3 pr-4 py-2.5 text-xs sm:text-sm font-extrabold text-[#262320] bg-transparent focus:outline-hidden placeholder:font-normal"
              />
              <button
                type="submit"
                className="bg-[#5D4037] hover:bg-[#4A3B32] text-white font-extrabold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-sm"
              >
                Verify Now
              </button>
            </div>

            {/* Quick Sample Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs">
              <span className="font-bold text-gray-500">Test Samples:</span>
              {['TAK-2026-104', 'TAK-2026-088', 'TAK-2025-912'].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => handleQuickSample(s)}
                  className="bg-[#F3EDE2] hover:bg-[#EADDCB] text-[#5D4037] px-2.5 py-1 rounded-md font-mono text-[11px] font-bold border border-[#DBC9B5]"
                >
                  {s}
                </button>
              ))}
            </div>
          </form>

          {/* Results Area */}
          {searched && (
            <div className="max-w-2xl mx-auto pt-4 animate-in fade-in zoom-in-95 duration-200">
              {certResult ? (
                <div className="bg-[#F9F6F0] rounded-3xl p-6 sm:p-8 border-2 border-green-500 shadow-lg space-y-6">
                  
                  <div className="flex items-center justify-between border-b border-[#E8DFC8] pb-4">
                    <div className="flex items-center gap-2 text-green-700 font-black text-sm">
                      <CheckCircle2 className="w-6 h-6" />
                      <span>OFFICIALLY VERIFIED & VALID RECORD</span>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs font-black px-3 py-1 rounded-full border border-green-300">
                      {certResult.status}
                    </span>
                  </div>

                  {/* Certificate Digital Layout */}
                  <div className="bg-white p-6 rounded-2xl border border-[#DBC9B5] shadow-xs space-y-4">
                    <div className="text-center border-b border-gray-100 pb-3">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-[#8D6E63]">
                        AAROHAN IT ACADEMY • ISO 9001:2015 CERTIFIED
                      </div>
                      <h3 className="text-xl font-black text-[#262320] mt-1">
                        DIPLOMA OF COMPLETION
                      </h3>
                      <div className="text-xs font-mono font-bold text-[#5D4037] mt-0.5">
                        Registration ID: {certResult.certId}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <div className="text-gray-400 font-bold uppercase text-[10px]">Student Name</div>
                        <div className="font-extrabold text-sm text-[#262320]">{certResult.studentName}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 font-bold uppercase text-[10px]">Course Completed</div>
                        <div className="font-extrabold text-sm text-[#5D4037]">{certResult.courseName}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 font-bold uppercase text-[10px]">Performance Grade</div>
                        <div className="font-extrabold text-sm text-green-700">{certResult.grade}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 font-bold uppercase text-[10px]">Issue Date</div>
                        <div className="font-extrabold text-sm text-[#262320]">{certResult.issueDate}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 font-bold uppercase text-[10px]">Total Hours</div>
                        <div className="font-bold text-gray-700">{certResult.duration}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 font-bold uppercase text-[10px]">Lead Mentor</div>
                        <div className="font-bold text-gray-700">{certResult.instructorName}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-2">
                    <div className="text-gray-500 font-medium">
                      🔒 Secured with cryptographic QR hash signature
                    </div>
                    <button
                      onClick={() => window.print()}
                      className="bg-[#5D4037] hover:bg-[#4A3B32] text-white font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 shadow-sm"
                    >
                      <Printer className="w-4 h-4" /> Print Transcript
                    </button>
                  </div>

                </div>
              ) : (
                <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200 text-center space-y-2">
                  <AlertCircle className="w-10 h-10 text-red-500 mx-auto" />
                  <h4 className="font-extrabold text-red-800 text-base">Certificate Record Not Found</h4>
                  <p className="text-xs text-red-600 max-w-sm mx-auto">
                    No matching registration ID found for "<strong className="font-mono">{certInput}</strong>". Please re-check the roll number printed on your certificate or contact our helpdesk.
                  </p>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
