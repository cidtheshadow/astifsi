import React from 'react';
import { Clock, Send } from 'lucide-react';
import { IMPORTANT_DATES } from '../data/conferenceData';

interface ImportantDatesProps {
  onOpenAbstractModal: () => void;
}

export const ImportantDates: React.FC<ImportantDatesProps> = ({ onOpenAbstractModal }) => {
  return (
    <section id="dates" className="py-20 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-300">
            Timeline &amp; Schedule
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-stone-950 mt-4 font-serif-editorial">
            Important <span className="italic text-amber-700">Submission Dates</span>
          </h2>
          <p className="text-sm text-stone-600 mt-3">
            Mark your calendar for abstract submission, peer-review acceptance, and manuscript deadlines.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-emerald-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Stepper Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative">
          
          {IMPORTANT_DATES.map((item, idx) => (
            <div
              key={idx}
              className={`editorial-card rounded-2xl p-6 border relative flex flex-col justify-between transition-all ${
                item.isUrgent
                  ? 'border-orange-400 bg-gradient-to-b from-amber-50/50 to-orange-50/30 shadow-md'
                  : 'border-stone-200 hover:border-stone-300'
              }`}
            >
              <div>
                {/* Step Number & Urgency Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full bg-white border border-stone-300 text-xs font-extrabold text-stone-800 flex items-center justify-center font-heading shadow-2xs">
                    0{idx + 1}
                  </span>

                  {item.isUrgent ? (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-300">
                      Urgent Deadline
                    </span>
                  ) : (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-300">
                      Milestone
                    </span>
                  )}
                </div>

                {/* Date Display */}
                <div className="mb-3">
                  <div className="text-xl sm:text-2xl font-bold text-stone-950 font-serif-editorial tracking-tight">
                    {item.date}
                  </div>
                </div>

                <h3 className="text-sm font-bold text-amber-800 mb-2 font-heading">
                  {item.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Action for Urgent Step */}
              {item.isUrgent && (
                <div className="pt-3 border-t border-orange-200">
                  <button
                    onClick={onOpenAbstractModal}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-bold bg-[#E86024] text-white hover:bg-[#d4521a] transition-colors uppercase tracking-wider shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Submit Abstract Now
                  </button>
                </div>
              )}
            </div>
          ))}

        </div>

        {/* Date Reminder Note */}
        <div className="mt-12 text-center text-xs text-stone-500 flex items-center justify-center gap-2">
          <Clock className="w-4 h-4 text-amber-600" />
          <span>All abstracts will undergo peer evaluation by the scientific review committee upon receipt.</span>
        </div>

      </div>
    </section>
  );
};
