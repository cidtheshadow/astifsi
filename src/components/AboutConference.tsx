import React from 'react';
import { Target, Lightbulb, Users, Globe2 } from 'lucide-react';
import { ABOUT_CONFERENCE, THEME_DESCRIPTION } from '../data/conferenceData';

export const AboutConference: React.FC = () => {
  const participants = [
    "Food Scientists",
    "Food Technologists",
    "Food Engineers",
    "Academicians & Researchers",
    "Industry Professionals",
    "Entrepreneurs & Startups",
    "Policy Makers",
    "Students & Research Scholars"
  ];

  return (
    <section id="about" className="py-20 bg-[#F5EFE6] relative border-y border-[#E8DEC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#580B1E] bg-[#FAF6F0] px-3.5 py-1 rounded-full border border-[#E8DEC8]">
            About NFC 2026
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#580B1E] mt-4 font-display-hero">
            Deliberating Emerging Challenges Across the <span className="text-[#6B0F24] italic">Food Value Chain</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#E67E22] via-[#6B0F24] to-[#580B1E] mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Left: About Conference */}
          <div className="bg-[#FAF6F0] rounded-2xl p-6 sm:p-8 border border-[#E8DEC8] flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] border border-[#E8DEC8] flex items-center justify-center text-[#580B1E] shrink-0">
                    <Target className="w-5 h-5 text-[#6B0F24]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#580B1E] font-heading">Conference Purpose &amp; Vision</h3>
                </div>
                <img
                  src="/logos/afsti-longowal-logo.jpeg"
                  alt="AFSTI Longowal Chapter Logo"
                  className="h-14 w-auto rounded-xl border border-[#E8DEC8] bg-white p-1 object-contain shadow-2xs shrink-0"
                />
              </div>
              <p className="text-[#52373D] text-sm sm:text-base leading-relaxed mb-4">
                {ABOUT_CONFERENCE}
              </p>
            </div>
            
            <div className="pt-4 border-t border-[#E8DEC8] flex items-center gap-2 text-xs font-bold text-[#6B0F24]">
              <Globe2 className="w-4 h-4 text-[#E67E22]" />
              <span>Hybrid Mode: Physical at SLIET Longowal &amp; Online Presentations</span>
            </div>
          </div>

          {/* Right: Theme Focus */}
          <div className="bg-[#FAF6F0] rounded-2xl p-6 sm:p-8 border border-[#E8DEC8] flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] border border-[#E8DEC8] flex items-center justify-center text-[#580B1E]">
                  <Lightbulb className="w-5 h-5 text-[#E67E22]" />
                </div>
                <h3 className="text-xl font-bold text-[#580B1E] font-heading">Theme: Innovate Today. Nourish Tomorrow</h3>
              </div>
              <p className="text-[#52373D] text-sm sm:text-base leading-relaxed mb-6">
                {THEME_DESCRIPTION}
              </p>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#E8DEC8]">
              {[
                { title: 'Sustainable Systems', desc: 'Resource & waste reduction' },
                { title: 'Safe & Nutritious', desc: 'Quality & health assurance' },
                { title: 'Digital Processing', desc: 'AI, IoT & automation' },
                { title: 'Tech Transfer', desc: 'Industry-academia scale-up' }
              ].map((pillar, idx) => (
                <div key={idx} className="bg-white p-3 rounded-xl border border-[#E8DEC8]">
                  <h4 className="text-xs font-bold text-[#580B1E]">{pillar.title}</h4>
                  <p className="text-[11px] text-[#52373D] mt-0.5">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Who Should Attend / Participants Bar */}
        <div className="bg-[#FAF6F0] rounded-2xl p-6 sm:p-8 border border-[#E8DEC8] shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-5 h-5 text-[#6B0F24]" />
            <h3 className="text-lg font-bold text-[#580B1E] font-heading">Who Should Participate &amp; Present?</h3>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {participants.map((person, idx) => (
              <div
                key={idx}
                className="px-3.5 py-2 rounded-xl bg-white border border-[#E8DEC8] text-xs font-semibold text-[#580B1E] hover:border-[#6B0F24] hover:bg-[#F5EFE6] transition-colors shadow-2xs"
              >
                {person}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
