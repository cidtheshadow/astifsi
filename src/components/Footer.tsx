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
    <footer className="bg-[#fff8f5] border-t border-stone-200 text-stone-600 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Banner (Stitch Style) */}
        <div className="bg-gradient-to-r from-[#002e1f] via-[#0E5A40] to-[#002e1f] text-white rounded-2xl p-6 sm:p-8 border border-emerald-900 mb-14 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#E67E22] bg-[#FEF3C7] px-3 py-1 rounded-full text-[#713700] inline-block mb-2">
              World Food Day 2026 Flagship Conclave
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display-hero">
              Join Us at SLIET Longowal, Punjab
            </h3>
            <p className="text-xs text-emerald-100 mt-1 max-w-xl leading-relaxed">
              Be a part of India's premier national food conference bringing together science, technology, and industry innovation.
            </p>
          </div>

          <button
            onClick={onOpenAbstractModal}
            className="whitespace-nowrap px-6 py-3.5 rounded-lg text-xs font-bold text-white bg-[#E67E22] hover:bg-[#F39C12] shadow-md transition-all uppercase tracking-wider flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Submit Abstract Now
          </button>
        </div>

        {/* 4-Column Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-stone-200">
          
          {/* Col 1: Conference Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#D1FAE5] flex items-center justify-center text-[#002e1f] font-bold text-sm">
                🌾
              </div>
              <span className="font-bold text-base text-[#002e1f] font-heading">AFSTINFC-2026</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              National Food Conference 2026 (Hybrid Mode) themed "Innovate Today. Nourish Tomorrow", jointly organized by AFSTI Longowal Chapter &amp; Department of FET, SLIET Longowal, Punjab.
            </p>
            <div className="text-[11px] font-bold text-[#002e1f] bg-[#D1FAE5] px-3 py-1.5 rounded-lg border border-emerald-300 inline-block">
              15–16 October 2026 • Hybrid Mode
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-[#002e1f] mb-4 font-heading">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-[#0D9488] transition-colors">About Conference</a></li>
              <li><a href="#themes" className="hover:text-[#0D9488] transition-colors">Scientific Focus Areas</a></li>
              <li><a href="#wfd" className="hover:text-[#0D9488] transition-colors">WFD 2026 Celebrations</a></li>
              <li><a href="#committee" className="hover:text-[#0D9488] transition-colors">Organizing Committee</a></li>
              <li><a href="#deadlines" className="hover:text-[#0D9488] transition-colors">Important Dates &amp; Schedule</a></li>
              <li><a href="#registration" className="hover:text-[#0D9488] transition-colors">Registration &amp; Fee Matrix</a></li>
              <li><a href="#sponsors" className="hover:text-[#0D9488] transition-colors">Sponsors &amp; Host Partners</a></li>
              <li><a href="#venue" className="hover:text-[#0D9488] transition-colors">Venue &amp; Travel Logistics</a></li>
            </ul>
          </div>

          {/* Col 3: Organizers */}
          <div>
            <h4 className="text-sm font-bold text-[#002e1f] mb-4 font-heading">Organizing Bodies</h4>
            <ul className="space-y-2 text-xs text-stone-700">
              <li className="font-bold text-[#002e1f]">AFSTI Longowal Chapter</li>
              <li>Department of Food Engineering &amp; Technology</li>
              <li className="text-stone-600">Sant Longowal Institute of Engineering &amp; Technology (SLIET), Longowal</li>
              <li className="pt-2 text-stone-600 border-t border-stone-200">
                In association with <strong className="text-[#002e1f]">AFST(I), Mysuru</strong>
              </li>
            </ul>
          </div>

          {/* Col 4: Secretariat Contact */}
          <div>
            <h4 className="text-sm font-bold text-[#002e1f] mb-4 font-heading">Conference Secretariat</h4>
            <div className="space-y-2.5 text-xs text-stone-700">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                <span>SLIET, Longowal, District Sangrur, Punjab - 148106, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0D9488] shrink-0" />
                <a href="mailto:afstinfc2026@sliet.ac.in" className="hover:underline font-semibold">afstinfc2026@sliet.ac.in</a>
              </div>
              <div className="space-y-1 pt-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <a href="tel:9815980334" className="hover:underline font-bold">+91 98159-80334</a>
                </div>
                <div className="flex items-center gap-2 pl-6">
                  <a href="tel:9815982026" className="hover:underline font-bold">+91 98159-82026</a>
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
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-stone-700 hover:text-[#002e1f] border border-stone-300 transition-colors shadow-2xs cursor-pointer font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
