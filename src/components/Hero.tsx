import React from 'react';
import { Calendar, MapPin, Sparkles, Send, Video, FileCheck, Layers, CreditCard } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

interface HeroProps {
  onOpenAbstractModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAbstractModal }) => {
  return (
    <section className="relative pt-24 sm:pt-28 pb-12 overflow-hidden bg-[#FAF8F5]">
      
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-emerald-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          
          {/* Left Column (7 Cols): Headline, Theme, CTAs */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Top Occasion Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-100/90 text-amber-900 border border-amber-300 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>AFST(I), Mysuru Sponsored Flagship Conference</span>
            </div>

            {/* Headline with clean inline accent badge */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-950 tracking-tight leading-tight font-serif-editorial">
              National <span className="inline-flex items-center gap-1 font-sans text-amber-900 bg-amber-100/90 px-3 py-1 rounded-2xl border border-amber-300 text-2xl font-bold align-middle mx-1 shadow-2xs">🌾 Food</span> Conference{' '}
              <span className="font-heading text-[#E86024] font-black tracking-normal ml-1">2026</span>
            </h1>

            {/* Theme Sub-heading */}
            <div className="pt-1">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-800 block mb-1">
                Conference Theme
              </span>
              <p className="text-2xl sm:text-3xl font-bold text-stone-800 font-serif-editorial italic">
                “Innovate Today. Nourish Tomorrow”
              </p>
            </div>

            {/* Description Text */}
            <p className="text-xs sm:text-sm text-stone-600 max-w-xl leading-relaxed">
              Jointly organised by <strong className="text-stone-900 font-semibold">AFST- Longowal Chapter</strong> &amp; <strong className="text-stone-900 font-semibold">Department of Food Engineering and Technology</strong>, Sant Longowal Institute of Engineering and Technology (SLIET), Longowal, Punjab.
            </p>

            {/* Key Event Meta (Dates & Venue Pills) */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-stone-700 pt-1">
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-stone-200 shadow-xs">
                <Calendar className="w-4 h-4 text-amber-600" />
                <span>15–16 October 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-stone-200 shadow-xs">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>SLIET, Longowal, Punjab (Hybrid Mode)</span>
              </div>
            </div>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenAbstractModal}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-bold bg-[#E86024] hover:bg-[#d4521a] text-white shadow-md shadow-orange-500/20 transition-all transform hover:-translate-y-0.5 tracking-wider uppercase"
              >
                <Send className="w-4 h-4" />
                Submit Abstract (Oct 4)
              </button>

              <a
                href="#registration"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold bg-white hover:bg-stone-100 text-stone-900 border border-stone-300 shadow-xs transition-all tracking-wider uppercase"
              >
                <CreditCard className="w-4 h-4 text-amber-700" />
                <span>Fees &amp; Registration</span>
              </a>
            </div>

          </div>

          {/* Right Column (5 Cols): Floating Visual Composition & Countdown */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Visual Floating Container */}
            <div className="w-full max-w-md relative space-y-4">
              
              {/* Countdown Card Floating in Hero */}
              <div className="animate-float-soft">
                <CountdownTimer />
              </div>

              {/* Floating Technical Sessions Summary Badge */}
              <div className="editorial-card rounded-2xl p-4 border border-stone-200 shadow-sm flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-stone-900 font-heading">3 Oral Technical Sessions + 1 Poster Session</h4>
                    <p className="text-[11px] text-stone-500">Hybrid In-Person &amp; Virtual Presentations</p>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-full uppercase border border-amber-300 shrink-0">
                  Hybrid
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Feature Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch pt-2">
          
          {/* Card 1 */}
          <div className="md:col-span-4 editorial-card rounded-2xl p-5 border border-stone-200/80 hover:border-amber-400/40 transition-colors flex items-start gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-700 shrink-0">
              <FileCheck className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-stone-900 font-heading mb-0.5">
                Abstract Submission Deadline: Oct 4, 2026
              </h3>
              <p className="text-[11px] text-stone-500 leading-relaxed">
                Submit original research up to 300 words. Intimation of acceptance on Oct 5, 2026.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="md:col-span-4 editorial-card rounded-2xl p-5 border border-stone-200/80 hover:border-amber-400/40 transition-colors flex items-start gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-700 shrink-0">
              <Layers className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-stone-900 font-heading mb-0.5">
                3 Oral Sessions &amp; 1 Poster Session
              </h3>
              <p className="text-[11px] text-stone-500 leading-relaxed">
                Structured oral &amp; poster presentation tracks evaluated by an expert jury.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="md:col-span-4 pastel-gradient-card rounded-2xl p-5 flex flex-col justify-center text-center shadow-2xs">
            <h3 className="text-xl sm:text-2xl font-bold text-stone-950 font-serif-editorial leading-tight">
              Innovate Today. <br /> Nourish Tomorrow.
            </h3>
            <p className="text-[11px] text-stone-600 mt-1.5 font-medium">
              15–16 October 2026 • SLIET Longowal, Punjab
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
