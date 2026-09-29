import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, AlertCircle, HelpCircle } from 'lucide-react';

const FAQ_DATA = [
  {
    category: "Author Guidelines",
    items: [
      {
        question: "1. Call for Research Papers",
        answer: "Researchers, faculty members, scientists, industry professionals, research scholars and students are invited to submit original research work for presentation at AFSTINFC-2026. The conference will provide opportunities for oral and poster presentations in both physical and online modes, subject to the final technical programme. Authors are requested to submit their abstracts according to the prescribed format and within the specified deadline."
      },
      {
        question: "2. Important Dates",
        answer: "Abstract Submission: 4 October 2026\nAbstract Acceptance / Intimation: 5 October 2026*\nRegistration: 7 October 2026\nPresentation Confirmation: After acceptance and registration\nDetailed Presentation Programme: One day before the conference\nConference: 15–16 October 2026\nAbstract Book: To be released electronically\n*The Organizing Committee may communicate acceptance/selection status through email/website as per the finalization of the technical programme. Authors are advised to complete registration after abstract acceptance."
      },
      {
        question: "3. Abstract Submission Guidelines",
        answer: "1. The abstract must be written in English and should not exceed 250 words.\n2. The title should be concise, informative, and reflect the content of the research.\n3. The abstract should include the names of all authors, their affiliations, and the email address of the presenting author.\n4. The body of the abstract must be structured to clearly state the objective, methodology, key results, and conclusion of the study.\n5. Do not include figures, tables, or references in the abstract.\n6. Ensure the content is original and has not been published or presented elsewhere.\n7. Abstracts should be submitted through the official conference portal or email provided by the organizers."
      },
      {
        question: "4. Mode of Presentation",
        answer: "Presentations can be made in Oral or Poster formats.\nThe organizing committee will review submitted abstracts and decide the appropriate mode of presentation (Oral or Poster) based on the quality of the research and relevance to the conference themes.\nThe final decision will be communicated to the authors."
      },
      {
        question: "5. Guidelines for Oral Presentations",
        answer: "Time Limit: Each presenter will be allotted a specific time (usually 7-8 minutes for presentation and 2-3 minutes for Q&A).\nFormat: Presentations should be in PowerPoint (.ppt or .pptx) format or PDF.\nContent: Slides should be clear, concise, and readable from a distance. Avoid overcrowding slides with text.\nDelivery: Presenters must join the designated session (physical or virtual) on time and ensure smooth technical setup prior to their slot."
      },
      {
        question: "6. Guidelines for Poster Presentations",
        answer: "Size: The standard size for physical posters is generally A0 (84.1 cm x 118.9 cm) in portrait orientation.\nVirtual Posters: If online, a 1-page PDF or a short 3-minute video presentation may be required.\nContent: Posters should have a clear flow, including Title, Authors, Introduction, Methodology, Results, Conclusion, and References. Use visual elements (charts, graphs, images) effectively.\nDisplay: Presenters are responsible for putting up and taking down their physical posters at the designated times."
      },
      {
        question: "7. Full Paper Submission (Optional/If Applicable)",
        answer: "Authors of accepted abstracts may be invited to submit full-length papers for publication in conference proceedings or a partnered journal.\nDetailed formatting guidelines and deadlines for full papers will be provided separately by the organizing committee."
      },
      {
        question: "8. Registration Policy",
        answer: "At least one author (the presenting author) must register for the conference to ensure the abstract is included in the programme and the abstract book.\nRegistration fees cover access to sessions, conference materials, and an e-certificate of presentation/participation."
      },
      {
        question: "9. Code of Conduct and Ethics",
        answer: "Plagiarism or unethical research practices will lead to immediate rejection.\nPresentations should respect diverse audiences and avoid offensive content."
      }
    ]
  },
  {
    category: "General FAQs",
    items: [
      {
        question: "1. Who can attend AFSTINFC-2026?",
        answer: "The conference is open to researchers, academicians, industry professionals, students, and anyone interested in the fields of Food Science, Technology, and Engineering."
      },
      {
        question: "2. Can I present my research online?",
        answer: "Yes, the conference supports both physical and online modes for presentations."
      },
      {
        question: "3. When will I know if my abstract is accepted?",
        answer: "Acceptance notifications will be sent out starting 5 October 2026, via email or the conference website."
      },
      {
        question: "4. Is on-the-spot registration available?",
        answer: "It is highly recommended to register online by 7 October 2026. On-the-spot registration may be limited and subject to availability."
      },
      {
        question: "5. Will I receive a certificate?",
        answer: "Yes, all registered participants and presenters will receive an e-certificate."
      },
      {
        question: "6. Can I submit more than one abstract?",
        answer: "Yes, you can submit multiple abstracts, but each must be registered separately if accepted for presentation."
      }
    ]
  }
];

export const AuthorGuidelinesFAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (categoryIdx: number, itemIdx: number) => {
    const key = `${categoryIdx}-${itemIdx}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section id="faqs" className="py-20 bg-stone-50 relative border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#E86024] bg-orange-100 border border-orange-200 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Information Hub</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight font-serif-editorial">
            Guidelines &amp; <span className="italic text-stone-500">FAQs</span>
          </h2>
          <div className="w-16 h-1 bg-[#E86024] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {FAQ_DATA.map((section, catIdx) => (
            <div key={catIdx} className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
                {catIdx === 0 ? <AlertCircle className="w-6 h-6 text-[#E86024]" /> : <HelpCircle className="w-6 h-6 text-[#580B1E]" />}
                <h3 className="text-2xl font-bold text-stone-900 font-heading">{section.category}</h3>
              </div>
              
              <div className="space-y-4">
                {section.items.map((item, idx) => {
                  const isOpen = openItems[`${catIdx}-${idx}`];
                  return (
                    <div key={idx} className="border border-stone-200 rounded-xl overflow-hidden transition-all duration-300">
                      <button
                        onClick={() => toggleItem(catIdx, idx)}
                        className="w-full flex items-center justify-between p-4 text-left bg-stone-50 hover:bg-stone-100 transition-colors"
                      >
                        <span className="font-bold text-stone-900 text-sm sm:text-base pr-4">
                          {item.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-stone-500 shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-stone-500 shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="p-4 bg-white border-t border-stone-200">
                          <p className="text-sm text-stone-600 leading-relaxed whitespace-pre-line">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
