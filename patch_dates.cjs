const fs = require('fs');
let data = fs.readFileSync('src/components/ImportantDates.tsx', 'utf8');

const oldNote = `        {/* Date Reminder Note */}
        <div className="mt-12 text-center text-xs text-orange-500 flex items-center justify-center gap-2">
          <Clock className="w-4 h-4 text-[#D4AF37]" />
          <span>All submitted abstracts undergo double-blind peer review by the national scientific committee.</span>
        </div>`;

const newNote = `        {/* Date Reminder Note */}
        <div className="mt-12 text-center text-xs text-orange-500 flex items-center justify-center gap-2">
          <Clock className="w-4 h-4 text-[#D4AF37]" />
          <span>All submitted abstracts undergo double-blind peer review by the national scientific committee.</span>
        </div>
        
        <div className="mt-4 text-center text-sm font-bold text-[#580B1E] bg-[#FEF3C7] inline-block px-6 py-2 rounded-full border border-amber-300 mx-auto table shadow-sm">
          🌟 Selected papers to be published in Scopus/SCIE/Web of Science indexed journal, special issue.
        </div>`;

data = data.replace(oldNote, newNote);

fs.writeFileSync('src/components/ImportantDates.tsx', data);
