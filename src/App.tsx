import { useState } from 'react';
import { Header } from './components/Header';
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
import { Footer } from './components/Footer';
import { AuthorGuidelinesFAQ } from './components/AuthorGuidelinesFAQ';

export function App() {
  const [isAbstractModalOpen, setIsAbstractModalOpen] = useState(false);

  const handleOpenAbstractModal = () => {
    setIsAbstractModalOpen(true);
  };

  const handleCloseAbstractModal = () => {
    setIsAbstractModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 selection:bg-orange-500 selection:text-white">
      {/* Sticky Top Header */}
      <Header onOpenAbstractModal={handleOpenAbstractModal} />

      {/* Main Landing Sections */}
      <main>
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
      </main>

      {/* Footer */}
      <Footer onOpenAbstractModal={handleOpenAbstractModal} />

      {/* Interactive Abstract Submission & Word Counter Modal */}
      <AbstractSubmissionModal
        isOpen={isAbstractModalOpen}
        onClose={handleCloseAbstractModal}
      />
    </div>
  );
}

export default App;
