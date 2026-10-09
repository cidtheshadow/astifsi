const fs = require('fs');
let data = fs.readFileSync('src/data/conferenceData.ts', 'utf8');

const paras = `  },
  {
    name: "Prof. Paras Sharma",
    designation: "Professor and Head, Department of Food Technology",
    affiliation: "Mizoram University",
    location: "Aizawl, Mizoram, India",
    image: "/speakers/prof-paras-sharma.png",
    avatarInitials: "PS"
  }
];`;

data = data.replace(/avatarInitials:\s*"BJ"\s*\}\s*,\s*\];/, 'avatarInitials: "BJ"\n' + paras);

fs.writeFileSync('src/data/conferenceData.ts', data);
