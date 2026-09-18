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
    <section id="about" className="py-20 bg-[#F5F2ED] relative border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
            About NFC 2026
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-stone-950 mt-4 font-serif-editorial">
            Deliberating Emerging Challenges Across the <span className="text-amber-700 italic">Food Value Chain</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-emerald-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-14">
          
          {/* Left: About Conference */}
          <div className="editorial-card rounded-2xl p-6 sm:p-8 border border-stone-200 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 font-heading">Conference Purpose &amp; Vision</h3>
                </div>
                <img
                  src="/logos/afsti-longowal-logo.jpeg"
                  alt="AFSTI Longowal Chapter Logo"
                  className="h-14 w-auto rounded-xl border border-stone-200 bg-white p-1 object-contain shadow-xs shrink-0"
                />
              </div>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-4">
                {ABOUT_CONFERENCE}
              </p>
            </div>
            
            <div className="pt-4 border-t border-stone-200 flex items-center gap-2 text-xs font-semibold text-amber-700">
              <Globe2 className="w-4 h-4" />
              <span>Hybrid Mode: Physical at SLIET Longowal &amp; Online Presentations</span>
            </div>
          </div>

          {/* Right: Theme Focus */}
          <div className="editorial-card rounded-2xl p-6 sm:p-8 border border-stone-200 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 font-heading">Theme: Innovate Today. Nourish Tomorrow</h3>
              </div>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                {THEME_DESCRIPTION}
              </p>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-stone-200">
              {[
                { title: 'Sustainable Systems', desc: 'Resource & waste reduction' },
                { title: 'Safe & Nutritious', desc: 'Quality & health assurance' },
                { title: 'Digital Processing', desc: 'AI, IoT & automation' },
                { title: 'Tech Transfer', desc: 'Industry-academia scale-up' }
              ].map((pillar, idx) => (
                <div key={idx} className="bg-white p-3 rounded-xl border border-stone-200">
                  <h4 className="text-xs font-bold text-stone-900">{pillar.title}</h4>
                  <p className="text-[11px] text-stone-500 mt-0.5">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Who Should Attend / Participants Bar */}
        <div className="editorial-card rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-5 h-5 text-amber-700" />
            <h3 className="text-lg font-bold text-stone-900 font-heading">Who Should Participate &amp; Present?</h3>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {participants.map((person, idx) => (
              <div
                key={idx}
                className="px-3.5 py-2 rounded-xl bg-white border border-stone-300 text-xs font-medium text-stone-800 hover:border-amber-500 hover:text-amber-700 transition-colors shadow-2xs"
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
