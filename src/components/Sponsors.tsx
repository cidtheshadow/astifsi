import React from 'react';
import { HeartHandshake, ArrowLeft } from 'lucide-react';
import { SPONSORS } from '../data/conferenceData';

interface SponsorsProps {
  onBackToHome?: () => void;
  isStandalonePage?: boolean;
}

export const Sponsors: React.FC<SponsorsProps> = ({ onBackToHome, isStandalonePage = false }) => {
  return (
    <section id="sponsors" className="py-20 bg-[#F5EFE6] relative border-y border-[#E8DEC8] text-[#2C070F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Back Header if on Standalone Page */}
        {isStandalonePage && onBackToHome && (
          <div className="mb-8">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FAF6F0] border border-[#E8DEC8] text-xs font-bold text-[#580B1E] hover:bg-[#580B1E] hover:text-white transition-all cursor-pointer shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Main Conference</span>
            </button>
          </div>
        )}

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#580B1E] bg-[#FAF6F0] px-3.5 py-1 rounded-full border border-[#E8DEC8]">
            Official Organizers &amp; Sponsors
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#580B1E] mt-4 font-serif-editorial">
            Supported &amp; <span className="italic text-[#6B0F24]">Sponsored By</span>
          </h2>
          <p className="text-sm sm:text-base text-[#52373D] mt-3">
            National Food Conference 2026 is proudly sponsored &amp; organized by premier food science &amp; engineering institutions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#E67E22] via-[#6B0F24] to-[#580B1E] mx-auto mt-4 rounded-full" />
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {SPONSORS.map((sponsor, idx) => (
            <div
              key={idx}
              className="bg-[#FAF6F0] rounded-2xl p-6 sm:p-8 border border-[#E8DEC8] shadow-sm flex flex-col justify-between items-center text-center hover:border-[#6B0F24] transition-all group"
            >
              <div className="w-full flex flex-col items-center">
                <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-[#580B1E] text-white border border-[#6B0F24] mb-6">
                  {sponsor.badge}
                </span>

                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white border border-[#E8DEC8] p-3 flex items-center justify-center shadow-2xs mb-6 group-hover:scale-105 transition-transform">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold text-[#580B1E] font-heading mb-1">
                  {sponsor.name}
                </h3>

                <p className="text-xs font-semibold text-[#6B0F24] mb-3">
                  {sponsor.role}
                </p>

                <p className="text-xs text-[#52373D] leading-relaxed">
                  {sponsor.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8DEC8] w-full flex items-center justify-center gap-2 text-xs font-bold text-[#580B1E]">
                <HeartHandshake className="w-4 h-4 text-[#E67E22]" />
                <span>Official Partner</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
