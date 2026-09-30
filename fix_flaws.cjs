const fs = require('fs');

// 1. Fix conferenceData.ts
let confData = fs.readFileSync('src/data/conferenceData.ts', 'utf8');
confData = confData.replace(/Mr\. Paramdeep Shingh Ghuman/g, 'Mr. Paramdeep Singh Ghuman');
confData = confData.replace(/role: "National Advisory Committee"/g, 'role: "Advisory Board"');
fs.writeFileSync('src/data/conferenceData.ts', confData);

// 2. Fix Header.tsx logos overlapping on mobile
let headerCode = fs.readFileSync('src/components/Header.tsx', 'utf8');

// Hide AFSTI logos on small screens to save space
headerCode = headerCode.replace(
  '<img src="/logos/afsti-longowal-logo.jpeg" alt="AFSTI Longowal" className="h-8 sm:h-9 w-auto object-contain" />',
  '<img src="/logos/afsti-longowal-logo.jpeg" alt="AFSTI Longowal" className="hidden sm:block h-9 w-auto object-contain" />'
);

headerCode = headerCode.replace(
  '<img src="/logos/afsti-mysuru-logo.jpeg" alt="AFSTI Mysuru" className="h-8 sm:h-9 w-auto object-contain" />',
  '<img src="/logos/afsti-mysuru-logo.jpeg" alt="AFSTI Mysuru" className="hidden sm:block h-9 w-auto object-contain" />'
);

fs.writeFileSync('src/components/Header.tsx', headerCode);

console.log('Fixed flaws.');
