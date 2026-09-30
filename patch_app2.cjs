const fs = require('fs');
let data = fs.readFileSync('src/App.tsx', 'utf8');

// The file currently lacks AuthorGuidelinesFAQ in the home section.
data = data.replace(/<VenueLocation \/>\s*<WFDCelebrations \/>/, '<VenueLocation />\n            <AuthorGuidelinesFAQ />\n            <WFDCelebrations />');

fs.writeFileSync('src/App.tsx', data);
