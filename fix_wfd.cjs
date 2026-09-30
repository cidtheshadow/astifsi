const fs = require('fs');

let wfdCode = fs.readFileSync('src/components/WFDCelebrations.tsx', 'utf8');

const startTag = '{/* WFD Event Meta Header Banner */}';
const endTag = '{/* Interactive Event Tabs Container */}';
const startIndex = wfdCode.indexOf(startTag);
const endIndex = wfdCode.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
  wfdCode = wfdCode.substring(0, startIndex) + wfdCode.substring(endIndex);
}

const bottomStart = '<div className="text-center mb-6">';
const bottomEnd = '</div>\n\n          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">';
const bottomStartIndex = wfdCode.indexOf(bottomStart);
const bottomEndIndex = wfdCode.indexOf(bottomEnd);

if (bottomStartIndex !== -1 && bottomEndIndex !== -1) {
  wfdCode = wfdCode.substring(0, bottomStartIndex) + wfdCode.substring(bottomEndIndex);
}

fs.writeFileSync('src/components/WFDCelebrations.tsx', wfdCode);
console.log('Fixed WFD');
