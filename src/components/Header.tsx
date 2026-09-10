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
    { name: 'Highlights', href: '#highlights' },
    { name: 'Dates', href: '#dates' },
    { name: 'Venue & Travel', href: '#venue' },
    { name: 'Committee', href: '#committee' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/80 shadow-sm py-3' 
        : 'bg-[#FAF8F5]/60 backdrop-blur-sm py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand (Matching reference logo style with hexagon/badge) */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-600 group-hover:scale-105 transition-transform shadow-sm">
              <span className="text-xl">🌾</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-stone-900 tracking-tight font-heading">NFC 2026</span>
                <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Hybrid
                </span>
              </div>
              <p className="text-[11px] text-stone-500 font-medium">SLIET Longowal &amp; AFST(I)</p>
            </div>
          </a>

          {/* Centered Navigation Links (Matching reference image header) */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-stone-600 hover:text-stone-950 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button (Matching "JOIN TODAY" orange button from image) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenAbstractModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold bg-[#E86024] hover:bg-[#d4521a] text-white shadow-md shadow-orange-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 tracking-wide uppercase"
            >
              <Send className="w-3.5 h-3.5" />
              Submit Abstract
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5]/95 border-b border-stone-200 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-stone-700 hover:text-stone-950 hover:bg-stone-200/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-stone-200">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAbstractModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold bg-[#E86024] hover:bg-[#d4521a] text-white transition-all shadow-md uppercase tracking-wider"
            >
              <Send className="w-4 h-4" />
              Submit Abstract
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
