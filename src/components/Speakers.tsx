import React from 'react';
import { SPEAKERS_DATA } from '../data/conferenceData';
import { MapPin } from 'lucide-react';

export const Speakers: React.FC = () => {
  return (
    <section id="speakers" className="py-20 bg-stone-50 relative border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E86024] bg-orange-100 px-3.5 py-1 rounded-full border border-orange-200">
            Eminent Speakers
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-stone-900 mt-4 font-serif-editorial">
            Guest <span className="italic text-stone-500">Speakers</span>
          </h2>
          <div className="w-16 h-1 bg-[#E86024] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SPEAKERS_DATA.map((speaker, idx) => (
            <div key={idx} className="group relative flex flex-col items-center">
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full mb-6 relative z-10 overflow-hidden shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-500 bg-stone-200 flex items-center justify-center">
                {speaker.image ? (
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-4xl font-bold text-stone-400 font-serif-editorial">{speaker.avatarInitials}</span>
                )}
              </div>
              <div className="text-center z-10 w-full px-2">
                <h3 className="text-xl font-bold text-stone-900 mb-1 font-heading">{speaker.name}</h3>
                <p className="text-sm font-semibold text-[#E86024] mb-2">{speaker.designation}</p>
                <p className="text-xs text-stone-600 mb-2 leading-relaxed">{speaker.affiliation}</p>
                <div className="flex items-center justify-center gap-1.5 text-stone-500">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-medium uppercase tracking-wider">{speaker.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
