import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, Send } from 'lucide-react';

interface FooterProps {
  onOpenAbstractModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAbstractModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF8F5] border-t border-stone-200 text-stone-600 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Banner */}
        <div className="editorial-card rounded-2xl p-6 sm:p-8 border border-stone-200 mb-14 bg-gradient-to-r from-amber-50/60 via-emerald-50/30 to-amber-50/60 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
              World Food Day 2026 Flagship Event
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-950 font-serif-editorial mt-1">
              Join Us at SLIET Longowal, Punjab
            </h3>
            <p className="text-xs text-stone-600 mt-1 max-w-xl">
              Be a part of India's premier national food conference bringing together science, technology, and industry innovation.
            </p>
          </div>

          <button
            onClick={onOpenAbstractModal}
            className="whitespace-nowrap px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-b from-[#ff6b35] via-[#E86024] to-[#d64f18] shadow-[0_6px_20px_-3px_rgba(232,96,36,0.45)] border border-white/30 hover:scale-[1.03] active:scale-[0.97] transition-all uppercase tracking-wider flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Submit Abstract Now
          </button>
        </div>

        {/* 4-Column Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-stone-200">
          
          {/* Col 1: Conference Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 font-bold">
                🌾
              </div>
              <span className="font-bold text-base text-stone-900 font-heading">AFSTINFC-2026</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              National Food Conference 2026 (Hybrid Mode) themed "Innovate Today. Nourish Tomorrow", jointly organized by AFSTI Longowal Chapter &amp; Department of FET, SLIET Longowal, Punjab.
            </p>
            <div className="text-[11px] font-semibold text-amber-800 bg-amber-100 px-3 py-1.5 rounded-lg border border-amber-300 inline-block">
              15–16 October 2026 • Hybrid Mode
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-stone-900 mb-4 font-heading">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-amber-700 transition-colors">About Conference</a></li>
              <li><a href="#committee" className="hover:text-amber-700 transition-colors">Organizing Committee</a></li>
              <li><a href="#themes" className="hover:text-amber-700 transition-colors">10 Key Focus Areas</a></li>
              <li><a href="#highlights" className="hover:text-amber-700 transition-colors">Conference Highlights</a></li>
              <li><a href="#wfd" className="hover:text-amber-700 transition-colors">WFD 2026 Celebrations</a></li>
              <li><a href="#dates" className="hover:text-amber-700 transition-colors">Important Dates &amp; Deadlines</a></li>
              <li><a href="#registration" className="hover:text-amber-700 transition-colors">Registration &amp; Fees</a></li>
              <li><a href="#sponsors" className="hover:text-amber-700 transition-colors">Sponsors &amp; Partners</a></li>
              <li><a href="#venue" className="hover:text-amber-700 transition-colors">Venue &amp; Travel Matrix</a></li>
            </ul>
          </div>

          {/* Col 3: Organizers */}
          <div>
            <h4 className="text-sm font-bold text-stone-900 mb-4 font-heading">Organizing Bodies</h4>
            <ul className="space-y-2 text-xs text-stone-700">
              <li className="font-semibold text-amber-800">AFSTI Longowal Chapter</li>
              <li>Department of Food Engineering &amp; Technology</li>
              <li className="text-stone-600">Sant Longowal Institute of Engineering &amp; Technology (SLIET), Longowal</li>
              <li className="pt-2 text-stone-600 border-t border-stone-200">
                In association with <strong className="text-stone-900">AFST(I), Mysuru</strong>
              </li>
            </ul>
          </div>

          {/* Col 4: Secretariat Contact */}
          <div>
            <h4 className="text-sm font-bold text-stone-900 mb-4 font-heading">Conference Secretariat Contact</h4>
            <div className="space-y-2.5 text-xs text-stone-700">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>SLIET, Longowal, District Sangrur, Punjab - 148106, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-700 shrink-0" />
                <a href="mailto:afstinfc2026@sliet.ac.in" className="hover:underline">afstinfc2026@sliet.ac.in</a>
              </div>
              <div className="space-y-1 pt-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-700 shrink-0" />
                  <a href="tel:9815980334" className="hover:underline font-semibold">+91 98159-80334</a>
                </div>
                <div className="flex items-center gap-2 pl-6">
                  <a href="tel:9815982026" className="hover:underline font-semibold">+91 98159-82026</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 National Food Conference (AFSTINFC-2026). All Rights Reserved. SLIET Longowal &amp; AFST(I).</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-stone-600 hover:text-stone-950 border border-stone-300 transition-colors shadow-2xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
