const fs = require('fs');
let data = fs.readFileSync('src/data/conferenceData.ts', 'utf8');

// Remove from FocusAreas
data = data.replace(/  \},\n  \{\n    name: "Prof\. Paras Sharma",\n    designation: "Professor and Head, Department of Food Technology",\n    affiliation: "Mizoram University",\n    location: "Aizawl, Mizoram, India",\n    image: "\/speakers\/prof-paras-sharma\.png",\n    avatarInitials: "PS"\n  \}\n\];/, '  }\n];');

// Add to Speakers
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

data = data.replace(/avatarInitials: "BJ"\n  \}\n\];/, 'avatarInitials: "BJ"\n' + newSpeaker);

fs.writeFileSync('src/data/conferenceData.ts', data);
