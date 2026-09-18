import React from 'react';
import { Clock, Send, Calendar, CheckCircle2 } from 'lucide-react';
import { IMPORTANT_DATES } from '../data/conferenceData';

interface ImportantDatesProps {
  onOpenAbstractModal: () => void;
}

export const ImportantDates: React.FC<ImportantDatesProps> = ({ onOpenAbstractModal }) => {
  return (
    <section id="deadlines" className="py-20 bg-[#faf2ee] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#D4AF37] font-heading font-bold text-xs uppercase tracking-wider mb-2">
              <Calendar className="w-4 h-4 text-[#E67E22]" />
              <span>Conclave Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#580B1E] tracking-tight font-display-hero">
              Important Dates &amp; Deadlines
            </h2>
            <p className="text-sm text-stone-600 mt-2 max-w-xl leading-relaxed">
              Mark your calendar for abstract submission, peer-review acceptance notification, and camera-ready manuscript deadlines.
            </p>
          </div>

          <div className="bg-white p-3.5 rounded-xl border border-stone-200 shadow-2xs flex items-center gap-3 shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#E67E22] animate-pulse shrink-0" />
            <span className="text-xs font-bold text-[#580B1E]">Abstract Submission Closes: October 4, 2026</span>
          </div>
        </div>

        {/* Stepper Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto relative">
          
          {IMPORTANT_DATES.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 border relative flex flex-col justify-between transition-all bg-white shadow-2xs ${
                item.isUrgent
                  ? 'border-[#E67E22] bg-gradient-to-b from-[#FEF3C7]/40 to-white shadow-md'
                  : 'border-stone-200 hover:border-stone-300'
              }`}
            >
              <div>
                {/* Step Number & Urgency Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#580B1E] font-display-hero">
                    0{idx + 1}
                  </span>

                  {item.isUrgent ? (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#713700] border border-amber-300">
                      Early Bird Active
                    </span>
                  ) : (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-orange-100 text-stone-600 border border-stone-200">
                      Milestone
                    </span>
                  )}
                </div>

                {/* Date Display */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#D1FAE5] text-[#580B1E] text-xs font-bold font-heading">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#580B1E] mb-2 font-heading">
                  {item.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Action for Urgent Step */}
              {item.isUrgent ? (
                <div className="pt-3 border-t border-amber-200">
                  <button
                    onClick={onOpenAbstractModal}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs font-bold bg-[#580B1E] text-white hover:bg-[#0E5A40] transition-colors uppercase tracking-wider shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5 text-[#E67E22]" />
                    <span>Submit Abstract Now</span>
                  </button>
                </div>
              ) : (
                <div className="pt-3 border-t border-orange-100 flex items-center gap-1.5 text-xs text-orange-500 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Official Schedule</span>
                </div>
              )}
            </div>
          ))}

        </div>

        {/* Date Reminder Note */}
        <div className="mt-12 text-center text-xs text-orange-500 flex items-center justify-center gap-2">
          <Clock className="w-4 h-4 text-[#D4AF37]" />
          <span>All submitted abstracts undergo double-blind peer review by the national scientific committee.</span>
        </div>

      </div>
    </section>
  );
};
