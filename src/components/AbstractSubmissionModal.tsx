import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, ExternalLink, FileText, Image, Presentation } from 'lucide-react';
import { ABSTRACT_GUIDELINES, ORAL_PRESENTATION_GUIDELINES, CONFERENCE_INFO } from '../data/conferenceData';

interface AbstractSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AbstractSubmissionModal: React.FC<AbstractSubmissionModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'abstract' | 'oral' | 'poster'>('abstract');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3A0512]/50 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div className="bg-[#FAF6F0] rounded-2xl p-6 sm:p-8 max-w-2xl w-full border border-[#E8DEC8] shadow-2xl relative my-8 flex flex-col justify-between text-[#2C070F]">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#E8DEC8] pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] border border-[#E8DEC8] flex items-center justify-center text-[#580B1E] shrink-0">
              <FileText className="w-5 h-5 text-[#6B0F24]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#580B1E] font-heading">
                Presentation Guidelines &amp; Submissions
              </h2>
              <p className="text-xs text-[#52373D]">
                Abstract Deadline: <span className="text-[#E67E22] font-semibold">October 4, 2026</span> • Scopus Indexed Proceedings
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-[#580B1E] hover:bg-[#F5EFE6] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher: Abstract vs Oral vs Poster */}
        <div className="flex items-center gap-1.5 bg-[#F5EFE6] p-1 rounded-xl mb-4 border border-[#E8DEC8]">
          <button
            onClick={() => setActiveTab('abstract')}
            className={`flex-1 py-2 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
              activeTab === 'abstract'
                ? 'bg-[#580B1E] text-white shadow-xs'
                : 'text-[#52373D] hover:text-[#580B1E]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="truncate">Abstract</span>
          </button>
          <button
            onClick={() => setActiveTab('oral')}
            className={`flex-1 py-2 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
              activeTab === 'oral'
                ? 'bg-[#580B1E] text-white shadow-xs'
                : 'text-[#52373D] hover:text-[#580B1E]'
            }`}
          >
            <Presentation className="w-3.5 h-3.5" />
            <span className="truncate">Oral Talk</span>
          </button>
          <button
            onClick={() => setActiveTab('poster')}
            className={`flex-1 py-2 px-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
              activeTab === 'poster'
                ? 'bg-[#580B1E] text-white shadow-xs'
                : 'text-[#52373D] hover:text-[#580B1E]'
            }`}
          >
            <Image className="w-3.5 h-3.5" />
            <span className="truncate">Poster</span>
          </button>
        </div>

        {/* Tab 1: Abstract Guidelines */}
        {activeTab === 'abstract' && (
          <div className="space-y-4 my-2">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#FDFBF7] p-3.5 rounded-xl border border-[#E8DEC8] text-center">
                <span className="text-[10px] uppercase text-[#52373D] font-bold block mb-1 font-heading">Maximum Word Limit</span>
                <span className="text-lg font-bold text-[#580B1E] font-serif-editorial">300 Words</span>
              </div>
              <div className="bg-[#FDFBF7] p-3.5 rounded-xl border border-[#E8DEC8] text-center">
                <span className="text-[10px] uppercase text-[#52373D] font-bold block mb-1 font-heading">Font &amp; Format Standard</span>
                <span className="text-lg font-bold text-[#580B1E] font-serif-editorial">Times New Roman 12pt</span>
              </div>
            </div>

            <div className="bg-[#FDFBF7] p-4.5 rounded-xl border border-[#E8DEC8]">
              <h4 className="text-xs font-bold text-[#580B1E] mb-3 uppercase tracking-wider">Technical Submission Requirements:</h4>
              <ul className="space-y-2.5 text-xs text-[#52373D]">
                {ABSTRACT_GUIDELINES.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6B0F24] flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F5EFE6] p-3.5 rounded-xl border border-[#E8DEC8] text-xs text-[#580B1E] flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#E67E22] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Official Channel:</strong> Abstract submissions and registration forms must be submitted through the official Google Form before <strong>October 4, 2026</strong>.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Oral Presentation Guidelines */}
        {activeTab === 'oral' && (
          <div className="space-y-4 my-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-[#FDFBF7] p-3 rounded-xl border border-[#E8DEC8] text-center">
                <span className="text-[10px] uppercase text-[#52373D] font-bold block mb-0.5">Presentation Time</span>
                <span className="text-xs font-bold text-[#580B1E]">{ORAL_PRESENTATION_GUIDELINES.duration}</span>
              </div>
              <div className="bg-[#FDFBF7] p-3 rounded-xl border border-[#E8DEC8] text-center">
                <span className="text-[10px] uppercase text-[#52373D] font-bold block mb-0.5 font-heading">Recommended Slides</span>
                <span className="text-xs font-bold text-[#580B1E]">{ORAL_PRESENTATION_GUIDELINES.slidesCount}</span>
              </div>
              <div className="bg-[#FDFBF7] p-3 rounded-xl border border-[#E8DEC8] text-center col-span-2 sm:col-span-1">
                <span className="text-[10px] uppercase text-[#52373D] font-bold block mb-0.5 font-heading">Reporting Time</span>
                <span className="text-xs font-bold text-[#580B1E]">{ORAL_PRESENTATION_GUIDELINES.reportingTime}</span>
              </div>
            </div>

            <div className="bg-[#FDFBF7] p-4.5 rounded-xl border border-[#E8DEC8]">
              <h4 className="text-xs font-bold text-[#580B1E] mb-3 uppercase tracking-wider">Oral Presentation Standards:</h4>
              <ul className="space-y-2.5 text-xs text-[#52373D]">
                {ORAL_PRESENTATION_GUIDELINES.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6B0F24] flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Tab 3: Poster Presentation Guidelines (From Official Document) */}
        {activeTab === 'poster' && (
          <div className="space-y-4 my-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-[#FDFBF7] p-3 rounded-xl border border-[#E8DEC8] text-center">
                <span className="text-[10px] uppercase text-[#52373D] font-bold block mb-0.5">Orientation</span>
                <span className="text-xs font-bold text-[#580B1E]">Portrait (Vertical)</span>
              </div>
              <div className="bg-[#FDFBF7] p-3 rounded-xl border border-[#E8DEC8] text-center">
                <span className="text-[10px] uppercase text-[#52373D] font-bold block mb-0.5">Dimensions</span>
                <span className="text-xs font-bold text-[#580B1E]">30" × 42" (75 × 105 cm)</span>
              </div>
              <div className="bg-[#FDFBF7] p-3 rounded-xl border border-[#E8DEC8] text-center col-span-2 sm:col-span-1">
                <span className="text-[10px] uppercase text-[#52373D] font-bold block mb-0.5">Outer Margins</span>
                <span className="text-xs font-bold text-[#580B1E]">Min 1 inch (2.5 cm)</span>
              </div>
            </div>

            <div className="bg-[#FDFBF7] p-4 rounded-xl border border-[#E8DEC8]">
              <h4 className="text-xs font-bold text-[#580B1E] mb-2 uppercase tracking-wider">Typography &amp; Readability (1–2 Meters Legibility):</h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-[#52373D]">
                <div>• Title: <strong>72–120 pt</strong> (Bold)</div>
                <div>• Author &amp; Affiliation: <strong>36–48 pt</strong></div>
                <div>• Section Headings: <strong>40–60 pt</strong></div>
                <div>• Body Text: <strong>24–32 pt</strong></div>
                <div>• Captions &amp; References: <strong>16–20 pt</strong></div>
                <div>• Font: <strong>Times New Roman / Arial</strong></div>
              </div>
            </div>

            <div className="bg-[#FDFBF7] p-4 rounded-xl border border-[#E8DEC8]">
              <h4 className="text-xs font-bold text-[#580B1E] mb-2 uppercase tracking-wider">Content &amp; On-Site Mounting:</h4>
              <ul className="space-y-1.5 text-xs text-[#52373D]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6B0F24] shrink-0 mt-0.5" />
                  <span>Structure into: Introduction, Methodology, Key Results, Discussion/Conclusions, References.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6B0F24] shrink-0 mt-0.5" />
                  <span>Prioritize high-resolution graphs, schematics &amp; summary tables over dense paragraphs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6B0F24] shrink-0 mt-0.5" />
                  <span>Pushpins/mounting tape provided at assigned board number. Arrive 15 mins prior to hang poster.</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#E8DEC8] flex flex-wrap items-center justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-500 hover:text-[#580B1E]"
          >
            Close
          </button>

          <a
            href={CONFERENCE_INFO.abstractFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold bg-[#580B1E] hover:bg-[#6B0F24] text-white uppercase tracking-wider shadow-md"
          >
            <span>Proceed to Google Form</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
          </a>
        </div>

      </div>
    </div>
  );
};
