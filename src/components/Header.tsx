import React, { useState, useEffect } from 'react';
import { Menu, X, Send, Sparkles } from 'lucide-react';

export type ActivePage = 'home' | 'wfd' | 'sponsors' | 'departmental-committees';

interface HeaderProps {
  onOpenAbstractModal: () => void;
  activePage?: ActivePage;
  onNavigatePage?: (page: ActivePage, hash?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenAbstractModal, 
  activePage = 'home', 
  onNavigatePage 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; page: ActivePage; hash?: string }[] = [
    { name: 'About', page: 'home', hash: '#about' },
    { name: 'Focus Areas', page: 'home', hash: '#themes' },
    { name: 'Important Dates', page: 'home', hash: '#deadlines' },
    { name: 'Committees', page: 'home', hash: '#committee' },
    { name: 'Local Committees', page: 'departmental-committees' },
    { name: 'Registration', page: 'home', hash: '#registration' },
    { name: 'Sponsors', page: 'sponsors' },
    { name: 'Venue & Location', page: 'home', hash: '#venue' },
    { name: 'World Food Day 2026', page: 'wfd' },
  ];

  const handleLinkClick = (page: ActivePage, hash?: string) => {
    setIsMobileMenuOpen(false);
    if (onNavigatePage) {
      onNavigatePage(page, hash);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-md">
      {/* 1. Main Luxury Header Top Tier (TATA CLiQ Luxury Inspired) */}
      <div className={`transition-all duration-300 bg-[#2B050E] text-[#FDFBF7] border-b border-[#580B1E] ${
        isScrolled ? 'py-2' : 'py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Top Left: Logos & Luxury Pill Badges */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => handleLinkClick('home')}
                className="flex items-center gap-2 group cursor-pointer text-left shrink-0"
              >
                <div className="flex items-center gap-1 shrink-0 bg-white/90 p-1 rounded-lg border border-[#D4AF37]/30 shadow-2xs group-hover:scale-105 transition-transform">
                  <img src="/logos/sliet-logo.jpeg" alt="SLIET Logo" className="h-8 sm:h-9 w-auto object-contain" />
                  <img src="/logos/afsti-longowal-logo.jpeg" alt="AFSTI Longowal" className="h-8 sm:h-9 w-auto object-contain" />
                  <img src="/logos/afsti-mysuru-logo.jpeg" alt="AFSTI Mysuru" className="h-8 sm:h-9 w-auto object-contain" />
                </div>
              </button>

              <div className="hidden lg:flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#580B1E] border border-[#D4AF37]/40 text-[10px] font-bold tracking-wider text-[#D4AF37] uppercase">
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                  AFST(I) Mysuru Sponsored
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 border border-[#580B1E] text-[10px] font-semibold text-stone-300 uppercase tracking-wide">
                  SLIET Longowal
                </span>
              </div>
            </div>

            {/* Top Center: Luxury Main Title & Branding */}
            <button 
              onClick={() => handleLinkClick('home')}
              className="text-center group cursor-pointer"
            >
              <div className="flex items-center justify-center gap-1.5">
                <span className="text-xs sm:text-sm font-light text-[#D4AF37] tracking-[0.25em] uppercase font-serif-editorial">
                  AFSTI
                </span>
                <span className="text-base sm:text-xl font-extrabold text-white tracking-widest font-heading">
                  NATIONAL FOOD CONFERENCE
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#E67E22] tracking-wider font-heading">
                  2026
                </span>
              </div>
              <p className="text-[10px] text-stone-300 tracking-widest uppercase font-sans hidden sm:block mt-0.5">
                Innovate Today • Nourish Tomorrow • October 15–16, 2026
              </p>
            </button>

            {/* Top Right: CTA & Mobile Menu Button */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenAbstractModal}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#580B1E] hover:bg-[#6B0F24] text-xs font-bold text-white shadow-md hover:shadow-lg transition-all duration-200 uppercase tracking-wider border border-[#D4AF37]/50 cursor-pointer"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
                </span>
                <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="hidden md:inline">Submit Abstract</span>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 rounded-lg text-stone-200 hover:text-white hover:bg-[#580B1E] transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Luxury Bottom Navigation Bar (Centered inline list with dividers like TATA CLiQ Luxury) */}
      <div className="hidden xl:block bg-[#1B0208] text-stone-200 border-b border-[#3A0512] py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center flex-wrap gap-x-2 gap-y-1 text-xs">
            {navLinks.map((link, idx) => {
              const isWFD = link.name.includes('World Food Day');
              const isCurrent = activePage === link.page && (link.page !== 'home' || activePage === 'home');
              
              return (
                <React.Fragment key={link.name}>
                  {idx > 0 && <span className="text-stone-600 font-light select-none px-1">|</span>}
                  <button
                    onClick={() => handleLinkClick(link.page, link.hash)}
                    className={`transition-all duration-200 cursor-pointer py-1 px-2 rounded font-medium tracking-wide uppercase text-[11px] ${
                      isWFD
                        ? 'text-[#E67E22] font-bold hover:text-white hover:bg-[#580B1E] border border-[#E67E22]/40'
                        : isCurrent && link.page !== 'home'
                        ? 'text-[#D4AF37] font-bold underline underline-offset-4 decoration-[#D4AF37]'
                        : 'text-stone-300 hover:text-white hover:bg-[#3A0512]'
                    }`}
                  >
                    {link.name}
                  </button>
                </React.Fragment>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-[#2B050E]/98 border-b border-[#580B1E] backdrop-blur-xl px-4 pt-4 pb-6 space-y-3 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.page, link.hash)}
                className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  link.name.includes('World Food Day')
                    ? 'text-[#E67E22] font-bold bg-[#580B1E]/60 border border-[#E67E22]/30'
                    : 'text-stone-200 hover:text-white hover:bg-[#580B1E]'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#580B1E]">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAbstractModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-bold text-white bg-[#580B1E] hover:bg-[#6B0F24] border border-[#D4AF37]/50 shadow-md uppercase tracking-wider cursor-pointer"
            >
              <Send className="w-4 h-4 text-[#D4AF37]" />
              Submit Abstract (Oct 4)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
