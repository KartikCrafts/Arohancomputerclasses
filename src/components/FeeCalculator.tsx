import React, { useState } from 'react';
import { Course } from '../types';
import { Calculator, CheckCircle2, Sparkles, CreditCard, Calendar, Award } from 'lucide-react';

interface FeeCalculatorProps {
  courses: Course[];
  onBookDemo: (courseId: string) => void;
  langMode?: 'en' | 'hinglish';
}

export const FeeCalculator: React.FC<FeeCalculatorProps> = ({
  courses,
  onBookDemo,
}) => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>(courses[0]?.id || '');
  const [installmentMonths, setInstallmentMonths] = useState<number>(3);
  const [applyEarlyBirdDiscount, setApplyEarlyBirdDiscount] = useState<boolean>(true);

  const selectedCourse = courses.find(c => c.id === selectedCourseId) || courses[0];

  const baseFee = selectedCourse ? selectedCourse.fee : 0;
  const earlyBirdSavings = applyEarlyBirdDiscount ? 500 : 0;
  const finalFee = Math.max(0, baseFee - earlyBirdSavings);
  const monthlyEmi = Math.round(finalFee / installmentMonths);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl shadow-xl border-2 border-[#E8DFC8] overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#4A3B32] text-[#F9F6F0] p-6 sm:p-8 text-center relative">
          <div className="inline-flex items-center gap-1.5 bg-[#8D6E63] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>0% Interest EMI & Scholarship Calculator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Tuition Fee & Monthly EMI Payment Estimator
          </h2>
          <p className="text-xs sm:text-sm text-[#EADDCB]/80 mt-1 max-w-lg mx-auto">
            Calculate your custom monthly installment schedule with transparent pricing and no hidden charges.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Controls */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Course Selector */}
            <div>
              <label className="block text-xs font-extrabold text-[#262320] uppercase tracking-wider mb-2">
                1. Select Desired Course Program:
              </label>
              <select
                value={selectedCourseId}
                onChange={(e) => setSelectedCourseId(e.target.value)}
                className="w-full p-3.5 bg-[#F9F6F0] border-2 border-[#DBC9B5] rounded-2xl text-xs sm:text-sm font-extrabold text-[#262320] focus:border-[#5D4037] focus:outline-hidden"
              >
                {courses.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title} — ₹{c.fee.toLocaleString('en-IN')} ({c.duration})
                  </option>
                ))}
              </select>
            </div>

            {/* Installments Options */}
            <div>
              <label className="block text-xs font-extrabold text-[#262320] uppercase tracking-wider mb-2">
                2. Select Installment Tenure:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((months) => (
                  <button
                    key={months}
                    onClick={() => setInstallmentMonths(months)}
                    className={`p-3 rounded-xl border-2 text-xs font-extrabold transition-all text-center ${
                      installmentMonths === months
                        ? 'bg-[#5D4037] text-white border-[#5D4037] shadow-sm'
                        : 'bg-[#F9F6F0] text-[#262320] border-[#E8DFC8] hover:bg-[#F3EDE2]'
                    }`}
                  >
                    {months === 1 ? 'Lump-sum (1 Payment)' : `${months} Months EMI`}
                  </button>
                ))}
              </div>
            </div>

            {/* Early Bird Scholarship Check */}
            <div className="bg-[#F9F6F0] p-4 rounded-2xl border border-[#E8DFC8] flex items-center justify-between cursor-pointer" onClick={() => setApplyEarlyBirdDiscount(!applyEarlyBirdDiscount)}>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={applyEarlyBirdDiscount}
                  onChange={(e) => setApplyEarlyBirdDiscount(e.target.checked)}
                  className="w-4 h-4 text-[#5D4037] rounded-sm focus:ring-0 cursor-pointer"
                />
                <div>
                  <div className="text-xs font-extrabold text-[#262320]">
                    Early Bird Admission Scholarship
                  </div>
                  <div className="text-[10px] text-gray-500">
                    Get flat ₹500 discount when booking demo before batch start
                  </div>
                </div>
              </div>
              <span className="text-xs font-black text-green-700 bg-green-100 px-2 py-1 rounded-md">
                -₹500
              </span>
            </div>

            <div className="space-y-2 text-xs text-gray-600 bg-white p-4 rounded-2xl border border-[#E8DFC8]">
              <div className="flex items-center gap-2 font-bold text-[#5D4037]">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>Zero Interest (0% Interest Rate)</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-[#5D4037]">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>No Processing Fee or Registration Surprises</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-[#5D4037]">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>Includes Study Material, AC Lab Access & Exam Certification</span>
              </div>
            </div>

          </div>

          {/* Fee Summary Card */}
          <div className="md:col-span-5 bg-[#F9F6F0] p-6 rounded-3xl border-2 border-[#E8DFC8] flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-extrabold text-[#8D6E63] uppercase tracking-wider mb-1">
                Payment Summary
              </div>
              <h3 className="text-lg font-black text-[#262320]">
                {selectedCourse.title}
              </h3>

              <div className="mt-6 space-y-3 text-xs border-t border-[#E8DFC8] pt-4">
                <div className="flex justify-between font-bold text-gray-600">
                  <span>Standard Course Fee:</span>
                  <span>₹{baseFee.toLocaleString('en-IN')}</span>
                </div>

                {applyEarlyBirdDiscount && (
                  <div className="flex justify-between font-bold text-green-700">
                    <span>Scholarship Discount:</span>
                    <span>-₹500</span>
                  </div>
                )}

                <div className="flex justify-between font-black text-base text-[#262320] border-t border-[#E8DFC8] pt-3">
                  <span>Net Tuition Fee:</span>
                  <span>₹{finalFee.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Monthly EMI Highlight */}
              <div className="mt-6 bg-[#5D4037] text-white p-4 rounded-2xl text-center space-y-1 shadow-md">
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#EADDCB]">
                  {installmentMonths === 1 ? 'Single Lump-sum Payment' : `Monthly Installment (${installmentMonths} Months)`}
                </div>
                <div className="text-3xl font-black">
                  ₹{monthlyEmi.toLocaleString('en-IN')} <span className="text-xs font-normal text-[#EADDCB]">{installmentMonths > 1 ? '/ month' : ''}</span>
                </div>
                <div className="text-[10px] text-green-300 font-bold">
                  0% Additional Charges
                </div>
              </div>
            </div>

            <button
              onClick={() => onBookDemo(selectedCourse.id)}
              className="w-full bg-[#4A3B32] hover:bg-[#262320] text-white font-extrabold py-3.5 px-4 rounded-xl shadow-md transition-all text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#EADDCB]" />
              <span>Lock Seat & Book Free Trial</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
