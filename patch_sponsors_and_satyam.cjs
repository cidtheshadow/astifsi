const fs = require('fs');
let data = fs.readFileSync('src/data/conferenceData.ts', 'utf8');

// Update Satyam Gupta
data = data.replace(
  /name: "Satyam Gupta",\n\s*designation: "Associate director",/,
  `name: "Mr. Satyam Gupta",\n    designation: "Associate Director",`
);

// Append sponsors
const newSponsors = `  },
  {
    name: "Alumni GFT-1998",
    role: "Sponsor",
    description: "Alumni Batch of GFT-1998 supporting the conference.",
    logo: "/sponsors/alumni-gft-1998.png"
  },
  {
    name: "Puja Science House",
    role: "Sponsor",
    description: "Supporting scientific research and education.",
    logo: "/sponsors/puja-science-house.png"
  },
  {
    name: "Coca-Cola",
    role: "Sponsor",
    description: "Refreshing the world and making a difference.",
    logo: "/sponsors/coca-cola.png"
  },
  {
    name: "LABCO INDIA",
    role: "Sponsor",
    description: "Providing high quality laboratory equipment.",
    logo: "/sponsors/labco-india.png"
  }
];`;

data = data.replace(/badge: "Host Institution"\n  \}\n\];/, 'badge: "Host Institution"\n' + newSponsors);

fs.writeFileSync('src/data/conferenceData.ts', data);
