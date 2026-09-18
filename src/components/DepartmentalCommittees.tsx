import React from 'react';
import { Users, UserCheck, GraduationCap, ShieldCheck, ArrowLeft } from 'lucide-react';
import { DEPARTMENTAL_COMMITTEES } from '../data/conferenceData';

interface DepartmentalCommitteesProps {
  onBackToHome?: () => void;
  isStandalonePage?: boolean;
}

export const DepartmentalCommittees: React.FC<DepartmentalCommitteesProps> = ({ 
  onBackToHome, 
  isStandalonePage = false 
}) => {
  return (
    <section id="departmental-committees" className="py-16 sm:py-24 bg-[#FAF6F0] relative overflow-hidden text-[#2C070F]">
      {/* Background Decorative Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#580B1E_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#580B1E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Back Header if on Standalone Page */}
        {isStandalonePage && onBackToHome && (
          <div className="mb-8">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F5EFE6] border border-[#E8DEC8] text-xs font-bold text-[#580B1E] hover:bg-[#580B1E] hover:text-white transition-all cursor-pointer shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Main Conference</span>
            </button>
          </div>
        )}

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EFE6] border border-[#E8DEC8] mb-4">
            <ShieldCheck className="w-4 h-4 text-[#6B0F24]" />
            <span className="text-xs font-bold text-[#580B1E] uppercase tracking-wider font-heading">
              SLIET FET Faculty &amp; Staff Teams
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#580B1E] tracking-tight font-serif-editorial">
            Local Departmental Committees
          </h2>
          <p className="mt-4 text-base text-[#52373D] font-sans leading-relaxed">
            Fourteen dedicated local committees driving seamless organization, hospitality, venue logistics, registration, technical sessions, and publication for AFSTINFC-2026.
          </p>
        </div>

        {/* 14 Committees Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENTAL_COMMITTEES.map((committee) => (
            <div
              key={committee.id}
              className="bg-[#FDFBF7] rounded-2xl p-6 border border-[#E8DEC8] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group hover:border-[#6B0F24]/30"
            >
              <div>
                {/* Header with Number Badge */}
                <div className="flex items-start justify-between gap-3 mb-4 border-b border-[#E8DEC8] pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-bold text-[#D4AF37] bg-[#580B1E] px-2.5 py-1 rounded-lg font-heading shadow-2xs">
                      #{committee.number}
                    </span>
                    <h3 className="text-base font-bold text-[#580B1E] font-heading leading-tight group-hover:text-[#6B0F24] transition-colors">
                      {committee.title}
                    </h3>
                  </div>
                </div>

                {/* Committee Coordinator */}
                <div className="mb-4 bg-[#F5EFE6] p-3 rounded-xl border border-[#E8DEC8]">
                  <div className="flex items-center gap-2 text-xs text-[#6B0F24] font-bold uppercase tracking-wider mb-1">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Coordinator</span>
                  </div>
                  <p className="text-sm font-bold text-[#580B1E] font-heading">
                    {committee.coordinator}
                  </p>
                </div>

                {/* Faculty & Staff Members */}
                {committee.members.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-[11px] text-[#52373D] font-bold uppercase tracking-wider mb-2">
                      <Users className="w-3.5 h-3.5 text-[#580B1E]" />
                      <span>Committee Members ({committee.members.length})</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#52373D]">
                      {committee.members.map((member, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6B0F24] shrink-0 mt-1.5" />
                          <span>{member}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Student Coordinators if available */}
                {committee.studentCoordinators && committee.studentCoordinators.length > 0 && (
                  <div className="pt-3 border-t border-[#E8DEC8]/60">
                    <div className="flex items-center gap-2 text-[11px] text-[#E67E22] font-bold uppercase tracking-wider mb-2">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>Student Coordinators ({committee.studentCoordinators.length})</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {committee.studentCoordinators.map((st, idx) => (
                        <span
                          key={idx}
                          className="inline-block text-[11px] font-medium bg-[#F5EFE6] text-[#580B1E] px-2 py-0.5 rounded-md border border-[#E8DEC8]"
                        >
                          {st}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
