const fs = require('fs');
let code = fs.readFileSync('src/components/WFDCelebrations.tsx', 'utf8');
const start = '{/* WFD Event Meta Header Banner */}';
const end = '{/* Interactive Event Selector Tabs */}';
const sIdx = code.indexOf(start);
const eIdx = code.indexOf(end);
if (sIdx > -1 && eIdx > -1) {
    code = code.substring(0, sIdx) + code.substring(eIdx);
    fs.writeFileSync('src/components/WFDCelebrations.tsx', code);
    console.log('Removed');
}
