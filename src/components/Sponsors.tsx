import React from 'react';
import { HeartHandshake } from 'lucide-react';
import { SPONSORS } from '../data/conferenceData';

export const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="py-20 bg-[#F5F2ED] relative border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
            Official Organizers &amp; Sponsors
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-stone-950 mt-4 font-serif-editorial">
            Supported &amp; <span className="italic text-amber-700">Sponsored By</span>
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3">
            National Food Conference 2026 is proudly sponsored &amp; organized by premier food science &amp; engineering institutions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-emerald-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {SPONSORS.map((sponsor, idx) => (
            <div
              key={idx}
              className="editorial-card rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between items-center text-center bg-white hover:border-amber-400 transition-all group"
            >
              <div className="w-full flex flex-col items-center">
                <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 mb-6">
                  {sponsor.badge}
                </span>

                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white border border-stone-200 p-3 flex items-center justify-center shadow-xs mb-6 group-hover:scale-105 transition-transform">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <h3 className="text-xl font-bold text-stone-900 font-heading mb-1">
                  {sponsor.name}
                </h3>

                <p className="text-xs font-semibold text-amber-800 mb-3">
                  {sponsor.role}
                </p>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {sponsor.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200 w-full flex items-center justify-center gap-2 text-xs font-bold text-stone-500">
                <HeartHandshake className="w-4 h-4 text-amber-600" />
                <span>Official Partner</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
