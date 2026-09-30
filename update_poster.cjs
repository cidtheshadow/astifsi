const fs = require('fs');

// Update conferenceData.ts
let confData = fs.readFileSync('src/data/conferenceData.ts', 'utf8');

// The regex needs to carefully replace the image ONLY for Innovative Food Art
// Since I added the image property manually previously, let's just do a string replace if possible,
// but they might all look similar.
confData = confData.replace(
  /title: "Innovative Food Art"[\s\S]*?image: "\/wfd\/food-art\.png"/,
  match => match.replace('"/wfd/food-art.png"', '"/wfd/food-art-new.jpg"')
);

fs.writeFileSync('src/data/conferenceData.ts', confData);

// Update WFDCelebrations.tsx
let wfdData = fs.readFileSync('src/components/WFDCelebrations.tsx', 'utf8');

// Change image styling to show full poster
wfdData = wfdData.replace(
  /className="w-full h-52 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"/g,
  'className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"'
);

fs.writeFileSync('src/components/WFDCelebrations.tsx', wfdData);

console.log('Updated successfully');
