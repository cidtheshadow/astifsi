const fs = require('fs');

// 1. Move WFDCelebrations in App.tsx
let appCode = fs.readFileSync('src/App.tsx', 'utf8');

// We will just recreate the <main> section to be precise
const mainRegex = /<main>[\s\S]*?<\/main>/;

const newMain = `<main>
        <Hero onOpenAbstractModal={handleOpenAbstractModal} />
        <AboutConference />
        <Committee />
        <FocusAreas onOpenAbstractModal={handleOpenAbstractModal} />
        <Highlights />
        <AuthorGuidelinesFAQ />
        <ImportantDates onOpenAbstractModal={handleOpenAbstractModal} />
        <Registration onOpenAbstractModal={handleOpenAbstractModal} />
        <WFDCelebrations />
        <Sponsors />
        <VenueLocation />
      </main>`;

appCode = appCode.replace(mainRegex, newMain);
fs.writeFileSync('src/App.tsx', appCode);

// 2. Make FAQ take less space in AuthorGuidelinesFAQ.tsx
let faqCode = fs.readFileSync('src/components/AuthorGuidelinesFAQ.tsx', 'utf8');

// Increase max-width to allow a 2-column grid
faqCode = faqCode.replace('className="max-w-4xl mx-auto', 'className="max-w-7xl mx-auto');

// Change single column space-y-3 to a 2-column grid
faqCode = faqCode.replace(
  '<div className="space-y-3">',
  '<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">'
);

// Reduce padding inside the accordion button to make it more compact
faqCode = faqCode.replace('className="w-full px-6 py-4', 'className="w-full px-5 py-3');

fs.writeFileSync('src/components/AuthorGuidelinesFAQ.tsx', faqCode);

console.log('Layout tweaked.');
