import React from 'react';
import { MapPin, Building2, Crown, Award, UserCheck, Phone } from 'lucide-react';
import { COMMITTEE_MEMBERS, type CommitteeMember } from '../data/conferenceData';

export const Committee: React.FC = () => {
  const organizingMembers = COMMITTEE_MEMBERS.filter(m => m.category !== 'Advisory');
  const advisoryMembers = COMMITTEE_MEMBERS.filter(m => m.category === 'Advisory');

  const getRoleBadgeStyle = (category: string) => {
    switch (category) {
      case 'Patron': return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'Chair': return 'bg-emerald-100 text-emerald-900 border-emerald-300';
      case 'Secretary': return 'bg-teal-100 text-teal-900 border-teal-300';
      default: return 'bg-sky-100 text-sky-900 border-sky-300';
    }
  };

  const MemberCard: React.FC<{ member: CommitteeMember }> = ({ member }) => (
    <div className="editorial-card editorial-card-hover rounded-2xl p-5 border border-stone-200 flex flex-col justify-between shadow-xs h-full bg-white">
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-12 h-12 rounded-xl object-cover border border-stone-300 shadow-xs shrink-0"
            />
          ) : (
            <div className="w-11 h-11 rounded-xl bg-stone-100 border border-stone-300 flex items-center justify-center font-bold text-sm text-stone-900 font-heading shrink-0">
              {member.avatarInitials}
            </div>
          )}

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

      <div className="space-y-1 mt-4">
        {member.phone && (
          <a
            href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`}
            className="pt-2.5 border-t border-stone-200 text-xs font-bold text-amber-800 hover:text-amber-900 flex items-center gap-1.5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>+91 {member.phone}</span>
          </a>
        )}

        {member.location && (
          <div className={`${member.phone ? '' : 'pt-2.5 border-t border-stone-200'} text-[11px] text-stone-500 flex items-center gap-1`}>
            <MapPin className="w-3 h-3 text-stone-400" />
            <span>{member.location}</span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="committee" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
            Leadership &amp; Advisory
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-stone-950 mt-4 font-serif-editorial">
            Organizing &amp; <span className="italic text-amber-700">National Advisory</span> Committees
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3">
            Eminent visionaries, institute directors, and food industry pioneers steering National Food Conference 2026.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-emerald-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* 1. Organizing Committee Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif-editorial">
              Organizing Committee
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">Conference leadership &amp; organizing team</p>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            
            {/* Group 1: Patron in Chief & Patrons (3 Cards) */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Crown className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-bold uppercase tracking-widest text-amber-900">
                  Patron in Chief &amp; Patrons
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {organizingMembers[0] && <MemberCard member={organizingMembers[0]} />}
                {organizingMembers[1] && <MemberCard member={organizingMembers[1]} />}
                {organizingMembers[2] && <MemberCard member={organizingMembers[2]} />}
              </div>
            </div>

            {/* Group 2: Chairman & Co-chairman (2 Cards) */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-900">
                  Chairman &amp; Co-Chairman
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
                {organizingMembers[3] && <MemberCard member={organizingMembers[3]} />}
                {organizingMembers[4] && <MemberCard member={organizingMembers[4]} />}
              </div>
            </div>

            {/* Group 3: Organizing Secretaries (3 Cards) */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <UserCheck className="w-4 h-4 text-teal-600" />
                <span className="text-xs font-bold uppercase tracking-widest text-teal-900">
                  Organizing Secretaries &amp; Co-Organizing Secretary
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {organizingMembers[5] && <MemberCard member={organizingMembers[5]} />}
                {organizingMembers[6] && <MemberCard member={organizingMembers[6]} />}
                {organizingMembers[7] && <MemberCard member={organizingMembers[7]} />}
              </div>
            </div>

          </div>
        </div>

        {/* 2. National Advisory Board Section */}
        <div className="pt-10 border-t border-stone-200">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif-editorial">
              National Advisory Board
            </h3>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">Eminent leaders from ICAR, CSIR, NABI, PAU, and Food Industry</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {advisoryMembers.map((member, idx) => (
              <MemberCard key={idx} member={member} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
