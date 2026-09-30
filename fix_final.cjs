const fs = require('fs');

// 1. Remove Showcase from WFDCelebrations.tsx
let wfdCode = fs.readFileSync('src/components/WFDCelebrations.tsx', 'utf8');
const showcaseStart = '{/* Official Event Flyers Showcase at Bottom */}';
const showcaseEnd = '</section>';
const startIdx = wfdCode.indexOf(showcaseStart);
const endIdx = wfdCode.lastIndexOf(showcaseEnd);
if (startIdx > -1 && endIdx > -1) {
  // We need to keep the </div> that closes max-w-7xl before section ends
  const ending = `      </div>\n    </section>`;
  wfdCode = wfdCode.substring(0, startIdx) + ending + wfdCode.substring(endIdx + showcaseEnd.length);
  fs.writeFileSync('src/components/WFDCelebrations.tsx', wfdCode);
  console.log('Removed Showcase');
}

// 2. Update conferenceData.ts with the new posters
let confData = fs.readFileSync('src/data/conferenceData.ts', 'utf8');
// Map event titles to new image paths
const wfdImageMap = {
  "Creative Oral Presentation": "/wfd/creative-oral.png",
  "Technical Quiz Competition": "/wfd/quiz.png",
  "On-the-Spot Poster-Making Competition": "/wfd/poster-comp.png",
  "Innovative Food Art": "/wfd/food-art.png",
  "Guess It Right": "/wfd/guess-it.png"
};

// We will do a generic replacement by finding the event blocks
Object.keys(wfdImageMap).forEach(title => {
  const imagePath = wfdImageMap[title];
  // Regex to find the object containing this title and its image field
  // It's a bit tricky, but since they are sequentially defined:
  const blockRegex = new RegExp(`(title:\\s*"${title}"[\\s\\S]*?image:\\s*")([\\w/.-]+)(")`);
  confData = confData.replace(blockRegex, `$1${imagePath}$3`);
});

fs.writeFileSync('src/data/conferenceData.ts', confData);
console.log('Updated WFD images in conferenceData.ts');

