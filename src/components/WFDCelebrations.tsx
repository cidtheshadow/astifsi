import React from 'react';
import { 
  Utensils, Presentation, HelpCircle, Palette, Sparkles, Calendar, Clock, MapPin, 
  Phone, CheckCircle2, Award
} from 'lucide-react';
import { WFD_CELEBRATIONS_DATA } from '../data/conferenceData';

export const WFDCelebrations: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils': return <Utensils className="w-5 h-5 text-amber-700" />;
      case 'Presentation': return <Presentation className="w-5 h-5 text-teal-700" />;
      case 'HelpCircle': return <HelpCircle className="w-5 h-5 text-indigo-600" />;
      case 'Palette': return <Palette className="w-5 h-5 text-rose-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-orange-600" />;
      default: return <Award className="w-5 h-5 text-amber-700" />;
    }
  };

  return (
    <section id="wfd" className="py-20 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-300">
            Special Student Events &amp; Workshop
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-stone-950 mt-4 font-serif-editorial">
            World Food Day <span className="italic text-emerald-700">2026 Celebrations</span>
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3">
            Theme: <strong className="text-stone-900 font-semibold">“Innovate Today. Nourish Tomorrow”</strong> • Organized by FET Department &amp; AFSTI Longowal Chapter.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-emerald-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* WFD Event Meta Header Banner */}
        <div className="pastel-gradient-card rounded-2xl p-6 sm:p-8 mb-14 border border-stone-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            
            <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-stone-200 shadow-2xs">
              <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-stone-400 uppercase block">Event Dates</span>
                <span className="text-xs font-bold text-stone-900 font-heading">{WFD_CELEBRATIONS_DATA.dates}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-stone-200 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-teal-100 flex items-center justify-center text-teal-800 shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-stone-400 uppercase block">Timing</span>
                <span className="text-xs font-bold text-stone-900 font-heading">{WFD_CELEBRATIONS_DATA.time}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-stone-200 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-stone-400 uppercase block">Venue</span>
                <span className="text-xs font-bold text-stone-900 font-heading">{WFD_CELEBRATIONS_DATA.venue}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-orange-300 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center text-[#E86024] shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-stone-400 uppercase block">Reg. Deadline</span>
                <span className="text-xs font-bold text-[#E86024] font-heading">{WFD_CELEBRATIONS_DATA.registrationDeadline}</span>
              </div>
            </div>

            

          </div>
        </div>

        {/* 6 WFD Competitions & Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {WFD_CELEBRATIONS_DATA.events.map((event: any, idx: number) => (
            <div
              key={idx}
              className="editorial-card rounded-2xl p-6 border border-stone-200 shadow-xs flex flex-col justify-between bg-white hover:border-amber-400 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center">
                    {getIcon(event.iconName)}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                    Event 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 font-heading mb-1">
                  {event.title}
                </h3>
                <p className="text-xs font-semibold text-amber-800 mb-4 italic">
                  “{event.tagline}”
                </p>

                {/* Event Image if available */}
                {event.image && (
                  <div className="mb-4 rounded-2xl overflow-hidden border border-stone-200 shadow-xs">
                    <img src={event.image} alt={event.title} className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500" />
                  </div>
                )}

                {/* Highlights List */}
                <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 mb-4">
                  <h4 className="text-[11px] font-bold text-stone-600 mb-2 uppercase tracking-wider">Key Highlights:</h4>
                  <ul className="space-y-2 text-xs text-stone-700">
                    {event.highlights.map((hl: string, hIdx: number) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Student Coordinator Details */}
              {event.overallCoordinators ? (
                <div className="pt-3 border-t border-stone-200 space-y-2">
                  <span className="text-xs font-bold text-stone-900 block">Overall Student Coordinators:</span>
                  <div className="space-y-1 text-xs">
                    {event.overallCoordinators.map((coord: any, cIdx: number) => (
                      <div key={cIdx} className="flex items-center justify-between">
                        <span className="font-semibold text-stone-800">{coord.name} <span className="text-stone-400">({coord.designation})</span></span>
                        <a href={`tel:${coord.phone.replace(/[^0-9]/g, '')}`} className="font-bold text-amber-800 hover:underline">
                          +91 {coord.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="pt-3 border-t border-stone-200 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-stone-900">Coordinator:</span>
                    <span className="font-semibold text-amber-800">{event.coordinator}</span>
                  </div>

                  {event.phone && (
                    <a
                      href={`tel:${event.phone.replace(/[^0-9]/g, '')}`}
                      className="flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>+91 {event.phone}</span>
                    </a>
                  )}

                  {event.members && (
                    <div className="text-[11px] text-stone-500 pt-1">
                      <strong className="text-stone-700">Committee Members:</strong> {event.members.join(', ')}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

              </div>
    </section>
  );
};
