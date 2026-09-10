import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, ExternalLink, Copy, Check, FileText, Sparkles } from 'lucide-react';
import { ABSTRACT_GUIDELINES, CONFERENCE_INFO } from '../data/conferenceData';

interface AbstractSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AbstractSubmissionModal: React.FC<AbstractSubmissionModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'guidelines' | 'playground'>('playground');
  
  // Playground state
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState('');
  const [affiliations, setAffiliations] = useState('');
  const [abstractText, setAbstractText] = useState('');
  const [keywords, setKeywords] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  // Word count calculation
  const countWords = (str: string) => {
    const trimmed = str.trim();
    return trimmed ? trimmed.split(/\s+/).length : 0;
  };

  const wordCount = countWords(abstractText);
  const maxWords = ABSTRACT_GUIDELINES.maxWords;

  const handleCopyDraft = () => {
    const fullDraft = `Title: ${title}\nAuthors: ${authors}\nAffiliations: ${affiliations}\n\nAbstract:\n${abstractText}\n\nKeywords: ${keywords}`;
    navigator.clipboard.writeText(fullDraft);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/40 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div className="editorial-card rounded-2xl p-6 sm:p-8 max-w-3xl w-full border border-stone-300 shadow-2xl relative my-8 max-h-[90vh] flex flex-col justify-between bg-white text-stone-900">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-stone-200 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-stone-900 font-heading">
                Abstract Submission Portal
              </h2>
              <p className="text-xs text-stone-500">
                Deadline: <span className="text-amber-700 font-semibold">September 30, 2026</span> • Max {maxWords} Words
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Nav Tabs */}
        <div className="flex items-center gap-2 bg-stone-100 p-1 rounded-xl mb-4 border border-stone-200">
          <button
            onClick={() => setActiveTab('playground')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'playground'
                ? 'bg-stone-950 text-white font-bold shadow-xs'
                : 'text-stone-600 hover:text-stone-950'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Abstract Word Checker &amp; Playground
          </button>
          <button
            onClick={() => setActiveTab('guidelines')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'guidelines'
                ? 'bg-stone-950 text-white font-bold shadow-xs'
                : 'text-stone-600 hover:text-stone-950'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            Submission Guidelines &amp; Specs
          </button>
        </div>

        {/* Tab 1: Interactive Word Checker & Drafter */}
        {activeTab === 'playground' && (
          <div className="space-y-3 overflow-y-auto pr-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                  Concise Bold Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ultrasonic-Assisted Bioactive Extraction..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                  Author Names &amp; Affiliations
                </label>
                <input
                  type="text"
                  placeholder="e.g. A. Kumar, S. Singh (Department of FET, SLIET)"
                  value={authors}
                  onChange={(e) => setAuthors(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Abstract Text Area with Word Count */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500">
                  Abstract Body Text (Times New Roman 12 pt formatting rules apply)
                </label>
                <div className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                  wordCount > maxWords
                    ? 'bg-rose-100 text-rose-800 border-rose-300'
                    : wordCount > 0
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    : 'bg-stone-100 text-stone-600 border-stone-300'
                }`}>
                  {wordCount} / {maxWords} Words
                </div>
              </div>

              <textarea
                rows={5}
                placeholder="Paste or type your abstract here to check word limit compliance..."
                value={abstractText}
                onChange={(e) => setAbstractText(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 font-serif leading-relaxed"
              />
              
              {wordCount > maxWords && (
                <p className="text-[11px] text-rose-600 flex items-center gap-1.5 mt-1 font-semibold">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Your abstract exceeds the maximum limit of {maxWords} words by {wordCount - maxWords} words. Please shorten before submitting.
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                  Institutional Affiliations
                </label>
                <input
                  type="text"
                  placeholder="e.g. SLIET Longowal, Punjab"
                  value={affiliations}
                  onChange={(e) => setAffiliations(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-1">
                  Keywords (3–5 Keywords)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Food Safety, Ultrasonic Extraction, Bioactives, High Pressure, Valorization"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Guidelines */}
        {activeTab === 'guidelines' && (
          <div className="space-y-4 my-2 overflow-y-auto pr-1">
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
              <h4 className="text-xs font-bold text-stone-900 mb-2">Technical Submission Requirements:</h4>
              <ul className="space-y-2 text-xs text-stone-700">
                {ABSTRACT_GUIDELINES.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-center">
                <span className="text-[10px] uppercase text-stone-500 font-semibold block">Maximum Word Count</span>
                <span className="text-lg font-bold text-amber-800 font-serif-editorial">300 Words</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200 text-center">
                <span className="text-[10px] uppercase text-stone-500 font-semibold block">Font Standard</span>
                <span className="text-lg font-bold text-stone-900 font-serif-editorial">Times New Roman 12pt</span>
              </div>
            </div>

            <div className="bg-amber-50 p-3.5 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <p>
                <strong>Submission Channel:</strong> All abstracts must be submitted via the official Google Form link before September 30, 2026. Submissions sent via raw email will not be recorded in the scientific review database.
              </p>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 mt-4">
          <button
            onClick={handleCopyDraft}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-stone-100 text-stone-700 hover:text-stone-900 border border-stone-300"
          >
            {isCopied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                Draft Copied!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copy Prepared Abstract
              </>
            )}
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-500 hover:text-stone-900"
            >
              Cancel
            </button>
            <a
              href={CONFERENCE_INFO.abstractFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[#E86024] hover:bg-[#d4521a] text-white uppercase tracking-wider shadow-sm"
            >
              <span>Submit via Google Form</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
