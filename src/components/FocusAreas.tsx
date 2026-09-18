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
      case 'Zap': return <Zap className="w-5 h-5 text-[#E67E22]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#0D9488]" />;
      case 'Bot': return <Bot className="w-5 h-5 text-indigo-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#0B4632]" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-rose-600" />;
      case 'Leaf': return <Leaf className="w-5 h-5 text-[#0B4632]" />;
      case 'Recycle': return <Recycle className="w-5 h-5 text-[#E67E22]" />;
      case 'Dna': return <Dna className="w-5 h-5 text-purple-600" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-[#E67E22]" />;
      case 'Handshake': return <Handshake className="w-5 h-5 text-[#0D9488]" />;
      default: return <Zap className="w-5 h-5 text-[#E67E22]" />;
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
    <section id="themes" className="py-20 bg-[#fff8f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Stitch Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#0D9488] font-heading font-bold text-xs uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E67E22]" />
              <span>Research Call &amp; Peer-Review Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#002e1f] tracking-tight font-display-hero">
              Conference Scientific Tracks
            </h2>
            <p className="text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
              Original research papers, review articles, and scientific poster submissions are invited across 10 curated technological thrust areas.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-[#002e1f] text-white shadow-sm font-bold'
                    : 'bg-[#f4ece8] text-stone-700 hover:bg-[#86f2e4] hover:text-[#00201d]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 10 Focus Areas Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAreas.map((area) => (
            <div
              key={area.id}
              onClick={() => setActiveModalArea(area)}
              className="bg-white rounded-2xl p-6 border border-stone-200 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#D1FAE5] border border-emerald-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(area.iconName)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#FEF3C7] text-[#713700] text-[10px] font-bold uppercase tracking-wider">
                    Track {area.number}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#002e1f] group-hover:text-[#0D9488] transition-colors font-heading mb-2">
                  {area.title}
                </h3>

                <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-[#0D9488] group-hover:text-[#002e1f] transition-colors">
                <span>View Scope &amp; Topics</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Callout Banner at bottom of tracks */}
        <div className="mt-12 text-center bg-white p-6 rounded-2xl border border-stone-200 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-left">
            <h4 className="text-sm font-bold text-[#002e1f]">Have research matching these scientific tracks?</h4>
            <p className="text-xs text-stone-500 mt-0.5">Submit your 300-word abstract online before Oct 4, 2026.</p>
          </div>
          <button
            onClick={onOpenAbstractModal}
            className="whitespace-nowrap px-6 py-3 rounded-lg text-xs font-bold text-white bg-[#002e1f] hover:bg-[#0E5A40] shadow-md uppercase tracking-wider transition-all"
          >
            Submit Abstract
          </button>
        </div>

      </div>

      {/* Detail Modal */}
      {activeModalArea && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/40 backdrop-blur-md animate-in fade-in">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full border border-stone-300 shadow-2xl relative">
            <button
              onClick={() => setActiveModalArea(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-stone-400 hover:text-stone-900 hover:bg-stone-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#D1FAE5] border border-emerald-200 flex items-center justify-center">
                {getIcon(activeModalArea.iconName)}
              </div>
              <div>
                <span className="text-xs font-bold text-[#E67E22] uppercase tracking-wider font-heading">
                  Track {activeModalArea.number} Scope
                </span>
                <h3 className="text-lg font-bold text-[#002e1f] font-heading">
                  {activeModalArea.title}
                </h3>
              </div>
            </div>

            <div className="space-y-4 my-4">
              <p className="text-sm text-stone-700 leading-relaxed">
                {activeModalArea.description}
              </p>

              <div className="bg-[#fff8f5] p-4 rounded-xl border border-stone-200">
                <h4 className="text-xs font-semibold text-stone-600 mb-2">Scope &amp; Abstract Topics:</h4>
                <ul className="space-y-1.5 text-xs text-stone-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] flex-shrink-0" />
                    Original experimental &amp; applied engineering research
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] flex-shrink-0" />
                    Emerging industrial applications &amp; pilot scale studies
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] flex-shrink-0" />
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
                className="px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-[#002e1f] hover:bg-[#0E5A40] shadow-md uppercase tracking-wider"
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
