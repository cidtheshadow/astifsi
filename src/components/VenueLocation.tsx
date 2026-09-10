import React, { useState } from 'react';
import { MapPin, Car, Train, Plane, Building2, Compass, ExternalLink } from 'lucide-react';
import { SLIET_DETAILS } from '../data/conferenceData';

export const VenueLocation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'road' | 'rail' | 'air'>('all');

  const filteredDistances = SLIET_DETAILS.distances.filter(item => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  return (
    <section id="venue" className="py-20 bg-[#F5F2ED] relative border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
            Host Institution &amp; Connectivity
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-stone-950 mt-4 font-serif-editorial">
            About <span className="italic text-amber-700">SLIET Longowal</span> &amp; Location
          </h2>
          <p className="text-sm text-stone-600 mt-3">
            An autonomous, Govt. of India funded Deemed University situated on a lush 451-acre green campus in Punjab.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-emerald-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Campus & Location Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left Column: SLIET Campus Spotlight (7 Cols) */}
          <div className="lg:col-span-7 editorial-card rounded-2xl p-6 sm:p-8 border border-stone-200 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 font-heading">
                    Sant Longowal Institute of Engineering &amp; Technology
                  </h3>
                  <p className="text-xs text-amber-700 font-semibold">Deemed-to-be-University (Govt. of India)</p>
                </div>
              </div>

              <p className="text-stone-700 text-sm leading-relaxed mb-6">
                {SLIET_DETAILS.description}
              </p>

              {/* Campus Highlights Grid */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-stone-200">
                <div className="bg-white p-3 rounded-xl border border-stone-200 text-center">
                  <span className="text-[10px] uppercase text-stone-500 font-semibold block">Established</span>
                  <span className="text-base font-extrabold text-stone-900 font-heading">1989</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-stone-200 text-center">
                  <span className="text-[10px] uppercase text-stone-500 font-semibold block">Campus Area</span>
                  <span className="text-base font-extrabold text-emerald-700 font-heading">451 Acres</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-stone-200 text-center">
                  <span className="text-[10px] uppercase text-stone-500 font-semibold block">Status</span>
                  <span className="text-base font-extrabold text-amber-700 font-heading">Deemed Univ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Transit Terminals (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Airports Card */}
            <div className="editorial-card rounded-2xl p-5 border border-stone-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-700">
                  <Plane className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-stone-900 font-heading">Nearest Airports</h4>
              </div>
              <ul className="space-y-1.5 text-xs text-stone-700">
                {SLIET_DETAILS.airports.map((ap, idx) => (
                  <li key={idx} className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-stone-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                    <span>{ap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Railway Stations Card */}
            <div className="editorial-card rounded-2xl p-5 border border-stone-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700">
                  <Train className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-stone-900 font-heading">Nearest Railway Stations</h4>
              </div>
              <ul className="space-y-1.5 text-xs text-stone-700">
                {SLIET_DETAILS.railways.map((rw, idx) => (
                  <li key={idx} className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-stone-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span>{rw}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Distance Matrix Section */}
        <div className="editorial-card rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <Compass className="w-5 h-5 text-amber-700" />
              <div>
                <h3 className="text-lg font-bold text-stone-900 font-heading">Road &amp; City Connectivity Distances</h3>
                <p className="text-xs text-stone-500">Distance breakdown from major cities and transit hubs to SLIET Longowal</p>
              </div>
            </div>

            {/* Distance Filter Tabs */}
            <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-xl border border-stone-200">
              {[
                { key: 'all', label: 'All Routes' },
                { key: 'road', label: 'Roadways' },
                { key: 'rail', label: 'Railways' }
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === tab.key
                      ? 'bg-stone-900 text-white font-bold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Distance Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {filteredDistances.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-3.5 rounded-xl border border-stone-200 hover:border-amber-400 transition-colors shadow-2xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-stone-900">{item.place}</span>
                  {item.type === 'rail' ? (
                    <Train className="w-3.5 h-3.5 text-amber-600" />
                  ) : (
                    <Car className="w-3.5 h-3.5 text-emerald-600" />
                  )}
                </div>
                <div className="text-base font-bold text-amber-800 font-serif-editorial">
                  {item.distance}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-600">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-600" />
              SLIET is located ~7 km off the Chandigarh-Bathinda Highway in Sangrur District, Punjab.
            </span>

            <a
              href="https://maps.google.com/?q=SLIET+Longowal+Punjab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-amber-700 hover:text-amber-800 transition-colors"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
