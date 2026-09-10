import React, { useState } from 'react';
import { MapPin, Building2 } from 'lucide-react';
import { COMMITTEE_MEMBERS, type CommitteeMember } from '../data/conferenceData';

export const Committee: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'organizing' | 'advisory'>('organizing');

  const organizingMembers = COMMITTEE_MEMBERS.filter(m => m.category !== 'Advisory');
  const advisoryMembers = COMMITTEE_MEMBERS.filter(m => m.category === 'Advisory');

  const displayedMembers: CommitteeMember[] = activeCategory === 'all' 
    ? COMMITTEE_MEMBERS 
    : activeCategory === 'organizing' 
    ? organizingMembers 
    : advisoryMembers;

  const getRoleBadgeStyle = (category: string) => {
    switch (category) {
      case 'Patron': return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'Chair': return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Secretary': return 'bg-teal-100 text-teal-800 border-teal-300';
      default: return 'bg-sky-100 text-sky-800 border-sky-300';
    }
  };

  return (
    <section id="committee" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
            Leadership &amp; Advisory
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-stone-950 mt-4 font-serif-editorial">
            Organizing &amp; <span className="italic text-amber-700">National Advisory</span> Committees
          </h2>
          <p className="text-sm text-stone-600 mt-3">
            Eminent visionaries, institute directors, and food industry pioneers steering National Food Conference 2026.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-emerald-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[
            { key: 'organizing', label: 'Organizing Committee', count: organizingMembers.length },
            { key: 'advisory', label: 'National Advisory Board', count: advisoryMembers.length },
            { key: 'all', label: 'All Members', count: COMMITTEE_MEMBERS.length }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveCategory(tab.key as any)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                activeCategory === tab.key
                  ? 'bg-stone-900 text-white font-bold shadow-sm'
                  : 'bg-white text-stone-700 hover:text-stone-950 border border-stone-200'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                activeCategory === tab.key ? 'bg-stone-700 text-white' : 'bg-stone-100 text-stone-600'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Committee Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {displayedMembers.map((member, idx) => (
            <div
              key={idx}
              className="editorial-card editorial-card-hover rounded-2xl p-5 border border-stone-200 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-stone-100 border border-stone-300 flex items-center justify-center font-bold text-sm text-stone-900 font-heading">
                    {member.avatarInitials}
                  </div>

                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${getRoleBadgeStyle(member.category)}`}>
                    {member.role}
                  </span>
                </div>

                <h3 className="text-base font-bold text-stone-900 font-heading mb-1">
                  {member.name}
                </h3>

                <p className="text-xs font-semibold text-amber-800 mb-1">
                  {member.designation}
                </p>

                <p className="text-xs text-stone-600 leading-relaxed flex items-center gap-1.5 mt-2">
                  <Building2 className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <span>{member.institution}</span>
                </p>
              </div>

              {member.location && (
                <div className="mt-4 pt-3 border-t border-stone-200 text-[11px] text-stone-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-stone-400" />
                  <span>{member.location}</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
