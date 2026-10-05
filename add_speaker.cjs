const fs = require('fs');
let data = fs.readFileSync('src/data/conferenceData.ts', 'utf8');

const newSpeaker = `  {
    name: "Dr. Bhaskar Jyoti",
    designation: "Director - International Relations (Resource & Business Development) | Head of IPR Cell",
    affiliation: "Mahakaushal University",
    location: "Jabalpur, Madhya Pradesh, India",
    image: "/speakers/dr-bhaskar-jyoti.png",
    avatarInitials: "BJ",
    bio: "A seasoned Food Technologist with IIMBx certification... Currently serving as Director – International Relations, leading strategic collaborations, facilitating Technology Transfer (ToT) initiatives, and enabling MoUs at national and international levels."
  },
];`;

data = data.replace(/\];\s*$/, newSpeaker);
fs.writeFileSync('src/data/conferenceData.ts', data);
