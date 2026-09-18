import React from 'react';
import { MapPin, Building2, Crown, Award, UserCheck, Phone } from 'lucide-react';
import { COMMITTEE_MEMBERS, type CommitteeMember } from '../data/conferenceData';

export const Committee: React.FC = () => {
  const organizingMembers = COMMITTEE_MEMBERS.filter(m => m.category !== 'Advisory');
  const advisoryMembers = COMMITTEE_MEMBERS.filter(m => m.category === 'Advisory');

  const getRoleBadgeStyle = (category: string) => {
    switch (category) {
      case 'Patron': return 'bg-[#FEF3C7] text-[#713700] border-amber-300';
      case 'Chair': return 'bg-[#D1FAE5] text-[#0B4632] border-emerald-300';
      case 'Secretary': return 'bg-[#86f2e4]/40 text-[#005049] border-teal-300';
      default: return 'bg-sky-100 text-sky-900 border-sky-300';
    }
  };

  const MemberCard: React.FC<{ member: CommitteeMember }> = ({ member }) => (
    <div className="bg-white rounded-2xl p-5 border border-stone-200 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow h-full">
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-12 h-12 rounded-xl object-cover border border-stone-300 shadow-2xs shrink-0"
            />
          ) : (
            <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-stone-300 flex items-center justify-center font-bold text-sm text-[#002e1f] font-heading shrink-0">
              {member.avatarInitials}
            </div>
          )}

          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${getRoleBadgeStyle(member.category)}`}>
            {member.role}
          </span>
        </div>

        <h3 className="text-base font-bold text-[#002e1f] font-heading mb-1">
          {member.name}
        </h3>

        <p className="text-xs font-semibold text-[#0D9488] mb-1">
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
            className="pt-2.5 border-t border-stone-200 text-xs font-bold text-[#E67E22] hover:text-[#002e1f] flex items-center gap-1.5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#E67E22] shrink-0" />
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
    <section id="committee" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#0D9488] font-heading font-bold text-xs uppercase tracking-wider mb-2">
              <Crown className="w-4 h-4 text-[#E67E22]" />
              <span>Academic Leadership &amp; Institutional Governance</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#002e1f] tracking-tight font-display-hero">
              Organizing Committee &amp; Advisory Board
            </h2>
            <p className="text-sm text-stone-600 mt-2 max-w-xl leading-relaxed">
              Eminent visionaries, institute directors, and food industry pioneers steering National Food Conference 2026.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3.5 py-1.5 rounded-full bg-[#D1FAE5] text-[#002e1f] text-xs font-bold">SLIET Longowal Chapter</span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#FEF3C7] text-[#713700] text-xs font-bold">AFSTI Mysuru HQ</span>
          </div>
        </div>

        {/* 1. Organizing Committee Section */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#E67E22]" />
            <h3 className="text-xl sm:text-2xl font-bold text-[#002e1f] font-heading">
              Organizing Committee (SLIET Chapter)
            </h3>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            
            {/* Group 1: Patron in Chief & Patrons (3 Cards) */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Crown className="w-4 h-4 text-[#E67E22]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#713700]">
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
                <Award className="w-4 h-4 text-[#0B4632]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#0B4632]">
                  Chairman &amp; Co-Chairman
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
                {organizingMembers[3] && <MemberCard member={organizingMembers[3]} />}
                {organizingMembers[4] && <MemberCard member={organizingMembers[4]} />}
              </div>
            </div>

            {/* Group 3: Organizing Secretaries (2 Cards) */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <UserCheck className="w-4 h-4 text-[#0D9488]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
                  Organizing Secretaries
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
                {organizingMembers[5] && <MemberCard member={organizingMembers[5]} />}
                {organizingMembers[6] && <MemberCard member={organizingMembers[6]} />}
              </div>
            </div>

            {/* Group 4: Co-Organizing Secretary (1 Card) */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <UserCheck className="w-4 h-4 text-sky-600" />
                <span className="text-xs font-bold uppercase tracking-widest text-sky-900">
                  Co-Organizing Secretary
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-md">
                {organizingMembers[7] && <MemberCard member={organizingMembers[7]} />}
              </div>
            </div>

          </div>
        </div>

        {/* 2. National Advisory Board Section */}
        <div className="pt-10 border-t border-stone-200">
          <div className="mb-6 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#0D9488]" />
            <h3 className="text-xl sm:text-2xl font-bold text-[#002e1f] font-heading">
              National Advisory Board
            </h3>
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
