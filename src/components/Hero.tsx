import React from 'react';
import { Calendar, MapPin, Send, Video, FileCheck, Layers, CreditCard } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

interface HeroProps {
  onOpenAbstractModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAbstractModal }) => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 overflow-hidden bg-gradient-to-b from-[#FDFBF7] via-[#FAF6F0] to-[#F5EFE6]">
      
      {/* Ambient Maroon & Gold Glow Accents */}
      <div className="pointer-events-none absolute -top-40 -left-32 w-96 h-96 rounded-full bg-[#6B0F24]/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-[#D4AF37]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-[42rem] h-64 rounded-full bg-[#E67E22]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          
          {/* Left Column (7 Cols): Eyebrow, Headline, Theme, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Eyebrow Pill & Organizer Logos */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#580B1E] text-white border border-[#6B0F24] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
                <span>AFST(I), Mysuru Sponsored Flagship Conclave</span>
              </div>

              <div className="flex items-center gap-2.5 bg-white px-3.5 py-1.5 rounded-xl border border-[#E8DEC8] shadow-2xs">
                <img src="/logos/sliet-logo.jpeg" alt="SLIET Logo" className="h-9 sm:h-10 w-auto rounded-md object-contain" />
                <span className="text-xs font-bold text-stone-300">•</span>
                <img src="/logos/afsti-longowal-logo.jpeg" alt="AFSTI Longowal" className="h-9 sm:h-10 w-auto rounded-md object-contain" />
                <span className="text-xs font-bold text-stone-300">•</span>
                <img src="/logos/afsti-mysuru-logo.jpeg" alt="AFSTI Mysuru" className="h-9 sm:h-10 w-auto rounded-md object-contain" />
              </div>
            </div>

            {/* Headline with Playfair Display / Editorial Serif accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#580B1E] tracking-tight leading-tight font-display-hero">
              National <span className="inline-flex items-center gap-1 font-heading text-[#580B1E] bg-[#F5EFE6] px-3 py-1 rounded-2xl border border-[#E8DEC8] text-2xl font-bold align-middle mx-1 shadow-2xs">🌾 Food</span> Conference{' '}
              <span className="font-heading text-[#E67E22] font-black tracking-normal ml-1">2026</span>
            </h1>

            {/* Theme Sub-heading */}
            <div className="pt-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#6B0F24] block mb-1 font-heading">
                Conference Theme
              </span>
              <p className="text-2xl sm:text-3xl font-bold text-[#580B1E] font-serif-editorial italic">
                “Innovate Today. Nourish Tomorrow”
              </p>
            </div>

            {/* Description Text */}
            <p className="text-xs sm:text-sm text-[#52373D] max-w-xl leading-relaxed">
              Jointly organised by <strong className="text-[#580B1E] font-semibold">AFSTI Longowal Chapter</strong> &amp; <strong className="text-[#580B1E] font-semibold">Department of Food Engineering and Technology</strong>, Sant Longowal Institute of Engineering and Technology (SLIET), Longowal, Punjab.
            </p>

            {/* Key Event Meta (Dates & Venue Pills) */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-stone-700 pt-1">
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-[#E8DEC8] shadow-2xs">
                <Calendar className="w-4 h-4 text-[#E67E22]" />
                <span className="font-heading font-bold text-[#580B1E]">15–16 October 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-[#E8DEC8] shadow-2xs">
                <MapPin className="w-4 h-4 text-[#6B0F24]" />
                <span className="font-heading font-bold text-[#580B1E]">SLIET, Longowal, Punjab (Hybrid Mode)</span>
              </div>
            </div>

            {/* CTAs Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenAbstractModal}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-xs font-bold text-white bg-[#580B1E] hover:bg-[#6B0F24] shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider cursor-pointer border border-[#6B0F24]"
              >
                <Send className="w-4 h-4 text-[#D4AF37]" />
                <span>Submit Abstract (Oct 4)</span>
                <span className="ml-1.5 px-2 py-0.5 rounded-full bg-[#F5EFE6] text-[#580B1E] text-[10px] font-extrabold uppercase border border-[#E8DEC8]">
                  Early Bird
                </span>
              </button>

              <a
                href="#registration"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#F5EFE6] text-[#580B1E] font-bold text-xs hover:bg-[#E8DEC8] transition-all duration-200 uppercase tracking-wider border border-[#E8DEC8]"
              >
                <CreditCard className="w-4 h-4 text-[#E67E22]" />
                <span>Fees &amp; Registration</span>
              </a>
            </div>

          </div>

          {/* Right Column (5 Cols): Dual Countdown Timer & Floating Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="w-full max-w-md relative space-y-4">
              
              {/* Dual Countdown Timer Card */}
              <div className="animate-float-soft">
                <CountdownTimer />
              </div>

              {/* Technical Sessions Summary Pill */}
              <div className="bg-white rounded-2xl p-4 border border-[#E8DEC8] shadow-xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#580B1E] shrink-0">
                    <Video className="w-5 h-5 text-[#6B0F24]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#580B1E] font-heading">3 Oral Technical Sessions + 1 Poster Session</h4>
                    <p className="text-[11px] text-[#52373D] font-medium">Hybrid- In-Person &amp; Virtual Presentations</p>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-[#580B1E] bg-[#F5EFE6] px-2.5 py-1 rounded-full uppercase border border-[#E8DEC8] shrink-0">
                  Hybrid
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Feature Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch pt-2">
          
          {/* Card 1 */}
          <div className="md:col-span-4 bg-white rounded-2xl p-5 border border-[#E8DEC8] hover:border-[#6B0F24]/40 transition-colors flex items-start gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] flex items-center justify-center shrink-0 border border-[#E8DEC8]">
              <FileCheck className="w-5 h-5 text-[#E67E22]" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#580B1E] font-heading mb-0.5">
                Abstract Submission Deadline: Oct 4, 2026
              </h3>
              <p className="text-[11px] text-[#52373D] leading-relaxed">
                Submit original research up to 300 words. Intimation of acceptance on Oct 5, 2026.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="md:col-span-4 bg-white rounded-2xl p-5 border border-[#E8DEC8] hover:border-[#6B0F24]/40 transition-colors flex items-start gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] flex items-center justify-center shrink-0 border border-[#E8DEC8]">
              <Layers className="w-5 h-5 text-[#6B0F24]" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#580B1E] font-heading mb-0.5">
                3 Oral Sessions &amp; 1 Poster Session
              </h3>
              <p className="text-[11px] text-[#52373D] leading-relaxed">
                Structured oral &amp; poster presentation sessions evaluated by an expert jury.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="md:col-span-4 bg-gradient-to-r from-[#580B1E] via-[#6B0F24] to-[#420815] text-white rounded-2xl p-5 flex flex-col justify-center text-center shadow-xs border border-[#6B0F24]">
            <h3 className="text-xl sm:text-2xl font-bold font-serif-editorial leading-tight">
              Innovate Today. <br /> Nourish Tomorrow.
            </h3>
            <p className="text-[11px] text-[#E2B8C2] mt-1.5 font-medium">
              15–16 October 2026 • SLIET Longowal, Punjab
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
