import React, { useState } from 'react';
import { 
  Utensils, Presentation, HelpCircle, Palette, Sparkles, Calendar, Clock, MapPin, 
  Phone, CheckCircle2, Award, ExternalLink, QrCode, BookOpen, Star, ArrowLeft
} from 'lucide-react';
import { WFD_CELEBRATIONS_DATA, CONFERENCE_INFO } from '../data/conferenceData';

interface WFDCelebrationsProps {
  onBackToHome?: () => void;
  isStandalonePage?: boolean;
}

export const WFDCelebrations: React.FC<WFDCelebrationsProps> = ({ onBackToHome, isStandalonePage = false }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-[#580B1E]" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-[#E67E22]" />;
      case 'Presentation': return <Presentation className="w-5 h-5 text-[#6B0F24]" />;
      case 'HelpCircle': return <HelpCircle className="w-5 h-5 text-[#8C1C36]" />;
      case 'Palette': return <Palette className="w-5 h-5 text-[#D4AF37]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#E67E22]" />;
      default: return <Award className="w-5 h-5 text-[#6B0F24]" />;
    }
  };

  return (
    <section id="wfd" className="py-20 bg-[#F5EFE6] relative overflow-hidden text-[#2C070F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Back Header if on Standalone Page */}
        {isStandalonePage && onBackToHome && (
          <div className="mb-8">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FAF6F0] border border-[#E8DEC8] text-xs font-bold text-[#580B1E] hover:bg-[#580B1E] hover:text-white transition-all cursor-pointer shadow-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Main Conference</span>
            </button>
          </div>
        )}
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#580B1E] bg-[#FAF6F0] border border-[#E8DEC8] mb-3 shadow-2xs">
            <Star className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Special Student Events &amp; Championships</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#580B1E] tracking-tight font-display-hero">
            World Food Day <span className="italic text-[#6B0F24]">2026 Celebrations</span>
          </h2>
          <p className="text-sm sm:text-base text-[#52373D] mt-3 leading-relaxed">
            Theme: <strong className="text-[#580B1E] font-semibold">“Innovate Today. Nourish Tomorrow”</strong> • Department of Food Engineering &amp; Technology, SLIET in association with AFSTI Longowal Chapter.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#E67E22] via-[#6B0F24] to-[#580B1E] mx-auto mt-4 rounded-full" />
        </div>

        {/* WFD Event Meta Header Banner */}
        <div className="bg-[#FAF6F0] rounded-2xl p-6 sm:p-8 mb-12 border border-[#E8DEC8] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
            
            <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-[#E8DEC8]">
              <div className="w-9 h-9 rounded-lg bg-[#F5EFE6] flex items-center justify-center text-[#E67E22] shrink-0 border border-[#E8DEC8]">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#52373D] uppercase block">Event Dates</span>
                <span className="text-xs font-bold text-[#580B1E] font-heading">{WFD_CELEBRATIONS_DATA.dates}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-[#E8DEC8]">
              <div className="w-9 h-9 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#6B0F24] shrink-0 border border-[#E8DEC8]">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#52373D] uppercase block">Timing</span>
                <span className="text-xs font-bold text-[#580B1E] font-heading">{WFD_CELEBRATIONS_DATA.time}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-[#E8DEC8]">
              <div className="w-9 h-9 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#580B1E] shrink-0 border border-[#E8DEC8]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#52373D] uppercase block">Venue</span>
                <span className="text-xs font-bold text-[#580B1E] font-heading">{WFD_CELEBRATIONS_DATA.venue}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-[#E8DEC8]">
              <div className="w-9 h-9 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#E67E22] shrink-0 border border-[#E8DEC8]">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#52373D] uppercase block">Reg. Deadline</span>
                <span className="text-xs font-bold text-[#E67E22] font-heading">{WFD_CELEBRATIONS_DATA.registrationDeadline}</span>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <a
                href={CONFERENCE_INFO.abstractFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-white bg-[#580B1E] hover:bg-[#6B0F24] shadow-md transition-all uppercase tracking-wider"
              >
                <QrCode className="w-4 h-4 text-[#D4AF37]" />
                <span>Register WFD</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

        {/* Interactive Event Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {WFD_CELEBRATIONS_DATA.events.map((event: any, idx: number) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`p-3.5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'bg-[#580B1E] text-white border-[#580B1E] shadow-md'
                    : 'bg-[#FAF6F0] text-[#2C070F] border-[#E8DEC8] hover:border-[#6B0F24]/40 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive ? 'bg-[#3D0714]' : 'bg-[#F5EFE6]'}`}>
                    {getIcon(event.iconName)}
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                    isActive ? 'bg-[#E67E22] text-white' : 'bg-[#F5EFE6] text-[#52373D]'
                  }`}>
                    0{idx + 1}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-xs leading-snug line-clamp-1">{event.title}</div>
                  <span className={`text-[10px] block mt-0.5 truncate ${isActive ? 'text-[#E2B8C2]' : 'text-orange-500'}`}>
                    {event.coordinator}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Event Highlight Showcase with Dynamic Image Update */}
        {(() => {
          const currentEvent = WFD_CELEBRATIONS_DATA.events[activeTab];
          return (
            <div className="bg-[#FAF6F0] rounded-2xl p-6 sm:p-8 border border-[#E8DEC8] shadow-md mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Left Side: Event Details & Highlights */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full bg-[#580B1E] text-white text-xs font-bold uppercase tracking-wider">
                        Event 0{activeTab + 1}
                      </span>
                      <span className="text-xs font-bold text-[#6B0F24] uppercase tracking-wider font-heading">
                        World Food Day 2026 Competition
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#580B1E] font-heading mb-2">
                      {currentEvent.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#E67E22] italic mb-6">
                      “{currentEvent.tagline}”
                    </p>

                    <div className="bg-[#FDFBF7] p-5 rounded-2xl border border-[#E8DEC8] mb-6">
                      <h4 className="text-xs font-bold text-[#580B1E] uppercase tracking-wider mb-3">Key Highlights &amp; Scope:</h4>
                      <ul className="space-y-2.5 text-xs text-[#52373D]">
                        {currentEvent.highlights.map((hl: string, hIdx: number) => (
                          <li key={hIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#6B0F24] shrink-0 mt-0.5" />
                            <span className="leading-relaxed font-medium">{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Coordinators & Contacts Footer */}
                  <div className="pt-4 border-t border-[#E8DEC8] flex flex-wrap items-center justify-between gap-4">
                    {currentEvent.overallCoordinators ? (
                      <div className="space-y-1 text-xs">
                        <span className="font-bold text-[#580B1E] block">Overall Student Coordinators:</span>
                        {currentEvent.overallCoordinators.map((coord: any, cIdx: number) => (
                          <div key={cIdx} className="flex items-center gap-3">
                            <span className="font-semibold text-[#2C070F]">{coord.name} ({coord.designation}):</span>
                            <a href={`tel:${coord.phone.replace(/[^0-9]/g, '')}`} className="font-bold text-[#6B0F24] hover:underline">
                              +91 {coord.phone}
                            </a>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-1 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#580B1E]">Event Coordinator:</span>
                          <span className="font-semibold text-[#E67E22]">{currentEvent.coordinator}</span>
                        </div>
                        {currentEvent.phone && (
                          <a href={`tel:${currentEvent.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-1 font-bold text-[#6B0F24] hover:underline">
                            <Phone className="w-3.5 h-3.5" />
                            <span>+91 {currentEvent.phone}</span>
                          </a>
                        )}
                        {currentEvent.members && (
                          <div className="text-[11px] text-[#52373D] pt-0.5">
                            <strong>Committee:</strong> {currentEvent.members.join(', ')}
                          </div>
                        )}
                      </div>
                    )}

                    <a
                      href={CONFERENCE_INFO.abstractFormUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#580B1E] hover:bg-[#6B0F24] shadow-md uppercase tracking-wider shrink-0"
                    >
                      <span>Register for Event</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>

                {/* Right Side: DYNAMIC poster image updated per active event tab */}
                <div className="lg:col-span-5 flex flex-col justify-between bg-[#FDFBF7] p-5 rounded-2xl border border-[#E8DEC8]">
                  <div className="relative overflow-hidden rounded-xl bg-white aspect-[4/3] flex items-center justify-center border border-[#E8DEC8]">
                    <img
                      key={activeTab}
                      src={currentEvent.image || "/wfd/guess-it-right.png"}
                      alt={currentEvent.title}
                      className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#580B1E]/95 text-white font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      Event 0{activeTab + 1} Flyer &amp; Notice
                    </div>
                  </div>

                  <div className="mt-4 pt-3 flex items-center justify-between text-xs">
                    <span className="text-[#52373D] font-medium">Evaluation &amp; Awards</span>
                    <span className="font-bold text-[#580B1E] bg-[#F5EFE6] px-3 py-1 rounded-md border border-[#E8DEC8]">Certificate &amp; Memento</span>
                  </div>
                </div>

              </div>
            </div>
          );
        })()}

        {/* Official Event Flyers Showcase at Bottom */}
        <div className="max-w-4xl mx-auto pt-6 border-t border-[#E8DEC8]">
          <div className="text-center mb-6">
            <a
              href={CONFERENCE_INFO.abstractFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs font-bold text-white bg-[#580B1E] hover:bg-[#6B0F24] shadow-md hover:scale-[1.02] transition-all uppercase tracking-wider"
            >
              <QrCode className="w-4 h-4 text-[#D4AF37]" />
              <span>Register for World Food Day Events</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FAF6F0] rounded-2xl p-4 border border-[#E8DEC8] shadow-2xs text-center">
              <span className="text-[10px] uppercase font-bold text-[#52373D] block mb-2 font-heading">Official WFD Event Flyer</span>
              <img src="/wfd/unofficial-poster.png" alt="WFD Event Poster" className="w-full h-auto rounded-xl object-contain shadow-2xs max-h-96 mx-auto" />
            </div>
            <div className="bg-[#FAF6F0] rounded-2xl p-4 border border-[#E8DEC8] shadow-2xs text-center">
              <span className="text-[10px] uppercase font-bold text-[#52373D] block mb-2 font-heading">Registration QR &amp; Portal</span>
              <img src="/wfd/scan-to-register.png" alt="Scan to Register" className="w-full h-auto rounded-xl object-contain shadow-2xs max-h-96 mx-auto" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
