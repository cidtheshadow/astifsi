import { useState } from 'react';
import { Header, type ActivePage } from './components/Header';
import { Hero } from './components/Hero';
import { AboutConference } from './components/AboutConference';
import { FocusAreas } from './components/FocusAreas';
import { Highlights } from './components/Highlights';
import { WFDCelebrations } from './components/WFDCelebrations';
import { ImportantDates } from './components/ImportantDates';
import { AbstractSubmissionModal } from './components/AbstractSubmissionModal';
import { Registration } from './components/Registration';
import { Sponsors } from './components/Sponsors';
import { VenueLocation } from './components/VenueLocation';
import { Committee } from './components/Committee';
import { DepartmentalCommittees } from './components/DepartmentalCommittees';
import { Footer } from './components/Footer';

export function App() {
  const [isAbstractModalOpen, setIsAbstractModalOpen] = useState(false);
  const [activePage, setActivePage] = useState<ActivePage>('home');

  const handleOpenAbstractModal = () => {
    setIsAbstractModalOpen(true);
  };

  const handleCloseAbstractModal = () => {
    setIsAbstractModalOpen(false);
  };

  const handleNavigatePage = (page: ActivePage, hash?: string) => {
    setActivePage(page);

    if (page === 'home') {
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2C070F] selection:bg-[#580B1E] selection:text-white">
      {/* Sticky Top Header */}
      <Header 
        onOpenAbstractModal={handleOpenAbstractModal} 
        activePage={activePage}
        onNavigatePage={handleNavigatePage}
      />

      {/* Main Content Area based on Active Page */}
      <main className="pt-24 sm:pt-28">
        {activePage === 'home' && (
          <>
            <Hero onOpenAbstractModal={handleOpenAbstractModal} />
            <AboutConference />
            <Committee onNavigateDepartmental={() => handleNavigatePage('departmental-committees')} />
            <FocusAreas onOpenAbstractModal={handleOpenAbstractModal} />
            <Highlights />
            <WFDCelebrations />
            <ImportantDates onOpenAbstractModal={handleOpenAbstractModal} />
            <Registration onOpenAbstractModal={handleOpenAbstractModal} />
            <Sponsors />
            <VenueLocation />
          </>
        )}

        {activePage === 'wfd' && (
          <WFDCelebrations 
            isStandalonePage={true} 
            onBackToHome={() => handleNavigatePage('home')} 
          />
        )}

        {activePage === 'sponsors' && (
          <Sponsors 
            isStandalonePage={true} 
            onBackToHome={() => handleNavigatePage('home')} 
          />
        )}

        {activePage === 'departmental-committees' && (
          <DepartmentalCommittees 
            isStandalonePage={true} 
            onBackToHome={() => handleNavigatePage('home')} 
          />
        )}
      </main>

      {/* Footer */}
      <Footer 
        onOpenAbstractModal={handleOpenAbstractModal} 
        onNavigatePage={handleNavigatePage}
      />

      {/* Interactive Abstract Submission & Word Counter Modal */}
      <AbstractSubmissionModal
        isOpen={isAbstractModalOpen}
        onClose={handleCloseAbstractModal}
      />
    </div>
  );
}

export default App;
