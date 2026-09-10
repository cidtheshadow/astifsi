import React from 'react';
import { Presentation, Layers, Sparkles, Users, Trophy, Award, CheckCircle } from 'lucide-react';
import { HIGHLIGHTS } from '../data/conferenceData';

export const Highlights: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Presentation': return <Presentation className="w-6 h-6 text-amber-700" />;
      case 'Layers': return <Layers className="w-6 h-6 text-teal-700" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-orange-600" />;
      case 'Users': return <Users className="w-6 h-6 text-cyan-700" />;
      case 'Trophy': return <Trophy className="w-6 h-6 text-amber-600" />;
      default: return <Award className="w-6 h-6 text-amber-700" />;
    }
  };

  return (
    <section id="highlights" className="py-20 bg-[#F5F2ED] relative border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-100 px-3.5 py-1 rounded-full border border-teal-300">
            Conference Features
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-stone-950 mt-4 font-serif-editorial">
            Key Conference <span className="italic text-amber-700">Highlights</span> &amp; Activities
          </h2>
          <p className="text-sm text-stone-600 mt-3">
            Designed for high-impact knowledge exchange, scientific dissemination, and awards recognition.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-emerald-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Highlights Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className={`editorial-card rounded-2xl p-6 border transition-all ${
                item.badge === 'Awards'
                  ? 'border-amber-400 bg-gradient-to-b from-amber-50/60 to-orange-50/40 shadow-sm'
                  : 'border-stone-200 hover:border-stone-300'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center shadow-xs">
                  {getIcon(item.icon)}
                </div>

                {item.badge && (
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border ${
                    item.badge === 'Awards'
                      ? 'bg-amber-100 text-amber-800 border-amber-300'
                      : 'bg-stone-100 text-stone-600 border-stone-300'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-stone-900 mb-2 font-heading">
                {item.title}
              </h3>

              <p className="text-xs text-stone-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Award Highlight Banner */}
        <div className="pastel-gradient-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-800 shrink-0 shadow-sm">
                <Trophy className="w-7 h-7" />
              </div>
              <div className="text-left">
                <h4 className="text-xl font-bold text-stone-950 font-serif-editorial">
                  Best Oral &amp; Poster Presentation Awards
                </h4>
                <p className="text-xs text-stone-700 mt-1 max-w-xl">
                  Outstanding research presentations across all technical sessions will be evaluated by an expert scientific jury and awarded certificates &amp; honours during the valedictory session.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-amber-300 text-xs font-bold text-amber-900 shrink-0 shadow-xs">
              <CheckCircle className="w-4 h-4 text-amber-600" />
              <span>Certificates &amp; Mementos for Winners</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
