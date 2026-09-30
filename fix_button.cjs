const fs = require('fs');
let code = fs.readFileSync('src/components/WFDCelebrations.tsx', 'utf8');

// Find the specific button HTML
const buttonStart = '<a\n                      href={CONFERENCE_INFO.abstractFormUrl}';
const buttonEnd = '<span>Register for Event</span>\n                      <ExternalLink className="w-3.5 h-3.5" />\n                    </a>';

const startIndex = code.indexOf(buttonStart);
const endIndex = code.indexOf(buttonEnd) + buttonEnd.length;

if (startIndex > -1 && endIndex > -1) {
    code = code.substring(0, startIndex) + code.substring(endIndex);
    fs.writeFileSync('src/components/WFDCelebrations.tsx', code);
    console.log('Removed specific button successfully');
} else {
    console.log('Could not find the exact button boundaries');
}

