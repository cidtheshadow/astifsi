import React from 'react';
import { X, CheckCircle2, AlertCircle, ExternalLink, FileText } from 'lucide-react';
import { ABSTRACT_GUIDELINES, CONFERENCE_INFO } from '../data/conferenceData';

interface AbstractSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AbstractSubmissionModal: React.FC<AbstractSubmissionModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/40 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div className="editorial-card rounded-2xl p-6 sm:p-8 max-w-2xl w-full border border-stone-300 shadow-2xl relative my-8 flex flex-col justify-between bg-white text-stone-900">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-stone-200 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-stone-900 font-heading">
                Abstract Submission Guidelines
              </h2>
              <p className="text-xs text-stone-500">
                Deadline: <span className="text-[#E86024] font-semibold">October 4, 2026</span> • Max {ABSTRACT_GUIDELINES.maxWords} Words
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

        {/* Content Body: Specifications & Guidelines */}
        <div className="space-y-4 my-2">
          
          {/* Specification Pills */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200 text-center">
              <span className="text-[10px] uppercase text-stone-500 font-bold block mb-1">Maximum Word Limit</span>
              <span className="text-lg font-bold text-amber-800 font-serif-editorial">300 Words</span>
            </div>
            <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200 text-center">
              <span className="text-[10px] uppercase text-stone-500 font-bold block mb-1">Font &amp; Format Standard</span>
              <span className="text-lg font-bold text-stone-900 font-serif-editorial">Times New Roman 12pt</span>
            </div>
          </div>

          {/* Submission Guidelines List */}
          <div className="bg-stone-50 p-4.5 rounded-xl border border-stone-200">
            <h4 className="text-xs font-bold text-stone-900 mb-3">Technical Submission Requirements:</h4>
            <ul className="space-y-2.5 text-xs text-stone-700">
              {ABSTRACT_GUIDELINES.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Channel Note */}
          <div className="bg-amber-50 p-3.5 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Official Channel:</strong> Abstract submissions and registration forms must be submitted through the official Google Form before <strong>October 4, 2026</strong>.
            </p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-500 hover:text-stone-900"
          >
            Close
          </button>

          <a
            href={CONFERENCE_INFO.abstractFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-[#E86024] hover:bg-[#d4521a] text-white uppercase tracking-wider shadow-sm"
          >
            <span>Proceed to Google Form</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
