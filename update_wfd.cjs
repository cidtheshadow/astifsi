const fs = require('fs');

// 1. Update conferenceData.ts
let confData = fs.readFileSync('src/data/conferenceData.ts', 'utf8');

// Update images for each event
confData = confData.replace(
  /"Student Workshop on Food Innovation"[\s\S]*?image:\ "\/wfd\/unofficial-poster\.png"/,
  match => match.replace('"/wfd/unofficial-poster.png"', '"/wfd/food-art.png"')
);

confData = confData.replace(
  /"Innovative Food Art"[\s\S]*?image:\ "\/wfd\/unofficial-poster\.png"/,
  match => match.replace('"/wfd/unofficial-poster.png"', '"/wfd/food-art.png"')
);

confData = confData.replace(
  /"Creative Oral Presentation"[\s\S]*?image:\ "\/wfd\/unofficial-poster\.png"/,
  match => match.replace('"/wfd/unofficial-poster.png"', '"/wfd/creative-oral-presentation.png"')
);

confData = confData.replace(
  /"Technical Quiz Competition"[\s\S]*?image:\ "\/wfd\/scan-to-register\.png"/,
  match => match.replace('"/wfd/scan-to-register.png"', '"/wfd/quiz-competition.png"')
);

confData = confData.replace(
  /"On-the-Spot Poster-Making Competition"[\s\S]*?image:\ "\/wfd\/scan-to-register\.png"/,
  match => match.replace('"/wfd/scan-to-register.png"', '"/wfd/poster-competition.png"')
);

confData = confData.replace(
  /"Guess It Right"[\s\S]*?image:\ "\/wfd\/guess-it-right\.png"/,
  match => match.replace('"/wfd/guess-it-right.png"', '"/wfd/guess-it-right-official.png"')
);

fs.writeFileSync('src/data/conferenceData.ts', confData);

// 2. Update WFDCelebrations.tsx
let wfdData = fs.readFileSync('src/components/WFDCelebrations.tsx', 'utf8');

// Remove the top registration button (in the meta banner)
// Let's replace the grid-cols-5 with grid-cols-4 and remove the 5th column
wfdData = wfdData.replace('lg:grid-cols-5', 'lg:grid-cols-4');
wfdData = wfdData.replace(/<div className="flex items-center justify-center">\s*<a\s*href={CONFERENCE_INFO\.abstractFormUrl}[\s\S]*?<\/a>\s*<\/div>/, '');

// Remove the Official Event Flyers Showcase at Bottom entirely
// since the images are now mapped to individual events
wfdData = wfdData.replace(/{\/\* Official Event Flyers Showcase at Bottom \*\/}[\s\S]*?<\/section>/, '</section>');

fs.writeFileSync('src/components/WFDCelebrations.tsx', wfdData);

console.log('Updated both files successfully.');
