import React from 'react';
import { Calendar, MapPin, Send, Video, FileCheck, Layers, CreditCard } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

interface HeroProps {
  onOpenAbstractModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAbstractModal }) => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#fff8f5] to-[#faf2ee]">
      
      {/* Ambient Bio-Botanical Background Glows (Stitch Design) */}
      <div className="pointer-events-none absolute -top-40 -left-32 w-96 h-96 rounded-full bg-[#D1FAE5]/50 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-[#FEF3C7]/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-[42rem] h-64 rounded-full bg-[#86f2e4]/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          
          {/* Left Column (7 Cols): Eyebrow, Headline, Theme, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Eyebrow Pill & Organizer Logos */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#D1FAE5] text-[#002e1f] border border-emerald-300 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-ping" />
                <span>AFST(I), Mysuru Sponsored Flagship Conclave</span>
              </div>

              <div className="flex items-center gap-2.5 bg-white px-3.5 py-1.5 rounded-xl border border-stone-200 shadow-2xs">
                <img src="/logos/sliet-logo.jpeg" alt="SLIET Logo" className="h-9 sm:h-10 w-auto rounded-md object-contain" />
                <span className="text-xs font-bold text-stone-300">•</span>
                <img src="/logos/afsti-longowal-logo.jpeg" alt="AFSTI Longowal" className="h-9 sm:h-10 w-auto rounded-md object-contain" />
                <span className="text-xs font-bold text-stone-300">•</span>
                <img src="/logos/afsti-mysuru-logo.jpeg" alt="AFSTI Mysuru" className="h-9 sm:h-10 w-auto rounded-md object-contain" />
              </div>
            </div>

            {/* Headline with Playfair Display / Editorial Serif accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#002e1f] tracking-tight leading-tight font-display-hero">
              National <span className="inline-flex items-center gap-1 font-heading text-[#002e1f] bg-[#FEF3C7] px-3 py-1 rounded-2xl border border-amber-300 text-2xl font-bold align-middle mx-1 shadow-2xs">🌾 Food</span> Conference{' '}
              <span className="font-heading text-[#E67E22] font-black tracking-normal ml-1">2026</span>
            </h1>

            {/* Theme Sub-heading */}
            <div className="pt-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488] block mb-1">
                Conference Theme
              </span>
              <p className="text-2xl sm:text-3xl font-bold text-[#002e1f] font-serif-editorial italic">
                “Innovate Today. Nourish Tomorrow”
              </p>
            </div>

            {/* Description Text */}
            <p className="text-xs sm:text-sm text-stone-600 max-w-xl leading-relaxed">
              Jointly organised by <strong className="text-[#002e1f] font-semibold">AFSTI Longowal Chapter</strong> &amp; <strong className="text-[#002e1f] font-semibold">Department of Food Engineering and Technology</strong>, Sant Longowal Institute of Engineering and Technology (SLIET), Longowal, Punjab.
            </p>

            {/* Key Event Meta (Dates & Venue Pills) */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-stone-700 pt-1">
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-stone-200 shadow-2xs">
                <Calendar className="w-4 h-4 text-[#E67E22]" />
                <span className="font-heading font-bold text-stone-900">15–16 October 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-stone-200 shadow-2xs">
                <MapPin className="w-4 h-4 text-[#0D9488]" />
                <span className="font-heading font-bold text-stone-900">SLIET, Longowal, Punjab (Hybrid Mode)</span>
              </div>
            </div>

            {/* CTAs Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenAbstractModal}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-xs font-bold text-white bg-[#002e1f] hover:bg-[#0E5A40] shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
              >
                <Send className="w-4 h-4 text-[#E67E22]" />
                <span>Submit Abstract (Oct 4)</span>
                <span className="ml-1.5 px-2 py-0.5 rounded-full bg-[#FEF3C7] text-[#713700] text-[10px] font-extrabold uppercase">
                  Early Bird
                </span>
              </button>

              <a
                href="#registration"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#f4ece8] text-[#0D9488] font-bold text-xs hover:bg-[#86f2e4] hover:text-[#00201d] transition-all duration-200 uppercase tracking-wider border border-stone-200"
              >
                <CreditCard className="w-4 h-4" />
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
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-stone-200 shadow-xs flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#D1FAE5] flex items-center justify-center text-[#0B4632] shrink-0">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900 font-heading">3 Oral Technical Sessions + 1 Poster Session</h4>
                    <p className="text-[11px] text-stone-600 font-medium">Hybrid- In-Person &amp; Virtual Presentations</p>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-[#713700] bg-[#FEF3C7] px-2.5 py-1 rounded-full uppercase border border-amber-300 shrink-0">
                  Hybrid
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Feature Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch pt-2">
          
          {/* Card 1 */}
          <div className="md:col-span-4 bg-white/90 rounded-2xl p-5 border border-stone-200 hover:border-[#0D9488]/40 transition-colors flex items-start gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] flex items-center justify-center shrink-0">
              <FileCheck className="w-5 h-5 text-[#E67E22]" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#002e1f] font-heading mb-0.5">
                Abstract Submission Deadline: Oct 4, 2026
              </h3>
              <p className="text-[11px] text-stone-500 leading-relaxed">
                Submit original research up to 300 words. Intimation of acceptance on Oct 5, 2026.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="md:col-span-4 bg-white/90 rounded-2xl p-5 border border-stone-200 hover:border-[#0D9488]/40 transition-colors flex items-start gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-[#D1FAE5] flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5 text-[#0B4632]" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#002e1f] font-heading mb-0.5">
                3 Oral Sessions &amp; 1 Poster Session
              </h3>
              <p className="text-[11px] text-stone-500 leading-relaxed">
                Structured oral &amp; poster presentation sessions evaluated by an expert jury.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="md:col-span-4 bg-gradient-to-r from-[#0B4632] via-[#0E5A40] to-[#002e1f] text-white rounded-2xl p-5 flex flex-col justify-center text-center shadow-xs">
            <h3 className="text-xl sm:text-2xl font-bold font-serif-editorial leading-tight">
              Innovate Today. <br /> Nourish Tomorrow.
            </h3>
            <p className="text-[11px] text-emerald-200 mt-1.5 font-medium">
              15–16 October 2026 • SLIET Longowal, Punjab
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
