import React, { useState } from 'react';
import { 
  Zap, Cpu, Bot, ShieldCheck, HeartPulse, Leaf, Recycle, Dna, Rocket, Handshake, 
  ArrowUpRight, CheckCircle2, X 
} from 'lucide-react';
import { KEY_FOCUS_AREAS, type FocusArea } from '../data/conferenceData';

interface FocusAreasProps {
  onOpenAbstractModal: () => void;
}

export const FocusAreas: React.FC<FocusAreasProps> = ({ onOpenAbstractModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalArea, setActiveModalArea] = useState<FocusArea | null>(null);

  const categories = ['All', 'Processing & Tech', 'AI & Digital', 'Health & Safety', 'Sustainability'];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5 text-amber-600" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-teal-600" />;
      case 'Bot': return <Bot className="w-5 h-5 text-indigo-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-rose-600" />;
      case 'Leaf': return <Leaf className="w-5 h-5 text-emerald-600" />;
      case 'Recycle': return <Recycle className="w-5 h-5 text-green-600" />;
      case 'Dna': return <Dna className="w-5 h-5 text-purple-600" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-amber-600" />;
      case 'Handshake': return <Handshake className="w-5 h-5 text-cyan-600" />;
      default: return <Zap className="w-5 h-5 text-amber-600" />;
    }
  };

  const filteredAreas = KEY_FOCUS_AREAS.filter(area => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Processing & Tech') return area.id.includes('processing') || area.id.includes('engineering');
    if (selectedCategory === 'AI & Digital') return area.id.includes('ai-digital') || area.id.includes('engineering');
    if (selectedCategory === 'Health & Safety') return area.id.includes('safety') || area.id.includes('functional');
    if (selectedCategory === 'Sustainability') return area.id.includes('sustainable') || area.id.includes('waste') || area.id.includes('novel');
    return true;
  });

  return (
    <section id="themes" className="py-20 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
            Scientific Scope
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-stone-950 mt-4 font-serif-editorial">
            Key Focus Areas
          </h2>
          <p className="text-sm text-stone-600 mt-3">
            Present your groundbreaking research across 10 specialized domains driving the future of food engineering.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-emerald-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-stone-950 text-white shadow-sm font-bold'
                  : 'bg-white text-stone-600 hover:text-stone-900 border border-stone-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 10 Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredAreas.map((area) => (
            <div
              key={area.id}
              onClick={() => setActiveModalArea(area)}
              className="editorial-card editorial-card-hover rounded-2xl p-6 border border-stone-200 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(area.iconName)}
                    </div>
                    <span className="text-sm font-extrabold text-stone-400 tracking-wider font-heading">
                      {area.number}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-300">
                    {area.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-stone-900 group-hover:text-amber-700 transition-colors font-heading mb-2">
                  {area.title}
                </h3>

                <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-200/80 flex items-center justify-between text-xs font-medium text-stone-500 group-hover:text-amber-700 transition-colors">
                <span>View Details</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Footer inside Focus Areas */}
        <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-stone-200 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-left">
            <h4 className="text-sm font-bold text-stone-900">Have research matching these focus areas?</h4>
            <p className="text-xs text-stone-500 mt-0.5">Submit your 300-word abstract before Oct 4, 2026.</p>
          </div>
          <button
            onClick={onOpenAbstractModal}
            className="whitespace-nowrap px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-b from-[#ff6b35] via-[#E86024] to-[#d64f18] shadow-[0_6px_20px_-3px_rgba(232,96,36,0.45)] border border-white/30 hover:scale-[1.04] active:scale-[0.96] transition-all duration-300 ease-out uppercase tracking-wider"
          >
            Submit Abstract
          </button>
        </div>

      </div>

      {/* Focus Area Detail Modal */}
      {activeModalArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/40 backdrop-blur-md animate-in fade-in">
          <div className="editorial-card rounded-2xl p-6 sm:p-8 max-w-lg w-full border border-stone-300 shadow-2xl relative bg-white">
            <button
              onClick={() => setActiveModalArea(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-stone-400 hover:text-stone-900 hover:bg-stone-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center">
                {getIcon(activeModalArea.iconName)}
              </div>
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider font-heading">
                  Focus Area {activeModalArea.number}
                </span>
                <h3 className="text-lg font-bold text-stone-900 font-heading">
                  {activeModalArea.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4 my-4">
              <p className="text-sm text-stone-700 leading-relaxed">
                {activeModalArea.description}
              </p>

              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
                <h4 className="text-xs font-semibold text-stone-600 mb-2">Scope &amp; Abstract Topics:</h4>
                <ul className="space-y-1.5 text-xs text-stone-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    Original experimental &amp; applied engineering research
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    Emerging industrial applications &amp; pilot studies
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    Sustainability impact assessment &amp; commercialization
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-stone-200">
              <button
                onClick={() => setActiveModalArea(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-500 hover:text-stone-900"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setActiveModalArea(null);
                  onOpenAbstractModal();
                }}
                className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-b from-[#ff6b35] via-[#E86024] to-[#d64f18] shadow-md border border-white/30 hover:scale-[1.03] active:scale-[0.97] transition-all uppercase tracking-wider"
              >
                Submit Abstract
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
