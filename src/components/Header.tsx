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
    { name: 'WFD 2026', href: '#wfd' },
    { name: 'Committees', href: '#committee' },
    { name: 'Important Dates', href: '#deadlines' },
    { name: 'Registration', href: '#registration' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Venue', href: '#venue' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Stitch Top Status Announcement Bar */}
      <div className="bg-[#002e1f] text-white py-1.5 px-4 sm:px-6 lg:px-8 border-b border-emerald-900/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-medium">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#E67E22] animate-pulse shrink-0" />
            <span className="truncate tracking-wide text-stone-200">
              AFSTI National Food Conference 2026 • Innovate Today, Nourish Tomorrow • SLIET Longowal Chapter
            </span>
          </div>
          <div className="hidden md:flex items-center gap-3 shrink-0 text-[11px]">
            <span className="text-emerald-200 font-bold">Oct 15–16, 2026</span>
            <span className="text-emerald-700">|</span>
            <span className="text-emerald-100">SLIET, Longowal, Punjab</span>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-stone-200/90 shadow-xs py-2.5' 
          : 'bg-[#fff8f5]/90 backdrop-blur-sm py-3 border-b border-stone-200/60'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logos & Brand */}
            <a href="#" className="flex items-center gap-3 shrink-0 group">
              <div className="flex items-center gap-1.5 shrink-0">
                <img src="/logos/sliet-logo.jpeg" alt="SLIET Logo" className="h-10 sm:h-11 w-auto rounded-lg border border-stone-200 bg-white p-0.5 object-contain shadow-2xs group-hover:scale-105 transition-transform shrink-0" />
                <img src="/logos/afsti-longowal-logo.jpeg" alt="AFSTI Longowal" className="h-10 sm:h-11 w-auto rounded-lg border border-stone-200 bg-white p-0.5 object-contain shadow-2xs group-hover:scale-105 transition-transform shrink-0" />
                <img src="/logos/afsti-mysuru-logo.jpeg" alt="AFSTI Mysuru" className="h-10 sm:h-11 w-auto rounded-lg border border-stone-200 bg-white p-0.5 object-contain shadow-2xs group-hover:scale-105 transition-transform shrink-0" />
              </div>
              <div className="hidden md:block shrink-0">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base text-[#002e1f] tracking-tight font-heading">AFSTINFC-2026</span>
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    Hybrid Mode
                  </span>
                </div>
                <p className="text-[11px] text-stone-500 font-medium">SLIET Longowal &amp; AFST(I) Mysuru</p>
              </div>
            </a>

            {/* Navigation Links */}
            <nav className="hidden xl:flex items-center gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-semibold text-stone-700 hover:text-[#0D9488] transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenAbstractModal}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#002e1f] hover:bg-[#0E5A40] text-xs font-bold text-white shadow-md hover:shadow-lg transition-all duration-200 uppercase tracking-wider"
              >
                <span className="relative flex h-2 w-2 mr-0.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E67E22] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E67E22]"></span>
                </span>
                <Send className="w-3.5 h-3.5" />
                <span>Submit Abstract</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white/95 border-b border-stone-200 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-semibold text-stone-700 hover:text-[#002e1f] hover:bg-emerald-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-200">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAbstractModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-bold text-white bg-[#002e1f] shadow-md uppercase tracking-wider"
            >
              <Send className="w-4 h-4" />
              Submit Abstract (Oct 4)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
