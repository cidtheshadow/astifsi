import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const guidelinesData = [
  {
    "title": "1. Call for Research Papers",
    "content": [
      "Researchers, faculty members, scientists, industry professionals, research scholars and students are invited to submit original research work for presentation at AFSTINFC-2026.",
      "The conference will provide opportunities for oral and poster presentations in both physical and online modes, subject to the final technical programme.",
      "Authors are requested to submit their abstracts according to the prescribed format and within the specified deadline.",
      ""
    ]
  },
  {
    "title": "2. Important Dates",
    "content": [
      "Activity | Date",
      "Abstract Submission | 4 October 2026",
      "Abstract Acceptance / Intimation | 5 October 2026*",
      "Registration | 7 October 2026",
      "Presentation Confirmation | After acceptance and registration",
      "Detailed Presentation Programme | One day before the conference",
      "Conference | 15–16 October 2026",
      "Abstract Book | To be released electronically",
      "*The Organizing Committee may communicate acceptance/selection status through email/website as per the finalization of the technical programme.",
      "Authors are advised to complete registration promptly after acceptance and before the final presentation schedule is prepared.",
      ""
    ]
  },
  {
    "title": "3. Types of Presentation",
    "content": [
      "The conference will accept:",
      "- Oral presentations",
      "- Poster presentations",
      "- Online oral presentations",
      "- Online poster presentations",
      "The final mode and category of presentation will be decided by the Technical/Scientific Committee based on the submitted abstract and conference programme.",
      "Important: Submission of an abstract does not guarantee an oral presentation. The Technical Committee reserves the right to assign an accepted paper to either oral or poster presentation.",
      ""
    ]
  },
  {
    "title": "4. Registration Policy",
    "content": [
      "Registration is per participant, not per paper.",
      "- One registered participant can present one paper only.",
      "- A separate registration is not required for every co-author.",
      "- Only the presenting author is required to register if the other co-authors are not attending the conference.",
      "- If another co-author wishes to attend the conference as a participant, that person may register separately.",
      "- A faculty mentor, supervisor or fellow researcher may be included as a co-author without registration if the student is the presenting author and the co-author is not attending the conference.",
      "- The presenting author must complete registration before the paper is included in the final conference programme.",
      ""
    ]
  },
  {
    "title": "5. Student–Faculty Mentor Papers",
    "content": [
      "Postgraduate students are encouraged to submit research papers jointly with their supervisors/mentors.",
      "A student may present a paper having:",
      "- Student + Supervisor",
      "- Student + Faculty Mentor",
      "- Multiple co-authors",
      "However, only the presenting author needs to register if the other authors are not attending the conference.",
      "The presenting author must be clearly identified in the abstract submission.",
      ""
    ]
  },
  {
    "title": "6. Abstract Submission Guidelines",
    "content": [
      "All abstracts should be submitted through the prescribed submission procedure provided on the conference website.",
      "Abstract specifications",
      "Parameter | Requirement",
      "Maximum length | 300 words",
      "Font | Times New Roman",
      "Main text size | 12 pt",
      "Title/section headings | Times New Roman, 14 pt",
      "Keywords | 3–7 keywords",
      "Language | English",
      "Submission | As per online submission procedure",
      "Originality | The work should be original and scientifically relevant",
      "Recommended Abstract Structure",
      "The abstract should preferably contain the following information:",
      "Title of the Paper",
      "Author Name(s) (Presenting author should be clearly identified, preferably with an asterisk (*).)",
      "Affiliation(s) (Department, Institution/University, City, State, Country)",
      "Corresponding Author (Email address)",
      "Abstract",
      "The abstract should briefly cover:",
      "- Background/rationale",
      "- Objective",
      "- Materials and methods",
      "- Major results/findings",
      "- Conclusion/significance",
      "Keywords: 3–7 relevant keywords",
      "",
      "Example author format:",
      "Formulation and Characterization of a Novel Functional Food Product",
      "Navdeep Kumar¹*, Riya Sharma¹ and A. B. Singh²*",
      "¹Department of Food Technology, XYZ University, Punjab, India",
      "²Department of Food Science, ABC University, Haryana, India",
      "*Presenting Author",
      "Keywords: Functional food; Food formulation; Antioxidants; Sensory evaluation; Food technology",
      ""
    ]
  },
  {
    "title": "7. Originality of Submitted Work",
    "content": [
      "Authors are requested to ensure that:",
      "- The submitted work is original.",
      "- The abstract has not been submitted with substantially identical content to another presentation at the conference.",
      "- Appropriate acknowledgement is provided for funding and institutional support.",
      "- All authors have approved the submitted abstract.",
      "- Ethical approval, where applicable, has been obtained before submission.",
      "The corresponding/presenting author will be responsible for ensuring the accuracy of the information submitted.",
      ""
    ]
  },
  {
    "title": "8. Abstract Acceptance",
    "content": [
      "All submitted abstracts will be evaluated by the Technical/Scientific Committee.",
      "The Technical Committee reserves the right to:",
      "- Accept an abstract for oral presentation;",
      "- Accept an abstract for poster presentation;",
      "- Assign a different technical session/theme; or",
      "- Decline an abstract if it does not meet the conference requirements.",
      "Acceptance of an abstract does not automatically guarantee oral presentation.",
      ""
    ]
  },
  {
    "title": "9. Oral Presentation Guidelines",
    "content": [
      "Presentation duration",
      "Each oral presentation will be allotted approximately: 5–10 minutes for presentation + 2–3 minutes for Q&A/discussion. 15–20 slides are recommended, but presenters should prioritize clarity rather than the number of slides. Presenters are strongly advised to keep their presentation within the allotted time. The session chair may interrupt a presentation if it substantially exceeds the allotted time.",
      ""
    ]
  },
  {
    "title": "10. Presentation File Format",
    "content": [
      "Presentations should preferably be prepared in:",
      "- Microsoft PowerPoint (.ppt/.pptx) or",
      "- PDF format",
      "Recommended specifications",
      "- Aspect ratio: 16:9",
      "- Font: Preferably Arial, Calibri or Times New Roman",
      "- Minimum font size: 24 pt for normal text",
      "- Use high-resolution figures and graphs.",
      "- Avoid excessive text on individual slides.",
      "- Use clearly labelled axes, units and legends in graphs.",
      "- Ensure that tables are readable on screen.",
      "Suggested file naming format",
      "AFSTINFC2026_SerialNo_Surname_FirstAuthor.pptx",
      "Example:",
      "AFSTINFC2026_025_Sharma.pptx",
      ""
    ]
  },
  {
    "title": "11. Online Presentation Guidelines",
    "content": [
      "AFSTINFC-2026 is being organized in Hybrid Mode.",
      "Online oral and poster presentations will be permitted for authors whose abstracts have been accepted for online presentation.",
      "Online platform",
      "Online presentations will be conducted through:",
      "Google Meet / Zoom",
      "The final platform and meeting link will be communicated to registered presenting authors before the conference.",
      "Online presenters should:",
      "- Join the meeting at least 15 minutes before the scheduled session.",
      "- Use a stable high-speed internet connection.",
      "- Keep the presentation file ready on the computer.",
      "- Use a functional microphone and camera.",
      "- Use headphones/earphones wherever possible.",
      "- Keep the microphone muted when not speaking.",
      "- Display their institutional affiliation during the presentation.",
      "- Follow the instructions of the session chair/coordinator.",
      "- Remain available for the Q&A session after the presentation.",
      "Technical recommendation",
      "Presenters are strongly advised to keep a backup copy of their presentation in PDF format and on a second device/cloud storage.",
      "The Organizing Committee will not be responsible for presentation delays arising from the presenter's internet connectivity, hardware or software problems.",
      ""
    ]
  },
  {
    "title": "12. Online Poster Presentation",
    "content": [
      "Authors assigned online poster presentation should prepare a single-page digital poster in PDF format.",
      "Recommended size:",
      "A1 portrait orientation",
      "The poster should include:",
      "- Title",
      "- Author(s)",
      "- Affiliation",
      "- Background",
      "- Objectives",
      "- Methodology",
      "- Results",
      "- Conclusion",
      "- Key references",
      "- Acknowledgements",
      "Detailed instructions regarding submission/display of online posters will be communicated to selected presenters.",
      ""
    ]
  },
  {
    "title": "13. Presentation Schedule",
    "content": [
      "The detailed technical programme and presentation schedule will be finalized after completion of abstract evaluation and registration.",
      "The detailed presentation schedule will be released approximately one day before the conference.",
      "Presenters should regularly check their registered email address and the conference website for updates.",
      ""
    ]
  },
  {
    "title": "14. Full Paper Submission",
    "content": [
      "Full paper submission is NOT mandatory for conference participation.",
      "Authors may participate and present their accepted research work based on the submitted abstract.",
      "A full research paper is not required for inclusion in the conference abstract book unless specifically requested by the Organizing Committee for a publication opportunity.",
      "Authors interested in publication of their complete research work may submit a full paper when invited/required under the separate publication guidelines.",
      ""
    ]
  },
  {
    "title": "15. Publication Opportunity",
    "content": [
      "A soft copy of the AFSTINFC-2026 Conference Abstract Book will be prepared/released containing the accepted abstracts, subject to the finalization of the conference programme.",
      "Selected research papers",
      "Approximately 25 selected papers from the conference may be considered for publication in suitable Scopus/Web of Science indexed journals, subject to:",
      "- Scientific quality",
      "- Relevance to the journal scope",
      "- Editorial screening",
      "- Peer review",
      "- Compliance with journal requirements",
      "- Final acceptance by the concerned journal",
      "Important: Presentation at AFSTINFC-2026 does not guarantee publication in a Scopus/WoS-indexed journal.",
      "Selection for journal publication will be independent of conference presentation and will be subject to the policies and peer-review procedures of the respective journal.",
      "Journal name(s), submission procedure, manuscript format and publication-related details will be communicated separately to eligible/selected authors.",
      ""
    ]
  },
  {
    "title": "16. Conference Abstract Book",
    "content": [
      "The accepted abstracts will be compiled into a digital/soft-copy Conference Abstract Book.",
      "Authors should carefully check:",
      "- Title",
      "- Author names",
      "- Affiliation",
      "- Email address",
      "- Keywords",
      "- Abstract text",
      "before final submission.",
      "The Organizing Committee may not be able to correct errors in author names or affiliations after the abstract book has been finalized.",
      ""
    ]
  },
  {
    "title": "17. Registration Fee and Payment",
    "content": [
      "Registration is per participant and not per paper.",
      "The applicable registration fee will depend upon the participant category and AFST(I) membership status, as specified on the registration page.",
      "Payment modes",
      "Payment may be made through: UPI/UPI QR/Scanner/Net Banking",
      "Participants should retain the payment transaction/reference details for future correspondence.",
      "Refund policy",
      "Registration fees once paid are non-refundable.",
      "Participants are therefore advised to verify their category and registration details carefully before making payment.",
      ""
    ]
  },
  {
    "title": "18. Registration and Presentation Eligibility",
    "content": [
      "An accepted paper will be included in the final conference programme only when:",
      "- The abstract has been accepted;",
      "- The presenting author has completed registration;",
      "- The required registration details have been submitted;",
      "- Presentation confirmation has been completed, wherever required.",
      "Important",
      "At least one presenting author must be a registered participant.",
      "If the presenting author fails to complete registration within the stipulated period, the Organizing Committee may withdraw the paper from the final programme.",
      ""
    ]
  },
  {
    "title": "19. Certificate Policy",
    "content": [
      "A certificate will be issued to the registered presenting author.",
      "The certificate will contain:",
      "- Name of the presenting author",
      "- Title of the research paper",
      "- Names of co-authors",
      "- Conference details",
      "- Presentation category, wherever applicable",
      "Important",
      "Co-authors who have not registered/attended the conference will not receive separate participation/presentation certificates merely by virtue of being listed as co-authors.",
      ""
    ]
  },
  {
    "title": "20. Change of Presenting Author",
    "content": [
      "If the registered presenting author is unable to present the paper, another registered co-author may be permitted to present the paper, subject to prior approval from the Organizing Committee.",
      "Such requests should be communicated to the Organizing Committee sufficiently in advance.",
      "The replacement presenter must satisfy the applicable registration requirements.",
      ""
    ]
  },
  {
    "title": "21. Withdrawal of Paper",
    "content": [
      "Authors wishing to withdraw an accepted abstract should inform the Organizing Committee as early as possible.",
      "Once the abstract has been included in the final abstract book/programme, withdrawal may not be possible.",
      "Registration fees are non-refundable in case of withdrawal.",
      ""
    ]
  },
  {
    "title": "22. Questions Frequently Asked by Authors",
    "content": [
      "Q1. Can a student and faculty mentor submit one paper together?",
      "Yes. A student and faculty mentor may submit one research paper as co-authors.",
      "Q2. Does every author have to register?",
      "No. Only the presenting author needs to register if other co-authors are not attending the conference.",
      "Q3. Can my supervisor be a co-author without registration?",
      "Yes. A faculty mentor/supervisor may remain a co-author without registration if the student is the registered presenting author and the mentor is not attending the conference.",
      "Q4. Can one registration be used for two papers?",
      "No. One registered participant can present one paper only.",
      "Q5. Can I present my paper online?",
      "Yes. Online oral and poster presentations are permitted under the hybrid conference format.",
      "Q6. Which platform will be used for online presentations?",
      "Online presentations will be conducted through Google Meet/Zoom. The final meeting link and instructions will be provided to registered presenters.",
      "Q7. How much time is available for an oral presentation?",
      "Approximately 5–10 minutes for presentation followed by 2–3 minutes for questions and discussion.",
      "Q8. When will I know my presentation time?",
      "The detailed presentation programme will be released approximately one day before the conference.",
      "Q9. Will every accepted abstract receive an oral presentation?",
      "Not necessarily. The Technical Committee reserves the right to assign an accepted paper to oral or poster presentation.",
      "Q10. Is full-paper submission compulsory?",
      "No. Full-paper submission is not mandatory for conference participation or presentation.",
      "Q11. Will my abstract be published?",
      "Accepted abstracts will be considered for inclusion in the AFSTINFC-2026 digital Conference Abstract Book.",
      "Q12. Is journal publication guaranteed?",
      "No. Approximately 25 selected papers may be considered for submission to suitable Scopus/WoS-indexed journals. Final publication will depend upon editorial screening and peer review.",
      "Q13. Will I receive a certificate if I am a co-author but do not register?",
      "No. The certificate will be issued to the registered presenting author, with the paper title and co-author names mentioned on the certificate.",
      "Q14. Can I get a refund if I cannot attend?",
      "No. Registration fees are non-refundable.",
      "Q15. What should I do if I face technical problems during an online presentation?",
      "Contact the designated conference technical/session coordinator immediately. Presenters should also keep a backup PDF of their presentation and ensure a stable internet connection.",
      ""
    ]
  },
  {
    "title": "23. Author Checklist",
    "content": [
      "Before submitting your abstract, please ensure that:",
      "- The title is concise and relevant.",
      "- All authors are correctly listed.",
      "- The presenting author is clearly identified.",
      "- Affiliations are complete and accurate.",
      "- The abstract is within 300 words.",
      "- There are 3–7 keywords.",
      "- The abstract follows the prescribed formatting.",
      "- The presenting author has an active email address.",
      "- The appropriate conference theme/session has been selected.",
      "After acceptance:",
      "- Complete registration.",
      "- Retain the payment receipt/transaction ID.",
      "- Confirm presentation participation.",
      "- Prepare the PPT/PDF presentation.",
      "- Keep presentation within the allotted time.",
      "- Check the final programme.",
      "- Online presenters should test their internet, microphone and camera.",
      "- Join the online session at least 15 minutes before the scheduled time.",
      ""
    ]
  },
  {
    "title": "24. Important Disclaimer",
    "content": [
      "The Organizing Committee reserves the right to modify the technical programme, presentation schedule, session allocation, presentation mode and other conference arrangements when necessary.",
      "Any such changes will be communicated through the conference website and/or registered email addresses.",
      "Decisions of the Technical/Scientific Committee regarding acceptance and allocation of oral/poster presentations will be final."
    ]
  }
];

export const AuthorGuidelinesFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="guidelines-faq" className="py-20 bg-stone-50 relative overflow-hidden border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E86024] bg-orange-100 px-3.5 py-1 rounded-full border border-orange-200">
            Information & Rules
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-stone-900 mt-4 font-serif-editorial">
            Author Guidelines <span className="italic text-stone-500">& FAQs</span>
          </h2>
          <div className="w-16 h-1 bg-[#E86024] mx-auto mt-4 rounded-full" />
        </div>

        <div className="space-y-3">
          {guidelinesData.map((item, index) => (
            <div key={index} className="bg-white border border-stone-200 rounded-xl shadow-xs overflow-hidden">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-stone-50 transition-colors focus:outline-none"
              >
                <span className="font-bold text-stone-900 pr-4">{item.title}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-stone-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-stone-500 shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5 text-sm text-stone-600 leading-relaxed whitespace-pre-wrap">
                  {item.content.join('\n')}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
