const fs = require('fs');
let data = fs.readFileSync('src/data/conferenceData.ts', 'utf8');

// Update Dr. Bhaskar Jyoti
data = data.replace(
  /name: "Dr. Bhaskar Jyoti",[\s\S]*?avatarInitials: "BJ",[\s\S]*?\}/,
  `name: "Dr. Bhaskar Jyoti",
    designation: "Head IPR Cell, Assistant Professor- Food Science & Technology (Ag)",
    affiliation: "Mahakaushal University",
    location: "Jabalpur, Madhya Pradesh, India",
    image: "/speakers/dr-bhaskar-jyoti.png",
    avatarInitials: "BJ"
  }`
);

// Append Prof. Paras Sharma
const newSpeaker = `  },
  {
    name: "Prof. Paras Sharma",
    designation: "Professor and Head, Department of Food Technology",
    affiliation: "Mizoram University",
    location: "Aizawl, Mizoram, India",
    image: "/speakers/prof-paras-sharma.png",
    avatarInitials: "PS"
  }
];`;
data = data.replace(/  \}\n\];/s, newSpeaker);

fs.writeFileSync('src/data/conferenceData.ts', data);
