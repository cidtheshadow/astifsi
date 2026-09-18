import React, { useState, useEffect } from 'react';
import { Menu, X, Send } from 'lucide-react';

interface HeaderProps {
  onOpenAbstractModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAbstractModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Focus Areas', href: '#themes' },
    { name: 'Important Dates', href: '#deadlines' },
    { name: 'Committees', href: '#committee' },
    { name: 'Registration', href: '#registration' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Venue & Location', href: '#venue' },
    { name: 'World Food Day 2026', href: '#wfd' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Announcement Bar in Maroon & Gold Accent */}
      <div className="bg-[#3A0512] text-[#FDFBF7] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-[#6B0F24]">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-medium">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse shrink-0" />
            <span className="truncate tracking-wide text-stone-200">
              AFSTI National Food Conference 2026 • Innovate Today, Nourish Tomorrow • SLIET Longowal Chapter
            </span>
          </div>
          <div className="hidden md:flex items-center gap-3 shrink-0 text-[11px]">
            <span className="text-[#E2B8C2] font-bold">Oct 15–16, 2026</span>
            <span className="text-[#6B0F24]">|</span>
            <span className="text-stone-200">SLIET, Longowal, Punjab</span>
          </div>
        </div>
      </div>

      {/* Main Navbar in Warm Beige */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E8DEC8] shadow-sm py-2.5' 
          : 'bg-[#FDFBF7]/90 backdrop-blur-sm py-3 border-b border-[#E8DEC8]/60'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logos & Brand */}
            <a href="#" className="flex items-center gap-3 shrink-0 group">
              <div className="flex items-center gap-1.5 shrink-0">
                <img src="/logos/sliet-logo.jpeg" alt="SLIET Logo" className="h-10 sm:h-11 w-auto rounded-lg border border-[#E8DEC8] bg-white p-0.5 object-contain shadow-2xs group-hover:scale-105 transition-transform shrink-0" />
                <img src="/logos/afsti-longowal-logo.jpeg" alt="AFSTI Longowal" className="h-10 sm:h-11 w-auto rounded-lg border border-[#E8DEC8] bg-white p-0.5 object-contain shadow-2xs group-hover:scale-105 transition-transform shrink-0" />
                <img src="/logos/afsti-mysuru-logo.jpeg" alt="AFSTI Mysuru" className="h-10 sm:h-11 w-auto rounded-lg border border-[#E8DEC8] bg-white p-0.5 object-contain shadow-2xs group-hover:scale-105 transition-transform shrink-0" />
              </div>
              <div className="hidden md:block shrink-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base text-[#580B1E] tracking-tight font-heading">AFSTINFC-2026</span>
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#F5EFE6] text-[#580B1E] border border-[#E8DEC8]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6B0F24] animate-pulse" />
                    Hybrid Mode
                  </span>
                </div>
                <p className="text-[11px] text-[#52373D] font-medium">SLIET Longowal &amp; AFST(I) Mysuru</p>
              </div>
            </a>

            {/* Navigation Links */}
            <nav className="hidden xl:flex items-center gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-semibold transition-colors whitespace-nowrap ${
                    link.name.includes('World Food Day')
                      ? 'text-[#6B0F24] font-bold bg-[#F5EFE6] px-3 py-1.5 rounded-lg border border-[#E8DEC8] hover:bg-[#580B1E] hover:text-white'
                      : 'text-[#2C070F] hover:text-[#6B0F24]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenAbstractModal}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#580B1E] hover:bg-[#6B0F24] text-xs font-bold text-white shadow-md hover:shadow-lg transition-all duration-200 uppercase tracking-wider border border-[#6B0F24]"
              >
                <span className="relative flex h-2 w-2 mr-0.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
                </span>
                <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Submit Abstract</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-[#2C070F] hover:text-[#580B1E] hover:bg-[#F5EFE6] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-[#FDFBF7]/95 border-b border-[#E8DEC8] backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-semibold text-[#2C070F] hover:text-[#580B1E] hover:bg-[#F5EFE6] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E8DEC8]">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAbstractModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-bold text-white bg-[#580B1E] shadow-md uppercase tracking-wider"
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
