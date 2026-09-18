import React from 'react';
import { CreditCard, Building2, CheckCircle2, ExternalLink, FileText, QrCode, ShieldCheck } from 'lucide-react';
import { REGISTRATION_FEES, BANK_DETAILS, CONFERENCE_INFO } from '../data/conferenceData';

interface RegistrationProps {
  onOpenAbstractModal: () => void;
}

export const Registration: React.FC<RegistrationProps> = ({ onOpenAbstractModal }) => {
  return (
    <section id="registration" className="py-20 bg-[#faf2ee] relative border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Stitch Style) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#002e1f] bg-[#D1FAE5] px-3.5 py-1 rounded-full border border-emerald-300">
            Participation &amp; Delegate Matrix
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#002e1f] mt-4 font-display-hero">
            Registration Fees &amp; <span className="italic text-[#0D9488]">Payment Details</span>
          </h2>
          <p className="text-sm text-stone-600 mt-3 leading-relaxed">
            Register for AFSTINFC-2026 to participate in 3 technical oral sessions, 1 poster session, plenary keynotes, and conference kit.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#E67E22] to-[#0D9488] mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Grid: Registration Fees Cards & Bank Payment Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Column (7 Cols): Registration Fee Tier Cards */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-stone-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] border border-amber-300 flex items-center justify-center text-[#E67E22]">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#002e1f] font-heading">Registration Fee Categories</h3>
                    <p className="text-xs text-stone-500">AFST(I) Member &amp; Non-Member Tier Rates</p>
                  </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#D1FAE5] text-[#0B4632] border border-emerald-300">
                  Official Rates
                </span>
              </div>

              {/* Fee Cards List */}
              <div className="space-y-3 mb-6">
                {REGISTRATION_FEES.map((fee, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                      fee.isDiscounted
                        ? 'bg-gradient-to-r from-[#FEF3C7]/60 to-[#D1FAE5]/60 border-amber-300'
                        : 'bg-[#fff8f5] border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className={`w-4 h-4 ${fee.isDiscounted ? 'text-[#0D9488]' : 'text-stone-400'}`} />
                      <div>
                        <span className="text-xs font-bold text-[#002e1f] block">{fee.category}</span>
                        {fee.isDiscounted && (
                          <span className="text-[10px] uppercase font-extrabold text-[#0D9488]">
                            Special Member Privilege
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-base font-extrabold text-[#E67E22] font-heading">
                        {fee.amount}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 text-xs text-stone-500 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0D9488]" />
                * Includes conference access, presentation certificate &amp; kit
              </span>
              <span className="font-bold text-[#002e1f]">All prices in INR (Rs.)</span>
            </div>
          </div>

          {/* Right Column (5 Cols): Bank Payment Details & QR Code */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-stone-200">
                <div className="w-10 h-10 rounded-xl bg-[#D1FAE5] border border-emerald-300 flex items-center justify-center text-[#0B4632]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#002e1f] font-heading">Bank Payment Details</h3>
                  <p className="text-xs text-stone-500">UPI QR / NEFT / RTGS Online Transfer</p>
                </div>
              </div>

              {/* Payment QR Code Box */}
              <div className="bg-[#fff8f5] p-4 rounded-xl border border-stone-200 text-center flex flex-col items-center mb-4">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#002e1f] mb-2 font-heading">
                  <QrCode className="w-4 h-4 text-[#E67E22]" />
                  <span>Scan QR Code for Direct Payment</span>
                </div>
                <img 
                  src="/payment-qr.png" 
                  alt="Official Payment QR Code for AFSTI Longowal" 
                  className="w-44 h-44 object-contain rounded-lg border border-stone-300 shadow-2xs bg-white p-1"
                />
                <span className="text-[10px] text-stone-500 mt-2 font-medium">Scan using any UPI app (GPay, PhonePe, Paytm, BHIM)</span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="bg-[#fff8f5] p-3 rounded-xl border border-stone-200">
                  <span className="text-[10px] uppercase text-stone-500 font-bold block mb-0.5">Account Name</span>
                  <span className="text-sm font-bold text-[#002e1f] font-heading">{BANK_DETAILS.accountName}</span>
                </div>

                <div className="bg-[#fff8f5] p-3 rounded-xl border border-stone-200">
                  <span className="text-[10px] uppercase text-stone-500 font-bold block mb-0.5">Bank Name &amp; Branch</span>
                  <span className="text-xs font-bold text-stone-800">{BANK_DETAILS.bankName}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#fff8f5] p-3 rounded-xl border border-stone-200">
                    <span className="text-[10px] uppercase text-stone-500 font-bold block mb-0.5">Account Number</span>
                    <span className="text-xs font-extrabold text-[#E67E22] font-mono tracking-wider">{BANK_DETAILS.accountNo}</span>
                  </div>

                  <div className="bg-[#fff8f5] p-3 rounded-xl border border-stone-200">
                    <span className="text-[10px] uppercase text-stone-500 font-bold block mb-0.5">IFSC Code</span>
                    <span className="text-xs font-extrabold text-[#002e1f] font-mono tracking-wider">{BANK_DETAILS.ifscCode}</span>
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
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-bold text-white bg-[#002e1f] hover:bg-[#0E5A40] shadow-md transition-all uppercase tracking-wider"
              >
                <span>Complete Online Registration Form</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenAbstractModal}
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold bg-[#f4ece8] hover:bg-[#86f2e4] text-[#002e1f] border border-stone-300 transition-colors"
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
