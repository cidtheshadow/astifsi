import React from 'react';
import { CreditCard, Building2, CheckCircle2, ExternalLink, FileText, QrCode } from 'lucide-react';
import { REGISTRATION_FEES, BANK_DETAILS, CONFERENCE_INFO } from '../data/conferenceData';

interface RegistrationProps {
  onOpenAbstractModal: () => void;
}

export const Registration: React.FC<RegistrationProps> = ({ onOpenAbstractModal }) => {
  return (
    <section id="registration" className="py-20 bg-[#FAF8F5] relative border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E86024] bg-orange-100 px-3.5 py-1 rounded-full border border-orange-300">
            Participation &amp; Registration
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-stone-950 mt-4 font-serif-editorial">
            Registration Fees &amp; <span className="italic text-amber-700">Payment Details</span>
          </h2>
          <p className="text-sm text-stone-600 mt-3">
            Register for AFSTINFC-2026 to participate in 3 technical oral sessions, 1 poster session, and plenary keynotes.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-emerald-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Grid: Registration Fees Table & Bank Payment Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Column (7 Cols): Registration Fees Table */}
          <div className="lg:col-span-7 editorial-card rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between h-full bg-white">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-stone-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-300 flex items-center justify-center text-[#E86024]">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 font-heading">Registration Fee Categories</h3>
                    <p className="text-xs text-stone-500">AFST(I) Member &amp; Non-Member Tier Rates</p>
                  </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  Official Rates
                </span>
              </div>

              {/* Fee Table */}
              <div className="space-y-2.5 mb-6">
                {REGISTRATION_FEES.map((fee, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-3.5 rounded-xl border transition-colors ${
                      fee.isDiscounted
                        ? 'bg-gradient-to-r from-amber-50/80 to-emerald-50/60 border-amber-300/80'
                        : 'bg-white border-stone-200'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 ${fee.isDiscounted ? 'text-amber-700' : 'text-stone-400'}`} />
                      <span className="text-xs font-bold text-stone-900">{fee.category}</span>
                    </div>

                    <div className="text-right">
                      <span className="text-sm font-extrabold text-[#E86024] font-serif-editorial">
                        {fee.amount}
                      </span>
                      {fee.isDiscounted && (
                        <span className="block text-[9px] uppercase font-bold text-emerald-700">
                          Member Discount
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 text-xs text-stone-500 flex items-center justify-between">
              <span>* Includes conference access, presentation certificate &amp; kit</span>
              <span className="font-semibold text-stone-800">All prices in INR (Rs.)</span>
            </div>
          </div>

          {/* Right Column (5 Cols): Bank Details & Payment QR Code */}
          <div className="lg:col-span-5 editorial-card rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between h-full bg-white">
            <div>
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-stone-200">
                <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900 font-heading">Bank Payment Details</h3>
                  <p className="text-xs text-stone-500">UPI QR / NEFT / RTGS Online Transfer</p>
                </div>
              </div>

              {/* Payment QR Code Box */}
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-center flex flex-col items-center mb-4">
                <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900 mb-2 font-heading">
                  <QrCode className="w-4 h-4 text-amber-700" />
                  <span>Scan QR Code for Direct Payment</span>
                </div>
                <img 
                  src="/payment-qr.png" 
                  alt="Official Payment QR Code for AFSTI Longowal" 
                  className="w-44 h-44 object-contain rounded-lg border border-stone-300 shadow-xs bg-white p-1"
                />
                <span className="text-[10px] text-stone-500 mt-2 font-medium">Scan using any UPI app (GPay, PhonePe, Paytm, BHIM)</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <span className="text-[10px] uppercase text-stone-500 font-bold block mb-0.5">Account Name</span>
                  <span className="text-sm font-bold text-stone-900 font-heading">{BANK_DETAILS.accountName}</span>
                </div>

                <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                  <span className="text-[10px] uppercase text-stone-500 font-bold block mb-0.5">Bank Name &amp; Branch</span>
                  <span className="text-xs font-bold text-stone-800">{BANK_DETAILS.bankName}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                    <span className="text-[10px] uppercase text-stone-500 font-bold block mb-0.5">Account Number</span>
                    <span className="text-xs font-extrabold text-[#E86024] font-mono tracking-wider">{BANK_DETAILS.accountNo}</span>
                  </div>

                  <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                    <span className="text-[10px] uppercase text-stone-500 font-bold block mb-0.5">IFSC Code</span>
                    <span className="text-xs font-extrabold text-stone-900 font-mono tracking-wider">{BANK_DETAILS.ifscCode}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-stone-200 space-y-2">
              <a
                href={CONFERENCE_INFO.abstractFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-b from-[#ff6b35] via-[#E86024] to-[#d64f18] shadow-[0_6px_20px_-3px_rgba(232,96,36,0.45)] border border-white/30 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-wider"
              >
                <span>Complete Online Registration Form</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenAbstractModal}
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300"
              >
                <FileText className="w-4 h-4" />
                <span>Abstract Guidelines</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
