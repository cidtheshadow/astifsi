const fs = require('fs');
let regCode = fs.readFileSync('src/components/Registration.tsx', 'utf8');

// Replace everything between <ul ...> and </ul> in Registration.tsx
regCode = regCode.replace(/<ul[\s\S]*?<\/ul>/g, '');

fs.writeFileSync('src/components/Registration.tsx', regCode);
console.log('Removed ul tags');
