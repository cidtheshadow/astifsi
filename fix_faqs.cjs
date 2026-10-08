const fs = require('fs');
let data = fs.readFileSync('src/components/AuthorGuidelinesFAQ.tsx', 'utf8');

const newFaqData = `const FAQ_DATA = [
  {
    category: "Author Guidelines",
    items: [
      {
        question: "1. Call for Research Papers",
        answer: "Researchers, faculty members, scientists, industry professionals, research scholars and students are invited to submit original research work for presentation at AFSTINFC-2026. The conference will provide opportunities for oral and poster presentations in both physical and online modes, subject to the final technical programme. Authors are requested to submit their abstracts according to the prescribed format and within the specified deadline."
      },
      {
        question: "2. Important Dates",
        answer: "Abstract Submission: 4 October 2026\\nAbstract Acceptance / Intimation: 5 October 2026*\\nRegistration: 7 October 2026\\nPresentation Confirmation: After acceptance and registration\\nDetailed Presentation Programme: One day before the conference\\nConference: 15–16 October 2026\\nAbstract Book: To be released electronically\\n*The Organizing Committee may communicate acceptance/selection status through email/website as per the finalization of the technical programme. Authors are advised to complete registration after abstract acceptance."
      },
      {
        question: "3. Abstract Submission Guidelines",
        answer: "1. The abstract must be written in English and should not exceed 250 words.\\n2. The title should be concise, informative, and reflect the content of the research.\\n3. The abstract should include the names of all authors, their affiliations, and the email address of the presenting author.\\n4. The body of the abstract must be structured to clearly state the objective, methodology, key results, and conclusion of the study.\\n5. Do not include figures, tables, or references in the abstract.\\n6. Ensure the content is original and has not been published or presented elsewhere.\\n7. Abstracts should be submitted through the official conference portal or email provided by the organizers."
      },
      {
        question: "4. Mode of Presentation",
        answer: "Presentations can be made in Oral or Poster formats.\\nThe organizing committee will review submitted abstracts and decide the appropriate mode of presentation (Oral or Poster) based on the quality of the research and relevance to the conference themes.\\nThe final decision will be communicated to the authors."
      }
    ]
  }
];`;

data = data.replace(/const FAQ_DATA = \[\s*\{\s*category: "Author Guidelines",[\s\S]*?\}\s*\];/m, newFaqData);

// also let's change grid to 1 column since there's only 1 category now
data = data.replace('grid-cols-1 lg:grid-cols-2', 'grid-cols-1');

fs.writeFileSync('src/components/AuthorGuidelinesFAQ.tsx', data);
