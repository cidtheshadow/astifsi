import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, Send } from 'lucide-react';

interface FooterProps {
  onOpenAbstractModal: () => void;
  onNavigatePage?: (page: 'home' | 'wfd' | 'sponsors' | 'departmental-committees', hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAbstractModal, onNavigatePage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (page: 'home' | 'wfd' | 'sponsors' | 'departmental-committees', hash?: string) => {
    if (onNavigatePage) {
      onNavigatePage(page, hash);
    }
  };

  return (
    <footer className="bg-[#FAF6F0] border-t border-[#E8DEC8] text-[#52373D] pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Banner */}
        <div className="bg-[#580B1E] text-white rounded-2xl p-6 sm:p-8 border border-[#6B0F24] mb-14 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] bg-[#3A0512] px-3 py-1 rounded-full border border-[#6B0F24] inline-block mb-2">
              World Food Day 2026 Flagship Conclave
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-editorial">
              Join Us at SLIET Longowal, Punjab
            </h3>
            <p className="text-xs text-stone-200 mt-1 max-w-xl leading-relaxed">
              Be a part of India's premier national food conference bringing together science, technology, and industry innovation.
            </p>
          </div>

          <button
            onClick={onOpenAbstractModal}
            className="whitespace-nowrap px-6 py-3.5 rounded-lg text-xs font-bold text-white bg-[#E67E22] hover:bg-[#D35400] shadow-md transition-all uppercase tracking-wider flex items-center gap-2 border border-[#E67E22]"
          >
            <Send className="w-4 h-4 text-[#D4AF37]" />
            Submit Abstract Now
          </button>
        </div>

        {/* 4-Column Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-[#E8DEC8]">
          
          {/* Col 1: Conference Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/logos/sliet-logo.jpeg" alt="SLIET Logo" className="h-8 w-auto rounded border border-[#E8DEC8] bg-white p-0.5" />
              <img src="/logos/afsti-longowal-logo.jpeg" alt="AFSTI Longowal" className="h-8 w-auto rounded border border-[#E8DEC8] bg-white p-0.5" />
              <span className="font-bold text-base text-[#580B1E] font-heading ml-1">AFSTINFC-2026</span>
            </div>
            <p className="text-xs text-[#52373D] leading-relaxed mb-4">
              National Food Conference 2026 (Hybrid Mode) themed "Innovate Today. Nourish Tomorrow", jointly organized by AFSTI Longowal Chapter &amp; Department of FET, SLIET Longowal, Punjab.
            </p>
            <div className="text-[11px] font-bold text-[#580B1E] bg-[#F5EFE6] px-3 py-1.5 rounded-lg border border-[#E8DEC8] inline-block">
              15–16 October 2026 • Hybrid Mode
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-[#580B1E] mb-4 font-heading uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><button onClick={() => handleNavClick('home', '#about')} className="hover:text-[#580B1E] hover:font-bold transition-colors cursor-pointer">About Conference</button></li>
              <li><button onClick={() => handleNavClick('home', '#themes')} className="hover:text-[#580B1E] hover:font-bold transition-colors cursor-pointer">Scientific Focus Areas</button></li>
              <li><button onClick={() => handleNavClick('wfd')} className="text-[#6B0F24] font-bold hover:underline cursor-pointer">World Food Day 2026 Page</button></li>
              <li><button onClick={() => handleNavClick('home', '#committee')} className="hover:text-[#580B1E] hover:font-bold transition-colors cursor-pointer">Organizing Committee</button></li>
              <li><button onClick={() => handleNavClick('departmental-committees')} className="text-[#580B1E] font-bold hover:underline cursor-pointer">Local Departmental Committees (14)</button></li>
              <li><button onClick={() => handleNavClick('home', '#deadlines')} className="hover:text-[#580B1E] hover:font-bold transition-colors cursor-pointer">Important Dates &amp; Schedule</button></li>
              <li><button onClick={() => handleNavClick('home', '#registration')} className="hover:text-[#580B1E] hover:font-bold transition-colors cursor-pointer">Registration &amp; Fee Matrix</button></li>
              <li><button onClick={() => handleNavClick('sponsors')} className="text-[#580B1E] font-bold hover:underline cursor-pointer">Sponsors &amp; Partners Page</button></li>
              <li><button onClick={() => handleNavClick('home', '#venue')} className="hover:text-[#580B1E] hover:font-bold transition-colors cursor-pointer">Venue &amp; Travel Logistics</button></li>
            </ul>
          </div>

          {/* Col 3: Organizers */}
          <div>
            <h4 className="text-sm font-bold text-[#580B1E] mb-4 font-heading uppercase tracking-wider">Organizing Bodies</h4>
            <ul className="space-y-2 text-xs text-[#52373D]">
              <li className="font-bold text-[#580B1E]">AFSTI Longowal Chapter</li>
              <li>Department of Food Engineering &amp; Technology</li>
              <li>Sant Longowal Institute of Engineering &amp; Technology (SLIET), Longowal</li>
              <li className="pt-2 border-t border-[#E8DEC8]">
                In association with <strong className="text-[#580B1E]">AFST(I), Mysuru</strong>
              </li>
            </ul>
          </div>

          {/* Col 4: Secretariat Contact */}
          <div>
            <h4 className="text-sm font-bold text-[#580B1E] mb-4 font-heading uppercase tracking-wider">Conference Secretariat</h4>
            <div className="space-y-2.5 text-xs text-[#52373D]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#6B0F24] shrink-0 mt-0.5" />
                <span>SLIET, Longowal, District Sangrur, Punjab - 148106, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#6B0F24] shrink-0" />
                <a href="mailto:afstinfc2026@sliet.ac.in" className="hover:underline font-bold text-[#580B1E]">afstinfc2026@sliet.ac.in</a>
              </div>
              <div className="space-y-1 pt-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#6B0F24] shrink-0" />
                  <a href="tel:9815980334" className="hover:underline font-bold text-[#580B1E]">+91 98159-80334</a>
                </div>
                <div className="flex items-center gap-2 pl-6">
                  <a href="tel:9815982026" className="hover:underline font-bold text-[#580B1E]">+91 98159-82026</a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#52373D]">
          <p>© 2026 National Food Conference (AFSTINFC-2026). All Rights Reserved. SLIET Longowal &amp; AFST(I).</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#F5EFE6] text-[#580B1E] hover:bg-[#580B1E] hover:text-white border border-[#E8DEC8] transition-colors shadow-2xs cursor-pointer font-bold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
