import React, { useState } from 'react';
import { MapPin, Car, Train, Building2, Compass, ExternalLink, Landmark, Navigation } from 'lucide-react';
import { SLIET_DETAILS, NEARBY_ATTRACTIONS } from '../data/conferenceData';

export const VenueLocation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'road' | 'rail' | 'air'>('all');

  const filteredDistances = SLIET_DETAILS.distances.filter(item => {
    if (activeTab === 'all') return true;
    return item.type === activeTab;
  });

  return (
    <section id="venue" className="py-20 bg-[#F5EFE6] relative border-y border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Maroon & Beige Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#6B0F24] font-heading font-bold text-xs uppercase tracking-wider mb-2">
              <Navigation className="w-4 h-4 text-[#E67E22]" />
              <span>Host Institution &amp; Destination Logistics</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#580B1E] tracking-tight font-display-hero">
              About SLIET Longowal &amp; Location
            </h2>
            <p className="text-sm text-[#52373D] mt-2 max-w-2xl leading-relaxed">
              Sant Longowal Institute of Engineering &amp; Technology (SLIET) is an autonomous CFTI &amp; Deemed University established by the Ministry of Education, Govt. of India on a 451-acre lush green campus.
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=SLIET+Longowal+Punjab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-bold text-white bg-[#580B1E] hover:bg-[#6B0F24] shadow-md transition-all uppercase tracking-wider shrink-0"
          >
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>Open Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 2-Column Campus & Location Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Column: SLIET Campus Spotlight (7 Cols) */}
          <div className="lg:col-span-7 bg-[#FAF6F0] rounded-2xl p-6 sm:p-8 border border-[#E8DEC8] flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] border border-[#E8DEC8] flex items-center justify-center text-[#580B1E]">
                  <Building2 className="w-5 h-5 text-[#6B0F24]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#580B1E] font-heading">
                    Sant Longowal Institute of Engineering &amp; Technology
                  </h3>
                  <p className="text-xs text-[#E67E22] font-semibold">Deemed-to-be-University (MoE, Govt. of India)</p>
                </div>
              </div>

              <p className="text-[#52373D] text-sm leading-relaxed mb-6">
                {SLIET_DETAILS.description}
              </p>

              {/* Campus Highlights Grid */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#E8DEC8]">
                <div className="bg-white p-3 rounded-xl border border-[#E8DEC8] text-center">
                  <span className="text-[10px] uppercase text-[#52373D] font-bold block mb-0.5">Established</span>
                  <span className="text-base font-extrabold text-[#580B1E] font-heading">1989</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#E8DEC8] text-center">
                  <span className="text-[10px] uppercase text-[#52373D] font-bold block mb-0.5">Campus Area</span>
                  <span className="text-base font-extrabold text-[#6B0F24] font-heading">451 Acres</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#E8DEC8] text-center">
                  <span className="text-[10px] uppercase text-[#52373D] font-bold block mb-0.5">NIRF &amp; NAAC</span>
                  <span className="text-base font-extrabold text-[#E67E22] font-heading">NAAC 'A'</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Places to Visit Nearby (5 Cols) */}
          <div className="lg:col-span-5 bg-[#FAF6F0] rounded-2xl p-6 border border-[#E8DEC8] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 border-b border-[#E8DEC8] pb-3">
                <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] border border-[#E8DEC8] flex items-center justify-center text-[#580B1E] shrink-0">
                  <Landmark className="w-5 h-5 text-[#E67E22]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#580B1E] font-heading">Places to Visit Nearby</h4>
                  <p className="text-[11px] text-[#52373D]">Heritage sites &amp; attractions around SLIET</p>
                </div>
              </div>

              <div className="space-y-3">
                {NEARBY_ATTRACTIONS.map((spot, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-xl border border-[#E8DEC8] hover:border-[#6B0F24] transition-colors">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h5 className="text-xs font-bold text-[#580B1E] leading-snug">{spot.name}</h5>
                      <span className="text-[10px] font-bold text-[#580B1E] bg-[#F5EFE6] px-2 py-0.5 rounded-full border border-[#E8DEC8] shrink-0">
                        {spot.distance}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#52373D] line-clamp-2 leading-relaxed">{spot.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Distance Matrix Section */}
        <div className="bg-[#FAF6F0] rounded-2xl p-6 sm:p-8 border border-[#E8DEC8] shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <Compass className="w-5 h-5 text-[#6B0F24]" />
              <div>
                <h3 className="text-lg font-bold text-[#580B1E] font-heading">Road &amp; City Connectivity Distances</h3>
                <p className="text-xs text-[#52373D]">Distance breakdown from major transit hubs to SLIET Longowal</p>
              </div>
            </div>

            {/* Distance Filter Tabs */}
            <div className="flex items-center gap-1.5 bg-[#F5EFE6] p-1 rounded-xl border border-[#E8DEC8]">
              {[
                { key: 'all', label: 'All Routes' },
                { key: 'road', label: 'Roadways' },
                { key: 'rail', label: 'Railways' }
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeTab === tab.key
                      ? 'bg-[#580B1E] text-white shadow-2xs'
                      : 'text-[#52373D] hover:text-[#580B1E]'
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
                className="bg-white p-3.5 rounded-xl border border-[#E8DEC8] hover:border-[#6B0F24] transition-colors shadow-2xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#580B1E]">{item.place}</span>
                  {item.type === 'rail' ? (
                    <Train className="w-3.5 h-3.5 text-[#E67E22]" />
                  ) : (
                    <Car className="w-3.5 h-3.5 text-[#6B0F24]" />
                  )}
                </div>
                <div className="text-base font-bold text-[#E67E22] font-serif-editorial">
                  {item.distance}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[#E8DEC8] flex flex-wrap items-center justify-between gap-3 text-xs text-[#52373D]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#6B0F24]" />
              SLIET is located ~7 km off the Chandigarh-Bathinda Highway in Sangrur District, Punjab.
            </span>

            <a
              href="https://maps.google.com/?q=SLIET+Longowal+Punjab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-[#580B1E] hover:text-[#6B0F24] transition-colors"
            >
              <span>View Route Map</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
