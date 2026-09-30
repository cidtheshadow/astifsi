const fs = require('fs');
let data = fs.readFileSync('src/App.tsx', 'utf8');

const newHome = `        {activePage === 'home' && (
          <>
            <Hero onOpenAbstractModal={handleOpenAbstractModal} />
            <AboutConference />
            <Committee onNavigateDepartmental={() => handleNavigatePage('departmental-committees')} />
            <FocusAreas onOpenAbstractModal={handleOpenAbstractModal} />
            <Speakers />
            <Highlights />
            <ImportantDates onOpenAbstractModal={handleOpenAbstractModal} />
            <Registration onOpenAbstractModal={handleOpenAbstractModal} />
            <Sponsors />
            <VenueLocation />
            <AuthorGuidelinesFAQ />
            <WFDCelebrations />
          </>
        )}`;

// replace the home block
data = data.replace(/\{activePage === 'home' && \([\s\S]*?<\/>\n\s*\)\}/, newHome);

// remove <AuthorGuidelinesFAQ /> from above <Footer />
data = data.replace(/\s*<AuthorGuidelinesFAQ \/>/, '');

fs.writeFileSync('src/App.tsx', data);
