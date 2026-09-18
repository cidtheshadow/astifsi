import React from 'react';
import { MapPin, Building2, Crown, Award, UserCheck, Phone, Users } from 'lucide-react';
import { COMMITTEE_MEMBERS, type CommitteeMember } from '../data/conferenceData';

interface CommitteeProps {
  onNavigateDepartmental?: () => void;
}

export const Committee: React.FC<CommitteeProps> = ({ onNavigateDepartmental }) => {
  const organizingMembers = COMMITTEE_MEMBERS.filter(m => m.category !== 'Advisory');
  const advisoryMembers = COMMITTEE_MEMBERS.filter(m => m.category === 'Advisory');

  const getRoleBadgeStyle = (category: string) => {
    switch (category) {
      case 'Patron': return 'bg-[#F5EFE6] text-[#580B1E] border-[#D4AF37] font-bold';
      case 'Chair': return 'bg-[#F5EFE6] text-[#580B1E] border-[#6B0F24] font-bold';
      case 'Secretary': return 'bg-[#F5EFE6] text-[#580B1E] border-[#E67E22] font-bold';
      default: return 'bg-[#F5EFE6] text-[#52373D] border-[#E8DEC8]';
    }
  };

  const MemberCard: React.FC<{ member: CommitteeMember }> = ({ member }) => (
    <div className="bg-[#FDFBF7] rounded-2xl p-5 border border-[#E8DEC8] flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow h-full">
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-[#E8DEC8] shadow-sm shrink-0"
            />
          ) : (
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#F5EFE6] border-2 border-[#E8DEC8] flex items-center justify-center font-bold text-lg text-[#580B1E] font-heading shrink-0">
              {member.avatarInitials}
            </div>
          )}

          <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border whitespace-nowrap ${getRoleBadgeStyle(member.category)}`}>
            {member.role}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-[#580B1E] font-heading mb-1.5 leading-tight">
          {member.name}
        </h3>

        <p className="text-sm sm:text-base font-bold text-[#6B0F24] mb-3">
          {member.designation}
        </p>

        <p className="text-sm text-[#52373D] leading-relaxed flex items-center gap-2">
          <Building2 className="w-4 h-4 text-[#580B1E]/70 shrink-0" />
          <span>{member.institution}</span>
        </p>
      </div>

      <div className="space-y-1 mt-4">
        {member.phone && (
          <a
            href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`}
            className="pt-3 border-t border-[#E8DEC8] text-sm font-bold text-[#E67E22] hover:text-[#580B1E] flex items-center gap-2 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#E67E22] shrink-0" />
            <span>+91 {member.phone}</span>
          </a>
        )}

        {member.location && (
          <div className={`${member.phone ? '' : 'pt-3 border-t border-[#E8DEC8]'} text-xs text-[#52373D] flex items-center gap-1.5`}>
            <MapPin className="w-3.5 h-3.5 text-[#580B1E]/60" />
            <span>{member.location}</span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="committee" className="py-20 bg-[#FAF6F0] relative text-[#2C070F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-[#E8DEC8] pb-8">
          <div>
            <div className="flex items-center gap-2 text-[#6B0F24] font-heading font-bold text-xs uppercase tracking-wider mb-2">
              <Crown className="w-4 h-4 text-[#D4AF37]" />
              <span>Academic Leadership &amp; Institutional Governance</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#580B1E] tracking-tight font-serif-editorial">
              Organizing Committee &amp; Advisory Board
            </h2>
            <p className="text-sm text-[#52373D] mt-2 max-w-xl leading-relaxed">
              Eminent visionaries, institute directors, and food industry pioneers steering National Food Conference 2026.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {onNavigateDepartmental && (
              <button
                onClick={onNavigateDepartmental}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#580B1E] text-white text-xs font-bold hover:bg-[#6B0F24] transition-all shadow-sm border border-[#6B0F24] cursor-pointer"
              >
                <Users className="w-4 h-4 text-[#D4AF37]" />
                <span>Local Departmental Committees (14)</span>
              </button>
            )}
            <span className="px-3 py-1.5 rounded-full bg-[#F5EFE6] text-[#580B1E] border border-[#E8DEC8] text-xs font-bold">SLIET Longowal Chapter</span>
            <span className="px-3 py-1.5 rounded-full bg-[#F5EFE6] text-[#580B1E] border border-[#E8DEC8] text-xs font-bold">AFSTI Mysuru HQ</span>
          </div>
        </div>

        {/* 1. Organizing Committee Section */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#D4AF37]" />
            <h3 className="text-xl sm:text-2xl font-bold text-[#580B1E] font-heading">
              Organizing Committee (SLIET Chapter)
            </h3>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            
            {/* Group 1: Patron in Chief & Patrons (3 Cards) */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Crown className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#580B1E]">
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
                <Award className="w-4 h-4 text-[#6B0F24]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#580B1E]">
                  Chairman &amp; Co-Chairman
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
                {organizingMembers[3] && <MemberCard member={organizingMembers[3]} />}
                {organizingMembers[4] && <MemberCard member={organizingMembers[4]} />}
              </div>
            </div>

            {/* Group 3: Organizing Secretaries & Co-Organizing Secretary (3 Cards Grid) */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <UserCheck className="w-4 h-4 text-[#6B0F24]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#580B1E]">
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
        <div className="pt-10 border-t border-[#E8DEC8]">
          <div className="mb-6 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#6B0F24]" />
            <h3 className="text-xl sm:text-2xl font-bold text-[#580B1E] font-heading">
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
