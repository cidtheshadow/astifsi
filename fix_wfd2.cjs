const fs = require('fs');
let wfdCode = fs.readFileSync('src/components/WFDCelebrations.tsx', 'utf8');
const startTag = '{/* WFD Event Meta Header Banner */}';
const endTag = '{/* Interactive Event Tabs Container */}';
const startIndex = wfdCode.indexOf(startTag);
const endIndex = wfdCode.indexOf(endTag);
if (startIndex !== -1 && endIndex !== -1) {
  wfdCode = wfdCode.substring(0, startIndex) + wfdCode.substring(endIndex);
}
fs.writeFileSync('src/components/WFDCelebrations.tsx', wfdCode);
