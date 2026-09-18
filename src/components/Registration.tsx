import React from 'react';
import { CreditCard, Building2, FileText, QrCode, Check } from 'lucide-react';
import { BANK_DETAILS, CONFERENCE_INFO } from '../data/conferenceData';

interface RegistrationProps {
  onOpenAbstractModal: () => void;
}

export const Registration: React.FC<RegistrationProps> = ({ onOpenAbstractModal }) => {
  return (
    <section id="registration" className="py-20 bg-[#FDFBF7] relative border-t border-[#F5EFE6]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CreditCard className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#580B1E]">
              TRANSPARENT DELEGATE CATEGORIZATION
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#580B1E] font-display-hero mb-4">
            Conference Registration & Fee Matrix
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Registration includes conference kit, certificate, Scopus-indexed proceedings, networking lunches, and gala dinner.
          </p>
        </div>

        {/* 4-Column Grid: Registration Fees Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16">
          
          {/* Card 1: Students & Scholars */}
          <div className="bg-white rounded-2xl p-8 border border-[#F5EFE6] shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="mb-6">
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-2">SCHOLAR RATE</span>
              <h3 className="text-xl font-bold text-[#580B1E] font-heading mb-1">Students & Scholars</h3>
              <p className="text-xs text-stone-500">Enrolled UG/PG/PhD Scholars</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-[#580B1E]">₹</span>
                <span className="text-4xl font-extrabold text-[#580B1E] font-heading tracking-tight">2,000</span>
              </div>
              <p className="text-xs text-stone-800 font-bold mt-1">
                Early Bird Rate <span className="text-stone-500 font-normal">(Regular: ₹2,500)</span>
              </p>
            </div>

            <div className="w-full h-px bg-[#F5EFE6] mb-6" />

            <ul className="space-y-4 mb-8 flex-grow text-xs text-stone-600">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#580B1E] shrink-0" />
                <span>Oral/Poster presentation slot</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#580B1E] shrink-0" />
                <span>Conference Kit & Certificate</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#580B1E] shrink-0" />
                <span>Access to all 8 technical tracks</span>
              </li>
            </ul>

            <a
              href={CONFERENCE_INFO.abstractFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center py-3 rounded-lg text-xs font-bold text-[#580B1E] bg-[#F5EFE6] hover:bg-[#eaddce] transition-colors mt-auto"
            >
              Register as Scholar
            </a>
          </div>

          {/* Card 2: AFSTI Members (MOST POPULAR) */}
          <div className="bg-[#580B1E] rounded-2xl p-8 border border-[#D4AF37] shadow-lg flex flex-col h-full relative transform lg:-translate-y-2">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-[#580B1E] px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap shadow-sm">
              Most Popular
            </div>
            
            <div className="mb-6 mt-2">
              <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider block mb-2">SPECIAL PRIVILEGE</span>
              <h3 className="text-xl font-bold text-white font-heading mb-1">AFSTI Members</h3>
              <p className="text-xs text-white/80">Active members of AFSTI HQ or any Chapter</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white">₹</span>
                <span className="text-4xl font-extrabold text-white font-heading tracking-tight">3,500</span>
              </div>
              <p className="text-xs text-[#D4AF37] font-bold mt-1">
                Early Bird Rate <span className="text-white/70 font-normal">(Regular: ₹4,200)</span>
              </p>
            </div>

            <div className="w-full h-px bg-white/10 mb-6" />

            <ul className="space-y-4 mb-8 flex-grow text-xs text-white/90">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Priority review for paper</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Proceedings Indexed Book copy</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Gala Dinner & Cultural Night</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>AFSTI Chapter Member Meet</span>
              </li>
            </ul>

            <a
              href={CONFERENCE_INFO.abstractFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center py-3 rounded-lg text-xs font-bold text-[#580B1E] bg-[#D4AF37] hover:bg-[#c4a030] transition-colors shadow-sm mt-auto"
            >
              Register as Member
            </a>
          </div>

          {/* Card 3: Academicians / Faculty */}
          <div className="bg-white rounded-2xl p-8 border border-[#F5EFE6] shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="mb-6">
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-2">FACULTY TRACK</span>
              <h3 className="text-xl font-bold text-[#580B1E] font-heading mb-1">Academicians / Faculty</h3>
              <p className="text-xs text-stone-500">University faculty, scientists from non-AFSTI</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-[#580B1E]">₹</span>
                <span className="text-4xl font-extrabold text-[#580B1E] font-heading tracking-tight">4,500</span>
              </div>
              <p className="text-xs text-stone-800 font-bold mt-1">
                Early Bird Rate <span className="text-stone-500 font-normal">(Regular: ₹5,500)</span>
              </p>
            </div>

            <div className="w-full h-px bg-[#F5EFE6] mb-6" />

            <ul className="space-y-4 mb-8 flex-grow text-xs text-stone-600">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#580B1E] shrink-0" />
                <span>Faculty research presentation</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#580B1E] shrink-0" />
                <span>Proceedings book & hard badge</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#580B1E] shrink-0" />
                <span>Session chair consideration</span>
              </li>
            </ul>

            <a
              href={CONFERENCE_INFO.abstractFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center py-3 rounded-lg text-xs font-bold text-[#580B1E] bg-[#F5EFE6] hover:bg-[#eaddce] transition-colors mt-auto"
            >
              Register as Faculty
            </a>
          </div>

          {/* Card 4: Industry & Corporates */}
          <div className="bg-white rounded-2xl p-8 border border-[#F5EFE6] shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="mb-6">
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-2">CORPORATE</span>
              <h3 className="text-xl font-bold text-[#580B1E] font-heading mb-1">Industry & Corporates</h3>
              <p className="text-xs text-stone-500">R&D Directors, QC Heads, Founders</p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-[#580B1E]">₹</span>
                <span className="text-4xl font-extrabold text-[#580B1E] font-heading tracking-tight">8,000</span>
              </div>
              <p className="text-xs text-stone-800 font-bold mt-1">
                Early Bird Rate <span className="text-stone-500 font-normal">(Regular: ₹10,000)</span>
              </p>
            </div>

            <div className="w-full h-px bg-[#F5EFE6] mb-6" />

            <ul className="space-y-4 mb-8 flex-grow text-xs text-stone-600">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#580B1E] shrink-0" />
                <span>B2B Industry-Academia Lounge</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#580B1E] shrink-0" />
                <span>Company logo in souvenir book</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#580B1E] shrink-0" />
                <span>Expo pavilion entry</span>
              </li>
            </ul>

            <a
              href={CONFERENCE_INFO.abstractFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center py-3 rounded-lg text-xs font-bold text-[#580B1E] bg-[#F5EFE6] hover:bg-[#eaddce] transition-colors mt-auto"
            >
              Register Industry Delegate
            </a>
          </div>

        </div>

        {/* Payment Details Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 border border-[#F5EFE6] shadow-sm flex flex-col md:flex-row gap-8">
          
          <div className="md:w-1/3 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#F5EFE6] pb-6 md:pb-0 md:pr-8">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#580B1E] mb-3 font-heading">
              <QrCode className="w-4 h-4 text-[#D4AF37]" />
              <span>Scan QR Code for Direct Payment</span>
            </div>
            <img 
              src="/payment-qr.png" 
              alt="Official Payment QR Code for AFSTI Longowal" 
              className="w-48 h-48 object-contain rounded-xl border border-[#F5EFE6] shadow-sm p-2 mb-3"
            />
            <span className="text-[10px] text-stone-500 font-medium text-center">Scan using any UPI app<br/>(GPay, PhonePe, Paytm, BHIM)</span>
          </div>

          <div className="md:w-2/3 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F5EFE6]">
              <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#F5EFE6] flex items-center justify-center text-[#580B1E]">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#580B1E] font-heading">Bank Payment Details</h3>
                <p className="text-xs text-stone-500">UPI QR / NEFT / RTGS Online Transfer</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-[#FAF6F0] p-4 rounded-xl border border-[#F5EFE6]">
                <span className="text-[10px] uppercase text-stone-500 font-bold block mb-1">Account Name</span>
                <span className="text-sm font-bold text-[#580B1E] font-heading">{BANK_DETAILS.accountName}</span>
              </div>

              <div className="bg-[#FAF6F0] p-4 rounded-xl border border-[#F5EFE6]">
                <span className="text-[10px] uppercase text-stone-500 font-bold block mb-1">Bank Name & Branch</span>
                <span className="text-xs font-bold text-stone-800">{BANK_DETAILS.bankName}</span>
              </div>

              <div className="bg-[#FAF6F0] p-4 rounded-xl border border-[#F5EFE6]">
                <span className="text-[10px] uppercase text-stone-500 font-bold block mb-1">Account Number</span>
                <span className="text-sm font-extrabold text-[#580B1E] font-mono tracking-wider">{BANK_DETAILS.accountNo}</span>
              </div>

              <div className="bg-[#FAF6F0] p-4 rounded-xl border border-[#F5EFE6]">
                <span className="text-[10px] uppercase text-stone-500 font-bold block mb-1">IFSC Code</span>
                <span className="text-sm font-extrabold text-[#D4AF37] font-mono tracking-wider">{BANK_DETAILS.ifscCode}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenAbstractModal}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-bold bg-[#FAF6F0] hover:bg-[#F5EFE6] text-[#580B1E] border border-[#F5EFE6] transition-colors"
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
