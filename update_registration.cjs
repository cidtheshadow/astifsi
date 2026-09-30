const fs = require('fs');

let regCode = fs.readFileSync('src/components/Registration.tsx', 'utf8');

// Update Card 1: Students & Scholars
regCode = regCode.replace(
  /<div className="mb-6">\s*<div className="flex items-baseline gap-1">\s*<span className="text-2xl font-bold text-\[\#580B1E\]">₹<\/span>\s*<span className="text-4xl font-extrabold text-\[\#580B1E\] font-heading tracking-tight">2,000<\/span>\s*<\/div>\s*<p className="text-xs text-stone-800 font-bold mt-1">\s*Early Bird Rate <span className="text-stone-500 font-normal">\(Regular: ₹2,500\)<\/span>\s*<\/p>\s*<\/div>/,
  `<div className="mb-6 flex flex-col gap-2">
              <div className="flex items-baseline gap-1">
                <span className="text-xs font-bold text-stone-500 w-16">Non-AFSTI:</span>
                <span className="text-xl font-bold text-[#580B1E]">₹</span>
                <span className="text-3xl font-extrabold text-[#580B1E] font-heading tracking-tight">750</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-xs font-bold text-[#E67E22] w-16">AFSTI:</span>
                <span className="text-xl font-bold text-[#E67E22]">₹</span>
                <span className="text-3xl font-extrabold text-[#E67E22] font-heading tracking-tight">500</span>
              </div>
            </div>`
);

// Update Card 2: AFSTI Members -> Change to something else or keep it but change to 'AFSTI Professionals'?
// Actually, let's change Card 2 to something else since AFSTI pricing is now in the same card, OR we keep Card 2.
// Let's rewrite the 4 cards completely using string replacement for the whole grid to make it bulletproof.
