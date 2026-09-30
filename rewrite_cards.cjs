const fs = require('fs');

let regCode = fs.readFileSync('src/components/Registration.tsx', 'utf8');

const startTag = '{/* 4-Column Grid: Registration Fees Cards */}';
const endTag = '{/* Payment Details Section */}';

const startIndex = regCode.indexOf(startTag);
const endIndex = regCode.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
  const newCards = `${startTag}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-16">
          
          {/* Card 1: Students & Scholars */}
          <div className="bg-white rounded-2xl p-8 border border-[#F5EFE6] shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="mb-6">
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-2">SCHOLAR RATE</span>
              <h3 className="text-xl font-bold text-[#580B1E] font-heading mb-1">Students & Scholars</h3>
              <p className="text-xs text-stone-500">Enrolled UG/PG/PhD Scholars</p>
            </div>
            
            <div className="mb-6 flex flex-col gap-3">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-stone-500 uppercase">Non-AFSTI Member</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-[#580B1E]">₹</span>
                  <span className="text-4xl font-extrabold text-[#580B1E] font-heading tracking-tight">750</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[#E67E22] uppercase">AFSTI Member</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-[#E67E22]">₹</span>
                  <span className="text-4xl font-extrabold text-[#E67E22] font-heading tracking-tight">500</span>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-[#F5EFE6] mb-6" />

            <ul className="space-y-4 mb-8 flex-grow text-xs text-stone-600">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#580B1E] shrink-0" />
                <span>Access to all technical sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#580B1E] shrink-0" />
                <span>Conference kit & participation certificate</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#580B1E] shrink-0" />
                <span>Working lunch & high tea</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Academicians / Faculty */}
          <div className="bg-white rounded-2xl p-8 border border-[#F5EFE6] shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
            <div className="mb-6">
              <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block mb-2">FACULTY TRACK</span>
              <h3 className="text-xl font-bold text-[#580B1E] font-heading mb-1">Academicians / Faculty</h3>
              <p className="text-xs text-stone-500">University faculty, scientists</p>
            </div>
            
            <div className="mb-6 flex flex-col gap-3">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-stone-500 uppercase">Non-AFSTI Member</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-[#580B1E]">₹</span>
                  <span className="text-4xl font-extrabold text-[#580B1E] font-heading tracking-tight">1,500</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[#E67E22] uppercase">AFSTI Member</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-[#E67E22]">₹</span>
                  <span className="text-4xl font-extrabold text-[#E67E22] font-heading tracking-tight">1,000</span>
                </div>
              </div>
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
          </div>

          {/* Card 3: Industry & Corporates */}
          <div className="bg-[#580B1E] rounded-2xl p-8 border border-[#6B0F24] shadow-md flex flex-col h-full hover:shadow-lg transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Building2 className="w-24 h-24 text-white" />
            </div>
            <div className="mb-6 relative z-10">
              <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider block mb-2">CORPORATE</span>
              <h3 className="text-xl font-bold text-white font-heading mb-1">Industry & Corporates</h3>
              <p className="text-xs text-stone-300">R&D Directors, QC Heads, Founders</p>
            </div>
            
            <div className="mb-6 relative z-10">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[#D4AF37] uppercase">Standard Rate</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-white">₹</span>
                  <span className="text-4xl font-extrabold text-white font-heading tracking-tight">1,500</span>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-[#6B0F24] mb-6 relative z-10" />

            <ul className="space-y-4 mb-8 flex-grow text-xs text-stone-200 relative z-10">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>B2B Industry-Academia Lounge</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Company logo in souvenir book</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Expo pavilion entry</span>
              </li>
            </ul>
          </div>

        </div>

        `;
  
  regCode = regCode.substring(0, startIndex) + newCards + regCode.substring(endIndex);
  fs.writeFileSync('src/components/Registration.tsx', regCode);
  console.log('Registration updated');
} else {
  console.log('Could not find tags');
}
