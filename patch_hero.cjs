const fs = require('fs');
let data = fs.readFileSync('src/components/Hero.tsx', 'utf8');

const oldDesc = `<p className="text-xs sm:text-sm text-[#52373D] max-w-xl leading-relaxed">
              Jointly organised by <strong className="text-[#580B1E] font-semibold">AFSTI Longowal Chapter</strong> &amp; <strong className="text-[#580B1E] font-semibold">Department of Food Engineering and Technology</strong>, Sant Longowal Institute of Engineering and Technology (SLIET), Longowal, Punjab.
            </p>`;

const newDesc = `<p className="text-xs sm:text-sm text-[#52373D] max-w-xl leading-relaxed">
              Jointly organised by <strong className="text-[#580B1E] font-semibold">AFSTI Longowal Chapter</strong> &amp; <strong className="text-[#580B1E] font-semibold">Department of Food Engineering and Technology</strong>, Sant Longowal Institute of Engineering and Technology (SLIET), Longowal, Punjab.
            </p>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FEF3C7] border border-[#F59E0B] shadow-sm text-sm font-semibold text-[#580B1E] max-w-xl">
              🌟 Selected papers to be published in Scopus/SCIE/Web of Science indexed journal, special issue.
            </div>`;

data = data.replace(oldDesc, newDesc);
fs.writeFileSync('src/components/Hero.tsx', data);
