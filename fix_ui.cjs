const fs = require('fs');

// 1. Fix WFDCelebrations.tsx
let wfdCode = fs.readFileSync('src/components/WFDCelebrations.tsx', 'utf8');

// Remove the WFD Event Meta Header Banner
wfdCode = wfdCode.replace(
  /{[\s\S]*?\/\* WFD Event Meta Header Banner \*\/[\s\S]*?<div className="bg-\[\#FAF6F0\] rounded-2xl p-6 sm:p-8 mb-12 border border-\[\#E8DEC8\] shadow-sm">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/,
  ''
);

// Remove the "Register for World Food Day Events" button in the bottom section
wfdCode = wfdCode.replace(
  /<div className="text-center mb-6">[\s\S]*?<\/a>\s*<\/div>/,
  ''
);

fs.writeFileSync('src/components/WFDCelebrations.tsx', wfdCode);

// 2. Fix Header.tsx logos
let headerCode = fs.readFileSync('src/components/Header.tsx', 'utf8');
headerCode = headerCode.replace(/<img src="\/logos\/sliet-logo.jpeg" alt="SLIET Logo" className="h-8 sm:h-9 w-auto object-contain" \/>/, '<img src="/logos/sliet-logo.jpeg" alt="SLIET Logo" className="h-10 sm:h-12 w-auto object-contain" />');
headerCode = headerCode.replace(/<img src="\/logos\/afsti-longowal-logo.jpeg" alt="AFSTI Longowal" className="hidden sm:block h-9 w-auto object-contain" \/>/, '<img src="/logos/afsti-longowal-logo.jpeg" alt="AFSTI Longowal" className="h-10 sm:h-12 w-auto object-contain" />');
headerCode = headerCode.replace(/<img src="\/logos\/afsti-mysuru-logo.jpeg" alt="AFSTI Mysuru" className="hidden sm:block h-9 w-auto object-contain" \/>/, '<img src="/logos/afsti-mysuru-logo.jpeg" alt="AFSTI Mysuru" className="h-10 sm:h-12 w-auto object-contain" />');
fs.writeFileSync('src/components/Header.tsx', headerCode);

// 3. Fix Hero.tsx logos
let heroCode = fs.readFileSync('src/components/Hero.tsx', 'utf8');
heroCode = heroCode.replace(/h-9 sm:h-10/g, 'h-11 sm:h-14');
fs.writeFileSync('src/components/Hero.tsx', heroCode);

console.log('UI fixes applied.');
