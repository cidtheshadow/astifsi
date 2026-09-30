const fs = require('fs');
let code = fs.readFileSync('src/components/WFDCelebrations.tsx', 'utf8');
code = code.replace(/<a[\s\S]*?Register for Event[\s\S]*?<\/a>/, '');
fs.writeFileSync('src/components/WFDCelebrations.tsx', code);
