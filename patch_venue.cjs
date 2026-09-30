const fs = require('fs');
let data = fs.readFileSync('src/components/VenueLocation.tsx', 'utf8');

const oldHeading = `<h2 className="text-3xl sm:text-5xl font-bold text-[#580B1E] tracking-tight font-display-hero">
              About SLIET Longowal &amp; Location Map
            </h2>`;

const newHeading = `<h2 className="text-3xl sm:text-5xl font-bold text-[#580B1E] tracking-tight font-display-hero">
              <a href="https://sliet.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#6B0F24] transition-colors decoration-[#D4AF37] underline-offset-8">
                About SLIET Longowal
              </a> &amp; Location Map
            </h2>`;

data = data.replace(oldHeading, newHeading);

fs.writeFileSync('src/components/VenueLocation.tsx', data);
